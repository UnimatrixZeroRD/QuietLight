"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type TrackItem = {
  id: string;
  title: string;
  slug: string;
  status: string;
  track_number: number | null;
  embed_url: string | null;
};

export function TrackList() {
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadTracks = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("tracks")
      .select("id,title,slug,status,track_number,embed_url")
      .order("created_at", { ascending: false })
      .limit(30);

    if (error) {
      setMessage(error.message);
    } else {
      setTracks((data ?? []) as TrackItem[]);
    }

    setIsLoading(false);
  }, []);

  async function archiveTrack(trackId: string) {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("tracks")
      .update({ status: "archived", updated_at: new Date().toISOString() })
      .eq("id", trackId);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Track archived.");
      await loadTracks();
    }
  }

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadTracks();
    });
  }, [loadTracks]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Tracks</p>
          <h2 className="mt-4 text-3xl">Recent tracks</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadTracks}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading tracks...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {tracks.map((track) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={track.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Track {track.track_number ?? "-"} - {track.status}</p>
            <h3 className="mt-3 text-2xl">{track.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">/{track.slug}</p>
            {track.embed_url ? <p className="mt-2 text-xs text-[var(--muted-silver)]">Embed attached</p> : null}
            {track.status !== "archived" ? (
              <button className="mt-4 rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => archiveTrack(track.id)}>
                Archive
              </button>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
