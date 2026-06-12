"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type ProfileOption = {
  id: string;
  display_name: string | null;
  handle: string | null;
  role: string;
};

type ProductOption = {
  id: string;
  title: string;
  status: string;
};

type AccessGrantOptions = {
  profiles: ProfileOption[];
  products: ProductOption[];
};

function profileLabel(profile: ProfileOption) {
  const name = profile.display_name || profile.handle || profile.id;
  return `${name} - ${profile.role}`;
}

function productLabel(product: ProductOption) {
  return `${product.title} - ${product.status}`;
}

export function AccessGrantForm() {
  const [profiles, setProfiles] = useState<ProfileOption[]>([]);
  const [products, setProducts] = useState<ProductOption[]>([]);
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const loadOptions = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const response = await fetch("/api/admin/access-grants", { method: "GET" });
    const data = (await response.json().catch(() => null)) as AccessGrantOptions | { error?: string } | null;

    if (!response.ok) {
      setMessage(data && "error" in data ? data.error ?? "Unable to load access options." : "Unable to load access options.");
      setIsLoading(false);
      return;
    }

    const options = data as AccessGrantOptions;
    setProfiles(options.profiles ?? []);
    setProducts(options.products ?? []);
    setUserId((current) => current || options.profiles?.[0]?.id || "");
    setProductId((current) => current || options.products?.[0]?.id || "");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const response = await fetch("/api/admin/access-grants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setMessage(data?.error ?? "Unable to save access record.");
    } else {
      setMessage("Access record saved. The product should now appear in the selected account library.");
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Access</p>
          <h2 className="mt-4 text-3xl">Manual product access</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadOptions}>
          Refresh
        </button>
      </div>

      <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
        Choose a member and product to create a temporary access record for testing.
      </p>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading members and products...</p> : null}

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="grant-user">
        Member
      </label>
      <select className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" id="grant-user" value={userId} onChange={(event) => setUserId(event.target.value)} required>
        <option value="">Select member</option>
        {profiles.map((profile) => (
          <option key={profile.id} value={profile.id}>
            {profileLabel(profile)}
          </option>
        ))}
      </select>

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="grant-product">
        Product
      </label>
      <select className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" id="grant-product" value={productId} onChange={(event) => setProductId(event.target.value)} required>
        <option value="">Select product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {productLabel(product)}
          </option>
        ))}
      </select>

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving || isLoading}>
        {isSaving ? "Saving..." : "Save Access"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
