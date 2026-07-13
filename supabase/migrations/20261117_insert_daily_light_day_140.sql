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
  'day-140-beyond-the-storm',
  'Beyond the Storm',
  'Faith learns to see present suffering through the eternal hope of resurrection, restoration, and the everlasting peace of God''s Kingdom.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  140,
  'The Eternal Perspective',
  'Isaiah 40:28-31',
  '2 Corinthians 4:16-18',
  '2 Corinthians 4:17',
  'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory.',
  '2 Corinthians 4:17',
  'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory.',
  $$Storms feel permanent while we are standing in them.

Pain stretches time.

Waiting feels endless.

The horizon can disappear behind clouds and rain.

Paul knew suffering well.

Imprisonment.

Persecution.

Beatings.

Shipwrecks.

Yet he described these hardships as "light affliction" when compared to the eternal glory awaiting God's people.

He was not minimizing suffering.

He was maximizing eternity.

Faith learns to see beyond the immediate moment.

The Christian story does not end with suffering.

It ends with restoration.

Not with grief.

But with joy.

Not with death.

But with resurrection.

Not with storms.

But with the everlasting peace of God's Kingdom.

The Way of Quiet Light reminds us that the lantern shines brightest when it points beyond itself.

The trials of this life are real.

But they are not ultimate.

The storm may occupy this chapter.

It does not write the ending.

One day every tear will be wiped away.

Every wound healed.

Every injustice made right.

Every storm silenced forever.

Until that day, we walk by faith.

We hold to hope.

And we remember that our destination is greater than our difficulty.

Lift your eyes today.

The horizon extends farther than the storm allows you to see.$$,
  $$Heavenly Father,

Help me lift my eyes beyond present difficulties and remember the eternal hope I have in Jesus Christ. Strengthen me when suffering feels overwhelming and remind me that Your promises extend far beyond this present moment. Keep my heart fixed upon eternity and my faith anchored in Your coming Kingdom.

In His holy name, Amen.$$,
  'How would my current struggles look different if viewed through the lens of eternity?',
  'Spend time today reading Revelation 21 and reflecting upon the future God has promised His people.',
  'The storm may shape this chapter, but eternity writes the ending.',
  '2026-11-17'
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
