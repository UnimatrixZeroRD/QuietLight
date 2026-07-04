import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicMusicAlbumBySlug } from "../../../lib/supabase/music-content";

type AlbumPageProps = {
  params: Promise<{ slug: string }>;
};

const flameRemainsYouTubeMusicPlaylistId = "OLAK5uy_m9ocKx4s-vQs_r19ZUbelxR_J_kh3f14A";
const everlastingLightYouTubeMusicPlaylistId = "OLAK5uy_nHLhPAwknd6na_2Gc3L_sYq63qm13Q8iw";
const gloriaPatriYouTubeMusicPlaylistId = "OLAK5uy_kjZAJqwR3Fy7JzXYNUXDNyObYQkxWnJDc";
const littleLightsReleaseDateLabel = "July 8, 2026";

const albumStreamingLinks: Record<
  string,
  {
    appleMusic?: string;
    spotify?: string;
    youtubeMusic?: string;
    youtubeMusicEmbed?: string;
    releaseDateLabel?: string;
  }
> = {
  "the-flame-remains": {
    appleMusic: "https://music.apple.com/us/album/the-flame-remains/1888600561",
    spotify: "https://open.spotify.com/album/5w2du8YOPpHiEh7Bkx03Kh",
    youtubeMusic: `https://music.youtube.com/playlist?list=${flameRemainsYouTubeMusicPlaylistId}`,
    youtubeMusicEmbed: `https://www.youtube.com/embed/videoseries?list=${flameRemainsYouTubeMusicPlaylistId}`,
  },
  "the-everlasting-light": {
    appleMusic: "https://music.apple.com/us/album/the-everlasting-light/1894500765",
    spotify: "https://open.spotify.com/album/72HHI7tT8XD8mh6GQx6GHq",
    youtubeMusic: `https://music.youtube.com/playlist?list=${everlastingLightYouTubeMusicPlaylistId}`,
    youtubeMusicEmbed: `https://www.youtube.com/embed/videoseries?list=${everlastingLightYouTubeMusicPlaylistId}`,
  },
  "gloria-patri": {
    appleMusic: "https://music.apple.com/us/album/gloria-patri/1896409031",
    spotify: "https://open.spotify.com/album/6vIcKefpiWkY5SJFhmN2e4",
    youtubeMusic: `https://music.youtube.com/playlist?list=${gloriaPatriYouTubeMusicPlaylistId}`,
    youtubeMusicEmbed: `https://www.youtube.com/embed/videoseries?list=${gloriaPatriYouTubeMusicPlaylistId}`,
  },
  "little-lights-part-1": {
    releaseDateLabel: littleLightsReleaseDateLabel,
  },
  "little-lights-part-2": {
    releaseDateLabel: littleLightsReleaseDateLabel,
  },
};

export async function generateMetadata({ params }: AlbumPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = await getPublicMusicAlbumBySlug(slug);

  if (!album) {
    return {
      title: "Album Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: album.title,
    description: album.description,
    alternates: { canonical: `/music/${album.slug}` },
    openGraph: {
      title: `${album.title} | Quiet Light Music`,
      description: album.description,
      url: `/music/${album.slug}`,
      images: album.coverImageUrl ? [{ url: album.coverImageUrl, alt: album.coverAltText }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: album.title,
      description: album.description,
      images: album.coverImageUrl ? [album.coverImageUrl] : undefined,
    },
  };
}

export default async function AlbumDetailPage({ params }: AlbumPageProps) {
  const { slug } = await params;
  const album = await getPublicMusicAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  const streamingLinks = albumStreamingLinks[album.slug];
  const streamingServices = streamingLinks
    ? [
        { label: "Apple Music", href: streamingLinks.appleMusic },
        { label: "Spotify", href: streamingLinks.spotify },
        { label: "YouTube Music", href: streamingLinks.youtubeMusic },
      ]
    : [];
  const isSquareAlbumArtwork = album.slug.startsWith("little-lights");
  const coverImageClassName = isSquareAlbumArtwork
    ? "aspect-square w-full rounded-2xl object-contain"
    : "aspect-[4/5] w-full rounded-2xl object-cover";
  const coverPlaceholderClassName = isSquareAlbumArtwork
    ? "aspect-square rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(216,168,79,0.08)]"
    : "aspect-[4/5] rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(216,168,79,0.08)]";

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/music">
        Back to music
      </Link>
      <section className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="lantern-panel rounded-3xl p-6">
          {album.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={coverImageClassName} src={album.coverImageUrl} alt={album.coverAltText} />
          ) : (
            <div className={coverPlaceholderClassName} />
          )}
        </div>
        <div className="lantern-panel rounded-3xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">Album</p>
          <h1 className="gold-text mt-4 text-5xl md:text-7xl">{album.title}</h1>
          {album.subtitle ? <p className="mt-5 text-xl text-[var(--soft-gold)]">{album.subtitle}</p> : null}
          <p className="mt-8 text-lg leading-8 text-[var(--muted-silver)]">{album.description}</p>

          {streamingLinks ? (
            <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.2)] p-5">
              <p className="gold-text text-xs uppercase tracking-[0.25em]">Listen to the album</p>
              {streamingLinks.releaseDateLabel ? (
                <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Streaming links are being prepared and will be added when this album goes live on {streamingLinks.releaseDateLabel}.</p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-3">
                {streamingServices.map((service) =>
                  service.href ? (
                    <a className="gold-text rounded-full border border-[rgba(216,168,79,0.38)] px-4 py-3 text-xs uppercase tracking-[0.18em] transition duration-300 hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]" href={service.href} key={service.label} rel="noopener noreferrer" target="_blank">
                      {service.label}
                    </a>
                  ) : (
                    <span aria-disabled="true" className="rounded-full border border-[rgba(216,168,79,0.24)] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] opacity-80" key={service.label}>
                      {service.label} · Coming {streamingLinks.releaseDateLabel}
                    </span>
                  )
                )}
              </div>
            </section>
          ) : null}

          {streamingLinks?.youtubeMusicEmbed ? (
            <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.2)] p-5">
              <p className="gold-text text-xs uppercase tracking-[0.25em]">YouTube Music Player</p>
              <iframe className="mt-5 h-[420px] w-full rounded-2xl border border-[rgba(216,168,79,0.2)] bg-[var(--midnight)]" src={streamingLinks.youtubeMusicEmbed} title={`${album.title} on YouTube Music`} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">If the player does not load, open the album through the YouTube Music button above.</p>
            </section>
          ) : streamingLinks?.releaseDateLabel ? (
            <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.2)] p-5">
              <p className="gold-text text-xs uppercase tracking-[0.25em]">YouTube Music Player</p>
              <div className="mt-5 flex min-h-[220px] items-center justify-center rounded-2xl border border-[rgba(216,168,79,0.2)] bg-[rgba(7,17,31,0.72)] p-6 text-center">
                <p className="max-w-xl text-sm leading-7 text-[var(--muted-silver)]">The YouTube Music stream will appear here when this album goes live on {streamingLinks.releaseDateLabel}. Once the playlist link is available, this placeholder can be replaced with the embedded player.</p>
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
