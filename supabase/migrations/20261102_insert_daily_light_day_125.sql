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
  'day-125-enduring-the-trial',
  'Enduring the Trial',
  'Trials are not joyful in themselves, yet God uses them to refine faith, produce endurance, deepen maturity, and strengthen perseverance.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  125,
  'Faith That Perseveres',
  'Job 1:20-22',
  'James 1:2-12',
  'James 1:12',
  'Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life.',
  'James 1:12',
  'Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life.',
  $$No one asks for trials.

No one welcomes suffering.

Yet throughout Scripture, God repeatedly demonstrates His ability to use difficult seasons to shape His people in ways comfort rarely can.

James writes words that seem almost impossible at first:

"Count it all joy when ye fall into divers temptations."

He does not say the trial itself is joyful.

He says that what God produces through the trial is worth rejoicing over.

Patience.

Endurance.

Maturity.

A deeper faith.

Job understood this mystery.

In a single day he lost possessions, security, and family.

Yet in the midst of unimaginable grief he declared,

"The LORD gave, and the LORD hath taken away; blessed be the name of the LORD."

Job's faith was wounded.

It wrestled.

It questioned.

But it endured.

The Way of Quiet Light reminds us that perseverance is often quiet.

It is getting up and praying again.

Continuing to trust when emotions have grown tired.

Choosing faithfulness when discouragement whispers that it no longer matters.

These quiet acts of endurance are precious in the sight of God.

Trials may test faith.

They can also strengthen it.

Gold is refined by fire.

Faith is often refined the same way.

If the fire feels intense today, do not lose heart.

The Refiner watches carefully over the flame.

He knows what He is creating within you.$$,
  $$Heavenly Father,

Strengthen me when trials feel overwhelming and discouragement begins to grow. Help me endure with faith, trusting that You are working even in difficult circumstances. Refine my character, deepen my trust, and teach me perseverance through every season. Keep my eyes fixed upon Jesus Christ, who endured for my sake.

In His holy name, Amen.$$,
  'How might God be using my current difficulties to shape my character and faith?',
  'Thank God today for one lesson, strength, or truth that a previous hardship taught you.',
  'The fire that tests faith is often the same fire that strengthens it.',
  '2026-11-02'
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
