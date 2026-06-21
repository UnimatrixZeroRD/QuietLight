import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video",
  description: "Official videos, scripture reflections, music videos, and visual teachings from The Way of Quiet Light.",
  alternates: { canonical: "/video" },
  openGraph: {
    title: "Video | The Way of Quiet Light",
    description: "Official videos, scripture reflections, music videos, and visual teachings from The Way of Quiet Light.",
    url: "/video",
  },
};

const videoSections = [
  {
    title: "Scripture and Reflection",
    description:
      "Quiet video reflections rooted in scripture, prayer, stillness, humility, and the daily work of tending the light.",
  },
  {
    title: "Music Videos",
    description:
      "Visual companions for psalms, hymns, singles, and sacred music released through The Way of Quiet Light.",
  },
  {
    title: "Teachings and Announcements",
    description:
      "Official messages, project updates, and longer-form teachings connected to the books, music, community, and the Order of the Lantern.",
  },
];

export default function VideoPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-[rgba(216,168,79,0.22)] px-4 py-20 sm:px-6 md:py-28" aria-label="Video of the Quiet Light">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(216,168,79,0.18),transparent_28rem),radial-gradient(circle_at_82%_20%,rgba(42,166,161,0.12),transparent_24rem)]" />
        <div className="mx-auto max-w-6xl">
          <div className="lantern-panel max-w-4xl rounded-3xl p-6 md:p-12">
            <p className="gold-text uppercase tracking-[0.3em]">Video</p>
            <h1 className="gold-text mt-5 text-5xl leading-tight md:text-7xl">Video of the Quiet Light</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
              A gathering place for official videos, scripture reflections, music videos, visual teachings, and messages from The Way of Quiet Light.
            </p>
            <p className="mt-6 max-w-3xl leading-8 text-[var(--muted-silver)]">
              As new video work is released, this page will become the central home for watching and finding it from the Quiet Light website.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Coming Into View</p>
          <h2 className="mt-4 text-4xl md:text-6xl">A visual library for the work.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            The Video section is prepared as a dedicated space for the visual side of the ministry and its creative works.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {videoSections.map((section) => (
            <article className="lantern-panel rounded-3xl p-6 md:p-8" key={section.title}>
              <p className="gold-text text-xs uppercase tracking-[0.24em]">Video Path</p>
              <h3 className="mt-4 text-2xl text-[var(--ivory)]">{section.title}</h3>
              <p className="mt-5 leading-7 text-[var(--muted-silver)]">{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="lantern-panel rounded-3xl p-6 text-center md:p-12">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Flame Remains</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl md:text-5xl">The video archive will grow alongside the music, writings, and community.</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[var(--muted-silver)]">
            Until the full library is published, visitors can continue exploring the current works of The Way of Quiet Light.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--midnight)] shadow-[0_0_36px_rgba(216,168,79,0.24)] transition hover:bg-[var(--soft-gold)]" href="/music">
              Explore Music
            </Link>
            <Link className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:bg-[rgba(216,168,79,0.12)]" href="/blog">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
