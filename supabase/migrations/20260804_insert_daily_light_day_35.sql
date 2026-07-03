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
  'day-35-faith-that-endures',
  'Faith That Endures',
  'Enduring faith perseveres through every season by fixing its eyes on Jesus, the author and finisher of our faith.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  35,
  'Persevering Until the End',
  'Habakkuk 3:17-19',
  'Hebrews 12:1-3',
  'Hebrews 12:1-2',
  'Let us run with patience the race that is set before us, looking unto Jesus the author and finisher of our faith.',
  'Hebrews 12:1-2',
  'Let us run with patience the race that is set before us, looking unto Jesus the author and finisher of our faith.',
  $$The Christian life is often described as a journey, but Scripture also describes it as a race.

Unlike a sprint, this race is not won through bursts of enthusiasm. It is completed through steady perseverance. There will be seasons when the path feels light and joyful, and there will be seasons when every step requires determination. In both, Christ remains our constant companion.

The writer of Hebrews reminds us that we are surrounded by a great cloud of witnesses—men and women who trusted God through trials, persecution, disappointment, and uncertainty. Their lives testify that faith is not measured by an easy road but by faithful endurance.

Habakkuk understood this deeply. He looked ahead to a time when the fields would produce no crops, the vineyards would be empty, and the flocks would disappear. Every outward sign of prosperity would be gone. Yet he declared, "Yet I will rejoice in the LORD, I will joy in the God of my salvation."

That is enduring faith.

It does not ignore hardship. It simply refuses to allow hardship to become the final word. Its confidence rests in the unchanging character of God rather than in changing circumstances.

The Way of Quiet Light reminds us that perseverance is built one faithful day at a time. We are not asked to carry tomorrow's burdens today. We are called to walk faithfully with Christ in this moment, trusting Him to provide grace for whatever tomorrow may bring.

There may be days when your faith feels strong and others when it feels fragile. Remember that your salvation rests not upon the strength of your grip on Christ, but upon the strength of His grip on you.

Keep your eyes upon Jesus.

He endured the cross for the joy set before Him. He understands every burden you carry and promises to sustain you until the journey is complete.

Do not lose heart.

The race is long, but the One who calls you is faithful.$$,
  $$Heavenly Father,

Strengthen me to persevere with faith and patience. When I grow weary, lift my eyes toward Jesus, who endured for my sake. Help me to trust You through every season, knowing that You are faithful to complete the work You have begun in me. Let my life become a testimony of steadfast hope and enduring faith.

In the name of Jesus Christ, Amen.$$,
  'Where have I become discouraged, and how can I fix my eyes upon Christ instead of my circumstances?',
  'Encourage someone who is struggling in their faith. Share a Scripture that has strengthened your own heart during difficult times.',
  'Faith endures not because the road is easy, but because Christ walks every step beside us.',
  '2026-08-04'
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
