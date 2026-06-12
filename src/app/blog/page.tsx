import { featuredPosts } from "../../data/posts";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Blog</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Reflections and Updates</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This section will host reflections, announcements, devotional writing, and long-form articles.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featuredPosts.map((post) => (
          <article className="lantern-panel rounded-3xl p-6" key={post.title}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{post.category}</p>
            <h2 className="mt-4 text-2xl">{post.title}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{post.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
