"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { AlbumQuickEditor, EditableAlbum } from "./album-quick-editor";

type TrackSummary = {
  id: string;
  album_id: string | null;
  title: string;
  status: string;
  embed_url: string | null;
};

function getAlbumTracks(albumId: string, tracks: TrackSummary[]) {
  return tracks.filter((track) => track.album_id === albumId);
}

function getAlbumReadiness(album: EditableAlbum, tracks: TrackSummary[]) {
  const albumTracks = getAlbumTracks(album.id, tracks);
  const publishedTracks = albumTracks.filter((track) => track.status === "published");
  const issues = [
    !album.title.trim() ? "title is missing" : "",
    !album.slug.trim() ? "slug is missing" : "",
    !album.description.trim() ? "description is missing" : "",
    !album.cover_image_url ? "cover image is missing" : "",
    album.cover_image_url && !album.cover_alt_text?.trim() ? "cover alt text is missing" : "",
    albumTracks.length === 0 ? "tracks are missing" : "",
    albumTracks.length > 0 && publishedTracks.length === 0 ? "no published tracks are ready" : "",
  ].filter(Boolean);

  return {
    isReady: issues.length === 0,
    issues,
    trackCount: albumTracks.length,
    publishedTrackCount: publishedTracks.length,
  };
}

export function AlbumList() {
  const [albums, setAlbums] = useState<EditableAlbum[]>([]);
  const [tracks, setTracks] = useState<TrackSummary[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [editingAlbumId, setEditingAlbumId] = useState("");

  const loadAlbums = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [albumResult, trackResult] = await Promise.all([
      supabase
        .from("albums")
        .select("id,title,subtitle,slug,description,cover_image_url,cover_alt_text,status")
        .order("created_at", { ascending: false })
        .limit(20),
      supabase
        .from("tracks")
        .select("id,album_id,title,status,embed_url")
        .limit(500),
    ]);

    const error = albumResult.error ?? trackResult.error;

    if (error) {
      setMessage(error.message);
    } else {
      setAlbums((albumResult.data ?? []) as EditableAlbum[]);
      setTracks((trackResult.data ?? []) as TrackSummary[]);
    }

    setIsLoading(false);
  }, []);

  async function setAlbumStatus(album: EditableAlbum, status: "draft" | "published" | "archived") {
    const readiness = getAlbumReadiness(album, tracks);
    if (status === "published" && !readiness.isReady) {
      setMessage(`Cannot publish ${album.title}: ${readiness.issues.join(", ")}.`);
      return;
    }

    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("albums")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", album.id);

    if (error) {
      setMessage(error.message);
    } else {
      const label = status === "published" ? "published" : status === "draft" ? "moved to draft" : "archived";
      setMessage(`${album.title} ${label}.`);
      await loadAlbums();
    }
  }

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadAlbums();
    });
  }, [loadAlbums]);

  const readinessSummary = useMemo(() => {
    return albums.reduce(
      (summary, album) => {
        const readiness = getAlbumReadiness(album, tracks);
        return {
          ready: summary.ready + (readiness.isReady ? 1 : 0),
          review: summary.review + (readiness.isReady ? 0 : 1),
        };
      },
      { ready: 0, review: 0 },
    );
  }, [albums, tracks]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Albums</p>
          <h2 className="mt-4 text-3xl">Recent albums</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{readinessSummary.ready} ready / {readinessSummary.review} need review.</p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadAlbums}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading albums...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {albums.map((album) => {
          const isEditing = editingAlbumId === album.id;
          const readiness = getAlbumReadiness(album, tracks);
          const publishBlockReason = readiness.issues.length > 0 ? readiness.issues.join(", ") : "";
          const publicAlbumHref = `/music/${album.slug}`;

          return (
            <article className="scroll-mt-28 rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" id={`album-${album.id}`} key={album.id}>
              <div className={`rounded-2xl border p-4 ${readiness.isReady ? "border-[rgba(42,166,161,0.65)] bg-[rgba(16,74,72,0.22)]" : "border-[rgba(216,168,79,0.65)] bg-[rgba(81,63,24,0.24)]"}`}>
                <p className="gold-text text-xs uppercase tracking-[0.25em]">{readiness.isReady ? "Ready to publish" : "Review before publishing"}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">
                  {readiness.isReady ? "Album has required details, cover art, alt text, and published tracks." : `Needs: ${publishBlockReason}.`}
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--muted-silver)]">Tracks: {readiness.trackCount} total / {readiness.publishedTrackCount} published</p>
              </div>

              <p className="gold-text mt-5 text-xs uppercase tracking-[0.25em]">{album.status}</p>
              <h3 className="mt-3 text-2xl">{album.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-silver)]">{album.subtitle ?? `/${album.slug}`}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{album.description || "No album description yet."}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Cover alt text: {album.cover_alt_text || "Not set"}</p>
              {album.status === "published" ? (
                <Link className="gold-text mt-3 inline-flex text-xs uppercase tracking-[0.2em]" href={publicAlbumHref}>
                  Open public album page
                </Link>
              ) : (
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-silver)]">Public page available after publishing</p>
              )}
              {album.cover_image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="mt-4 aspect-[16/9] w-full rounded-2xl border border-[rgba(216,168,79,0.25)] object-cover" src={album.cover_image_url} alt={album.cover_alt_text || `${album.title} cover`} />
              ) : null}

              {isEditing ? <AlbumQuickEditor album={album} onSaved={loadAlbums} onCancel={() => setEditingAlbumId("")} canPublish={readiness.isReady} publishBlockReason={publishBlockReason} /> : null}

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setEditingAlbumId(isEditing ? "" : album.id)}>
                  {isEditing ? "Close Edit" : "Edit Album"}
                </button>
                {album.status === "published" ? (
                  <Link className="rounded-full border border-[rgba(42,166,161,0.65)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" href={publicAlbumHref}>
                    View Public Page
                  </Link>
                ) : null}
                {album.status === "draft" ? (
                  <button className="rounded-full border border-[rgba(42,166,161,0.65)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:cursor-not-allowed disabled:opacity-50" type="button" onClick={() => setAlbumStatus(album, "published")} disabled={!readiness.isReady} title={readiness.isReady ? "Publish album" : publishBlockReason}>
                    Publish
                  </button>
                ) : null}
                {album.status === "published" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setAlbumStatus(album, "draft")}>
                    Move to Draft
                  </button>
                ) : null}
                {album.status === "archived" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setAlbumStatus(album, "draft")}>
                    Restore Draft
                  </button>
                ) : null}
                {album.status !== "archived" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setAlbumStatus(album, "archived")}>
                    Archive
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
