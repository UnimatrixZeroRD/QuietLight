"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { PublicImagePicker } from "./public-image-picker";

export type EditableProduct = {
  id: string;
  slug: string;
  title: string;
  product_type: string;
  price_cents: number;
  currency: string;
  description: string;
  cover_image_url: string | null;
  cover_alt_text?: string | null;
};

type ProductDraft = {
  title: string;
  slug: string;
  productType: string;
  description: string;
  price: string;
  currency: string;
  coverImageUrl: string;
  coverAltText: string;
};

function createDraft(product: EditableProduct): ProductDraft {
  return {
    title: product.title,
    slug: product.slug,
    productType: product.product_type,
    description: product.description,
    price: (product.price_cents / 100).toFixed(2),
    currency: product.currency,
    coverImageUrl: product.cover_image_url ?? "",
    coverAltText: product.cover_alt_text ?? "",
  };
}

export function ProductQuickEditor({ product, onSaved, onCancel }: { product: EditableProduct; onSaved: () => Promise<void>; onCancel: () => void }) {
  const [draft, setDraft] = useState<ProductDraft>(() => createDraft(product));
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function updateDraft(field: keyof ProductDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  async function saveProduct() {
    const priceCents = Math.round(Number(draft.price) * 100);
    if (!Number.isFinite(priceCents) || priceCents < 0) {
      setMessage("Enter a valid product price.");
      return;
    }

    if (!draft.title.trim() || !draft.slug.trim() || !draft.productType.trim() || !draft.currency.trim()) {
      setMessage("Title, slug, product type, and currency are required.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setIsSaving(false);
      return;
    }

    const { error } = await supabase
      .from("products")
      .update({
        title: draft.title.trim(),
        slug: draft.slug.trim(),
        product_type: draft.productType.trim(),
        description: draft.description.trim(),
        price_cents: priceCents,
        currency: draft.currency.trim().toUpperCase(),
        cover_image_url: draft.coverImageUrl.trim() || null,
        cover_alt_text: draft.coverAltText.trim(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", product.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Product details saved.");
      await onSaved();
      onCancel();
    }

    setIsSaving(false);
  }

  return (
    <div className="mt-5 grid gap-4 rounded-2xl border border-[rgba(216,168,79,0.22)] p-4">
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.title} onChange={(event) => updateDraft("title", event.target.value)} placeholder="Title" />
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.slug} onChange={(event) => updateDraft("slug", event.target.value)} placeholder="Slug" />
      <div className="grid gap-4 sm:grid-cols-3">
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.productType} onChange={(event) => updateDraft("productType", event.target.value)} placeholder="Type" />
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.price} onChange={(event) => updateDraft("price", event.target.value)} placeholder="Price" inputMode="decimal" />
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.currency} onChange={(event) => updateDraft("currency", event.target.value)} placeholder="Currency" />
      </div>
      <PublicImagePicker value={draft.coverImageUrl} onChange={(value) => updateDraft("coverImageUrl", value)} />
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.coverImageUrl} onChange={(event) => updateDraft("coverImageUrl", event.target.value)} placeholder="Or paste cover image URL" />
      <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.coverAltText} onChange={(event) => updateDraft("coverAltText", event.target.value)} placeholder="Cover image alt text" />
      {draft.coverImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="aspect-[16/9] w-full rounded-2xl border border-[rgba(216,168,79,0.25)] object-cover" src={draft.coverImageUrl} alt={draft.coverAltText || "Selected product cover preview"} />
      ) : null}
      <textarea className="min-h-32 rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={draft.description} onChange={(event) => updateDraft("description", event.target.value)} placeholder="Product description" />
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="button" onClick={saveProduct} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Details"}
        </button>
        <button className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
      {message ? <p className="text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </div>
  );
}
