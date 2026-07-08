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
  'day-117-gathered-in-his-name',
  'Gathered in His Name',
  'Worship in community strengthens believers as God''s people gather to pray, sing, learn, encourage one another, and seek His presence together.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  117,
  'Worship in Community',
  'Psalm 122:1-9',
  'Hebrews 10:19-25',
  'Psalm 122:1',
  'I was glad when they said unto me, Let us go into the house of the LORD.',
  'Psalm 122:1',
  'I was glad when they said unto me, Let us go into the house of the LORD.',
  $$While worship is deeply personal, it was never meant to be entirely private.

From the earliest days of Israel to the gatherings of the early Church, God's people have assembled together to pray, sing, learn, encourage one another, and remember the goodness of the Lord.

David rejoiced when invited to worship with God's people.

Not because the building itself was sacred.

But because God's people were gathering to seek the presence of God together.

There is something beautiful about shared worship.

One voice becomes many.

One prayer becomes a chorus.

One testimony strengthens another believer's faith.

The writer of Hebrews urges believers not to neglect gathering together, especially as the day of Christ's return approaches.

The Christian life was never intended to be walked alone.

The Way of Quiet Light reminds us that community is one of God's gifts to His people.

In times of joy, the Church celebrates together.

In times of sorrow, the Church carries burdens together.

When one grows weary, another offers encouragement.

When one stumbles, another helps them stand.

Worship together reminds us that we belong to something far larger than ourselves.

We are members of one Body.

Citizens of one Kingdom.

Children of one Father.

Today, thank God for the believers He has placed in your life.

And whenever possible, worship with them gladly.

Hearts that praise together often grow stronger together.$$,
  $$Heavenly Father,

Thank You for the gift of Your Church and for the brothers and sisters You have placed beside me on this journey of faith. Help me to value Christian fellowship and to encourage others through worship, prayer, and service. May our gatherings honor Jesus Christ and become places where Your presence is known and Your people are strengthened.

In the name of Jesus Christ, Amen.$$,
  'Am I intentionally investing in the fellowship and encouragement of other believers?',
  'Reach out to another believer today with encouragement, prayer, or gratitude for their presence in your life.',
  'The voices of God''s people rise higher when they rise together.',
  '2026-10-25'
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
