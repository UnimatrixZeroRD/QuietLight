import type { Metadata } from "next";
import { BlogArchive, type BlogArchivePost } from "../../components/blog-archive";
import { getPublicPosts } from "../../lib/supabase/public-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Reflections, announcements, devotional writing, and long-form updates from The Way of Quiet Light.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | The Way of Quiet Light",
    description: "Reflections, announcements, devotional writing, and long-form updates from The Way of Quiet Light.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getPublicPosts();
  const normalizedPosts: BlogArchivePost[] = posts.map((post) => ({
    title: post.title,
    category: post.category,
    summary: post.summary,
    href: post.href,
    featuredImageUrl: "featuredImageUrl" in post ? post.featuredImageUrl : undefined,
    publishedAt: "publishedAt" in post ? post.publishedAt : null,
  }));

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section className="max-w-4xl">
        <p className="gold-text uppercase tracking-[0.3em]">The Quiet Light Journal</p>
        <h1 className="gold-text mt-4 text-5xl leading-tight md:text-7xl">Reflections, Ministry News, and the Keeping of the Flame</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
          A growing archive of devotional writing, scriptural reflection, announcements, project updates, and longer thoughts from Quiet Light Ministries.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted-silver)]">
          <span className="rounded-full border border-[rgba(216,168,79,0.32)] px-4 py-2">Devotional reflections</span>
          <span className="rounded-full border border-[rgba(216,168,79,0.32)] px-4 py-2">Ministry updates</span>
          <span className="rounded-full border border-[rgba(216,168,79,0.32)] px-4 py-2">Announcements</span>
        </div>
      </section>

      <BlogArchive posts={normalizedPosts} />
    </main>
  );
}
