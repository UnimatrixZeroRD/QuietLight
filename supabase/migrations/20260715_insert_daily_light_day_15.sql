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
  'day-15-the-vine-and-the-branches',
  'The Vine and the Branches',
  'Spiritual fruit grows as believers abide in Christ, remaining rooted in His Word, dependent upon His Spirit, and connected to the true Vine.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  15,
  'Abiding in Christ',
  'Psalm 1',
  'John 15:1-11',
  'John 15:5',
  'I am the vine, ye are the branches... for without me ye can do nothing.',
  'John 15:5',
  'I am the vine, ye are the branches... for without me ye can do nothing.',
  $$Every healthy branch shares one characteristic: it remains connected to the vine.

Separated from its source of life, even the strongest branch gradually withers. Leaves fade. Fruit disappears. Eventually, what once appeared alive becomes dry and lifeless.

Jesus used this familiar picture to teach one of the deepest truths of the Christian life. Spiritual fruit is not produced through human determination alone. It grows naturally in those who remain closely connected to Him.

The world often measures success by visible achievements. God looks first at faithfulness. Before He calls us to accomplish great things, He calls us simply to abide.

To abide means more than believing certain truths. It means living in continual fellowship with Christ. His Word shapes our thinking. His Spirit directs our steps. His love transforms our relationships. His presence becomes the place where our hearts continually return.

Psalm 1 paints a similar picture. The righteous person delights in the law of the Lord and meditates upon it day and night. Such a person is like a tree planted beside rivers of water, bearing fruit in its season because its roots draw constantly from an unfailing source.

The Way of Quiet Light encourages this kind of steady, hidden faithfulness. Fruit grows quietly. Roots deepen silently beneath the surface long before branches become visible above the ground. Much of God's greatest work within us happens where no one else can see.

Do not become discouraged if your growth seems slow. Trees are not measured by a single day's progress but by years of faithful growth. Continue reading the Scriptures. Continue praying. Continue worshipping. Continue serving. Every day spent abiding in Christ strengthens the roots of your faith.

When storms come—and they surely will—it is not the tallest tree that survives, but the one whose roots reach deepest.

Remain in Christ today. Apart from Him we can accomplish nothing of eternal value. With Him, even the smallest act of faithful obedience becomes fruit that brings glory to God.$$,
  $$Heavenly Father,

Help me to remain close to Jesus Christ each day. Keep my heart rooted in Your Word and my life dependent upon Your Spirit. Prune away whatever hinders my growth and produce within me the fruit that honors You. Teach me to value faithfulness more than recognition, and let my life remain firmly connected to the true Vine.

In the name of Jesus Christ, Amen.$$,
  'What habits help me remain connected to Christ, and which distractions have weakened that connection?',
  'Spend time today reading John 15 slowly. Ask God to reveal one area of your life where deeper obedience will help you abide more fully in Christ.',
  'Fruit is never produced by striving alone, but by faithfully remaining connected to the Vine.',
  '2026-07-15'
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
