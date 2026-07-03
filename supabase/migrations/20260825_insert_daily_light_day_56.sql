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
  'day-56-a-life-of-worship',
  'A Life of Worship',
  'Worship is a surrendered way of life, offering every thought, word, decision, responsibility, and act of obedience to God.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  56,
  'Honoring God in Everything',
  'Psalm 95:1-7',
  'Romans 12:1-2',
  'Romans 12:1',
  'I beseech you therefore, brethren... that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.',
  'Romans 12:1',
  'I beseech you therefore, brethren... that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.',
  $$Worship is far more than singing hymns.

While music is a beautiful expression of praise, biblical worship extends into every part of life. It is the continual offering of ourselves to God with grateful hearts and willing hands.

Paul describes this as becoming a living sacrifice.

Unlike the sacrifices of the Old Testament, which were placed upon an altar once, a living sacrifice chooses each day to belong entirely to God. Every thought, every word, every decision, every act of kindness, and every moment of obedience becomes an offering of worship.

The psalmist invites God's people to bow before their Maker with joyful praise, recognizing Him as the Shepherd who faithfully cares for His flock. Worship begins with seeing God as He truly is—holy, sovereign, loving, and worthy of all honor.

The Way of Quiet Light reminds us that worship continues long after the music ends.

When we forgive, we worship.

When we serve, we worship.

When we tell the truth, we worship.

When we pray, we worship.

When we remain faithful during trials, we worship.

Every ordinary act offered to God becomes sacred.

This understanding transforms daily life.

Work becomes an opportunity to honor Christ.

Family becomes a place to demonstrate His love.

Rest becomes an expression of trust.

Even hardship becomes an opportunity to glorify Him through faithful endurance.

There is no division between the sacred and the ordinary for the believer whose life belongs completely to God.

Today, ask yourself not merely whether you will worship.

Instead ask,

"Will everything I do today become an act of worship?"

When every part of life is surrendered to Christ, worship becomes not an event but a way of living.$$,
  $$Heavenly Father,

You alone are worthy of my worship. Help me to offer my entire life as a living sacrifice that brings honor to You. Let my work, my relationships, my service, and my daily choices become acts of praise. Keep my heart devoted to Jesus Christ so that everything I do may reflect my love for You.

In the name of Jesus Christ, Amen.$$,
  'Have I limited worship to certain moments, or do I see my entire life as an offering to God?',
  'Choose one ordinary responsibility today and intentionally perform it as an act of worship, offering it to God with gratitude.',
  'True worship is not confined to a place—it is revealed through a life completely surrendered to God.',
  '2026-08-25'
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
