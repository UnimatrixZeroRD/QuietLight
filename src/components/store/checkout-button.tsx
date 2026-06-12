"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  productSlug: string;
};

export function CheckoutButton({ productSlug }: CheckoutButtonProps) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function startCheckout() {
    setIsLoading(true);
    setMessage("");

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productSlug }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.url) {
      window.location.href = data.url;
    } else {
      setMessage(data?.message ?? data?.error ?? "Checkout is not available yet.");
    }

    setIsLoading(false);
  }

  return (
    <div>
      <button
        className="lantern-glow rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60"
        type="button"
        onClick={startCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Preparing..." : "Begin Checkout"}
      </button>
      {message ? <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </div>
  );
}
