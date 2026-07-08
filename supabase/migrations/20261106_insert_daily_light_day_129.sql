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
  'day-129-courage-for-today',
  'Courage for Today',
  'Courage is not the absence of fear, but choosing obedience while fixing the heart on Christ''s presence within the storm.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  129,
  'Facing Fear with Faith',
  'Isaiah 41:8-13',
  'Matthew 14:22-33',
  'Isaiah 41:10',
  'Fear thou not; for I am with thee: be not dismayed; for I am thy God.',
  'Isaiah 41:10',
  'Fear thou not; for I am with thee: be not dismayed; for I am thy God.',
  $$Fear speaks loudly.

It imagines worst outcomes.

It magnifies obstacles.

It whispers that we are alone and unprepared for what lies ahead.

Faith does not pretend fear is absent.

Faith answers fear with truth.

When the disciples saw Jesus walking upon the water, they were terrified. The storm was still raging. The waves had not disappeared.

Yet before calming the sea, Jesus spoke these words:

"Be of good cheer; it is I; be not afraid."

His presence came before the miracle.

Peter stepped out onto the water not because the storm had ended, but because Christ had called him forward.

For a moment, Peter walked above the waves.

Only when his attention shifted from Jesus to the wind did fear begin to pull him downward.

The Way of Quiet Light reminds us that courage is not the absence of fear.

It is choosing obedience while fear still exists.

It is trusting God's promises more than our emotions.

It is taking the next faithful step while the storm continues around us.

Perhaps fear has been speaking loudly in your life recently.

If so, listen carefully for the quieter voice of Christ:

"It is I."

The One who calls you forward also walks beside you.

His hand remains extended.

And His presence is greater than your fear.$$,
  $$Heavenly Father,

When fear rises within me, remind me that You are near. Help me fix my eyes upon Jesus rather than upon the storms around me. Give me courage to obey, strength to continue, and peace that overcomes fear. Thank You that I never face uncertainty alone.

In the name of Jesus Christ, Amen.$$,
  'What fear has occupied more of my attention than God''s promises?',
  'Whenever fear arises today, repeat Isaiah 41:10 aloud and remind yourself of God''s presence.',
  'Faith does not deny the storm. It chooses to look toward Christ within it.',
  '2026-11-06'
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
