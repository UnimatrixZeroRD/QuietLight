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
  'day-84-living-in-hope',
  'Living in Hope',
  'Kingdom hope looks forward to Christ''s return while giving eternal purpose to faithful service, holiness, perseverance, and love today.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  84,
  'Looking Forward While Serving Today',
  'Isaiah 65:17-25',
  'Titus 2:11-14',
  'Titus 2:13',
  'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ.',
  'Titus 2:13',
  'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ.',
  $$The Christian life always looks in two directions.

We faithfully serve Christ today while eagerly anticipating His return tomorrow.

This hope is not an escape from responsibility.

It is the motivation for faithful living.

Paul reminds Titus that God's grace teaches us to reject ungodliness and to live soberly, righteously, and godly in this present world as we await the appearing of Jesus Christ.

Hope produces holiness.

It encourages perseverance.

It inspires faithful service.

Isaiah looked beyond the brokenness of this present age to the promise of a new creation where sorrow, injustice, and death would no longer reign. Every promise finds its fulfillment in the eternal Kingdom of God.

The Way of Quiet Light encourages believers to hold this hope with joyful confidence.

We are not pessimists.

We are not merely observers of history.

We are servants of the coming King.

Every act of kindness anticipates His Kingdom.

Every prayer echoes His promises.

Every faithful decision declares our confidence that Christ will complete what He has begun.

Living in hope does not cause us to neglect today's responsibilities.

Instead, it gives eternal significance to them.

We plant seeds because we believe God will bring the harvest.

We forgive because we know justice belongs to Him.

We serve because we know our labor is never in vain.

We love because Christ first loved us.

Today, lift your eyes beyond the temporary.

The Kingdom is coming.

The King is faithful.

Until that day arrives, continue serving with joy, courage, and unwavering hope.$$,
  $$Heavenly Father,

Thank You for the blessed hope I have through Jesus Christ. Help me to live each day with eternity in view, faithfully serving You while eagerly awaiting the fulfillment of Your promises. Keep my heart steadfast, my faith joyful, and my eyes fixed upon the coming Kingdom.

In the name of Jesus Christ, Amen.$$,
  'Does the hope of Christ''s return shape the way I live today?',
  'Let one ordinary decision today be guided by eternal priorities rather than temporary concerns.',
  'Kingdom hope does not distract us from today''s work—it gives eternal purpose to everything we do.',
  '2026-09-22'
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
