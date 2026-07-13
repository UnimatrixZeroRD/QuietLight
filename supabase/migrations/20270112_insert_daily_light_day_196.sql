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
  'day-196-when-service-costs-something',
  'When Service Costs Something',
  'Sacrificial service follows the pattern of Christ by choosing faithful compassion even when love requires real cost.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  196,
  'Choosing Compassion Over Comfort',
  '2 Samuel 24:18-25',
  'Luke 9:57-62',
  '2 Samuel 24:24',
  'Neither will I offer burnt offerings unto the LORD my God of that which doth cost me nothing.',
  '2 Samuel 24:24',
  'Neither will I offer burnt offerings unto the LORD my God of that which doth cost me nothing.',
  $$Service is easy when it fits comfortably into our plans.

Its character is revealed when it costs something.

Time.

Money.

Rest.

Convenience.

Reputation.

The willingness to remain when leaving would be easier.

David understood that an offering without cost was not truly a sacrifice. When Araunah offered him land and animals freely, David refused to present to God something that required nothing from him.

Genuine service often carries a price.

Jesus made this clear to those who wanted to follow Him. Discipleship could not be reduced to admiration or good intentions. Following Christ required placing the Kingdom above comfort and convenience.

The Way of Quiet Light reminds us that sacrificial service is not the same as reckless exhaustion.

Jesus rested.

He withdrew to pray.

He sometimes left crowds and declined demands.

Healthy boundaries remain necessary.

Yet boundaries can also become excuses when they are used only to protect us from every inconvenience.

Love sometimes interrupts.

It changes plans.

It requires us to give more than we expected.

A friend needs us during an inconvenient hour.

A family requires patient care through a long season.

A ministry continues after the initial enthusiasm fades.

A stranger’s need asks more than a passing word.

These moments reveal what we truly value.

The cross remains the highest example.

Christ did not serve humanity from a distance or from the safety of Heaven. He entered our suffering, carried our sin, and gave Himself completely.

We will never equal His sacrifice.

But we are called to follow its pattern.

Today, do not seek hardship merely for its own sake.

Instead, refuse to believe that every costly opportunity must therefore be avoided.

Ask:

Is this need truly mine to answer?

Is this sacrifice faithful and wise?

Would love require me to give something real?

When the answer is yes, serve with joy.

An offering that costs something often becomes the one that most clearly reveals the heart.$$,
  $$Heavenly Father,

Thank You for the costly love of Jesus Christ. Give me courage to serve when compassion requires sacrifice. Protect me from selfish comfort, but also grant wisdom to recognize healthy limits and the responsibilities You have truly entrusted to me. May I offer You service that is sincere, faithful, and willing to bear a cost.

In the name of Jesus Christ, Amen.$$,
  'Have I been avoiding a faithful opportunity to serve because it would inconvenience or cost me something?',
  'Choose one appropriate act of service today that requires a genuine sacrifice of time, comfort, attention, or resources.',
  'Love proves its depth when it remains willing to give after service is no longer convenient.',
  '2027-01-12'
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
