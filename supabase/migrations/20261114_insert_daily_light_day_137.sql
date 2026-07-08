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
  'day-137-joy-in-the-valley',
  'Joy in the Valley',
  'Christian joy is not dependent upon circumstances, but rests upon Christ''s unchanging faithfulness even in seasons of sorrow and uncertainty.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  137,
  'Discovering Joy Amid Difficult Circumstances',
  'Habakkuk 3:17-19',
  'Philippians 4:4-13',
  'Habakkuk 3:18',
  'Yet I will rejoice in the LORD, I will joy in the God of my salvation.',
  'Habakkuk 3:18',
  'Yet I will rejoice in the LORD, I will joy in the God of my salvation.',
  $$Joy and happiness are not the same thing.

Happiness often depends upon circumstances.

Joy rests upon something deeper.

Habakkuk looked around and saw uncertainty everywhere.

The fields were empty.

The harvest had failed.

The future looked bleak.

Yet he made one of the most remarkable declarations in all of Scripture:

"Yet I will rejoice in the LORD."

Notice that his joy was not rooted in what he possessed.

It was rooted in whom he trusted.

Paul wrote similarly while imprisoned.

His freedom had been taken away.

His future remained uncertain.

Yet again and again he called believers to rejoice.

How was this possible?

Because Christian joy does not depend upon circumstances remaining favorable.

It depends upon Christ remaining faithful.

The Way of Quiet Light reminds us that joy is not pretending pain does not exist.

Joy can coexist with grief.

Joy can exist alongside tears.

Joy is the quiet confidence that God's goodness remains true even when life feels difficult.

There are songs that can only be learned in the valley.

There are truths that become real only in the storm.

If your season feels heavy today, do not feel guilty for your tears.

Simply remember that sorrow does not have the final word.

The God of your salvation remains worthy of joy even in the valley.

And one day, every valley will give way to the mountain of His presence.$$,
  $$Heavenly Father,

Teach me to find my joy in You rather than in changing circumstances. Help me rejoice in Your faithfulness even when life feels difficult and uncertain. Strengthen my heart during seasons of sorrow and remind me that Your goodness remains unchanged. Fill me with the quiet joy that comes from knowing Jesus Christ.

In His holy name, Amen.$$,
  'Is my joy rooted more in my circumstances or in God''s character?',
  'Thank God today for one aspect of His character that remains true regardless of your circumstances.',
  'Christian joy is not the absence of sorrow but the presence of hope within it.',
  '2026-11-14'
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
