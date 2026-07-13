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
  'day-175-faithful-in-secret',
  'Faithful in Secret',
  'Christlike integrity remains faithful where only God sees, letting private devotion agree with public faith.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  175,
  'Integrity Where Only God Sees',
  '1 Samuel 16:6-13',
  'Matthew 6:1-6, 16-18',
  'Matthew 6:6',
  'Thy Father, which seeth in secret, shall reward thee openly.',
  'Matthew 6:6',
  'Thy Father, which seeth in secret, shall reward thee openly.',
  $$Character is revealed most clearly when no one else is watching.

Public actions can be shaped by reputation.

Private actions reveal devotion.

Jesus warned His followers against practicing righteousness merely to be seen by others. Giving, prayer, fasting, and service can all become performances when the desire for recognition quietly replaces the desire to please God.

The Father, however, sees in secret.

He notices the prayer whispered before dawn.

The temptation resisted without anyone knowing.

The gift offered anonymously.

The promise kept when breaking it would never be discovered.

These hidden choices form the foundation of a trustworthy life.

When Samuel came to anoint Israel's next king, he was impressed by outward appearance. God corrected him:

"Man looketh on the outward appearance, but the LORD looketh on the heart."

David's public calling was prepared through private faithfulness. Long before he stood before armies or ruled a nation, he tended sheep in forgotten fields. He learned courage, responsibility, worship, and dependence upon God where few people could see.

The Way of Quiet Light reminds us that unseen work is never unnoticed work.

The world may reward visibility.

God rewards faithfulness.

A lantern often serves its greatest purpose in places where there is no audience—quietly illuminating a path for one person through the dark.

So it is with Christlike character.

It is built through decisions that may never be celebrated.

Do not allow the absence of recognition to weaken your obedience.

The One whose approval matters most is already watching with perfect knowledge and love.

Today, let your private life agree with your public faith.

Serve quietly.

Pray sincerely.

Obey faithfully.

The Father sees.$$,
  $$Heavenly Father,

Help me live with integrity in every hidden place. Guard me from seeking human recognition or maintaining appearances without true devotion. May my private thoughts, choices, prayers, and actions honor Jesus Christ. Teach me to value Your approval above every earthly reward.

In the name of Jesus Christ, Amen.$$,
  'Would my private choices confirm the faith and character I display publicly?',
  'Perform one act of obedience, generosity, or service today without telling anyone about it.',
  'Integrity is faithfulness that remains unchanged when the audience disappears.',
  '2026-12-22'
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
