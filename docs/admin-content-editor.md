# Admin Content Editor

The Quiet Light admin area now includes a first protected content editor.

Route:

- /admin/content

Component:

- src/components/admin/content-editor.tsx

---

## Current Capabilities

The editor can create:

- Posts.
- Daily Light entries.

Each item can be saved as:

- Draft.
- Published.

Published posts receive a published_at timestamp. Published Daily Light entries receive a published_on date.

---

## Access Model

The route is protected by middleware.

Only signed-in users with profiles.role set to admin should be able to reach this page.

The database also uses Row Level Security policies that allow admin users to write to the relevant tables.

---

## Next Editor Work

1. Add content listing and edit actions.
2. Add delete/archive actions.
3. Add page editing.
4. Add product editing.
5. Add album and track editing.
6. Add media attachment selection.
7. Add markdown preview.
