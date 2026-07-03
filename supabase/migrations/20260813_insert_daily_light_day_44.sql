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
  'day-44-compassion-in-action',
  'Compassion in Action',
  'Compassion makes love visible, moving believers to notice the overlooked and serve others with the heart of Christ.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  44,
  'Serving with the Heart of Christ',
  'Isaiah 58:6-12',
  'Matthew 25:31-40',
  'Matthew 25:40',
  'Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.',
  'Matthew 25:40',
  'Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.',
  $$Compassion is love made visible.

It is more than feeling sympathy for another person's pain. Compassion moves toward those who suffer. It listens, serves, comforts, and helps without waiting for someone else to act first.

Throughout His earthly ministry, Jesus consistently noticed the people others overlooked.

He touched lepers whom society rejected.

He welcomed children whom others dismissed.

He comforted grieving families.

He fed the hungry.

He restored the broken.

His compassion was never rushed, reluctant, or conditional.

It flowed naturally from His perfect love.

Isaiah reminds God's people that true worship cannot be separated from practical mercy. God delights not merely in outward religious practices but in lives that loosen the bonds of oppression, care for the poor, welcome the stranger, and strengthen the weary.

The Way of Quiet Light embraces this quiet ministry of compassion.

Many opportunities to serve appear ordinary.

Preparing a meal for someone who is ill.

Visiting a lonely neighbor.

Helping a struggling family.

Listening patiently to someone carrying a heavy burden.

Offering encouragement without expecting recognition.

These simple acts often become powerful expressions of God's love.

Compassion also changes us.

As we begin seeing people through Christ's eyes, our own priorities shift. We become less concerned with protecting our comfort and more eager to reflect God's kindness.

Ask the Lord today to help you notice what He notices.

There are people all around you quietly carrying burdens that few others recognize.

Perhaps your smile, your prayer, your generosity, or your willingness to simply be present will become the answer to someone else's prayer.

Wherever compassion is practiced, Christ Himself is honored.$$,
  $$Heavenly Father,

Fill my heart with the compassion of Jesus Christ. Open my eyes to the needs around me and give me courage to respond with love, generosity, and humility. Teach me to serve quietly, expecting nothing in return except the joy of pleasing You. May every act of kindness point others toward Your unfailing love.

In the name of Jesus Christ, Amen.$$,
  'Who around me may be quietly carrying a burden that I have not yet noticed?',
  'Look intentionally for one opportunity today to show practical compassion to someone in need, whether through your time, encouragement, or service.',
  'Compassion is the light of Christ made visible through ordinary acts of love.',
  '2026-08-13'
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
