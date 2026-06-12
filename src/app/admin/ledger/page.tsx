import { PurchaseLedger } from "../../../components/admin/purchase-ledger";

export default function AdminLedgerPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Ledger</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Ledger</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Review completed records from fulfillment and provider flows.
      </p>
      <PurchaseLedger />
    </main>
  );
}
