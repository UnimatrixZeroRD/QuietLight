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
  'day-155-pure-in-heart',
  'Pure in Heart',
  'Purity is an undivided heart before God, where public faith and hidden motives are brought into honest agreement through grace.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  155,
  'Integrity Before God',
  'Psalm 24:1-6',
  'Matthew 5:1-8',
  'Matthew 5:8',
  'Blessed are the pure in heart: for they shall see God.',
  'Matthew 5:8',
  'Blessed are the pure in heart: for they shall see God.',
  $$Purity begins deeper than outward behavior.

It begins in the heart.

A person may appear righteous before others while carrying pride, bitterness, dishonesty, or hidden desire within. Jesus consistently looked beyond appearances and addressed the inner life from which words and actions flow.

To be pure in heart is not to claim sinless perfection.

It is to possess an undivided heart.

A heart that sincerely desires God.

A heart that refuses to maintain one identity in public and another in secret.

A heart willing to be searched, corrected, cleansed, and made whole.

The psalmist asks who may ascend the hill of the Lord and stand in His holy place. The answer includes both clean hands and a pure heart. Outward conduct and inward character belong together.

Jesus embodied this perfect integrity.

There was no deception within Him.

No hidden selfishness.

No contradiction between His public teaching and private life.

He lived continually before the Father with complete honesty and devotion.

The Way of Quiet Light reminds us that purity is often protected through quiet decisions.

What we choose to watch.

What thoughts we allow to remain.

What motives we conceal.

What conversations we entertain.

Every hidden choice either clears the window of the soul or gradually clouds it.

Purity is not merely avoiding what is wrong.

It is cultivating love for what is good, true, beautiful, and pleasing to God.

The more our hearts are filled with Christ, the less room remains for what draws us away from Him.

Today, invite God to search your heart.

Do not fear what He reveals.

His correction is not meant to shame you.

It is meant to free you.$$,
  $$Heavenly Father,

Create within me a pure and undivided heart. Reveal every hidden motive, desire, or habit that does not honor You. Cleanse me through the grace of Jesus Christ and help me walk with integrity in both public and private. May my thoughts, words, and actions reflect sincere devotion to You.

In the name of Jesus Christ, Amen.$$,
  'Is there any hidden area of my life where my actions do not match the faith I profess?',
  'Spend time in honest self-examination before God. Surrender one thought pattern, habit, or motive that needs His cleansing grace.',
  'Purity is the quiet agreement between the heart we show the world and the heart God sees in secret.',
  '2026-12-02'
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
