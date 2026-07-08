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
  'day-112-the-prayer-of-surrender',
  'The Prayer of Surrender',
  'Surrendering prayer trusts God''s wisdom above our own plans, placing hopes, fears, and the future into His faithful hands.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  112,
  'Not My Will, But Yours',
  'Proverbs 16:1-9',
  'Luke 22:39-46',
  'Luke 22:42',
  'Nevertheless not my will, but thine, be done.',
  'Luke 22:42',
  'Nevertheless not my will, but thine, be done.',
  $$There are prayers of praise.

Prayers of thanksgiving.

Prayers of confession.

And then there are prayers of surrender.

These are often the hardest prayers to pray.

In the Garden of Gethsemane, Jesus revealed the deepest heart of worship.

Facing the cross, He did not pretend the suffering would be easy.

He did not deny the weight of what lay before Him.

He simply placed His desires before the Father and then surrendered Himself completely to the Father's will.

"Nevertheless not my will, but thine, be done."

This is not resignation.

It is trust.

The highest act of worship is not merely asking God to bless our plans.

It is offering Him our plans and trusting His wisdom above our own.

Proverbs reminds us that while people make plans in their hearts, it is the Lord who directs their steps.

The Way of Quiet Light teaches that surrender is not losing control.

It is placing ourselves into hands far more trustworthy than our own.

Sometimes surrender means accepting a closed door.

Sometimes it means walking through an unexpected one.

Sometimes it means waiting longer than we hoped.

Always it means trusting the character of God.

The Lord's will is never separated from His goodness.

His wisdom is never separated from His love.

Today, bring your plans before Him.

Offer your hopes.

Offer your fears.

Offer your future.

And then pray the prayer that has shaped the lives of saints throughout history:

"Not my will, but Yours be done."$$,
  $$Heavenly Father,

Teach me to trust Your wisdom above my own understanding. Help me to surrender my plans, my fears, and my future into Your hands. Give me the faith to pray, "Not my will, but Yours be done," knowing that Your purposes are always good and Your love never fails.

In the name of Jesus Christ, Amen.$$,
  'What area of my life am I struggling to fully surrender to God''s will?',
  'Write down one plan or concern you are holding tightly, and intentionally place it before God in prayer, surrendering the outcome to Him.',
  'The deepest worship often begins where our own will ends and trust in God begins.',
  '2026-10-20'
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
