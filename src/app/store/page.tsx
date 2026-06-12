import { featuredProducts } from "../../data/products";

export default function StorePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Store</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Digital Store</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This section will hold e-books, music, videos, bundles, and digital access options.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <article className="lantern-panel rounded-3xl p-6" key={product.title}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{product.type}</p>
            <h2 className="mt-4 text-2xl">{product.title}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{product.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
