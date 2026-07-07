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
  'day-88-finishing-the-work',
  'Finishing the Work',
  'Every believer is entrusted with meaningful work, and faithfulness means completing God''s calling with focus, perseverance, humility, and worship.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  88,
  'Faithfully Completing Our Calling',
  'Nehemiah 6:1-16',
  'John 17:1-5',
  'John 17:4',
  'I have glorified thee on the earth: I have finished the work which thou gavest me to do.',
  'John 17:4',
  'I have glorified thee on the earth: I have finished the work which thou gavest me to do.',
  $$Every believer has been entrusted with a unique calling.

No two journeys are exactly alike.

Yet every calling shares the same purpose:

To glorify God by faithfully accomplishing the work He has given us.

Nehemiah understood this.

Despite opposition, false accusations, and repeated distractions, he refused to abandon the work of rebuilding Jerusalem's walls. When his enemies attempted to lure him away, he answered simply,

"I am doing a great work, so that I cannot come down."

His focus remained upon the mission God had entrusted to him.

Jesus Himself demonstrated perfect faithfulness.

As He prayed to the Father before His crucifixion, He declared that He had glorified God by faithfully completing the work entrusted to Him. Every miracle, every teaching, every act of compassion, and ultimately the cross itself fulfilled the Father's purpose.

The Way of Quiet Light reminds us that God has entrusted each believer with work that matters.

Some are called to preach.

Others to teach.

Some to encourage.

Others to serve quietly behind the scenes.

Some influence thousands.

Others faithfully love a single family.

The size of the assignment is never the measure of its importance.

Faithfulness is.

Do not compare your calling with someone else's.

Do not become distracted by recognition or discouraged by hidden service.

Simply ask each day,

"Lord, what work have You given me today?"

Then do it with all your heart.

One day, when our earthly journey is complete, may we also be able to say with humble gratitude,

"I have finished the work You gave me to do."$$,
  $$Heavenly Father,

Thank You for entrusting me with opportunities to serve Your Kingdom. Help me remain focused upon the work You have called me to do. Protect me from distraction, comparison, and discouragement. Give me perseverance to serve faithfully until every assignment You have prepared for me is complete. May my life bring glory to Jesus Christ.

In the name of Jesus Christ, Amen.$$,
  'What work has God entrusted to me that deserves greater faithfulness and attention?',
  'Identify one responsibility God has placed before you and complete it today with excellence, offering it to Him as an act of worship.',
  'Success in God''s Kingdom is not measured by prominence, but by faithful completion of the work He entrusts to us.',
  '2026-09-26'
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
