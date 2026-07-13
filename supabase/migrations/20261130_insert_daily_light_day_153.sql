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
  'day-153-moved-with-compassion',
  'Moved with Compassion',
  'Christlike compassion sees people rather than interruptions, responds with mercy before judgment, and turns loving concern into practical action.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  153,
  'Seeing Others Through the Eyes of Christ',
  'Isaiah 58:6-12',
  'Matthew 9:35-38',
  'Matthew 9:36',
  'But when he saw the multitudes, he was moved with compassion on them.',
  'Matthew 9:36',
  'But when he saw the multitudes, he was moved with compassion on them.',
  $$Jesus never merely saw crowds.

He saw people.

Where others saw interruptions, He saw opportunities to love.

Where others saw problems, He saw people carrying burdens.

Where others saw sinners, He saw souls worthy of redemption.

Again and again, Scripture tells us that Jesus was "moved with compassion."

The phrase means more than simple sympathy.

It describes a deep inner response that moved Him toward action.

Compassion fed the hungry.

Touched the leper.

Comforted the grieving.

Welcomed the outcast.

Forgave the sinner.

Compassion does not stop with feeling.

It acts.

The world often teaches us to protect our time, guard our resources, and avoid inconvenience.

Christ teaches us to notice people.

To listen.

To care.

To help where we can.

The Way of Quiet Light reminds us that compassion is often expressed through small acts rather than grand gestures.

A kind word.

A listening ear.

A meal shared.

A prayer offered.

A burden carried.

Many people around us are fighting battles we cannot see.

A compassionate heart remembers this.

It chooses mercy before judgment.

Understanding before assumption.

Grace before criticism.

Today, ask God to help you see people the way Jesus sees them.

You may discover opportunities to reflect His love that were invisible before.$$,
  $$Heavenly Father,

Give me eyes to see others as Jesus sees them and a heart that responds with compassion. Protect me from becoming indifferent to the needs and struggles of those around me. Help me love actively, generously, and wisely. May others encounter the kindness of Christ through my actions today.

In the name of Jesus Christ, Amen.$$,
  'Do I tend to see people as interruptions, responsibilities, or opportunities to love?',
  'Look intentionally for one opportunity today to show practical compassion to someone else.',
  'Compassion begins when we stop asking how people affect us and start asking how we can serve them.',
  '2026-11-30'
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
