"use client";

import { FormEvent, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type TrackStatus = "draft" | "published" | "archived";

type AlbumOption = {
  id: string;
  title: string;
};

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function TrackEditor() {
  const [albums, setAlbums] = useState<AlbumOption[]>([]);
  const [albumId, setAlbumId] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [trackNumber, setTrackNumber] = useState("1");
  const [embedUrl, setEmbedUrl] = useState("");
  const [status, setStatus] = useState<TrackStatus>("draft");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleTitle(value: string) {
    setTitle(value);
    if (!slug) setSlug(toSlug(value));
  }

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    supabase
      .from("albums")
      .select("id,title")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        const options = (data ?? []) as AlbumOption[];
        setAlbums(options);
        if (options[0]?.id) setAlbumId(options[0].id);
      });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from("tracks").insert({
      album_id: albumId || null,
      title,
      slug: slug || toSlug(title),
      description,
      track_number: Number(trackNumber || "1"),
      embed_url: embedUrl || null,
      status,
      access_level: "public",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Track saved. Refresh the track list to see it.");
      setTitle("");
      setSlug("");
      setDescription("");
      setTrackNumber("1");
      setEmbedUrl("");
      setStatus("draft");
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">New Track</p>
      <h2 className="mt-4 text-3xl">Create album track</h2>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="track-album">Album</label>
      <select className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="track-album" value={albumId} onChange={(event) => setAlbumId(event.target.value)}>
        <option value="">No album selected</option>
        {albums.map((album) => <option key={album.id} value={album.id}>{album.title}</option>)}
      </select>

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="track-title">Title</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="track-title" value={title} onChange={(event) => handleTitle(event.target.value)} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="track-slug">Slug</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="track-slug" value={slug} onChange={(event) => setSlug(toSlug(event.target.value))} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="track-description">Description</label>
      <textarea className="mt-4 min-h-28 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="track-description" value={description} onChange={(event) => setDescription(event.target.value)} />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={trackNumber} onChange={(event) => setTrackNumber(event.target.value)} inputMode="numeric" required />
        <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={status} onChange={(event) => setStatus(event.target.value as TrackStatus)}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={embedUrl} onChange={(event) => setEmbedUrl(event.target.value)} placeholder="Embed URL" />
      </div>

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Track"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
