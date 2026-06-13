"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type LivePost = { id: string; title: string; slug: string; excerpt: string | null; featured_image_url: string | null; published_at: string | null };
type LiveDaily = { id: string; title: string; slug: string; reflection: string | null; published_on: string | null };
type LiveProduct = { id: string; title: string; slug: string; description: string; cover_image_url: string | null; cover_alt_text: string | null };
type LiveAlbum = { id: string; title: string; slug: string; description: string; cover_image_url: string | null; cover_alt_text: string | null };
type ValidationTone = "success" | "warning" | "neutral";

type ValidationItem = {
  id: string;
  title: string;
  href: string;
  issues: string[];
};

function toneClass(tone: ValidationTone) {
  if (tone === "success") return "border-[rgba(42,166,161,0.65)] bg-[rgba(16,74,72,0.22)]";
  if (tone === "warning") return "border-[rgba(216,168,79,0.72)] bg-[rgba(81,63,24,0.28)]";
  return "border-[rgba(216,168,79,0.22)]";
}

function itemIssues(values: Array<[boolean, string]>) {
  return values.filter(([missing]) => missing).map(([, label]) => label);
}

export function LivePageValidation() {
  const [posts, setPosts] = useState<LivePost[]>([]);
  const [dailyLight, setDailyLight] = useState<LiveDaily[]>([]);
  const [products, setProducts] = useState<LiveProduct[]>([]);
  const [albums, setAlbums] = useState<LiveAlbum[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadValidation = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [postResult, dailyResult, productResult, albumResult] = await Promise.all([
      supabase.from("posts").select("id,title,slug,excerpt,featured_image_url,published_at").eq("status", "published").eq("access_level", "public").limit(200),
      supabase.from("daily_light_entries").select("id,title,slug,reflection,published_on").eq("status", "published").eq("access_level", "public").limit(200),
      supabase.from("products").select("id,title,slug,description,cover_image_url,cover_alt_text").eq("status", "active").limit(200),
      supabase.from("albums").select("id,title,slug,description,cover_image_url,cover_alt_text").eq("status", "published").eq("access_level", "public").limit(200),
    ]);

    const firstError = postResult.error ?? dailyResult.error ?? productResult.error ?? albumResult.error;
    if (firstError) {
      setMessage(firstError.message);
    } else {
      setPosts((postResult.data ?? []) as LivePost[]);
      setDailyLight((dailyResult.data ?? []) as LiveDaily[]);
      setProducts((productResult.data ?? []) as LiveProduct[]);
      setAlbums((albumResult.data ?? []) as LiveAlbum[]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void loadValidation();
  }, [loadValidation]);

  const validation = useMemo(() => {
    const postIssues: ValidationItem[] = posts
      .map((post) => ({
        id: post.id,
        title: post.title || "Untitled post",
        href: `/blog/${post.slug}`,
        issues: itemIssues([
          [!post.title?.trim(), "title"],
          [!post.slug?.trim(), "slug"],
          [!post.excerpt?.trim(), "excerpt"],
          [!post.featured_image_url, "featured image"],
          [!post.published_at, "published date"],
        ]),
      }))
      .filter((item) => item.issues.length > 0);

    const dailyIssues: ValidationItem[] = dailyLight
      .map((entry) => ({
        id: entry.id,
        title: entry.title || "Untitled Daily Light",
        href: `/daily-light/${entry.slug}`,
        issues: itemIssues([
          [!entry.title?.trim(), "title"],
          [!entry.slug?.trim(), "slug"],
          [!entry.reflection?.trim(), "reflection"],
          [!entry.published_on, "publish date"],
        ]),
      }))
      .filter((item) => item.issues.length > 0);

    const productIssues: ValidationItem[] = products
      .map((product) => ({
        id: product.id,
        title: product.title || "Untitled product",
        href: `/store/${product.slug}`,
        issues: itemIssues([
          [!product.title?.trim(), "title"],
          [!product.slug?.trim(), "slug"],
          [!product.description?.trim(), "description"],
          [!product.cover_image_url, "cover image"],
          [Boolean(product.cover_image_url) && !product.cover_alt_text?.trim(), "cover alt text"],
        ]),
      }))
      .filter((item) => item.issues.length > 0);

    const albumIssues: ValidationItem[] = albums
      .map((album) => ({
        id: album.id,
        title: album.title || "Untitled album",
        href: `/music/${album.slug}`,
        issues: itemIssues([
          [!album.title?.trim(), "title"],
          [!album.slug?.trim(), "slug"],
          [!album.description?.trim(), "description"],
          [!album.cover_image_url, "cover image"],
          [Boolean(album.cover_image_url) && !album.cover_alt_text?.trim(), "cover alt text"],
        ]),
      }))
      .filter((item) => item.issues.length > 0);

    return [
      { title: "Blog live pages", total: posts.length, issues: postIssues, adminHref: "/admin/content" },
      { title: "Daily Light pages", total: dailyLight.length, issues: dailyIssues, adminHref: "/admin/content" },
      { title: "Store pages", total: products.length, issues: productIssues, adminHref: "/admin/products" },
      { title: "Album pages", total: albums.length, issues: albumIssues, adminHref: "/admin/music" },
    ];
  }, [albums, dailyLight, posts, products]);

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Live Pages</p>
          <h2 className="mt-4 text-3xl">Verification checks</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadValidation}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Checking live pages...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {validation.map((group) => {
          const tone: ValidationTone = group.total === 0 ? "neutral" : group.issues.length > 0 ? "warning" : "success";

          return (
            <article className={`lantern-panel rounded-3xl p-6 ${toneClass(tone)}`} key={group.title}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">{group.title}</p>
              <p className="mt-4 text-5xl text-[var(--ivory)]">{group.total - group.issues.length}/{group.total}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">
                {group.issues.length > 0 ? `${group.issues.length} live page${group.issues.length === 1 ? "" : "s"} need review.` : group.total > 0 ? "Live pages look ready." : "No live pages found yet."}
              </p>
              <div className="mt-4 grid gap-2">
                {group.issues.slice(0, 3).map((item) => (
                  <Link className="rounded-2xl border border-[rgba(216,168,79,0.18)] p-3 text-sm leading-6 text-[var(--muted-silver)] transition hover:border-[rgba(216,168,79,0.45)]" href={item.href} key={item.id}>
                    {item.title}: missing {item.issues.join(", ")}
                  </Link>
                ))}
              </div>
              <Link className="gold-text mt-5 inline-block text-xs uppercase tracking-[0.2em]" href={group.adminHref}>
                Open admin list
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
