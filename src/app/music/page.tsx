const albums = ["The Flame Remains", "The Everlasting Light", "Gloria Patri"];

export default function MusicPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Music</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Music of the Quiet Light</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        A sacred music archive for psalms, hymns, albums, embedded players, and future digital music access.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {albums.map((album) => (
          <article className="lantern-panel rounded-3xl p-6" key={album}>
            <div className="mb-5 flex h-44 items-center justify-center rounded-2xl border border-[var(--lantern-gold)] bg-[var(--deep-blue)] text-5xl">✦</div>
            <h2 className="gold-text text-2xl">{album}</h2>
            <p className="mt-3 leading-7 text-[var(--muted-silver)]">Album pages, embedded listening links, and release notes will be added here.</p>
          </article>
        ))}
      </div>
      <div className="lantern-panel mt-10 rounded-3xl p-8">
        <h2 className="gold-text text-3xl">Future integrations</h2>
        <p className="mt-4 leading-8 text-[var(--muted-silver)]">
          This page will later connect to Spotify, Apple Music, YouTube, and other music platforms while keeping Quiet Light as the central archive.
        </p>
      </div>
    </main>
  );
}
