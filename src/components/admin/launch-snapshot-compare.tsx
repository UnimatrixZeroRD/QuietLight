"use client";

import { useEffect, useMemo, useState } from "react";

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

type ScoreRow = {
  label: string;
  left: number;
  right: number;
};

function formatSnapshotLabel(snapshot: SnapshotRecord) {
  return `${new Date(snapshot.created_at).toLocaleString()} - ${snapshot.total_score}%`;
}

function deltaText(left: number, right: number) {
  const delta = right - left;
  if (delta === 0) return "No change";
  return `${delta > 0 ? "+" : ""}${delta}`;
}

export function LaunchSnapshotCompare({ snapshots }: { snapshots: SnapshotRecord[] }) {
  const [leftSnapshotId, setLeftSnapshotId] = useState("");
  const [rightSnapshotId, setRightSnapshotId] = useState("");

  useEffect(() => {
    if (snapshots.length === 0) {
      setLeftSnapshotId("");
      setRightSnapshotId("");
      return;
    }

    setLeftSnapshotId((current) => (current && snapshots.some((snapshot) => snapshot.id === current) ? current : snapshots.at(-1)?.id ?? snapshots[0].id));
    setRightSnapshotId((current) => (current && snapshots.some((snapshot) => snapshot.id === current) ? current : snapshots[0].id));
  }, [snapshots]);

  const leftSnapshot = snapshots.find((snapshot) => snapshot.id === leftSnapshotId);
  const rightSnapshot = snapshots.find((snapshot) => snapshot.id === rightSnapshotId);

  const rows = useMemo<ScoreRow[]>(() => {
    if (!leftSnapshot || !rightSnapshot) return [];

    return [
      { label: "Overall", left: leftSnapshot.total_score, right: rightSnapshot.total_score },
      { label: "Operations", left: leftSnapshot.operations_score, right: rightSnapshot.operations_score },
      { label: "Delivery", left: leftSnapshot.delivery_score, right: rightSnapshot.delivery_score },
      { label: "Live pages", left: leftSnapshot.live_pages_score, right: rightSnapshot.live_pages_score },
      { label: "Draft cleanup", left: leftSnapshot.draft_cleanup_score, right: rightSnapshot.draft_cleanup_score },
    ];
  }, [leftSnapshot, rightSnapshot]);

  if (snapshots.length < 2) {
    return (
      <div className="mt-5 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
        <p className="gold-text text-xs uppercase tracking-[0.22em]">Side-by-side comparison</p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Save at least two snapshots to compare them directly.</p>
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
      <p className="gold-text text-xs uppercase tracking-[0.22em]">Side-by-side comparison</p>
      <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Compare two saved readiness snapshots without using the current score as the reference.</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-sm leading-6 text-[var(--muted-silver)]">
          Earlier snapshot
          <select className="mt-2 w-full rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(7,17,31,0.8)] px-4 py-3 text-[var(--ivory)]" value={leftSnapshotId} onChange={(event) => setLeftSnapshotId(event.target.value)}>
            {snapshots.map((snapshot) => (
              <option key={snapshot.id} value={snapshot.id}>{formatSnapshotLabel(snapshot)}</option>
            ))}
          </select>
        </label>
        <label className="text-sm leading-6 text-[var(--muted-silver)]">
          Later snapshot
          <select className="mt-2 w-full rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(7,17,31,0.8)] px-4 py-3 text-[var(--ivory)]" value={rightSnapshotId} onChange={(event) => setRightSnapshotId(event.target.value)}>
            {snapshots.map((snapshot) => (
              <option key={snapshot.id} value={snapshot.id}>{formatSnapshotLabel(snapshot)}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 grid gap-3">
        {rows.map((row) => (
          <div className="grid gap-3 rounded-2xl border border-[rgba(216,168,79,0.12)] p-3 md:grid-cols-4" key={row.label}>
            <p className="gold-text text-xs uppercase tracking-[0.18em]">{row.label}</p>
            <p className="text-sm text-[var(--muted-silver)]">From: <span className="text-[var(--ivory)]">{row.left}%</span></p>
            <p className="text-sm text-[var(--muted-silver)]">To: <span className="text-[var(--ivory)]">{row.right}%</span></p>
            <p className="text-sm text-[var(--muted-silver)]">Change: <span className="text-[var(--ivory)]">{deltaText(row.left, row.right)}</span></p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-4">
          <p className="gold-text text-xs uppercase tracking-[0.2em]">Earlier notes</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{leftSnapshot?.notes || "No notes saved."}</p>
        </div>
        <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-4">
          <p className="gold-text text-xs uppercase tracking-[0.2em]">Later notes</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{rightSnapshot?.notes || "No notes saved."}</p>
        </div>
      </div>
    </div>
  );
}
