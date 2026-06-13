"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { ProductQuickEditor } from "./product-quick-editor";

type ProductItem = {
  id: string;
  slug: string;
  title: string;
  product_type: string;
  status: string;
  price_cents: number;
  currency: string;
  description: string;
  cover_image_url: string | null;
};

type ProductFileItem = {
  id: string;
  product_id: string;
  title: string;
  description: string;
};

type DeliveryStatus = {
  tone: "ready" | "warning" | "attention" | "draft" | "archived";
  label: string;
  detail: string;
};

function getProductFiles(productId: string, files: ProductFileItem[]) {
  return files.filter((file) => file.product_id === productId);
}

function getDeliveryStatus(product: ProductItem, files: ProductFileItem[]): DeliveryStatus {
  const attachedFiles = getProductFiles(product.id, files);
  const missingDescriptions = attachedFiles.filter((file) => file.description.trim().length === 0).length;
  const missingProductDescription = product.description.trim().length === 0;
  const missingCover = !product.cover_image_url;

  if (product.status === "archived") return { tone: "archived", label: "Archived", detail: "This product is archived and hidden from active sales." };

  if (product.status === "draft") {
    const issues = [
      attachedFiles.length === 0 ? "needs files" : "",
      missingDescriptions > 0 ? "needs file descriptions" : "",
      missingProductDescription ? "needs product description" : "",
      missingCover ? "needs cover image" : "",
    ].filter(Boolean);

    return {
      tone: issues.length > 0 ? "draft" : "ready",
      label: issues.length > 0 ? "Draft review" : "Draft ready",
      detail: issues.length > 0 ? `Draft product ${issues.join(", ")}.` : "Draft product appears ready to activate.",
    };
  }

  if (attachedFiles.length === 0) return { tone: "attention", label: "Action needed", detail: "Active product has no attached delivery files." };
  if (missingDescriptions > 0) return { tone: "warning", label: "Review", detail: `${missingDescriptions} attached file${missingDescriptions === 1 ? "" : "s"} missing customer-facing descriptions.` };

  if (missingProductDescription || missingCover) {
    const issues = [missingProductDescription ? "product description" : "", missingCover ? "cover image" : ""].filter(Boolean);
    return { tone: "warning", label: "Review", detail: `Active product is missing ${issues.join(" and ")}.` };
  }

  return { tone: "ready", label: "Ready", detail: "Product appears ready for customer delivery." };
}

function getToneClasses(tone: DeliveryStatus["tone"]) {
  if (tone === "attention") return "border-[rgba(255,179,71,0.75)] bg-[rgba(92,44,18,0.28)]";
  if (tone === "warning") return "border-[rgba(216,168,79,0.7)] bg-[rgba(81,63,24,0.28)]";
  if (tone === "ready") return "border-[rgba(42,166,161,0.65)] bg-[rgba(16,74,72,0.22)]";
  if (tone === "draft") return "border-[rgba(185,199,214,0.45)] bg-[rgba(185,199,214,0.08)]";
  return "border-[rgba(216,168,79,0.18)] bg-[rgba(7,17,31,0.35)]";
}

function canActivateProduct(product: ProductItem, files: ProductFileItem[]) {
  return product.status === "draft" && getDeliveryStatus(product, files).tone === "ready";
}

