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
  'day-76-serving-christ-in-everyday-work',
  'Serving Christ in Everyday Work',
  'Every honest task can become an act of worship when daily responsibilities are carried out with diligence, integrity, gratitude, and faithfulness to Christ.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  76,
  'Honoring God Through Daily Responsibilities',
  'Proverbs 6:6-11',
  'Colossians 3:22-24',
  'Colossians 3:23',
  'And whatsoever ye do, do it heartily, as to the Lord, and not unto men.',
  'Colossians 3:23',
  'And whatsoever ye do, do it heartily, as to the Lord, and not unto men.',
  $$For many people, work is simply a way to earn a living.

For the follower of Christ, work becomes an opportunity to glorify God.

Whether we teach, build, farm, care for children, repair equipment, manage businesses, study, volunteer, or serve quietly behind the scenes, every honest task can become an act of worship when offered to the Lord.

Paul reminds believers that they ultimately serve Christ rather than human employers. This transforms even ordinary responsibilities. We work with diligence not merely because someone is watching, but because our Heavenly Father sees every act of faithfulness.

The writer of Proverbs points to the ant as an example of wisdom. Without constant supervision, it works diligently, preparing faithfully for what lies ahead. Likewise, God's people are called to become dependable, responsible, and trustworthy in every area of life.

The Way of Quiet Light encourages believers to approach their work with quiet excellence.

Not to impress others.

Not to gain recognition.

But because every task entrusted to us is ultimately an opportunity to honor God.

The quality of our work often becomes part of our witness.

Integrity earns trust.

Dependability reflects faithfulness.

Humility strengthens relationships.

Excellence brings glory to God.

Even unseen work matters.

The office cleaned after everyone has gone home.

The meal prepared for a family.

The patient care given to someone who is ill.

The quiet hours spent studying.

None of these escape the notice of God.

Today, whatever responsibility lies before you, receive it as an assignment from your Heavenly Father.

Serve faithfully.

Work honestly.

Rest gratefully.

The Kingdom is advanced one faithful day at a time.$$,
  $$Heavenly Father,

Thank You for the opportunities You give me to work and serve. Help me to approach every responsibility with diligence, integrity, and gratitude. May my work become an act of worship that honors You and reflects the character of Jesus Christ. Teach me to remain faithful in every task, whether great or small.

In His holy name, Amen.$$,
  'Does my attitude toward my daily work reflect that I am ultimately serving Christ?',
  'Choose one ordinary responsibility today and complete it with exceptional care, offering it to God as an act of worship.',
  'Every faithful task becomes sacred when it is offered wholeheartedly to the Lord.',
  '2026-09-14'
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
