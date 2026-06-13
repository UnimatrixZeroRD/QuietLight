"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-center">
      <section className="lantern-panel rounded-3xl p-8 md:p-12">
        <p className="gold-text uppercase tracking-[0.3em]">The flame is still here</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">Something Went Wrong</h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-silver)]">
          This part of the path could not load. Try again, or return to the Quiet Light home page.
        </p>
        <button
          className="lantern-glow mt-10 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)]"
          type="button"
          onClick={reset}
        >
          Try Again
        </button>
      </section>
    </main>
  );
}
