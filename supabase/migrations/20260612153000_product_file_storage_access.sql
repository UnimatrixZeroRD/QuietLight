-- Allow licensed users to read product storage objects and active members to read member files.

do $$
begin
  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Licensed users can read product files') then
    create policy "Licensed users can read product files"
    on storage.objects
    for select
    to authenticated
    using (
      bucket_id = 'product-files'
      and exists (
        select 1
        from public.product_files pf
        join public.licenses l on l.product_id = pf.product_id
        where pf.storage_bucket = storage.objects.bucket_id
          and pf.file_path = storage.objects.name
          and l.user_id = auth.uid()
          and l.status = 'active'
          and (l.expires_at is null or l.expires_at > now())
      )
    );
  end if;

  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Active members can read member files') then
    create policy "Active members can read member files"
    on storage.objects
    for select
    to authenticated
    using (
      bucket_id = 'member-files'
      and public.is_active_member(auth.uid())
    );
  end if;
end $$;
