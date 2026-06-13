import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section
        className="relative overflow-hidden px-4 py-20 text-center sm:px-6 md:py-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(7,17,31,0.1), rgba(7,17,31,0.96)), url('/images/backgrounds/quiet-light-hero.svg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto mb-8 h-20 w-20 rounded-full border border-[var(--lantern-gold)] bg-[url('/images/brand/lantern-mark.svg')] bg-cover shadow-[0_0_60px_rgba(216,168,79,0.25)] sm:h-24 sm:w-24" />
        <p className="gold-text mb-5 text-xs font-semibold uppercase tracking-[0.28em] sm:tracking-[0.35em]">The Way of</p>
        <h1 className="gold-text mx-auto max-w-5xl text-5xl font-semibold tracking-wide sm:text-6xl md:text-8xl">Quiet Light</h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--ivory)] md:text-2xl">
          A spiritual path of stillness, humility, sacred reflection, and the light that never fades.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link className="lantern-glow rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--midnight)]" href="/the-way">Enter the Quiet Light</Link>
          <Link className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ivory)]" href="/music">Listen to the Music</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-12">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">What is the Way?</p>
          <h2 className="mt-4 text-3xl md:text-6xl">A lantern-lit path through the dark.</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted-silver)] md:text-lg">
            The Way of Quiet Light is a spiritual path of stillness, humility, quiet service, sacred reflection, and the keeping of the inner flame.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="lantern-panel grid gap-8 rounded-3xl p-6 md:grid-cols-[0.75fr_1fr] md:p-8">
          <div className="min-h-72 rounded-2xl border border-[var(--lantern-gold)] bg-[url('/images/books/keepers-lantern-cover.svg')] bg-cover bg-center md:min-h-80" />
          <div>
            <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Book</p>
            <h2 className="mt-4 text-3xl md:text-4xl">The Keeper&apos;s Lantern</h2>
            <p className="mt-5 leading-8 text-[var(--muted-silver)]">
              A gathered work of prayer, reflection, psalm, invocation, and sacred teaching for those called to tend the light.
            </p>
            <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/keepers-lantern">Explore the Book</Link>
          </div>
        </div>
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Platform</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Publishing, memberships, books, music, and Daily Light.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            Quiet Light is being built as a sacred digital home for free content, member content, digital works, scripture, and reflection.
          </p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/membership">View Memberships</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Music</p>
        <h2 className="mt-4 text-3xl md:text-6xl">Music of the Quiet Light</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {['The Flame Remains', 'The Everlasting Light', 'Gloria Patri'].map((album, index) => (
            <div className="lantern-panel rounded-3xl p-6" key={album}>
              <div
                className="mb-5 flex h-52 items-end rounded-2xl border border-[var(--lantern-gold)] bg-cover bg-center p-5 text-4xl"
                style={{
                  backgroundImage:
                    index === 0
                      ? "url('/images/music/flame-remains-cover.svg')"
                      : "linear-gradient(180deg, rgba(18,60,105,0.9), rgba(7,17,31,0.95))",
                }}
              />
              <h3 className="gold-text text-2xl">{album}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">Sacred music for prayer, reflection, and stillness.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 text-center md:p-12">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Daily Light</p>
          <blockquote className="mx-auto mt-6 max-w-3xl text-2xl italic leading-relaxed md:text-3xl">I am not the light. I am only its keeper.</blockquote>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-silver)]">Daily scripture, quiet reflection, and devotional writing will live here as the platform grows.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Store</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Digital works and access.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">The store will hold e-books, music, video, bundles, and other Quiet Light resources.</p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/store">Visit the Store</Link>
        </div>
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Support</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Help keep the lantern burning.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">Supporters help the writing, music, scripture work, and public platform continue to grow.</p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/support">Support the Work</Link>
        </div>
      </section>
    </main>
  );
}
