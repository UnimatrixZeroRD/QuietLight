"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ContentItem = {
  id: string;
  title: string;
  slug: string;
  status: string;
  type: "Post" | "Daily Light";
  createdAt: string;
};

type ContentFilter = "All" | ContentItem["type"];

function getPublicHref(item: ContentItem) {
  return item.type === "Post" ? `/blog/${item.slug}` : `/daily-light/${item.slug}`;
}

function getContentAnchor(item: ContentItem) {
  return `content-${item.type === "Post" ? "post" : "daily-light"}-${item.id}`;
}

export function ContentList() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<ContentFilter>("All");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesType = filter === "All" || item.type === filter;
      const matchesQuery = !normalizedQuery || `${item.title} ${item.slug} ${item.status}`.toLowerCase().includes(normalizedQuery);
      return matchesType && matchesQuery;
    });
  }, [filter, items, query]);

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
      supabase.from("posts").select("id,title,slug,status,created_at").order("created_at", { ascending: false }).limit(50),
      supabase.from("daily_light_entries").select("id,title,slug,status,created_at").order("created_at", { ascending: false }).limit(50),
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
          <h2 className="mt-4 text-3xl">Manage existing content</h2>
        </div>
        <button
          className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]"
          type="button"
          onClick={loadItems}
        >
          Refresh
        </button>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]">
        <label>
          <span className="sr-only">Search content</span>
          <input
            className="w-full rounded-full border border-[rgba(216,168,79,0.38)] bg-[rgba(7,17,31,0.84)] px-5 py-3 text-[var(--ivory)] outline-none placeholder:text-[var(--muted-silver)] focus:border-[var(--lantern-gold)]"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, slug, or status"
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Filter content type">
          {(["All", "Post", "Daily Light"] as ContentFilter[]).map((option) => (
            <button
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] ${
                filter === option ? "border-[var(--lantern-gold)] text-[var(--soft-gold)]" : "border-[rgba(216,168,79,0.3)] text-[var(--muted-silver)]"
              }`}
              key={option}
              type="button"
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading content...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
      {!isLoading ? (
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" aria-live="polite">
          Showing {visibleItems.length} of {items.length} items
        </p>
      ) : null}

      <div className="mt-6 grid gap-4">
        {visibleItems.map((item) => {
          const publicHref = getPublicHref(item);

          return (
            <article className="scroll-mt-28 rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" id={getContentAnchor(item)} key={`${item.type}-${item.id}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="gold-text text-xs uppercase tracking-[0.25em]">{item.type} · {item.status}</p>
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
                  {item.type === "Post" ? (
                    <Link
                      className="rounded-full border border-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]"
                      href={`/admin/content/posts/${item.id}`}
                    >
                      Edit Post
                    </Link>
                  ) : null}
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

      {!isLoading && !visibleItems.length ? (
        <div className="mt-6 rounded-2xl border border-[rgba(216,168,79,0.22)] p-7 text-center">
          <p className="text-lg">No content matches the current search and filter.</p>
          <button
            className="gold-text mt-4 text-xs uppercase tracking-[0.2em]"
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : null}
    </section>
  );
}
