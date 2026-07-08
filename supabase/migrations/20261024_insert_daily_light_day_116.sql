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
  'day-116-do-this-in-remembrance-of-me',
  'Do This in Remembrance of Me',
  'Communion leads believers to remember Christ''s sacrifice, proclaim the Gospel, examine the heart, and worship with gratitude and hope.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  116,
  'Worship Through Communion',
  'Exodus 12:1-14',
  '1 Corinthians 11:23-26',
  '1 Corinthians 11:24',
  'This do in remembrance of me.',
  '1 Corinthians 11:24',
  'This do in remembrance of me.',
  $$Some moments are too important to forget.

On the night before the cross, Jesus gathered with His disciples and transformed an ancient meal of remembrance into something new and eternal.

The bread would remind them of His body given for them.

The cup would remind them of His blood poured out for the forgiveness of sins.

Communion became more than ritual.

It became remembrance.

The Passover had pointed Israel backward toward deliverance from Egypt.

The Lord's Supper points believers toward the greater deliverance accomplished through Christ.

Every time believers gather around the table, they proclaim the Gospel once again.

Christ came.

Christ died.

Christ rose again.

Christ will come again.

The Way of Quiet Light reminds us that remembrance changes us.

The cross humbles pride.

The empty tomb restores hope.

Grace silences accusation.

Mercy softens hard hearts.

When we remember what Christ has done for us, worship becomes the natural response.

Communion is not merely looking backward.

It is looking upward in gratitude.

Looking inward in self-examination.

Looking outward in unity with the Body of Christ.

And looking forward to the day we will feast with our King in His Kingdom.

Today, spend time reflecting upon the cross.

Do not rush past it.

Stand there for a while.

The love displayed there remains the greatest reason for worship the world has ever known.$$,
  $$Heavenly Father,

Thank You for the sacrifice of Jesus Christ and for the salvation purchased through His blood. Guard me from ever becoming casual about the cross. Fill my heart with gratitude, humility, and wonder as I remember what my Savior has done for me. May remembrance continually lead me into deeper worship.

In the name of Jesus Christ, Amen.$$,
  'Has the wonder of the cross become too familiar in my heart?',
  'Read one of the Gospel accounts of Christ''s crucifixion slowly and prayerfully, thanking Him for each act of love He demonstrated through His sacrifice.',
  'The cross remains the center of Christian worship because it reveals the depth of God''s love.',
  '2026-10-24'
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
