"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ContentItem = {
  id: string;
  title: string;
  slug: string;
  status: string;
  type: "Post" | "Daily Light";
  createdAt: string;
};

function getPublicHref(item: ContentItem) {
  return item.type === "Post" ? `/blog/${item.slug}` : `/daily-light/${item.slug}`;
}

export function ContentList() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadItems = useCallback(async () => {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const [postsResult, dailyResult] = await Promise.all([
      supabase.from("posts").select("id,title,slug,status,created_at").order("created_at", { ascending: false }).limit(10),
      supabase.from("daily_light_entries").select("id,title,slug,status,created_at").order("created_at", { ascending: false }).limit(10),
    ]);

    if (postsResult.error || dailyResult.error) {
      setMessage(postsResult.error?.message ?? dailyResult.error?.message ?? "Unable to load content.");
      setIsLoading(false);
      return;
    }

    const postItems: ContentItem[] = (postsResult.data ?? []).map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      status: item.status,
      type: "Post",
      createdAt: item.created_at,
    }));

    const dailyItems: ContentItem[] = (dailyResult.data ?? []).map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      status: item.status,
      type: "Daily Light",
      createdAt: item.created_at,
    }));

    setItems([...postItems, ...dailyItems].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
    setIsLoading(false);
  }, []);

  async function archiveItem(item: ContentItem) {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const table = item.type === "Post" ? "posts" : "daily_light_entries";
    const { error } = await supabase.from(table).update({ status: "archived", updated_at: new Date().toISOString() }).eq("id", item.id);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Content archived.");
      await loadItems();
    }
  }

  useEffect(() => {
    void Promise.resolve().then(() => {
      void loadItems();
    });
  }, [loadItems]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Content Library</p>
          <h2 className="mt-4 text-3xl">Recent items</h2>
        </div>
        <button
          className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]"
          type="button"
          onClick={loadItems}
        >
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading content...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4">
        {items.map((item) => {
          const publicHref = getPublicHref(item);

          return (
            <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={`${item.type}-${item.id}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="gold-text text-xs uppercase tracking-[0.25em]">{item.type} - {item.status}</p>
                  <h3 className="mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted-silver)]">/{item.slug}</p>
                  {item.status === "published" ? (
                    <Link className="gold-text mt-3 inline-flex text-xs uppercase tracking-[0.2em]" href={publicHref}>
                      Open public page
                    </Link>
                  ) : (
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-silver)]">Public page available after publishing</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.status === "published" ? (
                    <Link className="rounded-full border border-[rgba(42,166,161,0.65)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" href={publicHref}>
                      View Public Page
                    </Link>
                  ) : null}
                  {item.status !== "archived" ? (
                    <button
                      className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]"
                      type="button"
                      onClick={() => archiveItem(item)}
                    >
                      Archive
                    </button>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
