import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicDailyLightEntries, getPublicDailyLightEntryBySlug } from "../../../lib/supabase/daily-light";

type DailyLightEntryPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value?: string) {
  if (!value) return "Daily Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export async function generateMetadata({ params }: DailyLightEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getPublicDailyLightEntryBySlug(slug);

  if (!entry) {
    return {
      title: "Daily Light Not Found",
      robots: { index: false, follow: false },
    };
  }

  const description = entry.summary || (entry.scriptureReference ? `${entry.scriptureReference} — ${entry.reflection}` : entry.reflection);

  return {
    title: entry.title,
    description,
    alternates: { canonical: `/daily-light/${entry.slug}` },
    openGraph: {
      title: `${entry.title} | Daily Light`,
      description,
      url: `/daily-light/${entry.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description,
    },
  };
}

export default async function DailyLightEntryPage({ params }: DailyLightEntryPageProps) {
  const { slug } = await params;
  const [entry, entries] = await Promise.all([
    getPublicDailyLightEntryBySlug(slug),
    getPublicDailyLightEntries(),
  ]);

  if (!entry) {
    notFound();
  }

  const chronologicalEntries = [...entries].sort((first, second) => (first.day ?? 0) - (second.day ?? 0));
  const currentIndex = chronologicalEntries.findIndex((item) => item.slug === entry.slug);
  const previousEntry = currentIndex > 0 ? chronologicalEntries[currentIndex - 1] : null;
  const nextEntry = currentIndex >= 0 && currentIndex < chronologicalEntries.length - 1 ? chronologicalEntries[currentIndex + 1] : null;

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/daily-light">
          Back to Daily Light
        </Link>
        <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/daily-light/archive">
          Complete Archive
        </Link>
      </div>

      <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-10">
        <p className="gold-text uppercase tracking-[0.3em]">{formatDate(entry.publishedOn)}</p>
        <div className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)]">
          {entry.volume ? <span>{entry.volume}</span> : null}
          {entry.volume && entry.volumeTitle ? <span> · </span> : null}
          {entry.volumeTitle ? <span>{entry.volumeTitle}</span> : null}
          {entry.day ? <span> · Day {entry.day}</span> : null}
        </div>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">{entry.title}</h1>
        {entry.theme ? <p className="mt-5 text-lg text-[var(--muted-silver)]">Theme: {entry.theme}</p> : null}

        {(entry.oldTestamentReading || entry.newTestamentReading) ? (
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {entry.oldTestamentReading ? (
              <div className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
                <p className="gold-text text-xs uppercase tracking-[0.25em]">Old Testament Reading</p>
                <p className="mt-3 text-2xl">{entry.oldTestamentReading}</p>
              </div>
            ) : null}
            {entry.newTestamentReading ? (
              <div className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
                <p className="gold-text text-xs uppercase tracking-[0.25em]">New Testament Reading</p>
                <p className="mt-3 text-2xl">{entry.newTestamentReading}</p>
              </div>
            ) : null}
          </section>
        ) : null}

        {(entry.keyVerseReference || entry.keyVerseText || entry.scriptureReference) ? (
          <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Key Verse</p>
            <h2 className="mt-3 text-2xl">{entry.keyVerseReference ?? entry.scriptureReference}</h2>
            {(entry.keyVerseText ?? entry.scriptureText) ? (
              <p className="mt-4 text-xl italic leading-9 text-[var(--soft-gold)]">“{entry.keyVerseText ?? entry.scriptureText}”</p>
            ) : null}
          </section>
        ) : null}

        <section className="mt-10">
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Daily Light</p>
          <p className="mt-4 whitespace-pre-line text-xl leading-10 text-[var(--ivory)]">{entry.reflection}</p>
        </section>

        {entry.prayer ? (
          <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Prayer</p>
            <p className="mt-4 whitespace-pre-line text-lg leading-9 text-[var(--muted-silver)]">{entry.prayer}</p>
          </section>
        ) : null}

        {(entry.reflectionQuestion || entry.todayPractice || entry.closingThought) ? (
          <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Reflection</p>
            {entry.reflectionQuestion ? <p className="mt-4 text-lg leading-8 text-[var(--muted-silver)]"><span className="text-[var(--soft-gold)]">Question:</span> {entry.reflectionQuestion}</p> : null}
            {entry.todayPractice ? <p className="mt-4 whitespace-pre-line text-lg leading-8 text-[var(--muted-silver)]"><span className="text-[var(--soft-gold)]">Today&apos;s Practice:</span> {entry.todayPractice}</p> : null}
            {entry.closingThought ? <p className="mt-6 whitespace-pre-line text-xl italic leading-9 text-[var(--soft-gold)]">“{entry.closingThought}”</p> : null}
          </section>
        ) : null}
      </article>

      <nav className="mt-10 grid gap-5 md:grid-cols-2" aria-label="Daily Light reading navigation">
        {previousEntry ? (
          <Link className="lantern-panel rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.6)]" href={`/daily-light/${previousEntry.slug}`}>
            <p className="gold-text text-xs uppercase tracking-[0.22em]">← Previous · Day {previousEntry.day}</p>
            <p className="mt-3 text-2xl">{previousEntry.title}</p>
          </Link>
        ) : <div />}
        {nextEntry ? (
          <Link className="lantern-panel rounded-3xl p-6 text-right transition hover:border-[rgba(216,168,79,0.6)]" href={`/daily-light/${nextEntry.slug}`}>
            <p className="gold-text text-xs uppercase tracking-[0.22em]">Next · Day {nextEntry.day} →</p>
            <p className="mt-3 text-2xl">{nextEntry.title}</p>
          </Link>
        ) : (
          <Link className="lantern-panel rounded-3xl p-6 text-right transition hover:border-[rgba(216,168,79,0.6)]" href="/daily-light/archive">
            <p className="gold-text text-xs uppercase tracking-[0.22em]">End of published entries</p>
            <p className="mt-3 text-2xl">Return to the archive</p>
          </Link>
        )}
      </nav>
    </main>
  );
}
