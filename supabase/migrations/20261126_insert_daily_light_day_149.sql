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
  'day-149-still-standing',
  'Still Standing',
  'Perseverance may look like a quiet victory: still praying, still trusting, still walking, and still carrying the flame after the storm.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  149,
  'The Faith That Remains After the Storm',
  'Psalm 40:1-5',
  '2 Corinthians 4:7-10, 16-18',
  '2 Corinthians 4:8',
  'We are troubled on every side, yet not distressed; we are perplexed, but not in despair.',
  '2 Corinthians 4:8',
  'We are troubled on every side, yet not distressed; we are perplexed, but not in despair.',
  $$Some victories do not look like victories at first.

There may be no dramatic breakthrough.

No immediate restoration.

No sudden end to every struggle.

Sometimes the victory is simply this:

You are still standing.

You prayed when prayer felt difficult.

You continued trusting when answers remained hidden.

You carried grief without surrendering to despair.

You took another step when strength seemed gone.

Paul described believers as earthen vessels carrying a heavenly treasure. The vessel may be fragile, but the power within it belongs to God. He spoke honestly about being troubled, perplexed, persecuted, and cast down.

Yet he was not destroyed.

The storm had wounded him.

It had not conquered him.

David also knew what it meant to wait in a difficult place. He cried to the Lord from a terrible pit and miry clay. In time, God placed his feet upon a rock and established his steps.

The Way of Quiet Light reminds us that perseverance is not always loud.

Sometimes it is the quiet refusal to abandon hope.

It is a small flame protected through the night.

The wind may cause it to bend.

The rain may make it difficult to see.

Yet the flame remains.

Looking back, you may notice scars left by the storm. Do not be ashamed of them. Scars testify that a wound existed, but they also testify that healing began.

Perhaps the storm is not completely over.

Even so, recognize the grace that has carried you this far.

You are still here.

God is still faithful.

The Light still shines.$$,
  $$Heavenly Father,

Thank You for sustaining me through every storm I have faced. When I feel fragile, remind me that Your strength remains within me. Help me recognize the victories found in perseverance, prayer, and continued trust. Establish my feet upon the Rock, and keep my heart steadfast in Jesus Christ.

In His holy name, Amen.$$,
  'Looking back, where can I now see that God sustained me even when I thought I could not continue?',
  'Write down one difficult season through which God carried you. Thank Him for the strength, people, and mercies He provided along the way.',
  'Sometimes the clearest evidence of grace is that, after everything, the flame still remains.',
  '2026-11-26'
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
