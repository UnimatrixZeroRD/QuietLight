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
  'day-92-drawing-near',
  'Drawing Near',
  'Through Jesus Christ, believers are invited to draw near to God, seeking His presence above every blessing and distraction.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  92,
  'Entering God''s Presence',
  'Exodus 33:12-23',
  'James 4:7-10',
  'James 4:8',
  'Draw nigh to God, and he will draw nigh to you.',
  'James 4:8',
  'Draw nigh to God, and he will draw nigh to you.',
  $$One of the greatest privileges of the Christian life is the invitation to draw near to God.

Under the old covenant, access to God's holy presence was limited. The tabernacle and later the temple reminded Israel that sin created separation between humanity and a holy God.

Through Jesus Christ, everything changed.

The veil was torn.

The way was opened.

We are now invited to approach God's throne with confidence—not because of our own righteousness, but because of the finished work of Christ.

Moses treasured God's presence above every blessing.

When offered the Promised Land without God's presence, he replied,

"If thy presence go not with me, carry us not up hence."

He understood that God's presence was the greatest gift God could give.

The Way of Quiet Light encourages believers to cultivate this same longing.

Many people seek God's blessings.

Far fewer seek God Himself.

Yet every blessing ultimately points toward the greater gift of knowing Him more deeply.

Drawing near requires humility.

It requires repentance.

It requires setting aside distractions.

It requires making room for quietness before the Lord.

As we intentionally seek Him, we discover that He has already been drawing us toward Himself.

His presence brings peace to anxious hearts.

Wisdom to uncertain minds.

Strength to weary souls.

Joy to those who have grown discouraged.

Today, choose nearness over distraction.

Sit quietly before the Lord.

Listen more than you speak.

Rest more than you strive.

The God who created the universe delights in meeting with those who sincerely seek Him.$$,
  $$Heavenly Father,

Thank You for opening the way into Your presence through Jesus Christ. Create within me a deeper desire to know You above all else. Help me to set aside distractions and seek You with my whole heart. Fill me with the peace, wisdom, and joy that come from dwelling in Your presence.

In the name of Jesus Christ, Amen.$$,
  'What distractions most often keep me from spending quiet, uninterrupted time with God?',
  'Set aside at least twenty minutes today to be alone with God in prayer and Scripture, free from phones, media, or other interruptions.',
  'The greatest treasure we discover is not merely God''s gifts, but God''s presence.',
  '2026-09-30'
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
