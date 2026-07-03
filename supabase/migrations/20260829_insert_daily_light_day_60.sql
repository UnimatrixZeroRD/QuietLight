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
  'day-60-growing-in-grace',
  'Growing in Grace',
  'God continues His quiet work of grace, patiently shaping ordinary people into faithful reflections of Jesus Christ.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  60,
  'Becoming More Like Christ Every Day',
  'Hosea 6:1-3',
  'Philippians 1:3-11',
  'Philippians 1:6',
  'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.',
  'Philippians 1:6',
  'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.',
  $$Growth is one of God's quiet miracles.

We rarely notice it from one day to the next.

A child grows while sleeping.

A tree grows through changing seasons.

A river slowly shapes solid stone.

In much the same way, God patiently transforms His people through thousands of faithful moments that often seem ordinary.

Over these past thirty days we have explored what it means to grow in grace.

We have learned to abide in Christ rather than depend upon ourselves.

We have walked by faith when the path ahead was uncertain.

We have held firmly to hope and rested in God's peace.

We have discovered the joy of serving, worshiping, waiting, and pursuing holiness.

Each lesson has pointed toward one beautiful truth:

God is not finished with us.

The Christian life is not about achieving perfection through human effort.

It is about allowing the Holy Spirit to continue His transforming work within us day after day, year after year.

The Way of Quiet Light has always embraced this quiet transformation.

The lantern does not create its own flame.

It simply protects the light it has been entrusted to carry.

Likewise, we do not create spiritual life.

We simply remain close to Christ, the true Light, allowing His grace to shape us into His likeness.

As this volume comes to its conclusion, remember that grace is not merely the beginning of the Christian life.

It is the atmosphere in which the entire journey is lived.

Tomorrow a new chapter begins.

Your circumstances may change.

New opportunities will appear.

New challenges will arise.

Yet the God who has faithfully carried you through these days will continue leading every step that lies ahead.

Walk confidently.

Grow patiently.

Trust completely.

The work of grace continues.$$,
  $$Heavenly Father,

Thank You for Your patient and transforming grace. Continue the good work You have begun within me, making me more like Jesus Christ each day. Keep my heart humble, my faith strong, and my eyes fixed upon You. May my life become a faithful reflection of Your love as I continue walking wherever You lead.

In the name of Jesus Christ, Amen.$$,
  'Looking back over this volume, how has God been quietly shaping my heart to become more like Christ?',
  'Spend time reviewing what God has taught you throughout this volume. Offer Him thanks for His faithfulness, and dedicate yourself anew to continuing the journey of grace.',
  'Grace is God''s quiet work of shaping ordinary people into faithful reflections of Jesus Christ.',
  '2026-08-29'
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
