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
  'day-96-be-still-before-the-lord',
  'Be Still Before the Lord',
  'Stillness before God is trustful worship, making room to hear His Word, rest in His presence, and quiet the soul.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  96,
  'Listening in the Quiet',
  '1 Kings 19:9-13',
  'Luke 10:38-42',
  'Psalm 46:10',
  'Be still, and know that I am God.',
  'Psalm 46:10',
  'Be still, and know that I am God.',
  $$Our world is filled with noise.

Conversations.

Notifications.

Deadlines.

Opinions.

Endless distractions compete for our attention each day.

Yet throughout Scripture, God repeatedly invites His people into quiet places where His voice can be heard.

Elijah expected the Lord to appear in dramatic displays of power.

There was a mighty wind.

An earthquake.

A fire.

Yet the Lord chose to reveal Himself through a still small voice.

God is not limited by silence.

Often, silence is where we hear Him most clearly.

Mary understood this when she sat at the feet of Jesus while Martha busied herself with many responsibilities. Martha's work was valuable, but Mary recognized that communion with Christ must come first.

The Way of Quiet Light has always treasured this sacred rhythm.

There is a time to work.

A time to serve.

A time to speak.

And there is a holy time to simply be still before God.

Stillness is not laziness.

It is trust.

It is choosing to believe that the world continues turning while we rest in our Father's presence.

In stillness we remember who God is.

We remember who we are.

We allow His Word to quiet our fears and steady our hearts.

Many answers are not found by striving harder.

They are discovered by lingering longer in God's presence.

Today, intentionally step away from the noise.

Turn off the distractions.

Open the Scriptures.

Sit quietly before your Heavenly Father.

You may discover that what your soul has been longing for is not another answer—

but His presence.$$,
  $$Heavenly Father,

Teach me to quiet my heart before You. Remove the distractions that pull my attention away from Your presence. Help me to value stillness, to listen carefully for Your voice through Your Word, and to rest confidently in Your love. May I learn to treasure time with You above every earthly distraction.

In the name of Jesus Christ, Amen.$$,
  'What distractions most often prevent me from spending quiet time with God?',
  'Set aside at least thirty uninterrupted minutes today for silence, Scripture, and prayer. Resist the urge to hurry. Simply remain in God''s presence.',
  'God often speaks most clearly to hearts that have learned the sacred discipline of stillness.',
  '2026-10-04'
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
