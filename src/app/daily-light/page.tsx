import { getFeaturedDailyLightEntry } from "../../lib/supabase/public-content";

export default async function DailyLightPage() {
  const featuredEntry = await getFeaturedDailyLightEntry();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Daily Light</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Daily Scripture and Reflection</h1>
      <div className="lantern-panel mt-10 rounded-3xl p-8 text-center md:p-12">
        <p className="text-3xl italic leading-relaxed">{featuredEntry.reflection}</p>
        <p className="mt-6 leading-8 text-[var(--muted-silver)]">{featuredEntry.summary}</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="lantern-panel rounded-3xl p-6">
          <h2 className="gold-text text-2xl">Scripture</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
            {featuredEntry.scriptureReference ?? "A short passage or reference for daily meditation."}
          </p>
        </article>
        <article className="lantern-panel rounded-3xl p-6">
          <h2 className="gold-text text-2xl">Reflection</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">A quiet thought for stillness, humility, and faithful action.</p>
        </article>
        <article className="lantern-panel rounded-3xl p-6">
          <h2 className="gold-text text-2xl">Prayer</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{featuredEntry.prayer}</p>
        </article>
      </div>
    </main>
  );
}
