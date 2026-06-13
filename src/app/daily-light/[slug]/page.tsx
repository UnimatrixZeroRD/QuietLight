import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicDailyLightEntryBySlug } from "../../../lib/supabase/daily-light";

type DailyLightEntryPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value?: string) {
  if (!value) return "Daily Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long" }).format(new Date(value));
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

  const description = entry.scriptureReference ? `${entry.scriptureReference} — ${entry.reflection}` : entry.reflection;

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
  const entry = await getPublicDailyLightEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/daily-light">
        Back to Daily Light
      </Link>

      <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-10">
        <p className="gold-text uppercase tracking-[0.3em]">{formatDate(entry.publishedOn)}</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">{entry.title}</h1>

        {entry.scriptureReference ? (
          <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Scripture</p>
            <h2 className="mt-3 text-2xl">{entry.scriptureReference}</h2>
            {entry.scriptureText ? <p className="mt-4 text-lg leading-9 text-[var(--muted-silver)]">{entry.scriptureText}</p> : null}
          </section>
        ) : null}

        <section className="mt-10">
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Reflection</p>
          <p className="mt-4 text-2xl italic leading-10 text-[var(--ivory)]">{entry.reflection}</p>
        </section>

        {entry.prayer ? (
          <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Prayer</p>
            <p className="mt-4 text-lg leading-9 text-[var(--muted-silver)]">{entry.prayer}</p>
          </section>
        ) : null}
      </article>
    </main>
  );
}
