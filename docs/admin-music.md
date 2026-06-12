# Admin Music

The Quiet Light admin area now includes a first music archive management page.

Route:

- /admin/music

Components:

- src/components/admin/album-editor.tsx
- src/components/admin/album-list.tsx

---

## Current Capabilities

The music admin page can create album records for the public music archive.

Albums can be saved as:

- Draft.
- Published.
- Archived.

The album list shows recent albums and includes a safe archive action.

---

## Current Limitations

This layer manages album records only.

Track editing, audio files, embed URLs, cover image selection, and product linking should be added later.

---

## Next Music Work

1. Add track editing.
2. Add album cover image selection.
3. Add Spotify, Apple Music, and YouTube embed records.
4. Add product links for purchasable music access.
5. Add audio file access and licensing rules.
