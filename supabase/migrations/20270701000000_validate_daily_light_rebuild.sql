-- Final rebuild guard for the complete Daily Light collection.
-- This migration must run after every Daily Light data migration.
-- It validates structural integrity and exact canonical content parity.

do $$
declare
  actual_count integer;
  actual_hash text;
  missing_days integer[];
  incomplete_days integer[];
  non_public_days integer[];
  date_mismatch_days integer[];
begin
  select count(*)
  into actual_count
  from public.daily_light_entries
  where day between 1 and 365;

  if actual_count <> 365 then
    raise exception 'Daily Light rebuild validation failed: expected 365 numbered entries, found %', actual_count;
  end if;

  select array_agg(expected_day order by expected_day)
  into missing_days
  from generate_series(1, 365) as expected_day
  where not exists (
    select 1
    from public.daily_light_entries entry
    where entry.day = expected_day
  );

  if missing_days is not null then
    raise exception 'Daily Light rebuild validation failed: missing day numbers %', missing_days;
  end if;

  select array_agg(day order by day)
  into non_public_days
  from public.daily_light_entries
  where day between 1 and 365
    and (status is distinct from 'published' or access_level is distinct from 'public');

  if non_public_days is not null then
    raise exception 'Daily Light rebuild validation failed: unpublished or non-public days %', non_public_days;
  end if;

  select array_agg(day order by day)
  into incomplete_days
  from public.daily_light_entries
  where day between 1 and 365
    and (
      nullif(btrim(slug), '') is null
      or nullif(btrim(title), '') is null
      or nullif(btrim(summary), '') is null
      or nullif(btrim(volume), '') is null
      or nullif(btrim(volume_title), '') is null
      or nullif(btrim(theme), '') is null
      or nullif(btrim(old_testament_reading), '') is null
      or nullif(btrim(new_testament_reading), '') is null
      or nullif(btrim(key_verse_reference), '') is null
      or nullif(btrim(key_verse_text), '') is null
      or nullif(btrim(reflection), '') is null
      or nullif(btrim(prayer), '') is null
      or nullif(btrim(reflection_question), '') is null
      or nullif(btrim(today_practice), '') is null
      or nullif(btrim(closing_thought), '') is null
      or published_on is null
    );

  if incomplete_days is not null then
    raise exception 'Daily Light rebuild validation failed: incomplete days %', incomplete_days;
  end if;

  select array_agg(day order by day)
  into date_mismatch_days
  from public.daily_light_entries
  where day between 1 and 365
    and published_on is distinct from (date '2026-07-01' + (day - 1));

  if date_mismatch_days is not null then
    raise exception 'Daily Light rebuild validation failed: canonical publication-date mismatches %', date_mismatch_days;
  end if;

  if exists (
    select slug
    from public.daily_light_entries
    where day between 1 and 365
    group by slug
    having count(*) > 1
  ) then
    raise exception 'Daily Light rebuild validation failed: duplicate slugs detected';
  end if;

  select md5(string_agg(
    md5(jsonb_build_object(
      'slug', slug,
      'title', title,
      'summary', summary,
      'access_level', access_level,
      'status', status,
      'volume', volume,
      'volume_title', volume_title,
      'day', day,
      'theme', theme,
      'old_testament_reading', old_testament_reading,
      'new_testament_reading', new_testament_reading,
      'key_verse_reference', key_verse_reference,
      'key_verse_text', key_verse_text,
      'scripture_reference', scripture_reference,
      'scripture_text', scripture_text,
      'reflection', reflection,
      'prayer', prayer,
      'reflection_question', reflection_question,
      'today_practice', today_practice,
      'closing_thought', closing_thought,
      'published_on', published_on
    )::text),
    '' order by day
  ))
  into actual_hash
  from public.daily_light_entries
  where day between 1 and 365;

  if actual_hash is distinct from '29ad90e45281338ba0b2c7f07138b4d8' then
    raise exception 'Daily Light rebuild validation failed: canonical content hash mismatch; expected %, found %',
      '29ad90e45281338ba0b2c7f07138b4d8', actual_hash;
  end if;
end
$$;