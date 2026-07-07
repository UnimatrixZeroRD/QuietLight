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
  'day-75-words-that-build-the-kingdom',
  'Words That Build the Kingdom',
  'Kingdom citizens speak grace and truth, using words to strengthen, encourage, heal, unite, and reflect the character of Christ.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  75,
  'Speaking Grace and Truth',
  'Proverbs 16:21-24',
  'Ephesians 4:29-32',
  'Ephesians 4:29',
  'Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.',
  'Ephesians 4:29',
  'Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.',
  $$Kingdom citizens speak differently.

The words we choose reveal the condition of our hearts. They can strengthen or discourage, heal or wound, unite or divide. Jesus taught that "out of the abundance of the heart the mouth speaketh." Our speech is often a mirror reflecting what we have quietly allowed to grow within us.

Paul urges believers to speak only what builds others up. This does not mean we avoid difficult conversations or refuse to speak the truth. Rather, it means that even truth is spoken with grace, humility, and love.

The book of Proverbs declares that pleasant words are like honeycomb—sweet to the soul and health to the bones. A gentle answer can calm anger. Timely encouragement can renew a weary heart. Wise counsel can redirect a wandering life.

The Way of Quiet Light reminds us that some of the greatest acts of Kingdom service require no stage, no microphone, and no audience.

A sincere apology.

A word of encouragement.

A promise faithfully kept.

A gentle correction offered in love.

A prayer spoken over someone who is hurting.

These quiet conversations often leave lasting marks upon the lives of others.

Before speaking today, pause for a moment.

Ask yourself:

Will these words reflect the character of Christ?

Will they strengthen or weaken?

Will they bring peace or stir unnecessary conflict?

Every conversation becomes an opportunity to represent the King.

Let your speech become a doorway through which others encounter His grace.$$,
  $$Heavenly Father,

Place a guard over my lips and fill my heart with Your wisdom. Help me to speak truth with kindness, correction with humility, and encouragement with sincerity. Let every conversation today bring honor to Jesus Christ and become a blessing to those who hear my words.

In His holy name, Amen.$$,
  'Do my words consistently build others up and point them toward Christ?',
  'Make it your goal to intentionally encourage every person with whom you have a meaningful conversation today.',
  'Kingdom words are measured not by their volume, but by the grace they leave behind.',
  '2026-09-13'
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
