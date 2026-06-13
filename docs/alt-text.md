# Alt Text Support

Quiet Light now has admin fields for image descriptions.

## Live fields

- `products.cover_alt_text`
- `media_assets.alt_text`

## Admin updates

- `/admin/media` can save alt text on new media records.
- The media list shows alt text status.
- `/admin/products` can save cover alt text in the quick editor.
- Product readiness checks warn when a cover image has no alt text.

## Public pages

Store product cover images now use a non-empty fallback alt value based on the product title.

## Next

- Add editable alt text controls for existing media records.
- Pass the product cover alt field through the public store data helper.
- Add dashboard-level warnings for missing image descriptions.
