"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { PublicImagePicker } from "./public-image-picker";
import { RichTextEditor } from "./rich-text-editor";

type PostStatus = "draft" | "published" | "archived";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function PostEditor({ postId }: { postId: string }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [status, setStatus] = useState<PostStatus>("draft");
  const [publishedAt, setPublishedAt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadPost = useCallback(async () => {
    setIsLoading(true);
    setMessage("");
    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("posts")
      .select("title,subtitle,slug,excerpt,body_md,featured_image_url,status,published_at")
      .eq("id", postId)
      .maybeSingle();

    if (error || !data) {
      setMessage(error?.message ?? "The blog post could not be found.");
      setIsLoading(false);
      return;
    }

    setTitle(data.title ?? "");
    setSubtitle(data.subtitle ?? "");
    setSlug(data.slug ?? "");
    setExcerpt(data.excerpt ?? "");
    setBody(data.body_md ?? "");
    setFeaturedImageUrl(data.featured_image_url ?? "");
    setStatus((data.status as PostStatus) ?? "draft");
    setPublishedAt(data.published_at ?? null);
    setIsLoading(false);
  }, [postId]);

  useEffect(() => {
    void Promise.resolve().then(() => void loadPost());
  }, [loadPost]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!body.trim()) {
      setMessage("Write some article content before saving the post.");
      return;
    }

    setIsSaving(true);
    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const nextPublishedAt = status === "published" ? publishedAt ?? new Date().toISOString() : status === "draft" ? null : publishedAt;
    const { error } = await supabase
      .from("posts")
      .update({
        title,
        subtitle: subtitle || null,
        slug: slug || toSlug(title),
        excerpt,
        body_md: body,
        featured_image_url: featuredImageUrl || null,
        status,
        access_level: "public",
        published_at: nextPublishedAt,
        updated_at: new Date().toISOString(),
      })
      .eq("id", postId);

    if (error) {
      setMessage(error.message);
    } else {
      setPublishedAt(nextPublishedAt);
      setMessage("Blog post updated successfully.");
    }

    setIsSaving(false);
  }

  if (isLoading) return <div className="lantern-panel mt-10 rounded-3xl p-8 text-[var(--muted-silver)]">Loading blog post...</div>;

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(216,168,79,0.22)] pb-6">
        <div>
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Current status</p>
          <p className="mt-2 text-lg capitalize">{status}</p>
        </div>
        {status === "published" && slug ? <Link className="gold-text text-xs uppercase tracking-[0.2em]" href={`/blog/${slug}`}>Open public article <span aria-hidden="true">→</span></Link> : null}
      </div>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="edit-post-title">Title</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="edit-post-title" value={title} onChange={(event) => setTitle(event.target.value)} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="edit-post-subtitle">Subtitle <span className="normal-case tracking-normal text-[var(--muted-silver)]">(optional)</span></label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="edit-post-subtitle" value={subtitle} onChange={(event) => setSubtitle(event.target.value)} />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="edit-post-slug">Slug</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="edit-post-slug" value={slug} onChange={(event) => setSlug(toSlug(event.target.value))} required />
      <p className="mt-2 text-xs leading-5 text-[var(--muted-silver)]">Changing the slug changes the public URL. Existing links may stop working.</p>

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="edit-post-excerpt">Summary</label>
      <textarea className="mt-4 min-h-28 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="edit-post-excerpt" value={excerpt} onChange={(event) => setExcerpt(event.target.value)} required />

      <PublicImagePicker value={featuredImageUrl} onChange={setFeaturedImageUrl} />
      <RichTextEditor id="edit-post-body" value={body} onChange={setBody} />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="edit-post-status">Publishing status</label>
      <select className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="edit-post-status" value={status} onChange={(event) => setStatus(event.target.value as PostStatus)}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
        <option value="archived">Archived</option>
      </select>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button className="lantern-glow rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>{isSaving ? "Saving..." : "Update Blog Post"}</button>
        <button className="rounded-full border border-[rgba(216,168,79,0.38)] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadPost} disabled={isSaving}>Discard changes</button>
      </div>

      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
