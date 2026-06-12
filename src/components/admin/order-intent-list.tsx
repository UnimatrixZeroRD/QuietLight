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
  customer_email: string | null;
  created_at: string;
};

function formatAmount(amountCents: number | null, currency: string) {
  if (amountCents === null) return "Amount unknown";
  return `${currency} ${(amountCents / 100).toFixed(2)}`;
}

export function OrderIntentList() {
  const [orders, setOrders] = useState<OrderIntent[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fulfillingOrderId, setFulfillingOrderId] = useState("");

  const loadOrders = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("order_intents")
      .select("id,product_title,product_slug,method,amount_cents,currency,status,customer_email,created_at")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      setMessage(error.message);
    } else {
      setOrders((data ?? []) as OrderIntent[]);
    }

    setIsLoading(false);
  }, []);

  async function updateStatus(orderId: string, status: "paid" | "cancelled") {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("order_intents")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", orderId);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(`Order marked ${status}.`);
      await loadOrders();
    }
  }

  async function fulfillOrder(orderId: string) {
    setFulfillingOrderId(orderId);
    setMessage("");

    const response = await fetch(`/api/admin/orders/${orderId}/fulfill`, { method: "POST" });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setMessage(data?.error ?? "Unable to fulfill order.");
    } else {
      setMessage(data?.alreadyLicensed ? "Order fulfilled. The user already had active access." : "Order fulfilled and product access granted.");
      await loadOrders();
    }

    setFulfillingOrderId("");
  }

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
          <h2 className="mt-4 text-3xl">Order intents</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadOrders}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading orders...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4">
        {orders.map((order) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={order.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{order.method} - {order.status}</p>
            <h3 className="mt-3 text-2xl">{order.product_title ?? order.product_slug}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{formatAmount(order.amount_cents, order.currency)}</p>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{order.customer_email ?? "No customer email"}</p>
            <p className="mt-3 break-all rounded-xl border border-[rgba(216,168,79,0.18)] px-4 py-3 text-xs text-[var(--muted-silver)]">
              Order ID: {order.id}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => updateStatus(order.id, "paid")}>Mark Paid</button>
              <button className="rounded-full border border-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)] disabled:opacity-60" type="button" onClick={() => fulfillOrder(order.id)} disabled={fulfillingOrderId === order.id}>{fulfillingOrderId === order.id ? "Fulfilling..." : "Fulfill + Grant Access"}</button>
              <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => updateStatus(order.id, "cancelled")}>Cancel</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
