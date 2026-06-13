import type { Metadata } from "next";
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

function formatFileType(value: string) {
  return value.split("/").pop()?.toUpperCase() ?? value.toUpperCase();
}

export async function generateMetadata({ params }: StoreProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getStoreProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/store/${product.slug}` },
    openGraph: {
      title: `${product.title} | Quiet Light Store`,
      description: product.description,
      url: `/store/${product.slug}`,
      images: product.coverImageUrl ? [{ url: product.coverImageUrl, alt: product.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: product.coverImageUrl ? [product.coverImageUrl] : undefined,
    },
  };
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

          <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.2)] p-5">
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Included after purchase</p>
            {product.files.length > 0 ? (
              <div className="mt-4 grid gap-3">
                {product.files.map((file) => (
                  <article className="rounded-2xl border border-[rgba(216,168,79,0.16)] p-4" key={file.id}>
                    <p className="gold-text text-xs uppercase tracking-[0.2em]">{formatFileType(file.fileType)}</p>
                    <h2 className="mt-2 text-xl">{file.title}</h2>
                    {file.description ? <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{file.description}</p> : null}
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
                Downloadable files will appear in your account library after access is granted.
              </p>
            )}
          </section>

          <PaymentOptions productSlug={product.slug} />
          <Link className="mt-6 inline-block rounded-full border border-[rgba(216,168,79,0.45)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ivory)]" href="/account">
            Account Library
          </Link>
        </div>
      </section>
    </main>
  );
}
