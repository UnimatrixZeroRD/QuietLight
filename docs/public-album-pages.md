# Public Album Pages

Quiet Light now supports public album detail pages.

## Routes

- `/music`
- `/music/[slug]`

## What changed

The music landing page now links each album card to its own album page.

Album detail pages show:

- Album cover image
- Cover alt text
- Album title
- Subtitle
- Description
- Published track cards
- Embedded track players when an embed URL exists

## Data helper

A dedicated public music helper now loads album lists and album detail records.

It only shows albums where:

- `status` is `published`
- `access_level` is `public`

It only shows tracks where:

- `status` is `published`
- The track belongs to the selected album

## Sitemap

Published album pages are now included in the sitemap.

## Next

- Add public album page links to admin cards.
- Add public music metadata polish.
- Add track playback cards for the main music landing page.
