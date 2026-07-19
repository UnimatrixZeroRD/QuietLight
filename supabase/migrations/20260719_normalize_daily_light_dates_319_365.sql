-- Restore the canonical Daily Light calendar after previously omitted entries
-- caused Days 319–365 to be scheduled two days early.
update public.daily_light_entries
set published_on = date '2026-07-01' + (day - 1)
where day between 319 and 365
  and published_on is distinct from (date '2026-07-01' + (day - 1));
