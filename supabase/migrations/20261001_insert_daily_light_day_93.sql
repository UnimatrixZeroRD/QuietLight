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
  'day-93-a-heart-of-thanksgiving',
  'A Heart of Thanksgiving',
  'Gratitude becomes worship when the heart remembers God''s faithfulness, recognizes His blessings, and responds with continual praise.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  93,
  'Worship Through Gratitude',
  'Psalm 100',
  'Colossians 3:12-17',
  '1 Thessalonians 5:18',
  'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  '1 Thessalonians 5:18',
  'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  $$Gratitude is one of the purest expressions of worship.

A thankful heart recognizes that every good gift ultimately comes from the hand of God. It sees His provision in both extraordinary moments and ordinary blessings. It acknowledges His faithfulness even when circumstances remain difficult.

The psalmist calls all the earth to "enter into his gates with thanksgiving, and into his courts with praise." Notice that thanksgiving is not merely the conclusion of worship—it is often the doorway through which worship begins.

When we remember God's goodness, our hearts naturally respond with praise.

Paul encourages believers to let the peace of Christ rule in their hearts and then simply adds,

"And be ye thankful."

Gratitude changes the atmosphere of the soul.

It softens bitterness.

It weakens anxiety.

It quiets envy.

It strengthens contentment.

The Way of Quiet Light reminds us that thanksgiving does not ignore hardship.

Rather, it chooses to recognize God's faithfulness even within it.

The thankful believer notices the sunrise.

The daily bread.

The encouraging word.

The forgiveness found in Christ.

The quiet answer to prayer.

The strength to face another day.

These simple mercies become reasons for continual praise.

There will always be circumstances we wish were different.

Yet there will always be reasons to thank God.

The cross remains.

The empty tomb remains.

His promises remain.

His presence remains.

Today, allow gratitude to become your first response instead of your last.

The worshiping heart is rarely found complaining.

It is most often found giving thanks.$$,
  $$Heavenly Father,

Thank You for Your countless blessings, both seen and unseen. Forgive me for the times I have focused more upon what I lack than upon all You have graciously provided. Fill my heart with continual gratitude, and let thanksgiving become a daily expression of my worship. May my life overflow with praise because of Your unfailing goodness.

In the name of Jesus Christ, Amen.$$,
  'Have I spent more time noticing my burdens or God''s blessings?',
  'Write down ten specific things for which you are thankful today, and thank God for each one by name.',
  'Gratitude opens the heart to worship because it remembers the faithfulness of God.',
  '2026-10-01'
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
