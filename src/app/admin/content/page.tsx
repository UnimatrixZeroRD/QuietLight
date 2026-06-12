export default function AdminContentPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Content</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Content Management</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This page will become the editor dashboard for posts, pages, Daily Light entries, scripture references, products, albums, tracks, and embeds.
      </p>
      <div className="lantern-panel mt-10 rounded-3xl p-8">
        <h2 className="gold-text text-3xl">Next build step</h2>
        <p className="mt-4 leading-8 text-[var(--muted-silver)]">
          The next implementation layer should add admin-only Supabase queries and server-side protection before any editing forms are enabled.
        </p>
      </div>
    </main>
  );
}
