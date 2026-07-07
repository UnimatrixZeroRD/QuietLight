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
  'day-108-resting-in-his-love',
  'Resting in His Love',
  'The soul rests when it receives the secure, unchanging love of God in Christ rather than striving to earn acceptance.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  108,
  'The Peace of Being Fully Loved',
  'Zephaniah 3:14-17',
  'Romans 8:31-39',
  '1 John 4:19',
  'We love him, because he first loved us.',
  '1 John 4:19',
  'We love him, because he first loved us.',
  $$Many people spend their lives trying to earn acceptance.

They strive to become successful enough.

Respected enough.

Good enough.

Yet the Gospel begins with a different message.

Before we ever loved God, He loved us.

Before we sought Him, He sought us.

Before we could offer Him anything, Christ gave Himself for us.

Paul triumphantly declares that nothing can separate believers from the love of God which is in Christ Jesus our Lord.

Not hardship.

Not persecution.

Not failure.

Not death.

Not any created thing.

His love remains constant because it rests upon His unchanging character rather than our changing performance.

Zephaniah paints a beautiful picture of God's delight in His redeemed people.

"The LORD thy God in the midst of thee is mighty... he will rejoice over thee with joy... he will rest in his love."

What an astonishing thought.

The Almighty God delights in those He has redeemed.

The Way of Quiet Light reminds us that worship blossoms wherever believers rest securely in this love.

We no longer obey in order to earn acceptance.

We obey because we are already loved.

We no longer serve from fear.

We serve from gratitude.

We no longer approach God as distant strangers.

We come as beloved children welcomed into our Father's embrace.

Today, stop striving to earn what Christ has already secured.

Rest.

Receive His love.

Allow that love to quiet every anxious heart and silence every accusing voice.

The One who called you His own will never abandon you.

His love is stronger than your weakness.

Greater than your fears.

And everlasting beyond measure.$$,
  $$Heavenly Father,

Thank You for loving me with an everlasting love through Jesus Christ. Help me rest securely in that love instead of striving to earn what You have freely given by grace. Let Your love quiet my fears, strengthen my faith, and overflow through my life toward others. May every act of worship become a grateful response to the love You first showed me.

In the name of Jesus Christ, Amen.$$,
  'Am I living as someone who knows they are deeply loved by God, or am I still trying to earn His acceptance?',
  'Read Romans 8:31-39 slowly today. Pause after each promise and thank God that His love in Christ is secure and unchanging.',
  'The soul finds its deepest rest when it finally believes it is fully loved by God.',
  '2026-10-16'
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
