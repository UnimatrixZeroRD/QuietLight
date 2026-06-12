import { OrderIntentList } from "../../../components/admin/order-intent-list";

export default function AdminOrdersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Orders</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Order Review</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Review pending store requests and early access records.
      </p>
      <OrderIntentList />
    </main>
  );
}
