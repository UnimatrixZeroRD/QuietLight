"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ProductRecord = {
  id: string;
  title: string;
  slug: string;
  status: string;
  price_cents: number | null;
  currency: string;
};

type ProductFileRecord = {
  id: string;
  product_id: string;
  title: string;
  description: string;
};

type DeliveryProduct = ProductRecord & {
  files: ProductFileRecord[];
};

function formatAmount(priceCents: number | null, currency: string) {
  if (priceCents === null) return "No price set";
  return `${currency} ${(priceCents / 100).toFixed(2)}`;
}

function getDeliveryStatus(product: DeliveryProduct) {
  if (product.files.length === 0) return "Needs files";
  if (product.files.some((file) => !file.description)) return "Needs descriptions";
  return "Ready";
}

export function DeliveryChecklist() {
  const [products, setProducts] = useState<DeliveryProduct[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadChecklist = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [productsResult, filesResult] = await Promise.all([
      supabase
        .from("products")
        .select("id,title,slug,status,price_cents,currency")
        .order("created_at", { ascending: false })
        .limit(100),
      supabase
        .from("product_files")
        .select("id,product_id,title,description")
        .order("sort_order", { ascending: true })
        .limit(500),
    ]);

    if (productsResult.error || filesResult.error) {
      setMessage(productsResult.error?.message ?? filesResult.error?.message ?? "Unable to load delivery checklist.");
      setIsLoading(false);
      return;
    }

    const fileRecords = (filesResult.data ?? []) as ProductFileRecord[];
    const productRecords = ((productsResult.data ?? []) as ProductRecord[]).map((product) => ({
      ...product,
      files: fileRecords.filter((file) => file.product_id === product.id),
    }));

    setProducts(productRecords);
    setIsLoading(false);
  }, []);

  const totals = useMemo(() => {
    return products.reduce(
      (summary, product) => {
        const status = getDeliveryStatus(product);
        return {
          total: summary.total + 1,
          ready: summary.ready + (status === "Ready" ? 1 : 0),
          needsWork: summary.needsWork + (status === "Ready" ? 0 : 1),
        };
      },
      { total: 0, ready: 0, needsWork: 0 },
    );
  }, [products]);

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadChecklist();
    });
  }, [loadChecklist]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Delivery</p>
          <h2 className="mt-4 text-3xl">Product delivery checklist</h2>
          <p className="mt-3 text-sm text-[var(--muted-silver)]">
            {totals.ready} ready / {totals.needsWork} need attention / {totals.total} total.
          </p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadChecklist}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading delivery checklist...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4">
        {products.map((product) => {
          const status = getDeliveryStatus(product);
          return (
            <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={product.id}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">{product.status} - {status}</p>
              <h3 className="mt-3 text-2xl">{product.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-silver)]">/{product.slug} - {formatAmount(product.price_cents, product.currency)}</p>
              <p className="mt-2 text-sm text-[var(--muted-silver)]">Attached files: {product.files.length}</p>
              {product.files.length > 0 ? (
                <div className="mt-4 grid gap-2">
                  {product.files.map((file) => (
                    <p className="rounded-xl border border-[rgba(216,168,79,0.16)] px-4 py-3 text-sm text-[var(--muted-silver)]" key={file.id}>
                      {file.title} {file.description ? "" : "- missing description"}
                    </p>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
