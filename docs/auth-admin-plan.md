# Authentication and Admin Plan

This document tracks the authentication and admin preparation layer for Quiet Light.

---

## Current Authentication Layer

The app now includes email and password authentication using Supabase Auth.

Files:

- src/components/auth/sign-in-form.tsx
- src/components/auth/account-panel.tsx
- src/app/sign-in/page.tsx
- src/app/account/page.tsx
- src/lib/supabase/client.ts
- src/lib/supabase/server.ts
- src/lib/supabase/proxy.ts
- middleware.ts

The sign-in form supports:

- Email and password sign-in.
- Email and password account creation.
- Disabled placeholder buttons for Google, Facebook, and Apple sign-in.

The social sign-in providers are intentionally wired as configuration entries but disabled until provider credentials and Supabase dashboard settings are ready.

---

## Social Providers Planned

Configured but disabled:

- Google.
- Facebook.
- Apple.

Future work should enable these one at a time after the provider credentials, callback URLs, and Supabase Auth provider settings are confirmed.

---

## Route Protection

The first protected-route layer now exists.

Protected paths:

- /account
- /admin
- /admin/content
- /admin/members

Unauthenticated visitors are redirected to /sign-in.

Admin routes also check the profiles.role field and redirect non-admin users to /account.

---

## Admin Preparation Layer

The first admin routes now exist as placeholders:

- src/app/admin/page.tsx
- src/app/admin/content/page.tsx
- src/app/admin/members/page.tsx

These pages define the future admin structure for:

- Posts.
- Pages.
- Daily Light entries.
- Scripture references.
- Products.
- Albums.
- Tracks.
- Embeds.
- Members.
- Licenses.

---

## Next Auth Work

1. Test email and password sign-in locally.
2. Confirm Supabase email auth settings.
3. Confirm redirect URLs in the Supabase dashboard.
4. Add a profile editor for display name, handle, and bio.
5. Add admin-only content queries.
6. Add the first protected content creation form.
7. Enable Google, Facebook, and Apple one at a time when ready.

---

## Supabase Dashboard Checklist

In the Supabase dashboard, confirm:

1. Email auth is enabled.
2. Email password signups are allowed if public account creation is desired.
3. The Vercel production URL is allowed as a redirect URL.
4. The local development URL is allowed as a redirect URL.
5. The public anon or publishable key is present in Vercel environment variables.
6. The Supabase URL is present in Vercel environment variables.
7. Google, Facebook, and Apple providers remain disabled until credentials are ready.
