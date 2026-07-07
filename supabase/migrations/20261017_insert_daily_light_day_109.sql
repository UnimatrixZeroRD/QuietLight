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
  'day-109-worship-without-ceasing',
  'Worship Without Ceasing',
  'Worship becomes the rhythm of an entire life as believers rejoice, pray, give thanks, and offer ordinary moments to God.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  109,
  'A Life That Glorifies God',
  'Psalm 103:1-5',
  '1 Thessalonians 5:16-24',
  '1 Thessalonians 5:16-18',
  'Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  '1 Thessalonians 5:16-18',
  'Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  $$Worship is not confined to a place.

It is not limited to a day of the week.

It is not measured by the number of songs we sing.

True worship becomes the rhythm of an entire life.

Paul's instructions to the Thessalonian believers are beautifully simple.

Rejoice always.

Pray continually.

Give thanks in every circumstance.

These are not three unrelated commands.

Together they describe the heart of a worshiper.

Joy recognizes God's goodness.

Prayer keeps us close to His presence.

Thanksgiving remembers His faithfulness.

When these become daily habits, worship begins to shape every ordinary moment.

The Way of Quiet Light reminds us that worship often flourishes in quiet places.

Preparing a meal with gratitude.

Working honestly before the Lord.

Praying while walking.

Offering kindness without recognition.

Reading Scripture before sunrise.

Pausing to admire the beauty of God's creation.

Every ordinary moment can become sacred when offered to Him.

David understood this.

He called upon his own soul to bless the Lord and never forget His benefits.

Praise was not reserved for the sanctuary alone.

It became the language of his daily life.

This is God's invitation to every believer.

Do not wait for the perfect setting before choosing to worship.

Begin where you are.

With the work before you.

The people around you.

The blessings already given.

Let your life become a continual hymn of gratitude to the God who has been faithful from the beginning.$$,
  $$Heavenly Father,

Teach me to worship You not only during special moments but throughout every ordinary day. Fill my heart with continual gratitude, my mind with Your truth, and my lips with praise. May every task, every conversation, and every decision become an offering that honors Jesus Christ. Let my entire life glorify You.

In the name of Jesus Christ, Amen.$$,
  'What ordinary part of my daily routine could become a more intentional act of worship?',
  'Choose one routine activity today and consciously dedicate it to God, performing it with gratitude and joy as an act of worship.',
  'The worshiping heart discovers that every ordinary day can become holy ground.',
  '2026-10-17'
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
