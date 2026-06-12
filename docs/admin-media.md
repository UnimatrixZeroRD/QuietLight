# Admin Media

The Quiet Light admin area now includes a first media page.

Route:

- /admin/media

Components:

- src/components/admin/media-asset-editor.tsx
- src/components/admin/media-asset-list.tsx
- src/components/admin/embed-manager.tsx

---

## Current Capabilities

The media page can register media asset records for images, audio, video, and documents.

The page can also register embed records for services such as YouTube, Spotify, and Apple Music.

---

## Current Limitations

This layer records media metadata only.

It does not upload files yet.

---

## Next Media Work

1. Add file upload controls.
2. Connect media assets to posts, albums, tracks, and products.
3. Add cover image selection.
4. Add private or paid media access rules.
