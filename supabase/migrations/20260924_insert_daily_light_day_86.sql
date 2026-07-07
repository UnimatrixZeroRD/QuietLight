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
  'day-86-children-of-the-light',
  'Children of the Light',
  'Children of the light reflect Christ in a dark world through honesty, purity, compassion, forgiveness, truth, hope, and faithful surrender.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  86,
  'Reflecting Christ in a Dark World',
  'Isaiah 60:1-3',
  'Ephesians 5:8-17',
  'Ephesians 5:8',
  'For ye were sometimes darkness, but now are ye light in the Lord: walk as children of light.',
  'Ephesians 5:8',
  'For ye were sometimes darkness, but now are ye light in the Lord: walk as children of light.',
  $$The world does not simply need more opinions.

It needs more light.

Before coming to Christ, we all walked in spiritual darkness. Sin clouded our understanding, distorted our priorities, and separated us from the God who is Himself Light. Yet through Jesus Christ, we have been brought into a new life.

Paul reminds believers that we are no longer merely people who possess light.

We are children of light.

This new identity calls us to live differently.

Isaiah looked forward to the day when God's light would rise upon His people and draw the nations to His glory. That prophecy finds its fulfillment in Jesus Christ, the Light of the world, whose light now shines through His Church.

The Way of Quiet Light reminds us that light is most noticeable where darkness is greatest.

We shine when we choose honesty over deception.

Purity over compromise.

Compassion over indifference.

Forgiveness over revenge.

Truth over falsehood.

Hope over despair.

These choices may seem ordinary.

Yet together they reveal the character of Christ to a watching world.

Notice that Paul does not tell believers to create light.

He tells them to walk in the light they have already received.

The closer we remain to Christ, the more naturally His light is reflected through our lives.

Today, remember whose light you carry.

Wherever you go, you represent the King.

Walk carefully.

Love generously.

Speak graciously.

Serve faithfully.

And let the light of Christ quietly shine through every part of your life.$$,
  $$Heavenly Father,

Thank You for bringing me out of darkness into Your marvelous light through Jesus Christ. Help me to walk as a child of light in every area of my life. Let my thoughts, words, and actions reflect Your holiness, love, and truth. May others see Christ in me and be drawn to the hope that is found in Him alone.

In the name of Jesus Christ, Amen.$$,
  'In what area of my life can the light of Christ shine more clearly?',
  'Make one intentional choice today that reflects the character of Christ, even if no one else notices.',
  'The light of Christ is seen most clearly through ordinary lives faithfully surrendered to Him.',
  '2026-09-24'
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
