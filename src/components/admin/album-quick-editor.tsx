"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { PublicImagePicker } from "./public-image-picker";

export type EditableAlbum = {
  id: string;
  title: string;
  subtitle: string | null;
  slug: string;
  description: string;
  cover_image_url: string | null;
  cover_alt_text?: string | null;
  status: string;
};

type AlbumDraft = {
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  coverImageUrl: string;
  coverAltText: string;
  status: string;
};

const statuses = ["draft", "published", "archived"];

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createDraft(album: EditableAlbum): AlbumDraft {
  return {
    title: album.title,
    subtitle: album.subtitle ?? "",
    slug: album.slug,
    description: album.description,
    coverImageUrl: album.cover_image_url ?? "",
    coverAltText: album.cover_alt_text ?? "",
    status: album.status,
  };
}

export function AlbumQuickEditor({ album, onSaved, onCancel }: { album: EditableAlbum; onSaved: () => Promise<void>; onCancel: () => void }) {
  const [draft, setDraft] = useState<AlbumDraft>(() => createDraft(album));
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function updateDraft(field: keyof AlbumDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function handleTitle(value: string) {
    setDraft((current) => ({ ...current, title: value, slug: current.slug ? current.slug : toSlug(value) }));
  }

  async function saveAlbum() {
    if (!draft.title.trim() || !draft.slug.trim() || !draft.description.trim()) {
      setMessage("Title, slug, and description are required.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setIsSaving(false);
      return;
    }

    const { error } = await supabase
      .from("albums")
      .update({
        title: draft.title.trim(),
        subtitle: draft.subtitle.trim() || null,
        slug: toSlug(draft.slug),
        description: draft.description.trim(),
        cover_image_url: draft.coverImageUrl.trim() || null,
        cover_alt_text: draft.coverAltText.trim(),
        status: draft.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", album.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Album saved.");
      await onSaved();
      onCancel();
    }

    setIsSaving(false);
  }

  return (
    <div className="mt-5 grid gap-4 rounded-2xl border border-[rgba(216,168,79,0.22)] p-4">
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.title} onChange={(event) => handleTitle(event.target.value)} placeholder="Title" />
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.subtitle} onChange={(event) => updateDraft("subtitle", event.target.value)} placeholder="Subtitle" />
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.slug} onChange={(event) => updateDraft("slug", toSlug(event.target.value))} placeholder="Slug" />
      <textarea className="min-h-32 rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.description} onChange={(event) => updateDraft("description", event.target.value)} placeholder="Description" />
      <PublicImagePicker value={draft.coverImageUrl} onChange={(value) => updateDraft("coverImageUrl", value)} />
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.coverImageUrl} onChange={(event) => updateDraft("coverImageUrl", event.target.value)} placeholder="Or paste cover image URL" />
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.coverAltText} onChange={(event) => updateDraft("coverAltText", event.target.value)} placeholder="Cover image alt text" />
      {draft.coverImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="aspect-[16/9] w-full rounded-2xl border border-[rgba(216,168,79,0.25)] object-cover" src={draft.coverImageUrl} alt={draft.coverAltText || `${draft.title || "Album"} cover preview`} />
      ) : null}
      <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.status} onChange={(event) => updateDraft("status", event.target.value)}>
        {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
      </select>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="button" onClick={saveAlbum} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Album"}
        </button>
        <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
      {message ? <p className="text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </div>
  );
}
