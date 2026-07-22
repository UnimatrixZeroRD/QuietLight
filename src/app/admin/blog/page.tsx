import Link from "next/link";
import { ContentEditor } from "../../../components/admin/content-editor";
import { ContentList } from "../../../components/admin/content-list";

export default function AdminBlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-4xl">
          <p className="gold-text uppercase tracking-[0.3em]">Admin Blog Studio</p>
          <h1 className="gold-text mt-4 text-5xl leading-tight md:text-7xl">Write and Publish</h1>
          <p className="mt-8 text-xl leading-9 text-[var(--muted-silver)]">
            Create visually formatted articles, save drafts, preview the finished page, publish updates, and return later to edit existing writing.
          </p>
        </div>
        <Link className="rounded-full border border-[rgba(216,168,79,0.45)] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)]" href="/blog">
          View Public Journal
        </Link>
      </div>

      <section className="mt-10 grid gap-4 rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(216,168,79,0.04)] p-6 text-sm leading-7 text-[var(--muted-silver)] md:grid-cols-3">
        <div><strong className="text-[var(--soft-gold)]">Format visually</strong><br />Headings, font sizes, emphasis, alignment, lists, quotes, links, and dividers.</div>
        <div><strong className="text-[var(--soft-gold)]">Add rich media</strong><br />Inline images, YouTube, Vimeo, Spotify, SoundCloud, Apple Music, and action buttons.</div>
        <div><strong className="text-[var(--soft-gold)]">Control publishing</strong><br />Keep articles as drafts, preview them, publish immediately, edit them, or archive them.</div>
      </section>

      <ContentEditor />
      <ContentList />
    </main>
  );
}
