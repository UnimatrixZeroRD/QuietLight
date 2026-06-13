"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

export type DraftKind = "post" | "daily-light" | "product" | "album";

async function updateDraftRecord(kind: DraftKind, id: string, update: { status?: string; updated_at: string }) {
  const supabase = createSupabaseBrowserClient();
  if (!supabase) return { errorMessage: "Supabase is not configured in this environment yet." };

  if (kind === "post") {
    const { error } = await supabase.from("posts").update(update).eq("id", id);
    return { errorMessage: error?.message ?? "" };
  }

  if (kind === "daily-light") {
    const { error } = await supabase.from("daily_light_entries").update(update).eq("id", id);
    return { errorMessage: error?.message ?? "" };
  }

  if (kind === "product") {
    const { error } = await supabase.from("products").update(update).eq("id", id);
    return { errorMessage: error?.message ?? "" };
  }

  const { error } = await supabase.from("albums").update(update).eq("id", id);
  return { errorMessage: error?.message ?? "" };
}

export function StaleDraftActions({ draftId, draftTitle, kind, onChanged }: { draftId: string; draftTitle: string; kind: DraftKind; onChanged: () => Promise<void> }) {
  const [message, setMessage] = useState("");
  const [savingAction, setSavingAction] = useState<"keep" | "archive" | "">("");

  async function keepDraft() {
    setSavingAction("keep");
    setMessage("");

    const { errorMessage } = await updateDraftRecord(kind, draftId, { updated_at: new Date().toISOString() });

    if (errorMessage) {
      setMessage(errorMessage);
    } else {
      setMessage(`${draftTitle || "Draft"} kept.`);
      await onChanged();
    }

    setSavingAction("");
  }

  async function archiveDraft() {
    setSavingAction("archive");
    setMessage("");

    const { errorMessage } = await updateDraftRecord(kind, draftId, { status: "archived", updated_at: new Date().toISOString() });

    if (errorMessage) {
      setMessage(errorMessage);
    } else {
      setMessage(`${draftTitle || "Draft"} archived.`);
      await onChanged();
    }

    setSavingAction("");
  }

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-2">
        <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={keepDraft} disabled={Boolean(savingAction)}>
          {savingAction === "keep" ? "Saving..." : "Keep Draft"}
        </button>
        <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={archiveDraft} disabled={Boolean(savingAction)}>
          {savingAction === "archive" ? "Archiving..." : "Archive"}
        </button>
      </div>
      {message ? <p className="mt-2 text-xs leading-5 text-[var(--muted-silver)]">{message}</p> : null}
    </div>
  );
}
