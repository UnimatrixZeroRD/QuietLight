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
  'day-63-loving-your-neighbor',
  'Loving Your Neighbor',
  'Kingdom compassion crosses every boundary, recognizing each person God places before us as an opportunity to love as Christ has loved us.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  63,
  'Compassion That Crosses Every Boundary',
  'Leviticus 19:9-18',
  'Luke 10:25-37',
  'Leviticus 19:18',
  'Thou shalt love thy neighbour as thyself.',
  'Leviticus 19:18',
  'Thou shalt love thy neighbour as thyself.',
  $$When Jesus was asked, "Who is my neighbour?" He answered with a story.

It was not a story about theology.

It was not a story about religious ritual.

It was a story about compassion.

A wounded man lay beside the road, ignored by those who might have been expected to help him. A priest passed by. A Levite also continued on his way. Finally, a Samaritan—someone viewed as an outsider and even an enemy by many—stopped to care for the injured traveler.

The lesson was unmistakable.

Our neighbor is not simply the person who lives beside us.

Our neighbor is anyone whose need God places before us.

The Kingdom of God is built upon this kind of love.

Love that crosses social boundaries.

Love that overcomes prejudice.

Love that notices suffering.

Love that acts.

Leviticus had already taught Israel to love their neighbor as themselves, but Jesus revealed the full depth of that command by demonstrating it with His own life. He welcomed the outcast, touched the leper, forgave the sinner, and laid down His life for those who had rebelled against Him.

The Way of Quiet Light reminds us that compassion often begins by paying attention.

Many opportunities to love are hidden within ordinary days.

A lonely coworker.

A struggling parent.

An elderly neighbor.

Someone carrying grief behind a polite smile.

When we slow down enough to notice people as Christ noticed them, we begin living as citizens of His Kingdom.

Ask the Lord today to interrupt your plans if necessary.

The greatest ministry of the day may not be what you intended to accomplish.

It may be the person God places in your path.$$,
  $$Heavenly Father,

Thank You for loving me when I was helpless and in need of Your mercy. Open my eyes to recognize the people You place before me each day. Fill my heart with compassion, remove prejudice and selfishness, and help me love others as Jesus has loved me. May my actions reveal the kindness of Your Kingdom.

In the name of Jesus Christ, Amen.$$,
  'Who has God placed in my path that I may have overlooked?',
  'Intentionally help someone today who cannot repay your kindness. Offer your service quietly as an act of worship.',
  'Every person God places before us is an opportunity to love our neighbor as Christ has loved us.',
  '2026-09-01'
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
