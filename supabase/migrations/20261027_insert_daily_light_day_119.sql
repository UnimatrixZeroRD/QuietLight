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
  'day-119-offering-the-whole-heart',
  'Offering the Whole Heart',
  'Worship becomes a way of life when every thought, plan, responsibility, relationship, and quiet act is surrendered to God.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  119,
  'Worship as a Way of Life',
  'Deuteronomy 6:4-9',
  'Romans 12:1-2',
  'Deuteronomy 6:5',
  'Thou shalt love the Lord thy God with all thine heart, and with all thy soul, and with all thy might.',
  'Deuteronomy 6:5',
  'Thou shalt love the Lord thy God with all thine heart, and with all thy soul, and with all thy might.',
  $$As this journey through worship draws toward its conclusion, one truth stands above all others:

God desires our hearts.

Not merely our songs.

Not merely our attendance.

Not merely our rituals.

He desires us.

From the earliest pages of Scripture, God called His people into wholehearted devotion. He did not seek divided loyalties or occasional attention. He sought a people who loved Him with heart, soul, mind, and strength.

Paul echoes this same invitation when he urges believers to present themselves as living sacrifices.

Worship is not confined to a sanctuary.

It follows us into kitchens and workplaces.

Into conversations and decisions.

Into moments of celebration and seasons of grief.

Every part of life becomes holy when it is offered to God.

The Way of Quiet Light has always understood this simple truth:

The lantern exists only to carry the Light.

Likewise, our lives exist to reflect Christ.

The greatest act of worship is not what happens during a service.

It is what happens when nobody is watching.

Faithfulness in ordinary things.

Integrity in quiet moments.

Compassion toward strangers.

Patience with those we love.

These become songs of worship that rise before Heaven.

Today, offer God more than an hour.

Offer Him your day.

Offer Him your plans.

Offer Him your thoughts.

Offer Him your life.

The Lord who gave Himself completely for us deserves nothing less than our whole hearts in return.$$,
  $$Heavenly Father,

You are worthy of more than my occasional attention or partial devotion. Teach me to love You with all my heart, soul, mind, and strength. Let every part of my life become an offering of worship before You. May my words, my actions, and my thoughts reflect the love of Jesus Christ and bring glory to Your holy name.

In the name of Jesus Christ, Amen.$$,
  'Is there any area of my life that I have kept separate from God''s lordship and worship?',
  'Intentionally dedicate your work, your relationships, and your responsibilities to God today as acts of worship.',
  'The worship God desires most is not found in a song, but in a surrendered life.',
  '2026-10-27'
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
