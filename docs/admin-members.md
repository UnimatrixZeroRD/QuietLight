# Admin Members

The Quiet Light admin area now includes a first member review page.

Route:

- /admin/members

Component:

- src/components/admin/member-list.tsx

---

## Current Capabilities

The member page can show recent profile records from Supabase.

It currently displays:

- Display name.
- Handle.
- Role.

---

## Access Model

The route is protected by middleware.

Only signed-in users with profiles.role set to admin should be able to reach this page.

---

## Current Limitations

This is a review-only page for now.

Role editing, membership editing, purchases, and license management should be added carefully in later passes.

---

## Next Member Work

1. Add profile search.
2. Add membership status display.
3. Add purchase and license summaries.
4. Add safe role management.
5. Add audit notes for role and access changes.
