"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { DraftKind, StaleDraftActions } from "./stale-draft-actions";

type DraftRecord = {
  id: string;
  title: string;
  slug: string;
  status: string;
  created_at: string;
  updated_at: string | null;
};

type DraftGroup = {
  title: string;
  adminHref: string;
  kind: DraftKind;
  getItemHref: (item: DraftRecord) => string;
  items: DraftRecord[];
};

const staleDays = 30;
const staleMs = staleDays * 24 * 60 * 60 * 1000;

function recordAge(record: DraftRecord) {
  const date = new Date(record.updated_at ?? record.created_at);
  return Date.now() - date.getTime();
}

function formatAge(record: DraftRecord) {
  const days = Math.max(0, Math.floor(recordAge(record) / (24 * 60 * 60 * 1000)));
  return `${days} day${days === 1 ? "" : "s"}`;
}

function isStale(record: DraftRecord) {
  return recordAge(record) >= staleMs;
}

export function StaleDraftWarnings() {
  const [posts, setPosts] = useState<DraftRecord[]>([]);
  const [dailyLight, setDailyLight] = useState<DraftRecord[]>([]);
  const [products, setProducts] = useState<DraftRecord[]>([]);
  const [albums, setAlbums] = useState<DraftRecord[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadDrafts = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [postResult, dailyResult, productResult, albumResult] = await Promise.all([
      supabase.from("posts").select("id,title,slug,status,created_at,updated_at").eq("status", "draft").limit(200),
      supabase.from("daily_light_entries").select("id,title,slug,status,created_at,updated_at").eq("status", "draft").limit(200),
      supabase.from("products").select("id,title,slug,status,created_at,updated_at").eq("status", "draft").limit(200),
      supabase.from("albums").select("id,title,slug,status,created_at,updated_at").eq("status", "draft").limit(200),
    ]);

    const firstError = postResult.error ?? dailyResult.error ?? productResult.error ?? albumResult.error;

    if (firstError) {
      setMessage(firstError.message);
    } else {
      setPosts((postResult.data ?? []) as DraftRecord[]);
      setDailyLight((dailyResult.data ?? []) as DraftRecord[]);
      setProducts((productResult.data ?? []) as DraftRecord[]);
      setAlbums((albumResult.data ?? []) as DraftRecord[]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void loadDrafts();
  }, [loadDrafts]);

  const groups = useMemo<DraftGroup[]>(() => {
    return [
      {
        title: "Blog drafts",
        adminHref: "/admin/content",
        kind: "post",
        getItemHref: (item) => `/admin/content#content-post-${item.id}`,
        items: posts.filter(isStale).sort((a, b) => recordAge(b) - recordAge(a)),
      },
      {
        title: "Daily Light drafts",
        adminHref: "/admin/content",
        kind: "daily-light",
        getItemHref: (item) => `/admin/content#content-daily-light-${item.id}`,
        items: dailyLight.filter(isStale).sort((a, b) => recordAge(b) - recordAge(a)),
      },
      {
        title: "Product drafts",
        adminHref: "/admin/products",
        kind: "product",
        getItemHref: (item) => `/admin/products#product-${item.id}`,
        items: products.filter(isStale).sort((a, b) => recordAge(b) - recordAge(a)),
      },
      {
        title: "Album drafts",
        adminHref: "/admin/music",
        kind: "album",
        getItemHref: (item) => `/admin/music#album-${item.id}`,
        items: albums.filter(isStale).sort((a, b) => recordAge(b) - recordAge(a)),
      },
    ];
  }, [albums, dailyLight, posts, products]);

  const totalStale = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Draft Cleanup</p>
          <h2 className="mt-4 text-3xl">Stale draft warnings</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Drafts untouched for {staleDays}+ days are flagged here.</p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadDrafts}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Checking drafts...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <article className={`lantern-panel rounded-3xl p-6 ${group.items.length > 0 ? "border-[rgba(216,168,79,0.72)] bg-[rgba(81,63,24,0.28)]" : "border-[rgba(42,166,161,0.65)] bg-[rgba(16,74,72,0.22)]"}`} key={group.title}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{group.title}</p>
            <p className="mt-4 text-5xl text-[var(--ivory)]">{group.items.length}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">
              {group.items.length > 0 ? "Drafts may need publishing, editing, archiving, or a keep-draft refresh." : "No stale drafts found."}
            </p>
            <div className="mt-4 grid gap-2">
              {group.items.slice(0, 3).map((item) => (
                <div className="rounded-2xl border border-[rgba(216,168,79,0.18)] p-3 text-sm leading-6 text-[var(--muted-silver)]" key={item.id}>
                  <span className="block">{item.title || "Untitled draft"} — {formatAge(item)} old</span>
                  <Link className="gold-text mt-2 block text-xs uppercase tracking-[0.18em]" href={group.getItemHref(item)}>
                    Open exact admin card
                  </Link>
                  <StaleDraftActions draftId={item.id} draftTitle={item.title} kind={group.kind} onChanged={loadDrafts} />
                </div>
              ))}
            </div>
            <Link className="gold-text mt-5 inline-block text-xs uppercase tracking-[0.2em]" href={group.adminHref}>
              Open admin list
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">Total stale drafts: {totalStale}</p>
    </section>
  );
}
