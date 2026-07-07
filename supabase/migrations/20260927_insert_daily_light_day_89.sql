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
  'day-89-awaiting-the-king',
  'Awaiting the King',
  'Christ will return in glory, and His people live ready through watchfulness, faithful service, love, prayer, obedience, and Gospel witness.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  89,
  'Living Ready for Christ''s Return',
  'Isaiah 9:6-7',
  'Matthew 25:1-13',
  'Matthew 25:13',
  'Watch therefore, for ye know neither the day nor the hour wherein the Son of man cometh.',
  'Matthew 25:13',
  'Watch therefore, for ye know neither the day nor the hour wherein the Son of man cometh.',
  $$Every kingdom has a king.

The Kingdom of God is no different.

Jesus Christ reigns today at the right hand of the Father, and one day He will return in glory to establish His everlasting Kingdom in its fullness. This promise has encouraged believers through every generation.

The question is not whether He will return.

The question is whether we are living ready for His coming.

Jesus illustrated this truth through the parable of the ten virgins. All expected the bridegroom, but only those who remained prepared entered the wedding feast. Readiness was not a moment of panic when the announcement was made; it was the result of faithful preparation long before the bridegroom arrived.

Isaiah foretold the coming of the King whose government and peace would never end. His reign is unlike every earthly kingdom. It is built upon righteousness, justice, mercy, and truth. Every promise of God finds its fulfillment in Him.

The Way of Quiet Light reminds us that waiting for Christ's return is not passive.

We do not withdraw from the world.

We do not abandon our responsibilities.

Instead, we continue serving faithfully, loving generously, praying continually, and proclaiming the Gospel while eagerly awaiting the King's return.

Readiness is revealed in ordinary faithfulness.

The servant who continues working.

The parent who continues teaching.

The believer who continues praying.

The church that continues loving.

Every act of obedience declares,

"My King is coming."

Live today in such a way that His return would find you faithfully carrying the light He entrusted to your care.$$,
  $$Heavenly Father,

Thank You for the promise that Jesus Christ will return. Help me to live each day with joyful expectation and faithful obedience. Keep my heart watchful, my hands busy in Your service, and my faith steadfast until the day I see my Savior face to face. May my life honor the coming King.

In the name of Jesus Christ, Amen.$$,
  'If Christ returned today, would He find me faithfully serving in the work He has entrusted to me?',
  'Live today intentionally, remembering that every conversation, every act of kindness, and every decision is an opportunity to honor the coming King.',
  'Those who eagerly await the King''s return faithfully serve His Kingdom today.',
  '2026-09-27'
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
