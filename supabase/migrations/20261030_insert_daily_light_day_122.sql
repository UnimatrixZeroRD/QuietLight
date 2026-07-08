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
  'day-122-strength-in-weakness',
  'Strength in Weakness',
  'Weakness is not failure when it becomes the place where believers receive God''s sufficient grace and depend upon His strength.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  122,
  'Discovering God''s Power Through Our Limitations',
  'Isaiah 40:28-31',
  '2 Corinthians 12:7-10',
  '2 Corinthians 12:9',
  'My grace is sufficient for thee: for my strength is made perfect in weakness.',
  '2 Corinthians 12:9',
  'My grace is sufficient for thee: for my strength is made perfect in weakness.',
  $$Most people spend their lives trying to hide their weaknesses.

The Apostle Paul learned to see his differently.

Paul prayed repeatedly that God would remove the "thorn in the flesh" that troubled him. Scripture never tells us exactly what it was. Perhaps that uncertainty is intentional, allowing every believer to recognize their own struggles within his story.

God's answer was unexpected.

He did not remove the weakness.

He provided grace sufficient to endure it.

"My strength is made perfect in weakness."

These words reveal one of the great mysteries of the Christian life.

The places where we feel least capable often become the places where God's power shines most clearly.

When we are strong in ourselves, we are tempted to depend upon ourselves.

When we are weak, we learn to depend upon Him.

Isaiah reminds weary believers that those who wait upon the Lord renew their strength.

Not because their circumstances suddenly improve.

But because the everlasting God shares His strength with those who trust Him.

The Way of Quiet Light reminds us that weakness is not failure.

Need is not defeat.

Dependence upon God is not something to outgrow.

It is the very heart of faith.

The Lord often accomplishes His greatest work through people who know they cannot succeed without Him.

Today, do not hide your weakness from God.

Bring it to Him.

The very place you consider your greatest limitation may become the place where His grace shines most brightly.$$,
  $$Heavenly Father,

Thank You that Your grace is sufficient for every weakness I carry. Teach me not to depend upon my own strength but upon Your unfailing power. Help me trust that You can work through my limitations for Your glory and my good. May I learn to rest confidently in the strength that comes from Jesus Christ alone.

In the name of Jesus Christ, Amen.$$,
  'What weakness in my life am I struggling to entrust to God?',
  'Instead of asking God to remove a particular weakness immediately, ask Him to reveal how His grace can sustain you within it.',
  'God''s strength often shines brightest through hearts that know they need Him most.',
  '2026-10-30'
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
