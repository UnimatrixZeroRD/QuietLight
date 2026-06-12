# Admin Content Editor

The Quiet Light admin area now includes a first protected content editor and content list.

Route:

- /admin/content

Components:

- src/components/admin/content-editor.tsx
- src/components/admin/content-list.tsx

---

## Current Capabilities

The editor can create:

- Posts.
- Daily Light entries.

Each item can be saved as:

- Draft.
- Published.

Published posts receive a published_at timestamp. Published Daily Light entries receive a published_on date.

The content list can show recent:

- Posts.
- Daily Light entries.

The list also includes a first safe archive action. This changes the item status to archived instead of deleting content.

---

## Access Model

The route is protected by middleware.

Only signed-in users with profiles.role set to admin should be able to reach this page.

The database also uses Row Level Security policies that allow admin users to write to the relevant tables.

---

## Next Editor Work

1. Add edit actions.
2. Add page editing.
3. Add product editing.
4. Add album and track editing.
5. Add media attachment selection.
6. Add markdown preview.
7. Add content search and filters.
