"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ProductItem = {
  id: string;
  title: string;
  product_type: string;
  status: string;
  price_cents: number;
  currency: string;
};

export function ProductList() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function loadProducts() {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .select("id,title,product_type,status,price_cents,currency")
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) {
      setMessage(error.message);
    } else {
      setProducts((data ?? []) as ProductItem[]);
    }

    setIsLoading(false);
  }

  async function archiveProduct(productId: string) {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("products")
      .update({ status: "archived", updated_at: new Date().toISOString() })
      .eq("id", productId);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Product archived.");
      await loadProducts();
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Products</p>
          <h2 className="mt-4 text-3xl">Recent products</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadProducts}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading products...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={product.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{product.product_type} - {product.status}</p>
            <h3 className="mt-3 text-2xl">{product.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">
              {product.currency} {(product.price_cents / 100).toFixed(2)}
            </p>
            <p className="mt-3 break-all rounded-xl border border-[rgba(216,168,79,0.18)] px-4 py-3 text-xs text-[var(--muted-silver)]">
              Product ID: {product.id}
            </p>
            {product.status !== "archived" ? (
              <button className="mt-4 rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => archiveProduct(product.id)}>
                Archive
              </button>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
