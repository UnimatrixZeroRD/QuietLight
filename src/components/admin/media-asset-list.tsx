"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type MediaAsset = {
  id: string;
  title: string;
  bucket: string;
  path: string;
  media_type: string;
};

export function MediaAssetList() {
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadAssets = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("media_assets")
      .select("id,title,bucket,path,media_type")
      .order("created_at", { ascending: false })
      .limit(30);

    if (error) {
      setMessage(error.message);
    } else {
      setAssets((data ?? []) as MediaAsset[]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadAssets();
    });
  }, [loadAssets]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Media Library</p>
          <h2 className="mt-4 text-3xl">Recent assets</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadAssets}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading media assets...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {assets.map((asset) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={asset.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{asset.media_type}</p>
            <h3 className="mt-3 text-2xl">{asset.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{asset.bucket}/{asset.path}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
