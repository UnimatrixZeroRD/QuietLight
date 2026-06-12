export default function AdminMembersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Members</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Members and Access</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This page will later manage profiles, membership tiers, active memberships, product licenses, and private access controls.
      </p>
      <div className="lantern-panel mt-10 rounded-3xl p-8">
        <h2 className="gold-text text-3xl">Protection required</h2>
        <p className="mt-4 leading-8 text-[var(--muted-silver)]">
          Member administration must remain admin-only and should be protected server-side before private data is displayed here.
        </p>
      </div>
    </main>
  );
}
