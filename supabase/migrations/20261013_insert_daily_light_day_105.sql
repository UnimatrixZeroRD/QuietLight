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
  'day-105-the-secret-of-contentment',
  'The Secret of Contentment',
  'Contentment is learned as believers rest in Christ''s sufficiency, rejoice in ordinary mercies, and trust the care of the Good Shepherd.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  105,
  'Finding Joy in God''s Sufficiency',
  'Psalm 23',
  'Philippians 4:10-13',
  'Philippians 4:11',
  'I have learned, in whatsoever state I am, therewith to be content.',
  'Philippians 4:11',
  'I have learned, in whatsoever state I am, therewith to be content.',
  $$Contentment is not something we discover.

It is something we learn.

The Apostle Paul wrote about contentment while experiencing seasons of abundance and seasons of great need. His peace was not rooted in comfort, possessions, or favorable circumstances. It rested entirely in Jesus Christ.

"I can do all things through Christ which strengtheneth me."

Contentment does not mean we stop growing or abandon wise goals. Rather, it means our joy is no longer dependent upon getting what we think we need before we can finally be happy.

David expressed this beautifully.

"The LORD is my shepherd; I shall not want."

Because the Shepherd Himself was enough, David could rest even while walking through valleys of darkness. God's presence became greater than David's fears.

The Way of Quiet Light reminds us that worship flourishes wherever contentment grows.

The content heart celebrates God's blessings without demanding more.

It receives each day as a gift.

It finds joy in simple mercies.

It trusts that the Father knows exactly what His children need.

Discontent constantly whispers,

"If only..."

If only I had more.

If only life were easier.

If only circumstances changed.

Faith quietly answers,

"The Lord is my Shepherd."

The greatest treasure is not found in having everything we desire.

It is found in belonging to the One who never fails.

Today, rest in His care.

The Shepherd who has faithfully guided you this far will continue leading you every step of the journey.$$,
  $$Heavenly Father,

Thank You for faithfully providing everything I truly need. Guard my heart from envy, dissatisfaction, and restless striving. Teach me to find my deepest joy in Your presence rather than in temporary possessions or changing circumstances. Help me rest confidently in the care of my Good Shepherd, Jesus Christ.

In His holy name, Amen.$$,
  'Am I waiting for my circumstances to change before choosing contentment?',
  'Thank God today for three ordinary blessings you normally overlook, recognizing them as gifts from His loving hand.',
  'Contentment grows wherever Christ becomes our greatest treasure.',
  '2026-10-13'
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
