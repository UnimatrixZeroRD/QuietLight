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
  'day-91-worship-in-spirit-and-truth',
  'Worship in Spirit and Truth',
  'True worship offers God a sincere heart shaped by both devotion and the truth of His Word.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  91,
  'Offering God True Worship',
  'Psalm 95:1-7',
  'John 4:19-26',
  'John 4:23',
  'But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth.',
  'John 4:23',
  'But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth.',
  $$Worship begins long before a song is sung.

It begins with the posture of the heart.

When Jesus spoke with the Samaritan woman at the well, the conversation turned toward worship. She asked where people ought to worship—on one mountain or another. Jesus gently lifted her eyes beyond locations and ceremonies toward something far greater.

The Father seeks worshippers.

Not merely people who attend worship.

Not merely people who know the songs.

He seeks hearts that love Him sincerely and draw near to Him in spirit and in truth.

Spirit without truth becomes emotion without foundation.

Truth without spirit becomes knowledge without devotion.

True worship joins both together.

It is a heart captivated by the greatness of God and guided by the truth of His Word.

The psalmist invites God's people to sing with joy, bow in reverence, and kneel before their Maker. Worship includes celebration, gratitude, reverence, humility, confession, and awe.

The Way of Quiet Light reminds us that worship is often quiet.

It may be found in a whispered prayer before sunrise.

In reading God's Word with an attentive heart.

In tears of repentance.

In moments of gratitude.

In silent awe while considering the majesty of creation.

These moments are precious because they draw us nearer to the One who is worthy of all praise.

Today, do not ask only,

"What can I receive from worship?"

Instead ask,

"How may I offer my heart to the Lord?"

The Father is not searching for perfect voices.

He is seeking devoted hearts.$$,
  $$Heavenly Father,

You alone are worthy of all worship, honor, and praise. Draw my heart closer to You and teach me to worship in spirit and in truth. Remove every distraction that keeps me from delighting in Your presence. May my worship be sincere, humble, and centered upon Jesus Christ, who has opened the way into Your presence.

In His holy name, Amen.$$,
  'Do I approach worship primarily to receive from God, or to offer Him the love and honor He deserves?',
  'Spend fifteen uninterrupted minutes simply praising God for who He is rather than asking Him for anything.',
  'True worship begins when our hearts become more occupied with God than with ourselves.',
  '2026-09-29'
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
