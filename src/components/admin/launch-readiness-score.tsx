"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type OrderRecord = { id: string; status: string };
type MessageRecord = { id: string; status: string };
type ProductRecord = { id: string; status: string; description: string; cover_image_url: string | null; cover_alt_text: string | null };
type ProductFileRecord = { id: string; product_id: string; description: string };
type PostRecord = { id: string; title: string; slug: string; excerpt: string | null; featured_image_url: string | null; published_at: string | null };
type DailyRecord = { id: string; title: string; slug: string; reflection: string | null; published_on: string | null };
type AlbumRecord = { id: string; title: string; slug: string; description: string; cover_image_url: string | null; cover_alt_text: string | null };
type DraftRecord = { id: string; created_at: string; updated_at: string | null };

type ScoreItem = {
  title: string;
  value: number;
  weight: string;
  detail: string;
  formula: string;
  href: string;
};

const staleMs = 30 * 24 * 60 * 60 * 1000;

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function isStale(record: DraftRecord) {
  return Date.now() - new Date(record.updated_at ?? record.created_at).getTime() >= staleMs;
}

function productIsReady(product: ProductRecord, files: ProductFileRecord[]) {
  const attached = files.filter((file) => file.product_id === product.id);
  return (
    product.status === "active" &&
    product.description.trim().length > 0 &&
    Boolean(product.cover_image_url) &&
    Boolean(product.cover_alt_text?.trim()) &&
    attached.length > 0 &&
    attached.every((file) => file.description.trim().length > 0)
  );
}

function postIsReady(post: PostRecord) {
  return Boolean(post.title.trim() && post.slug.trim() && post.excerpt?.trim() && post.featured_image_url && post.published_at);
}

function dailyIsReady(entry: DailyRecord) {
  return Boolean(entry.title.trim() && entry.slug.trim() && entry.reflection?.trim() && entry.published_on);
}

function albumIsReady(album: AlbumRecord) {
  return Boolean(album.title.trim() && album.slug.trim() && album.description.trim() && album.cover_image_url && album.cover_alt_text?.trim());
}

