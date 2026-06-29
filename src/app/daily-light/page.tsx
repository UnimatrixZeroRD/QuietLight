import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLatestDailyLightEntry, getPublicDailyLightEntries } from "../../lib/supabase/daily-light";

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

function formatDate(value?: string) {
  if (!value) return "Daily Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium" }).format(new Date(value));
}

export default async function DailyLightPage() {
  const [featuredEntry, entries] = await Promise.all([getLatestDailyLightEntry(), getPublicDailyLightEntries()]);
  const previousEntries = entries.filter((entry) => entry.slug !== featuredEntry.slug).slice(0, 6);

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

      <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-12">
        <p className="gold-text text-center text-xs uppercase tracking-[0.25em]">Current Daily Light</p>
        <p className="gold-text mt-5 text-center uppercase tracking-[0.3em]">{formatDate(featuredEntry.publishedOn)}</p>
        <h1 className="gold-text mx-auto mt-4 max-w-4xl text-center text-5xl md:text-7xl">{featuredEntry.title}</h1>

        {featuredEntry.scriptureReference ? (
          <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Scripture</p>
            <h2 className="mt-3 text-2xl">{featuredEntry.scriptureReference}</h2>
            {featuredEntry.scriptureText ? <p className="mt-4 text-lg leading-9 text-[var(--muted-silver)]">{featuredEntry.scriptureText}</p> : null}
          </section>
        ) : null}

        <section className="mt-10">
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Reflection</p>
          <p className="mt-4 text-2xl italic leading-10 text-[var(--ivory)]">{featuredEntry.reflection}</p>
        </section>

        {featuredEntry.prayer ? (
          <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Prayer</p>
            <p className="mt-4 text-lg leading-9 text-[var(--muted-silver)]">{featuredEntry.prayer}</p>
          </section>
        ) : null}
      </article>

      <section className="mt-12">
        <p className="gold-text uppercase tracking-[0.3em]">Archive</p>
        <p className="mt-3 max-w-3xl leading-8 text-[var(--muted-silver)]">The six most recent Daily Light entries before today&apos;s reflection.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {previousEntries.map((entry) => (
            <Link className="lantern-panel block rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.55)]" href={`/daily-light/${entry.slug}`} key={entry.slug}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">{formatDate(entry.publishedOn)}</p>
              <h2 className="mt-4 text-2xl">{entry.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{entry.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
