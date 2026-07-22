import Link from "next/link";
import { PostEditor } from "../../../../../components/admin/post-editor";

type AdminPostEditPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostEditPage({ params }: AdminPostEditPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <Link className="gold-text text-sm uppercase tracking-[0.18em]" href="/admin/content">
        ← Back to content management
      </Link>
      <p className="gold-text mt-10 uppercase tracking-[0.3em]">Admin Blog</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Edit Blog Post</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Revise the article, replace its image, change its public URL, or update its publishing status.
      </p>
      <PostEditor postId={id} />
    </main>
  );
}
