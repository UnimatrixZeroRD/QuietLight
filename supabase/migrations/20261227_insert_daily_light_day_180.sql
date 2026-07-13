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
  'day-180-the-fragrance-of-christ',
  'The Fragrance of Christ',
  'Christlike character carries the presence of Jesus into the world through kindness, truth, humility, courage, love, and quiet faithfulness.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  180,
  'Carrying Christ into the World',
  'Micah 6:6-8',
  '2 Corinthians 2:14-17',
  '2 Corinthians 2:15',
  'For we are unto God a sweet savour of Christ.',
  '2 Corinthians 2:15',
  'For we are unto God a sweet savour of Christ.',
  $$Every life leaves an influence behind.

Words linger.

Actions echo.

Character quietly shapes the atmosphere around us.

Paul describes believers as carrying the fragrance of Christ into the world.

Wherever they go, something of Jesus should accompany them.

Not because they are perfect.

But because Christ lives within them.

Some fragrances announce themselves loudly.

Others are subtle yet unmistakable.

So it is with Christian character.

People may forget our arguments.

They may forget our accomplishments.

They rarely forget how we treated them.

Did they encounter kindness?

Patience?

Integrity?

Compassion?

Humility?

Did they feel safe in our presence?

Did they glimpse something of Christ in the way we listened, served, forgave, and loved?

The Way of Quiet Light reminds us that the strongest witness is often the quiet witness.

The honest worker.

The faithful spouse.

The patient friend.

The generous neighbor.

The peaceful presence during conflict.

These ordinary acts become extraordinary when they reflect the character of Jesus.

Micah summarized God's desire beautifully:

To do justly.

To love mercy.

To walk humbly with God.

This is the life Christ lived.

This is the life His followers are called to pursue.

As this volume closes, remember:

The goal was never self-improvement.

It was resemblance.

The Christian life is not about becoming a better version of ourselves.

It is about becoming a clearer reflection of Christ.

The lantern is not the destination.

It exists to carry the flame.

Carry it well.

Carry it gently.

Carry it faithfully.

And let those who meet you encounter something of Jesus Christ through the life you live.$$,
  $$Heavenly Father,

Thank You for calling me not only to believe in Christ but to become more like Him. Help me carry His presence into every conversation, responsibility, and relationship. May my life reflect His kindness, truth, humility, courage, and love. Let others encounter something of Jesus through the way I live.

In His holy name, Amen.$$,
  'If others were asked what kind of "fragrance" my life leaves behind, what would they say?',
  'Choose one Christlike quality from this volume and intentionally practice it throughout the day.',
  'The world may never read our hearts, but it reads our character every day.',
  '2026-12-27'
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
