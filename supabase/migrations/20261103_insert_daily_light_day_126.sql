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
  'day-126-beauty-from-ashes',
  'Beauty from Ashes',
  'God does not deny the reality of loss, but He is able to bring redemption, grace, wisdom, mercy, and new life from broken places.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  126,
  'God''s Redemption in Broken Places',
  'Isaiah 61:1-3',
  'Romans 8:18-28',
  'Isaiah 61:3',
  'To appoint unto them that mourn in Zion, to give unto them beauty for ashes.',
  'Isaiah 61:3',
  'To appoint unto them that mourn in Zion, to give unto them beauty for ashes.',
  $$There are losses that cannot be undone.

Words that cannot be unsaid.

Years that cannot be reclaimed.

Dreams that seem buried beneath the ashes of disappointment and grief.

Scripture never asks us to pretend these losses are insignificant.

Jesus Himself wept at the tomb of Lazarus.

God understands sorrow.

Yet Isaiah offers a remarkable promise:

Beauty for ashes.

Not the denial of ashes.

Not pretending the fire never happened.

But redemption arising from what seemed destroyed.

Paul echoes this hope when he declares that God works all things together for good for those who love Him and are called according to His purpose.

This does not mean all things are good.

Some things are genuinely tragic.

Painful.

Unjust.

Broken.

The promise is not that everything is good.

The promise is that God is able to work through everything.

The Way of Quiet Light reminds us that some of the brightest lanterns shine because they were first broken open.

Compassion often grows from suffering.

Wisdom often grows from mistakes.

Mercy often grows from wounds that have healed.

The scars remain.

But so does grace.

Perhaps you are standing among ashes today.

If so, know this:

The God of resurrection specializes in places where hope appears lost.

He is not finished with your story.

The ashes are not the final chapter.$$,
  $$Heavenly Father,

Thank You that You are able to bring beauty from ashes and hope from sorrow. Help me trust You with the broken places in my life that I do not understand. Heal what has been wounded, restore what has been lost according to Your will, and teach me to see Your hand even in difficult seasons. May Your grace write redemption into every chapter of my story.

In the name of Jesus Christ, Amen.$$,
  'Is there a painful area of my life that I have stopped believing God can redeem?',
  'Bring one broken place in your life before God today and simply pray, "Lord, I trust You with these ashes."',
  'God rarely wastes pain. In His hands, even ashes can become the soil of new life.',
  '2026-11-03'
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
