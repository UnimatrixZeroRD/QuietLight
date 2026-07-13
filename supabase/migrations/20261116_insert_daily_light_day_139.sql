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
  'day-139-carrying-one-another',
  'Carrying One Another',
  'Storms are not meant to be faced alone; God strengthens His people through fellowship, humility, encouragement, and shared burdens.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  139,
  'Strength Through Christian Fellowship',
  'Ecclesiastes 4:9-12',
  'Galatians 6:1-10',
  'Galatians 6:2',
  'Bear ye one another''s burdens, and so fulfil the law of Christ.',
  'Galatians 6:2',
  'Bear ye one another''s burdens, and so fulfil the law of Christ.',
  $$Storms have a way of convincing us that we must face them alone.

Pride whispers that asking for help is weakness.

Fear whispers that others will not understand.

Shame whispers that our burdens are ours to carry in silence.

The Gospel speaks differently.

God never intended His people to walk alone.

Solomon observed that two are better than one because when one falls, another can help them rise again. A cord woven from many strands is stronger than one standing alone.

The early Church understood this truth well.

They prayed together.

Shared resources.

Carried one another's grief.

Celebrated one another's joys.

The struggles of one became the concern of all.

The Way of Quiet Light reminds us that one of God's greatest gifts during storms is the presence of fellow travelers.

Sometimes God comforts us directly through prayer and Scripture.

Other times He comforts us through a friend who listens.

A church that prays.

A family member who stays.

A stranger who shows kindness.

These too become expressions of God's care.

Allowing others to carry part of our burden is not weakness.

It is humility.

And offering to carry someone else's burden is not inconvenience.

It is love.

If you are struggling today, reach out.

If you know someone who is struggling, reach toward them.

The Body of Christ is strongest when it carries its burdens together.$$,
  $$Heavenly Father,

Thank You for the people You place in our lives to encourage, strengthen, and support us. Help me to have the humility to receive help when I need it and the compassion to offer help when others are hurting. May I faithfully carry the burdens of others as Christ has faithfully carried mine.

In the name of Jesus Christ, Amen.$$,
  'Am I allowing others to walk beside me in my struggles, or am I trying to carry everything alone?',
  'Reach out to someone today—either to ask for support or to offer encouragement and prayer.',
  'God often carries burdens through the hands and hearts of His people.',
  '2026-11-16'
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
