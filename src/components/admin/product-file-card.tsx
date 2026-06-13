"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

export type ManagedProductFile = {
  id: string;
  title: string;
  description: string;
  file_path: string;
  file_type: string;
  storage_bucket: string | null;
  sort_order: number;
};

type ProductFileCardProps = {
  file: ManagedProductFile;
  onSaved: () => Promise<void>;
};

function formatFileType(value: string) {
  return value.split("/").pop()?.toUpperCase() ?? value.toUpperCase();
}

export function ProductFileCard({ file, onSaved }: ProductFileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(file.title);
  const [description, setDescription] = useState(file.description);
  const [sortOrder, setSortOrder] = useState(String(file.sort_order));
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function cancelEditing() {
    setTitle(file.title);
    setDescription(file.description);
    setSortOrder(String(file.sort_order));
    setMessage("");
    setIsEditing(false);
  }

  async function saveChanges() {
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase
      .from("product_files")
      .update({
        title,
        description,
        sort_order: Number(sortOrder || "0"),
        updated_at: new Date().toISOString(),
      })
      .eq("id", file.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("File details updated.");
      setIsEditing(false);
      await onSaved();
    }

    setIsSaving(false);
  }

  return (
    <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5">
      {isEditing ? (
        <div>
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Editing file details</p>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_160px]">
            <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Display title" />
            <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} inputMode="numeric" placeholder="Sort" />
          </div>
          <textarea className="mt-4 min-h-28 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Customer-facing file description" />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full border border-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)] disabled:opacity-60" type="button" onClick={saveChanges} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
            <button className="rounded-full border border-[rgba(216,168,79,0.35)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={cancelEditing}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="gold-text text-xs uppercase tracking-[0.25em]">{formatFileType(file.file_type)} - Sort {file.sort_order}</p>
          <h3 className="mt-3 text-2xl">{file.title}</h3>
          {file.description ? <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{file.description}</p> : null}
          <p className="mt-2 text-sm text-[var(--muted-silver)]">{file.storage_bucket}/{file.file_path}</p>
          <button className="mt-4 rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setIsEditing(true)}>
            Edit Details
          </button>
        </div>
      )}
      {message ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </article>
  );
}
