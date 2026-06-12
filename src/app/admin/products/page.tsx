import { ProductEditor } from "../../../components/admin/product-editor";
import { ProductFileManager } from "../../../components/admin/product-file-manager";
import { ProductList } from "../../../components/admin/product-list";

export default function AdminProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Products</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Product Management</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Create products, attach uploaded files, and prepare future purchases and license delivery.
      </p>
      <ProductEditor />
      <ProductList />
      <ProductFileManager />
    </main>
  );
}
