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
  'day-146-an-unshaken-heart',
  'An Unshaken Heart',
  'Sudden change may shake circumstances, but a heart fixed on God''s character, promises, presence, and Kingdom has somewhere firm to stand.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  146,
  'Stability When Life Changes Suddenly',
  'Psalm 112:1-8',
  'Hebrews 12:25-29',
  'Psalm 112:7',
  'He shall not be afraid of evil tidings: his heart is fixed, trusting in the LORD.',
  'Psalm 112:7',
  'He shall not be afraid of evil tidings: his heart is fixed, trusting in the LORD.',
  $$Some changes give us time to prepare.

Others arrive without warning.

A phone call.

A diagnosis.

An unexpected loss.

A sudden change in employment, family, or circumstances.

In such moments, life can feel as though the ground itself has shifted beneath us.

Psalm 112 describes a person whose heart remains steady even when bad news arrives.

Not because the news is insignificant.

Not because sorrow is absent.

But because the heart is fixed upon the Lord.

The writer of Hebrews reminds us that many things in this world can be shaken. Institutions, plans, possessions, and circumstances may all change. Yet believers have received a Kingdom that cannot be moved.

The Way of Quiet Light reminds us that stability does not come from arranging life so perfectly that nothing unexpected can happen.

It comes from building upon what cannot change.

God's character.

God's promises.

God's presence.

The finished work of Christ.

When these become the foundation, grief may still come.

Questions may still remain.

But the heart has somewhere firm to stand.

An unshaken heart is not an unfeeling heart.

It may cry.

It may tremble.

It may need help.

Yet beneath every emotion remains the quiet confession:

"God is still faithful."

If change has arrived suddenly in your life, take time to breathe.

Do not demand immediate understanding from yourself.

Return to the foundation.

The Lord has not changed.

His love has not weakened.

His promises have not moved.

You may feel shaken.

But you are still held.$$,
  $$Heavenly Father,

When sudden change leaves me fearful or uncertain, steady my heart in Your truth. Help me remember that although circumstances may change, You remain faithful and unchanging. Give me wisdom for each decision, peace for each moment, and confidence that I am securely held in Jesus Christ.

In His holy name, Amen.$$,
  'What recent change has made me feel as though the ground beneath me is no longer secure?',
  'Read Psalm 112:7 slowly several times today. Each time, remind yourself: "My heart is fixed, trusting in the Lord."',
  'A steady heart is not one untouched by change, but one firmly rooted in the unchanging God.',
  '2026-11-23'
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
