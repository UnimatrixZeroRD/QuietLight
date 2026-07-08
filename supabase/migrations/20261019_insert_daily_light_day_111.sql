insert into public.daily_light_entries (
  slug,
  title,
  summary,
  access_level,
  status,
  volume,
  volume_title,
  day,
  theme,
  old_testament_reading,
  new_testament_reading,
  key_verse_reference,
  key_verse_text,
  scripture_reference,
  scripture_text,
  reflection,
  prayer,
  reflection_question,
  today_practice,
  closing_thought,
  published_on
)
values (
  'day-111-persevering-in-prayer',
  'Persevering in Prayer',
  'Faithful prayer continues seeking God with trust, knowing every prayer is heard and every answer rests in His perfect wisdom.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  111,
  'Faithfulness in Seeking God',
  'Daniel 6:1-23',
  'Luke 18:1-8',
  'Luke 18:1',
  'Men ought always to pray, and not to faint.',
  'Luke 18:1',
  'Men ought always to pray, and not to faint.',
  $$Some prayers are answered quickly.

Others seem to linger in silence.

Days become months.

Months become years.

In those moments, the temptation is not merely to doubt God's answer.

It is to stop praying altogether.

Jesus understood this struggle.

That is why He told His disciples the parable of the persistent widow, teaching them that they "ought always to pray, and not to faint."

Prayer is not perseverance because God is reluctant.

Prayer perseveres because our faith grows as we continue seeking Him.

Daniel understood this well.

Even when prayer became dangerous, he continued opening his windows toward Jerusalem three times each day, just as he had done before. His circumstances changed.

His devotion did not.

The Way of Quiet Light reminds us that faithful prayer is never wasted prayer.

Every prayer is heard.

Every tear is seen.

Every whispered request reaches the throne of grace.

Sometimes God answers immediately.

Sometimes He answers differently.

Sometimes He answers later.

But He never ignores the cries of His children.

Do not grow weary.

The God who invites you to pray also invites you to trust His timing.

Continue asking.

Continue seeking.

Continue knocking.

The door may not open when you expect.

But it will open according to His perfect wisdom.$$,
  $$Heavenly Father,

Teach me to persevere in prayer without becoming discouraged. Strengthen my faith when answers seem delayed and remind me that You hear every cry of Your children. Help me continue seeking You with confidence, trusting both Your love and Your wisdom in every season.

In the name of Jesus Christ, Amen.$$,
  'Is there a prayer I have quietly given up on because I have grown discouraged?',
  'Return that prayer to God today. Pray it once more, not with anxiety, but with trust.',
  'Persistent prayer is not a sign of God''s reluctance, but of our growing trust in His faithfulness.',
  '2026-10-19'
)
on conflict (slug) do update set
  title = excluded.title,
  summary = excluded.summary,
  access_level = excluded.access_level,
  status = excluded.status,
  volume = excluded.volume,
  volume_title = excluded.volume_title,
  day = excluded.day,
  theme = excluded.theme,
  old_testament_reading = excluded.old_testament_reading,
  new_testament_reading = excluded.new_testament_reading,
  key_verse_reference = excluded.key_verse_reference,
  key_verse_text = excluded.key_verse_text,
  scripture_reference = excluded.scripture_reference,
  scripture_text = excluded.scripture_text,
  reflection = excluded.reflection,
  prayer = excluded.prayer,
  reflection_question = excluded.reflection_question,
  today_practice = excluded.today_practice,
  closing_thought = excluded.closing_thought,
  published_on = excluded.published_on;
