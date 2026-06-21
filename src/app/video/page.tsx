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
  // Replace this with the final Video page image when ready.
  src: "/images/backgrounds/quiet-light-header.webp",
  alt: "The Way of Quiet Light header artwork with aurora-lit mountains, lanterns, and a lakeside path.",
  width: 1672,
  height: 941,
};

type VideoItem = {
  title: string;
  embedUrl?: string;
};

type VideoSection = {
  eyebrow: string;
  title: string;
  description: string;
  channelUrl?: string;
  channelCta: string;
  featuredVideo?: VideoItem;
  additionalVideos: VideoItem[];
};

const musicArtistChannelUrl = "https://www.youtube.com/@Yehoshuaof%C4%92at%C5%ABn";

const videoSections: VideoSection[] = [
  {
    eyebrow: "Official YouTube Channel",
    title: "The Way of Quiet Light",
    description:
      "Videos dedicated to the path itself: scripture reflections, teachings, announcements, devotional messages, and visual works connected to the Quiet Light ministry.",
    channelCta: "YouTube Channel Coming Soon",
    featuredVideo: { title: "Latest Way of Quiet Light Video" },
    additionalVideos: [
      { title: "Way of Quiet Light Video 1" },
      { title: "Way of Quiet Light Video 2" },
      { title: "Way of Quiet Light Video 3" },
      { title: "Way of Quiet Light Video 4" },
      { title: "Way of Quiet Light Video 5" },
    ],
  },
  {
    eyebrow: "Music Artist Channel",
    title: "Yehoshua of Ēatūn",
    description:
      "Music videos and visual companions for psalms, hymns, singles, and sacred music released under the Yehoshua of Ēatūn artist name.",
    channelUrl: musicArtistChannelUrl,
    channelCta: "Go to Artist Channel",
    featuredVideo: { title: "Latest Yehoshua of Ēatūn Video" },
    additionalVideos: [
      { title: "Yehoshua of Ēatūn Video 1" },
      { title: "Yehoshua of Ēatūn Video 2" },
      { title: "Yehoshua of Ēatūn Video 3" },
      { title: "Yehoshua of Ēatūn Video 4" },
      { title: "Yehoshua of Ēatūn Video 5" },
    ],
  },
  {
    eyebrow: "Podcast Video Section",
    title: "Podcasts",
    description:
      "A place for podcast episodes, spoken reflections, conversations, and longer-form audio or video content connected to The Way of Quiet Light.",
    channelCta: "Podcast Archive Coming Soon",
    featuredVideo: { title: "Latest Podcast Episode" },
    additionalVideos: [
      { title: "Podcast Episode 1" },
      { title: "Podcast Episode 2" },
      { title: "Podcast Episode 3" },
      { title: "Podcast Episode 4" },
      { title: "Podcast Episode 5" },
    ],
  },
];

function VideoEmbedSlot({ item, label }: { item: VideoItem; label: string }) {
  if (item.embedUrl) {
    return (
      <iframe
        className="aspect-video w-full rounded-2xl border border-[rgba(216,168,79,0.28)] shadow-[0_0_42px_rgba(216,168,79,0.12)]"
        src={item.embedUrl}
        title={item.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-[rgba(216,168,79,0.34)] bg-[rgba(7,17,31,0.58)] p-6 text-center shadow-[0_0_32px_rgba(216,168,79,0.08)]">
      <div>
        <p className="gold-text text-4xl" aria-hidden="true">▶</p>
        <p className="gold-text mt-4 text-xs uppercase tracking-[0.22em]">{label}</p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{item.title}</p>
      </div>
    </div>
  );
}

function ChannelSection({ section }: { section: VideoSection }) {
  return (
    <article className="lantern-panel rounded-3xl p-6 md:p-10">
      <div className="max-w-4xl">
        <p className="gold-text text-xs uppercase tracking-[0.26em]">{section.eyebrow}</p>
        <h3 className="gold-text mt-4 text-4xl leading-tight md:text-6xl">{section.title}</h3>
        <p className="mt-6 text-lg leading-8 text-[var(--muted-silver)]">{section.description}</p>
        {section.channelUrl ? (
          <Link
            className="gold-text mt-7 inline-flex rounded-full border border-[rgba(216,168,79,0.42)] px-5 py-3 text-xs uppercase tracking-[0.18em] transition hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]"
            href={section.channelUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {section.channelCta}
          </Link>
        ) : (
          <p className="gold-text mt-7 inline-flex rounded-full border border-[rgba(216,168,79,0.28)] px-5 py-3 text-xs uppercase tracking-[0.18em]">
            {section.channelCta}
          </p>
        )}
      </div>

      <div className="mt-10">
        <p className="gold-text mb-4 text-xs uppercase tracking-[0.24em]">Featured / Latest Video</p>
        {section.featuredVideo ? <VideoEmbedSlot item={section.featuredVideo} label="Featured Embed Slot" /> : null}
      </div>

      <div className="mt-10">
        <p className="gold-text mb-4 text-xs uppercase tracking-[0.24em]">More Videos</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.additionalVideos.map((video, index) => (
            <VideoEmbedSlot item={video} label={`Video Embed Slot ${index + 1}`} key={`${section.title}-${video.title}`} />
          ))}
        </div>
      </div>
    </article>
  );
}

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
              The page is divided into three full-width areas so each channel can have its own featured video, additional videos, and direct channel button.
            </p>
          </div>

          <div className="lantern-panel overflow-hidden rounded-3xl p-4">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="aspect-video h-auto w-full rounded-2xl object-cover shadow-[0_0_48px_rgba(216,168,79,0.14)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Watch and Listen</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Three dedicated video areas.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            Each section is stacked vertically and prepared for a featured/latest video, five additional video embeds, and a direct channel link.
          </p>
        </div>

        <div className="space-y-10">
          {videoSections.map((section) => (
            <ChannelSection section={section} key={section.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
