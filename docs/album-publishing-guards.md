# Album Publishing Guards

Quiet Light now blocks album publishing until the album is ready.

## Route

`/admin/music`

## Required before publishing

An album must have:

- Title
- Slug
- Description
- Cover image
- Cover alt text
- At least one track
- At least one published track

## Admin behavior

Album cards now show a readiness panel.

The **Publish** button is disabled when required details are missing.

The album quick editor also blocks saving an album as published when the readiness check fails.

## Track count

Album cards show:

- Total tracks
- Published tracks

## Next

- Add track quick edit controls.
- Add track readiness guards.
- Add public album detail pages.
