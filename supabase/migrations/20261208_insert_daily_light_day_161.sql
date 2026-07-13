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
  'day-161-wisdom-from-above',
  'Wisdom from Above',
  'The wisdom of Christ joins truth, grace, timing, humility, mercy, and discernment, leading toward peace rather than selfish ambition.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  161,
  'Learning the Wisdom of Christ',
  'Proverbs 3:1-8',
  'James 3:13-18',
  'James 3:17',
  'But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated...',
  'James 3:17',
  'But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated...',
  $$Knowledge tells us what is true.

Wisdom teaches us what to do with it.

Many people possess information.

Far fewer possess wisdom.

Jesus displayed perfect wisdom throughout His earthly ministry.

He knew when to speak and when to remain silent.

When to confront and when to withdraw.

When to teach publicly and when to teach privately.

His responses consistently revealed truth, grace, timing, and discernment working together.

James contrasts earthly wisdom with heavenly wisdom.

Earthly wisdom often seeks advantage.

Recognition.

Control.

Victory over opponents.

Wisdom from above is different.

It is pure.

Peaceable.

Gentle.

Reasonable.

Full of mercy.

The Way of Quiet Light reminds us that wisdom rarely shouts.

It listens carefully.

It asks questions before making assumptions.

It seeks understanding before judgment.

It values truth more than winning arguments.

Many of life's decisions involve more than determining right from wrong.

Often we must choose between what is good and what is best.

Wisdom helps us recognize the difference.

Scripture repeatedly teaches that the fear of the Lord is the beginning of wisdom.

This does not mean terror.

It means reverence.

Humility.

The recognition that God's understanding exceeds our own.

The wise person therefore remains teachable.

They do not assume they already know enough.

Today, ask God not merely for information but for wisdom.

The Lord delights in giving wisdom generously to those who seek it.

And wisdom rooted in Christ always leads toward peace, humility, and love.$$,
  $$Heavenly Father,

Grant me wisdom that comes from above rather than merely human understanding. Teach me to listen carefully, speak thoughtfully, and act with discernment. Guard me from pride, haste, and selfish ambition. May the wisdom of Jesus Christ shape my decisions and guide my relationships.

In His holy name, Amen.$$,
  'In my decision-making, do I seek God''s wisdom first or only my own understanding?',
  'Before making an important decision today, pause and ask God specifically for wisdom rather than simply for success.',
  'Wisdom begins when we trust God''s understanding more than our own.',
  '2026-12-08'
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
