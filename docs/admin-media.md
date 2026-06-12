# Admin Media

The Quiet Light admin area now includes a media page with file upload support.

Route:

- /admin/media

Components:

- src/components/admin/media-uploader.tsx
- src/components/admin/media-asset-editor.tsx
- src/components/admin/media-asset-list.tsx
- src/components/admin/embed-manager.tsx

Related planning:

- docs/media-storage-strategy.md

---

## Current Capabilities

The media page can upload files to Supabase Storage and register matching media asset records.

Configured buckets:

- public-media
- private-media
- product-files
- member-files

The page can also manually register media asset records for images, audio, video, and documents.

The page can register embed records for services such as YouTube, Spotify, and Apple Music.

---

## Access Model

Public media can be read publicly.

Admin users can manage files in the Quiet Light storage buckets.

Private, product, and member files should later be delivered by server-side signed URLs after access checks.

---

## Next Media Work

1. Connect media assets to posts, albums, tracks, and products.
2. Add cover image selection.
3. Add private or paid media access rules.
4. Add signed download delivery.
