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
  'day-145-holding-loosely',
  'Holding Loosely',
  'Faith receives God''s gifts with gratitude while finding ultimate security in the Giver, whose goodness remains through every change.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  145,
  'Trusting God with What We Love',
  'Job 1:13-22',
  'Matthew 6:19-21',
  'Job 1:21',
  'The LORD gave, and the LORD hath taken away; blessed be the name of the LORD.',
  'Job 1:21',
  'The LORD gave, and the LORD hath taken away; blessed be the name of the LORD.',
  $$We naturally hold tightly to what we love.

Family.

Health.

Security.

Possessions.

Plans for the future.

These gifts are precious, and Scripture never teaches us to treat them carelessly. Yet it also reminds us that every good gift remains exactly that—a gift.

Job learned this truth through unimaginable loss. In a single day, nearly everything familiar was taken from him. His grief was real. He tore his clothing, fell to the ground, and mourned.

Then he worshiped.

"The LORD gave, and the LORD hath taken away; blessed be the name of the LORD."

Job's response was not emotional denial. It was a painful act of surrender. He recognized that God's worth did not depend upon the gifts remaining in his hands.

Jesus teaches us not to build our deepest security upon earthly treasures, because earthly things are fragile. They can be damaged, lost, stolen, or taken by time.

The Way of Quiet Light reminds us that holding loosely does not mean loving less.

It means loving gratefully.

We receive each blessing with joy while remembering that our ultimate security rests in the Giver rather than the gift.

This kind of faith is not easy.

It is cultivated through daily gratitude and surrender.

We thank God for what He has entrusted to us.

We care for it faithfully.

And we place it back into His hands again and again.

Perhaps fear of loss has been troubling you.

If so, do not allow fear to steal today's gratitude.

Love deeply.

Give thanks freely.

And trust the One whose goodness remains even when circumstances change.$$,
  $$Heavenly Father,

Thank You for every person, opportunity, and blessing You have entrusted to me. Help me to receive Your gifts with gratitude without making them the foundation of my security. Teach me to hold everything with open hands and to trust You through every change. May my heart remain anchored in Jesus Christ, who cannot be taken from me.

In His holy name, Amen.$$,
  'What blessing am I holding so tightly that fear of losing it has begun to steal my peace?',
  'Thank God specifically for one person or blessing you deeply value, then prayerfully entrust it again to His care.',
  'We can hold God''s gifts with open hands because the Giver never lets go of us.',
  '2026-11-22'
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
