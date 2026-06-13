"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ProviderFilter = "all" | "etransfer" | "stripe" | "paypal";

type Purchase = {
  id: string;
  provider: string | null;
  provider_payment_id: string | null;
  amount_cents: number;
  currency: string;
  status: string;
  created_at: string;
  products: { title: string; slug: string } | null;
};

const providerFilters: { label: string; value: ProviderFilter }[] = [
  { label: "All", value: "all" },
  { label: "E-transfer", value: "etransfer" },
  { label: "Stripe", value: "stripe" },
  { label: "PayPal", value: "paypal" },
];

function formatAmount(amountCents: number, currency: string) {
  return `${currency} ${(amountCents / 100).toFixed(2)}`;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function PurchaseHistory() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [providerFilter, setProviderFilter] = useState<ProviderFilter>("all");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadPurchases = useCallback(async () => {
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
      setMessage("Sign in to view your purchases.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("purchases")
      .select("id,provider,provider_payment_id,amount_cents,currency,status,created_at,products(title,slug)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      setMessage(error.message);
    } else {
      setPurchases((data ?? []) as Purchase[]);
    }

    setIsLoading(false);
  }, []);

  const filteredPurchases = purchases.filter((purchase) => providerFilter === "all" || purchase.provider === providerFilter);
  const filteredTotalCents = filteredPurchases.reduce((sum, purchase) => sum + purchase.amount_cents, 0);

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadPurchases();
    });
  }, [loadPurchases]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Purchases</p>
          <h2 className="mt-4 text-3xl">Purchase history</h2>
          <p className="mt-3 text-sm text-[var(--muted-silver)]">
            Showing {filteredPurchases.length} of {purchases.length} purchases with a filtered total of {formatAmount(filteredTotalCents, filteredPurchases[0]?.currency ?? "CAD")}.
          </p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadPurchases}>
          Refresh
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {providerFilters.map((filter) => (
          <button
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] ${providerFilter === filter.value ? "border-[var(--lantern-gold)] text-[var(--ivory)]" : "border-[rgba(216,168,79,0.35)] text-[var(--muted-silver)]"}`}
            key={filter.value}
            type="button"
            onClick={() => setProviderFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading purchases...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
      {!isLoading && !message && filteredPurchases.length === 0 ? (
        <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">No purchases match this filter.</p>
      ) : null}

      <div className="mt-6 grid gap-4">
        {filteredPurchases.map((purchase) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={purchase.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{purchase.provider ?? "manual"} - {purchase.status}</p>
            <h3 className="mt-3 text-2xl">{purchase.products?.title ?? "Quiet Light product"}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{formatAmount(purchase.amount_cents, purchase.currency)}</p>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{formatDate(purchase.created_at)}</p>
            {purchase.provider_payment_id ? (
              <p className="mt-3 break-all rounded-xl border border-[rgba(216,168,79,0.18)] px-4 py-3 text-xs text-[var(--muted-silver)]">
                Reference: {purchase.provider_payment_id}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
