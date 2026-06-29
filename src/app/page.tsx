import Image from "next/image";
import Link from "next/link";
import { getLatestDailyLightEntry } from "../lib/supabase/daily-light";

export const revalidate = 3600;

function formatDailyLightDate(value?: string) {
  if (!value) return "Latest reflection";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium" }).format(new Date(value));
}

export default async function HomePage() {
  const dailyLightEntry = await getLatestDailyLightEntry();
  const dailyLightHeaderImage = {
    src: "/images/backgrounds/dailylightheader.webp",
    alt: "Daily Light header artwork with lanterns, mountains, and a quiet path.",
  };

  const musicAlbums = [
    {
      title: "The Flame Remains",
      href: "/music/the-flame-remains",
      description:
        "Created during the writing of The Keeper's Lantern, this album carries the psalms, prayers, and devotional language of the book into music. It is the sound of the lantern being kept: sacred, reflective, and formed around the flame that remains.",
      cover: {
        src: "/images/music/flame-remains-cover.webp",
        alt: "The Flame Remains album cover.",
      },
    },
    {
      title: "The Everlasting Light",
      href: "/music/the-everlasting-light",
      description:
        "The Everlasting Light explores lessons drawn from Scripture and the inheritance of classical hymnody, offering a more modern sacred expression for prayer, worship, and quiet renewal.",
      cover: {
        src: "/images/music/everlasting-light-cover.webp",
        alt: "The Everlasting Light album cover.",
      },
    },
    {
      title: "Gloria Patri",
      href: "/music/gloria-patri",
      description:
        "Gloria Patri returns to some of the oldest and most traditional psalms and hymns, revisiting the foundations of Christian praise to complete the original Holy Trinity of Quiet Light albums.",
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
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1fr] md:items-center">
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
              <p className="mt-5 leading-8 text-[var(--muted-silver)]">
                The central gathered work of Quiet Light Ministries: a devotional companion for prayer, reflection, psalm, invocation, sacred teaching, and the keeping of the flame.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 leading-8 text-[var(--muted-silver)]">
            <p>
              The Keeper&apos;s Lantern gives language to the heart of the Way of Quiet Light, shaping its prayers, its charges, its blessings, and its quiet call to live faithfully before God. It gathers the spiritual foundation of the ministry into one place for those who feel called to tend the light with humility.
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
        <div className="lantern-panel flex rounded-3xl p-6 md:p-8">
          <div className="flex w-full flex-col">
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
            <div className="mt-8 overflow-hidden rounded-2xl border border-[rgba(216,168,79,0.36)] bg-[var(--midnight)] shadow-[0_0_42px_rgba(216,168,79,0.14)]">
              <Image
                src="/images/order-of-the-lantern/order-of-the-lantern-logo1.webp"
                alt="Order of the Lantern banner artwork."
                width={1672}
                height={941}
                sizes="(min-width: 768px) 34rem, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-auto flex justify-center pt-8">
              <Link aria-label="Join the Order of the Lantern" className="rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:border-[var(--lantern-gold)] hover:bg-[rgba(216,168,79,0.1)] focus-visible:border-[var(--lantern-gold)] focus-visible:bg-[rgba(216,168,79,0.1)]" href="/sign-in">
                Join the Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Music</p>
        <h2 className="mt-4 text-3xl md:text-6xl">Music of the Quiet Light</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {musicAlbums.map((album) => (
            <div className="lantern-panel rounded-3xl p-6" key={album.title}>
              <Link className="group block overflow-hidden rounded-2xl border border-[var(--lantern-gold)] bg-[var(--midnight)] shadow-[0_0_42px_rgba(255,179,71,0.18)]" href={album.href} aria-label={`Open ${album.title} album page`}>
                <Image
                  src={album.cover.src}
                  alt={album.cover.alt}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 768px) 28vw, 100vw"
                  className="h-auto w-full transition duration-300 group-hover:scale-[1.03]"
                />
              </Link>
              <h3 className="mt-5 text-2xl">
                <Link className="gold-text transition hover:text-[var(--soft-gold)] focus-visible:text-[var(--soft-gold)]" href={album.href}>
                  {album.title}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-silver)]">{album.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="lantern-panel overflow-hidden rounded-3xl text-center">
          <div className="border-b border-[rgba(216,168,79,0.24)] bg-[var(--midnight)]">
            <Image
              src={dailyLightHeaderImage.src}
              alt={dailyLightHeaderImage.alt}
              width={1672}
              height={941}
              sizes="(min-width: 768px) 72rem, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="p-6 md:p-12">
            {dailyLightEntry ? (
              <>
                <p className="gold-text text-xs uppercase tracking-[0.25em]">{formatDailyLightDate(dailyLightEntry.publishedOn)}</p>
                <h3 className="mx-auto mt-4 max-w-3xl text-3xl md:text-4xl">{dailyLightEntry.title}</h3>
                {dailyLightEntry.scriptureReference ? (
                  <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)]">{dailyLightEntry.scriptureReference}</p>
                ) : null}
                {dailyLightEntry.scriptureText ? (
                  <blockquote className="mx-auto mt-5 max-w-3xl text-xl italic leading-9 text-[var(--soft-gold)] md:text-2xl">
                    “{dailyLightEntry.scriptureText}”
                  </blockquote>
                ) : null}
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-silver)]">{dailyLightEntry.summary}</p>
                <Link className="gold-text mt-8 inline-block rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em]" href={`/daily-light/${dailyLightEntry.slug}`}>
                  Read Today&apos;s Light
                </Link>
              </>
            ) : (
              <>
                <p className="gold-text text-xs uppercase tracking-[0.25em]">Begins July 1, 2026</p>
                <h3 className="mx-auto mt-4 max-w-3xl text-3xl md:text-4xl">The Daily Light is being prepared.</h3>
                <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--muted-silver)]">
                  The first Daily Light reflection will appear here on July 1, 2026. Each day after that, the next reflection will rise in order and the previous six days will remain in the archive.
                </p>
                <Link className="gold-text mt-8 inline-block rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em]" href="/daily-light">
                  Visit Daily Light
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Store</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Merchandise, music, books, and Quiet Light goods.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            The Quiet Light store will offer merchandise and ministry-related items such as shirts, hats, apparel, and other goods connected to the Way of Quiet Light. As the store grows, it may also include selected digital products, licensed editions of music albums, books, media releases, and other resources for those who wish to carry the work into daily life.
          </p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/store">Visit the Store</Link>
        </div>
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Support</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Help keep the lantern burning.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            Your support helps keep the light alive and contributes to the growth of Quiet Light Ministries. Gifts and contributions help sustain the writing, music, scripture work, public platform, and future initiatives being built to serve the community and carry the flame forward.
          </p>
          <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href="/support">Support the Work</Link>
        </div>
      </section>
    </main>
  );
}
