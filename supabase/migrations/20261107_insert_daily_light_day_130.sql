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
  'day-130-the-hope-that-holds',
  'The Hope That Holds',
  'Biblical hope is confidence rooted in God''s character, anchoring the soul in Christ and His unshaken promises through every storm.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  130,
  'Anchored in God''s Promises',
  'Lamentations 3:19-26',
  'Hebrews 6:13-20',
  'Hebrews 6:19',
  'Which hope we have as an anchor of the soul, both sure and stedfast.',
  'Hebrews 6:19',
  'Which hope we have as an anchor of the soul, both sure and stedfast.',
  $$Hope is often misunderstood.

Many people think of hope as wishful thinking or uncertain optimism.

Biblical hope is different.

Biblical hope is confidence rooted in the character of God.

An anchor is most valuable during a storm.

When waves rise and winds increase, the anchor holds the ship steady because it rests upon something stronger than the storm itself.

The writer of Hebrews says that God's promises become an anchor for the soul.

Jeremiah understood this truth while standing among the ruins of Jerusalem.

The city was broken.

The future uncertain.

Yet in the middle of sorrow he declared:

"It is of the LORD'S mercies that we are not consumed."

His circumstances had not changed.

His perspective had.

The Way of Quiet Light reminds us that hope is not found in circumstances.

It is found in Christ.

Circumstances rise and fall.

Health changes.

Plans fail.

People disappoint.

Yet the promises of God remain unmoved.

The resurrection of Jesus Christ stands as the great foundation of Christian hope.

Because He lives, suffering is temporary.

Because He lives, death is defeated.

Because He lives, no storm can ultimately destroy what God has promised.

If the sea around you feels rough today, check your anchor.

Make sure it rests in the right place.

The storms may continue for a season.

The anchor will hold.$$,
  $$Heavenly Father,

Thank You for the hope I have through Jesus Christ. When circumstances feel uncertain, anchor my heart in Your promises rather than in my fears. Strengthen my confidence in Your faithfulness and remind me that Your purposes cannot be shaken. May hope remain steady within me regardless of the storms around me.

In the name of Jesus Christ, Amen.$$,
  'Is my hope resting upon changing circumstances or upon God''s unchanging promises?',
  'Read one promise of God from Scripture today and carry it with you throughout the day as an anchor for your heart.',
  'The storm may shake the ship, but it cannot move the anchor that rests in Christ.',
  '2026-11-07'
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
