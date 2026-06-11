import Link from "next/link";

const albums = [
  "The Flame Remains",
  "The Everlasting Light",
  "Gloria Patri",
];

export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen px-6 py-24 text-center">
        <p className="gold-text mb-4 uppercase tracking-[0.35em]">The Way of</p>
        <h1 className="gold-text mx-auto max-w-5xl text-6xl font-semibold tracking-wide md:text-8xl">
          Quiet Light
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-[var(--ivory)] md:text-2xl">
          A spiritual path of stillness, humility, sacred reflection, and the light that never fades.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link className="lantern-glow rounded border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[var(--midnight)]" href="/the-way">
            Enter the Quiet Light
          </Link>
          <Link className="rounded border border-[var(--lantern-gold)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[var(--ivory)]" href="/music">
            Listen to the Music
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="lantern-panel rounded-2xl p-8 text-center md:p-12">
          <p className="gold-text mb-3 uppercase tracking-[0.3em]">What is the Way?</p>
          <h2 className="text-3xl md:text-5xl">A lantern-lit path through the dark.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-silver)]">
            The Way of Quiet Light is a spiritual path of stillness, humility, quiet service, sacred reflection, and the keeping of the inner flame. It is not a path of noise or spectacle. It is the way of the lantern, carried gently and guarded faithfully.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
        <article className="lantern-panel rounded-2xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">The Book</p>
          <h2 className="mt-4 text-4xl">The Keeper&apos;s Lantern</h2>
          <p className="mt-4 leading-8 text-[var(--muted-silver)]">
            The Book of Joshua gathers prayer, reflection, psalm, invocation, and sacred teaching for those who feel called to tend the light in a darkened world.
          </p>
          <Link className="mt-6 inline-block rounded border border-[var(--lantern-gold)] px-5 py-3 text-sm uppercase tracking-[0.18em]" href="/keepers-lantern">
            Read More
          </Link>
        </article>

        <article className="lantern-panel rounded-2xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">The Platform</p>
          <h2 className="mt-4 text-4xl">Publishing, Memberships, and Store</h2>
          <p className="mt-4 leading-8 text-[var(--muted-silver)]">
            Quiet Light will grow into a free and paid publishing platform with memberships, digital licenses, e-books, music, video, scripture resources, and a devotional archive.
          </p>
          <Link className="mt-6 inline-block rounded border border-[var(--lantern-gold)] px-5 py-3 text-sm uppercase tracking-[0.18em]" href="/membership">
            View Memberships
          </Link>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="gold-text text-center uppercase tracking-[0.3em]">Music of the Quiet Light</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {albums.map((album) => (
            <article className="lantern-panel rounded-2xl p-6 text-center" key={album}>
              <div className="mx-auto mb-5 flex h-40 w-full items-center justify-center rounded-xl border border-[var(--lantern-gold)] bg-[var(--deep-blue)] text-5xl">
                ✦
              </div>
              <h3 className="gold-text text-2xl">{album}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">
                Sacred music for prayer, stillness, worship, and reflection.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="lantern-panel rounded-2xl p-8 text-center md:p-12">
          <p className="gold-text uppercase tracking-[0.3em]">Daily Light</p>
          <blockquote className="mx-auto mt-6 max-w-3xl text-3xl italic leading-relaxed">
            “I am not the light. I am only its keeper.”
          </blockquote>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-silver)]">
            Daily scripture, quiet reflection, and devotional writing will live here as the platform grows.
          </p>
        </div>
      </section>
    </main>
  );
}
