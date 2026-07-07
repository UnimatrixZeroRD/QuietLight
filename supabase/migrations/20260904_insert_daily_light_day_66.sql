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
  'day-66-faithful-in-little-things',
  'Faithful in Little Things',
  'God prepares His people for greater responsibilities through ordinary faithfulness, diligent work, quiet obedience, and everyday stewardship.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  66,
  'Serving God Through Everyday Work',
  'Proverbs 22:29',
  'Luke 16:10-13',
  'Luke 16:10',
  'He that is faithful in that which is least is faithful also in much.',
  'Luke 16:10',
  'He that is faithful in that which is least is faithful also in much.',
  $$Many people wait for great opportunities before deciding to serve God faithfully.

Scripture teaches the opposite.

God often prepares us for greater responsibilities through the ordinary duties already placed before us.

Jesus declared that faithfulness in small things reveals the true condition of the heart. If we cannot be trusted with little, why would we expect greater responsibilities to be entrusted to us?

The Kingdom grows quietly through ordinary faithfulness.

A parent caring patiently for a child.

A student studying honestly.

An employee working with integrity.

A volunteer serving faithfully.

A neighbor keeping promises.

These actions may seem small in the eyes of the world, yet they are precious in the sight of God.

Proverbs reminds us that diligent work is honorable. Excellence is not about seeking recognition but about offering our best as an act of worship.

The Way of Quiet Light encourages believers to view every task through the lens of stewardship.

Whether we are leading many or serving quietly behind the scenes, every responsibility becomes an opportunity to honor Christ.

No work done for God is insignificant.

No unseen act of integrity is forgotten.

No faithful prayer goes unnoticed.

Our Heavenly Father delights in quiet obedience.

Often the greatest Kingdom impact begins with simple consistency rather than extraordinary achievement.

Do not overlook today's opportunities because they seem ordinary.

The habits you build now become the foundation of tomorrow's calling.

Serve faithfully where you are.

Trust God with where He will lead you next.$$,
  $$Heavenly Father,

Help me to remain faithful in every responsibility You have entrusted to me. Teach me to work with integrity, diligence, and gratitude, knowing that I ultimately serve You. May every task, no matter how ordinary, become an offering of worship that brings glory to Jesus Christ.

In His holy name, Amen.$$,
  'Am I treating today''s responsibilities as opportunities to serve God, or merely as obligations to complete?',
  'Choose one ordinary task today and perform it with exceptional care, remembering that you are serving Christ in the process.',
  'Faithfulness in ordinary moments prepares us for extraordinary opportunities in God''s Kingdom.',
  '2026-09-04'
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
