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
  'day-114-rest-for-the-soul',
  'Rest for the Soul',
  'Holy rest becomes worship when weary believers trust Christ enough to stop striving and receive the peace of His presence.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  114,
  'Worship Through Holy Rest',
  'Exodus 20:8-11',
  'Matthew 11:28-30',
  'Matthew 11:28',
  'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
  'Matthew 11:28',
  'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
  $$Many people know how to work.

Far fewer know how to rest.

God Himself established the rhythm of work and rest at creation. The Sabbath was never intended as a burden but as a gift—a reminder that the world continues turning even when we stop striving.

Rest is an act of trust.

When we rest, we acknowledge that God remains sovereign while we sleep.

Jesus extended this invitation to weary souls:

"Come unto me."

Notice that He did not merely promise answers.

He promised Himself.

The deepest rest is not found in vacations, possessions, or perfect circumstances.

It is found in the presence of Christ.

The Way of Quiet Light reminds us that worship includes receiving as well as giving.

Some believers become so busy serving God that they forget how to sit quietly with Him.

Martha busied herself with many responsibilities while Mary chose the better portion by sitting at Jesus' feet.

Both service and rest have their place.

The soul needs both.

There are burdens we were never meant to carry.

There are worries we were never meant to control.

There are anxieties Christ invites us to place into His hands.

Today, release the burden.

Slow the pace.

Breathe deeply.

Sit quietly in God's presence.

The Shepherd who leads beside still waters still invites His sheep to rest.

And His invitation remains open:

"Come unto me."$$,
  $$Heavenly Father,

Thank You for the gift of rest. Forgive me for the times I have carried burdens You never intended me to bear. Teach me to trust You enough to stop striving and to rest in Your care. Refresh my spirit and remind me that my worth is not found in my productivity but in belonging to Jesus Christ.

In His holy name, Amen.$$,
  'Am I allowing myself to receive the rest that God lovingly offers?',
  'Set aside time today for intentional rest with God—without productivity, obligation, or distraction—simply enjoying His presence.',
  'Holy rest is an act of worship because it trusts God to carry what we cannot.',
  '2026-10-22'
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
