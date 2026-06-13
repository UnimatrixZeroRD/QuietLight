import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-center">
      <section className="lantern-panel rounded-3xl p-8 md:p-12">
        <p className="gold-text uppercase tracking-[0.3em]">The path is quiet here</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">Page Not Found</h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-silver)]">
          This lantern does not mark a public path yet. Return to the Quiet Light home, the Daily Light archive, or the store.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link className="lantern-glow rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)]" href="/">
            Return Home
          </Link>
          <Link className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ivory)]" href="/daily-light">
            Daily Light
          </Link>
        </div>
      </section>
    </main>
  );
}
