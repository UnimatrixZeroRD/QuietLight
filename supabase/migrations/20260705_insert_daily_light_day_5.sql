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
  'day-5-a-heart-that-hears',
  'A Heart That Hears',
  'A heart that hears learns to quiet the noise of the world, listen for the Shepherd''s voice, and obey the Word of God with humility.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  5,
  'Listening for the Voice of God',
  '1 Samuel 3:1-10',
  'John 10:1-18',
  '1 Samuel 3:10',
  'Speak; for thy servant heareth.',
  '1 Samuel 3:10',
  'Speak; for thy servant heareth.',
  $$The world is full of voices.

Every day we are surrounded by opinions, advertisements, entertainment, fears, and distractions that compete for our attention. In such constant noise, it becomes difficult to recognize the quiet voice of the Lord.

Young Samuel experienced this firsthand. When God called his name during the night, Samuel assumed it was Eli speaking. Only after repeated calls did Eli realize that the Lord Himself was speaking to the boy. Samuel's simple reply became one of the most beautiful prayers in all of Scripture: "Speak; for thy servant heareth."

Centuries later, Jesus described Himself as the Good Shepherd whose sheep know His voice. They follow Him because they have learned to recognize the Shepherd who loves them, protects them, and leads them into abundant life.

Learning to hear God's voice is not about seeking dramatic signs or extraordinary experiences. Most often, God speaks through His written Word, through prayer, through the conviction of the Holy Spirit, and through the wisdom of faithful believers. His voice never contradicts His character or His Scriptures.

The Way of Quiet Light encourages a life that intentionally creates space for God to speak. Silence is not emptiness; it is an invitation. When we quiet our own ambitions, fears, and constant activity, we become more attentive to the gentle leading of our Shepherd.

This kind of listening requires humility. It asks us to approach God not with demands but with open hands. Instead of saying, "Lord, bless my plans," we learn to pray, "Lord, show me Yours."

As you begin today, resist the temptation to fill every quiet moment with distraction. Open the Scriptures. Pray sincerely. Listen patiently. The Shepherd still calls His sheep by name, and He remains faithful to lead those who are willing to follow.$$,
  $$Heavenly Father,

Teach me to recognize Your voice above every distraction. Quiet the noise within my heart and help me to delight in Your Word. Give me a servant's spirit that eagerly listens and willingly obeys. Lead me by Your Holy Spirit, and grant me wisdom to follow wherever Christ calls me.

In the name of Jesus Christ, Amen.$$,
  'What voices have I allowed to become louder than God''s voice in my daily life?',
  'Spend at least fifteen uninterrupted minutes reading Scripture in silence before beginning your regular routine. Ask only one question: "Lord, what would You have me learn today?"',
  'God often speaks most clearly when we have finally become quiet enough to listen.',
  '2026-07-05'
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
