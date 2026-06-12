# Order Intents

Quiet Light now includes an order intent layer between product pages and access fulfillment.

---

## Purpose

Order intents let the platform record a user request before a payment provider is connected.

This supports:

- Manual e-transfer orders.
- Future Stripe checkout.
- Future PayPal checkout.
- Admin review before access is granted.
- Direct fulfillment into product access.

---

## Routes

- /api/checkout
- /admin/orders
- /api/admin/orders/[orderId]/fulfill

---

## Database

Table:

- public.order_intents

Important fields:

- user_id
- product_id
- product_slug
- product_title
- method
- amount_cents
- currency
- status
- customer_email
- provider_reference

Statuses:

- pending
- paid
- fulfilled
- cancelled

---

## Current Flow

1. Signed-in user selects a payment option on /store/[slug].
2. /api/checkout validates the product and user.
3. An order intent is created.
4. E-transfer returns manual instructions with the order ID.
5. Stripe and PayPal create pending records but remain placeholders.
6. Admin reviews orders in /admin/orders.
7. Admin can mark an order paid.
8. Admin can click Fulfill + Grant Access.
9. The fulfillment route creates an active license if one does not already exist.
10. The order is marked fulfilled.
11. The user can see the product in /account.

---

## Next Work

1. Add customer order history in /account.
2. Add purchase records when orders are fulfilled.
3. Add provider-specific checkout creation later.
4. Add provider webhook fulfillment later.
5. Add fulfillment audit notes.
