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
  'day-85-faithful-until-the-end',
  'Faithful Until the End',
  'Believers endure with perseverance by laying aside every weight, fixing their eyes upon Jesus, and continuing faithfully in every season.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  85,
  'Enduring with Perseverance',
  'Habakkuk 3:17-19',
  'Hebrews 12:1-3',
  'Hebrews 12:1-2',
  'Let us run with patience the race that is set before us, looking unto Jesus the author and finisher of our faith.',
  'Hebrews 12:1-2',
  'Let us run with patience the race that is set before us, looking unto Jesus the author and finisher of our faith.',
  $$Every believer is running a race.

Some seasons are filled with joy and visible victories.

Others are marked by weariness, disappointment, and difficult climbs. Yet the goal of the Christian life is not merely to begin the race with enthusiasm. It is to finish it faithfully.

The writer of Hebrews reminds us to lay aside every weight that slows our progress. Some burdens are sinful habits that entangle us. Others may be distractions that consume our attention without drawing us closer to Christ. Wisdom is learning the difference.

Above all, we are called to keep our eyes fixed upon Jesus.

He is both the Author of our faith and its Perfecter.

He endured rejection, suffering, injustice, and the cross itself because He looked beyond present pain to the joy set before Him.

Habakkuk demonstrated the same confidence.

Even if the fields produced no food and the vineyards yielded no grapes, he declared that he would still rejoice in the Lord. His circumstances did not determine his faithfulness.

His God did.

The Way of Quiet Light reminds us that endurance is often quiet.

It is choosing to pray when prayer feels difficult.

To worship when the heart feels heavy.

To forgive when wounds remain tender.

To obey when the path is uncertain.

These daily choices strengthen our faith more than dramatic moments ever could.

Do not grow weary.

The Lord who called you continues to walk beside you.

Every step taken in faith draws you closer to the finish line He has prepared.

Run faithfully.

Run patiently.

Run with your eyes upon Christ.$$,
  $$Heavenly Father,

Strengthen me to endure every trial with steadfast faith. Help me lay aside anything that keeps me from following You wholeheartedly. Fix my eyes upon Jesus, and give me perseverance to remain faithful until the race You have set before me is complete. Let my life glorify You in every season.

In the name of Jesus Christ, Amen.$$,
  'What weight or distraction do I need to lay aside so I can follow Christ more faithfully?',
  'Identify one habit, distraction, or unnecessary burden that has been slowing your spiritual growth, and take one practical step toward removing it.',
  'Faithfulness is measured not by how quickly we run, but by whether we continue following Christ.',
  '2026-09-23'
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
