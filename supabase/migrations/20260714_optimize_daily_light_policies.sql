create index if not exists daily_light_entries_author_id_idx
  on public.daily_light_entries (author_id);

drop policy if exists "Public can read released Daily Light entries" on public.daily_light_entries;
drop policy if exists admin_all_daily_light_entries on public.daily_light_entries;
drop policy if exists daily_light_anon_select on public.daily_light_entries;
drop policy if exists daily_light_authenticated_select on public.daily_light_entries;
drop policy if exists daily_light_admin_insert on public.daily_light_entries;
drop policy if exists daily_light_admin_update on public.daily_light_entries;
drop policy if exists daily_light_admin_delete on public.daily_light_entries;

create policy daily_light_anon_select
on public.daily_light_entries
for select
to anon
using (
  status = 'published'
  and access_level = 'public'
  and published_on <= ((now() at time zone 'America/Halifax')::date)
);

create policy daily_light_authenticated_select
on public.daily_light_entries
for select
to authenticated
using (
  (
    status = 'published'
    and access_level = 'public'
    and published_on <= ((now() at time zone 'America/Halifax')::date)
  )
  or public.is_admin((select auth.uid()))
);

create policy daily_light_admin_insert
on public.daily_light_entries
for insert
to authenticated
with check (public.is_admin((select auth.uid())));

create policy daily_light_admin_update
on public.daily_light_entries
for update
to authenticated
using (public.is_admin((select auth.uid())))
with check (public.is_admin((select auth.uid())));

create policy daily_light_admin_delete
on public.daily_light_entries
for delete
to authenticated
using (public.is_admin((select auth.uid())));