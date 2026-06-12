# Authentication and Admin Plan

This document tracks the first authentication and admin preparation layer for Quiet Light.

---

## Current Authentication Layer

The app now includes a first client-side magic-link sign-in path using Supabase Auth.

Files:

- src/components/auth/sign-in-form.tsx
- src/components/auth/account-panel.tsx
- src/app/sign-in/page.tsx
- src/app/account/page.tsx

The sign-in form sends a Supabase magic link to the user email address. The account page reads the current Supabase client session in the browser and shows a basic signed-in state.

---

## Important Limitation

This is an early client-side authentication layer.

Before private content, admin actions, purchases, or member-only data are displayed, the project needs server-side session handling and protected routes.

The recommended future upgrade is to add Supabase SSR cookie-based auth and middleware.

---

## Admin Preparation Layer

The first admin routes now exist as placeholders:

- src/app/admin/page.tsx
- src/app/admin/content/page.tsx
- src/app/admin/members/page.tsx

These pages do not yet expose private data. They define the future admin structure for:

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

1. Add Supabase SSR support.
2. Add middleware for session refresh and protected paths.
3. Add admin role checks based on the profiles.role field.
4. Protect /admin routes server-side.
5. Add admin-only content queries.
6. Add the first content creation form.

---

## Supabase Dashboard Checklist

In the Supabase dashboard, confirm:

1. Email auth is enabled.
2. The Vercel production URL is allowed as a redirect URL.
3. The local development URL is allowed as a redirect URL.
4. The public anon or publishable key is present in Vercel environment variables.
5. The Supabase URL is present in Vercel environment variables.
