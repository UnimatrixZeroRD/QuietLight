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
  'day-124-peace-in-the-unknown',
  'Peace in the Unknown',
  'Peace comes not from knowing tomorrow but from trusting the One who holds the future and gives grace for the next faithful step.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  124,
  'Trusting God with Tomorrow',
  'Isaiah 26:1-4',
  'Philippians 4:4-9',
  'Isaiah 26:3',
  'Thou wilt keep him in perfect peace, whose mind is stayed on thee.',
  'Isaiah 26:3',
  'Thou wilt keep him in perfect peace, whose mind is stayed on thee.',
  $$Much of our anxiety comes from trying to live in tomorrow before tomorrow arrives.

We imagine possibilities.

We fear outcomes.

We rehearse conversations that may never happen.

We carry burdens that do not yet exist.

Yet God gives grace for today.

Not for next month.

Not for next year.

For today.

Paul wrote from prison when he instructed believers not to be anxious about anything. Instead, he urged them to bring everything to God through prayer and thanksgiving.

The result was remarkable:

"The peace of God, which passeth all understanding."

Notice that God does not always promise immediate explanations.

He promises peace.

Isaiah describes a perfect peace given to those whose minds remain fixed upon the Lord.

Peace is not found in knowing the future.

It is found in knowing the One who holds the future.

The Way of Quiet Light reminds us that faith walks one day at a time.

The lantern does not illuminate the entire road.

It reveals the next few steps.

That is often how God leads His people.

Enough light for obedience.

Enough grace for today.

Enough strength for the next step.

Tomorrow belongs to God.

Today belongs to you.

Walk faithfully in the light you have been given.

The God who carried you through yesterday will be waiting in tomorrow long before you arrive there.$$,
  $$Heavenly Father,

Forgive me for the times I allow fear of the future to steal the peace You offer today. Help me trust You with what I cannot control and to rest in the knowledge that You hold every tomorrow in Your hands. Guard my heart and mind with Your peace through Jesus Christ.

In His holy name, Amen.$$,
  'What future concern am I allowing to rob me of peace in the present?',
  'Each time anxiety about tomorrow arises today, pause and pray, "Lord, tomorrow belongs to You."',
  'Peace does not come from knowing the future. It comes from knowing the One who already stands there.',
  '2026-11-01'
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
