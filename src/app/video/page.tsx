import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video",
  description: "Video content for The Way of Quiet Light, including official teachings, music videos, and podcast episodes.",
  alternates: { canonical: "/video" },
  openGraph: {
    title: "Video | The Way of Quiet Light",
    description: "Video content for The Way of Quiet Light, including official teachings, music videos, and podcast episodes.",
    url: "/video",
  },
};

const heroImage = {
  src: "",
  alt: "Video content from The Way of Quiet Light.",
  width: 1600,
  height: 900,
};

const videoSections = [
  {
    eyebrow: "Official YouTube Channel",
    title: "The Way of Quiet Light",
    description:
      "Videos dedicated to the path itself: scripture reflections, teachings, announcements, devotional messages, and visual works connected to the Quiet Light ministry.",
    href: "https://www.youtube.com/",
    cta: "Visit YouTube Channel",
    highlights: ["Scripture reflections", "Quiet Light teachings", "Official ministry updates"],
  },
  {
    eyebrow: "Music Artist Channel",
    title: "Yehoshua of Ēatūn",
    description:
      "Music videos and visual companions for psalms, hymns, singles, and sacred music released under the Yehoshua of Ēatūn artist name.",
    href: "https://music.youtube.com/@Yehoshuaof%C4%92at%C5%ABn",
    cta: "Visit Artist Channel",
    highlights: ["Music videos", "Album visuals", "Sacred songs and hymns"],
  },
  {
    eyebrow: "Podcast Video Section",
    title: "Podcasts",
    description:
      "A place for podcast episodes, spoken reflections, conversations, and longer-form audio or video content connected to The Way of Quiet Light.",
    href: "/blog",
    cta: "Podcast Archive Coming Soon",
    highlights: ["Podcast episodes", "Spoken reflections", "Long-form commentary"],
  },
];

export default function VideoPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-[rgba(216,168,79,0.22)] px-4 py-16 sm:px-6 md:py-24" aria-label="Video of the Quiet Light">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(216,168,79,0.18),transparent_28rem),radial-gradient(circle_at_82%_20%,rgba(42,166,161,0.12),transparent_24rem)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="lantern-panel rounded-3xl p-6 md:p-12">
            <p className="gold-text uppercase tracking-[0.3em]">Video</p>
            <h1 className="gold-text mt-5 text-5xl leading-tight md:text-7xl">Video of the Quiet Light</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
              This page gathers the video content of The Way of Quiet Light: official teachings, visual reflections, music videos, and podcast episodes.
            </p>
            <p className="mt-6 max-w-3xl leading-8 text-[var(--muted-silver)]">
              It is organized into three paths so visitors can easily find the ministry channel, the sacred music channel, and the podcast/video archive as the library grows.
            </p>
          </div>

          <div className="lantern-panel overflow-hidden rounded-3xl p-4">
            {heroImage.src ? (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-video h-auto w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-2xl border border-[rgba(216,168,79,0.34)] bg-[radial-gradient(circle_at_50%_35%,rgba(216,168,79,0.2),rgba(7,17,31,0.94)_58%),linear-gradient(135deg,rgba(11,31,58,0.82),rgba(7,17,31,0.98))] p-8 text-center shadow-[0_0_48px_rgba(216,168,79,0.14)]">
                <div>
                  <p className="gold-text text-5xl" aria-hidden="true">▶</p>
                  <p className="gold-text mt-5 text-xs uppercase tracking-[0.28em]">Featured Video Image</p>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--muted-silver)]">
                    Add a hero image here for the Video page introduction.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Watch and Listen</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Three paths for video content.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            The video library is divided into the official Way of Quiet Light channel, the Yehoshua of Ēatūn music channel, and the podcast section.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {videoSections.map((section) => (
            <article className="lantern-panel flex h-full flex-col rounded-3xl p-6 md:p-8" key={section.title}>
              <p className="gold-text text-xs uppercase tracking-[0.24em]">{section.eyebrow}</p>
              <h3 className="mt-4 text-3xl text-[var(--ivory)]">{section.title}</h3>
              <p className="mt-5 flex-1 leading-7 text-[var(--muted-silver)]">{section.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--muted-silver)]">
                {section.highlights.map((highlight) => (
                  <li className="flex gap-3" key={highlight}>
                    <span className="gold-text" aria-hidden="true">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                className="gold-text mt-8 inline-flex w-fit rounded-full border border-[rgba(216,168,79,0.42)] px-5 py-3 text-xs uppercase tracking-[0.18em] transition hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]"
                href={section.href}
                rel={section.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={section.href.startsWith("http") ? "_blank" : undefined}
              >
                {section.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
