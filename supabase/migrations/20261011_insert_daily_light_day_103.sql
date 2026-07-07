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
  'day-103-trusting-with-all-your-heart',
  'Trusting with All Your Heart',
  'Trust becomes worship when believers release control, rest in God''s wisdom, and place unanswered questions into His faithful hands.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  103,
  'Worship Through Complete Trust',
  'Proverbs 3:1-8',
  'Matthew 6:25-34',
  'Proverbs 3:5',
  'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
  'Proverbs 3:5',
  'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
  $$Trust is one of the purest expressions of worship.

When we trust God, we declare that His wisdom is greater than our understanding, His plans are better than our own, and His faithfulness will never fail.

It is easy to trust when the path ahead is clear.

It is far more difficult when questions remain unanswered.

Yet it is in those uncertain moments that genuine faith is revealed.

Solomon urges us not to lean upon our own understanding. Human wisdom is limited. We see only a small part of the journey, while God sees the beginning, the middle, and the end.

Jesus offered the same assurance.

He pointed His disciples toward the birds of the air and the lilies of the field. The Father faithfully provides for His creation. How much more, then, will He care for those whom He has redeemed through His Son?

The Way of Quiet Light reminds us that trust grows through daily surrender.

Every unanswered prayer becomes an invitation to believe.

Every closed door becomes an opportunity to rely upon God's direction.

Every uncertainty becomes a chance to rest in His promises rather than our fears.

Trust does not eliminate questions.

It places those questions into faithful hands.

Today, release your need to control every outcome.

Walk the next step God has placed before you.

He has never failed His people.

He will not begin with you.$$,
  $$Heavenly Father,

Teach me to trust You with all my heart. When I cannot understand what You are doing, remind me that Your wisdom is perfect and Your love never fails. Help me release my fears, surrender my plans, and walk confidently in the direction You provide. May my trust become an act of worship that honors You.

In the name of Jesus Christ, Amen.$$,
  'What concern am I still trying to carry instead of placing it completely into God''s hands?',
  'Write down one worry that has occupied your thoughts. Offer it to God in prayer, then thank Him for His faithful care before ending your prayer.',
  'The heart that trusts God finds peace even before it receives answers.',
  '2026-10-11'
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
