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
  'day-79-leading-like-the-king',
  'Leading Like the King',
  'Kingdom leadership is measured by service, humility, compassion, patience, and sacrificial love rather than authority or recognition.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  79,
  'Servant Leadership in God''s Kingdom',
  '1 Samuel 16:1-13',
  'Mark 10:35-45',
  'Mark 10:45',
  'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
  'Mark 10:45',
  'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
  $$The world often measures leadership by authority.

God measures leadership by service.

When James and John asked Jesus for places of honor in His Kingdom, they were thinking like the kingdoms of this world. Jesus responded by completely redefining greatness.

"Whosoever will be great among you, shall be your minister."

The King Himself became the Servant.

He washed the feet of His disciples.

He welcomed children.

He touched lepers.

He lifted the broken.

He gave His own life for the salvation of the world.

This is Kingdom leadership.

Long before David ever sat upon Israel's throne, God saw something different from what others saw. While people looked at outward appearance, the Lord looked upon David's heart. His years faithfully tending sheep prepared him to shepherd a nation.

The Way of Quiet Light reminds us that influence begins long before leadership is recognized.

A parent patiently guiding children.

A teacher encouraging students.

A supervisor treating employees with dignity.

A volunteer quietly serving without applause.

Leadership is not first about position.

It is about character.

The greatest leaders are often those who seek neither applause nor recognition.

They listen before speaking.

They encourage before criticizing.

They lift others rather than themselves.

Ask yourself today:

Who has God entrusted to my care?

Whether it is one person or many, lead them as Christ has led you—with humility, compassion, patience, and sacrificial love.

The greatest throne in God's Kingdom is found at the feet of those we serve.$$,
  $$Heavenly Father,

Thank You for the perfect example of Jesus Christ, the Servant King. Teach me to lead with humility, compassion, and wisdom wherever You have placed me. Remove pride from my heart and help me seek the good of others above my own recognition. May my influence always point people toward Christ.

In the name of Jesus Christ, Amen.$$,
  'How can I become a more Christlike leader within my family, workplace, church, or community?',
  'Look for one opportunity today to quietly serve someone under your care without seeking acknowledgment.',
  'The greatest leaders are remembered not for how many served them, but for how faithfully they served others.',
  '2026-09-17'
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
