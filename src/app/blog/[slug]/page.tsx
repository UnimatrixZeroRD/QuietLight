import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "../../../components/article-body";
import { richTextValueToPlainText } from "../../../lib/rich-text-document";
import { getPublicPostBySlug } from "../../../lib/supabase/public-content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value?: string | null) {
  if (!value) return "Quiet Light";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Quiet Light";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long" }).format(date);
}

function estimateReadingMinutes(body?: string | null) {
  const words = richTextValueToPlainText(body).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublicPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found", robots: { index: false, follow: false } };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | The Way of Quiet Light`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt ?? undefined,
      images: post.featuredImageUrl ? [{ url: post.featuredImageUrl, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.featuredImageUrl ? [post.featuredImageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublicPostBySlug(slug);
  if (!post) notFound();

  const readingMinutes = estimateReadingMinutes(post.body);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt ?? undefined,
    image: post.featuredImageUrl ? [post.featuredImageUrl] : undefined,
    author: { "@type": "Organization", name: "Quiet Light Ministries" },
    publisher: { "@type": "Organization", name: "Quiet Light Ministries" },
    mainEntityOfPage: `/blog/${post.slug}`,
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav aria-label="Blog breadcrumb" className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em]">
        <Link className="gold-text" href="/blog">Journal</Link>
        <span aria-hidden="true" className="text-[var(--muted-silver)]">/</span>
        <span className="text-[var(--muted-silver)]">{post.category}</span>
      </nav>

      <article className="mt-10">
        <header className="mx-auto max-w-4xl text-center">
          <p className="gold-text uppercase tracking-[0.3em]">{post.category}</p>
          <h1 className="gold-text mt-5 text-5xl leading-tight md:text-7xl">{post.title}</h1>
          {post.subtitle ? <p className="mx-auto mt-6 max-w-3xl text-2xl leading-9 text-[var(--soft-gold)]">{post.subtitle}</p> : null}
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">{post.excerpt}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-silver)]">
            <time dateTime={post.publishedAt ?? undefined}>{formatDate(post.publishedAt)}</time>
            <span>{readingMinutes} min read</span>
            <span>Quiet Light Ministries</span>
          </div>
        </header>

        {post.featuredImageUrl ? (
          <div className="lantern-panel mt-12 overflow-hidden rounded-3xl p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="aspect-[16/9] w-full rounded-[1.25rem] object-cover" src={post.featuredImageUrl} alt={post.title} />
          </div>
        ) : null}

        <div className="lantern-panel mx-auto mt-12 max-w-4xl rounded-3xl p-8 md:p-12">
          <ArticleBody body={post.body} />
        </div>

        <footer className="mx-auto mt-10 flex max-w-4xl flex-col gap-5 rounded-3xl border border-[rgba(216,168,79,0.25)] p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="gold-text text-xs uppercase tracking-[0.24em]">Continue reading</p>
            <p className="mt-3 text-[var(--muted-silver)]">Return to the journal for more reflections, announcements, and ministry updates.</p>
          </div>
          <Link className="gold-text shrink-0 text-sm uppercase tracking-[0.2em]" href="/blog">Explore the journal <span aria-hidden="true">→</span></Link>
        </footer>
      </article>
    </main>
  );
}
