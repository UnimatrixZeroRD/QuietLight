insert into public.daily_light_entries (
  slug, title, summary, access_level, status, volume, volume_title, day, theme,
  old_testament_reading, new_testament_reading, key_verse_reference, key_verse_text,
  scripture_reference, scripture_text, reflection, prayer, reflection_question,
  today_practice, closing_thought, published_on
)
values
(
  'day-261-wisdom-knows-its-limits',
  'Wisdom Knows Its Limits',
  'Wisdom accepts human limitations without shame and learns to steward time, strength, attention, and responsibility faithfully.',
  'public', 'published', 'Volume Nine', 'Walking in Wisdom', 261,
  'Accepting Human Limitations Without Shame',
  'Psalm 90:1–12',
  '2 Corinthians 12:7–10',
  'Psalm 90:12',
  'So teach us to number our days, that we may apply our hearts unto wisdom.',
  'Psalm 90:12',
  'So teach us to number our days, that we may apply our hearts unto wisdom.',
  $$Human beings are limited.

Our time is limited.

Our strength is limited.

Our attention, knowledge, and resources are limited.

Yet much of life is spent pretending otherwise.

We overcommit.

Ignore weariness.

Delay rest.

Assume every need is ours to meet.

Then feel ashamed when the body, mind, or schedule can no longer sustain what we demanded from them.

Psalm 90 places human life beside the eternity of God.

The Lord remains from everlasting to everlasting.

Our days pass quickly.

This truth is not meant to produce despair.

It is meant to produce wisdom.

Because our days are limited, they matter.

Because we cannot do everything, we must discern what faithfulness requires.

Paul learned a similar lesson through his thorn in the flesh. He asked repeatedly for it to be removed. Instead, God taught him that divine strength could remain present within human weakness.

“My grace is sufficient for thee.”

Wisdom does not glorify limitation.

It accepts it honestly.

There are moments when we should push beyond comfort.

Courage and growth often require effort.

But there is a difference between stretching faithfully and living as though we have no limits at all.

The Way of Quiet Light reminds us that a lantern has a particular capacity.

It cannot illuminate every road at once.

It serves faithfully by carrying light where it has actually been placed.

So must we.

Some responsibilities belong to others.

Some opportunities must be declined.

Some tasks require delegation.

Some seasons require a slower pace than before.

Accepting limits may involve grief, especially when illness, age, or changed circumstances have reduced what was once possible.

Yet limitation does not erase purpose.

It clarifies stewardship.

The wise person asks:

What matters most?

What has God truly entrusted to me?

What can be released without guilt?

Where do I need help?

Today, do not measure yourself by everything you cannot carry.

Ask how you can carry what is yours with faithfulness, humility, and peace.$$,
  $$Heavenly Father,

Teach me to number my days and accept my limitations without shame. Help me recognize what You have truly entrusted to me and release what belongs to others. Give me humility to ask for help, wisdom to set a faithful pace, and confidence that Your strength remains sufficient within my weakness.

In the name of Jesus Christ, Amen.$$,
  'Where am I demanding more from myself than God may actually be requiring?',
  'Identify one responsibility, expectation, or unnecessary demand that can be delegated, postponed, simplified, or released.',
  'Wisdom does not deny limitation; it learns how to live faithfully within it.',
  '2027-03-18'
),
(
  'day-262-choosing-the-better-portion',
  'Choosing the Better Portion',
  'Wisdom distinguishes what is merely urgent from what is essential and orders life around the presence of Christ.',
  'public', 'published', 'Volume Nine', 'Walking in Wisdom', 262,
  'Pursuing What Matters Most',
  'Psalm 27:1–8',
  'Luke 10:38–42',
  'Luke 10:42',
  'But one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her.',
  'Luke 10:42',
  'But one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her.',
  $$Many good things can still distract us from the best thing.

Martha welcomed Jesus into her home and began serving.

Her work was useful.

Hospitality mattered.

Yet somewhere in the activity, service became anxiety.

She became distracted, frustrated, and resentful toward her sister.

Mary sat at the feet of Jesus and listened.

Christ did not condemn service.

He corrected disordered priority.

“Martha, Martha, thou art careful and troubled about many things.”

The problem was not merely that Martha was busy.

Her busyness had begun separating her from the very One she intended to serve.

This remains a danger for every believer.

We may become busy with work, ministry, family, obligations, projects, and good intentions while neglecting communion with God.

The Way of Quiet Light reminds us that activity is not the same as fruitfulness.

A life can be full and still be spiritually empty.

A schedule can contain many important tasks while leaving no room for prayer, listening, worship, or rest.

Wisdom distinguishes what is urgent from what is essential.

Urgent things demand attention loudly.

Essential things are often quiet.

Time with God.

A needed conversation.

Care for health.

Faithfulness at home.

The formation of character.

These may not announce themselves as dramatically as deadlines and notifications.

They still shape the whole life.

Choosing the better portion does not mean abandoning responsibility.

Mary would eventually rise.

Meals would still be prepared.

Work would still continue.

But first, the soul needed to receive from Christ.

We cannot continually give what we have stopped receiving.

Today, examine your priorities.

What fills your time?

What receives your best energy?

What matters deeply but is continually postponed?

There will always be more tasks.

The presence of Christ must not become one item among them.

It is the centre from which all faithful activity should flow.$$,
  $$Heavenly Father,

Help me distinguish what is merely urgent from what is truly essential. Protect me from becoming so busy with good responsibilities that I neglect Your presence. Teach me to order my life around Jesus Christ and to serve from a heart that has first listened, received, and rested in Him.

In the name of Jesus Christ, Amen.$$,
  'What important part of my spiritual, relational, or personal life has been repeatedly crowded out by busyness?',
  'Set aside uninterrupted time today to sit quietly with God through prayer and Scripture before returning to your responsibilities.',
  'Wisdom does not merely ask how much can be done; it asks what must never be neglected.',
  '2027-03-19'
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