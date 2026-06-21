import type { Metadata } from "next";
import Image from "next/image";

export const revalidate = 3600;

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

type YouTubeVideo = {
  id: string;
  title: string;
  published?: string;
};

type VideoSection = {
  eyebrow: string;
  title: string;
  description: string;
  details?: string[];
  channelId?: string;
  channelUrl?: string;
  channelCta: string;
  placeholderText: string;
  pinnedVideos?: YouTubeVideo[];
};

const musicArtistChannelId = "UCbuateNIrB9WYp9pFkIGkLA";
const musicArtistChannelUrl = `https://www.youtube.com/channel/${musicArtistChannelId}`;

const videoSections: VideoSection[] = [
  {
    eyebrow: "Official YouTube Channel",
    title: "The Way of Quiet Light",
    description:
      "Videos dedicated to the path itself: scripture reflections, teachings, announcements, devotional messages, and visual works connected to the Quiet Light ministry.",
    channelCta: "YouTube Channel Coming Soon",
    placeholderText: "Add the official Way of Quiet Light YouTube channel ID here when ready.",
  },
  {
    eyebrow: "Music Artist Channel",
    title: "Yehoshua of Ēatūn",
    description:
      "An artistic expression rooted in reflection, stillness, and the enduring search for meaning.",
    details: [
      "The music and spoken works presented here emerge from a deeper philosophical framework known as The Way of Quiet Light, where the focus is not on noise or spectacle, but on clarity, presence, and quiet transformation.",
      "Each piece is created as an invitation: to step back from the constant urgency of the world and enter a space where light and darkness are both acknowledged, and where understanding is allowed to unfold naturally. Drawing from spiritual language, historical echoes, and lived experience, the work does not seek to instruct or persuade, but to resonate.",
      "The name Yehoshua reflects an ancient idea of salvation and restoration, while Ēatūn grounds the work in personal lineage and identity. Together, they represent a bridge between the timeless and the present—between what has been carried forward and what is still being discovered.",
    ],
    channelId: musicArtistChannelId,
    channelUrl: musicArtistChannelUrl,
    channelCta: "Go Directly to the Artist Channel",
    placeholderText: "No public YouTube uploads were found for this artist channel yet.",
    pinnedVideos: [
      {
        id: "gKlRMe915Y0",
        title: "Latest Yehoshua of Ēatūn upload",
      },
    ],
  },
  {
    eyebrow: "Podcast Video Section",
    title: "Podcasts",
    description:
      "A place for podcast episodes, spoken reflections, conversations, and longer-form audio or video content connected to The Way of Quiet Light.",
    channelCta: "Podcast Archive Coming Soon",
    placeholderText: "Add the podcast YouTube channel ID here when ready.",
  },
];

function getXmlTag(block: string, tag: string) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return match?.[1]?.trim() ?? "";
}

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function getYouTubeVideos(channelId?: string): Promise<YouTubeVideo[]> {
  if (!channelId) return [];

  try {
    const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const xml = await response.text();
    const entries = xml.split("<entry>").slice(1);

    return entries
      .map((entry) => {
        const id = getXmlTag(entry, "yt:videoId");
        const title = decodeXml(getXmlTag(entry, "title"));
        const published = getXmlTag(entry, "published");

        if (!id || !title) return null;

        return { id, title, published };
      })
      .filter((video): video is YouTubeVideo => Boolean(video))
      .slice(0, 5);
  } catch {
    return [];
  }
}

function mergeVideos(pinnedVideos: YouTubeVideo[] = [], fetchedVideos: YouTubeVideo[] = []) {
  const seen = new Set<string>();

  return [...pinnedVideos, ...fetchedVideos]
    .filter((video) => {
      if (seen.has(video.id)) return false;
      seen.add(video.id);
      return true;
    })
    .slice(0, 5);
}

function YouTubeIframe({ video, featured = false }: { video: YouTubeVideo; featured?: boolean }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full rounded-2xl border border-[rgba(216,168,79,0.28)] shadow-[0_0_42px_rgba(216,168,79,0.12)]"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <p className={`${featured ? "mt-4 text-lg" : "mt-3 text-sm"} leading-6 text-[var(--muted-silver)]`}>{video.title}</p>
    </div>
  );
}

function ChannelPlaceholder({ text }: { text: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-[rgba(216,168,79,0.34)] bg-[rgba(7,17,31,0.58)] p-6 text-center shadow-[0_0_32px_rgba(216,168,79,0.08)]">
      <div>
        <p className="gold-text text-5xl" aria-hidden="true">▶</p>
        <p className="gold-text mt-4 text-xs uppercase tracking-[0.22em]">Video Area</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted-silver)]">{text}</p>
      </div>
    </div>
  );
}

function ChannelSection({ section, videos }: { section: VideoSection; videos: YouTubeVideo[] }) {
  const [featuredVideo, ...moreVideos] = videos;

  return (
    <article className="lantern-panel rounded-3xl p-6 md:p-10">
      <div className="max-w-4xl">
        <p className="gold-text text-xs uppercase tracking-[0.26em]">{section.eyebrow}</p>
        <h3 className="gold-text mt-4 text-4xl leading-tight md:text-6xl">{section.title}</h3>
        <p className="mt-6 text-lg leading-8 text-[var(--muted-silver)]">{section.description}</p>
        {section.details?.length ? (
          <div className="mt-6 space-y-5 leading-8 text-[var(--muted-silver)]">
            {section.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-10">
        {featuredVideo ? (
          <>
            <p className="gold-text mb-4 text-xs uppercase tracking-[0.24em]">Latest Video</p>
            <YouTubeIframe video={featuredVideo} featured />
          </>
        ) : (
          <ChannelPlaceholder text={section.placeholderText} />
        )}
      </div>

      {moreVideos.length ? (
        <div className="mt-10">
          <p className="gold-text mb-4 text-xs uppercase tracking-[0.24em]">More Recent Videos</p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {moreVideos.map((video) => (
              <YouTubeIframe video={video} key={video.id} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8">
        {section.channelUrl ? (
          <a
            className="gold-text inline-flex rounded-full border border-[rgba(216,168,79,0.42)] px-5 py-3 text-xs uppercase tracking-[0.18em] transition hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]"
            href={section.channelUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {section.channelCta}
          </a>
        ) : (
          <p className="gold-text inline-flex rounded-full border border-[rgba(216,168,79,0.28)] px-5 py-3 text-xs uppercase tracking-[0.18em]">
            {section.channelCta}
          </p>
        )}
      </div>
    </article>
  );
}

export default async function VideoPage() {
  const sectionsWithVideos = await Promise.all(
    videoSections.map(async (section) => {
      const fetchedVideos = await getYouTubeVideos(section.channelId);

      return {
        section,
        videos: mergeVideos(section.pinnedVideos, fetchedVideos),
      };
    }),
  );

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
              The page is divided into three full-width vertical areas, with one section for the Way of Quiet Light, one for the music artist channel, and one for podcasts.
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
            Each area appears one after another down the page. Public YouTube videos are pulled from the channel feed and embedded as one latest video followed by more recent uploads.
          </p>
        </div>

        <div className="space-y-12">
          {sectionsWithVideos.map(({ section, videos }) => (
            <ChannelSection section={section} videos={videos} key={section.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
