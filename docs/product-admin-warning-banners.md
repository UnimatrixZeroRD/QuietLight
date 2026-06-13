# Product Admin Warning Banners

Quiet Light now shows product readiness warnings directly in the product admin list.

---

## Route

- `/admin/products`

---

## Product Readiness Rules

The product list now checks:

- Whether an active product has attached files.
- Whether attached files have customer-facing descriptions.
- Whether a product description is present.
- Whether a cover image is present.
- Whether a draft product appears ready to activate.
- Whether a product is archived.

---

## Warning States

Cards can show:

- Ready.
- Action needed.
- Review.
- Draft review.
- Draft ready.
- Archived.

---

## Summary Line

The top of the product list shows:

- Ready count.
- Action-needed count.
- Review count.

---

## Admin Actions

Each product card now includes:

- A link to view the public store page.
- Archive action for non-archived products.

---

## Next Work

- Add direct edit controls for existing products.
- Add product activation controls.
- Add file detach controls.
- Add file replacement/versioning.
- Add stronger launch-blocking checks before setting a product active.
