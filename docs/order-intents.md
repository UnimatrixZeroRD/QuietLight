# Order Intents

Quiet Light now includes an order intent layer between product pages and payment/access fulfillment.

---

## Purpose

Order intents let the platform record a user request before a payment provider is connected.

This supports:

- Manual e-transfer orders.
- Future Stripe checkout.
- Future PayPal checkout.
- Admin review before access is granted.

---

## Routes

- /api/checkout
- /admin/orders

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
5. Stripe and PayPal create pending order records but remain provider placeholders.
6. Admin reviews orders in /admin/orders.
7. Admin can mark orders paid, fulfilled, or cancelled.
8. Admin grants product access through /admin/members.

---

## Next Work

1. Add direct grant action from an order record.
2. Add customer order history in /account.
3. Add automatic access creation when an order is marked fulfilled.
4. Add provider-specific checkout creation later.
5. Add provider webhook fulfillment later.
