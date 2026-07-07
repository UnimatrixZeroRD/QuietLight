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
  'day-70-treasures-in-heaven',
  'Treasures in Heaven',
  'Kingdom citizens invest their lives in what lasts forever, storing heavenly treasure through obedience, prayer, generosity, sacrifice, and Gospel faithfulness.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  70,
  'Living for What Lasts Forever',
  'Psalm 49:5-20',
  'Matthew 6:19-24',
  'Matthew 6:19-20',
  'Lay not up for yourselves treasures upon earth... but lay up for yourselves treasures in heaven.',
  'Matthew 6:19-20',
  'Lay not up for yourselves treasures upon earth... but lay up for yourselves treasures in heaven.',
  $$Every life is invested somewhere.

Some invest themselves entirely in possessions.

Others pursue reputation, comfort, influence, or success.

While none of these things are inherently wrong, they become dangerous when they replace the eternal priorities of God's Kingdom.

Jesus gently redirects our attention.

Earthly treasures are temporary.

They wear out.

They are lost.

They are stolen.

They eventually pass away.

Heavenly treasures endure forever.

Every act of obedience.

Every quiet prayer.

Every generous gift.

Every soul pointed toward Christ.

Every sacrifice made for the Gospel.

None of these are forgotten by God.

The psalmist reminds us that wealth cannot redeem the soul nor accompany us beyond the grave. Everything we possess in this life is temporary, but the investments we make in God's Kingdom continue into eternity.

The Way of Quiet Light encourages believers to evaluate success differently.

A faithful parent raising children in the Lord has invested in eternity.

A believer serving quietly behind the scenes has invested in eternity.

Someone who forgives, encourages, teaches, gives, or prays has invested in eternity.

These treasures cannot be measured by earthly standards.

They are recorded by God Himself.

Ask yourself today:

Where is my greatest investment?

Where your treasure is, Jesus says, there your heart will be also.

Choose wisely.

Live generously.

Serve faithfully.

The treasures of this world will one day fade.

The treasures of Heaven never will.$$,
  $$Heavenly Father,

Teach me to value what You value. Guard my heart from becoming consumed by temporary things, and help me invest my life in what will last forever. Give me wisdom to use every opportunity, every resource, and every gift for the advancement of Your Kingdom and the glory of Jesus Christ.

In His holy name, Amen.$$,
  'What am I investing the greatest portion of my time, energy, and attention toward?',
  'Perform one act today that has eternal value—encourage someone in their faith, share God''s love, pray with another person, or quietly serve someone in Christ''s name.',
  'The richest life is not measured by what it gathers on earth, but by what it stores in Heaven.',
  '2026-09-08'
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
