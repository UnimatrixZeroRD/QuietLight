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
  'day-100-my-soul-thirsts-for-you',
  'My Soul Thirsts for You',
  'The deepest longing of the human soul can only be satisfied by God Himself, the true treasure and living water of His people.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  100,
  'Finding Our Deepest Satisfaction in God',
  'Psalm 63:1-8',
  'John 7:37-39',
  'Psalm 63:1',
  'O God, thou art my God; early will I seek thee: my soul thirsteth for thee.',
  'Psalm 63:1',
  'O God, thou art my God; early will I seek thee: my soul thirsteth for thee.',
  $$Every human heart is searching for something.

Many seek success.

Others pursue wealth, recognition, comfort, or pleasure.

Yet no earthly achievement can fully satisfy the deepest longings of the soul.

Only God can do that.

David wrote Psalm 63 while in the wilderness.

He lacked comfort.

He lacked security.

He was separated from the sanctuary where he loved to worship.

Yet his greatest longing was not for safety or prosperity.

It was for God Himself.

"My soul thirsteth for thee."

Jesus extended that same invitation centuries later.

"If any man thirst, let him come unto me, and drink."

He alone satisfies the deepest hunger of the human heart because He alone gives the living water that never runs dry.

The Way of Quiet Light reminds us that worship reaches its highest expression when we seek God not merely for His gifts but for Himself.

His blessings are wonderful.

His provision is generous.

His promises are precious.

But He Himself is our greatest treasure.

As we draw near to Him, we discover a peace the world cannot offer.

A joy circumstances cannot remove.

A hope that never fades.

The more we know Him, the more we desire Him.

The more we worship Him, the more we recognize that He alone is worthy.

Today, examine your heart honestly.

What are you truly thirsting for?

Whatever cannot satisfy will eventually disappoint.

The Lord never will.

Come to Christ.

Drink deeply.

Rest completely.

Your soul was created for fellowship with Him.$$,
  $$Heavenly Father,

You alone can satisfy the deepest longings of my heart. Guard me from seeking ultimate fulfillment in temporary things, and draw me into deeper fellowship with You through Jesus Christ. Fill my soul with Your presence, Your peace, and Your joy. May my greatest desire always be to know and love You more.

In the name of Jesus Christ, Amen.$$,
  'What am I looking to for satisfaction that only God can truly provide?',
  'Spend time today in quiet worship without asking God for anything. Simply seek His presence and thank Him that He Himself is your greatest treasure.',
  'The soul finds lasting rest only when it discovers that God Himself is enough.',
  '2026-10-08'
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
