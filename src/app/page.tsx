import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="px-6 py-24 text-center md:py-32">
        <p className="gold-text mb-5 text-xs font-semibold uppercase tracking-[0.35em]">The Way of</p>
        <h1 className="gold-text mx-auto max-w-5xl text-6xl font-semibold tracking-wide md:text-8xl">Quiet Light</h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-[var(--ivory)] md:text-2xl">
          A spiritual path of stillness, humility, sacred reflection, and the light that never fades.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link className="lantern-glow rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)]" href="/the-way">Enter the Quiet Light</Link>
          <Link className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ivory)]" href="/music">Listen to the Music</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="lantern-panel rounded-3xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">Platform</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Publishing, memberships, books, music, and Daily Light.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-silver)]">
            Quiet Light is being built as a sacred digital home for free content, member content, digital works, scripture, and reflection.
          </p>
        </div>
      </section>
    </main>
  );
}
