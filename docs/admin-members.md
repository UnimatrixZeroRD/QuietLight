# Admin Members

The Quiet Light admin area now includes member review and a first manual access tool.

Route:

- /admin/members

Components:

- src/components/admin/member-list.tsx
- src/components/admin/access-grant-form.tsx
- src/app/api/admin/access-grants/route.ts

---

## Current Capabilities

The member page can show recent profile records from Supabase.

It currently displays:

- Display name.
- Handle.
- Role.
- User ID.

The access form can create a product access record for a user and product ID. This allows testing the account library and signed download flow before checkout automation is finished.

---

## Access Model

The route is protected by middleware.

Only signed-in users with profiles.role set to admin should be able to reach this page.

The access API route also checks that the signed-in user is an admin before creating access records.

---

## Current Limitations

This is a manual testing tool.

Checkout webhooks, purchase history, and automatic access creation still need to be built.

---

## Next Member Work

1. Add profile search.
2. Add membership status display.
3. Add purchase and access summaries.
4. Add safe role management.
5. Add audit notes for role and access changes.
