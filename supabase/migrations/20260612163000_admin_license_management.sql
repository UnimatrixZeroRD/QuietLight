-- Admin license management for manual testing before checkout automation.

do $$
begin
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'licenses' and policyname = 'Admins can manage licenses') then
    create policy "Admins can manage licenses"
    on public.licenses
    for all
    to authenticated
    using (public.is_admin(auth.uid()))
    with check (public.is_admin(auth.uid()));
  end if;
end $$;
