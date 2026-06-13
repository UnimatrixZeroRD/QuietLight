# Product Quick Edit Controls

Quiet Light now supports direct product editing from the product admin list.

---

## Route

- `/admin/products`

---

## Editable Fields

The product list card now includes an **Edit Details** control. Admins can update:

- Title.
- Slug.
- Product type.
- Price.
- Currency.
- Cover image URL.
- Product description.

---

## How It Works

1. Open `/admin/products`.
2. Find a product card.
3. Click **Edit Details**.
4. Update the product information.
5. Click **Save Details**.
6. The list refreshes and readiness warnings update.

---

## Activation Workflow

The quick editor works alongside the activation guard:

- Update missing product description.
- Add cover image URL.
- Attach files in the file manager.
- Add file descriptions.
- Activate only when the readiness banner says the draft is ready.

---

## Next Work

- Add a cover image picker from the media library.
- Add product file replacement/versioning.
- Add server-side validation for activation.
- Add product slug collision warnings.
