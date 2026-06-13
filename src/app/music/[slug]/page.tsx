import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicAlbumBySlug } from "../../../lib/supabase/public-content";

type AlbumPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: AlbumPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = await getPublicAlbumBySlug(slug);

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
  const album = await getPublicAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

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

          <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.2)] p-5">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Tracks</p>
            {album.tracks.length > 0 ? (
              <div className="mt-4 grid gap-4">
                {album.tracks.map((track) => (
                  <article className="rounded-2xl border border-[rgba(216,168,79,0.16)] p-4" key={track.id}>
                    <p className="gold-text text-xs uppercase tracking-[0.2em]">Track {track.trackNumber ?? "-"}</p>
                    <h2 className="mt-2 text-xl">{track.title}</h2>
                    {track.description ? <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{track.description}</p> : null}
                    {track.embedUrl ? (
                      <iframe className="mt-4 aspect-video w-full rounded-2xl border border-[rgba(216,168,79,0.2)]" src={track.embedUrl} title={`${track.title} player`} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">Published tracks will appear here as they are added.</p>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
