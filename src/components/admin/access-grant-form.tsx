"use client";

import { FormEvent, useState } from "react";

export function AccessGrantForm() {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

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
      setMessage("Access record saved.");
      setUserId("");
      setProductId("");
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">Access</p>
      <h2 className="mt-4 text-3xl">Manual product access</h2>
      <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
        Enter a user ID and product ID to create a temporary access record for testing.
      </p>
      <input className="mt-8 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="User ID" required />
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={productId} onChange={(event) => setProductId(event.target.value)} placeholder="Product ID" required />
      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Access"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
