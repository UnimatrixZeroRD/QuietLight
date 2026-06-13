# Media Archive Controls

Quiet Light now supports safer media archiving from the admin media library.

## Route

`/admin/media`

## What changed

Each media card now includes an Archive safety section.

The card checks whether the asset is linked to:

- Product cover images.
- Blog post cover images.

## Archive rule

Assets with linked usage cannot be archived from the card.

Unused assets can be moved to private access with **Archive as Private**.

Private assets can be restored with **Restore Public**.

## Why this matters

This avoids hiding an image that is still used by a product page or blog post.

## Next

- Add a stronger archive state field later if needed.
- Add more usage checks for pages, albums, and Daily Light images when those features use media images.
