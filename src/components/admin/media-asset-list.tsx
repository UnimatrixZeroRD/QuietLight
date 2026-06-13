"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { EditableMediaAsset, MediaAssetCard, MediaAssetUsage } from "./media-asset-card";

type ProductUsageRecord = {
  id: string;
  title: string;
  slug: string;
  cover_image_url: string | null;
};

type PostUsageRecord = {
  id: string;
  title: string;
  slug: string;
  featured_image_url: string | null;
};

type AlbumUsageRecord = {
  id: string;
  title: string;
  slug: string;
  cover_image_url: string | null;
};

export function MediaAssetList() {
  const [assets, setAssets] = useState<EditableMediaAsset[]>([]);
  const [products, setProducts] = useState<ProductUsageRecord[]>([]);
  const [posts, setPosts] = useState<PostUsageRecord[]>([]);
  const [albums, setAlbums] = useState<AlbumUsageRecord[]>([]);
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

    const [assetResult, productResult, postResult, albumResult] = await Promise.all([
      supabase
        .from("media_assets")
        .select("id,title,description,alt_text,bucket,path,media_type,access_level")
        .order("created_at", { ascending: false })
        .limit(30),
      supabase
        .from("products")
        .select("id,title,slug,cover_image_url")
        .limit(500),
      supabase
        .from("posts")
        .select("id,title,slug,featured_image_url")
        .limit(500),
      supabase
        .from("albums")
        .select("id,title,slug,cover_image_url")
        .limit(500),
    ]);

    const error = assetResult.error ?? productResult.error ?? postResult.error ?? albumResult.error;

    if (error) {
      setMessage(error.message);
    } else {
      setAssets((assetResult.data ?? []) as EditableMediaAsset[]);
      setProducts((productResult.data ?? []) as ProductUsageRecord[]);
      setPosts((postResult.data ?? []) as PostUsageRecord[]);
      setAlbums((albumResult.data ?? []) as AlbumUsageRecord[]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadAssets();
    });
  }, [loadAssets]);

  const usageByAssetId = useMemo(() => {
    const supabase = createSupabaseBrowserClient();
    const usageMap = new Map<string, MediaAssetUsage[]>();

    for (const asset of assets) {
      const publicUrl = supabase?.storage.from(asset.bucket).getPublicUrl(asset.path).data.publicUrl ?? "";
      const usage: MediaAssetUsage[] = [];

      if (publicUrl) {
        for (const product of products) {
          if (product.cover_image_url === publicUrl) {
            usage.push({
              id: `product-${product.id}`,
              label: "Product cover",
              title: product.title,
              href: `/store/${product.slug}`,
            });
          }
        }

        for (const post of posts) {
          if (post.featured_image_url === publicUrl) {
            usage.push({
              id: `post-${post.id}`,
              label: "Blog cover",
              title: post.title,
              href: `/blog/${post.slug}`,
            });
          }
        }

        for (const album of albums) {
          if (album.cover_image_url === publicUrl) {
            usage.push({
              id: `album-${album.id}`,
              label: "Album artwork",
              title: album.title,
              href: "/admin/music",
            });
          }
        }
      }

      usageMap.set(asset.id, usage);
    }

    return usageMap;
  }, [albums, assets, posts, products]);

  const usedAssetCount = useMemo(() => {
    return Array.from(usageByAssetId.values()).filter((usage) => usage.length > 0).length;
  }, [usageByAssetId]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Media Library</p>
          <h2 className="mt-4 text-3xl">Recent assets</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">
            {usedAssetCount} of {assets.length} listed assets are linked to products, posts, or albums.
          </p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadAssets}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading media assets...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {assets.map((asset) => (
          <MediaAssetCard asset={asset} key={asset.id} usage={usageByAssetId.get(asset.id) ?? []} onSaved={loadAssets} />
        ))}
      </div>
    </section>
  );
}
