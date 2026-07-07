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
  'day-102-abiding-in-the-vine',
  'Abiding in the Vine',
  'The Christian life bears lasting fruit through continual fellowship with Christ, remaining rooted in His presence, Word, and Spirit.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  102,
  'Living in Continual Fellowship with Christ',
  'Psalm 1:1-3',
  'John 15:1-11',
  'John 15:4',
  'Abide in me, and I in you.',
  'John 15:4',
  'Abide in me, and I in you.',
  $$The Christian life is not sustained by effort alone.

It is sustained by abiding.

Jesus chose the beautiful image of a vine and its branches to describe our relationship with Him. A branch does not struggle to produce fruit by its own strength. Its life comes from remaining connected to the vine.

Separated from Christ, we can accomplish nothing of eternal value.

United with Him, our lives begin to bear the fruit of love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.

The psalmist described the righteous person as a tree planted beside streams of water, continually nourished and flourishing in every season. Such stability comes not from favorable circumstances but from remaining rooted in God's presence and His Word.

The Way of Quiet Light teaches that abiding is a daily choice.

It is choosing to begin the day with God.

Returning to Him throughout the day.

Seeking His wisdom before making decisions.

Offering quiet prayers in ordinary moments.

Meditating upon His Word.

Remaining sensitive to the guidance of the Holy Spirit.

Abiding is less about doing more and more about remaining near.

The closer we walk with Christ, the more naturally His life flows through ours.

Fruit becomes the evidence of fellowship.

Peace becomes the evidence of trust.

Joy becomes the evidence of His presence.

Do not strive merely to become more productive.

Seek instead to become more connected.

Fruit always follows faithful fellowship.

Remain close to Christ today.

The Vine never fails those who continue abiding in Him.$$,
  $$Heavenly Father,

Thank You for inviting me into continual fellowship through Jesus Christ. Help me remain closely connected to Him throughout each day. Nourish my soul through Your Word, guide me by Your Spirit, and produce within me the fruit that glorifies You. May my life always remain rooted in Christ, the true Vine.

In the name of Jesus Christ, Amen.$$,
  'What practices help me remain consciously connected to Christ throughout my day?',
  'Pause several times today for a brief prayer, simply reminding yourself that Christ is with you and that you desire to remain in Him.',
  'Fruit is not produced by striving harder, but by remaining closer to Christ.',
  '2026-10-10'
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
