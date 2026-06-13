# Production Polish and Responsive QA

Quiet Light now includes a first production-readiness pass for metadata, responsive navigation, accessibility, and error handling.

---

## Added

- Global metadata and Open Graph defaults.
- Twitter card defaults.
- Robots metadata route.
- Sitemap metadata route.
- Web app manifest.
- Polished 404 page.
- Polished global error page.
- Skip-to-content link.
- Mobile horizontal navigation.
- Improved focus-visible styles.
- Reduced-motion support.
- Mobile homepage spacing and type refinements.

---

## Environment

Set the production domain in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain
```

For local development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Responsive QA Checklist

Test these viewport widths:

- 390px mobile.
- 430px large mobile.
- 768px tablet.
- 1024px small desktop.
- 1440px desktop.

Check:

- Header remains usable.
- Mobile navigation scrolls horizontally.
- Hero text does not overflow.
- Buttons stack cleanly on mobile.
- Cards remain readable.
- Store product pages remain readable.
- Admin panels remain usable on tablet and desktop.
- Account panels do not overflow.

---

## SEO QA Checklist

Check:

- Page title appears correctly.
- Page description appears correctly.
- `/robots.txt` loads.
- `/sitemap.xml` loads.
- `/manifest.webmanifest` loads.
- Open Graph defaults render in page source.
- `NEXT_PUBLIC_SITE_URL` is set before launch.

---

## Remaining Production Work

- Add route-specific metadata for major pages.
- Replace SVG Open Graph fallback with a 1200x630 PNG image.
- Add dynamic sitemap entries for published posts, Daily Light entries, and products.
- Add privacy and terms pages.
- Add final copy editing pass.
- Run full mobile QA on real devices.
