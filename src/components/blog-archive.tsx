"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type BlogArchivePost = {
  title: string;
  category: string;
  summary: string;
  href: string;
  featuredImageUrl?: string;
  publishedAt?: string | null;
};

function formatDate(value?: string | null) {
  if (!value) return "Quiet Light";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Quiet Light";

  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium" }).format(date);
}

function estimateReadingMinutes(post: BlogArchivePost) {
  const wordCount = `${post.title} ${post.summary}`.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 180));
}

function PostImage({ post, featured = false }: { post: BlogArchivePost; featured?: boolean }) {
  if (post.featuredImageUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={featured ? "h-full min-h-72 w-full object-cover" : "aspect-[16/10] w-full object-cover"}
        src={post.featuredImageUrl}
        alt={post.title}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`${featured ? "min-h-72" : "aspect-[16/10]"} flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(216,168,79,0.22),transparent_58%),linear-gradient(145deg,rgba(15,38,67,0.96),rgba(7,17,31,0.98))]`}
    >
      <span className="gold-text text-5xl">✦</span>
    </div>
  );
}

export function BlogArchive({ posts }: { posts: BlogArchivePost[] }) {
  const [query, setQuery] = useState("");
  const featuredPost = posts[0];
  const normalizedQuery = query.trim().toLowerCase();

  const visiblePosts = useMemo(() => {
    if (!normalizedQuery) return posts.slice(1);

    return posts.filter((post) =>
      `${post.title} ${post.category} ${post.summary}`.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery, posts]);

  if (!posts.length) {
    return (
      <section className="lantern-panel mt-12 rounded-3xl p-8 text-center md:p-12">
        <p className="gold-text uppercase tracking-[0.3em]">The archive is being prepared</p>
        <h2 className="mt-5 text-3xl">The first reflections will appear here soon.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted-silver)]">
          Quiet Light writing, ministry updates, announcements, and longer devotional reflections will be gathered here as they are published.
        </p>
      </section>
    );
  }

  return (
    <>
      {featuredPost ? (
        <section className="lantern-panel mt-12 overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="overflow-hidden">
              <PostImage featured post={featuredPost} />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <p className="gold-text text-xs uppercase tracking-[0.28em]">Featured {featuredPost.category}</p>
              <h2 className="gold-text mt-5 text-4xl leading-tight md:text-5xl">{featuredPost.title}</h2>
              <p className="mt-6 text-lg leading-8 text-[var(--muted-silver)]">{featuredPost.summary}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]">
                <span>{formatDate(featuredPost.publishedAt)}</span>
                <span>{estimateReadingMinutes(featuredPost)} min read</span>
              </div>
              <Link
                className="lantern-glow mt-8 inline-flex w-fit rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)]"
                href={featuredPost.href}
              >
                Read featured reflection
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mt-16" aria-labelledby="blog-archive-heading">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="gold-text uppercase tracking-[0.3em]">Archive</p>
            <h2 className="mt-4 text-3xl md:text-4xl" id="blog-archive-heading">
              More from Quiet Light
            </h2>
          </div>
          <label className="block w-full md:max-w-sm">
            <span className="sr-only">Search the Quiet Light blog</span>
            <input
              className="w-full rounded-full border border-[rgba(216,168,79,0.38)] bg-[rgba(7,17,31,0.84)] px-5 py-3 text-[var(--ivory)] outline-none placeholder:text-[var(--muted-silver)] focus:border-[var(--lantern-gold)]"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search reflections and updates"
            />
          </label>
        </div>

        <p className="mt-5 text-sm text-[var(--muted-silver)]" aria-live="polite">
          {normalizedQuery
            ? `${visiblePosts.length} result${visiblePosts.length === 1 ? "" : "s"} found`
            : `${Math.max(0, posts.length - 1)} additional post${posts.length - 1 === 1 ? "" : "s"}`}
        </p>

        {visiblePosts.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {visiblePosts.map((post) => (
              <article className="lantern-panel overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:border-[rgba(216,168,79,0.55)]" key={`${post.href}-${post.title}`}>
                <PostImage post={post} />
                <div className="p-7">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]">
                    <span className="gold-text">{post.category}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{estimateReadingMinutes(post)} min read</span>
                  </div>
                  <h3 className="mt-5 text-3xl leading-tight">{post.title}</h3>
                  <p className="mt-5 leading-7 text-[var(--muted-silver)]">{post.summary}</p>
                  <Link className="gold-text mt-7 inline-flex text-sm uppercase tracking-[0.2em]" href={post.href}>
                    Read article <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="lantern-panel mt-8 rounded-3xl p-8 text-center">
            <h3 className="text-2xl">No matching reflections were found.</h3>
            <p className="mt-4 text-[var(--muted-silver)]">Try a different title, subject, or category.</p>
          </div>
        )}
      </section>
    </>
  );
}
