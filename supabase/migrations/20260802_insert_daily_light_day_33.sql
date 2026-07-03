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
  'day-33-walking-in-the-spirit',
  'Walking in the Spirit',
  'The Christian life is lived under the guidance of the Holy Spirit, who gives life, leads daily obedience, and produces lasting transformation.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  33,
  'Living Under the Guidance of the Holy Spirit',
  'Ezekiel 37:1-14',
  'Galatians 5:16-26',
  'Galatians 5:16',
  'This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.',
  'Galatians 5:16',
  'This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.',
  $$The Christian life was never intended to be lived by human effort alone.

Many believers begin their walk with Christ relying upon His grace, only to find themselves trying to grow through their own strength. They become discouraged when old habits return, temptations persist, or spiritual progress seems slow. Yet God never asked us to produce holiness apart from Him.

He has given us His Holy Spirit.

The vision given to Ezekiel of the valley of dry bones is one of the most powerful pictures of spiritual life in all of Scripture. Dry bones cannot restore themselves. Only the breath of God can bring life where death once ruled. In the same way, it is the Spirit of God who continually breathes life into His people.

Paul reminds us that every believer faces a daily struggle between the desires of the flesh and the leading of the Spirit. This conflict should not surprise us. Growth often involves learning, failing, repenting, and returning again to Christ.

Walking in the Spirit is not a single dramatic event but a daily decision to surrender our thoughts, desires, and actions to God's direction.

The Way of Quiet Light encourages believers to cultivate sensitivity to the Spirit's gentle leading. He often speaks quietly through Scripture, conviction, wisdom, and peace rather than through dramatic displays. As we spend time in prayer and God's Word, we become increasingly able to recognize His guidance.

Notice that Paul speaks of "walking" in the Spirit rather than running. Walking implies consistency. One faithful step follows another. It is steady, intentional, and dependent upon the One leading the way.

Do not become discouraged if your pace seems slow. The Spirit is more interested in lasting transformation than rapid change. Continue yielding yourself to Him each day, trusting that He who began the good work will faithfully bring it to completion.$$,
  $$Heavenly Father,

Thank You for the gift of Your Holy Spirit. Teach me to walk under His guidance each day. Help me to resist the desires of the flesh and to cultivate the fruit that reflects Christ's character. Make me sensitive to Your leading, willing to obey Your voice, and faithful in every step I take.

In the name of Jesus Christ, Amen.$$,
  'In what area of my life do I most need to yield to the guidance of the Holy Spirit?',
  'Before making any significant decision today, pause and ask the Holy Spirit to guide your thoughts and actions.',
  'The Spirit rarely rushes us ahead; He faithfully walks beside us.',
  '2026-08-02'
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
