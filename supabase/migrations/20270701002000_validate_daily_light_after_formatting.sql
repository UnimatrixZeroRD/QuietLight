-- Final validation after Daily Light formatting and content-quality normalization.

do $$
declare
  actual_count integer;
  actual_hash text;
  formatting_artifact_count integer;
  content_quality_issue_count integer;
begin
  select count(*)
  into actual_count
  from public.daily_light_entries
  where day between 1 and 365;

  if actual_count <> 365 then
    raise exception 'Daily Light final validation failed: expected 365 entries, found %', actual_count;
  end if;

  with fields as (
    select reflection as value from public.daily_light_entries where day between 1 and 365
    union all select prayer from public.daily_light_entries where day between 1 and 365
    union all select summary from public.daily_light_entries where day between 1 and 365
    union all select key_verse_text from public.daily_light_entries where day between 1 and 365
    union all select reflection_question from public.daily_light_entries where day between 1 and 365
    union all select today_practice from public.daily_light_entries where day between 1 and 365
    union all select closing_thought from public.daily_light_entries where day between 1 and 365
  )
  select count(*)
  into formatting_artifact_count
  from fields
  where value is not null
    and (
      value ~ E'(^|\n)#{1,6}\s'
      or value like '%**%'
      or value ~ E'(^|\n)---($|\n)'
      or value ~ E'(^|\n)\s*[-*+]\s+'
      or value ~ E'(^|\n)\s*>\s+'
      or value like '%`%'
      or value like '%\%'
      or value ~ E'\r'
      or value ~ E'\t'
      or value ~ E'(^|\n)[[:space:]]+$'
    );

  if formatting_artifact_count <> 0 then
    raise exception 'Daily Light final validation failed: found % formatting artifacts', formatting_artifact_count;
  end if;

  select count(*)
  into content_quality_issue_count
  from public.daily_light_entries
  where day between 1 and 365
    and (
      scripture_reference is null
      or scripture_text is null
      or scripture_reference is distinct from key_verse_reference
      or scripture_text is distinct from key_verse_text
      or length(summary) < 60
      or length(reflection) < 700
    );

  if content_quality_issue_count <> 0 then
    raise exception 'Daily Light final validation failed: found % content-quality issues', content_quality_issue_count;
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

  if actual_hash is distinct from '4df8ab713c3a7f41183b5d34192ce0e3' then
    raise exception 'Daily Light final validation failed: canonical content hash mismatch; expected %, found %',
      '4df8ab713c3a7f41183b5d34192ce0e3', actual_hash;
  end if;
end
$$;
