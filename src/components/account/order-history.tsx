"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type OrderStatusFilter = "all" | "pending" | "paid" | "fulfilled" | "cancelled";

type OrderIntent = {
  id: string;
  product_title: string | null;
  product_slug: string;
  method: string;
  amount_cents: number | null;
  currency: string;
  status: string;
  created_at: string;
};

const statusFilters: { label: string; value: OrderStatusFilter }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Paid", value: "paid" },
  { label: "Fulfilled", value: "fulfilled" },
  { label: "Cancelled", value: "cancelled" },
];

function formatAmount(amountCents: number | null, currency: string) {
  if (amountCents === null) return "Amount unknown";
  return `${currency} ${(amountCents / 100).toFixed(2)}`;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderHistory() {
  const [orders, setOrders] = useState<OrderIntent[]>([]);
  const [statusFilter, setStatusFilter] = useState<OrderStatusFilter>("all");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadOrders = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Sign in to view your order history.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("order_intents")
      .select("id,product_title,product_slug,method,amount_cents,currency,status,created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      setMessage(error.message);
    } else {
      setOrders((data ?? []) as OrderIntent[]);
    }

    setIsLoading(false);
  }, []);

  const filteredOrders = orders.filter((order) => statusFilter === "all" || order.status === statusFilter);

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadOrders();
    });
  }, [loadOrders]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Orders</p>
          <h2 className="mt-4 text-3xl">Order history</h2>
          <p className="mt-3 text-sm text-[var(--muted-silver)]">
            Showing {filteredOrders.length} of {orders.length} orders.
          </p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadOrders}>
          Refresh
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {statusFilters.map((filter) => (
          <button
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] ${statusFilter === filter.value ? "border-[var(--lantern-gold)] text-[var(--ivory)]" : "border-[rgba(216,168,79,0.35)] text-[var(--muted-silver)]"}`}
            key={filter.value}
            type="button"
            onClick={() => setStatusFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading orders...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
      {!isLoading && !message && filteredOrders.length === 0 ? (
        <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">No orders match this filter.</p>
      ) : null}

      <div className="mt-6 grid gap-4">
        {filteredOrders.map((order) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={order.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{order.method} - {order.status}</p>
            <h3 className="mt-3 text-2xl">{order.product_title ?? order.product_slug}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{formatAmount(order.amount_cents, order.currency)}</p>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{formatDate(order.created_at)}</p>
            <p className="mt-3 break-all rounded-xl border border-[rgba(216,168,79,0.18)] px-4 py-3 text-xs text-[var(--muted-silver)]">
              Order ID: {order.id}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
