import type { Metadata } from "next";
import Link from "next/link";
import { getPublicDailyLightEntries } from "../../../lib/supabase/daily-light";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Daily Light Archive",
  description: "Browse every published Daily Light reflection by volume and day.",
  alternates: { canonical: "/daily-light/archive" },
  openGraph: {
    title: "Daily Light Archive | The Way of Quiet Light",
    description: "Browse every published Daily Light reflection by volume and day.",
    url: "/daily-light/archive",
  },
};

const volumeOrder = [
  "Volume One",
  "Volume Two",
  "Volume Three",
  "Volume Four",
  "Volume Five",
  "Volume Six",
  "Volume Seven",
  "Volume Eight",
  "Volume Nine",
  "Volume Ten",
  "Volume Eleven",
  "Volume Twelve",
];

function volumeAnchor(volume: string) {
  return volume.toLowerCase().replaceAll(" ", "-");
}

function formatDate(value?: string) {
  if (!value) return "Daily Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default async function DailyLightArchivePage() {
  const entries = await getPublicDailyLightEntries();
  const publishedEntries = [...entries].sort((first, second) => (first.day ?? 0) - (second.day ?? 0));

  const volumes = volumeOrder
    .map((volume) => {
      const volumeEntries = publishedEntries.filter((entry) => entry.volume === volume);
      return {
        volume,
        title: volumeEntries[0]?.volumeTitle ?? volume,
        entries: volumeEntries,
      };
    })
    .filter((volume) => volume.entries.length > 0);

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/daily-light">
        Back to Daily Light
      </Link>

      <header className="mt-10">
        <p className="gold-text uppercase tracking-[0.3em]">Complete Archive</p>
        <h1 className="gold-text mt-4 max-w-4xl text-5xl md:text-7xl">Walk through every published Daily Light.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-silver)]">
          Browse the year-long devotional journey by volume and day. Only entries whose publication dates have arrived in Atlantic Canada appear here.
        </p>
      </header>

      <nav className="lantern-panel mt-10 rounded-3xl p-6" aria-label="Daily Light volumes">
        <p className="gold-text text-xs uppercase tracking-[0.25em]">Jump to a volume</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {volumes.map((volume) => (
            <a
              className="rounded-full border border-[rgba(216,168,79,0.4)] px-4 py-2 text-sm text-[var(--soft-gold)] transition hover:border-[var(--lantern-gold)] hover:text-[var(--ivory)]"
              href={`#${volumeAnchor(volume.volume)}`}
              key={volume.volume}
            >
              {volume.volume}
            </a>
          ))}
        </div>
      </nav>

      <div className="mt-14 space-y-16">
        {volumes.map((volume) => (
          <section id={volumeAnchor(volume.volume)} key={volume.volume} className="scroll-mt-24">
            <p className="gold-text text-sm uppercase tracking-[0.25em]">{volume.volume}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{volume.title}</h2>
            <p className="mt-3 text-[var(--muted-silver)]">
              {volume.entries.length} published {volume.entries.length === 1 ? "reflection" : "reflections"}
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {volume.entries.map((entry) => (
                <Link
                  className="lantern-panel block rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.6)] hover:-translate-y-0.5"
                  href={`/daily-light/${entry.slug}`}
                  key={entry.slug}
                >
                  <p className="gold-text text-xs uppercase tracking-[0.22em]">
                    Day {entry.day} · {formatDate(entry.publishedOn)}
                  </p>
                  <h3 className="mt-4 text-2xl">{entry.title}</h3>
                  {entry.theme ? <p className="mt-3 text-sm text-[var(--soft-gold)]">{entry.theme}</p> : null}
                  <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{entry.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
