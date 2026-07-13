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
  'day-141-grace-for-the-wounded-body',
  'Grace for the Wounded Body',
  'Physical suffering can narrow life, yet Christ sees the person within the pain and gives grace, dignity, compassion, and sustaining love.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  141,
  'God''s Presence in Physical Suffering',
  'Psalm 6:1-9',
  'Mark 5:25-34',
  'Psalm 41:3',
  'The LORD will strengthen him upon the bed of languishing.',
  'Psalm 41:3',
  'The LORD will strengthen him upon the bed of languishing.',
  $$Physical suffering can narrow the world.

Tasks that once felt simple become difficult.

Sleep becomes uncertain.

Energy disappears.

Pain demands attention until it seems to fill every quiet moment.

Scripture never treats bodily suffering as insignificant.

The psalmists cried out from beds of weakness.

Job grieved beneath physical affliction.

Paul carried a thorn he could not remove.

Jesus repeatedly stopped for those whose bodies had become places of suffering.

The woman who reached for Christ's garment had endured illness for twelve years. She had spent her resources seeking relief and had only grown worse. Yet beneath the exhaustion remained a fragile thread of faith:

"If I may touch but his clothes, I shall be whole."

Jesus did more than heal her body.

He called her "Daughter."

He restored dignity to someone suffering had isolated.

He saw the person, not merely the illness.

The Way of Quiet Light reminds us that physical weakness does not diminish our worth before God.

When the body becomes frail, the soul remains precious.

When productivity declines, God's love does not.

When pain makes prayer difficult, even a whispered cry reaches His heart.

Healing may come through medicine, time, rest, wise care, or divine intervention. Sometimes complete healing awaits the resurrection.

Yet in every case, Christ remains near.

He is not repelled by weakness.

He draws close to it.

If your body is weary today, do not measure your faith by how much you can accomplish.

Rest in the truth that you are seen, known, and deeply loved.

Grace is present even here.$$,
  $$Heavenly Father,

You know every pain, limitation, and weakness within my body. Give me strength for today and grace for each difficult moment. Guide those who care for me, grant wisdom in every decision, and help me trust You when healing is slow or uncertain. Remind me that my worth rests not in what I can do, but in belonging to Jesus Christ.

In His holy name, Amen.$$,
  'Have I allowed physical weakness to make me feel forgotten or less valuable before God?',
  'Treat your body with compassion today. Accept needed rest, seek appropriate help, and thank God for sustaining you through another day.',
  'The wounded body is never beyond the gentle care of Christ.',
  '2026-11-18'
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
