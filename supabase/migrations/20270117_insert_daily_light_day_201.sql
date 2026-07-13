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
  'day-201-speak-for-those-without-a-voice',
  'Speak for Those Without a Voice',
  'Serving through justice and advocacy means listening humbly, supporting dignity, and helping unheard voices be respected.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  201,
  'Serving Through Justice and Advocacy',
  'Proverbs 31:8-9',
  'Luke 4:16-21',
  'Proverbs 31:8',
  'Open thy mouth for the dumb in the cause of all such as are appointed to destruction.',
  'Proverbs 31:8',
  'Open thy mouth for the dumb in the cause of all such as are appointed to destruction.',
  $$Some people are overlooked because they are quiet.

Others are ignored because they lack influence, resources, status, or the ability to defend themselves.

Scripture repeatedly calls God’s people to notice them.

Proverbs urges us to speak for those without a voice and defend the cause of the vulnerable. This does not mean assuming we always know what others need. It means refusing to remain indifferent when people are being harmed, excluded, exploited, or forgotten.

Jesus began His public ministry by reading from Isaiah.

He declared good news to the poor.

Freedom to captives.

Sight to the blind.

Liberty to the oppressed.

His mission was spiritual, but never abstract. The Gospel touched bodies, communities, relationships, and systems of power.

The Way of Quiet Light reminds us that advocacy is a form of service.

Sometimes service means meeting an immediate need.

Sometimes it means asking why the need continues.

Sometimes it means standing beside a person in a difficult meeting.

Helping them understand a process.

Connecting them with support.

Correcting a false accusation.

Or refusing to remain silent when someone is treated unjustly.

Advocacy must be practiced with humility.

We should not speak over people whose experiences we have not taken time to understand.

We must listen first.

Ask what support is wanted.

Respect the voice and agency of the person involved.

The goal is not to become the hero of someone else’s story.

It is to help ensure they are heard, respected, and treated justly.

Jesus never used the vulnerable to elevate Himself.

He restored dignity.

He named injustice.

He confronted those who abused religious or social power.

Yet He always acted from truth, compassion, and obedience to the Father.

Today, ask God where your voice, access, experience, or influence might help someone who has less power than you do.

Silence can protect peace.

But silence can also protect injustice.

Wisdom must know the difference.$$,
  $$Heavenly Father,

Open my eyes to those who are ignored, silenced, or treated unjustly. Give me humility to listen before speaking and courage to act when truth and mercy require it. Protect me from pride, assumption, and empty performance. May my voice and influence become instruments of justice, dignity, and compassion in the name of Jesus Christ.

In His holy name, Amen.$$,
  'Is there someone whose needs or concerns are being ignored because they lack influence or confidence?',
  'Listen carefully to one person who feels unheard, and take one appropriate step to support their voice rather than replacing it with your own.',
  'Christlike advocacy does not steal another person’s voice; it helps ensure that voice is heard.',
  '2027-01-17'
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
