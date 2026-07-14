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
  'day-208-come-apart-and-rest',
  'Come Apart and Rest',
  'Faithful service includes receiving rest, care, and renewal so that body, mind, and spirit can continue serving with wisdom and joy.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  208,
  'Receiving Rest as Part of Faithful Service',
  '1 Kings 19:1-8',
  'Mark 6:30-32',
  'Mark 6:31',
  'Come ye yourselves apart into a desert place, and rest a while.',
  'Mark 6:31',
  'Come ye yourselves apart into a desert place, and rest a while.',
  $$Servants also become tired.

The needs of others may seem endless.

There is always another task.

Another message.

Another person requiring help.

Another responsibility waiting to be completed.

Without wisdom, service can slowly become exhaustion.

Jesus understood this.

When the apostles returned from ministry, eager to report everything they had done, He did not immediately assign more work.

He said:

“Come ye yourselves apart… and rest a while.”

Rest was not a reward for laziness avoided.

It was part of faithful service.

Elijah also reached a point of deep exhaustion. After intense ministry and danger, he collapsed beneath a tree and lost hope.

God’s first response was not a sermon.

It was sleep.

Food.

Water.

Gentle care.

Only after Elijah had rested did the Lord lead him forward.

The Way of Quiet Light reminds us that receiving care can be as important as giving it.

A lantern cannot shine indefinitely without oil.

The servant who never rests may eventually become resentful, careless, physically unwell, or spiritually empty.

Rest does not mean abandoning responsibility.

It means recognizing that we are creatures, not the Creator.

The world continues while we sleep because God remains awake.

Healthy rest may include sleep, prayer, silence, recreation, time with family, medical care, counselling, or temporarily reducing responsibilities.

Sometimes weariness is spiritual.

Sometimes it is physical.

Sometimes it requires more than a day off.

Wisdom is willing to recognize the difference.

We must also resist false guilt.

The needs of the world are greater than any one person can meet. Saying no to one request may be necessary in order to remain faithful to responsibilities God has clearly given.

Jesus served sacrificially, but He did not respond to every demand immediately.

He withdrew.

Prayed.

Rested.

And returned with clarity.

Today, listen honestly to your body, mind, and spirit.

Perhaps faithfulness requires continuing the work.

Perhaps it requires stepping away briefly so that you can return whole.

Both can be obedience.$$,
  $$Heavenly Father,

Teach me to serve diligently without ignoring the limits You have placed within me. Give me wisdom to recognize when I need rest, support, or care. Free me from guilt when healthy boundaries are necessary, and protect me from using rest as an excuse for neglect. Renew my body, mind, and spirit so that I may continue serving with love and joy.

In the name of Jesus Christ, Amen.$$,
  'Am I serving from a place of spiritual and physical health, or have I been ignoring signs of exhaustion?',
  'Set aside a genuine period of rest today. Step away from one nonessential demand and use the time for prayer, sleep, quiet, recreation, or needed care.',
  'Rest is not the abandonment of service; it is one of the ways God prepares us to continue it faithfully.',
  '2027-01-24'
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