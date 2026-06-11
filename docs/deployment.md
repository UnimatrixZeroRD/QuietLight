# Deployment

This document describes the planned deployment approach for the Quiet Light website.

The recommended deployment target is **Vercel**, connected directly to the GitHub repository.

---

## Hosting Goal

The website should be:

- Fast.
- Reliable.
- Easy to deploy.
- Easy to preview before production.
- Connected to GitHub.
- Able to support future growth.

---

## Recommended Hosting Platform

### Vercel

Vercel is the recommended first deployment platform because it works very well with Next.js and GitHub.

Expected benefits:

- Automatic deployments from GitHub.
- Preview deployments for branches and pull requests.
- Production deployment from the main branch.
- Simple environment variable management.
- Good support for static and dynamic Next.js pages.

---

## Expected Deployment Flow

1. Create or update code in the repository.
2. Push changes to GitHub.
3. Vercel detects the update.
4. Vercel builds the website.
5. A preview deployment is created.
6. Review the preview.
7. Merge or deploy to production.

---

## Branch Deployment Model

Recommended model:

| Branch | Purpose |
| --- | --- |
| `main` | Production-ready site. |
| Feature branches | Preview work before production. |

When using Vercel:

- `main` should be connected to production.
- Pull requests or feature branches should generate preview links.

---

## Build Commands

After the Next.js project is scaffolded, expected commands will likely be:

```bash
npm install
npm run dev
npm run build
npm run start
```

Vercel should normally detect the project automatically.

Expected production build command:

```bash
npm run build
```

Expected output:

```text
.next/
```

---

## Environment Variables

The first version of the site may not need environment variables.

Future variables may include:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public canonical website URL. |
| `NEWSLETTER_API_KEY` | Newsletter integration if added. |
| `CONTACT_FORM_API_KEY` | Contact form provider if added. |
| `ANALYTICS_ID` | Analytics provider if used. |
| `DONATION_PROVIDER_KEY` | Donation or payment provider if required. |

Do not commit secrets to GitHub.

---

## Domain Setup

When ready, the production domain should point to the Vercel project.

Possible domain direction:

```text
wayofquietlight.com
quietlight.ca
keeperlantern.com
```

The exact domain can be selected later.

---

## Deployment Checklist

Before production deployment, verify:

- Homepage loads correctly.
- Navigation works.
- Mobile layout is clean.
- Text is readable over all images.
- Buttons go to correct links.
- Images are optimized.
- Metadata and page titles are set.
- Favicon and social preview image are added.
- No placeholder text remains on public pages.
- Build completes without errors.

---

## SEO and Sharing

Each major page should eventually include:

- Page title.
- Meta description.
- Open Graph image.
- Canonical URL.
- Social sharing description.

Important pages:

- Home.
- The Keeper's Lantern.
- Music.
- The Lantern Psalms.
- Daily Light.
- About.
- Support.

---

## Performance Notes

Because the site uses rich imagery, performance matters.

Rules:

- Do not use enormous original image files directly in page backgrounds.
- Use optimized web images.
- Prefer modern image formats where possible.
- Lazy-load images below the fold.
- Keep animation subtle.
- Avoid unnecessary JavaScript.

---

## Accessibility Notes

Before production launch:

- Ensure color contrast is strong enough.
- Ensure keyboard navigation works.
- Use semantic HTML.
- Add alt text for meaningful images.
- Do not rely only on text embedded in images.
- Make focus states visible.

---

## Future Deployment Enhancements

Potential future additions:

- Analytics dashboard.
- Newsletter integration.
- Form handling.
- Automated content publishing.
- Search indexing.
- Scheduled Daily Light publishing.
- CDN-backed media library.

These should be added only after the first stable site is live.
