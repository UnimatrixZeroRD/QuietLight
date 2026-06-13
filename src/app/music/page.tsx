import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublicMusicAlbums } from "../../lib/supabase/music-content";

const artistName = "Yehoshua of Ēatūn";
const holyTrinityImage = "/images/music/holy-trinity-graphic.png";

export const metadata: Metadata = {
  title: "Music",
  description: "Albums, singles, psalms, hymns, and sacred music by Yehoshua of Ēatūn from The Way of Quiet Light.",
  alternates: { canonical: "/music" },
  openGraph: {
    title: "Music of the Quiet Light",
    description: "Albums, singles, psalms, hymns, and sacred music by Yehoshua of Ēatūn from The Way of Quiet Light.",
    url: "/music",
    images: [{ url: holyTrinityImage, width: 1200, height: 630, alt: "The Holy Trinity music collection graphic." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music of the Quiet Light",
    description: "Albums, singles, psalms, hymns, and sacred music by Yehoshua of Ēatūn from The Way of Quiet Light.",
    images: [holyTrinityImage],
  },
};

type AlbumShowcaseItem = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  href: string;
  coverImageUrl: string;
  coverAltText: string;
};

type SingleShowcaseItem = {
  title: string;
  subtitle: string;
  description: string;
  coverImageUrl: string;
  coverAltText: string;
};

const artistLinks = [
  ["Apple Music", "https://music.apple.com/us/artist/yehoshua-of-%C4%93at%C5%ABn/1888389584"],
  ["Spotify", "https://open.spotify.com/artist/0k96zp5CFLPM2I2EtFOLTB"],
  ["YouTube Music", "https://music.youtube.com/@Yehoshuaof%C4%92at%C5%ABn"],
  ["Amazon Music", "https://music.amazon.ca/artists/B0GV448JLH/yehoshua-of-%C4%93at%C5%ABn"],
  ["Boomplay", "https://www.boomplay.com/artists/128515868"],
  ["SoundCloud", "https://soundcloud.com/yehoshua-of-at-n"],
] as const;

const holyTrinityAlbums: AlbumShowcaseItem[] = [
  {
    title: "The Flame Remains",
    slug: "the-flame-remains",
    subtitle: "The Lantern Psalms, Volume I",
    description: "Sacred music for prayer, stillness, worship, and reflection.",
    href: "/music/the-flame-remains",
    coverImageUrl: "/images/music/flame-remains-cover.png",
    coverAltText: "The Flame Remains album cover.",
  },
  {
    title: "The Everlasting Light",
    slug: "the-everlasting-light",
    subtitle: "A Way of Quiet Light Hymn Collection",
    description: "A hymn collection for devotion, quiet worship, and spiritual renewal.",
    href: "/music/the-everlasting-light",
    coverImageUrl: "/images/music/everlasting-light-cover.png",
    coverAltText: "The Everlasting Light album cover.",
  },
  {
    title: "Gloria Patri",
    slug: "gloria-patri",
    subtitle: "Songs of the Holy Trinity",
    description: "A sacred music collection centered on glory, prayer, and praise.",
    href: "/music/gloria-patri",
    coverImageUrl: "/images/music/gloria-patri-cover.png",
    coverAltText: "Gloria Patri album cover.",
  },
];

const singles: SingleShowcaseItem[] = [
  {
    title: "The Sound of Silence (I Returned)",
    subtitle: "Sacred Single",
    description: "A contemplative single about silence, return, and the quiet road back to the light.",
    coverImageUrl: "/images/music/thesoundofsilence.png",
    coverAltText: "The Sound of Silence (I Returned) single cover.",
  },
  {
    title: "The Light Led Me Back",
    subtitle: "Sacred Single",
    description: "A song of hope, restoration, and the light that calls the keeper home.",
    coverImageUrl: "/images/music/thelightledmeback.png",
    coverAltText: "The Light Led Me Back single cover.",
  },
  {
    title: "Into Your Hands (The Crucifixion)",
    subtitle: "Good Friday Single",
    description: "A Good Friday meditation on surrender, sacrifice, and the solemn mystery of the Cross.",
    coverImageUrl: "/images/music/intoyourhands.png",
    coverAltText: "Into Your Hands (The Crucifixion) single cover.",
  },
  {
    title: "The Day the Stone Was Lifted (The Resurrection)",
    subtitle: "Easter Single",
    description: "An Easter release centered on resurrection, renewal, and the dawn after the tomb.",
    coverImageUrl: "/images/music/thedaythestonewaslifted.png",
    coverAltText: "The Day the Stone Was Lifted (The Resurrection) single cover.",
  },
];

function ArtistProfileLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap ${compact ? "gap-2" : "gap-3"}`}>
      {artistLinks.map(([label, href]) => (
        <a
          className={`gold-text rounded-full border border-[rgba(216,168,79,0.38)] transition duration-300 hover:border-[rgba(216,168,79,0.72)] hover:bg-[rgba(216,168,79,0.08)] ${compact ? "px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em]" : "px-5 py-3 text-xs uppercase tracking-[0.2em]"}`}
          href={href}
          key={label}
          rel="noopener noreferrer"
          target="_blank"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

function AlbumCard({ album }: { album: AlbumShowcaseItem }) {
  return (
    <Link className="lantern-panel group flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(216,168,79,0.65)]" href={album.href}>
      <div className="relative overflow-hidden rounded-2xl border border-[rgba(216,168,79,0.28)] bg-[var(--midnight)] shadow-[0_0_42px_rgba(255,179,71,0.14)]">
        <Image src={album.coverImageUrl} alt={album.coverAltText} width={1254} height={1254} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="h-auto w-full transition duration-300 group-hover:scale-[1.03]" />
        <span className="absolute left-4 top-4 rounded-full border border-[rgba(216,168,79,0.55)] bg-[rgba(7,17,31,0.78)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)] backdrop-blur">Available</span>
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <p className="gold-text text-xs uppercase tracking-[0.22em]">Holy Trinity Album</p>
        <h2 className="gold-text mt-3 text-3xl leading-tight">{album.title}</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)]">{album.subtitle}</p>
        <p className="mt-4 flex-1 leading-7 text-[var(--muted-silver)]">{album.description}</p>
        <p className="gold-text mt-6 text-xs uppercase tracking-[0.2em]">Open album page</p>
      </div>
    </Link>
  );
}

function SingleCard({ single, index }: { single: SingleShowcaseItem; index: number }) {
  return (
    <article className="lantern-panel flex h-full flex-col rounded-3xl p-5">
      <div className="overflow-hidden rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[var(--midnight)] shadow-[0_0_42px_rgba(255,179,71,0.12)]">
        <Image src={single.coverImageUrl} alt={single.coverAltText} width={1254} height={1254} sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw" className="h-auto w-full transition duration-300 hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <p className="gold-text text-xs uppercase tracking-[0.22em]">Available Single {index + 1}</p>
        <h3 className="gold-text mt-3 text-2xl leading-tight">{single.title}</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)]">{single.subtitle}</p>
        <p className="mt-4 flex-1 leading-7 text-[var(--muted-silver)]">{single.description}</p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted-silver)]">Listen under {artistName}</p>
      </div>
    </article>
  );
}

export default async function MusicPage() {
  const publicAlbums = await getPublicMusicAlbums();
  const publicAlbumBySlug = new Map(publicAlbums.map((album) => [album.slug, album]));
  const albumCards = holyTrinityAlbums.map((album) => {
    const published = publicAlbumBySlug.get(album.slug);
    return {
      ...album,
      title: published?.title ?? album.title,
      subtitle: published?.subtitle ?? album.subtitle,
      description: published?.description ?? album.description,
      href: published?.href ?? album.href,
      coverImageUrl: album.coverImageUrl,
      coverAltText: published?.coverAltText ?? album.coverAltText,
    };
  });

  return (
    <main className="pb-24">
      <section className="relative overflow-hidden border-b border-[rgba(216,168,79,0.22)] px-4 py-16 sm:px-6 md:py-24" aria-label="Music of the Quiet Light">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(216,168,79,0.18),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(42,166,161,0.14),transparent_24rem)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="gold-text uppercase tracking-[0.3em]">Music</p>
            <h1 className="gold-text mt-5 text-5xl leading-tight md:text-7xl">Music of the Quiet Light</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">Albums, singles, psalms, hymns, and sacred music by {artistName} for prayer, stillness, worship, and reflection.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)]">
              <span className="rounded-full border border-[rgba(216,168,79,0.35)] px-4 py-2">3 albums</span>
              <span className="rounded-full border border-[rgba(216,168,79,0.35)] px-4 py-2">4 singles</span>
              <span className="rounded-full border border-[rgba(216,168,79,0.35)] px-4 py-2">Available now</span>
            </div>
            <div className="mt-8"><ArtistProfileLinks compact /></div>
          </div>
          <div className="lantern-panel overflow-hidden rounded-[2rem] p-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-[rgba(216,168,79,0.28)] bg-[var(--midnight)]">
              <Image src={holyTrinityImage} alt="The Holy Trinity music collection graphic." width={1200} height={630} sizes="(min-width: 1024px) 48vw, 100vw" className="h-auto w-full" />
            </div>
            <div className="p-5">
              <p className="gold-text text-xs uppercase tracking-[0.28em]">The Holy Trinity</p>
              <p className="mt-3 leading-7 text-[var(--muted-silver)]">Three sacred albums gathered as the central music collection of The Way of Quiet Light.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20" aria-labelledby="holy-trinity-albums">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="gold-text uppercase tracking-[0.3em]">Albums</p>
            <h2 id="holy-trinity-albums" className="mt-4 text-4xl md:text-6xl">The Holy Trinity</h2>
          </div>
          <p className="max-w-2xl leading-8 text-[var(--muted-silver)]">The three full album releases are available now. Each album page is ready for the final listening links and embedded players.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">{albumCards.map((album) => <AlbumCard album={album} key={album.slug} />)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20" aria-labelledby="available-singles">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="gold-text uppercase tracking-[0.3em]">Singles</p>
            <h2 id="available-singles" className="mt-4 text-4xl md:text-6xl">Available Singles</h2>
          </div>
          <p className="max-w-2xl leading-8 text-[var(--muted-silver)]">Four standalone releases sit alongside the Holy Trinity album collection and are available through the official {artistName} profiles.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{singles.map((single, index) => <SingleCard index={index} key={single.title} single={single} />)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20" aria-labelledby="artist-profile">
        <div className="lantern-panel rounded-3xl p-6 md:p-10">
          <p className="gold-text uppercase tracking-[0.3em]">Artist Profile</p>
          <h2 id="artist-profile" className="mt-4 text-4xl md:text-6xl">Listen to {artistName}.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-silver)]">Albums and singles are published under {artistName}. Use the official artist profiles below to listen across major music platforms.</p>
          <div className="mt-8"><ArtistProfileLinks /></div>
        </div>
      </section>
    </main>
  );
}