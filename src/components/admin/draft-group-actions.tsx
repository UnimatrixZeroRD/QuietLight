"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { DraftKind } from "./stale-draft-actions";

function tableFor(kind: DraftKind) {
  if (kind === "post") return "posts";
  if (kind === "daily-light") return "daily_light_entries";
  if (kind === "product") return "products";
  return "albums";
}

export function DraftGroupActions({ count, ids, kind, onChanged }: { count: number; ids: string[]; kind: DraftKind; onChanged: () => Promise<void> }) {
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  if (count === 0) return null;

  async function refreshGroup() {
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from(tableFor(kind)).update({ updated_at: new Date().toISOString() }).in("id", ids);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(`${count} draft${count === 1 ? "" : "s"} refreshed.`);
      await onChanged();
    }

    setIsSaving(false);
  }

  return (
    <div className="mt-4 rounded-2xl border border-[rgba(216,168,79,0.18)] p-3">
      <p className="text-xs leading-5 text-[var(--muted-silver)]">Group action applies to all {count} stale draft{count === 1 ? "" : "s"} in this card.</p>
      <button className="mt-3 rounded-full border border-[rgba(216,168,79,0.45)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={refreshGroup} disabled={isSaving}>
        {isSaving ? "Saving..." : "Keep All Drafts"}
      </button>
      {message ? <p className="mt-2 text-xs leading-5 text-[var(--muted-silver)]">{message}</p> : null}
    </div>
  );
}
