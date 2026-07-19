import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLatestDailyLightEntry, getPublicDailyLightEntries } from "../../lib/supabase/daily-light";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Daily Light",
  description: "Daily scripture, reflection, and prayer from The Way of Quiet Light.",
  alternates: { canonical: "/daily-light" },
  openGraph: {
    title: "Daily Light | The Way of Quiet Light",
    description: "Daily scripture, reflection, and prayer from The Way of Quiet Light.",
    url: "/daily-light",
  },
};

const dailyLightBook = {
  title: "The Daily Light",
  image: "/images/books/daily-light-cover.webp",
  alt: "The Daily Light devotional book cover.",
  description:
    "A year-long devotional journey through scripture, reflection, prayer, and quiet spiritual practice. The Daily Light gathers the daily readings into a companion work for those who wish to walk steadily with God, one day at a time.",
  href: "#",
  cta: "Buy on Amazon",
};

const dailyLightVolumes = [
  {
    title: "Walking in the Light",
    volume: "Volume One",
    days: "Days 1-30",
    theme: "Foundations of faith",
    description: "Creation, the character of God, faith, repentance, grace, and the call to follow Christ.",
    href: "/daily-light/archive#volume-one",
  },
  {
    title: "Growing in Grace",
    volume: "Volume Two",
    days: "Days 31-60",
    theme: "Spiritual maturity",
    description: "Prayer, humility, obedience, wisdom, and trusting God in daily life.",
    href: "/daily-light/archive#volume-two",
  },
  {
    title: "Living the Kingdom",
    volume: "Volume Three",
    days: "Days 61-90",
    theme: "Kingdom life",
    description: "Living under Christ’s reign through justice, mercy, prayer, obedience, and the values of God’s kingdom.",
    href: "/daily-light/archive#volume-three",
  },
  {
    title: "The Heart of Worship",
    volume: "Volume Four",
    days: "Days 91-120",
    theme: "Worship and devotion",
    description: "Worship, gratitude, reverence, surrender, prayer, and a heart centred upon God.",
    href: "/daily-light/archive#volume-four",
  },
  {
    title: "Faith Through the Storm",
    volume: "Volume Five",
    days: "Days 121-150",
    theme: "Faith through hardship",
    description: "Trials, fear, grief, endurance, courage, and trusting God through difficult seasons.",
    href: "/daily-light/archive#volume-five",
  },
  {
    title: "The Character of Christ",
    volume: "Volume Six",
    days: "Days 151-180",
    theme: "Becoming like Christ",
    description: "Humility, compassion, holiness, patience, truth, forgiveness, and the character of Jesus.",
    href: "/daily-light/archive#volume-six",
  },
  {
    title: "Serving the King",
    volume: "Volume Seven",
    days: "Days 181-210",
    theme: "Faithful kingdom service",
    description: "Service, stewardship, hospitality, perseverance, compassion, and faithful work for God’s kingdom.",
    href: "/daily-light/archive#volume-seven",
  },
  {
    title: "Hope in Every Season",
    volume: "Volume Eight",
    days: "Days 211-240",
    theme: "Hope and perseverance",
    description: "Hope, peace, courage, refuge, waiting, and trusting God through every changing season.",
    href: "/daily-light/archive#volume-eight",
  },
  {
    title: "Walking in Wisdom",
    volume: "Volume Nine",
    days: "Days 241-270",
    theme: "Wisdom for daily life",
    description: "Discernment, speech, attention, counsel, timing, correction, and faithfully applying truth in everyday decisions.",
    href: "/daily-light/archive#volume-nine",
  },
  {
    title: "The Life of Faith",
    volume: "Volume Ten",
    days: "Days 271-300",
    theme: "Living by faith",
    description: "Trust, obedience, courage, endurance, spiritual growth, and walking faithfully when the whole road cannot yet be seen.",
    href: "/daily-light/archive#volume-ten",
  },
  {
    title: "The Heart of Prayer",
    volume: "Volume Eleven",
    days: "Days 301-330",
    theme: "A life shaped by prayer",
    description: "Listening, gratitude, lament, intercession, weakness, anxiety, wisdom, Scripture, and carrying others before God.",
    href: "/daily-light/archive#volume-eleven",
  },
  {
    title: "The Way of Wisdom",
    volume: "Volume Twelve",
    days: "Days 331-365",
    theme: "Finishing the journey faithfully",
    description: "Mature discipleship, enduring wisdom, hope, faithfulness, and carrying the Quiet Light forward beyond the final day.",
    href: "/daily-light/archive#volume-twelve",
  },
];

