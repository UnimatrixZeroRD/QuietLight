import { DeliveryChecklist } from "../../../components/admin/delivery-checklist";

export default function AdminDeliveryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Delivery</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Delivery Checklist</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Review which store products are ready for customer delivery and which still need attached files or better file descriptions.
      </p>
      <DeliveryChecklist />
    </main>
  );
}
