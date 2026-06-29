import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const musicAlbums = [
    {
      title: "The Flame Remains",
      cover: {
        src: "/images/music/flame-remains-cover.webp",
        alt: "The Flame Remains album cover.",
      },
    },
    {
      title: "The Everlasting Light",
      cover: {
        src: "/images/music/everlasting-light-cover.webp",
        alt: "The Everlasting Light album cover.",
      },
    },
    {
      title: "Gloria Patri",
      cover: {
        src: "/images/music/gloria-patri-cover.webp",
        alt: "Gloria Patri album cover.",
      },
    },
  ];

  return (
    <main>
      <section className="bg-[var(--midnight)]" aria-label="The Way of Quiet Light">
        <Image
          src="/images/backgrounds/quiet-light-header.webp"
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
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Way of Quiet Light Ministries</p>
          <h2 className="mt-4 text-3xl md:text-6xl">The Way of Quiet Light</h2>
          <div className="mt-6 grid max-w-4xl gap-5 text-base leading-8 text-[var(--muted-silver)] md:text-lg">
            <p>
              Welcome to Quiet Light Ministries, a spiritual home for those who feel called to seek God through stillness, humility, sacred reflection, and quiet service. The Way of Quiet Light is not built around noise, performance, or spiritual pride. It is a lantern-lit path of prayer, scripture, music, writing, and faithful works offered for God, for life, and for one another.
            </p>
            <p>
              At the heart of this ministry is a simple conviction: the light belongs to God, and we are called to keep it faithfully. Here you will find devotional writings, sacred music, reflections, the Keeper&apos;s Lantern, the Geneva Bible project, and resources for those who wish to walk with patience, mercy, and reverence. The flame is tended not by grand display, but through daily faithfulness, quiet courage, and love that seeks no applause.
            </p>
          </div>
          <blockquote className="mt-8 max-w-4xl border-l-2 border-[var(--lantern-gold)] pl-5 text-lg italic leading-8 text-[var(--soft-gold)] md:text-xl">
            “Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.” <span className="not-italic text-[var(--muted-silver)]">— Matthew 5:16</span>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="lantern-panel grid gap-8 rounded-3xl p-6 md:grid-cols-[0.75fr_1fr] md:p-8">
          <div className="self-start overflow-hidden rounded-2xl border border-[var(--lantern-gold)] bg-[var(--midnight)] shadow-[0_0_48px_rgba(216,168,79,0.18)]">
            <Image
              src="/images/books/keepers-lantern-cover.webp"
              alt="The Keeper's Lantern Definitive Edition book cover."
              width={1024}
              height={1536}
              sizes="(min-width: 768px) 34vw, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <div>
            <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Book</p>
            <h2 className="mt-4 text-3xl md:text-4xl">The Keeper&apos;s Lantern</h2>
            <div className="mt-5 grid gap-4 leading-8 text-[var(--muted-silver)]">
              <p>
                The Keeper&apos;s Lantern is the central gathered work of Quiet Light Ministries: a book of prayer, reflection, psalm, invocation, sacred teaching, and spiritual formation for those who feel called to tend the light with humility. It gives language to the heart of the Way of Quiet Light, shaping its prayers, its charges, its blessings, and its quiet call to live faithfully before God.
              </p>
              <p>
                Written for seekers, servants, and keepers of the flame, the book invites readers into a life of stillness, mercy, reverence, and quiet courage. It is not merely a text to read, but a companion for prayer, devotional practice, and the daily work of becoming a person who carries light without seeking attention for oneself.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Link className="rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:border-[var(--lantern-gold)] hover:bg-[rgba(216,168,79,0.1)] focus-visible:border-[var(--lantern-gold)] focus-visible:bg-[rgba(216,168,79,0.1)]" href="/keepers-lantern">
                Explore the Book
              </Link>
            </div>
          </div>
        </div>
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Platform</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Publishing, memberships, books, music, scripture, and Daily Light.</h2>
          <div className="mt-5 grid gap-4 leading-8 text-[var(--muted-silver)]">
            <p>
              Quiet Light Ministries is being built as a sacred digital home for devotional writing, scripture work, music, books, member content, reflections, video, and other resources connected to the Way of Quiet Light. The platform brings these works together in one place so visitors can read, listen, pray, learn, and return often for new material.
            </p>
            <p>
              As the ministry grows, members will be able to create an account, follow new releases, access selected digital works, receive Daily Light reflections, and take part in the wider life of the community. This is the beginning of a larger home for the Keeper&apos;s Lantern, the Geneva Bible project, sacred music, Quiet Works, and the ongoing work of keeping the flame.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Link className="rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:border-[var(--lantern-gold)] hover:bg-[rgba(216,168,79,0.1)] focus-visible:border-[var(--lantern-gold)] focus-visible:bg-[rgba(216,168,79,0.1)]" href="/sign-in">
              Join
            </Link>
          </div>
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
