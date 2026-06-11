# Design System

The Quiet Light design system is built around a blue and gold sacred visual language.

The goal is to make the website feel like a digital sanctuary: calm, luminous, reverent, cinematic, and carefully composed.

---

## Visual Theme

Core phrase:

> Deep blue stillness. Gold lantern light. Sacred reflection.

The design should feel:

- Quiet.
- Sacred.
- Cinematic.
- Premium.
- Devotional.
- Warm despite its dark palette.
- Elegant rather than flashy.

---

## Color Palette

### Primary Colors

| Token | Hex | Use |
| --- | --- | --- |
| `midnight` | `#07111f` | Main background, header, footer. |
| `deep-blue` | `#0b1f3a` | Section backgrounds and cards. |
| `aurora-blue` | `#123c69` | Gradients, overlays, accents. |
| `quiet-teal` | `#2aa6a1` | Aurora accent and subtle highlights. |
| `lantern-gold` | `#d8a84f` | Primary headings, borders, buttons. |
| `soft-gold` | `#f3d58b` | Hover states, fine details, ornaments. |
| `warm-flame` | `#ffb347` | Glow effects and flame highlights. |
| `ivory` | `#f7efe0` | Body text on dark backgrounds. |
| `muted-silver` | `#b9c7d6` | Secondary text. |

### Suggested CSS Variables

```css
:root {
  --midnight: #07111f;
  --deep-blue: #0b1f3a;
  --aurora-blue: #123c69;
  --quiet-teal: #2aa6a1;
  --lantern-gold: #d8a84f;
  --soft-gold: #f3d58b;
  --warm-flame: #ffb347;
  --ivory: #f7efe0;
  --muted-silver: #b9c7d6;
}
```

---

## Typography

The site should use elegant serif typography for identity and headings, paired with a readable body font.

### Heading Fonts

Recommended options:

- `Cinzel`
- `Cormorant Garamond`
- `Playfair Display`
- `Trajan-style serif` if available through licensed sources

### Body Fonts

Recommended options:

- `Inter`
- `Lora`
- `Source Serif 4`

### Typography Rules

- Main page titles should be large, serif, gold, and letter-spaced.
- Section titles should use small caps or subtle letter spacing.
- Body text should prioritize readability over decoration.
- Avoid using too many different fonts.
- Use italics sparingly for devotional emphasis.
- Long reading pages should have generous line height.

Suggested pairing:

```text
Headings: Cinzel or Cormorant Garamond
Body: Inter or Source Serif 4
```

---

## Logo and Mark Usage

The website may use:

- A text mark: **The Way of Quiet Light**.
- A flame or lantern mark.
- Gold ornamental dividers.
- A simplified flame icon in navigation and section breaks.

Logo should be shown in gold or ivory over dark blue.

Avoid placing the logo on busy image areas without a dark overlay.

---

## Imagery Rules

The current artwork is very strong, but it must be used carefully.

### Best Homepage Image

Use the blue aurora lantern landscape as the main visual style for the homepage. It has the right balance of peace, beauty, light, and brand identity.

### Recommended Image Usage

| Image Type | Best Use |
| --- | --- |
| Blue aurora lantern landscape | Homepage hero and general brand background. |
| Lantern by water or path | General page heroes and section backgrounds. |
| Hands passing lantern | The Keeper's Lantern book page. |
| Book covers | Product/book cards and book landing pages. |
| Album covers | Music page and album cards. |
| Hooded Keeper portrait | About page, founder/persona section. |
| Rule of the Keeper cover | The Way page or Rule section. |
| Crucifixion/Passion image | Good Friday, Easter, Passion Week, or specific devotional pages. |
| Intense heavenly scenes | Music pages, album pages, and sacred feature pages. |

### Image Restraint

Do not use every image on the homepage. Too many intense images will reduce the sense of quiet.

The homepage should use a calm blue/gold image language, with stronger images reserved for deeper pages.

---

## Layout Style

The site should use:

- Wide cinematic hero sections.
- Dark blue translucent panels.
- Thin gold borders.
- Gold ornamental dividers.
- Soft glow effects around lanterns, buttons, and section accents.
- Card grids for music and content.
- Alternating image/text feature sections.

Avoid:

- Pure white backgrounds.
- Flat corporate blocks.
- Harsh neon colors.
- Excessive animation.
- Overcrowded image collages.
- Busy navigation.

---

## Components

### Buttons

Primary button:

- Gold background.
- Dark text.
- Thin gold border.
- Soft flame glow on hover.

Secondary button:

- Transparent dark blue background.
- Gold or ivory text.
- Thin gold border.
- Slight blue/gold glow on hover.

### Cards

Cards should use:

- Deep blue or near-black translucent background.
- 1px gold border.
- Soft inner glow or subtle gradient.
- Rounded corners used carefully.
- Small ornamental accent where appropriate.

### Dividers

Use gold dividers to separate important sections.

Dividers should feel like book ornamentation, not modern UI lines.

---

## Motion and Effects

Motion should be subtle.

Recommended effects:

- Slow fade in.
- Gentle upward reveal.
- Soft lantern glow pulse.
- Slight button glow on hover.
- Slow background parallax only if performance remains good.

Avoid:

- Fast animations.
- Bouncing effects.
- Heavy particle systems.
- Anything that makes the site feel like a game interface.

---

## Accessibility

The site must remain readable and usable.

Rules:

- Text over images must always have a dark overlay.
- Body text must have strong contrast.
- Buttons must be clearly visible.
- Keyboard navigation should work.
- Links should be visually distinct.
- Important text should not be embedded only inside images.
- Mobile text must not become too small.

---

## Design Summary

The final website should look like:

- A sacred book.
- A devotional music archive.
- A quiet chapel under aurora skies.
- A lantern-lit path through darkness.

It should not simply display the brand. It should make the visitor feel the brand.
