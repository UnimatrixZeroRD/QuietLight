alter table public.product_files
add column if not exists description text not null default '';

update public.product_files
set description = ''
where description is null;
