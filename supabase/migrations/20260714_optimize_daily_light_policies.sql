create index if not exists daily_light_entries_author_id_idx
  on public.daily_light_entries (author_id);

drop policy if exists admin_all_daily_light_entries on public.daily_light_entries;

create policy admin_all_daily_light_entries
on public.daily_light_entries
for all
to authenticated
using (public.is_admin((select auth.uid())))
with check (public.is_admin((select auth.uid())));