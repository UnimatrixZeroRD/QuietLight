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
  'day-80-one-body-one-spirit',
  'One Body, One Spirit',
  'The Church reflects God''s Kingdom when diverse believers walk together in humility, love, peace, truth, and unity under one Lord.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  80,
  'Living in Unity Within the Church',
  'Psalm 133',
  'Ephesians 4:1-16',
  'Ephesians 4:3',
  'Endeavouring to keep the unity of the Spirit in the bond of peace.',
  'Ephesians 4:3',
  'Endeavouring to keep the unity of the Spirit in the bond of peace.',
  $$The Church is wonderfully diverse.

Different personalities.

Different gifts.

Different backgrounds.

Different cultures.

Yet God has called all believers to become one body under one Lord.

Unity does not mean uniformity.

The Apostle Paul compares the Church to a human body. Every member has a unique purpose, yet each depends upon the others. A hand cannot dismiss the foot, nor can the eye declare that it has no need of the ear. Each part contributes to the health of the whole.

Psalm 133 celebrates this beautiful truth, declaring that it is both good and pleasant when God's people dwell together in unity. Such unity becomes a powerful testimony to the watching world.

The Way of Quiet Light reminds us that unity is preserved through humility.

When we insist upon having our own way, division grows.

When we listen with patience, forgive freely, and extend grace generously, unity flourishes.

This does not require abandoning truth.

Biblical unity is built upon Christ and His Word.

Within that foundation, believers learn to love one another despite differing personalities, preferences, and backgrounds.

Every congregation.

Every family.

Every Christian community.

Will eventually experience disagreement.

The question is not whether conflict will arise.

The question is whether Christ's love will guide our response.

Today, become a builder of unity.

Speak words that encourage.

Refuse to spread division.

Celebrate the gifts God has given to others.

Pray for your church.

Support your leaders.

Love your brothers and sisters in Christ.

A united Church shines brightly in a divided world.$$,
  $$Heavenly Father,

Thank You for making me part of the Body of Christ. Help me to become a source of unity, encouragement, and peace within Your Church. Guard my heart from pride, division, and selfishness. Teach me to value the gifts of others and to work together for the glory of Jesus Christ and the advancement of Your Kingdom.

In the name of Jesus Christ, Amen.$$,
  'Am I contributing to the unity of Christ''s Church through my attitudes, words, and actions?',
  'Encourage someone who faithfully serves in your church or Christian community. Thank them for their ministry and pray for them.',
  'When God''s people walk together in humility and love, the world catches a glimpse of His Kingdom.',
  '2026-09-18'
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
