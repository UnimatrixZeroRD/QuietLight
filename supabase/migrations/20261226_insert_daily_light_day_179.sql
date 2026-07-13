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
  'day-179-becoming-like-the-master',
  'Becoming Like the Master',
  'Christlike character is formed through the lifelong work of the Holy Spirit, slowly shaping believers into the image of Jesus.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  179,
  'The Lifelong Work of Transformation',
  'Exodus 34:29-35',
  '2 Corinthians 3:12-18',
  '2 Corinthians 3:18',
  'But we all... are changed into the same image from glory to glory, even as by the Spirit of the Lord.',
  '2 Corinthians 3:18',
  'But we all... are changed into the same image from glory to glory, even as by the Spirit of the Lord.',
  $$Spiritual growth is rarely sudden.

Most of the time, it is quiet.

Slow.

Almost invisible.

A person who spends years walking with Christ often struggles to see the changes taking place within them.

Yet others begin to notice.

Patience where anger once ruled.

Compassion where judgment once lived.

Peace where anxiety once dominated.

Humility where pride once demanded attention.

The Holy Spirit works patiently, shaping believers into the likeness of Jesus Christ.

Paul describes this process as being transformed from glory to glory.

Not instantly.

Gradually.

Faithfully.

The goal of the Christian life is not merely to know more about Christ.

It is to become more like Him.

Moses experienced something similar after meeting with God.

When he came down from the mountain, his face reflected the glory of the Lord so strongly that others could see it.

He was not aware of it himself.

That is often how spiritual maturity works.

The person becoming more like Christ rarely notices their own growth first.

Others notice the peace.

The gentleness.

The wisdom.

The faithfulness.

The Way of Quiet Light reminds us that lanterns do not create light.

They carry it.

Likewise, believers do not manufacture Christlike character through willpower alone.

We reflect what we remain close to.

The more time we spend with Christ in prayer, Scripture, worship, and obedience, the more His character quietly shapes our own.

There will still be failures.

There will still be weaknesses.

Transformation is not perfection.

It is direction.

If your life points toward Christ, the Spirit is already at work.

Do not become discouraged because growth feels slow.

Trees grow slowly.

So do souls.

Today, thank God not only for what He has done for you.

Thank Him for what He is doing within you.

The work has already begun.

And He is faithful to complete it.$$,
  $$Heavenly Father,

Thank You for the work Your Spirit is accomplishing within me. Help me not become discouraged by slow progress or remaining weakness. Continue shaping my heart, mind, words, and actions into the likeness of Jesus Christ. May I reflect His character more clearly with each passing year.

In the name of Jesus Christ, Amen.$$,
  'Looking back over the past few years, where can I see evidence that God has been changing me?',
  'Thank God for one area of growth you can recognize in your life, no matter how small it may seem.',
  'Christlike character is not produced in a moment but formed through a lifetime spent near the Light.',
  '2026-12-26'
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
