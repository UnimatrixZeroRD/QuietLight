import type { Metadata } from "next";
import Link from "next/link";
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

function formatDate(value?: string | null) {
  if (!value) return "Quiet Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium" }).format(new Date(value));
}

export default async function BlogPage() {
  const posts = await getPublicPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Blog</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Reflections and Updates</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This section hosts reflections, announcements, devotional writing, and long-form articles.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link className="lantern-panel block rounded-3xl p-6 transition hover:border-[rgba(216,168,79,0.55)]" href={post.href} key={post.title}>
            {"featuredImageUrl" in post && post.featuredImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="mb-5 aspect-[16/10] w-full rounded-2xl object-cover" src={post.featuredImageUrl} alt="" />
            ) : null}
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{post.category} - {"publishedAt" in post ? formatDate(post.publishedAt) : "Quiet Light"}</p>
            <h2 className="mt-4 text-2xl">{post.title}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{post.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
