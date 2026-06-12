"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ProductType = "ebook" | "music" | "video" | "bundle" | "download" | "membership";
type ProductStatus = "draft" | "active" | "archived";

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ProductEditor() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState<ProductType>("ebook");
  const [status, setStatus] = useState<ProductStatus>("draft");
  const [price, setPrice] = useState("25.00");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleTitle(value: string) {
    setTitle(value);
    if (!slug) setSlug(toSlug(value));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from("products").insert({
      title,
      slug: slug || toSlug(title),
      description,
      product_type: productType,
      price_cents: Math.round(Number(price || "0") * 100),
      currency: "CAD",
      status,
      access_level: "paid_product",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Product saved. Refresh the product list to see it.");
      setTitle("");
      setSlug("");
      setDescription("");
      setPrice("25.00");
      setProductType("ebook");
      setStatus("draft");
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">New Product</p>
      <h2 className="mt-4 text-3xl">Create digital product</h2>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="product-title">Title</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="product-title" value={title} onChange={(event) => handleTitle(event.target.value)} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="product-slug">Slug</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="product-slug" value={slug} onChange={(event) => setSlug(toSlug(event.target.value))} required />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="product-description">Description</label>
      <textarea className="mt-4 min-h-32 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]" id="product-description" value={description} onChange={(event) => setDescription(event.target.value)} required />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={productType} onChange={(event) => setProductType(event.target.value as ProductType)}>
          <option value="ebook">E-book</option>
          <option value="music">Music</option>
          <option value="video">Video</option>
          <option value="bundle">Bundle</option>
          <option value="download">Download</option>
          <option value="membership">Membership</option>
        </select>
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={price} onChange={(event) => setPrice(event.target.value)} inputMode="decimal" required />
        <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={status} onChange={(event) => setStatus(event.target.value as ProductStatus)}>
          <option value="draft">Draft</option>
          <option value="active">Active</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Product"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