export function LaunchReadinessScore() {
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [messages, setMessages] = useState<MessageRecord[]>([]);
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [productFiles, setProductFiles] = useState<ProductFileRecord[]>([]);
  const [posts, setPosts] = useState<PostRecord[]>([]);
  const [dailyLight, setDailyLight] = useState<DailyRecord[]>([]);
  const [albums, setAlbums] = useState<AlbumRecord[]>([]);
  const [drafts, setDrafts] = useState<DraftRecord[]>([]);
  const [notice, setNotice] = useState("");
  const [copyMessage, setCopyMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadScore = useCallback(async () => {
    setIsLoading(true);
    setNotice("");
    setCopyMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setNotice("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [ordersResult, messagesResult, productsResult, filesResult, postsResult, dailyResult, albumsResult, draftPostResult, draftDailyResult, draftProductResult, draftAlbumResult] = await Promise.all([
      supabase.from("order_intents").select("id,status").in("status", ["pending", "paid"]).limit(200),
      supabase.from("messages").select("id,status").eq("status", "open").limit(200),
      supabase.from("products").select("id,status,description,cover_image_url,cover_alt_text").eq("status", "active").limit(200),
      supabase.from("product_files").select("id,product_id,description").limit(500),
      supabase.from("posts").select("id,title,slug,excerpt,featured_image_url,published_at").eq("status", "published").eq("access_level", "public").limit(200),
      supabase.from("daily_light_entries").select("id,title,slug,reflection,published_on").eq("status", "published").eq("access_level", "public").limit(200),
      supabase.from("albums").select("id,title,slug,description,cover_image_url,cover_alt_text").eq("status", "published").eq("access_level", "public").limit(200),
      supabase.from("posts").select("id,created_at,updated_at").eq("status", "draft").limit(200),
      supabase.from("daily_light_entries").select("id,created_at,updated_at").eq("status", "draft").limit(200),
      supabase.from("products").select("id,created_at,updated_at").eq("status", "draft").limit(200),
      supabase.from("albums").select("id,created_at,updated_at").eq("status", "draft").limit(200),
    ]);

    const firstError =
      ordersResult.error ?? messagesResult.error ?? productsResult.error ?? filesResult.error ?? postsResult.error ?? dailyResult.error ?? albumsResult.error ?? draftPostResult.error ?? draftDailyResult.error ?? draftProductResult.error ?? draftAlbumResult.error;

    if (firstError) {
      setNotice(firstError.message);
    } else {
      setOrders((ordersResult.data ?? []) as OrderRecord[]);
      setMessages((messagesResult.data ?? []) as MessageRecord[]);
      setProducts((productsResult.data ?? []) as ProductRecord[]);
      setProductFiles((filesResult.data ?? []) as ProductFileRecord[]);
      setPosts((postsResult.data ?? []) as PostRecord[]);
      setDailyLight((dailyResult.data ?? []) as DailyRecord[]);
      setAlbums((albumsResult.data ?? []) as AlbumRecord[]);
      setDrafts([...(draftPostResult.data ?? []), ...(draftDailyResult.data ?? []), ...(draftProductResult.data ?? []), ...(draftAlbumResult.data ?? [])] as DraftRecord[]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void loadScore();
  }, [loadScore]);

  const score = useMemo(() => {
    const pendingOrders = orders.filter((order) => order.status === "pending").length;
    const paidOrders = orders.filter((order) => order.status === "paid").length;
    const openMessages = messages.length;
    const operationsScore = clampScore(100 - pendingOrders * 18 - paidOrders * 14 - openMessages * 18);

    const readyProducts = products.filter((product) => productIsReady(product, productFiles)).length;
    const deliveryScore = products.length === 0 ? 50 : clampScore((readyProducts / products.length) * 100);

    const liveItems = [
      ...posts.map((post) => postIsReady(post)),
      ...dailyLight.map((entry) => dailyIsReady(entry)),
      ...products.map((product) => productIsReady(product, productFiles)),
      ...albums.map((album) => albumIsReady(album)),
    ];
    const readyLiveItems = liveItems.filter(Boolean).length;
    const liveScore = liveItems.length === 0 ? 50 : clampScore((readyLiveItems / liveItems.length) * 100);

    const staleDrafts = drafts.filter(isStale).length;
    const draftScore = clampScore(100 - staleDrafts * 10);

    const total = clampScore(operationsScore * 0.25 + deliveryScore * 0.25 + liveScore * 0.3 + draftScore * 0.2);

    const items: ScoreItem[] = [
      {
        title: "Operations",
        value: operationsScore,
        weight: "25%",
        detail: `${pendingOrders + paidOrders} orders and ${openMessages} messages need attention`,
        formula: "100 minus pending orders x18, paid review orders x14, and open messages x18.",
        href: "/admin/orders",
      },
      {
        title: "Delivery",
        value: deliveryScore,
        weight: "25%",
        detail: `${readyProducts}/${products.length} active products ready`,
        formula: "Ready active products divided by all active products. No active products defaults to 50%.",
        href: "/admin/products",
      },
      {
        title: "Live pages",
        value: liveScore,
        weight: "30%",
        detail: `${readyLiveItems}/${liveItems.length} live items complete`,
        formula: "Complete public blog, Daily Light, store, and album pages divided by all live items. No live items defaults to 50%.",
        href: "/admin",
      },
      {
        title: "Draft cleanup",
        value: draftScore,
        weight: "20%",
        detail: `${staleDrafts} stale drafts`,
        formula: "100 minus 10 points for each draft untouched for 30 days or more.",
        href: "/admin",
      },
    ];

    const checklist = [
      "Quiet Light Launch Review Checklist",
      `Overall readiness: ${total}%`,
      "",
      `[${operationsScore >= 90 ? "x" : " "}] Operations score: ${operationsScore}% — ${pendingOrders + paidOrders} orders and ${openMessages} messages need attention`,
      `[${deliveryScore >= 90 ? "x" : " "}] Delivery score: ${deliveryScore}% — ${readyProducts}/${products.length} active products ready`,
      `[${liveScore >= 90 ? "x" : " "}] Live pages score: ${liveScore}% — ${readyLiveItems}/${liveItems.length} live items complete`,
      `[${draftScore >= 90 ? "x" : " "}] Draft cleanup score: ${draftScore}% — ${staleDrafts} stale drafts`,
      "",
      "Review actions:",
      "[ ] Resolve pending or paid orders waiting for review.",
      "[ ] Reply to or close open messages.",
      "[ ] Confirm active products have delivery files, file descriptions, cover images, and alt text.",
      "[ ] Confirm live pages have required metadata, images, and visible copy.",
      "[ ] Refresh or archive stale drafts.",
      "[ ] Re-run the launch readiness score after cleanup.",
    ].join("\n");

    return { total, items, checklist };
  }, [albums, dailyLight, drafts, messages, orders, productFiles, products, posts]);

  async function copyChecklist() {
    setCopyMessage("");

    try {
      await navigator.clipboard.writeText(score.checklist);
      setCopyMessage("Checklist copied.");
    } catch {
      setCopyMessage("Copy failed. Select and copy the checklist manually.");
    }
  }

  function downloadChecklist() {
    const date = new Date().toISOString().slice(0, 10);
    const blob = new Blob([score.checklist], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `quiet-light-launch-checklist-${date}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setCopyMessage("Checklist file downloaded.");
  }

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Launch Readiness</p>
          <h2 className="mt-4 text-3xl">Readiness score</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted-silver)]">
            A weighted view of operations, delivery, live-page completeness, and draft cleanup.
          </p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadScore}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Calculating readiness...</p> : null}
      {notice ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{notice}</p> : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.6fr_1.4fr]">
        <div className="rounded-3xl border border-[rgba(216,168,79,0.28)] p-6 text-center">
          <p className="text-7xl text-[var(--ivory)]">{score.total}%</p>
          <p className="gold-text mt-4 text-xs uppercase tracking-[0.25em]">Overall readiness</p>
          <p className="mt-4 text-xs leading-5 text-[var(--muted-silver)]">
            Overall = Operations 25% + Delivery 25% + Live pages 30% + Draft cleanup 20%.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {score.items.map((item) => (
            <Link className="rounded-2xl border border-[rgba(216,168,79,0.2)] p-5 transition hover:border-[rgba(216,168,79,0.55)]" href={item.href} key={item.title}>
              <div className="flex items-center justify-between gap-3">
                <p className="gold-text text-xs uppercase tracking-[0.2em]">{item.title}</p>
                <span className="text-2xl text-[var(--ivory)]">{item.value}%</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--soft-gold)]">Weight: {item.weight}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{item.detail}</p>
              <p className="mt-3 text-xs leading-5 text-[var(--muted-silver)]">{item.formula}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-[rgba(216,168,79,0.22)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Launch Checklist Export</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">Copy or download this checklist for notes, email, or a launch-review document.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={copyChecklist}>
              Copy Checklist
            </button>
            <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={downloadChecklist}>
              Download .txt
            </button>
          </div>
        </div>
        {copyMessage ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{copyMessage}</p> : null}
        <textarea className="mt-4 min-h-72 w-full rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(7,17,31,0.8)] p-4 font-mono text-sm leading-6 text-[var(--ivory)]" readOnly value={score.checklist} />
      </div>
    </section>
  );
}
