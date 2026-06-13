import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicPostBySlug } from "../../../lib/supabase/public-content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value?: string | null) {
  if (!value) return "Quiet Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long" }).format(new Date(value));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublicPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.body.split("\n\n").map((item) => item.trim()).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/blog">
        Back to blog
      </Link>

      <article className="lantern-panel mt-10 rounded-3xl p-8 md:p-10">
        <p className="gold-text uppercase tracking-[0.3em]">{post.category} - {formatDate(post.publishedAt)}</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">{post.title}</h1>
        {post.subtitle ? <p className="mt-6 text-2xl leading-9 text-[var(--soft-gold)]">{post.subtitle}</p> : null}
        <p className="mt-8 text-xl leading-9 text-[var(--muted-silver)]">{post.excerpt}</p>

        {post.featuredImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover" src={post.featuredImageUrl} alt="" />
        ) : null}

        <div className="mt-10 border-t border-[rgba(216,168,79,0.25)] pt-4">
          {paragraphs.map((paragraph) => (
            <p className="mt-6 text-lg leading-9 text-[var(--muted-silver)]" key={paragraph.slice(0, 80)}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
