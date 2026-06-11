# Development Workflow

This document describes how work should happen in the QuietLight repository.

The goal is to keep the project organized, recoverable, and easy to continue even when development happens in small sessions.

---

## Current Phase

The project is currently in the documentation and planning phase.

The next phase is to scaffold the actual website.

---

## Recommended Workflow

### 1. Plan the Work

Before writing code, define what is being changed.

Examples:

- Build homepage hero.
- Add music page.
- Add book landing page.
- Add design system colors.
- Add Daily Light content structure.

### 2. Create or Update Files

Work should be committed in clear pieces.

Good commit examples:

```text
Add Quiet Light homepage hero
Add music album card component
Create design system tokens
Add Keeper's Lantern book page
```

Avoid vague commits:

```text
updates
fix stuff
more changes
final
```

### 3. Test Locally

Before deploying, run the project locally when possible.

Expected commands after the project is scaffolded:

```bash
npm install
npm run dev
npm run build
```

### 4. Commit to GitHub

Push changes to GitHub so the project history is preserved.

### 5. Review Preview Deployment

When connected to Vercel, each push or pull request should produce a preview deployment.

Review:

- Desktop layout.
- Mobile layout.
- Navigation.
- Image loading.
- Text readability.
- Button links.
- Overall mood.

### 6. Deploy to Production

After review, deploy or merge to production.

---

## Branch Strategy

Early in the project, direct work on `main` may be acceptable because the repository is new.

As soon as the first working website exists, use feature branches.

Recommended branches:

```text
main
feature/homepage
feature/music-page
feature/book-page
feature/daily-light
feature/design-system
```

Rules:

- `main` should remain stable.
- Large changes should happen in feature branches.
- Use pull requests for review when possible.
- Avoid mixing unrelated changes in one commit.

---

## Suggested Project Setup Steps

When the coding phase begins, scaffold the project with:

```bash
npx create-next-app@latest .
```

Recommended choices:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src directory: Yes
App Router: Yes
Turbopack: Optional
Import alias: Yes
```

After scaffolding, confirm the app runs:

```bash
npm run dev
```

Then begin replacing default content with the Quiet Light structure.

---

## Proposed Source Structure

A likely structure after scaffolding:

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    the-way/
      page.tsx
    keepers-lantern/
      page.tsx
    music/
      page.tsx
    lantern-psalms/
      page.tsx
    daily-light/
      page.tsx
    about/
      page.tsx
    support/
      page.tsx
  components/
    layout/
    sections/
    ui/
  content/
    daily-light/
    articles/
    music/
    books/
  lib/
  data/
public/
  images/
```

---

## Component Workflow

Build the website from reusable pieces.

Suggested order:

1. `SiteHeader`
2. `SiteFooter`
3. `CTAButton`
4. `SectionHeading`
5. `GoldDivider`
6. `HeroSection`
7. `LanternCard`
8. `AlbumCard`
9. `BookFeature`
10. `QuoteCard`

This keeps the visual language consistent.

---

## Styling Workflow

Start with global design tokens:

- Colors.
- Fonts.
- Background gradients.
- Body text styles.
- Link styles.
- Focus states.

Then build components using those tokens.

Do not hard-code random shades of blue and gold throughout the site. Use the design system consistently.

---

## Content Workflow

Start with static page copy.

Move repeatable or long-form content into Markdown/MDX later.

Good first content targets:

- Homepage copy.
- The Way overview.
- The Keeper's Lantern description.
- Album descriptions.
- About text.
- Support page copy.

---

## Asset Workflow

Before using images in the website:

1. Choose the correct image for the page.
2. Rename it clearly.
3. Optimize it for web use.
4. Place it in the correct folder.
5. Add useful alt text.
6. Test desktop and mobile cropping.

Keep high-resolution originals separate from web-optimized versions.

---

## Quality Checklist

Before considering a page complete, check:

- Does it match the blue/gold Quiet Light identity?
- Is the page readable on mobile?
- Is text readable over background images?
- Are buttons clear?
- Are links working?
- Are images optimized?
- Does the page feel calm rather than cluttered?
- Does it guide the visitor to the next step?

---

## Development Priorities

Priority order:

1. Clean project scaffold.
2. Design system and global styles.
3. Header and footer.
4. Homepage.
5. Book page.
6. Music page.
7. The Way page.
8. Daily Light page.
9. About page.
10. Support page.
11. Polish, SEO, performance, and deployment.

---

## Notes for Future Contributors

This project has a very specific tone and visual identity.

Before making major design choices, read:

- `README.md`
- `docs/project-overview.md`
- `docs/design-system.md`
- `docs/site-architecture.md`

The site should always preserve the core identity:

> The flame remains.
