# Content and Assets

This document explains how Quiet Light content and visual assets should be organized.

The project includes books, music, devotional writings, social images, persona imagery, and sacred visual artwork. The website needs a clear structure so this material can grow without becoming cluttered.

---

## Content Categories

The website should organize content into these primary categories:

1. **Core Way of Quiet Light pages**
2. **Book content**
3. **Music content**
4. **Lantern Psalms content**
5. **Daily Light posts**
6. **Articles and reflections**
7. **Podcast or video content**
8. **Support and community content**

---

## Proposed Content Directory

When the site is scaffolded, a future content structure may look like this:

```text
content/
  daily-light/
  articles/
  books/
  music/
  lantern-psalms/
  pages/
```

Possible examples:

```text
content/daily-light/2026-06-11-the-flame-remains.mdx
content/articles/the-way-of-the-lantern.mdx
content/books/the-keepers-lantern.mdx
content/music/the-flame-remains.mdx
content/lantern-psalms/psalm-01.mdx
```

---

## Static Page Content

Static page copy may live directly in page files at first.

As the website grows, long-form content should move into Markdown or MDX files.

Static pages include:

- Home.
- The Way.
- The Keeper's Lantern.
- Music.
- The Lantern Psalms.
- About.
- Support.

---

## Daily Light Content

Daily Light posts should be short enough to read quickly, but meaningful enough to return to.

Recommended structure:

```yaml
title: "The Flame Remains"
date: "2026-06-11"
type: "reflection"
summary: "A short reflection on keeping the light through darkness."
tags:
  - daily-light
  - reflection
  - quiet-light
```

Suggested body structure:

```text
Opening quote or scripture

Reflection paragraph

Prayer or closing line
```

Possible Daily Light types:

- Scripture.
- Reflection.
- Quote.
- Prayer.
- Psalm excerpt.
- Seasonal devotional.

---

## Book Content

The book section should focus on **The Keeper's Lantern — The Book of Joshua**.

Content to include:

- Book title.
- Subtitle.
- Cover image.
- Short description.
- Longer description.
- What is included in the book.
- Editions.
- Purchase or download links when available.
- Related music or readings.

Possible book file:

```text
content/books/the-keepers-lantern.mdx
```

Possible fields:

```yaml
title: "The Keeper's Lantern"
subtitle: "The Book of Joshua"
author: "Joshua Eaton"
edition: "Definitive Edition"
status: "Available / Coming Soon"
cover: "/images/books/keepers-lantern-cover.webp"
```

---

## Music Content

The music section should eventually become a beautiful archive of Quiet Light albums and songs.

Initial albums:

- **The Flame Remains — The Lantern Psalms, Volume I**
- **The Everlasting Light — A Way of Quiet Light Hymn Collection**
- **Gloria Patri — Songs of the Holy Trinity**

Music pages should include:

- Album cover.
- Title.
- Subtitle.
- Release status.
- Short description.
- Track list if available.
- Listen links.
- Related devotional context.

Possible structure:

```text
content/music/the-flame-remains.mdx
content/music/the-everlasting-light.mdx
content/music/gloria-patri.mdx
```

---

## The Lantern Psalms

The Lantern Psalms should have their own section because they connect book, music, and devotion.

Possible content:

- Psalm title.
- Psalm number.
- Written text.
- Music/audio link.
- Reflection.
- Related album.

Possible structure:

```text
content/lantern-psalms/psalm-01.mdx
content/lantern-psalms/psalm-02.mdx
```

---

## Images and Visual Assets

Images should be stored in the public directory after the site is scaffolded.

Recommended structure:

```text
public/images/
  brand/
  backgrounds/
  books/
  music/
  founder/
  devotional/
  social/
```

### Suggested Folder Use

| Folder | Purpose |
| --- | --- |
| `brand` | Logos, flame marks, wordmarks, ornaments. |
| `backgrounds` | Aurora, lantern, landscape, path, and general page hero images. |
| `books` | Book covers and book promotional images. |
| `music` | Album covers and music artwork. |
| `founder` | Joshua Eaton / Keeper persona images. |
| `devotional` | Seasonal or specific devotional images. |
| `social` | Facebook, Instagram, TikTok, and promotional graphics. |

---

## Image Naming Rules

Use clear lowercase filenames with hyphens.

Good examples:

```text
quiet-light-aurora-lantern-hero.webp
keepers-lantern-book-cover.webp
rule-of-the-keeper-cover.webp
the-flame-remains-album-cover.webp
joshua-eaton-keeper-lantern.webp
```

Avoid:

```text
IMG_3928.png
final-final-v3-new.png
ChatGPT Image Jun 11 2026.png
```

Original files may keep their generated names in an archive folder, but web-ready files should be renamed clearly.

---

## Image Usage Guidance

### Homepage

Use the calmer blue/gold aurora and lantern images.

### Book Page

Use The Keeper's Lantern book cover and hands-passing-lantern imagery.

### Music Page

Use album covers and heavenly music-related artwork.

### About Page

Use founder/persona images with dignity and restraint.

### Devotional Pages

Use stronger theological images, including Passion, Crucifixion, Easter, and sacred seasonal artwork.

---

## Alt Text

Every meaningful image should include alt text.

Examples:

```text
A glowing lantern beside a quiet lake under blue aurora skies.
```

```text
The Keeper's Lantern book cover showing hands passing a glowing lantern.
```

```text
Joshua Eaton holding a lantern in a blue aurora landscape.
```

Alt text should describe the image clearly without becoming overly poetic.

---

## Content Principles

- Keep homepage copy short and powerful.
- Use deeper pages for longer explanations.
- Avoid burying important information inside images.
- Keep all public-facing text consistent in tone.
- Do not overload pages with every available asset.
- Use strong images where they serve a clear purpose.

---

## Future Content Features

Possible later additions:

- Searchable devotional archive.
- Album pages with embedded players.
- Newsletter subscription.
- Downloadable book excerpts.
- Media kit.
- Social post archive.
- Podcast episode archive.

The content structure should leave room for all of these without forcing them into the first release.
