"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

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
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadOrders}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading orders...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
      {!isLoading && !message && orders.length === 0 ? (
        <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">No order history yet.</p>
      ) : null}

      <div className="mt-6 grid gap-4">
        {orders.map((order) => (
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
