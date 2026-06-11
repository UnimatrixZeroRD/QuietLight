export default function KeepersLanternPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">The Book</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">The Keeper&apos;s Lantern</h1>
      <p className="mt-8 text-xl leading-9 text-[var(--muted-silver)]">
        The Book of Joshua gathers prayer, reflection, psalm, invocation, and sacred teaching for those called to tend the light.
      </p>
      <div className="lantern-panel mt-10 rounded-2xl p-8">
        <h2 className="text-3xl">Book hub</h2>
        <p className="mt-4 leading-8 text-[var(--muted-silver)]">
          This page will hold editions, excerpts, purchase links, digital license options, and companion music connections.
        </p>
      </div>
    </main>
  );
}
