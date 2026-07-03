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
  'day-50-growing-in-grace',
  'Growing in Grace',
  'Volume Two concludes with a call to continue growing in grace, becoming more like Christ through daily surrender, humility, and faithfulness.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  50,
  'Becoming More Like Christ Each Day',
  'Psalm 92:12-15',
  '2 Peter 3:17-18',
  '2 Peter 3:18',
  'But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.',
  '2 Peter 3:18',
  'But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.',
  $$Spiritual growth is the lifelong work of God within every believer.

Just as a tree grows slowly through changing seasons, so the Christian life matures through countless ordinary days of faithful obedience. Some days reveal noticeable progress. Others seem quiet and uneventful. Yet beneath the surface, God continues His patient work.

Throughout this volume we have explored what it means to grow in grace.

We have seen that growth begins with a new heart and a renewed mind.

We have learned to walk in the Spirit, endure trials, cultivate gratitude, embrace humility, discover contentment, obey with joy, live generously, speak with grace, encourage others, forgive freely, serve compassionately, seek discernment, bear faithful witness, persevere in prayer, and rest in God's unfailing faithfulness.

None of these virtues develops overnight.

Each is the result of a life continually surrendered to Jesus Christ.

The Apostle Peter closes his second letter with a simple but lifelong command: "Grow in grace."

Growth is evidence of life.

The healthiest trees continue reaching deeper roots and stronger branches year after year. Likewise, believers never outgrow their need for God's grace. The more we know Christ, the more we desire to know Him.

The Way of Quiet Light teaches that spiritual maturity is often quiet.

It is revealed less through dramatic experiences than through consistent faithfulness.

It is seen in the believer who quietly prays.

Who serves without recognition.

Who forgives without resentment.

Who gives without seeking praise.

Who trusts without demanding explanations.

These are the quiet marks of a life shaped by Christ.

As this second volume comes to its conclusion, remember that your journey has only begun.

There are still greater depths of God's love to discover.

Greater wisdom to receive.

Greater opportunities to serve.

Greater joy to experience.

Continue walking.

Continue learning.

Continue trusting.

Continue growing.

The God who began His good work within you will remain faithful until the day you stand complete in His presence.

Grow patiently.

Grow faithfully.

Grow in grace.$$,
  $$Heavenly Father,

Thank You for patiently shaping my life through Your grace. Continue Your transforming work within me, making me more like Jesus Christ each day. Keep my heart humble, my mind fixed upon Your truth, and my hands ready to serve. May every season of my life bring greater glory to You as I continue growing in grace.

In the name of Jesus Christ, Amen.$$,
  'Looking back over these twenty days, where have I seen the greatest evidence of God''s growth in my life?',
  'Spend time reviewing the lessons of this volume. Thank God for His work in your life, and prayerfully dedicate yourself to continuing the journey of spiritual growth.',
  'Grace is not only God''s gift that saves us—it is His daily work that shapes us into the likeness of Christ.',
  '2026-08-19'
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
