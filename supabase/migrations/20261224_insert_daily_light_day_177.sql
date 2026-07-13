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
  'day-177-the-joy-set-before-him',
  'The Joy Set Before Him',
  'Christlike joy is rooted in faithful obedience, looking beyond present hardship toward God''s fruitful purposes.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  177,
  'Joy Rooted in Faithful Obedience',
  'Psalm 16:5-11',
  'Hebrews 12:1-3',
  'Hebrews 12:2',
  'Who for the joy that was set before him endured the cross, despising the shame.',
  'Hebrews 12:2',
  'Who for the joy that was set before him endured the cross, despising the shame.',
  $$Joy is often mistaken for comfort.

We assume joy must disappear whenever life becomes painful, demanding, or uncertain.

Jesus reveals something deeper.

He endured the cross because of the joy set before Him.

This does not mean the suffering was pleasant.

Gethsemane shows us otherwise.

Christ felt the full weight of sorrow, anguish, betrayal, and pain. Yet beyond the suffering stood redemption.

Reconciliation.

Resurrection.

A people restored to God.

His joy was rooted not in the ease of the moment, but in the faithfulness and fruitfulness of the Father's will.

The psalmist speaks of fullness of joy in God's presence and pleasures at His right hand forevermore. Lasting joy is not found in avoiding every hardship. It is found in belonging to God and walking faithfully within His purposes.

The Way of Quiet Light reminds us that Christlike joy can exist beside sorrow.

It sings softly through tears.

It gives thanks while waiting.

It continues serving while tired.

It trusts that obedience offered today will bear fruit in God's time.

Joy becomes fragile when it depends upon circumstances remaining pleasant. It becomes steadfast when anchored in Christ.

There are responsibilities we may not enjoy.

Sacrifices we would not have chosen.

Seasons that require endurance.

Yet when we know whom we serve and why faithfulness matters, joy can remain beneath the difficulty like a steady current beneath rough water.

This kind of joy is not forced cheerfulness.

It does not pretend everything is fine.

It is the quiet confidence that no act of obedience offered to God is wasted.

Today, look beyond immediate discomfort.

Ask what faithful love may accomplish through the step before you.

The road may be difficult.

But joy can still travel it with you.$$,
  $$Heavenly Father,

Teach me to find joy in Your presence and in faithful obedience to Your will. When the path becomes difficult, help me look beyond temporary discomfort toward the good purposes You are accomplishing. Keep my eyes fixed upon Jesus, who endured for my sake, and fill me with joy that circumstances cannot take away.

In the name of Jesus Christ, Amen.$$,
  'Have I allowed a difficult season to convince me that joy is no longer possible?',
  'Complete one difficult but necessary act of obedience today with gratitude, remembering whom you are serving.',
  'Christlike joy does not require an easy road; it requires a faithful destination.',
  '2026-12-24'
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
