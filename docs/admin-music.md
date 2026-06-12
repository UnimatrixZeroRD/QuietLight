# Admin Music

The Quiet Light admin area now includes music archive management for albums and tracks.

Route:

- /admin/music

Components:

- src/components/admin/album-editor.tsx
- src/components/admin/album-list.tsx
- src/components/admin/track-editor.tsx
- src/components/admin/track-list.tsx
- src/components/admin/public-image-picker.tsx

---

## Current Capabilities

The music admin page can create album records for the public music archive.

Albums can be saved as:

- Draft.
- Published.
- Archived.

Albums can now select a public media asset as a cover image.

The album list shows recent albums and includes a safe archive action.

The track editor can create track records and optionally connect a track to an existing album.

Tracks can include:

- Title.
- Slug.
- Description.
- Track number.
- Status.
- Optional embed URL.

The track list shows recent tracks and includes a safe archive action.

---

## Current Limitations

This layer manages album and track records only.

Audio files, direct player integration, and product linking should be added later.

---

## Next Music Work

1. Add Spotify, Apple Music, and YouTube embed records.
2. Add product links for purchasable music access.
3. Add audio file access and licensing rules.
4. Add track editing and reordering.
