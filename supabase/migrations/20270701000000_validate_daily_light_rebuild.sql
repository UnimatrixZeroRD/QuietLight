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
  volume_mismatch_days integer[];
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

  select array_agg(day order by day)
  into volume_mismatch_days
  from public.daily_light_entries
  where day between 1 and 365
    and (
      volume is distinct from case
        when day between 1 and 30 then 'Volume One'
        when day between 31 and 60 then 'Volume Two'
        when day between 61 and 90 then 'Volume Three'
        when day between 91 and 120 then 'Volume Four'
        when day between 121 and 150 then 'Volume Five'
        when day between 151 and 180 then 'Volume Six'
        when day between 181 and 210 then 'Volume Seven'
        when day between 211 and 240 then 'Volume Eight'
        when day between 241 and 270 then 'Volume Nine'
        when day between 271 and 300 then 'Volume Ten'
        when day between 301 and 330 then 'Volume Eleven'
        when day between 331 and 365 then 'Volume Twelve'
      end
      or volume_title is distinct from case
        when day between 1 and 30 then 'Walking in the Light'
        when day between 31 and 60 then 'Growing in Grace'
        when day between 61 and 90 then 'Living the Kingdom'
        when day between 91 and 120 then 'The Heart of Worship'
        when day between 121 and 150 then 'Faith Through the Storm'
        when day between 151 and 180 then 'The Character of Christ'
        when day between 181 and 210 then 'Serving the King'
        when day between 211 and 240 then 'Hope in Every Season'
        when day between 241 and 270 then 'Walking in Wisdom'
        when day between 271 and 300 then 'The Life of Faith'
        when day between 301 and 330 then 'The Heart of Prayer'
        when day between 331 and 365 then 'The Way of Wisdom'
      end
    );

  if volume_mismatch_days is not null then
    raise exception 'Daily Light rebuild validation failed: canonical volume metadata mismatches %', volume_mismatch_days;
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

  if actual_hash is distinct from '2ca9c9dca84e6703fc9dfb81708243a2' then
    raise exception 'Daily Light rebuild validation failed: canonical content hash mismatch; expected %, found %',
      '2ca9c9dca84e6703fc9dfb81708243a2', actual_hash;
  end if;
end
$$;
