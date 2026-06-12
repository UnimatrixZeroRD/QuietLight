-- Connect product file records to uploaded media assets.

alter table public.product_files
  add column if not exists media_asset_id uuid references public.media_assets(id) on delete set null,
  add column if not exists storage_bucket text;

update public.product_files
set storage_bucket = coalesce(storage_bucket, 'product-files')
where storage_bucket is null;
