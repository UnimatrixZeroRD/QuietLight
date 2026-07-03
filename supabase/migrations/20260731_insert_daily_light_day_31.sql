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
  'day-31-a-new-heart',
  'A New Heart',
  'God makes His people new in Christ, replacing the heart of stone with a living heart shaped by grace and spiritual renewal.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  31,
  'The Ongoing Work of Spiritual Renewal',
  'Ezekiel 36:24-28',
  '2 Corinthians 5:17-21',
  '2 Corinthians 5:17',
  'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
  '2 Corinthians 5:17',
  'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
  $$When we come to Christ, He does far more than improve our lives—He makes us new.

Many people imagine the Christian life as little more than becoming a better version of themselves. Scripture presents something far greater. God does not simply repair what sin has broken; He begins a work of new creation within every believer.

Through the prophet Ezekiel, the Lord promised that He would remove the heart of stone and give His people a heart of flesh. This was not merely an outward change in behavior but an inward transformation of the soul. God Himself would place His Spirit within His people and enable them to walk in His ways.

That promise is fulfilled in Jesus Christ.

The moment we place our faith in Him, we are reconciled to God and begin a lifelong journey of transformation. While we continue to struggle against sin, we are no longer defined by our past. Our identity is no longer found in our failures, achievements, or reputation. It is found in Christ alone.

The Way of Quiet Light reminds us that this transformation is often quiet and gradual. A seed does not become a mighty tree overnight. Growth is usually measured over months and years rather than moments. God patiently shapes His people through daily obedience, prayer, worship, repentance, and faithful service.

Do not become discouraged if you still recognize areas where you need to grow. The very desire to become more like Christ is evidence that His Spirit is already at work within you.

Growth is not the result of striving harder but of surrendering more completely. As we continually yield ourselves to the Lord, He faithfully continues the work He has begun.

Today, leave behind the weight of yesterday's failures. You are not who you once were.

In Christ, you are being made new.$$,
  $$Heavenly Father,

Thank You for making me a new creation through Jesus Christ. Continue transforming my heart and renewing my mind each day. Remove attitudes, habits, and desires that do not honor You, and replace them with the character of Christ. Help me to trust Your ongoing work within me and to walk faithfully as the person You are shaping me to become.

In the name of Jesus Christ, Amen.$$,
  'What part of my old life is God asking me to leave behind so that I may grow more fully into the new life He has given me?',
  'Reflect upon one area where you have seen God change you since you first came to Christ. Thank Him for His continuing work of transformation.',
  'Grace not only forgives who we were—it faithfully shapes who we are becoming.',
  '2026-07-31'
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
