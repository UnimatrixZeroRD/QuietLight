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
  'day-94-standing-in-awe',
  'Standing in Awe',
  'True worship approaches God with both the confidence of beloved children and the reverent awe due to a holy King.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  94,
  'Reverence Before a Holy God',
  'Isaiah 6:1-8',
  'Hebrews 12:18-29',
  'Hebrews 12:28',
  'Let us have grace, whereby we may serve God acceptably with reverence and godly fear.',
  'Hebrews 12:28',
  'Let us have grace, whereby we may serve God acceptably with reverence and godly fear.',
  $$Love draws us near to God.

Reverence reminds us who He is.

The God who invites us to call Him Father is also the Creator of Heaven and earth, the Holy One whose glory fills the universe. Genuine worship holds these two truths together. We approach Him with confidence because of Christ, yet never casually or carelessly.

Isaiah experienced this reality in the temple.

When he saw the Lord high and lifted up, surrounded by heavenly worship, his first response was not self-confidence but humility.

"Woe is me!"

In the light of God's holiness, Isaiah recognized his own need for cleansing. Only after his sins were forgiven did he joyfully answer God's call,

"Here am I; send me."

The writer of Hebrews reminds believers that we have received a Kingdom which cannot be shaken. Therefore, we are to worship with reverence and holy awe, remembering that God's majesty has not diminished.

The Way of Quiet Light teaches that reverence is not fear of rejection.

It is wonder born from recognizing the greatness of God.

It is bowing the heart before His holiness.

It is listening carefully to His Word.

It is honoring His name.

It is approaching Him with humility and joyful respect.

Modern life often encourages us to rush.

Reverence teaches us to pause.

To become still.

To remember whose presence we have entered.

The closer we draw to God, the greater our wonder becomes.

His holiness does not drive away those who belong to Christ.

It draws them into deeper worship.

Today, take time to simply marvel at the greatness of your God.

He is infinite in power.

Perfect in wisdom.

Unchanging in faithfulness.

Overflowing in mercy.

Worthy of endless praise.$$,
  $$Heavenly Father,

You are holy, righteous, and worthy of all honor. Teach me never to take Your presence for granted. Fill my heart with reverence, humility, and joyful awe as I come before You. Thank You that through Jesus Christ I may approach You with confidence while never forgetting Your infinite majesty. May my worship always honor Your holy name.

In the name of Jesus Christ, Amen.$$,
  'Do I approach God with both the confidence of a beloved child and the reverence due to a holy King?',
  'Spend several quiet minutes simply reading Isaiah 6 slowly. Pause to reflect upon God''s holiness before offering your own prayers.',
  'The deeper we understand God''s holiness, the deeper our worship becomes.',
  '2026-10-02'
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
