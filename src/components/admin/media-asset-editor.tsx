"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

export function MediaAssetEditor() {
  const [title, setTitle] = useState("");
  const [bucket, setBucket] = useState("public");
  const [assetPath, setAssetPath] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

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

    const { error } = await supabase.from("media_assets").insert({
      title,
      description: "",
      bucket,
      path: assetPath,
      media_type: mediaType,
      access_level: "public",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Media asset saved. Refresh the list to see it.");
      setTitle("");
      setBucket("public");
      setAssetPath("");
      setMediaType("image");
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">New Media</p>
      <h2 className="mt-4 text-3xl">Register media asset</h2>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="media-title">Title</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" id="media-title" value={title} onChange={(event) => setTitle(event.target.value)} required />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={bucket} onChange={(event) => setBucket(event.target.value)} placeholder="Bucket" required />
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={assetPath} onChange={(event) => setAssetPath(event.target.value)} placeholder="Path" required />
        <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={mediaType} onChange={(event) => setMediaType(event.target.value)}>
          <option value="image">Image</option>
          <option value="audio">Audio</option>
          <option value="video">Video</option>
          <option value="document">Document</option>
        </select>
      </div>

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Media"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
