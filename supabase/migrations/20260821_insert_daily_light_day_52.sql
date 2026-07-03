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
  'day-52-living-by-faith',
  'Living by Faith',
  'Faith trusts God''s faithful character beyond what can be seen, taking the next obedient step with the light already given.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  52,
  'Trusting God Beyond What We Can See',
  'Genesis 12:1-9',
  'Hebrews 11:1-16',
  'Hebrews 11:1',
  'Now faith is the substance of things hoped for, the evidence of things not seen.',
  'Hebrews 11:1',
  'Now faith is the substance of things hoped for, the evidence of things not seen.',
  $$Faith often asks us to take the next step before we can see the entire path.

Abraham received God's call without knowing where the journey would ultimately lead. He left behind familiarity, security, and certainty because he trusted the One who called him.

That is the nature of biblical faith.

Faith is not believing without evidence.

It is trusting the faithful character of God even when the future remains unseen.

The writer of Hebrews reminds us that the great men and women of Scripture lived this way. They obeyed God's promises long before they witnessed their fulfillment. Their confidence rested not in their own understanding but in the unwavering faithfulness of the Lord.

The Way of Quiet Light encourages believers to walk with this same quiet confidence.

God rarely reveals every detail of tomorrow.

Instead, He gives enough light for today's step.

Just as a lantern illuminates the next few feet of a dark path, God's Word provides sufficient guidance for faithful obedience in the present moment. We learn to trust Him one decision at a time.

Faith also frees us from fear.

When we remember that our future rests securely in God's hands, uncertainty loses much of its power. We may not know every turn in the road, but we know the Shepherd who leads us.

Today, resist the temptation to demand complete understanding before obeying God.

Walk faithfully with the light He has already given.

The next step often becomes visible only after the present one has been taken.

Trust Him.

He has never failed His people, and He will not fail you.$$,
  $$Heavenly Father,

Strengthen my faith to trust You even when I cannot see what lies ahead. Help me to walk in obedience, confident that Your plans are always good and Your timing is always perfect. Give me courage to follow wherever You lead, knowing that You are faithful in every promise You have made.

In the name of Jesus Christ, Amen.$$,
  'Is there an area of my life where I have been waiting for certainty instead of walking by faith?',
  'Identify one step of obedience you have been delaying. Trust God enough to take that step today.',
  'Faith is not seeing the entire road ahead—it is trusting the One who walks beside you.',
  '2026-08-21'
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
