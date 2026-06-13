"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ProductOption = {
  id: string;
  title: string;
};

type FileAssetOption = {
  id: string;
  title: string;
  description: string;
  bucket: string;
  path: string;
  media_type: string;
};

type ProductFile = {
  id: string;
  title: string;
  description: string;
  file_path: string;
  file_type: string;
  storage_bucket: string | null;
  sort_order: number;
};

function formatFileType(value: string) {
  return value.split("/").pop()?.toUpperCase() ?? value.toUpperCase();
}

export function ProductFileManager() {
  const [products, setProducts] = useState<ProductOption[]>([]);
  const [assets, setAssets] = useState<FileAssetOption[]>([]);
  const [files, setFiles] = useState<ProductFile[]>([]);
  const [productId, setProductId] = useState("");
  const [assetId, setAssetId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sortOrder, setSortOrder] = useState("0");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const selectedAsset = assets.find((asset) => asset.id === assetId);

  const loadOptions = useCallback(async () => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const [productsResult, assetsResult] = await Promise.all([
      supabase.from("products").select("id,title").order("created_at", { ascending: false }).limit(50),
      supabase
        .from("media_assets")
        .select("id,title,description,bucket,path,media_type")
        .in("bucket", ["product-files", "member-files", "private-media"])
        .order("created_at", { ascending: false })
        .limit(50),
    ]);

    const productOptions = (productsResult.data ?? []) as ProductOption[];
    const assetOptions = (assetsResult.data ?? []) as FileAssetOption[];

    setProducts(productOptions);
    setAssets(assetOptions);
    setProductId((currentProductId) => currentProductId || productOptions[0]?.id || "");
    setAssetId((currentAssetId) => currentAssetId || assetOptions[0]?.id || "");
  }, []);

  const loadFiles = useCallback(async (currentProductId: string) => {
    if (!currentProductId) return;
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { data, error } = await supabase
      .from("product_files")
      .select("id,title,description,file_path,file_type,storage_bucket,sort_order")
      .eq("product_id", currentProductId)
      .order("sort_order", { ascending: true });

    if (error) {
      setMessage(error.message);
    } else {
      setFiles((data ?? []) as ProductFile[]);
    }
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadOptions();
    });
  }, [loadOptions]);

  useEffect(() => {
    if (!productId) return;

    void Promise.resolve().then(() => {
      void loadFiles(productId);
    });
  }, [loadFiles, productId]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();

    if (!supabase || !selectedAsset || !productId) {
      setMessage("Select a product and uploaded file first.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from("product_files").insert({
      product_id: productId,
      media_asset_id: selectedAsset.id,
      title: title || selectedAsset.title,
      description: description || selectedAsset.description || "",
      storage_bucket: selectedAsset.bucket,
      file_path: selectedAsset.path,
      file_type: selectedAsset.media_type,
      sort_order: Number(sortOrder || "0"),
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Product file attached.");
      setTitle("");
      setDescription("");
      setSortOrder("0");
      await loadFiles(productId);
    }

    setIsSaving(false);
  }

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <p className="gold-text uppercase tracking-[0.3em]">Product Files</p>
      <h2 className="mt-4 text-3xl">Attach uploaded files</h2>
      <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
        Upload files in Admin Media first, then attach them to a product here. Descriptions appear in the customer library and help explain exactly what the buyer receives.
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={productId} onChange={(event) => setProductId(event.target.value)}>
            <option value="">Select product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>{product.title}</option>
            ))}
          </select>

          <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={assetId} onChange={(event) => setAssetId(event.target.value)}>
            <option value="">Select uploaded file</option>
            {assets.map((asset) => (
              <option key={asset.id} value={asset.id}>{asset.title} - {asset.bucket}</option>
            ))}
          </select>
        </div>

        {selectedAsset ? (
          <div className="mt-4 rounded-2xl border border-[rgba(216,168,79,0.2)] p-4 text-sm leading-6 text-[var(--muted-silver)]">
            <p className="gold-text text-xs uppercase tracking-[0.2em]">Selected upload</p>
            <p className="mt-2">{selectedAsset.bucket}/{selectedAsset.path}</p>
            <p>{formatFileType(selectedAsset.media_type)}</p>
            {selectedAsset.description ? <p className="mt-2">{selectedAsset.description}</p> : null}
          </div>
        ) : null}

        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_160px]">
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Display title" />
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} inputMode="numeric" placeholder="Sort" />
        </div>

        <textarea className="mt-4 min-h-28 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Customer-facing file description" />

        <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
          {isSaving ? "Attaching..." : "Attach File"}
        </button>
      </form>

      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-8 grid gap-4">
        {files.map((file) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={file.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{formatFileType(file.file_type)} - Sort {file.sort_order}</p>
            <h3 className="mt-3 text-2xl">{file.title}</h3>
            {file.description ? <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{file.description}</p> : null}
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{file.storage_bucket}/{file.file_path}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
