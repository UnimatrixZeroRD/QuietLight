import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Way of Quiet Light, including account, order, membership, and contact information practices.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | The Way of Quiet Light",
    description: "Privacy policy for The Way of Quiet Light, including account, order, membership, and contact information practices.",
    url: "/privacy",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: "Quiet Light may collect information you provide directly, including your name, email address, account details, order details, membership status, support messages, and content submitted through forms or account features.",
  },
  {
    title: "How we use information",
    body: "We use information to provide accounts, process orders, grant digital access, maintain purchase records, respond to support requests, improve the platform, protect the service, and communicate about Quiet Light resources.",
  },
  {
    title: "Payments and fulfillment",
    body: "Manual e-transfer orders are reviewed by an administrator before access is granted. Future payment providers may process payment information according to their own policies. Quiet Light stores order, purchase, and license records needed to deliver digital products and member access.",
  },
  {
    title: "Digital files and account access",
    body: "Licensed digital files are delivered through account-based access and signed download links. Access may require an active account, purchase, license, or membership record.",
  },
  {
    title: "Service providers",
    body: "Quiet Light may rely on trusted service providers for hosting, authentication, database storage, email, payment processing, analytics, and security. These services are used only as needed to operate the platform.",
  },
  {
    title: "Your choices",
    body: "You may contact Quiet Light to request help with account access, correction of account information, or questions about stored order and membership records.",
  },
  {
    title: "Contact",
    body: "For privacy questions, contact Joshua Eaton at joshuaeatonca@protonmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/">
        Back to home
      </Link>
      <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-10">
        <p className="gold-text uppercase tracking-[0.3em]">Legal</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">Privacy Policy</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--muted-silver)]">
          This page is a plain-language privacy notice for the Quiet Light platform. It should be reviewed before public launch and updated as the platform grows.
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
