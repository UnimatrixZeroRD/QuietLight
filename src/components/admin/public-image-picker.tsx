"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ImageAsset = {
  id: string;
  title: string;
  bucket: string;
  path: string;
};

type PublicImagePickerProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PublicImagePicker({ value, onChange }: PublicImagePickerProps) {
  const [images, setImages] = useState<Array<ImageAsset & { url: string }>>([]);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    supabase
      .from("media_assets")
      .select("id,title,bucket,path")
      .eq("media_type", "image")
      .eq("access_level", "public")
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        const mapped = ((data ?? []) as ImageAsset[]).map((asset) => ({
          ...asset,
          url: supabase.storage.from(asset.bucket).getPublicUrl(asset.path).data.publicUrl,
        }));
        setImages(mapped);
      });
  }, []);

  return (
    <div className="mt-6">
      <label className="block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="cover-image">
        Cover image
      </label>
      <select
        className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="cover-image"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">No cover image</option>
        {images.map((image) => (
          <option key={image.id} value={image.url}>
            {image.title}
          </option>
        ))}
      </select>
      <p className="mt-3 text-xs leading-5 text-[var(--muted-silver)]">
        Upload public images in Admin Media first, then select them here.
      </p>
    </div>
  );
}
