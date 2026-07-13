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
  'day-198-side-by-side',
  'Side by Side',
  'Serving together in the Body of Christ protects against pride and isolation while allowing many faithful lanterns to carry the Light together.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  198,
  'Serving Together in the Body of Christ',
  'Ecclesiastes 4:9-12',
  'Philippians 4:1-3',
  'Ecclesiastes 4:9',
  'Two are better than one; because they have a good reward for their labour.',
  'Ecclesiastes 4:9',
  'Two are better than one; because they have a good reward for their labour.',
  $$God rarely calls His people to serve alone.

Moses needed Aaron and Hur.

Paul travelled with Barnabas, Silas, Timothy, Luke, and many others.

Even Jesus sent His disciples out two by two.

The Kingdom advances through cooperation.

This can be difficult.

Working with others requires patience.

Communication.

Forgiveness.

Humility.

People move at different speeds.

Hold different opinions.

Possess different strengths and weaknesses.

Yet these differences often become strengths when surrendered to Christ.

Paul spoke warmly of fellow workers who laboured beside him for the Gospel. He did not treat ministry as a competition for recognition or influence.

He understood that many hands together could accomplish far more than one person alone.

The Way of Quiet Light reminds us that isolation creates vulnerability.

A single lantern may struggle against the wind.

Many lanterns together illuminate the path more clearly.

Community provides encouragement when we are discouraged.

Correction when we are drifting.

Support when we are overwhelmed.

Perspective when we become discouraged.

Serving together also protects us from pride.

We discover that we need gifts we do not possess.

Wisdom we do not carry.

Experiences we have not lived.

The Kingdom has room for teachers and listeners, leaders and helpers, planners and encouragers, public voices and quiet servants.

Every role matters.

Perhaps you have been trying to carry too much by yourself.

Or perhaps pride has made accepting help difficult.

The Body of Christ was designed for mutual dependence, not isolated heroics.

Today, consider who walks beside you in service.

Thank God for them.

Encourage them.

Learn from them.

And where possible, share the load.

The King never intended His servants to carry the work alone.$$,
  $$Heavenly Father,

Thank You for the people You place beside me in service. Help me work with humility, patience, and gratitude. Protect me from pride, isolation, and unnecessary competition. Teach me to encourage others, receive help when needed, and value the gifts You have distributed throughout Your people.

In the name of Jesus Christ, Amen.$$,
  'Am I trying to serve alone in an area where God intends me to work alongside others?',
  'Encourage someone who serves beside you, and if needed, ask for help with a burden you have been carrying alone.',
  'The Kingdom shines brightest when many faithful lanterns carry the Light together.',
  '2027-01-14'
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
