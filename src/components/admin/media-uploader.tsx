"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type StorageBucket = "public-media" | "private-media" | "product-files" | "member-files";

type MediaType = "image" | "audio" | "video" | "document" | "download";

function cleanPath(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9._/-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function guessMediaType(fileType: string): MediaType {
  if (fileType.startsWith("image/")) return "image";
  if (fileType.startsWith("audio/")) return "audio";
  if (fileType.startsWith("video/")) return "video";
  if (fileType.includes("pdf") || fileType.includes("document")) return "document";
  return "download";
}

export function MediaUploader() {
  const [title, setTitle] = useState("");
  const [bucket, setBucket] = useState<StorageBucket>("public-media");
  const [folder, setFolder] = useState("uploads");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0] ?? null;
    setFile(selectedFile);

    if (selectedFile && !title) {
      setTitle(selectedFile.name.replace(/\.[^/.]+$/, ""));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsUploading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsUploading(false);
      return;
    }

    if (!file) {
      setMessage("Choose a file before uploading.");
      setIsUploading(false);
      return;
    }

    const safeFolder = cleanPath(folder || "uploads");
    const safeName = cleanPath(file.name);
    const storagePath = `${safeFolder}/${Date.now()}-${safeName}`;

    const upload = await supabase.storage.from(bucket).upload(storagePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

    if (upload.error) {
      setMessage(upload.error.message);
      setIsUploading(false);
      return;
    }

    const mediaType = guessMediaType(file.type);
    const accessLevel = bucket === "public-media" ? "public" : bucket === "product-files" ? "paid_product" : bucket === "member-files" ? "member" : "private";

    const { error } = await supabase.from("media_assets").insert({
      title,
      description: "",
      bucket,
      path: storagePath,
      media_type: mediaType,
      access_level: accessLevel,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("File uploaded and media asset registered. Refresh the list to see it.");
      setTitle("");
      setFolder("uploads");
      setFile(null);
    }

    setIsUploading(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">Upload File</p>
      <h2 className="mt-4 text-3xl">Storage upload</h2>
      <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
        Upload a file to Supabase Storage and automatically register it in the media asset table.
      </p>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="upload-title">Title</label>
      <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" id="upload-title" value={title} onChange={(event) => setTitle(event.target.value)} required />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={bucket} onChange={(event) => setBucket(event.target.value as StorageBucket)}>
          <option value="public-media">Public media</option>
          <option value="private-media">Private media</option>
          <option value="product-files">Product files</option>
          <option value="member-files">Member files</option>
        </select>
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={folder} onChange={(event) => setFolder(event.target.value)} placeholder="Folder" required />
      </div>

      <input className="mt-6 block w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" type="file" onChange={handleFileChange} required />

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload File"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
