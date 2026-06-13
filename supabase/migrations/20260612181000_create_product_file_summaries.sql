create or replace view public.product_file_summaries as
select
  pf.id,
  pf.product_id,
  p.slug as product_slug,
  pf.title,
  pf.description,
  pf.file_type,
  pf.sort_order
from public.product_files pf
join public.products p on p.id = pf.product_id
where p.status in ('active', 'draft')
order by pf.sort_order asc, pf.created_at asc;

grant select on public.product_file_summaries to anon, authenticated;
