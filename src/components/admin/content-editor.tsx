"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { PublicImagePicker } from "./public-image-picker";

type ContentType = "post" | "daily-light";
type PublishStatus = "draft" | "published";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function ContentEditor() {
  const [contentType, setContentType] = useState<ContentType>("post");
  const [status, setStatus] = useState<PublishStatus>("draft");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [prayer, setPrayer] = useState("");
  const [scriptureReference, setScriptureReference] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slug) {
      setSlug(toSlug(value));
    }
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

    const finalSlug = slug || toSlug(title);

    const response =
      contentType === "post"
        ? await supabase.from("posts").insert({
            title,
            slug: finalSlug,
            excerpt: summary,
            body_md: body,
            featured_image_url: coverImageUrl || null,
            status,
            access_level: "public",
            published_at: status === "published" ? new Date().toISOString() : null,
          })
        : await supabase.from("daily_light_entries").insert({
            title,
            slug: finalSlug,
            scripture_reference: scriptureReference || null,
            reflection: body,
            prayer: prayer || null,
            status,
            access_level: "public",
            published_on: status === "published" ? new Date().toISOString().slice(0, 10) : null,
          });

    if (response.error) {
      setMessage(response.error.message);
    } else {
      setMessage("Content saved.");
      setTitle("");
      setSlug("");
      setSummary("");
      setBody("");
      setPrayer("");
      setScriptureReference("");
      setCoverImageUrl("");
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-3">
        <button
          className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] ${
            contentType === "post" ? "border-[var(--lantern-gold)] text-[var(--soft-gold)]" : "border-[rgba(216,168,79,0.3)] text-[var(--muted-silver)]"
          }`}
          type="button"
          onClick={() => setContentType("post")}
        >
          Post
        </button>
        <button
          className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] ${
            contentType === "daily-light" ? "border-[var(--lantern-gold)] text-[var(--soft-gold)]" : "border-[rgba(216,168,79,0.3)] text-[var(--muted-silver)]"
          }`}
          type="button"
          onClick={() => setContentType("daily-light")}
        >
          Daily Light
        </button>
      </div>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="title">
        Title
      </label>
      <input
        className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="title"
        value={title}
        onChange={(event) => handleTitleChange(event.target.value)}
        required
      />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="slug">
        Slug
      </label>
      <input
        className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="slug"
        value={slug}
        onChange={(event) => setSlug(toSlug(event.target.value))}
        required
      />

      {contentType === "post" ? (
        <>
          <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="summary">
            Summary
          </label>
          <textarea
            className="mt-4 min-h-24 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
            id="summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            required
          />
          <PublicImagePicker value={coverImageUrl} onChange={setCoverImageUrl} />
        </>
      ) : (
        <>
          <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="scripture">
            Scripture reference
          </label>
          <input
            className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
            id="scripture"
            value={scriptureReference}
            onChange={(event) => setScriptureReference(event.target.value)}
            placeholder="Matthew 6:1"
          />
        </>
      )}

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="body">
        {contentType === "post" ? "Body" : "Reflection"}
      </label>
      <textarea
        className="mt-4 min-h-56 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        required
      />

      {contentType === "daily-light" ? (
        <>
          <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="prayer">
            Prayer
          </label>
          <textarea
            className="mt-4 min-h-24 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
            id="prayer"
            value={prayer}
            onChange={(event) => setPrayer(event.target.value)}
          />
        </>
      ) : null}

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="status">
        Status
      </label>
      <select
        className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="status"
        value={status}
        onChange={(event) => setStatus(event.target.value as PublishStatus)}
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button
        className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60"
        type="submit"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Content"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
