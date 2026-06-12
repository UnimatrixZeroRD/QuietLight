"use client";

import { useState } from "react";

type PaymentMethod = "stripe" | "paypal" | "etransfer";

type PaymentOptionsProps = {
  productSlug: string;
};

const methods: Array<{ id: PaymentMethod; label: string; description: string }> = [
  {
    id: "stripe",
    label: "Card",
    description: "Card checkout placeholder for a future Stripe connection.",
  },
  {
    id: "paypal",
    label: "PayPal",
    description: "PayPal checkout placeholder for a future PayPal connection.",
  },
  {
    id: "etransfer",
    label: "E-transfer",
    description: "Manual Canadian e-transfer instructions for early access orders.",
  },
];

export function PaymentOptions({ productSlug }: PaymentOptionsProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("etransfer");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleContinue() {
    setIsLoading(true);
    setMessage("");

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productSlug, method: selectedMethod }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.url) {
      window.location.href = data.url;
      return;
    }

    setMessage(data?.message ?? data?.error ?? "This option is not available yet.");
    setIsLoading(false);
  }

  return (
    <section className="mt-10 rounded-2xl border border-[rgba(216,168,79,0.25)] p-6">
      <h2 className="text-2xl">Choose payment option</h2>
      <div className="mt-5 grid gap-3">
        {methods.map((method) => (
          <label className="cursor-pointer rounded-2xl border border-[rgba(216,168,79,0.25)] p-4" key={method.id}>
            <span className="flex items-start gap-3">
              <input checked={selectedMethod === method.id} className="mt-1" name="payment-method" onChange={() => setSelectedMethod(method.id)} type="radio" />
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--soft-gold)]">{method.label}</span>
                <span className="mt-2 block text-sm leading-6 text-[var(--muted-silver)]">{method.description}</span>
              </span>
            </span>
          </label>
        ))}
      </div>
      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="button" onClick={handleContinue} disabled={isLoading}>
        {isLoading ? "Preparing..." : "Continue"}
      </button>
      {message ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </section>
  );
}
