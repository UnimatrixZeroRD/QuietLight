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
  'day-64-blessed-are-the-peacemakers',
  'Blessed Are the Peacemakers',
  'Peacemakers bring the peace of Christ into a broken world through reconciliation, forgiveness, humility, gentleness, and faithful truth.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  64,
  'Bringing the Peace of Christ into a Broken World',
  'Isaiah 52:7-10',
  'Matthew 5:9; Romans 12:17-21',
  'Matthew 5:9',
  'Blessed are the peacemakers: for they shall be called the children of God.',
  'Matthew 5:9',
  'Blessed are the peacemakers: for they shall be called the children of God.',
  $$Peace does not happen by accident.

It is cultivated by people who have first allowed the peace of Christ to rule within their own hearts.

The world often mistakes peace for the absence of conflict. Scripture presents something much deeper. Biblical peace is the presence of God's righteousness, justice, mercy, and reconciliation working together through His people.

Jesus did not simply say, "Blessed are the peaceful."

He said, "Blessed are the peacemakers."

Peacemakers actively pursue reconciliation.

They listen before judging.

They forgive before retaliating.

They speak truth with gentleness.

They seek understanding before demanding to be understood.

This calling is not always easy.

Sometimes peace requires difficult conversations.

Sometimes it requires humility.

Sometimes it requires the courage to admit our own failures before pointing out the failures of others.

The Apostle Paul urges believers, "If it be possible, as much as lieth in you, live peaceably with all men."

Notice the wisdom in his words.

We cannot control another person's response.

We are only responsible for our own obedience.

The Way of Quiet Light encourages believers to become quiet builders of peace.

Not by avoiding truth.

Not by compromising righteousness.

But by reflecting the heart of Christ in every conversation.

A gentle answer.

A patient spirit.

A willingness to forgive.

A refusal to spread gossip.

These simple choices often prevent conflicts before they grow.

Our divided world desperately needs peacemakers.

Not merely people who speak about peace, but people whose lives demonstrate it.

Today, ask yourself where God may be inviting you to bring reconciliation.

Perhaps it begins with one conversation.

One apology.

One act of forgiveness.

One prayer.

The Prince of Peace still works through those who willingly follow Him.$$,
  $$Heavenly Father,

Thank You for reconciling me to Yourself through Jesus Christ. Make me an instrument of Your peace. Give me wisdom to speak with grace, courage to pursue reconciliation, and humility to forgive as I have been forgiven. Let my life become a reflection of the peace that only You can give.

In the name of Jesus Christ, Amen.$$,
  'Is there a relationship in my life where God is calling me to take the first step toward peace?',
  'Reach out to someone with whom you have experienced tension or distance. If appropriate and safe, begin the process of reconciliation with humility and grace.',
  'The Kingdom of God advances whenever one heart chooses reconciliation over retaliation.',
  '2026-09-02'
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
