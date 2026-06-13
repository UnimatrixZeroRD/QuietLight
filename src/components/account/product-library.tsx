"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type LicenseRecord = {
  id: string;
  product_id: string;
  status: string;
  expires_at: string | null;
};

type ProductRecord = {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image_url: string | null;
};

type ProductFileRecord = {
  id: string;
  product_id: string;
  title: string;
  description: string;
  file_type: string;
};

type LibraryProduct = ProductRecord & {
  files: ProductFileRecord[];
};

function formatFileType(value: string) {
  return value.split("/").pop()?.toUpperCase() ?? value.toUpperCase();
}

export function ProductLibrary() {
  const [products, setProducts] = useState<LibraryProduct[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadLibrary = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Sign in to view your library.");
      setIsLoading(false);
      return;
    }

    const { data: licenses, error: licenseError } = await supabase
      .from("licenses")
      .select("id,product_id,status,expires_at")
      .eq("user_id", user.id)
      .eq("status", "active");

    if (licenseError) {
      setMessage(licenseError.message);
      setIsLoading(false);
      return;
    }

    const activeLicenses = ((licenses ?? []) as LicenseRecord[]).filter((license) => {
      return !license.expires_at || new Date(license.expires_at) > new Date();
    });

    const productIds = activeLicenses.map((license) => license.product_id);

    if (productIds.length === 0) {
      setProducts([]);
      setIsLoading(false);
      return;
    }

    const [productsResult, filesResult] = await Promise.all([
      supabase
        .from("products")
        .select("id,title,slug,description,cover_image_url")
        .in("id", productIds),
      supabase
        .from("product_files")
        .select("id,product_id,title,description,file_type")
        .in("product_id", productIds)
        .order("sort_order", { ascending: true }),
    ]);

    if (productsResult.error || filesResult.error) {
      setMessage(productsResult.error?.message ?? filesResult.error?.message ?? "Unable to load library.");
      setIsLoading(false);
      return;
    }

    const fileRecords = (filesResult.data ?? []) as ProductFileRecord[];
    const productRecords = ((productsResult.data ?? []) as ProductRecord[]).map((product) => ({
      ...product,
      files: fileRecords.filter((file) => file.product_id === product.id),
    }));

    setProducts(productRecords);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadLibrary();
    });
  }, [loadLibrary]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Library</p>
          <h2 className="mt-4 text-3xl">Your digital products</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadLibrary}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading your library...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      {!isLoading && products.length === 0 ? (
        <p className="mt-6 leading-7 text-[var(--muted-silver)]">
          No licensed products are attached to this account yet.
        </p>
      ) : null}

      <div className="mt-6 grid gap-5">
        {products.map((product) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={product.id}>
            <div className="grid gap-5 md:grid-cols-[120px_1fr]">
              {product.cover_image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="h-32 w-24 rounded-xl object-cover" src={product.cover_image_url} alt="" />
              ) : (
                <div className="h-32 w-24 rounded-xl border border-[rgba(216,168,79,0.25)]" />
              )}
              <div>
                <p className="gold-text text-xs uppercase tracking-[0.25em]">Licensed</p>
                <h3 className="mt-3 text-2xl">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{product.description}</p>
                {product.files.length === 0 ? (
                  <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">No downloadable files have been attached yet.</p>
                ) : null}
                <div className="mt-5 grid gap-3">
                  {product.files.map((file) => (
                    <div className="rounded-2xl border border-[rgba(216,168,79,0.18)] p-4" key={file.id}>
                      <p className="gold-text text-xs uppercase tracking-[0.22em]">{formatFileType(file.file_type)}</p>
                      <h4 className="mt-2 text-xl">{file.title || file.file_type}</h4>
                      {file.description ? <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{file.description}</p> : null}
                      <Link
                        className="mt-4 inline-block rounded-full border border-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)]"
                        href={`/api/products/${product.id}/files/${file.id}/download`}
                      >
                        Download File
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
