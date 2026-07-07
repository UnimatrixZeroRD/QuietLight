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
  'day-62-salt-and-light',
  'Salt and Light',
  'Christ calls His followers to quietly influence the world through mercy, integrity, love, kindness, and faithful Gospel witness.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  62,
  'Quietly Influencing the World',
  'Isaiah 58:6-12',
  'Matthew 5:13-16',
  'Matthew 5:13-14',
  'Ye are the salt of the earth... Ye are the light of the world.',
  'Matthew 5:13-14',
  'Ye are the salt of the earth... Ye are the light of the world.',
  $$Jesus never called His followers to hide from the world.

Neither did He call them to become like it.

Instead, He gave two simple pictures that reveal the mission of every believer.

Salt.

Light.

Salt quietly preserves what is good. It adds flavor without seeking attention for itself.

Light never argues with darkness.

It simply shines.

Darkness cannot overcome genuine light.

The Lord intentionally chose these ordinary images because His Kingdom often advances through ordinary faithfulness.

A Christian parent raising children with patience.

A worker who chooses honesty over convenience.

A neighbor who quietly serves those in need.

A friend who forgives instead of retaliating.

A believer whose hope remains steady during hardship.

These everyday acts often become the strongest testimony to the Gospel.

The Way of Quiet Light has always embraced this calling.

We are not seeking recognition.

We are seeking faithfulness.

Our purpose is not to make our own names known.

It is to quietly reflect the character of Jesus Christ so clearly that others begin to notice Him.

Isaiah reminds us that when God's people feed the hungry, care for the afflicted, welcome the stranger, and loosen the burdens of oppression, "then shall thy light rise in obscurity."

Notice what happens.

Compassion becomes light.

Mercy becomes light.

Integrity becomes light.

Love becomes light.

The Kingdom of God becomes visible through ordinary believers living extraordinary lives of faithfulness.

Never underestimate what God can accomplish through one obedient life.

A single conversation.

A quiet act of kindness.

A faithful prayer.

A forgiving heart.

These may become the very means through which someone encounters Christ.

Shine faithfully.

The Light you carry is not your own.

It belongs to the Savior who first shone into your life.$$,
  $$Heavenly Father,

Thank You for calling me to be salt and light in this world. Help me to influence others through truth, compassion, humility, and faithful obedience. Keep me from seeking recognition for myself, and let every good work direct others toward Jesus Christ. May Your light shine brightly through my life today.

In the name of Jesus Christ, Amen.$$,
  'In what practical way can I become salt and light within my home, workplace, or community today?',
  'Perform one intentional act of kindness without telling anyone. Let it become a quiet testimony to the love of Christ.',
  'The brightest witness is often the believer who quietly lives like Christ every single day.',
  '2026-08-31'
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
