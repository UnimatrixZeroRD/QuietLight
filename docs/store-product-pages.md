# Store Product Pages

Quiet Light now includes public product detail pages for the store.

Routes:

- /store
- /store/[slug]

Implementation:

- src/lib/supabase/store-products.ts
- src/app/store/page.tsx
- src/app/store/[slug]/page.tsx

---

## Current Capabilities

The store index now links each product card to a detail page.

The product detail page shows:

- Product type.
- Product status.
- Product title.
- Product price.
- Product description.
- Sign-in link.
- Account library link.

---

## Current Limitations

Checkout buttons are not connected yet.

The current call to action points users toward sign-in and the account library until payment automation is added.

---

## Next Store Work

1. Add product cover image display to the detail page.
2. Add checkout provider choice.
3. Add checkout session creation.
4. Add payment webhook handling.
5. Create purchase and license records after successful checkout.
