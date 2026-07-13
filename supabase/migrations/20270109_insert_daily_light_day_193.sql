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
  'day-193-sowing-generously',
  'Sowing Generously',
  'Serving the King through generosity means holding God’s provision with open hands so it can become blessing for others.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  193,
  'Using God’s Provision to Bless Others',
  'Proverbs 11:24-28',
  '2 Corinthians 9:6-15',
  '2 Corinthians 9:6',
  'He which soweth bountifully shall reap also bountifully.',
  '2 Corinthians 9:6',
  'He which soweth bountifully shall reap also bountifully.',
  $$Generosity begins long before anything leaves our hands.

It begins in the heart.

A closed heart clings tightly to time, resources, attention, and opportunity. It fears that giving will leave too little behind.

An open heart remembers that God is the source of every good gift.

Paul compares generosity to sowing seed.

A farmer who scatters little seed should not expect a great harvest. The one who sows generously trusts that the seed has not been wasted merely because it has left his hand.

So it is with service.

A gift given.

A meal shared.

A ministry supported.

A need quietly met.

These acts may disappear from our sight, but they do not disappear from God’s care.

Generosity is not limited to wealth.

Some people can give money.

Others can give time.

Some offer skill, encouragement, hospitality, transportation, knowledge, or prayer.

The question is not whether we possess the same resources as someone else.

The question is whether we hold what we have with open hands.

The Way of Quiet Light reminds us that generosity should preserve dignity.

We do not give in order to control people, display their need, or purchase their gratitude.

We give because God has first been generous toward us.

Paul teaches that giving should not arise from resentment or pressure. God loves a cheerful giver because cheerful generosity reflects trust. It says:

“My security rests in God, not merely in what I possess.”

Wise stewardship still matters. Generosity should not ignore essential responsibilities, encourage exploitation, or create unnecessary harm. Yet wisdom must not become an excuse for selfishness.

The Lord gives seed to the sower.

He provides not only what sustains us, but also what can flow through us toward others.

Today, consider what God has placed in your hands.

Perhaps it is more than provision for yourself.

Perhaps some of it is seed.$$,
  $$Heavenly Father,

Thank You for every resource, ability, and opportunity You have entrusted to me. Free my heart from fear, greed, and selfishness. Give me wisdom to steward responsibly and generosity to share joyfully. May what You place in my hands become provision, encouragement, and grace in the lives of others.

In the name of Jesus Christ, Amen.$$,
  'What resource am I holding tightly that God may be inviting me to share?',
  'Give something intentionally today—time, money, food, attention, skill, or encouragement—to meet a genuine need.',
  'Generosity trusts that nothing placed faithfully into God’s hands is ever truly lost.',
  '2027-01-09'
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
