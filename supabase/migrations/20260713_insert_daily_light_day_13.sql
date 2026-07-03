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
  'day-13-strength-in-weakness',
  'Strength in Weakness',
  'God''s power is made perfect in weakness, teaching believers to depend fully upon His sufficient grace rather than their own strength.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  13,
  'God''s Power Perfected in Human Frailty',
  'Isaiah 40:28-31',
  '2 Corinthians 12:7-10',
  '2 Corinthians 12:9',
  'My grace is sufficient for thee: for my strength is made perfect in weakness.',
  '2 Corinthians 12:9',
  'My grace is sufficient for thee: for my strength is made perfect in weakness.',
  $$Most of us spend our lives trying to appear strong.

We hide our weaknesses, conceal our failures, and hesitate to admit when we need help. The world celebrates self-sufficiency and independence, teaching us that strength is measured by what we can accomplish on our own.

The Kingdom of God teaches something very different.

When the Apostle Paul pleaded for the removal of his "thorn in the flesh," the Lord did not immediately remove the burden. Instead, He gave Paul something greater: the assurance that divine grace would be sufficient, and that God's strength would be displayed through human weakness.

Isaiah proclaimed a similar truth centuries earlier. Even the strongest among us grow weary. Youth fades. Human strength fails. But those who wait upon the Lord renew their strength. They rise above discouragement like eagles carried upon the wind, not because of their own power, but because God Himself sustains them.

The Way of Quiet Light reminds us that weakness is not failure. Often it is the very place where God accomplishes His greatest work. A humble heart listens more carefully. A broken spirit depends more completely upon the Lord. A weary believer discovers that God's strength is more than enough.

This does not mean we should seek suffering for its own sake. Rather, it means we need not fear our limitations. God has never required His servants to be sufficient in themselves. He simply asks them to trust the One who is.

Perhaps today you feel physically exhausted, emotionally burdened, or spiritually discouraged. Bring your weakness honestly before the Lord. Do not pretend to be stronger than you are. Christ welcomes those who come with empty hands, for they are the ones most ready to receive His strength.

Remember this: God's power is not diminished by your weakness. It shines through it.$$,
  $$Heavenly Father,

When I am weak, remind me that Your strength is more than enough. Help me to stop relying upon my own abilities and to depend fully upon Your grace. Give me courage to admit my limitations and confidence to trust Your power. May my weakness become an opportunity for Your glory to be revealed through my life.

In the name of Jesus Christ, Amen.$$,
  'What weakness have I been trying to hide instead of surrendering to God?',
  'Offer one burden, fear, or limitation to the Lord in prayer. Rather than asking only for its removal, ask Him to reveal His strength through it.',
  'The strongest believer is not the one who needs God the least, but the one who trusts Him the most.',
  '2026-07-13'
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