export function ProductList() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [files, setFiles] = useState<ProductFileItem[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [savingProductId, setSavingProductId] = useState("");
  const [editingProductId, setEditingProductId] = useState("");

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [productsResult, filesResult] = await Promise.all([
      supabase.from("products").select("id,slug,title,product_type,status,price_cents,currency,description,cover_image_url").order("created_at", { ascending: false }).limit(50),
      supabase.from("product_files").select("id,product_id,title,description").order("sort_order", { ascending: true }).limit(500),
    ]);

    const error = productsResult.error ?? filesResult.error;
    if (error) setMessage(error.message);
    else {
      setProducts((productsResult.data ?? []) as ProductItem[]);
      setFiles((filesResult.data ?? []) as ProductFileItem[]);
    }

    setIsLoading(false);
  }, []);

  async function setProductStatus(product: ProductItem, status: "active" | "draft" | "archived") {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const deliveryStatus = getDeliveryStatus(product, files);
    if (status === "active" && !canActivateProduct(product, files)) {
      setMessage(`Cannot activate ${product.title}: ${deliveryStatus.detail}`);
      return;
    }

    setSavingProductId(product.id);
    setMessage("");

    const { error } = await supabase.from("products").update({ status, updated_at: new Date().toISOString() }).eq("id", product.id);

    if (error) setMessage(error.message);
    else {
      const label = status === "active" ? "activated" : status === "draft" ? "moved to draft" : "archived";
      setMessage(`${product.title} ${label}.`);
      await loadProducts();
    }

    setSavingProductId("");
  }

  const warningSummary = useMemo(() => {
    return products.reduce(
      (summary, product) => {
        const deliveryStatus = getDeliveryStatus(product, files);
        return {
          ready: summary.ready + (deliveryStatus.tone === "ready" ? 1 : 0),
          attention: summary.attention + (deliveryStatus.tone === "attention" ? 1 : 0),
          review: summary.review + (deliveryStatus.tone === "warning" || deliveryStatus.tone === "draft" ? 1 : 0),
        };
      },
      { ready: 0, attention: 0, review: 0 },
    );
  }, [files, products]);

  useEffect(() => {
    void Promise.resolve().then(() => void loadProducts());
  }, [loadProducts]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Products</p>
          <h2 className="mt-4 text-3xl">Recent products</h2>
          <p className="mt-3 text-sm text-[var(--muted-silver)]">{warningSummary.ready} ready / {warningSummary.attention} action needed / {warningSummary.review} review.</p>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadProducts}>Refresh</button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading products...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {products.map((product) => {
          const attachedFiles = getProductFiles(product.id, files);
          const deliveryStatus = getDeliveryStatus(product, files);
          const isSaving = savingProductId === product.id;
          const canActivate = canActivateProduct(product, files);
          const isEditing = editingProductId === product.id;

          return (
            <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={product.id}>
              <div className={`rounded-2xl border p-4 ${getToneClasses(deliveryStatus.tone)}`}>
                <p className="gold-text text-xs uppercase tracking-[0.25em]">{deliveryStatus.label}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{deliveryStatus.detail}</p>
              </div>

              <p className="gold-text mt-5 text-xs uppercase tracking-[0.25em]">{product.product_type} - {product.status}</p>
              <h3 className="mt-3 text-2xl">{product.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-silver)]">{product.currency} {(product.price_cents / 100).toFixed(2)}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{product.description || "No product description yet."}</p>
              <p className="mt-3 text-sm text-[var(--muted-silver)]">Attached files: {attachedFiles.length}</p>
              <p className="mt-3 break-all rounded-xl border border-[rgba(216,168,79,0.18)] px-4 py-3 text-xs text-[var(--muted-silver)]">Product ID: {product.id}</p>

              {isEditing ? <ProductQuickEditor product={product} onSaved={loadProducts} onCancel={() => setEditingProductId("")} /> : null}

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={() => setEditingProductId(isEditing ? "" : product.id)}>{isEditing ? "Close Edit" : "Edit Details"}</button>
                <Link className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" href={`/store/${product.slug}`}>View Store Page</Link>
                {product.status === "draft" ? <button className="rounded-full border border-[rgba(42,166,161,0.65)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:cursor-not-allowed disabled:opacity-50" type="button" onClick={() => setProductStatus(product, "active")} disabled={!canActivate || isSaving} title={canActivate ? "Activate product" : deliveryStatus.detail}>{isSaving ? "Saving..." : "Activate"}</button> : null}
                {product.status === "active" ? <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => setProductStatus(product, "draft")} disabled={isSaving}>{isSaving ? "Saving..." : "Move to Draft"}</button> : null}
                {product.status === "archived" ? <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => setProductStatus(product, "draft")} disabled={isSaving}>{isSaving ? "Saving..." : "Restore Draft"}</button> : null}
                {product.status !== "archived" ? <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)] disabled:opacity-60" type="button" onClick={() => setProductStatus(product, "archived")} disabled={isSaving}>{isSaving ? "Saving..." : "Archive"}</button> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
