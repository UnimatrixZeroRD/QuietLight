import Link from "next/link";
import { notFound } from "next/navigation";
import { PaymentOptions } from "../../../components/store/payment-options";
import { getStoreProductBySlug } from "../../../lib/supabase/store-products";

type StoreProductPageProps = {
  params: Promise<{ slug: string }>;
};

function formatPrice(priceCents?: number, currency = "CAD") {
  if (priceCents === undefined) return "Price to be announced";
  return `${currency} ${(priceCents / 100).toFixed(2)}`;
}

export default async function StoreProductPage({ params }: StoreProductPageProps) {
  const { slug } = await params;
  const product = await getStoreProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/store">
        Back to store
      </Link>
      <section className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="lantern-panel rounded-3xl p-6">
          {product.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="aspect-[4/5] w-full rounded-2xl object-cover" src={product.coverImageUrl} alt="" />
          ) : (
            <div className="aspect-[4/5] rounded-2xl border border-[rgba(216,168,79,0.25)] bg-[rgba(216,168,79,0.08)]" />
          )}
        </div>
        <div className="lantern-panel rounded-3xl p-8">
          <p className="gold-text uppercase tracking-[0.3em]">{product.type} - {product.status}</p>
          <h1 className="gold-text mt-4 text-5xl md:text-7xl">{product.title}</h1>
          <p className="mt-8 text-2xl text-[var(--soft-gold)]">{formatPrice(product.priceCents, product.currency)}</p>
          <p className="mt-8 text-lg leading-8 text-[var(--muted-silver)]">{product.description}</p>
          <PaymentOptions productSlug={product.slug} />
          <Link className="mt-6 inline-block rounded-full border border-[rgba(216,168,79,0.45)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ivory)]" href="/account">
            Account Library
          </Link>
        </div>
      </section>
    </main>
  );
}
