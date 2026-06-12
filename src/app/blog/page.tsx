export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Blog</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Reflections and Updates</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This section will host reflections, announcements, devotional writing, and long-form articles.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="lantern-panel rounded-3xl p-6">
          <h2 className="gold-text text-2xl">The Way of the Lantern</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">A future essay introducing the language of the lantern, the keeper, and the quiet path.</p>
        </article>
        <article className="lantern-panel rounded-3xl p-6">
          <h2 className="gold-text text-2xl">Building Quiet Light</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">A future project update on the public site, books, music, and devotional archive.</p>
        </article>
        <article className="lantern-panel rounded-3xl p-6">
          <h2 className="gold-text text-2xl">The Flame Remains</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">A future devotional reflection for those walking through the dark with a guarded flame.</p>
        </article>
      </div>
    </main>
  );
}
