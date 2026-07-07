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
  'day-106-walking-with-god',
  'Walking with God',
  'Walking with God is a life of continual communion, marked by steady, faithful steps and an awareness of His constant presence.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  106,
  'A Life of Continual Communion',
  'Genesis 5:21-24',
  'John 15:9-17',
  'Genesis 5:24',
  'And Enoch walked with God.',
  'Genesis 5:24',
  'And Enoch walked with God.',
  $$Some of the most remarkable words in all of Scripture are also among the simplest.

"Enoch walked with God."

The Bible gives few details about Enoch's daily life.

We are not told about his occupation.

His accomplishments.

Or his possessions.

Instead, Scripture remembers him for one beautiful truth.

He walked with God.

Walking speaks of relationship.

It is steady rather than hurried.

Consistent rather than occasional.

A walk is not measured by dramatic moments but by faithful steps taken together.

Jesus invites His followers into this same relationship.

"Abide in my love."

Communion with Christ is not reserved for Sunday worship or morning devotions.

It continues throughout the entire day.

The Way of Quiet Light encourages believers to cultivate this constant awareness of God's presence.

Offering quiet prayers while driving.

Giving thanks during ordinary tasks.

Seeking wisdom before speaking.

Pausing to admire His creation.

Remembering His promises during moments of uncertainty.

These small habits gradually shape a life lived in continual fellowship with God.

Walking with God does not require extraordinary ability.

It requires willingness.

Each day we simply choose the next faithful step.

Some days that step is joyful.

Some days it is difficult.

Yet we never walk alone.

The Shepherd walks beside His sheep.

The Father walks with His children.

The Savior walks with His disciples.

Today, slow your pace enough to notice His presence.

He has been walking beside you all along.$$,
  $$Heavenly Father,

Thank You for inviting me into daily fellowship through Jesus Christ. Teach me to remain aware of Your presence in every part of my life. Help me walk faithfully with You through both joyful and difficult seasons. May every step I take draw me closer to You, and may my life become a continual expression of worship.

In the name of Jesus Christ, Amen.$$,
  'What simple habit could help me become more aware of God''s presence throughout my day?',
  'Several times today, pause for a moment and quietly pray, "Lord, thank You for walking with me." Let this become a reminder of His continual presence.',
  'The richest life is not measured by how far we travel, but by how closely we walk with God.',
  '2026-10-14'
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
