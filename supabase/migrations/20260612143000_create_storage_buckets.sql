-- Quiet Light storage buckets and admin storage policies.

insert into storage.buckets (id, name, public) values
  ('public-media', 'public-media', true),
  ('private-media', 'private-media', false),
  ('product-files', 'product-files', false),
  ('member-files', 'member-files', false)
on conflict (id) do nothing;

do $$
begin
  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Public media is readable') then
    create policy "Public media is readable"
    on storage.objects
    for select
    to anon, authenticated
    using (bucket_id = 'public-media');
  end if;

  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Admins can manage quiet light storage') then
    create policy "Admins can manage quiet light storage"
    on storage.objects
    for all
    to authenticated
    using (bucket_id in ('public-media', 'private-media', 'product-files', 'member-files') and public.is_admin(auth.uid()))
    with check (bucket_id in ('public-media', 'private-media', 'product-files', 'member-files') and public.is_admin(auth.uid()));
  end if;
end $$;
