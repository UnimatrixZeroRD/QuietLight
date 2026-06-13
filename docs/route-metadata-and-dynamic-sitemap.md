# Route Metadata and Dynamic Sitemap

Quiet Light now has a second SEO pass focused on route-specific metadata and public dynamic sitemap entries.

---

## Added

Static route metadata was added for:

- `/about`
- `/the-way`
- `/keepers-lantern`
- `/music`
- `/bible`
- `/membership`
- `/support`
- `/lantern-psalms`

Page metadata was also added for:

- `/blog`
- `/daily-light`
- `/store`

Dynamic metadata was added for:

- `/blog/[slug]`
- `/daily-light/[slug]`
- `/store/[slug]`

---

## Dynamic Sitemap

The sitemap now includes:

- Static public routes.
- Published blog post URLs.
- Published Daily Light entry URLs.
- Store product URLs.

The sitemap is available at:

- `/sitemap.xml`

---

## Production Requirement

Set this environment variable before launch:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain
```

---

## Next SEO Work

- Add dynamic sitemap entries for scripture references.
- Add route metadata for future product/music/detail pages.
- Replace SVG default Open Graph art with a dedicated 1200x630 PNG.
- Add privacy and terms pages before public launch.
