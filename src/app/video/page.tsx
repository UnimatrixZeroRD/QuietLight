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

type MediaLink = {
  label: string;
  href: string;
};

type VideoSection = {
  eyebrow: string;
  title: string;
  description: string;
  details?: string[];
  values?: string[];
  channelId?: string;
  channelUrl?: string;
  channelCta: string;
  placeholderText: string;
  pinnedVideos?: YouTubeVideo[];
  audioEmbedTitle?: string;
  audioEmbedUrl?: string;
  additionalLinks?: MediaLink[];
};

const wayOfQuietLightChannelId = "UC-b5c3z_6vN5VFm-Nkpj3ag";
const wayOfQuietLightChannelUrl = `https://www.youtube.com/channel/${wayOfQuietLightChannelId}`;
const musicArtistChannelId = "UCbuateNIrB9WYp9pFkIGkLA";
const musicArtistChannelUrl = `https://www.youtube.com/channel/${musicArtistChannelId}`;
const podcastSpotifyShowId = "3oqbLiVLt6kOyUGhP83m02";
const podcastSpotifyUrl = `https://open.spotify.com/show/${podcastSpotifyShowId}`;
const podcastSpotifyEmbedUrl = `https://open.spotify.com/embed/show/${podcastSpotifyShowId}?utm_source=generator`;
const podcastAppleUrl = "https://podcasts.apple.com/us/podcast/the-way-of-quiet-light/id1887124259";
const podcastAmazonUrl = "https://music.amazon.com/podcasts/68f09d83-233f-4916-a799-edbb2bbffbe9/the-way-of-quiet-light";
const podcastGoodpodsUrl = "https://goodpods.com/podcasts/the-way-of-quiet-light-737745";
const podcastPocketCastsUrl = "https://pocketcasts.com/podcast/the-way-of-quiet-light/d78ca900-169d-013f-57cf-02366ae7f0f7";

const videoSections: VideoSection[] = [
  {
    eyebrow: "Official YouTube Channel",
    title: "The Way of Quiet Light",
    description:
      "A quiet place for reflection, faith, and spiritual growth.",
    details: [
      "This channel shares the sermons, teachings, prayers, and reflections that flow from The Way of Quiet Light — a path centred on humility, endurance, and the steady light of Christ.",
      "The purpose of this channel is not spectacle or performance. The deeper work of faith often happens quietly, in the hidden corners of our lives where the soul wrestles, heals, and slowly learns to walk again in the light. What we share here are the words that help guide that journey.",
      "Through sermons, devotional reflections, Scripture study, and teachings inspired by works such as The Keeper’s Lantern and the Geneva Bible Project, this channel seeks to encourage those who are searching for a quieter and more thoughtful walk with Christ.",
    ],
    values: [
      "Walk with compassion",
      "Speak with humility and grace",
      "Endure faithfully through hardship",
      "Seek wisdom in Scripture",
      "Keep the light alive in a troubled world",
    ],
    channelId: wayOfQuietLightChannelId,
    channelUrl: wayOfQuietLightChannelUrl,
    channelCta: "Go Directly to the Way of Quiet Light Channel",
    placeholderText: "No public YouTube uploads were found for The Way of Quiet Light channel yet.",
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
    eyebrow: "Podcast Section",
    title: "Podcasts",
    description:
      "A guided journey through The Way of Quiet Light, using The Keeper’s Lantern as its framework.",
    details: [
      "This podcast explores faith, struggle, and the enduring presence of light in life’s darkest moments.",
      "Through reflection, story, and spiritual insight, each episode offers a path forward—not through noise, but through clarity, stillness, and the flame that remains.",
    ],
    channelUrl: podcastSpotifyUrl,
    channelCta: "Listen on Spotify",
    placeholderText: "The Spotify podcast player will appear here when available.",
    audioEmbedTitle: "The Way of Quiet Light podcast on Spotify",
    audioEmbedUrl: podcastSpotifyEmbedUrl,
    additionalLinks: [
      { label: "Listen on Apple Podcasts", href: podcastAppleUrl },
      { label: "Listen on Amazon Music", href: podcastAmazonUrl },
      { label: "Listen on Goodpods", href: podcastGoodpodsUrl },
      { label: "Listen on Pocket Casts", href: podcastPocketCastsUrl },
    ],
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
    const videos: YouTubeVideo[] = [];

    for (const entry of entries) {
      const id = getXmlTag(entry, "yt:videoId");
      const title = decodeXml(getXmlTag(entry, "title"));
      const published = getXmlTag(entry, "published");

      if (!id || !title) continue;

      videos.push({
        id,
        title,
        ...(published ? { published } : {}),
      });
    }

    return videos.slice(0, 5);
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

function SpotifyIframe({ title, url }: { title: string; url: string }) {
  return (
    <iframe
      className="min-h-[352px] w-full rounded-2xl border border-[rgba(216,168,79,0.28)] shadow-[0_0_42px_rgba(216,168,79,0.12)]"
      src={url}
      title={title}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
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

function SectionLinks({ section }: { section: VideoSection }) {
  const links: MediaLink[] = [
    ...(section.channelUrl ? [{ label: section.channelCta, href: section.channelUrl }] : []),
    ...(section.additionalLinks ?? []),
  ];

  if (!links.length) {
    return (
      <p className="gold-text inline-flex rounded-full border border-[rgba(216,168,79,0.28)] px-5 py-3 text-xs uppercase tracking-[0.18em]">
        {section.channelCta}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          className="gold-text inline-flex rounded-full border border-[rgba(216,168,79,0.42)] px-5 py-3 text-xs uppercase tracking-[0.18em] transition hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]"
          href={link.href}
          key={link.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.label}
        </a>
      ))}
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
        {section.values?.length ? (
          <div className="mt-8">
            <p className="gold-text text-xs uppercase tracking-[0.22em]">Here we strive to</p>
            <ul className="mt-5 grid gap-3 text-[var(--muted-silver)] sm:grid-cols-2">
              {section.values.map((value) => (
                <li className="flex gap-3 leading-7" key={value}>
                  <span aria-hidden="true">✨</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="mt-10">
        {featuredVideo ? (
          <>
            <p className="gold-text mb-4 text-xs uppercase tracking-[0.24em]">Latest Video</p>
            <YouTubeIframe video={featuredVideo} featured />
          </>
        ) : section.audioEmbedUrl ? (
          <>
            <p className="gold-text mb-4 text-xs uppercase tracking-[0.24em]">Podcast Player</p>
            <SpotifyIframe title={section.audioEmbedTitle ?? section.title} url={section.audioEmbedUrl} />
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
        <SectionLinks section={section} />
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
          <h2 className="mt-4 text-4xl md:text-6xl">Three dedicated media areas.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            Each area appears one after another down the page. Public YouTube videos are pulled from channel feeds, while the podcast section uses the embedded Spotify show player.
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
