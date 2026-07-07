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
  'day-78-standing-firm-in-hope',
  'Standing Firm in Hope',
  'Because of the resurrection, every act of service offered to Christ carries eternal significance and is never wasted in God''s Kingdom.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  78,
  'Serving with Eternal Confidence',
  'Isaiah 40:28-31',
  '1 Corinthians 15:50-58',
  '1 Corinthians 15:58',
  'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord.',
  '1 Corinthians 15:58',
  'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord.',
  $$There are days when serving Christ feels difficult.

The work may seem unnoticed.

The progress may appear slow.

The burdens may grow heavy.

In such moments, we may quietly wonder whether our labor truly matters.

Paul answers with confidence.

After proclaiming the certainty of Christ's resurrection and the future victory over death, he declares that our labor in the Lord is never in vain. Every act of obedience, every quiet prayer, every sacrifice made for Christ carries eternal significance because it is rooted in the living hope of the resurrection.

Isaiah reminds us that those who wait upon the Lord renew their strength. God's people are not sustained by their own endurance but by His unfailing power.

The Way of Quiet Light encourages believers to remain faithful even when immediate results cannot be seen.

A farmer does not harvest the day after planting.

A tree does not mature in a single season.

Likewise, the work of God's Kingdom often unfolds quietly over many years.

Some seeds you plant today may bear fruit long after you are gone.

That is not failure.

It is faithfulness.

The Lord is responsible for the harvest.

We are responsible for faithful obedience.

Today, do not measure your service by visible success.

Measure it by faithfulness to Christ.

Stand firm.

Continue serving.

Continue loving.

Continue praying.

Continue shining.

The King sees every act performed in His name, and His reward is certain.$$,
  $$Heavenly Father,

Strengthen me to remain steadfast in serving You. When I become discouraged, remind me that my labor is never wasted in Your Kingdom. Fill me with fresh hope through the resurrection of Jesus Christ, and help me continue serving with joy, patience, and unwavering faithfulness until the work You have given me is complete.

In the name of Jesus Christ, Amen.$$,
  'Have I become discouraged because I cannot yet see the results of my faithful service?',
  'Continue faithfully in one act of service you have considered giving up, trusting God with the outcome.',
  'Kingdom work is never wasted, because every faithful act is remembered by the King.',
  '2026-09-16'
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
