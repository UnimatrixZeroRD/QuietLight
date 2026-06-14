import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicMusicAlbumBySlug } from "../../../lib/supabase/music-content";

type AlbumPageProps = {
  params: Promise<{ slug: string }>;
};

const flameRemainsYouTubeMusicPlaylistId = "OLAK5uy_m9ocKx4s-vQs_r19ZUbelxR_J_kh3f14A";

const albumStreamingLinks: Record<
  string,
  {
    appleMusic?: string;
    spotify?: string;
    youtubeMusic?: string;
    youtubeMusicEmbed?: string;
  }
> = {
  "the-flame-remains": {
    appleMusic: "https://music.apple.com/us/album/the-flame-remains/1888600561",
    spotify: "https://open.spotify.com/album/5w2du8YOPpHiEh7Bkx03Kh",
    youtubeMusic: `https://music.youtube.com/playlist?list=${flameRemainsYouTubeMusicPlaylistId}`,
    youtubeMusicEmbed: `https://www.youtube.com/embed/videoseries?list=${flameRemainsYouTubeMusicPlaylistId}`,
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

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/music">
        Back to music
      </Link>
      <section className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="lantern-panel rounded-3xl p-6">
          {album.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="aspect-[4/5] w-full rounded-2xl object-cover" src={album.coverImageUrl} alt={album.coverAltText} />
          ) : (
            <div className="aspect-[4/5] rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(216,168,79,0.08)]" />
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
              <div className="mt-4 flex flex-wrap gap-3">
                {streamingLinks.appleMusic ? (
                  <a className="gold-text rounded-full border border-[rgba(216,168,79,0.38)] px-4 py-3 text-xs uppercase tracking-[0.18em] transition duration-300 hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]" href={streamingLinks.appleMusic} rel="noopener noreferrer" target="_blank">
                    Apple Music
                  </a>
                ) : null}
                {streamingLinks.spotify ? (
                  <a className="gold-text rounded-full border border-[rgba(216,168,79,0.38)] px-4 py-3 text-xs uppercase tracking-[0.18em] transition duration-300 hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]" href={streamingLinks.spotify} rel="noopener noreferrer" target="_blank">
                    Spotify
                  </a>
                ) : null}
                {streamingLinks.youtubeMusic ? (
                  <a className="gold-text rounded-full border border-[rgba(216,168,79,0.38)] px-4 py-3 text-xs uppercase tracking-[0.18em] transition duration-300 hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)]" href={streamingLinks.youtubeMusic} rel="noopener noreferrer" target="_blank">
                    YouTube Music
                  </a>
                ) : null}
              </div>
            </section>
          ) : null}

          {streamingLinks?.youtubeMusicEmbed ? (
            <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.2)] p-5">
              <p className="gold-text text-xs uppercase tracking-[0.25em]">YouTube Music Player</p>
              <iframe className="mt-5 h-[420px] w-full rounded-2xl border border-[rgba(216,168,79,0.2)] bg-[var(--midnight)]" src={streamingLinks.youtubeMusicEmbed} title={`${album.title} on YouTube Music`} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">If the player does not load, open the album through the YouTube Music button above.</p>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}