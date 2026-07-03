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
  'day-8-the-shepherds-care',
  'The Shepherd''s Care',
  'Christ, the Good Shepherd, seeks, guides, restores, and protects His sheep, calling believers to remain close and trust His faithful care.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  8,
  'Trusting the Shepherd''s Guidance',
  'Ezekiel 34:11-16',
  'John 10:11-18',
  'John 10:11',
  'I am the good shepherd: the good shepherd giveth his life for the sheep.',
  'John 10:11',
  'I am the good shepherd: the good shepherd giveth his life for the sheep.',
  $$There is a profound comfort in knowing that we do not walk through life alone. Scripture repeatedly describes God's people as sheep—not because we are weak or insignificant, but because sheep were never intended to find their way without a shepherd.

Throughout the Old Testament, the Lord rebuked shepherds who cared more for themselves than for the flock. They neglected the weak, ignored the wounded, and scattered those entrusted to them. Yet God promised that He Himself would seek His sheep, gather the lost, bind up the broken, and strengthen the weak.

That promise finds its fulfillment in Jesus Christ.

He is not merely another shepherd among many. He is the Good Shepherd who willingly laid down His life for His sheep. Unlike a hired servant who flees when danger comes, Christ remains faithful even unto death. His love is measured not by words alone, but by the cross.

The Way of Quiet Light reminds us that following Christ is not simply about believing certain truths—it is about learning to trust His guidance day by day. The Shepherd often leads His flock along paths they would never choose for themselves. Some roads pass through green pastures, while others wind through dark valleys. Yet every step is watched over by the One who sees the end from the beginning.

There may be moments when you question where God is leading you. The path may seem uncertain or even difficult. Resist the temptation to run ahead or wander away. The safest place is always near the Shepherd.

As you grow in faith, you will discover that His guidance is not driven by haste but by wisdom. He knows when to lead, when to restore, when to correct, and when to carry those who have grown weary.

Walk closely with Him today. The Shepherd never loses sight of His sheep, and those who remain near Him need never fear that they have been forgotten.$$,
  $$Heavenly Father,

Thank You for sending Jesus, the Good Shepherd, to seek and save those who were lost. Help me to trust His guidance, even when I cannot understand the path before me. Keep my heart close to Him, protect me from wandering, and teach me to rest in His faithful care. May I follow wherever He leads, knowing that His way is always good.

In the name of Jesus Christ, Amen.$$,
  'Am I following the Shepherd''s voice, or have I been trying to find my own way?',
  'Before making an important decision today, pause and ask, "Lord, where are You leading me?" Spend time in prayer before acting.',
  'The safest path is not always the easiest, but it is always the one walked with the Shepherd.',
  '2026-07-08'
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
