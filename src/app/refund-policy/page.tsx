import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and digital delivery policy for Quiet Light products, manual e-transfer orders, and future payment options.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | The Way of Quiet Light",
    description: "Refund and digital delivery policy for Quiet Light products, manual e-transfer orders, and future payment options.",
    url: "/refund-policy",
  },
};

const sections = [
  {
    title: "Digital delivery",
    body: "Quiet Light products are generally delivered digitally through account access and signed download links. Once access has been granted, the product may be considered delivered.",
  },
  {
    title: "Manual e-transfer orders",
    body: "Manual e-transfer orders are reviewed before fulfillment. If payment is not received or an order cannot be matched to an account, access may be delayed until the order can be confirmed.",
  },
  {
    title: "Refund requests",
    body: "Refund requests may be reviewed case by case. Because digital products can be delivered immediately after fulfillment, refunds may be limited once access has been granted or files have been downloaded.",
  },
  {
    title: "Duplicate or mistaken orders",
    body: "If you believe you placed a duplicate order, used the wrong email address, or purchased the wrong product, contact Quiet Light as soon as possible so the issue can be reviewed.",
  },
  {
    title: "Contact",
    body: "For refund or order questions, contact Joshua Eaton at joshuaeatonca@protonmail.com and include your order ID, account email, and product name.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/">
        Back to home
      </Link>
      <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-10">
        <p className="gold-text uppercase tracking-[0.3em]">Store Policy</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">Refund Policy</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--muted-silver)]">
          This starter refund policy explains the current manual digital delivery process. It should be reviewed before public launch and updated when automated payments are added.
        </p>
        <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">Last updated: June 2026</p>

        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <section className="rounded-2xl border border-[rgba(216,168,79,0.2)] p-5" key={section.title}>
              <h2 className="gold-text text-2xl">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted-silver)]">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
