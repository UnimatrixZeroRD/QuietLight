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
  'day-133-never-truly-alone',
  'Never Truly Alone',
  'Loneliness can become a quiet storm, yet believers are never abandoned because God''s presence rests on His promise, not their feelings.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  133,
  'God''s Presence in Loneliness',
  'Psalm 139:1-18',
  'Hebrews 13:5-8',
  'Hebrews 13:5',
  'I will never leave thee, nor forsake thee.',
  'Hebrews 13:5',
  'I will never leave thee, nor forsake thee.',
  $$Loneliness is one of the quietest storms a person can face.

It can exist in crowded rooms.

In busy homes.

In workplaces filled with people.

A person may be surrounded by others and still feel deeply alone.

Scripture recognizes this reality.

David often cried out from places of isolation and abandonment. Yet even in those moments he found comfort in a remarkable truth:

There was nowhere he could go where God was not already present.

If he rose to the heavens, God was there.

If he descended into the depths, God was there.

If he traveled to the farthest sea, God was there.

The Lord's presence was not dependent upon circumstances or emotions.

Neither is His presence with us.

Jesus promised His disciples,

"Lo, I am with you alway."

Not only in seasons of joy.

Not only in seasons of strength.

Always.

The Way of Quiet Light reminds us that solitude and loneliness are not the same thing.

Solitude can become sacred space where we become more aware of God's presence.

Loneliness whispers,

"You are abandoned."

God answers,

"I am here."

You may not always feel His presence.

You may not always recognize His work.

But feelings do not determine reality.

The Shepherd remains near to His sheep.

The Father remains near to His children.

The Savior remains near to His disciples.

If loneliness has become your companion, remember this:

You are not walking alone.

The Lord has been beside you every step of the journey.$$,
  $$Heavenly Father,

When loneliness feels overwhelming, remind me that Your presence never leaves me. Help me recognize Your nearness even when my emotions struggle to believe it. Thank You for Your promise that You will never forsake Your children. Teach me to rest securely in Your companionship through Jesus Christ.

In His holy name, Amen.$$,
  'Am I measuring God''s presence by my feelings or by His promises?',
  'Spend a few moments today simply sitting quietly and reminding yourself of God''s promise: "I will never leave thee, nor forsake thee."',
  'The believer is never truly alone, for Christ walks every road beside them.',
  '2026-11-10'
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
