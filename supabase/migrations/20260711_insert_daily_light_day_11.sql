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
  'day-11-the-narrow-way',
  'The Narrow Way',
  'The narrow way calls believers to choose life through repentance, humility, obedience, and faithful surrender to Christ above convenience or approval.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  11,
  'Choosing the Path of Life',
  'Deuteronomy 30:15-20',
  'Matthew 7:13-14',
  'Matthew 7:13-14',
  'Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction... because strait is the gate, and narrow is the way, which leadeth unto life.',
  'Matthew 7:13-14',
  'Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction... because strait is the gate, and narrow is the way, which leadeth unto life.',
  $$Every day is filled with choices.

Some seem insignificant, while others shape the direction of an entire lifetime. Long before Israel entered the Promised Land, Moses placed a decision before the people: "I have set before thee life and death, blessing and cursing: therefore choose life."

Centuries later, Jesus echoed this same call, describing two roads that lie before every person.

One road is broad and well traveled. It requires little sacrifice, demands no repentance, and comfortably follows the values of the surrounding culture. Many choose it because it appears easier, more popular, and less costly.

The other road is narrow.

It is marked by repentance instead of pride, humility instead of self-exaltation, forgiveness instead of revenge, truth instead of convenience, and faithful obedience instead of personal comfort. At times it can feel lonely, for not everyone is willing to walk it.

Yet Christ Himself walks that road.

The Way of Quiet Light recognizes that the narrow way is often a quiet way. It is not lived through loud displays of religion or public recognition, but through daily acts of faithful obedience that may never be noticed by anyone except God. A gentle response, an honest confession, a hidden act of generosity, a steadfast commitment to truth—these are the footsteps that mark the disciple of Christ.

The narrow way is not difficult because God delights in hardship. It is difficult because it requires surrender. Every step asks us to trust God's wisdom above our own desires. Yet every step also draws us nearer to the One who promised never to leave nor forsake His people.

Do not measure the value of your path by how crowded it is. Measure it by whether it leads you closer to Christ.

The destination is worth every faithful step.$$,
  $$Heavenly Father,

Help me to choose the narrow way each day. Give me courage to remain faithful even when obedience is difficult or unpopular. Guard my heart against compromise, and teach me to value Your approval above the praise of others. May every step I take draw me closer to Jesus Christ, who is Himself the Way, the Truth, and the Life.

In the name of Jesus Christ, Amen.$$,
  'Is there a decision before me where I know the right path but have hesitated because it is more difficult?',
  'Make one deliberate choice today that reflects obedience to Christ rather than convenience or public opinion.',
  'The narrow way may demand more of us, but it leads us ever closer to the heart of God.',
  '2026-07-11'
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
