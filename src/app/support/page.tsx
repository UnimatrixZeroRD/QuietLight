import { ContactRequestForm } from "../../components/support/contact-request-form";

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Support</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Support the Work</h1>
      <p className="mt-8 text-xl leading-9 text-[var(--muted-silver)]">
        Send account, order, download, membership, or technical questions directly into the Quiet Light admin inbox.
      </p>
      <ContactRequestForm />
    </main>
  );
}
