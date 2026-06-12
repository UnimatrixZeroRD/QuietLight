"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type AlbumStatus = "draft" | "published" | "archived";

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function AlbumEditor() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<AlbumStatus>("draft");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleTitle(value: string) {
    setTitle(value);
    if (!slug) setSlug(toSlug(value));
  }

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

    const { error } = await supabase.from("albums").insert({
      title,
      subtitle: subtitle || null,
      slug: slug || toSlug(title),
      description,
      status,
      access_level: "public",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Album saved. Refresh the album list to see it.");
      setTitle("");
      setSubtitle("");
      setSlug("");
      setDescription("");
      setStatus("draft");
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">New Album</p>
      <h2 className="mt-4 text-3xl">Create music album</h2>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="album-title">Title</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="album-title" value={title} onChange={(event) => handleTitle(event.target.value)} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="album-subtitle">Subtitle</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="album-subtitle" value={subtitle} onChange={(event) => setSubtitle(event.target.value)} />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="album-slug">Slug</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="album-slug" value={slug} onChange={(event) => setSlug(toSlug(event.target.value))} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="album-description">Description</label>
      <textarea className="mt-4 min-h-32 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="album-description" value={description} onChange={(event) => setDescription(event.target.value)} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="album-status">Status</label>
      <select className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="album-status" value={status} onChange={(event) => setStatus(event.target.value as AlbumStatus)}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
        <option value="archived">Archived</option>
      </select>

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Album"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
