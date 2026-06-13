"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type TrackItem = {
  id: string;
  album_id: string | null;
  title: string;
  slug: string;
  description: string;
  status: string;
  track_number: number | null;
  embed_url: string | null;
};

type AlbumOption = {
  id: string;
  title: string;
};

type TrackDraft = {
  albumId: string;
  title: string;
  slug: string;
  description: string;
  trackNumber: string;
  embedUrl: string;
  status: string;
};

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createDraft(track: TrackItem): TrackDraft {
  return {
    albumId: track.album_id ?? "",
    title: track.title,
    slug: track.slug,
    description: track.description,
    trackNumber: String(track.track_number ?? 1),
    embedUrl: track.embed_url ?? "",
    status: track.status,
  };
}

function getTrackReadiness(track: Pick<TrackItem, "title" | "slug" | "album_id" | "track_number" | "embed_url">) {
  const issues = [
    !track.title.trim() ? "title is missing" : "",
    !track.slug.trim() ? "slug is missing" : "",
    !track.album_id ? "album assignment is missing" : "",
    !track.track_number || track.track_number < 1 ? "track number is missing" : "",
    !track.embed_url?.trim() ? "embed URL is missing" : "",
  ].filter(Boolean);

  return { isReady: issues.length === 0, issues };
}

function getDraftReadiness(draft: TrackDraft) {
  return getTrackReadiness({
    title: draft.title,
    slug: draft.slug,
    album_id: draft.albumId || null,
    track_number: Number(draft.trackNumber || "0"),
    embed_url: draft.embedUrl,
  });
}

