import { getPublicScriptureReferences } from "../../lib/supabase/public-content";

export default async function BiblePage() {
  const references = await getPublicScriptureReferences();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Bible</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Scripture Resources</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This section will organize scripture quotes, Bible references, reading material, and devotional commentary.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {references.map((reference) => (
          <article className="lantern-panel rounded-3xl p-6" key={reference.slug}>
            <h2 className="gold-text text-2xl">{reference.title}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{reference.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
