import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for The Way of Quiet Light, including accounts, digital products, memberships, and acceptable use.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | The Way of Quiet Light",
    description: "Terms of use for The Way of Quiet Light, including accounts, digital products, memberships, and acceptable use.",
    url: "/terms",
  },
};

const sections = [
  {
    title: "Use of the platform",
    body: "Quiet Light provides public writings, Daily Light reflections, scripture references, music, digital products, memberships, and related resources. By using the platform, you agree to use it lawfully, respectfully, and without attempting to harm the site or other users.",
  },
  {
    title: "Accounts",
    body: "Some features require an account. You are responsible for keeping your account information accurate and for protecting access to your account.",
  },
  {
    title: "Digital products",
    body: "Digital products may include books, audio, files, bundles, or other downloadable resources. Access is granted to the account associated with the order or license record and may not be shared, resold, or redistributed unless explicit permission is provided.",
  },
  {
    title: "Memberships",
    body: "Membership features may provide access to supporter resources, member-only content, or future benefits. Membership terms may change as the platform develops, and significant changes should be communicated clearly.",
  },
  {
    title: "Content ownership",
    body: "Quiet Light writings, music, artwork, product files, and platform content remain the property of their respective creators or rights holders. Public access does not grant permission to copy, redistribute, or commercially reuse content.",
  },
  {
    title: "Availability",
    body: "Quiet Light is an evolving platform. Features may change, content may be updated, and availability may occasionally be interrupted for maintenance, development, or service provider issues.",
  },
  {
    title: "Contact",
    body: "For questions about these terms, contact Joshua Eaton at joshuaeatonca@protonmail.com.",
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/">
        Back to home
      </Link>
      <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-10">
        <p className="gold-text uppercase tracking-[0.3em]">Legal</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">Terms of Use</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--muted-silver)]">
          These starter terms describe the basic expectations for using Quiet Light. They should be reviewed before public launch and updated as payment, membership, and content features expand.
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
