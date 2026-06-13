import { MessageInbox } from "../../../components/admin/message-inbox";

export default function AdminSupportPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Support</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Support Inbox</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Review account, order, download, membership, and technical messages submitted through the support page.
      </p>
      <MessageInbox />
    </main>
  );
}
