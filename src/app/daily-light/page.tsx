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

      <div className="lantern-panel mt-10 rounded-3xl p-8 text-center md:p-12">
        <p className="gold-text text-xs uppercase tracking-[0.25em]">Latest reflection</p>
        <h2 className="mt-4 text-4xl">{featuredEntry.title}</h2>
        <p className="mt-6 text-3xl italic leading-relaxed">{featuredEntry.reflection}</p>
        <p className="mt-6 leading-8 text-[var(--muted-silver)]">{featuredEntry.summary}</p>
        <Link className="mt-8 inline-block rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--soft-gold)]" href={`/daily-light/${featuredEntry.slug}`}>
          Read Today&apos;s Light
        </Link>
      </div>

      <section className="mt-12">
        <p className="gold-text uppercase tracking-[0.3em]">Archive</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {entries.map((entry) => (
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
