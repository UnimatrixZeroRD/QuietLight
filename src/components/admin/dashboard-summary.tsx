"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type OrderIntent = { id: string; product_title: string | null; status: string; method: string; created_at: string };
type PurchaseRecord = { id: string; status: string; provider: string | null; amount_cents: number; currency: string; created_at: string };
type MessageRecord = { id: string; topic: string; subject: string; status: string; created_at: string };
type ProductRecord = { id: string; title: string; status: string };
type ProductFileRecord = { id: string; product_id: string; description: string };
type StatusRecord = { id: string; status: string };
type ProfileRecord = { id: string; role: string | null };

type ActivityItem = { id: string; label: string; detail: string; href: string; createdAt: string };

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function formatCurrency(amountCents: number, currency: string) {
  return `${currency} ${(amountCents / 100).toFixed(2)}`;
}

function countStatus(items: StatusRecord[], status: string) {
  return items.filter((item) => item.status === status).length;
}

export function DashboardSummary() {
  const [orders, setOrders] = useState<OrderIntent[]>([]);
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const [messages, setMessages] = useState<MessageRecord[]>([]);
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [productFiles, setProductFiles] = useState<ProductFileRecord[]>([]);
  const [posts, setPosts] = useState<StatusRecord[]>([]);
  const [dailyLightEntries, setDailyLightEntries] = useState<StatusRecord[]>([]);
  const [albums, setAlbums] = useState<StatusRecord[]>([]);
  const [profiles, setProfiles] = useState<ProfileRecord[]>([]);
  const [notice, setNotice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadDashboard = useCallback(async () => {
    setIsLoading(true);
    setNotice("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setNotice("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [ordersResult, purchasesResult, messagesResult, productsResult, filesResult, postsResult, dailyResult, albumsResult, profilesResult] = await Promise.all([
      supabase.from("order_intents").select("id,product_title,status,method,created_at").order("created_at", { ascending: false }).limit(50),
      supabase.from("purchases").select("id,status,provider,amount_cents,currency,created_at").order("created_at", { ascending: false }).limit(50),
      supabase.from("messages").select("id,topic,subject,status,created_at").order("created_at", { ascending: false }).limit(50),
      supabase.from("products").select("id,title,status").order("created_at", { ascending: false }).limit(100),
      supabase.from("product_files").select("id,product_id,description").order("sort_order", { ascending: true }).limit(500),
      supabase.from("posts").select("id,status").limit(500),
      supabase.from("daily_light_entries").select("id,status").limit(500),
      supabase.from("albums").select("id,status").limit(500),
      supabase.from("profiles").select("id,role").limit(500),
    ]);

    const firstError =
      ordersResult.error ?? purchasesResult.error ?? messagesResult.error ?? productsResult.error ?? filesResult.error ?? postsResult.error ?? dailyResult.error ?? albumsResult.error ?? profilesResult.error;

    if (firstError) {
      setNotice(firstError.message);
    } else {
      setOrders((ordersResult.data ?? []) as OrderIntent[]);
      setPurchases((purchasesResult.data ?? []) as PurchaseRecord[]);
      setMessages((messagesResult.data ?? []) as MessageRecord[]);
      setProducts((productsResult.data ?? []) as ProductRecord[]);
      setProductFiles((filesResult.data ?? []) as ProductFileRecord[]);
      setPosts((postsResult.data ?? []) as StatusRecord[]);
      setDailyLightEntries((dailyResult.data ?? []) as StatusRecord[]);
      setAlbums((albumsResult.data ?? []) as StatusRecord[]);
      setProfiles((profilesResult.data ?? []) as ProfileRecord[]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  const summary = useMemo(() => {
    const pendingOrders = orders.filter((order) => order.status === "pending").length;
    const paidOrders = orders.filter((order) => order.status === "paid").length;
    const openMessages = messages.filter((message) => message.status === "open").length;
    const completedPurchases = purchases.filter((purchase) => purchase.status === "completed").length;
    const revenueCents = purchases.filter((purchase) => purchase.status === "completed").reduce((total, purchase) => total + purchase.amount_cents, 0);

    const readyProducts = products.filter((product) => {
      const files = productFiles.filter((file) => file.product_id === product.id);
      return files.length > 0 && files.every((file) => file.description.trim().length > 0);
    }).length;

    const needsDeliveryWork = products.filter((product) => {
      const files = productFiles.filter((file) => file.product_id === product.id);
      return files.length === 0 || files.some((file) => file.description.trim().length === 0);
    }).length;

    return {
      pendingOrders,
      paidOrders,
      openMessages,
      completedPurchases,
      revenueCents,
      readyProducts,
      needsDeliveryWork,
      publishedPosts: countStatus(posts, "published"),
      draftPosts: countStatus(posts, "draft"),
      publishedDailyLight: countStatus(dailyLightEntries, "published"),
      draftDailyLight: countStatus(dailyLightEntries, "draft"),
      activeProducts: countStatus(products, "active"),
      draftProducts: countStatus(products, "draft"),
      publishedAlbums: countStatus(albums, "published"),
      draftAlbums: countStatus(albums, "draft"),
      totalProfiles: profiles.length,
      adminProfiles: profiles.filter((profile) => profile.role === "admin").length,
    };
  }, [albums, dailyLightEntries, messages, orders, productFiles, products, profiles, purchases, posts]);

  const recentActivity = useMemo<ActivityItem[]>(() => {
    const orderActivity = orders.slice(0, 5).map((order) => ({
      id: `order-${order.id}`,
      label: "Order",
      detail: `${order.product_title ?? "Store order"} — ${order.status}`,
      href: "/admin/orders",
      createdAt: order.created_at,
    }));

    const messageActivity = messages.slice(0, 5).map((message) => ({
      id: `message-${message.id}`,
      label: "Message",
      detail: `${message.subject} — ${message.status}`,
      href: "/admin/support",
      createdAt: message.created_at,
    }));

    const purchaseActivity = purchases.slice(0, 5).map((purchase) => ({
      id: `purchase-${purchase.id}`,
      label: "Purchase",
      detail: `${formatCurrency(purchase.amount_cents, purchase.currency)} — ${purchase.status}`,
      href: "/admin/ledger",
      createdAt: purchase.created_at,
    }));

    return [...orderActivity, ...messageActivity, ...purchaseActivity]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 8);
  }, [messages, orders, purchases]);

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Overview</p>
          <h2 className="mt-4 text-3xl">Launch dashboard</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadDashboard}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading dashboard...</p> : null}
      {notice ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{notice}</p> : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard title="Pending orders" value={summary.pendingOrders} detail={`${summary.paidOrders} paid orders awaiting review`} href="/admin/orders" />
        <SummaryCard title="Open messages" value={summary.openMessages} detail="Messages waiting for admin review" href="/admin/support" />
        <SummaryCard title="Purchases" value={summary.completedPurchases} detail={`${formatCurrency(summary.revenueCents, "CAD")} completed`} href="/admin/ledger" />
        <SummaryCard title="Delivery ready" value={summary.readyProducts} detail={`${summary.needsDeliveryWork} products need attention`} href="/admin/delivery" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <SummaryCard title="Blog posts" value={summary.publishedPosts} detail={`${summary.draftPosts} drafts`} href="/admin/content" />
        <SummaryCard title="Daily Light" value={summary.publishedDailyLight} detail={`${summary.draftDailyLight} drafts`} href="/admin/content" />
        <SummaryCard title="Products" value={summary.activeProducts} detail={`${summary.draftProducts} drafts`} href="/admin/products" />
        <SummaryCard title="Albums" value={summary.publishedAlbums} detail={`${summary.draftAlbums} drafts`} href="/admin/music" />
        <SummaryCard title="Profiles" value={summary.totalProfiles} detail={`${summary.adminProfiles} admins`} href="/admin/members" />
      </div>

      <div className="lantern-panel mt-6 rounded-3xl p-6">
        <p className="gold-text uppercase tracking-[0.25em]">Recent activity</p>
        <div className="mt-5 grid gap-3">
          {recentActivity.length === 0 ? <p className="text-sm text-[var(--muted-silver)]">No recent activity yet.</p> : null}
          {recentActivity.map((item) => (
            <Link className="rounded-2xl border border-[rgba(216,168,79,0.18)] p-4 transition hover:border-[rgba(216,168,79,0.45)]" href={item.href} key={item.id}>
              <p className="gold-text text-xs uppercase tracking-[0.2em]">{item.label} — {formatDate(item.createdAt)}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{item.detail}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ title, value, detail, href }: { title: string; value: number; detail: string; href: string }) {
  return (
    <Link className="lantern-panel block rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.55)]" href={href}>
      <p className="gold-text text-xs uppercase tracking-[0.25em]">{title}</p>
      <p className="mt-4 text-5xl text-[var(--ivory)]">{value}</p>
      <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{detail}</p>
    </Link>
  );
}
