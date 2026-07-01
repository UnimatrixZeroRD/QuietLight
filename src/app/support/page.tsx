import type { Metadata } from "next";
import Link from "next/link";
import { ContactRequestForm } from "../../components/support/contact-request-form";

export const metadata: Metadata = {
  title: "Support the Ministry",
  description:
    "Support Quiet Light Ministries through donations, membership, in-kind gifts, wish list support, and practical help for the work of the ministry.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support the Ministry | Quiet Light Ministries",
    description:
      "Help sustain and grow Quiet Light Ministries through donations, membership, equipment support, and in-kind gifts.",
    url: "/support",
  },
};

const donationOptions = [
  {
    label: "$10",
    description: "A simple gift toward hosting, tools, and daily ministry expenses.",
    href: "https://www.paypal.com/donate/?hosted_button_id=YJE9WNP3WEFWN",
    cta: "Donate with PayPal",
  },
  {
    label: "$25",
    description: "Helps support writing, publishing, media, and ongoing content creation.",
    href: "https://www.paypal.com/donate/?hosted_button_id=VWC3L2WGA4UBN",
    cta: "Donate with PayPal",
  },
  { label: "$50", description: "Helps strengthen the ministry platform and future creative work.", href: "#donation-options", cta: "Donation Link Placeholder" },
  { label: "$100", description: "A larger gift toward development, production, and long-term growth.", href: "#donation-options", cta: "Donation Link Placeholder" },
  { label: "Other Amount", description: "Choose a custom amount when the donation form is connected.", href: "#donation-options", cta: "Donation Link Placeholder" },
];

const ministryNeeds = [
  {
    title: "Online infrastructure",
    description:
      "Website hosting, domain services, software, storage, security tools, publishing systems, and the technical foundation required to keep the ministry available online.",
  },
  {
    title: "Content creation",
    description:
      "Writing, editing, book production, devotional materials, scripture projects, music releases, video work, podcast development, and future teaching resources.",
  },
  {
    title: "Production equipment",
    description:
      "Cameras, microphones, lighting, audio equipment, computer hardware, storage, software, and other tools that help improve the quality of videos, music, podcasts, and written resources.",
  },
  {
    title: "Growth and outreach",
    description:
      "Future community work, print materials, Bible distribution, ministry resources, membership tools, and the continued expansion of Quiet Light Ministries.",
  },
];

const imagePlaceholders = [
  "Donation and giving artwork",
  "Wishlist and equipment image",
  "In-kind gifts and resources image",
];

function VisualPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative min-h-56 overflow-hidden rounded-3xl border border-[rgba(216,168,79,0.34)] bg-[radial-gradient(circle_at_50%_10%,rgba(216,168,79,0.22),transparent_18rem),linear-gradient(135deg,rgba(11,31,58,0.92),rgba(7,17,31,0.96))] p-6 shadow-[0_0_42px_rgba(216,168,79,0.12)]">
      <div className="absolute inset-x-8 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(216,168,79,0.8),transparent)]" />
      <div className="flex h-full min-h-44 items-center justify-center rounded-2xl border border-dashed border-[rgba(216,168,79,0.36)] bg-[rgba(7,17,31,0.42)] text-center">
        <div className="px-6">
          <p className="gold-text text-4xl" aria-hidden="true">✦</p>
          <p className="gold-text mt-4 text-xs uppercase tracking-[0.24em]">Image Placeholder</p>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[var(--muted-silver)]">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.08fr_0.92fr] md:items-center">
        <div className="lantern-panel rounded-3xl p-6 md:p-12">
          <p className="gold-text uppercase tracking-[0.3em]">Support the Ministry</p>
          <h1 className="gold-text mt-4 text-5xl leading-tight md:text-7xl">Help keep the lantern burning.</h1>
          <div className="mt-8 space-y-5 text-lg leading-9 text-[var(--muted-silver)]">
            <p>
              Quiet Light Ministries exists to create and share devotional writing, scripture reflection, music, books, video, podcasts, teaching resources, and spiritual materials rooted in stillness, humility, and the light of Christ.
            </p>
            <p>
              The work is offered with an open heart, but it is not free to sustain. Hosting the website, developing the platform, creating new content, improving production quality, maintaining digital tools, publishing books and music, and expanding the ministry all require real resources.
            </p>
            <p>
              Support helps Quiet Light Ministries continue the work already begun and grow into the larger ministry it is meant to become. Every gift, membership, purchase, prayer, and practical contribution helps carry the flame forward.
            </p>
          </div>
        </div>
        <VisualPlaceholder label="A future support page hero image can go here, showing the lantern, ministry work, giving, or quiet service." />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12" id="donation-options">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="gold-text uppercase tracking-[0.3em]">Donations</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Give toward the work.</h2>
            <p className="mt-6 text-lg leading-9 text-[var(--muted-silver)]">
              Donations help sustain the ministry directly. Donation buttons can be connected through PayPal, Stripe, Square, or another secure payment provider. Supporters may give a fixed amount or choose another amount when the donation system is connected.
            </p>
            <p className="mt-5 leading-8 text-[var(--muted-silver)]">
              E-transfer information can also be added here for those who prefer to give directly. This section is prepared so the giving links can be added cleanly once the payment options are ready.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {donationOptions.map((option) => {
              const isExternal = option.href.startsWith("http");

              return (
                <Link
                  className="lantern-panel rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.55)] hover:bg-[rgba(216,168,79,0.06)]"
                  href={option.href}
                  key={option.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <p className="gold-text text-3xl">{option.label}</p>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{option.description}</p>
                  <p className="gold-text mt-5 text-xs uppercase tracking-[0.2em]">{option.cta}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="lantern-panel rounded-3xl p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <VisualPlaceholder label="Wishlist image placeholder for hardware, equipment, books, Bibles, and ministry tools." />
            <div>
              <p className="gold-text uppercase tracking-[0.3em]">Wish List</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Help provide practical tools.</h2>
              <p className="mt-6 text-lg leading-9 text-[var(--muted-silver)]">
                Some ministry needs are practical: equipment, hardware, production tools, books, Bibles, crafting supplies, storage, and other items that help improve the quality and reach of the work.
              </p>
              <p className="mt-5 leading-8 text-[var(--muted-silver)]">
                An Amazon wish list or similar list can be linked here so supporters can help provide specific items that strengthen the ministry and increase production value.
              </p>
              <Link className="gold-text mt-8 inline-block rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-[rgba(216,168,79,0.1)]" href="#wishlist-link">
                Amazon Wish List Placeholder
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.3em]">What Support Helps Cover</p>
          <h2 className="mt-4 text-4xl md:text-6xl">The practical cost of ministry.</h2>
          <p className="mt-6 text-lg leading-9 text-[var(--muted-silver)]">
            This ministry is built on faith, service, and quiet work, but it also requires tools, systems, and resources. The summaries below can later be expanded into a simple budget display without publishing every individual cost in detail.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {ministryNeeds.map((need) => (
            <article className="lantern-panel rounded-3xl p-6 md:p-8" key={need.title}>
              <p className="gold-text text-xs uppercase tracking-[0.24em]">Ministry Need</p>
              <h3 className="mt-4 text-2xl md:text-3xl">{need.title}</h3>
              <p className="mt-5 leading-8 text-[var(--muted-silver)]">{need.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="lantern-panel rounded-3xl p-6 md:p-10">
            <p className="gold-text uppercase tracking-[0.3em]">Membership</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Join the Order of the Lantern.</h2>
            <p className="mt-6 text-lg leading-9 text-[var(--muted-silver)]">
              Membership is another way to support the ministry while becoming part of the wider Quiet Light community. Members help sustain the work and take part in the spiritual life of the Order of the Lantern.
            </p>
            <p className="mt-5 leading-8 text-[var(--muted-silver)]">
              The membership page can guide supporters toward the different levels of participation and subscription once those options are fully connected.
            </p>
            <Link className="gold-text mt-8 inline-block rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-[rgba(216,168,79,0.1)]" href="/membership">
              Go to the Order of the Lantern
            </Link>
          </div>
          <div className="lantern-panel rounded-3xl p-6 md:p-10">
            <p className="gold-text uppercase tracking-[0.3em]">Books and Music</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Support through the work itself.</h2>
            <p className="mt-6 text-lg leading-9 text-[var(--muted-silver)]">
              Buying books, music, and future ministry resources also helps support the work. These purchases help fund continued writing, recording, publishing, and the creation of new materials.
            </p>
            <p className="mt-5 leading-8 text-[var(--muted-silver)]">
              Direct support is still important, but every book read, song shared, and resource purchased helps extend the reach of Quiet Light Ministries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="gold-text rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-[rgba(216,168,79,0.1)]" href="/keepers-lantern">
                Books
              </Link>
              <Link className="gold-text rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-[rgba(216,168,79,0.1)]" href="/music">
                Music
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="lantern-panel rounded-3xl p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="gold-text uppercase tracking-[0.3em]">In-Kind Donations</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Give resources, equipment, or useful items.</h2>
              <div className="mt-6 space-y-5 text-lg leading-9 text-[var(--muted-silver)]">
                <p>
                  Not every gift has to be financial. Quiet Light Ministries may be able to accept practical donations such as Bibles, books, crafting equipment, recording equipment, computer hardware, production tools, supplies, or other useful resources.
                </p>
                <p>
                  If you have something that could serve the ministry, help improve production quality, support outreach, or assist future community work, please reach out first so the item can be reviewed and the best way to receive it can be arranged.
                </p>
              </div>
            </div>
            <VisualPlaceholder label="In-kind donation image placeholder for Bibles, supplies, equipment, or donated resources." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {imagePlaceholders.map((label) => (
            <VisualPlaceholder label={label} key={label} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 pb-24">
        <div className="lantern-panel rounded-3xl p-6 md:p-10">
          <p className="gold-text uppercase tracking-[0.3em]">Contact</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Ask about giving, support, or in-kind donations.</h2>
          <p className="mt-6 text-lg leading-9 text-[var(--muted-silver)]">
            Use the form below for support questions, in-kind donation offers, equipment donations, wish list questions, membership questions, or technical/account matters connected to Quiet Light Ministries.
          </p>
          <ContactRequestForm />
        </div>
      </section>
    </main>
  );
}
