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
  'day-134-trusting-after-disappointment',
  'Trusting After Disappointment',
  'Disappointment can become bitterness or surrender, but faith learns to trust Christ''s presence when expectations collapse and the road changes.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  134,
  'Faith When Expectations Collapse',
  'Proverbs 3:5-6',
  'Luke 24:13-35',
  'Proverbs 3:5',
  'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
  'Proverbs 3:5',
  'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
  $$Disappointment is often grief wearing a different name.

Plans fail.

Doors close.

Prayers receive unexpected answers.

Life unfolds differently than we imagined.

The disciples walking toward Emmaus understood disappointment.

Their hopes had been shattered.

The Messiah they trusted had been crucified.

Their dreams for the future lay buried in a borrowed tomb.

As they walked the road in confusion, they spoke words that still echo through disappointed hearts:

"But we trusted..."

What they could not yet see was that Jesus Himself was walking beside them.

The resurrection had already happened.

Their story was not ending.

It was changing.

The Way of Quiet Light reminds us that disappointment often comes from the collision between our plans and God's purposes.

Sometimes God gives us what we ask for.

Sometimes He gives us something different.

Sometimes He gives us something better than we could have imagined.

Yet in every case, His wisdom remains greater than ours.

Disappointment can become bitterness.

Or it can become surrender.

It can harden the heart.

Or deepen trust.

If something precious has not unfolded the way you hoped, bring that disappointment honestly before God.

He is not offended by your sorrow.

He welcomes it.

And often, like the disciples on the road to Emmaus, we discover later that Christ was walking beside us even when we thought we had been left behind.$$,
  $$Heavenly Father,

I bring my disappointments before You today. Help me trust Your wisdom when life unfolds differently than I expected. Protect my heart from bitterness and strengthen my faith in Your goodness. Open my eyes to see Your presence and Your purposes, even when I do not understand the path before me.

In the name of Jesus Christ, Amen.$$,
  'Is there a disappointment I have struggled to surrender to God?',
  'Speak honestly to God about one disappointment you carry and ask Him to replace bitterness with trust.',
  'Sometimes what feels like the end of hope is only the beginning of a greater story God is writing.',
  '2026-11-11'
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
