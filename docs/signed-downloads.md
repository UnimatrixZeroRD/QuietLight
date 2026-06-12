# Signed Product Downloads

Quiet Light now includes the first signed-download route for paid product files.

Route pattern:

- /api/products/[productId]/files/[fileId]/download

Implementation:

- src/app/api/products/[productId]/files/[fileId]/download/route.ts

---

## How It Works

1. The user must be signed in.
2. The route checks the requested product file.
3. Admin users are allowed through.
4. Non-admin users must have an active license for the product.
5. If access is valid, Supabase Storage creates a short-lived signed URL.
6. The route redirects the user to that signed URL.

Signed URLs currently last 600 seconds.

---

## Storage Access

The storage policy migration allows:

- Licensed users to read files from product-files.
- Active members to read files from member-files.
- Admin users to manage Quiet Light storage buckets.

Migration:

- supabase/migrations/20260612153000_product_file_storage_access.sql

---

## Current Limitations

This route handles product file delivery only.

It does not yet expose a customer-facing library page.

---

## Next Work

1. Add account library page.
2. List licensed products for the signed-in user.
3. Show available product files.
4. Link each file to the signed download route.
5. Add purchase creation from checkout provider webhooks.
