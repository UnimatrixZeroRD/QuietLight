"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

export type EditableMediaAsset = {
  id: string;
  title: string;
  description: string;
  alt_text: string;
  bucket: string;
  path: string;
  media_type: string;
  access_level: string;
};

export type MediaAssetUsage = {
  id: string;
  label: string;
  title: string;
  href: string;
};

type MediaAssetDraft = {
  title: string;
  description: string;
  altText: string;
  bucket: string;
  path: string;
  mediaType: string;
  accessLevel: string;
};

const mediaTypes = ["image", "audio", "video", "document"];
const accessLevels = ["public", "members", "private"];

function createDraft(asset: EditableMediaAsset): MediaAssetDraft {
  return {
    title: asset.title,
    description: asset.description,
    altText: asset.alt_text,
    bucket: asset.bucket,
    path: asset.path,
    mediaType: asset.media_type,
    accessLevel: asset.access_level,
  };
}

export function MediaAssetCard({ asset, usage, onSaved }: { asset: EditableMediaAsset; usage: MediaAssetUsage[]; onSaved: () => Promise<void> }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<MediaAssetDraft>(() => createDraft(asset));
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const previewUrl = useMemo(() => {
    if (asset.media_type !== "image" || asset.access_level !== "public") return "";
    const supabase = createSupabaseBrowserClient();
    return supabase?.storage.from(asset.bucket).getPublicUrl(asset.path).data.publicUrl ?? "";
  }, [asset.access_level, asset.bucket, asset.media_type, asset.path]);

  function updateDraft(field: keyof MediaAssetDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function cancelEdit() {
    setDraft(createDraft(asset));
    setIsEditing(false);
    setMessage("");
  }

  async function saveAsset() {
    if (!draft.title.trim() || !draft.bucket.trim() || !draft.path.trim()) {
      setMessage("Title, bucket, and path are required.");
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
      .from("media_assets")
      .update({
        title: draft.title.trim(),
        description: draft.description.trim(),
        alt_text: draft.altText.trim(),
        bucket: draft.bucket.trim(),
        path: draft.path.trim(),
        media_type: draft.mediaType,
        access_level: draft.accessLevel,
        updated_at: new Date().toISOString(),
      })
      .eq("id", asset.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Media asset updated.");
      setIsEditing(false);
      await onSaved();
    }

    setIsSaving(false);
  }

  async function setAccessLevel(nextAccessLevel: "public" | "private") {
    if (nextAccessLevel === "private" && usage.length > 0) {
      setMessage("This asset is currently used by public content. Remove those references before archiving it.");
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
      .from("media_assets")
      .update({ access_level: nextAccessLevel, updated_at: new Date().toISOString() })
      .eq("id", asset.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(nextAccessLevel === "private" ? "Media asset archived as private." : "Media asset restored to public.");
      await onSaved();
    }

    setIsSaving(false);
  }

  return (
    <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5">
      <p className="gold-text text-xs uppercase tracking-[0.25em]">{asset.media_type} - {asset.access_level}</p>
      <h3 className="mt-3 text-2xl">{asset.title}</h3>
      <p className="mt-2 break-all text-sm text-[var(--muted-silver)]">{asset.bucket}/{asset.path}</p>
      <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Alt text: {asset.alt_text || "Not set"}</p>
      {asset.description ? <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{asset.description}</p> : null}
      {previewUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="mt-4 aspect-[16/9] w-full rounded-2xl border border-[rgba(216,168,79,0.25)] object-cover" src={previewUrl} alt={asset.alt_text || asset.title} />
      ) : null}

      <div className="mt-4 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
        <p className="gold-text text-xs uppercase tracking-[0.25em]">Usage</p>
        {usage.length > 0 ? (
          <div className="mt-3 grid gap-2">
            {usage.map((item) => (
              <Link className="text-sm leading-6 text-[var(--muted-silver)] transition hover:text-[var(--lantern-gold)]" href={item.href} key={item.id}>
                {item.label}: {item.title}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">No linked usage found yet.</p>
        )}
      </div>

      <div className="mt-4 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
        <p className="gold-text text-xs uppercase tracking-[0.25em]">Archive safety</p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">
          {usage.length > 0 ? "This asset is in use and should not be archived yet." : "No linked usage found. This asset can be archived as private."}
        </p>
      </div>

      {isEditing ? (
        <div className="mt-5 grid gap-4 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.title} onChange={(event) => updateDraft("title", event.target.value)} placeholder="Title" />
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.altText} onChange={(event) => updateDraft("altText", event.target.value)} placeholder="Alt text" />
          <textarea className="min-h-28 rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.description} onChange={(event) => updateDraft("description", event.target.value)} placeholder="Description" />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.bucket} onChange={(event) => updateDraft("bucket", event.target.value)} placeholder="Bucket" />
            <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.path} onChange={(event) => updateDraft("path", event.target.value)} placeholder="Path" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.mediaType} onChange={(event) => updateDraft("mediaType", event.target.value)}>
              {mediaTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
            <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.accessLevel} onChange={(event) => updateDraft("accessLevel", event.target.value)}>
              {accessLevels.map((level) => <option key={level} value={level}>{level}</option>)}
            </select>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="button" onClick={saveAsset} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Asset"}
            </button>
            <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3">
        <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setIsEditing((current) => !current)}>
          {isEditing ? "Close Edit" : "Edit Asset"}
        </button>
        {asset.access_level === "private" ? (
          <button className="rounded-full border border-[rgba(42,166,161,0.65)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => setAccessLevel("public")} disabled={isSaving}>
            {isSaving ? "Saving..." : "Restore Public"}
          </button>
        ) : (
          <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:cursor-not-allowed disabled:opacity-50" type="button" onClick={() => setAccessLevel("private")} disabled={usage.length > 0 || isSaving}>
            {isSaving ? "Saving..." : "Archive as Private"}
          </button>
        )}
      </div>
      {message ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </article>
  );
}
