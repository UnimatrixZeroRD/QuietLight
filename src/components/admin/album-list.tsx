"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { AlbumQuickEditor, EditableAlbum } from "./album-quick-editor";

export function AlbumList() {
  const [albums, setAlbums] = useState<EditableAlbum[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [editingAlbumId, setEditingAlbumId] = useState("");

  const loadAlbums = useCallback(async () => {
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
      .select("id,title,subtitle,slug,description,cover_image_url,cover_alt_text,status")
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) {
      setMessage(error.message);
    } else {
      setAlbums((data ?? []) as EditableAlbum[]);
    }

    setIsLoading(false);
  }, []);

  async function setAlbumStatus(album: EditableAlbum, status: "draft" | "published" | "archived") {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("albums")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", album.id);

    if (error) {
      setMessage(error.message);
    } else {
      const label = status === "published" ? "published" : status === "draft" ? "moved to draft" : "archived";
      setMessage(`${album.title} ${label}.`);
      await loadAlbums();
    }
  }

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadAlbums();
    });
  }, [loadAlbums]);

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
        {albums.map((album) => {
          const isEditing = editingAlbumId === album.id;
          const needsCoverAltText = Boolean(album.cover_image_url) && !album.cover_alt_text?.trim();

          return (
            <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={album.id}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">{album.status}</p>
              <h3 className="mt-3 text-2xl">{album.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-silver)]">{album.subtitle ?? `/${album.slug}`}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{album.description || "No album description yet."}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Cover alt text: {album.cover_alt_text || "Not set"}</p>
              {needsCoverAltText ? <p className="mt-3 rounded-2xl border border-[rgba(216,168,79,0.65)] p-3 text-sm leading-6 text-[var(--muted-silver)]">Review: cover image needs alt text.</p> : null}
              {album.cover_image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="mt-4 aspect-[16/9] w-full rounded-2xl border border-[rgba(216,168,79,0.25)] object-cover" src={album.cover_image_url} alt={album.cover_alt_text || `${album.title} cover`} />
              ) : null}

              {isEditing ? <AlbumQuickEditor album={album} onSaved={loadAlbums} onCancel={() => setEditingAlbumId("")} /> : null}

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setEditingAlbumId(isEditing ? "" : album.id)}>
                  {isEditing ? "Close Edit" : "Edit Album"}
                </button>
                {album.status === "draft" ? (
                  <button className="rounded-full border border-[rgba(42,166,161,0.65)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setAlbumStatus(album, "published")}>
                    Publish
                  </button>
                ) : null}
                {album.status === "published" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setAlbumStatus(album, "draft")}>
                    Move to Draft
                  </button>
                ) : null}
                {album.status === "archived" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setAlbumStatus(album, "draft")}>
                    Restore Draft
                  </button>
                ) : null}
                {album.status !== "archived" ? (
                  <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setAlbumStatus(album, "archived")}>
                    Archive
                  </button>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
