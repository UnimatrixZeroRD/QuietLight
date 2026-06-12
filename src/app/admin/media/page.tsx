import { EmbedManager } from "../../../components/admin/embed-manager";
import { MediaAssetEditor } from "../../../components/admin/media-asset-editor";
import { MediaAssetList } from "../../../components/admin/media-asset-list";
import { MediaUploader } from "../../../components/admin/media-uploader";

export default function AdminMediaPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Media</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Media Library</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Upload files, register media assets, and manage external embeds for books, music, video, posts, and future product pages.
      </p>
      <MediaUploader />
      <MediaAssetEditor />
      <MediaAssetList />
      <EmbedManager />
    </main>
  );
}
