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
  'day-182-whatever-you-did-for-the-least',
  'Whatever You Did for the Least',
  'Serving the King means noticing the overlooked and offering compassion with humility, dignity, wisdom, and faithful love.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  182,
  'Encountering Christ in Those Who Are Overlooked',
  'Proverbs 19:15-17',
  'Matthew 25:31-40',
  'Matthew 25:40',
  'Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.',
  'Matthew 25:40',
  'Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.',
  $$It is easy to serve people who can reward us.

It is easy to show kindness when gratitude, recognition, or influence may return to us.

Jesus directs our attention elsewhere.

The hungry.

The thirsty.

The stranger.

The poorly clothed.

The sick.

The imprisoned.

These were not powerful people who could improve anyone's reputation. Many were ignored, feared, judged, or forgotten.

Yet Christ identified Himself with them.

"What you did for them," He said, "you did for Me."

This teaching gives extraordinary dignity to ordinary acts of compassion.

A meal offered to someone hungry becomes service to Christ.

A visit with someone who is lonely becomes time spent with Christ.

A welcome offered to a stranger becomes hospitality extended to Christ.

The person before us may appear forgotten by the world, but they are never forgotten by God.

Proverbs declares that whoever shows compassion to the poor lends to the Lord. God takes personally the way vulnerable people are treated.

The Way of Quiet Light reminds us to notice those who are easily overlooked.

The person sitting alone.

The elderly neighbour whose world has become smaller.

The family quietly struggling to afford necessities.

The patient who rarely receives visitors.

The person whose disability, poverty, history, or reputation causes others to pass by.

Service begins with seeing.

Jesus saw people whom others had learned not to notice.

He saw Zacchaeus hidden in a tree.

Bartimaeus crying beside the road.

A widow placing two small coins into the treasury.

A wounded man lying along a dangerous path.

Christlike compassion pays attention.

It does not reduce people to projects or opportunities for public virtue. It approaches them as neighbours bearing the image of God.

Serving the overlooked also requires humility. We must listen rather than assume, protect dignity rather than display need, and offer help without creating unnecessary shame.

Today, ask God to show you whom others may be passing by.

The opportunity to serve your King may be hidden within the needs of someone the world considers unimportant.$$,
  $$Heavenly Father,

Open my eyes to see those who are overlooked, lonely, vulnerable, or in need. Forgive me for the times I have passed by because helping felt inconvenient. Teach me to serve with humility, wisdom, and respect for the dignity of every person. May I recognize Jesus Christ in those who need compassion and respond with faithful love.

In His holy name, Amen.$$,
  'Who around me may be invisible to others but precious in the sight of God?',
  'Reach out to one person who may feel forgotten. Offer practical assistance, companionship, encouragement, or a listening ear while protecting their dignity.',
  'The King often waits to receive our service through the lives of those the world has overlooked.',
  '2026-12-29'
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
