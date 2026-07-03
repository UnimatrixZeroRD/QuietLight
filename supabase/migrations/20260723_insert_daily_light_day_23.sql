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
  'day-23-bearing-good-fruit',
  'Bearing Good Fruit',
  'A life rooted in Christ quietly bears the fruit of the Spirit, reflecting His character through steady growth and faithful obedience.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  23,
  'A Life That Reflects Christ',
  'Jeremiah 17:5-8',
  'Galatians 5:22-26',
  'Galatians 5:22-23',
  'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance.',
  'Galatians 5:22-23',
  'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance.',
  $$Healthy trees are known by their fruit.

No tree strains to convince others that it is alive. Its fruit quietly bears witness to the health of its roots. In the same way, the Christian life is not measured merely by what we profess with our lips, but by what is consistently produced through our lives.

Paul describes the fruit of the Spirit as the natural result of God's work within every believer. Love replaces selfishness. Joy overcomes despair. Peace steadies anxious hearts. Patience softens frustration. Kindness, goodness, faithfulness, gentleness, and self-control become increasingly evident as we remain close to Christ.

These qualities cannot be manufactured by human determination alone. They are cultivated as the Holy Spirit transforms us from within.

Jeremiah paints a similar picture of the person who trusts in the Lord. Such a life is like a tree planted beside flowing waters. Even during seasons of drought, its roots continue drawing nourishment from a source that never fails. While outward conditions may become difficult, inward life continues to flourish.

The Way of Quiet Light reminds us that spiritual fruit develops quietly over time. Growth is rarely dramatic from one day to the next. Instead, God shapes His people through thousands of small moments of obedience, repentance, prayer, worship, and faithful service.

Do not become discouraged if you do not yet see all the fruit you desire. Farmers do not dig up a tree each morning to check whether it has grown. They faithfully water, cultivate, and patiently wait for the harvest.

Continue abiding in Christ. Continue seeking His presence. Continue yielding to His Spirit. In time, the fruit will become evident—not because you have forced it to appear, but because God has faithfully produced it within you.

The greatest testimony to the reality of Christ is often not found in extraordinary accomplishments but in an ordinary life transformed by His grace.$$,
  $$Heavenly Father,

Thank You for the work Your Holy Spirit is doing within me. Continue to produce the fruit that reflects the character of Jesus Christ. Remove attitudes and habits that hinder my growth, and help me remain rooted in Your Word and dependent upon Your grace. May my life bear fruit that brings glory to You and blessing to those around me.

In the name of Jesus Christ, Amen.$$,
  'Which fruit of the Spirit do I most need God to cultivate in my life today?',
  'Choose one fruit of the Spirit and intentionally practice it throughout the day, asking God to strengthen it within your heart.',
  'A life deeply rooted in Christ will quietly bear fruit that points others to Him.',
  '2026-07-23'
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
