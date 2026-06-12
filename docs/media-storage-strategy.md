# Media Storage Strategy

Quiet Light should not treat the website repository as the main storage location for books, audio, video, or private downloads.

The repository should contain code, documentation, configuration, and a small number of lightweight public assets. Large files and protected files should live in a dedicated storage service.

---

## Recommended Direction

Use Supabase Storage as the first application storage layer because Quiet Light already uses Supabase for authentication, profiles, products, purchases, licenses, and access control.

This keeps the platform simple:

- Supabase Auth controls the user.
- Supabase Postgres stores metadata.
- Supabase Storage stores files.
- The site stores only references such as bucket, path, media type, and access level.

---

## Storage Tiers

### Public Website Assets

Use the repository public folder only for small, stable, public assets such as logos, icons, placeholders, and static design assets that rarely change.

Do not use the repository for large video, audio, e-book delivery, or customer downloads.

### Supabase Storage

Use Supabase Storage for public images, book covers, audio files, PDFs, e-books, product downloads, member media, and paid-product files.

Recommended buckets:

- public-media
- private-media
- product-files
- member-files

### Third-Party Cloud Drives

Google Drive or Dropbox can be used for backup, source-file storage, or private working folders.

They should not be the primary public delivery system for the website because app-level access control, signed URLs, product licensing, analytics, and clean CDN delivery become harder to manage.

---

## Metadata Model

The media_assets table should store metadata, not the raw file.

Important fields:

- title
- description
- bucket
- path
- media_type
- access_level

The file itself should live in object storage.

---

## Delivery Model

Public files can use public URLs.

Private or paid files should use short-lived signed URLs generated server-side after checking membership, purchase, or license access.

---

## Future Work

1. Create Supabase Storage buckets.
2. Add upload controls to /admin/media.
3. Add file records to products.
4. Add cover image selection for posts, products, albums, and tracks.
5. Add signed download delivery for private and paid files.
