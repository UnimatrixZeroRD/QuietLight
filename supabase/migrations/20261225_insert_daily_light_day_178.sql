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
  'day-178-love-that-endures',
  'Love That Endures',
  'Christlike love remains patient, truthful, wise, and tender in difficult relationships without surrendering necessary boundaries.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  178,
  'Remaining Faithful in Difficult Relationships',
  'Hosea 3:1-5',
  '1 Corinthians 13:1-8',
  '1 Corinthians 13:4,7',
  'Charity suffereth long, and is kind... beareth all things, believeth all things, hopeth all things, endureth all things.',
  '1 Corinthians 13:4,7',
  'Charity suffereth long, and is kind... beareth all things, believeth all things, hopeth all things, endureth all things.',
  $$Love is easy when it is returned.

Its character is revealed when it is tested.

Jesus loved people who misunderstood Him.

Disciples who disappointed Him.

Crowds that wanted His miracles without His teaching.

Religious leaders who opposed Him.

Friends who abandoned Him.

And even those who crucified Him.

His love was not sentimental or naïve.

It saw sin clearly.

It spoke truth honestly.

Yet it remained committed to redemption.

Paul describes love as patient, kind, humble, and enduring. It does not keep a private record of every wrong to use later as a weapon. It does not rejoice when another person fails. It continues hoping for what grace may yet accomplish.

Hosea's difficult story also reveals the steadfast love of God toward a people who repeatedly wandered. The prophet's faithfulness became a living picture of divine mercy.

The Way of Quiet Light reminds us that enduring love is not the same as tolerating abuse, denying danger, or refusing necessary boundaries.

Jesus loved perfectly, yet He sometimes withdrew.

He confronted deception.

He refused manipulation.

He entrusted Himself only where trust was appropriate.

Christlike love is both enduring and wise.

It may remain prayerful even when contact must be limited.

It may forgive while trust is rebuilt slowly.

It may speak a hard truth because silence would allow harm to continue.

Love endures by refusing hatred, not by refusing wisdom.

In difficult relationships, ask:

What response reflects both truth and grace?

What would seek this person's genuine good?

What boundary would protect what God has entrusted to me without allowing bitterness to take root?

Some relationships are restored quickly.

Others require long patience.

Some may never be restored fully in this life.

Yet even then, Christ can preserve the heart from becoming shaped by resentment.

Today, choose love that is patient without becoming passive, truthful without becoming cruel, and steadfast without surrendering wisdom.$$,
  $$Heavenly Father,

Teach me to love with the patience, truth, and wisdom of Jesus Christ. Help me remain kind under strain, hopeful without becoming naïve, and forgiving without abandoning necessary boundaries. Guard my heart from bitterness and teach me to seek the genuine good of others. May Your enduring love shape every relationship in my life.

In the name of Jesus Christ, Amen.$$,
  'In a difficult relationship, am I responding from Christlike love, fear, resentment, or the need to control?',
  'Pray for wisdom concerning one strained relationship. Choose one loving action that is both gracious and appropriately boundaried.',
  'Enduring love remains tender without surrendering truth, and faithful without abandoning wisdom.',
  '2026-12-25'
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
