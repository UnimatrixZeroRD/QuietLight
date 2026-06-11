export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">About</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">About the Keeper</h1>
      <p className="mt-8 text-xl leading-9 text-[var(--muted-silver)]">
        The Way of Quiet Light was created by Joshua Eaton as a body of spiritual writing, music, reflection, and sacred creative work.
      </p>
      <div className="lantern-panel mt-10 rounded-2xl p-8">
        <p className="text-2xl italic">The world does not need more noise. It needs more light.</p>
      </div>
    </main>
  );
}
