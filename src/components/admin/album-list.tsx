"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type AlbumItem = {
  id: string;
  title: string;
  subtitle: string | null;
  slug: string;
  status: string;
};

export function AlbumList() {
  const [albums, setAlbums] = useState<AlbumItem[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function loadAlbums() {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("albums")
      .select("id,title,subtitle,slug,status")
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) {
      setMessage(error.message);
    } else {
      setAlbums((data ?? []) as AlbumItem[]);
    }

    setIsLoading(false);
  }

  async function archiveAlbum(albumId: string) {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("albums")
      .update({ status: "archived", updated_at: new Date().toISOString() })
      .eq("id", albumId);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Album archived.");
      await loadAlbums();
    }
  }

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Albums</p>
          <h2 className="mt-4 text-3xl">Recent albums</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadAlbums}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading albums...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {albums.map((album) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={album.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{album.status}</p>
            <h3 className="mt-3 text-2xl">{album.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{album.subtitle ?? `/${album.slug}`}</p>
            {album.status !== "archived" ? (
              <button className="mt-4 rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => archiveAlbum(album.id)}>
                Archive
              </button>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
