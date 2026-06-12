# Signed Product Downloads

Quiet Light now includes the first signed-download route for paid product files and a customer-facing account library.

Route pattern:

- /api/products/[productId]/files/[fileId]/download

Implementation:

- src/app/api/products/[productId]/files/[fileId]/download/route.ts
- src/components/account/product-library.tsx

---

## How It Works

1. The user must be signed in.
2. The account library reads active licenses for that user.
3. Licensed products and product files are shown in the account area.
4. Each file links to the protected download route.
5. The download route checks access again.
6. If access is valid, Supabase Storage creates a short-lived signed URL.
7. The route redirects the user to that signed URL.

Signed URLs currently last 600 seconds.

---

## Storage Access

The storage policy migration allows:

- Licensed users to read files from product-files.
- Active members to read files from member-files.
- Admin users to manage Quiet Light storage buckets.

Migrations:

- supabase/migrations/20260612153000_product_file_storage_access.sql
- supabase/migrations/20260612160000_customer_library_read_policies.sql

---

## Current Limitations

The customer library depends on license records already existing.

Checkout webhooks are not connected yet, so licenses still need to be created by admin action or future payment automation.

---

## Next Work

1. Add admin license creation for testing.
2. Add purchase creation from checkout provider webhooks.
3. Add checkout buttons on product pages.
4. Add customer purchase history.
