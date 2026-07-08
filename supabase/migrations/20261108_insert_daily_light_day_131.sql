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
  'day-131-waiting-for-the-dawn',
  'Waiting for the Dawn',
  'Long nights test hope, yet believers endure by trusting that God''s faithfulness outlasts darkness and joy comes in His time.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  131,
  'Hope Through Long Nights',
  'Psalm 30:1-12',
  'Romans 8:18-25',
  'Psalm 30:5',
  'Weeping may endure for a night, but joy cometh in the morning.',
  'Psalm 30:5',
  'Weeping may endure for a night, but joy cometh in the morning.',
  $$Some storms pass quickly.

Others linger.

Days become months.

Months become years.

There are seasons when the night feels long and the dawn feels distant.

David understood such seasons.

He knew grief.

Fear.

Failure.

Loss.

Yet he held tightly to one truth:

Morning was coming.

The promise of Scripture is not that every sorrow ends immediately.

The promise is that sorrow does not last forever.

Paul describes creation itself as groaning while waiting for redemption. We live between the resurrection and the restoration of all things. The world is not yet what it will one day become.

Neither are we.

The Way of Quiet Light reminds us that faith often lives in this space between promise and fulfillment.

We wait.

We trust.

We hope.

Not because we see the sunrise already, but because we know the One who commands it.

There may be nights when your prayers feel heavy and your strength feels small.

Do not mistake the darkness for abandonment.

The sun still exists even when clouds hide it.

God's faithfulness remains even when feelings struggle to find it.

If your night has been long, hold on.

Keep walking.

Keep praying.

Keep trusting.

Morning is part of God's design.

And dawn always arrives precisely when the Father knows it should.$$,
  $$Heavenly Father,

When the night feels long and the dawn seems distant, strengthen my hope and steady my heart. Help me trust that Your faithfulness continues even in seasons of waiting and sorrow. Give me endurance for today and confidence for tomorrow, knowing that Your mercy is new every morning.

In the name of Jesus Christ, Amen.$$,
  'What "night season" in my life am I struggling to believe will ever end?',
  'Thank God today for one sign of His faithfulness that you can still see even in the darkness.',
  'Night may linger for a season, but God''s faithfulness always outlasts the darkness.',
  '2026-11-08'
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