function formatDate(value?: string) {
  if (!value) return "Daily Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default async function DailyLightPage() {
  const [featuredEntry, entries] = await Promise.all([getLatestDailyLightEntry(), getPublicDailyLightEntries()]);
  const previousEntries = featuredEntry ? entries.filter((entry) => entry.slug !== featuredEntry.slug).slice(0, 6) : [];

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Daily Light</p>
      <div className="lantern-panel mt-6 overflow-hidden rounded-3xl border border-[rgba(216,168,79,0.32)] bg-[var(--midnight)] shadow-[0_0_48px_rgba(216,168,79,0.16)]">
        <Image
          src="/images/backgrounds/dailylightheader.webp"
          alt="Daily Light scripture and reflection header artwork."
          width={1672}
          height={941}
          priority
          sizes="(min-width: 768px) 72rem, 100vw"
          className="h-auto w-full"
        />
      </div>
      <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-[var(--muted-silver)]">
        Daily Light offers a daily scripture passage, a quiet reflection, and a simple thought for prayer. It is meant to help readers return each day to stillness, humility, mercy, and faithful attention to the light entrusted to them.
      </p>
      <div className="mt-7 flex justify-center">
        <Link className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:bg-[var(--lantern-gold)] hover:text-[var(--midnight)]" href="/daily-light/archive">
          Browse the Complete Archive
        </Link>
      </div>

      {featuredEntry ? (
        <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-12">
          <p className="gold-text text-center text-xs uppercase tracking-[0.25em]">Current Daily Light</p>
          <p className="gold-text mt-5 text-center uppercase tracking-[0.3em]">{formatDate(featuredEntry.publishedOn)}</p>
          <div className="mt-4 text-center text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)]">
            {featuredEntry.volume ? <span>{featuredEntry.volume}</span> : null}
            {featuredEntry.volume && featuredEntry.volumeTitle ? <span> · </span> : null}
            {featuredEntry.volumeTitle ? <span>{featuredEntry.volumeTitle}</span> : null}
            {featuredEntry.day ? <span> · Day {featuredEntry.day}</span> : null}
          </div>
          <h1 className="gold-text mx-auto mt-4 max-w-4xl text-center text-5xl md:text-7xl">{featuredEntry.title}</h1>
          {featuredEntry.theme ? <p className="mt-5 text-center text-lg text-[var(--muted-silver)]">Theme: {featuredEntry.theme}</p> : null}

          {(featuredEntry.oldTestamentReading || featuredEntry.newTestamentReading) ? (
            <section className="mt-10 grid gap-6 md:grid-cols-2">
              {featuredEntry.oldTestamentReading ? (
                <div className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
                  <p className="gold-text text-xs uppercase tracking-[0.25em]">Old Testament Reading</p>
                  <p className="mt-3 text-2xl">{featuredEntry.oldTestamentReading}</p>
                </div>
              ) : null}
              {featuredEntry.newTestamentReading ? (
                <div className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
                  <p className="gold-text text-xs uppercase tracking-[0.25em]">New Testament Reading</p>
                  <p className="mt-3 text-2xl">{featuredEntry.newTestamentReading}</p>
                </div>
              ) : null}
            </section>
          ) : null}

          {(featuredEntry.keyVerseReference || featuredEntry.keyVerseText || featuredEntry.scriptureReference) ? (
            <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
              <p className="gold-text text-xs uppercase tracking-[0.25em]">Key Verse</p>
              <h2 className="mt-3 text-2xl">{featuredEntry.keyVerseReference ?? featuredEntry.scriptureReference}</h2>
              {(featuredEntry.keyVerseText ?? featuredEntry.scriptureText) ? (
                <p className="mt-4 text-xl italic leading-9 text-[var(--soft-gold)]">“{featuredEntry.keyVerseText ?? featuredEntry.scriptureText}”</p>
              ) : null}
            </section>
          ) : null}

          <section className="mt-10">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Daily Light</p>
            <p className="mt-4 whitespace-pre-line text-xl leading-10 text-[var(--ivory)]">{featuredEntry.reflection}</p>
          </section>

          {featuredEntry.prayer ? (
            <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
              <p className="gold-text text-xs uppercase tracking-[0.25em]">Prayer</p>
              <p className="mt-4 whitespace-pre-line text-lg leading-9 text-[var(--muted-silver)]">{featuredEntry.prayer}</p>
            </section>
          ) : null}

          {(featuredEntry.reflectionQuestion || featuredEntry.todayPractice || featuredEntry.closingThought) ? (
            <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
              <p className="gold-text text-xs uppercase tracking-[0.25em]">Reflection</p>
              {featuredEntry.reflectionQuestion ? <p className="mt-4 text-lg leading-8 text-[var(--muted-silver)]"><span className="text-[var(--soft-gold)]">Question:</span> {featuredEntry.reflectionQuestion}</p> : null}
              {featuredEntry.todayPractice ? <p className="mt-4 whitespace-pre-line text-lg leading-8 text-[var(--muted-silver)]"><span className="text-[var(--soft-gold)]">Today&apos;s Practice:</span> {featuredEntry.todayPractice}</p> : null}
              {featuredEntry.closingThought ? <p className="mt-6 whitespace-pre-line text-xl italic leading-9 text-[var(--soft-gold)]">“{featuredEntry.closingThought}”</p> : null}
            </section>
          ) : null}
        </article>
      ) : (
        <section className="lantern-panel mt-10 rounded-3xl p-8 text-center md:p-12">
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Begins July 1, 2026</p>
          <h1 className="gold-text mx-auto mt-4 max-w-4xl text-5xl md:text-7xl">The Daily Light is being prepared.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-silver)]">
            The first Daily Light reflection will appear on July 1, 2026. Each day after that, the next entry will become the current Daily Light.
          </p>
        </section>
      )}

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="gold-text uppercase tracking-[0.3em]">Recent Entries</p>
            <p className="mt-3 max-w-3xl leading-8 text-[var(--muted-silver)]">The six most recent Daily Light reflections before today&apos;s entry.</p>
          </div>
          <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/daily-light/archive">View all published entries →</Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3" aria-label="Previous six Daily Light reflections">
          {previousEntries.map((entry) => (
            <Link className="lantern-panel block rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.55)]" href={`/daily-light/${entry.slug}`} key={entry.slug}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">Day {entry.day} · {formatDate(entry.publishedOn)}</p>
              <h2 className="mt-4 text-2xl">{entry.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{entry.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="gold-text uppercase tracking-[0.3em]">Daily Light Volumes</p>
        <h2 className="mt-4 text-4xl md:text-5xl">A year of Daily Light, gathered by volume.</h2>
        <p className="mt-5 max-w-4xl leading-8 text-[var(--muted-silver)]">
          Together, these twelve volumes form a complete spiritual journey through the foundations of faith, the life of discipleship, quiet obedience, kingdom service, perseverance, hope, and the eternal light of God&apos;s presence.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {dailyLightVolumes.map((volume) => (
            <Link className="lantern-panel block rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.55)] hover:-translate-y-0.5" href={volume.href} key={volume.title}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">{volume.volume} · {volume.days}</p>
              <h3 className="mt-4 text-2xl">{volume.title}</h3>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--soft-gold)]">Theme: {volume.theme}</p>
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{volume.description}</p>
              <p className="gold-text mt-6 text-xs uppercase tracking-[0.18em]">Browse published entries →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16" id="daily-light-book">
        <div className="lantern-panel grid gap-8 rounded-3xl p-6 md:grid-cols-[0.42fr_1fr] md:items-center md:p-8">
          <div className="overflow-hidden rounded-2xl border border-[var(--lantern-gold)] bg-[var(--midnight)] shadow-[0_0_42px_rgba(255,179,71,0.15)]">
            <Image
              src={dailyLightBook.image}
              alt={dailyLightBook.alt}
              width={1024}
              height={1536}
              sizes="(min-width: 768px) 24vw, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <div>
            <p className="gold-text text-sm uppercase tracking-[0.2em]">Book Edition</p>
            <h2 className="gold-text mt-4 text-4xl md:text-6xl">{dailyLightBook.title}</h2>
            <p className="mt-5 text-lg leading-9 text-[var(--muted-silver)]">{dailyLightBook.description}</p>
            <Link
              className="mt-8 inline-block rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--midnight)] shadow-[0_0_36px_rgba(216,168,79,0.24)] transition hover:bg-[var(--soft-gold)]"
              href={dailyLightBook.href}
            >
              {dailyLightBook.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
