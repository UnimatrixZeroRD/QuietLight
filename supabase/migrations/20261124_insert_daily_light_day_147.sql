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
  'day-147-giving-thanks-in-the-storm',
  'Giving Thanks in the Storm',
  'Gratitude during hardship does not deny pain, but helps the heart notice God''s goodness, presence, strength, and faithful provision within it.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  147,
  'Gratitude During Difficult Seasons',
  'Psalm 92:1-8',
  '1 Thessalonians 5:16-24',
  '1 Thessalonians 5:18',
  'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  '1 Thessalonians 5:18',
  'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  $$Giving thanks during good times feels natural.

Giving thanks during hardship feels impossible.

Yet Paul does not say to give thanks for every circumstance.

He says to give thanks in every circumstance.

There is an important difference.

We do not thank God for evil, suffering, or injustice.

We thank Him because His goodness remains present even while those things exist.

The psalmist declared that it is good to give thanks to the Lord and to proclaim His faithfulness every morning and every night.

Morning reminds us of His mercy.

Evening reminds us of His faithfulness.

Both remain true regardless of circumstances.

The Way of Quiet Light reminds us that gratitude does not deny pain.

It refuses to let pain become the only truth we see.

The storm may be real.

So is God's presence.

The burden may be heavy.

So is God's strength.

The future may be uncertain.

So are God's promises certain.

Sometimes gratitude begins very simply.

Thank You for another day.

Thank You for strength enough for today.

Thank You for those who love me.

Thank You that Christ remains with me.

These small acts of thanksgiving become anchors during difficult seasons.

Gratitude changes very little about the storm itself.

But it changes the heart that stands within it.

Today, search carefully for signs of grace.

You will find more than you expected.$$,
  $$Heavenly Father,

Teach me to remain grateful even during difficult seasons. Open my eyes to Your goodness, Your provision, and Your faithfulness in ways I may overlook. Help me remember that Your love remains constant regardless of circumstances and that every good gift ultimately comes from Your hand.

In the name of Jesus Christ, Amen.$$,
  'What evidence of God''s goodness am I overlooking because of the storm around me?',
  'Write down five things for which you can sincerely thank God today, even if life feels difficult.',
  'Gratitude does not remove the storm, but it often helps us see the shelter within it.',
  '2026-11-24'
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