export function TrackList() {
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  const [albums, setAlbums] = useState<AlbumOption[]>([]);
  const [draft, setDraft] = useState<TrackDraft | null>(null);
  const [editingTrackId, setEditingTrackId] = useState("");
  const [savingTrackId, setSavingTrackId] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadTracks = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [trackResult, albumResult] = await Promise.all([
      supabase
        .from("tracks")
        .select("id,album_id,title,slug,description,status,track_number,embed_url")
        .order("created_at", { ascending: false })
        .limit(30),
      supabase
        .from("albums")
        .select("id,title")
        .order("created_at", { ascending: false })
        .limit(200),
    ]);

    const error = trackResult.error ?? albumResult.error;

    if (error) {
      setMessage(error.message);
    } else {
      setTracks((trackResult.data ?? []) as TrackItem[]);
      setAlbums((albumResult.data ?? []) as AlbumOption[]);
    }

    setIsLoading(false);
  }, []);

  function startEditing(track: TrackItem) {
    setEditingTrackId(track.id);
    setDraft(createDraft(track));
    setMessage("");
  }

  function cancelEditing() {
    setEditingTrackId("");
    setDraft(null);
  }

  function updateDraft(field: keyof TrackDraft, value: string) {
    setDraft((current) => (current ? { ...current, [field]: value } : current));
  }

  function handleDraftTitle(value: string) {
    setDraft((current) => (current ? { ...current, title: value, slug: current.slug ? current.slug : toSlug(value) } : current));
  }

  async function saveTrack(track: TrackItem) {
    if (!draft) return;

    const trackNumber = Number(draft.trackNumber || "1");
    if (!Number.isFinite(trackNumber) || trackNumber < 1) {
      setMessage("Track number must be 1 or higher.");
      return;
    }

    if (!draft.title.trim() || !draft.slug.trim()) {
      setMessage("Title and slug are required.");
      return;
    }

    const draftReadiness = getDraftReadiness(draft);
    if (draft.status === "published" && !draftReadiness.isReady) {
      setMessage(`Cannot publish ${draft.title}: ${draftReadiness.issues.join(", ")}.`);
      return;
    }

    setSavingTrackId(track.id);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setSavingTrackId("");
      return;
    }

    const { error } = await supabase
      .from("tracks")
      .update({
        album_id: draft.albumId || null,
        title: draft.title.trim(),
        slug: toSlug(draft.slug),
        description: draft.description.trim(),
        track_number: trackNumber,
        embed_url: draft.embedUrl.trim() || null,
        status: draft.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", track.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(`${draft.title.trim()} saved.`);
      cancelEditing();
      await loadTracks();
    }

    setSavingTrackId("");
  }

  async function setTrackStatus(track: TrackItem, status: "draft" | "published" | "archived") {
    const readiness = getTrackReadiness(track);
    if (status === "published" && !readiness.isReady) {
      setMessage(`Cannot publish ${track.title}: ${readiness.issues.join(", ")}.`);
      return;
    }

    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    setSavingTrackId(track.id);
    setMessage("");

    const { error } = await supabase
      .from("tracks")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", track.id);

    if (error) {
      setMessage(error.message);
    } else {
      const label = status === "published" ? "published" : status === "draft" ? "moved to draft" : "archived";
      setMessage(`${track.title} ${label}.`);
      await loadTracks();
    }

    setSavingTrackId("");
  }

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadTracks();
    });
  }, [loadTracks]);

  const readinessSummary = useMemo(() => {
    return tracks.reduce(
      (summary, track) => {
        const readiness = getTrackReadiness(track);
        return {
          ready: summary.ready + (readiness.isReady ? 1 : 0),
          review: summary.review + (readiness.isReady ? 0 : 1),
        };
      },
      { ready: 0, review: 0 },
    );
  }, [tracks]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Tracks</p>
          <h2 className="mt-4 text-3xl">Recent tracks</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{readinessSummary.ready} ready / {readinessSummary.review} need review.</p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadTracks}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading tracks...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {tracks.map((track) => {
          const isEditing = editingTrackId === track.id && draft;
          const isSaving = savingTrackId === track.id;
          const readiness = getTrackReadiness(track);
          const publishBlockReason = readiness.issues.join(", ");

          return (
            <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={track.id}>
              <div className={`rounded-2xl border p-4 ${readiness.isReady ? "border-[rgba(42,166,161,0.65)] bg-[rgba(16,74,72,0.22)]" : "border-[rgba(216,168,79,0.65)] bg-[rgba(81,63,24,0.24)]"}`}>
                <p className="gold-text text-xs uppercase tracking-[0.25em]">{readiness.isReady ? "Ready to publish" : "Review before publishing"}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">
                  {readiness.isReady ? "Track has album assignment, numbering, slug, and embed URL." : `Needs: ${publishBlockReason}.`}
                </p>
              </div>

              <p className="gold-text mt-5 text-xs uppercase tracking-[0.25em]">Track {track.track_number ?? "-"} - {track.status}</p>
              <h3 className="mt-3 text-2xl">{track.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-silver)]">/{track.slug}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{track.description || "No track description yet."}</p>
              {track.embed_url ? <p className="mt-2 text-xs text-[var(--muted-silver)]">Embed attached</p> : <p className="mt-2 text-xs text-[var(--muted-silver)]">No embed URL yet</p>}

              {isEditing ? (
                <div className="mt-5 grid gap-4 rounded-2xl border border-[rgba(216,168,79,0.22)] p-4">
                  <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.albumId} onChange={(event) => updateDraft("albumId", event.target.value)}>
                    <option value="">No album selected</option>
                    {albums.map((album) => <option key={album.id} value={album.id}>{album.title}</option>)}
                  </select>
                  <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.title} onChange={(event) => handleDraftTitle(event.target.value)} placeholder="Title" />
                  <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.slug} onChange={(event) => updateDraft("slug", toSlug(event.target.value))} placeholder="Slug" />
                  <textarea className="min-h-28 rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.description} onChange={(event) => updateDraft("description", event.target.value)} placeholder="Description" />
                  <div className="grid gap-4 md:grid-cols-3">
                    <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.trackNumber} onChange={(event) => updateDraft("trackNumber", event.target.value)} inputMode="numeric" placeholder="Track #" />
                    <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.status} onChange={(event) => updateDraft("status", event.target.value)}>
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                    <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.embedUrl} onChange={(event) => updateDraft("embedUrl", event.target.value)} placeholder="Embed URL" />
                  </div>
                  {draft.status === "published" && !getDraftReadiness(draft).isReady ? <p className="text-sm leading-6 text-[var(--muted-silver)]">Publishing guard: {getDraftReadiness(draft).issues.join(", ")}</p> : null}
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="button" onClick={() => saveTrack(track)} disabled={isSaving}>
                      {isSaving ? "Saving..." : "Save Track"}
                    </button>
                    <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={cancelEditing}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => (isEditing ? cancelEditing() : startEditing(track))}>
                  {isEditing ? "Close Edit" : "Edit Track"}
                </button>
                {track.status === "draft" ? (
                  <button className="rounded-full border border-[rgba(42,166,161,0.65)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:cursor-not-allowed disabled:opacity-50" type="button" onClick={() => setTrackStatus(track, "published")} disabled={!readiness.isReady || isSaving} title={readiness.isReady ? "Publish track" : publishBlockReason}>
                    {isSaving ? "Saving..." : "Publish"}
                  </button>
                ) : null}
                {track.status === "published" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => setTrackStatus(track, "draft")} disabled={isSaving}>
                    {isSaving ? "Saving..." : "Move to Draft"}
                  </button>
                ) : null}
                {track.status === "archived" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => setTrackStatus(track, "draft")} disabled={isSaving}>
                    {isSaving ? "Saving..." : "Restore Draft"}
                  </button>
                ) : null}
                {track.status !== "archived" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => setTrackStatus(track, "archived")} disabled={isSaving}>
                    {isSaving ? "Saving..." : "Archive"}
                  </button>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
