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
  'day-189-opening-the-door',
  'Opening the Door',
  'Hospitality serves the King by making room for others through welcome, presence, fellowship, belonging, and wise generosity.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  189,
  'Hospitality as an Act of Service',
  'Genesis 18:1-8',
  'Romans 12:9-13; Hebrews 13:1-2',
  '1 Peter 4:9',
  'Use hospitality one to another without grudging.',
  '1 Peter 4:9',
  'Use hospitality one to another without grudging.',
  $$Hospitality is one of the oldest ministries in Scripture.

Abraham welcomed strangers beneath the trees of Mamre, offering food, water, rest, and shelter. He did not know that he was welcoming messengers sent by God.

The writer of Hebrews later reflected upon this moment:

“Be not forgetful to entertain strangers: for thereby some have entertained angels unawares.”

Hospitality is more than entertaining guests.

It is making room for people.

Making room in our schedules.

Making room at our tables.

Making room in our homes, our conversations, and our lives.

Jesus practiced this kind of welcome constantly.

Children felt safe near Him.

Sinners approached Him.

The lonely found companionship.

The rejected found dignity.

Christ created space where people could encounter grace.

The Way of Quiet Light reminds us that hospitality does not require wealth or perfection.

A simple meal can become holy ground.

A cup of tea shared with a lonely neighbour can become ministry.

A guest room, a spare chair, a listening ear, or a warm greeting may become instruments of God’s kindness.

Many people today suffer not from hunger alone but from isolation.

Loneliness has become one of the quiet wounds of our age.

Hospitality answers loneliness with presence.

It says:

“You are welcome here.”

“You matter.”

“You do not have to carry life entirely alone.”

Hospitality also requires wisdom.

Boundaries remain important.

Safety matters.

Not every request should be accepted without discernment.

Yet fear must not become an excuse for closing our hearts entirely.

The Kingdom often grows one conversation, one meal, and one act of welcome at a time.

Today, ask yourself:

Who needs a place at the table?

Who needs to know they belong?

The King often enters our lives disguised as an opportunity to make room for someone else.$$,
  $$Heavenly Father,

Thank You for welcoming me into Your family through Jesus Christ. Teach me to reflect that same welcome toward others. Open my home, my schedule, and my heart to those who need companionship, encouragement, and belonging. Give me wisdom in setting boundaries and generosity in sharing what You have entrusted to me.

In the name of Jesus Christ, Amen.$$, 
  'Is my life arranged in a way that leaves room for people, or only for responsibilities?',
  'Invite someone into conversation, fellowship, or shared time today who may be feeling isolated or overlooked.',
  'Hospitality is love making room for another person.',
  '2027-01-05'
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
