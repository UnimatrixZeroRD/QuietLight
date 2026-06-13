"use client";

type SnapshotChartRecord = {
  id: string;
  total_score: number;
  operations_score: number;
  delivery_score: number;
  live_pages_score: number;
  draft_cleanup_score: number;
  created_at: string;
};

function sortedSnapshots(snapshots: SnapshotChartRecord[]) {
  return [...snapshots].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
}

function scoreTone(score: number) {
  if (score >= 90) return "Ready";
  if (score >= 70) return "Review";
  return "Attention";
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function LaunchReadinessChart({ snapshots }: { snapshots: SnapshotChartRecord[] }) {
  const ordered = sortedSnapshots(snapshots).slice(-10);
  const latest = ordered.at(-1);
  const first = ordered.at(0);
  const overallChange = latest && first ? latest.total_score - first.total_score : 0;

  if (ordered.length === 0) {
    return (
      <div className="mt-5 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
        <p className="gold-text text-xs uppercase tracking-[0.22em]">Readiness trend</p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Save a snapshot to begin charting readiness over time.</p>
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="gold-text text-xs uppercase tracking-[0.22em]">Readiness trend</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">
            Showing the latest {ordered.length} saved snapshot{ordered.length === 1 ? "" : "s"}.
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl text-[var(--ivory)]">{latest?.total_score ?? 0}%</p>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]">
            {scoreTone(latest?.total_score ?? 0)} {overallChange === 0 ? "" : `(${overallChange > 0 ? "+" : ""}${overallChange})`}
          </p>
        </div>
      </div>

      <div className="mt-6 flex h-48 items-end gap-3 overflow-x-auto rounded-2xl border border-[rgba(216,168,79,0.12)] p-4">
        {ordered.map((snapshot) => (
          <div className="flex min-w-16 flex-1 flex-col items-center gap-2" key={snapshot.id}>
            <div className="flex h-32 w-full items-end justify-center rounded-xl border border-[rgba(216,168,79,0.12)] bg-[rgba(7,17,31,0.45)] p-1">
              <div className="w-full rounded-lg bg-[linear-gradient(180deg,rgba(216,168,79,0.95),rgba(42,166,161,0.72))]" style={{ height: `${Math.max(4, snapshot.total_score)}%` }} title={`${snapshot.total_score}% on ${new Date(snapshot.created_at).toLocaleString()}`} />
            </div>
            <p className="text-xs text-[var(--ivory)]">{snapshot.total_score}%</p>
            <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--muted-silver)]">{formatDate(snapshot.created_at)}</p>
          </div>
        ))}
      </div>

      {latest ? (
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
            <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Operations</p>
            <p className="mt-2 text-xl text-[var(--ivory)]">{latest.operations_score}%</p>
          </div>
          <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
            <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Delivery</p>
            <p className="mt-2 text-xl text-[var(--ivory)]">{latest.delivery_score}%</p>
          </div>
          <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
            <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Live</p>
            <p className="mt-2 text-xl text-[var(--ivory)]">{latest.live_pages_score}%</p>
          </div>
          <div className="rounded-2xl border border-[rgba(216,168,79,0.14)] p-3">
            <p className="gold-text text-[0.65rem] uppercase tracking-[0.18em]">Drafts</p>
            <p className="mt-2 text-xl text-[var(--ivory)]">{latest.draft_cleanup_score}%</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
