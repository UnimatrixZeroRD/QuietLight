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
  'day-128-one-more-step',
  'One More Step',
  'When strength is gone, faithfulness may look like taking the next step, trusting that today''s grace is enough for today.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  128,
  'Faithfulness When Strength Is Gone',
  '1 Kings 19:1-18',
  'Galatians 6:7-10',
  'Galatians 6:9',
  'Let us not be weary in well doing: for in due season we shall reap, if we faint not.',
  'Galatians 6:9',
  'Let us not be weary in well doing: for in due season we shall reap, if we faint not.',
  $$There are seasons when faith feels strong.

There are other seasons when simply continuing feels like an accomplishment.

Elijah knew such a season.

After one of the greatest victories of his ministry, he found himself exhausted, discouraged, and overwhelmed. Sitting beneath a tree, he asked God to take his life.

Yet God's response was not anger.

It was compassion.

Food.

Rest.

Gentle care.

And then, when Elijah was ready, God invited him to continue the journey.

Sometimes the most spiritual thing a weary soul can do is simply take the next step.

Not the next year.

Not the next decade.

The next step.

The Way of Quiet Light reminds us that endurance is often quieter than we imagine.

Getting out of bed.

Offering one more prayer.

Attending worship one more time.

Choosing kindness one more time.

Trusting God one more day.

These are victories Heaven notices.

You do not need strength for the entire journey today.

You only need enough grace for this moment.

Tomorrow's grace will arrive tomorrow.

Today's grace has already arrived today.

If your strength feels small, do not despair.

God has never required His children to carry tomorrow's burdens with today's strength.

Take the next step.

Then another.

The Shepherd walks at the pace of His sheep.$$,
  $$Heavenly Father,

When I feel weary and overwhelmed, remind me that Your grace is sufficient for this moment. Help me not to become discouraged or lose heart. Give me strength for the next step and peace for the journey ahead. Thank You for Your patience, Your compassion, and Your constant presence beside me.

In the name of Jesus Christ, Amen.$$,
  'Am I trying to carry tomorrow''s burdens with today''s strength?',
  'Instead of focusing on everything ahead of you, identify the next faithful step God is asking you to take today and take it.',
  'God rarely asks us to see the whole road. He simply asks us to trust Him with the next step.',
  '2026-11-05'
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
