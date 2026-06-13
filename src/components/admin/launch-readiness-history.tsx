"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { LaunchReadinessChart } from "./launch-readiness-chart";
import { LaunchSnapshotCompare } from "./launch-snapshot-compare";

type ScoreItem = {
  title: string;
  value: number;
  weight: string;
  detail: string;
};

type SnapshotRecord = {
  id: string;
  total_score: number;
  operations_score: number;
  delivery_score: number;
  live_pages_score: number;
  draft_cleanup_score: number;
  checklist: string;
  notes: string;
  created_at: string;
};

function scoreByTitle(items: ScoreItem[], title: string) {
  return items.find((item) => item.title === title)?.value ?? 0;
}

function scoreDelta(current: number, previous?: number) {
  if (typeof previous !== "number") return "First saved snapshot";
  const delta = current - previous;
  if (delta === 0) return "No change";
  return `${delta > 0 ? "+" : ""}${delta} points from previous snapshot`;
}

function directDelta(current: number, snapshot: number) {
  const delta = current - snapshot;
  if (delta === 0) return "No change";
  return `${delta > 0 ? "+" : ""}${delta}`;
}

function csvCell(value: string | number) {
  const text = String(value).replaceAll('"', '""');
  return `"${text}"`;
}

function snapshotsToCsv(snapshots: SnapshotRecord[]) {
  const rows = [
    ["created_at", "total_score", "operations_score", "delivery_score", "live_pages_score", "draft_cleanup_score", "notes", "id"],
    ...snapshots.map((snapshot) => [
      snapshot.created_at,
      snapshot.total_score,
      snapshot.operations_score,
      snapshot.delivery_score,
      snapshot.live_pages_score,
      snapshot.draft_cleanup_score,
      snapshot.notes,
      snapshot.id,
    ]),
  ];

  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

export function LaunchReadinessHistory({ checklist, items, total }: { checklist: string; items: ScoreItem[]; total: number }) {
  const [snapshots, setSnapshots] = useState<SnapshotRecord[]>([]);
  const [selectedSnapshotId, setSelectedSnapshotId] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingSnapshotId, setDeletingSnapshotId] = useState("");

  const loadSnapshots = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("launch_readiness_snapshots")
      .select("id,total_score,operations_score,delivery_score,live_pages_score,draft_cleanup_score,checklist,notes,created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      setMessage(error.message);
    } else {
      const records = (data ?? []) as SnapshotRecord[];
      setSnapshots(records);
      setSelectedSnapshotId((current) => (current && records.some((snapshot) => snapshot.id === current) ? current : records[0]?.id ?? ""));
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void loadSnapshots();
  }, [loadSnapshots]);

  const currentScores = useMemo(() => {
    return {
      operationsScore: scoreByTitle(items, "Operations"),
      deliveryScore: scoreByTitle(items, "Delivery"),
      livePagesScore: scoreByTitle(items, "Live pages"),
      draftCleanupScore: scoreByTitle(items, "Draft cleanup"),
    };
  }, [items]);

  async function saveSnapshot() {
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const { data: userData } = await supabase.auth.getUser();
    const { error } = await supabase.from("launch_readiness_snapshots").insert({
      created_by: userData.user?.id ?? null,
      total_score: total,
      operations_score: currentScores.operationsScore,
      delivery_score: currentScores.deliveryScore,
      live_pages_score: currentScores.livePagesScore,
      draft_cleanup_score: currentScores.draftCleanupScore,
      checklist,
      notes: notes.trim(),
      metadata: {
        items,
        saved_from: "admin_launch_readiness",
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Launch readiness snapshot saved.");
      setNotes("");
      await loadSnapshots();
    }

    setIsSaving(false);
  }

  async function deleteSnapshot(snapshot: SnapshotRecord) {
    const confirmed = window.confirm(`Delete the ${snapshot.total_score}% readiness snapshot from ${new Date(snapshot.created_at).toLocaleString()}?`);
    if (!confirmed) return;

    setDeletingSnapshotId(snapshot.id);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setDeletingSnapshotId("");
      return;
    }

    const { error } = await supabase.from("launch_readiness_snapshots").delete().eq("id", snapshot.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Launch readiness snapshot deleted.");
      await loadSnapshots();
    }

    setDeletingSnapshotId("");
  }

  function downloadCsv() {
    if (snapshots.length === 0) {
      setMessage("No snapshots available to export.");
      return;
    }

    const date = new Date().toISOString().slice(0, 10);
    const blob = new Blob([snapshotsToCsv(snapshots)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `quiet-light-readiness-history-${date}.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setMessage("Snapshot CSV downloaded.");
  }

  const previous = snapshots[0];
  const selectedSnapshot = snapshots.find((snapshot) => snapshot.id === selectedSnapshotId) ?? snapshots[0];

  return (
    <div className="mt-8 rounded-3xl border border-[rgba(216,168,79,0.22)] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Readiness History</p>
          <h3 className="mt-3 text-2xl">Snapshot timeline</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">
            Save the current launch score so progress can be compared before launch.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)] disabled:opacity-60" type="button" onClick={downloadCsv} disabled={snapshots.length === 0}>
            Export CSV
          </button>
          <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)] disabled:opacity-60" type="button" onClick={saveSnapshot} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Snapshot"}
          </button>
        </div>
      </div>

      <textarea className="mt-4 min-h-24 w-full rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(7,17,31,0.8)] p-4 text-sm leading-6 text-[var(--ivory)]" placeholder="Optional snapshot notes" value={notes} onChange={(event) => setNotes(event.target.value)} />

      {message ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
      {isLoading ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">Loading snapshot history...</p> : null}

      <LaunchReadinessChart snapshots={snapshots} />
      <LaunchSnapshotCompare snapshots={snapshots} />

      <div className="mt-5 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
        <p className="gold-text text-xs uppercase tracking-[0.22em]">Current vs previous</p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Overall: {scoreDelta(total, previous?.total_score)}</p>
        <p className="text-sm leading-6 text-[var(--muted-silver)]">Operations: {scoreDelta(currentScores.operationsScore, previous?.operations_score)}</p>
        <p className="text-sm leading-6 text-[var(--muted-silver)]">Delivery: {scoreDelta(currentScores.deliveryScore, previous?.delivery_score)}</p>
        <p className="text-sm leading-6 text-[var(--muted-silver)]">Live pages: {scoreDelta(currentScores.livePagesScore, previous?.live_pages_score)}</p>
        <p className="text-sm leading-6 text-[var(--muted-silver)]">Draft cleanup: {scoreDelta(currentScores.draftCleanupScore, previous?.draft_cleanup_score)}</p>
      </div>

      {selectedSnapshot ? (
        <div className="mt-5 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="gold-text text-xs uppercase tracking-[0.22em]">Selected snapshot comparison</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{new Date(selectedSnapshot.created_at).toLocaleString()}</p>
            </div>
            <p className="text-3xl text-[var(--ivory)]">{selectedSnapshot.total_score}%</p>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
              <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Overall</p>
              <p className="mt-2 text-xl text-[var(--ivory)]">{directDelta(total, selectedSnapshot.total_score)}</p>
            </div>
            <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
              <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Operations</p>
              <p className="mt-2 text-xl text-[var(--ivory)]">{directDelta(currentScores.operationsScore, selectedSnapshot.operations_score)}</p>
            </div>
            <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
              <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Delivery</p>
              <p className="mt-2 text-xl text-[var(--ivory)]">{directDelta(currentScores.deliveryScore, selectedSnapshot.delivery_score)}</p>
            </div>
            <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
              <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Live</p>
              <p className="mt-2 text-xl text-[var(--ivory)]">{directDelta(currentScores.livePagesScore, selectedSnapshot.live_pages_score)}</p>
            </div>
            <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
              <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Drafts</p>
              <p className="mt-2 text-xl text-[var(--ivory)]">{directDelta(currentScores.draftCleanupScore, selectedSnapshot.draft_cleanup_score)}</p>
            </div>
          </div>
          {selectedSnapshot.notes ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">Notes: {selectedSnapshot.notes}</p> : null}
          <textarea className="mt-4 min-h-60 w-full rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(7,17,31,0.8)] p-4 font-mono text-sm leading-6 text-[var(--ivory)]" readOnly value={selectedSnapshot.checklist} />
        </div>
      ) : null}

      <div className="mt-5 grid gap-3">
        {snapshots.length === 0 ? <p className="text-sm leading-6 text-[var(--muted-silver)]">No snapshots saved yet.</p> : null}
        {snapshots.map((snapshot) => (
          <article className={`rounded-2xl border p-4 ${selectedSnapshot?.id === snapshot.id ? "border-[rgba(216,168,79,0.55)]" : "border-[rgba(216,168,79,0.18)]"}`} key={snapshot.id}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="gold-text text-xs uppercase tracking-[0.2em]">{new Date(snapshot.created_at).toLocaleString()}</p>
              <p className="text-2xl text-[var(--ivory)]">{snapshot.total_score}%</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">
              Ops {snapshot.operations_score}% / Delivery {snapshot.delivery_score}% / Live {snapshot.live_pages_score}% / Drafts {snapshot.draft_cleanup_score}%
            </p>
            {snapshot.notes ? <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">Notes: {snapshot.notes}</p> : null}
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                className="rounded-full border border-[rgba(42,166,161,0.55)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]"
                type="button"
                onClick={() => setSelectedSnapshotId(snapshot.id)}
              >
                View Comparison
              </button>
              <button
                className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60"
                type="button"
                onClick={() => deleteSnapshot(snapshot)}
                disabled={deletingSnapshotId === snapshot.id}
              >
                {deletingSnapshotId === snapshot.id ? "Deleting..." : "Delete Snapshot"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
