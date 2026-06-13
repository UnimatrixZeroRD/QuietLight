import Link from "next/link";
import { getPublicMusicAlbums } from "../../lib/supabase/music-content";

export default async function MusicPage() {
  const albums = await getPublicMusicAlbums();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Music</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Music of the Quiet Light</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        A sacred music archive for psalms, hymns, albums, embedded players, and future digital music access.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {albums.map((album) => (
          <Link className="lantern-panel rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.55)]" href={album.href} key={album.slug}>
            {album.coverImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="mb-5 aspect-[16/9] w-full rounded-2xl border border-[rgba(216,168,79,0.25)] object-cover" src={album.coverImageUrl} alt={album.coverAltText} />
            ) : (
              <div className="mb-5 flex h-44 items-center justify-center rounded-2xl border border-[var(--lantern-gold)] bg-[var(--deep-blue)] text-5xl">✦</div>
            )}
            <h2 className="gold-text text-2xl">{album.title}</h2>
            {album.subtitle ? <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)]">{album.subtitle}</p> : null}
            <p className="mt-3 leading-7 text-[var(--muted-silver)]">{album.description}</p>
            <p className="gold-text mt-5 text-xs uppercase tracking-[0.2em]">Open album</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
