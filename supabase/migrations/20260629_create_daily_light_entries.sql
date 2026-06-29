create table if not exists public.daily_light_entries (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null,
  access_level text not null default 'public' check (access_level in ('public', 'free_account', 'member', 'paid_product', 'private')),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  volume text,
  volume_title text,
  day integer unique check (day between 1 and 365),
  theme text,
  old_testament_reading text,
  new_testament_reading text,
  key_verse_reference text,
  key_verse_text text,
  scripture_reference text,
  scripture_text text,
  reflection text not null,
  prayer text,
  reflection_question text,
  today_practice text,
  closing_thought text,
  published_on date not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists daily_light_entries_publish_idx
  on public.daily_light_entries (status, access_level, published_on desc);

create index if not exists daily_light_entries_day_idx
  on public.daily_light_entries (day);

create or replace function public.set_daily_light_entries_updated_at()
returns trigger
language plpgsql
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

drop policy if exists "Public can read released Daily Light entries" on public.daily_light_entries;

create policy "Public can read released Daily Light entries"
on public.daily_light_entries
for select
using (
  status = 'published'
  and access_level = 'public'
  and published_on <= ((now() at time zone 'America/Halifax')::date)
);
