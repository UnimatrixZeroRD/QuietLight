alter table public.daily_light_entries
  add column if not exists summary text,
  add column if not exists volume text,
  add column if not exists volume_title text,
  add column if not exists day integer,
  add column if not exists theme text,
  add column if not exists old_testament_reading text,
  add column if not exists new_testament_reading text,
  add column if not exists key_verse_reference text,
  add column if not exists key_verse_text text,
  add column if not exists reflection_question text,
  add column if not exists today_practice text,
  add column if not exists closing_thought text;

update public.daily_light_entries
set summary = coalesce(summary, scripture_reference, left(reflection, 240), title)
where summary is null;

alter table public.daily_light_entries
  alter column summary set not null,
  alter column published_on set not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.daily_light_entries'::regclass
      and conname = 'daily_light_entries_day_check'
  ) then
    alter table public.daily_light_entries
      add constraint daily_light_entries_day_check check (day between 1 and 365);
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.daily_light_entries'::regclass
      and conname = 'daily_light_entries_day_key'
  ) then
    alter table public.daily_light_entries
      add constraint daily_light_entries_day_key unique (day);
  end if;
end
$$;

create index if not exists daily_light_entries_publish_idx
  on public.daily_light_entries (status, access_level, published_on desc);

create index if not exists daily_light_entries_day_idx
  on public.daily_light_entries (day);

create or replace function public.set_daily_light_entries_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_daily_light_entries_updated_at on public.daily_light_entries;
create trigger set_daily_light_entries_updated_at
before update on public.daily_light_entries
for each row
execute function public.set_daily_light_entries_updated_at();

alter table public.daily_light_entries enable row level security;

drop policy if exists daily_light_public_select on public.daily_light_entries;
drop policy if exists "Public can read released Daily Light entries" on public.daily_light_entries;

create policy "Public can read released Daily Light entries"
on public.daily_light_entries
for select
to anon, authenticated
using (
  status = 'published'
  and access_level = 'public'
  and published_on <= ((now() at time zone 'America/Halifax')::date)
);

grant select on public.daily_light_entries to anon, authenticated;