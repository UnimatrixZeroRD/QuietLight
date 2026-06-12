import { ContentEditor } from "../../../components/admin/content-editor";
import { ContentList } from "../../../components/admin/content-list";

export default function AdminContentPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Content</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Content Management</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Create posts and Daily Light entries for the Quiet Light database.
      </p>
      <ContentEditor />
      <ContentList />
    </main>
  );
}
