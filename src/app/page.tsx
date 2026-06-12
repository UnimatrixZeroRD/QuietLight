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
        <div className="lantern-panel rounded-3xl p-8 md:p-12">
          <p className="gold-text uppercase tracking-[0.3em]">What is the Way?</p>
          <h2 className="mt-4 text-4xl md:text-6xl">A lantern-lit path through the dark.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-silver)]">
            The Way of Quiet Light is a spiritual path of stillness, humility, quiet service, sacred reflection, and the keeping of the inner flame.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
        <div className="lantern-panel rounded-3xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">The Book</p>
          <h2 className="mt-4 text-4xl">The Keeper&apos;s Lantern</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            A gathered work of prayer, reflection, psalm, invocation, and sacred teaching for those called to tend the light.
          </p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/keepers-lantern">Explore the Book</Link>
        </div>
        <div className="lantern-panel rounded-3xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">The Platform</p>
          <h2 className="mt-4 text-4xl">Publishing, memberships, books, music, and Daily Light.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            Quiet Light is being built as a sacred digital home for free content, member content, digital works, scripture, and reflection.
          </p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/membership">View Memberships</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="gold-text uppercase tracking-[0.3em]">Music</p>
        <h2 className="mt-4 text-4xl md:text-6xl">Music of the Quiet Light</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {['The Flame Remains', 'The Everlasting Light', 'Gloria Patri'].map((album) => (
            <div className="lantern-panel rounded-3xl p-6" key={album}>
              <div className="mb-5 flex h-36 items-center justify-center rounded-2xl border border-[var(--lantern-gold)] text-4xl">✦</div>
              <h3 className="gold-text text-2xl">{album}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">Sacred music for prayer, reflection, and stillness.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="lantern-panel rounded-3xl p-8 text-center md:p-12">
          <p className="gold-text uppercase tracking-[0.3em]">Daily Light</p>
          <blockquote className="mx-auto mt-6 max-w-3xl text-3xl italic leading-relaxed">I am not the light. I am only its keeper.</blockquote>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-silver)]">Daily scripture, quiet reflection, and devotional writing will live here as the platform grows.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
        <div className="lantern-panel rounded-3xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">Store</p>
          <h2 className="mt-4 text-4xl">Digital works and access.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">The store will hold e-books, music, video, bundles, and other Quiet Light resources.</p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/store">Visit the Store</Link>
        </div>
        <div className="lantern-panel rounded-3xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">Support</p>
          <h2 className="mt-4 text-4xl">Help keep the lantern burning.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">Supporters help the writing, music, scripture work, and public platform continue to grow.</p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/support">Support the Work</Link>
        </div>
      </section>
    </main>
  );
}
