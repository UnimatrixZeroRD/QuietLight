"use client";

import { FormEvent, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type EmbedItem = {
  id: string;
  title: string;
  provider: string;
  embed_url: string;
};

export function EmbedManager() {
  const [embeds, setEmbeds] = useState<EmbedItem[]>([]);
  const [title, setTitle] = useState("");
  const [provider, setProvider] = useState("YouTube");
  const [embedUrl, setEmbedUrl] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function loadEmbeds() {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { data, error } = await supabase
      .from("embeds")
      .select("id,title,provider,embed_url")
      .order("created_at", { ascending: false })
      .limit(30);

    if (error) {
      setMessage(error.message);
    } else {
      setEmbeds((data ?? []) as EmbedItem[]);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from("embeds").insert({
      title,
      provider,
      embed_url: embedUrl,
      description: "",
      access_level: "public",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Embed saved.");
      setTitle("");
      setProvider("YouTube");
      setEmbedUrl("");
      await loadEmbeds();
    }

    setIsSaving(false);
  }

  useEffect(() => {
    loadEmbeds();
  }, []);

  return (
    <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <form className="lantern-panel rounded-3xl p-8" onSubmit={handleSubmit}>
        <p className="gold-text uppercase tracking-[0.3em]">New Embed</p>
        <h2 className="mt-4 text-3xl">Register external media</h2>

        <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="embed-title">Title</label>
        <input className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" id="embed-title" value={title} onChange={(event) => setTitle(event.target.value)} required />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={provider} onChange={(event) => setProvider(event.target.value)} placeholder="Provider" required />
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={embedUrl} onChange={(event) => setEmbedUrl(event.target.value)} placeholder="Embed URL" required />
        </div>

        <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Embed"}
        </button>
        {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
      </form>

      <div className="lantern-panel rounded-3xl p-8">
        <p className="gold-text uppercase tracking-[0.3em]">Embeds</p>
        <h2 className="mt-4 text-3xl">Recent embeds</h2>
        <div className="mt-6 grid gap-4">
          {embeds.map((embed) => (
            <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={embed.id}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">{embed.provider}</p>
              <h3 className="mt-3 text-2xl">{embed.title}</h3>
              <p className="mt-2 break-all text-sm text-[var(--muted-silver)]">{embed.embed_url}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
