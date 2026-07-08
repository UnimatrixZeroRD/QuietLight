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
  'day-113-hungering-for-god',
  'Hungering for God',
  'Spiritual hunger becomes worship when believers set aside temporary comforts and distractions to seek deeper fellowship with God.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  113,
  'Worship Through Fasting and Spiritual Desire',
  'Isaiah 58:1-11',
  'Matthew 6:16-18',
  'Matthew 5:6',
  'Blessed are they which do hunger and thirst after righteousness: for they shall be filled.',
  'Matthew 5:6',
  'Blessed are they which do hunger and thirst after righteousness: for they shall be filled.',
  $$Hunger reveals what the body needs.

Spiritual hunger reveals what the soul needs.

Throughout Scripture, fasting became a way for God's people to express dependence upon Him. It was never intended to impress others or earn God's favor. Rather, fasting became a quiet declaration that fellowship with God mattered more than temporary comforts.

Jesus assumed that His followers would fast, not as performers seeking attention, but as worshipers seeking God.

Isaiah warned against empty religious practices that lacked compassion and obedience. True fasting was never merely about giving something up.

It was about drawing nearer to God.

It was about aligning the heart with His purposes.

The Way of Quiet Light reminds us that fasting takes many forms.

Sometimes it involves food.

Sometimes it involves stepping away from distractions, entertainment, noise, or habits that compete for our attention.

The purpose remains the same:

To make more room for God.

Every time we deny ourselves something temporary for the sake of something eternal, we quietly declare that Christ is our greatest treasure.

Our culture teaches constant consumption.

The Kingdom often teaches holy restraint.

Today, ask yourself:

What fills my life so completely that I struggle to hear God's voice?

Perhaps the Lord is inviting you to set something aside for a season—not as punishment, but as an invitation into deeper fellowship.

The soul that hungers for God will never leave His table empty.$$,
  $$Heavenly Father,

Create within me a deeper hunger for Your presence and Your righteousness. Help me to desire You more than comfort, distraction, or temporary satisfaction. Teach me to practice self-denial with joy and to seek You with an undivided heart. May my deepest hunger always be for Jesus Christ.

In His holy name, Amen.$$,
  'What distraction or comfort most often competes with my attention toward God?',
  'Choose one distraction to intentionally set aside for a period of time today and use that time instead for prayer, Scripture, or quiet reflection.',
  'The heart that hungers most for God discovers that He alone truly satisfies.',
  '2026-10-21'
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
