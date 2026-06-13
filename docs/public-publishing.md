# Public Publishing

Quiet Light now has the first public publishing loop for blog-style posts.

---

## Current Flow

1. Admin opens `/admin/content`.
2. Admin creates a Post.
3. Admin sets the status to Published.
4. The post appears on `/blog`.
5. The post card links to `/blog/[slug]`.
6. The post detail page displays title, subtitle, excerpt, image, date, and body text.

---

## Public Routes

- `/blog`
- `/blog/[slug]`

---

## Data Source

Published public posts are loaded from `public.posts` where:

- `status = published`
- `access_level = public`

Fallback content is still used when Supabase is unavailable or no posts are returned.

---

## Next Work

1. Add Daily Light archive pages.
2. Add richer markdown rendering.
3. Add author display.
4. Add post categories or tags.
5. Add member-only post visibility.
