import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const musicAlbums = [
    {
      title: "The Flame Remains",
      cover: {
        src: "/images/music/flame-remains-cover.png",
        alt: "The Flame Remains album cover.",
      },
    },
    {
      title: "The Everlasting Light",
      cover: {
        src: "/images/music/everlasting-light-cover.png",
        alt: "The Everlasting Light album cover.",
      },
    },
    {
      title: "Gloria Patri",
    },
  ];

  return (
    <main>
      <section className="bg-[var(--midnight)]" aria-label="The Way of Quiet Light">
        <Image
          src="/images/backgrounds/quiet-light-header.png"
          alt="The Way of Quiet Light header artwork with aurora-lit mountains, lanterns, and a lakeside path."
          width={1672}
          height={941}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
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
          <div className="overflow-hidden rounded-2xl border border-[var(--lantern-gold)] bg-[var(--midnight)] shadow-[0_0_48px_rgba(216,168,79,0.18)]">
            <Image
              src="/images/books/keepers-lantern-cover.png"
              alt="The Keeper's Lantern Definitive Edition book cover."
              width={1024}
              height={1536}
              sizes="(min-width: 768px) 34vw, 100vw"
              className="h-auto w-full"
            />
          </div>
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
          {musicAlbums.map((album) => (
            <div className="lantern-panel rounded-3xl p-6" key={album.title}>
              {album.cover ? (
                <div className="mb-5 overflow-hidden rounded-2xl border border-[var(--lantern-gold)] bg-[var(--midnight)] shadow-[0_0_42px_rgba(255,179,71,0.18)]">
                  <Image
                    src={album.cover.src}
                    alt={album.cover.alt}
                    width={1254}
                    height={1254}
                    sizes="(min-width: 768px) 28vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              ) : (
                <div
                  className="mb-5 flex aspect-square items-end rounded-2xl border border-[var(--lantern-gold)] bg-cover bg-center p-5 text-4xl"
                  style={{
                    backgroundImage: "linear-gradient(180deg, rgba(18,60,105,0.9), rgba(7,17,31,0.95))",
                  }}
                />
              )}
              <h3 className="gold-text text-2xl">{album.title}</h3>
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
