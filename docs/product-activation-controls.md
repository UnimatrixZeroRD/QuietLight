# Product Activation Controls

Quiet Light now has safer product status controls in the product admin list.

---

## Route

- `/admin/products`

---

## New Controls

Product cards can now show:

- Activate.
- Move to Draft.
- Restore Draft.
- Archive.

---

## Activation Guard

A draft product can only be activated when the readiness check passes.

Required before activation:

- At least one attached delivery file.
- All attached files have customer-facing descriptions.
- Product description is present.
- Cover image is present.

If the product is not ready, the Activate button is disabled and the readiness banner explains what is missing.

---

## Status Flow

Recommended status flow:

1. Draft while preparing the product.
2. Activate only after files, descriptions, product copy, and cover art are ready.
3. Move back to Draft if a public product needs changes.
4. Archive when the product should no longer appear as active.
5. Restore Draft if an archived product needs to be rebuilt later.

---

## Next Work

- Add direct edit controls for existing products.
- Add stronger server-side activation validation.
- Add file replacement and versioning.
- Add product readiness warnings to the dashboard detail view.
