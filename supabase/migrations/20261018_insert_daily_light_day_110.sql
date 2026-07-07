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
  'day-110-the-heart-of-worship',
  'The Heart of Worship',
  'Worship is the atmosphere of a life surrendered to Christ, continually drawing near to God and faithfully reflecting His light.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  110,
  'Offering Ourselves Completely to God',
  'Psalm 84:1-12',
  'Hebrews 10:19-25',
  'Hebrews 10:22',
  'Let us draw near with a true heart in full assurance of faith.',
  'Hebrews 10:22',
  'Let us draw near with a true heart in full assurance of faith.',
  $$Over these past thirty days, we have walked together into the heart of worship.

We have learned that worship begins with truth and grows through gratitude.

It deepens through reverence.

It is purified by repentance.

It is strengthened by prayer.

It flourishes in stillness.

It delights in God's Word.

It rests in His love.

And ultimately, it becomes the continual posture of a life surrendered to Christ.

The psalmist declared that a single day in God's courts was better than a thousand elsewhere.

His greatest desire was not earthly success.

It was nearness to God.

The writer of Hebrews reminds us that through the sacrifice of Jesus Christ, we now have boldness to enter God's presence. The veil has been removed. The invitation has been extended. We are welcomed into fellowship with our Heavenly Father through the finished work of His Son.

The Way of Quiet Light has always pointed toward this simple truth.

The lantern has never been the destination.

It merely carries the Light.

Our worship has never been about drawing attention to ourselves.

It has always been about drawing nearer to Christ, the true Light of the world.

As this volume comes to its conclusion, remember that worship is not something you leave behind when the devotional ends.

It is the atmosphere in which the Christian life is lived.

Wherever you go—

Carry gratitude.

Carry reverence.

Carry joy.

Carry peace.

Carry hope.

Carry the light of Christ.

And above all,

Carry a heart that continually seeks the presence of God.

Tomorrow a new journey begins.

The lessons will change.

The challenges will grow.

Yet the invitation remains the same.

"Draw near to God."

For every step taken toward Him is met by the faithful love of the One who has always been drawing near to us.$$,
  $$Heavenly Father,

Thank You for inviting me into a life of worship through Jesus Christ. Continue shaping my heart so that every part of my life brings You glory. Let my worship remain sincere, my faith steadfast, and my love for You continually deepen. May I never lose the wonder of Your presence or the joy of belonging to You. Receive my life as an offering of praise, today and always.

In the name of Jesus Christ, Amen.$$,
  'Looking back over this volume, how has God drawn me into a deeper understanding of worship?',
  'Spend time today reviewing the lessons God has taught you throughout this volume. Offer Him thanks, renew your commitment to seek His presence daily, and dedicate your life once again to His service.',
  'The highest expression of worship is a life that continually draws near to God and faithfully reflects the light of Christ.',
  '2026-10-18'
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
