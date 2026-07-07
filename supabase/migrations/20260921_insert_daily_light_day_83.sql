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
  'day-83-praying-for-the-nations',
  'Praying for the Nations',
  'God''s Kingdom has no borders, and believers participate in His mission by praying for leaders, communities, churches, missionaries, and the nations.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  83,
  'A Kingdom Without Borders',
  'Psalm 67',
  '1 Timothy 2:1-6',
  '1 Timothy 2:1',
  'I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men.',
  '1 Timothy 2:1',
  'I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men.',
  $$The Kingdom of God has no borders.

It is not limited by language, culture, nationality, or race. Every nation is invited into the saving grace of Jesus Christ, and every believer has the privilege of participating in God's mission through prayer.

Paul urges the Church to pray for everyone, including kings and those in positions of authority. Such prayers are not merely civic duties; they are acts of Kingdom faithfulness. When we pray for our leaders, our communities, and the nations of the world, we acknowledge that God alone is sovereign over history.

The psalmist looked forward to the day when all peoples would praise the Lord. God's covenant with Israel was never intended to end with one nation. From the beginning, His purpose was that every family of the earth would come to know His salvation.

The Way of Quiet Light reminds us that prayer quietly reaches places we may never personally visit.

We may never stand in another country.

We may never meet every person for whom we pray.

Yet our prayers are heard by the God who rules over every nation and every generation.

Pray for those who govern with wisdom and justice.

Pray for persecuted believers.

Pray for missionaries and evangelists.

Pray for churches faithfully proclaiming the Gospel.

Pray for those who have never heard the name of Jesus.

Every prayer offered in faith becomes part of God's work in the world.

Though our influence may appear small, the God who hears our prayers is infinitely great.

Lift your eyes beyond your own circumstances today.

The Kingdom extends to the ends of the earth.$$,
  $$Heavenly Father,

Thank You that Your love reaches every nation and every people. Teach me to pray faithfully for my community, my country, and the world. Strengthen Your Church wherever it gathers, protect those who suffer for Your name, and draw many hearts to faith in Jesus Christ. May Your Kingdom come and Your will be done on earth as it is in Heaven.

In the name of Jesus Christ, Amen.$$,
  'How often do my prayers extend beyond my own needs to include God''s work throughout the world?',
  'Pray today for one nation other than your own, asking God to strengthen His Church and open hearts to the Gospel.',
  'The Kingdom of God advances wherever faithful believers lift the nations before the throne of grace.',
  '2026-09-21'
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
