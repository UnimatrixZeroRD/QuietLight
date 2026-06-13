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
  const [savingAction, setSavingAction] = useState<"keep" | "move" | "">("");

  if (count === 0) return null;

  async function applyGroupUpdate(action: "keep" | "move") {
    setSavingAction(action);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setSavingAction("");
      return;
    }

    const update = action === "keep" ? { updated_at: new Date().toISOString() } : { status: "archived", updated_at: new Date().toISOString() };
    const { error } = await supabase.from(tableFor(kind)).update(update).in("id", ids);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(action === "keep" ? `${count} draft${count === 1 ? "" : "s"} refreshed.` : `${count} draft${count === 1 ? "" : "s"} moved to archive.`);
      await onChanged();
    }

    setSavingAction("");
  }

  return (
    <div className="mt-4 rounded-2xl border border-[rgba(216,168,79,0.18)] p-3">
      <p className="text-xs leading-5 text-[var(--muted-silver)]">Group actions apply to all {count} stale draft{count === 1 ? "" : "s"} in this card.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => applyGroupUpdate("keep")} disabled={Boolean(savingAction)}>
          {savingAction === "keep" ? "Saving..." : "Keep All Drafts"}
        </button>
        <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => applyGroupUpdate("move")} disabled={Boolean(savingAction)}>
          {savingAction === "move" ? "Moving..." : "Archive All"}
        </button>
      </div>
      {message ? <p className="mt-2 text-xs leading-5 text-[var(--muted-silver)]">{message}</p> : null}
    </div>
  );
}
