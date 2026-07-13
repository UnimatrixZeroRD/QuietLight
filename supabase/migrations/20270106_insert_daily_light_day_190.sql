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
  'day-190-the-cup-of-cold-water',
  'The Cup of Cold Water',
  'Small acts of service offered in Christ’s name carry eternal value because faithfulness is measured by obedience, not visibility.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  190,
  'The Eternal Value of Small Acts',
  'Zechariah 4:6-10',
  'Matthew 10:40-42',
  'Matthew 10:42',
  'Whosoever shall give to drink unto one of these little ones a cup of cold water only... he shall in no wise lose his reward.',
  'Matthew 10:42',
  'Whosoever shall give to drink unto one of these little ones a cup of cold water only... he shall in no wise lose his reward.',
  $$The Kingdom of God values things differently than the world does.

The world notices large crowds.

Great achievements.

Public recognition.

God notices cups of cold water.

Jesus taught that even the smallest act of kindness offered in His name carries eternal significance.

A cup of water is not impressive.

It is ordinary.

Accessible.

Simple.

Yet Christ declares that such acts matter deeply to the Father.

Zechariah delivered a similar message to those rebuilding the temple after exile.

The work felt small compared to the glory of what had existed before.

God responded:

“Who hath despised the day of small things?”

Faithfulness is not measured by size.

It is measured by obedience.

The Way of Quiet Light has always embraced this truth.

A message sent at the right moment.

A meal prepared.

A prayer whispered.

A door held open.

A kindness extended.

A burden shared.

These small acts become threads in the larger work God is weaving.

Many believers become discouraged because they believe their service is too small to matter.

They wait for larger opportunities while neglecting the faithful work already before them.

Yet great ministries are often built from countless unnoticed acts of obedience.

The lantern does not need to illuminate an entire city.

It only needs to provide enough light for the next step.

Today, do not underestimate the power of small faithfulness.

The smile you offer.

The encouragement you send.

The kindness you show.

The help you provide.

You may forget these acts tomorrow.

God will not.

The King notices what the world overlooks.

And no act of love offered in His name is ever wasted.$$,
  $$Heavenly Father,

Protect me from despising small opportunities to serve. Help me remember that faithfulness matters more than visibility and obedience more than recognition. Give me joy in ordinary acts of kindness and remind me that You see every cup of cold water offered in the name of Jesus Christ.

In His holy name, Amen.$$, 
  'Have I been waiting for larger opportunities while neglecting the small acts of service already before me?',
  'Perform one simple act of kindness today that may seem insignificant, and offer it to God as an act of worship.',
  'In God''s Kingdom, no act of love is too small to matter.',
  '2027-01-06'
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
