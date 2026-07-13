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
  'day-143-when-the-journey-feels-too-long',
  'When the Journey Feels Too Long',
  'Prolonged trials can exhaust the heart, but God gives daily grace, shared support, and strength for each faithful step.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  143,
  'Endurance Through Prolonged Weariness',
  'Numbers 11:10-17',
  'Hebrews 10:32-39',
  'Hebrews 10:36',
  'For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.',
  'Hebrews 10:36',
  'For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.',
  $$Some trials are difficult because they are intense.

Others are difficult because they last.

A burden carried for one day may feel manageable. The same burden carried for months or years can slowly exhaust the heart. Even faithful people can reach the point where they wonder how much longer they can continue.

Moses knew this weariness.

The demands of leadership, the complaints of the people, and the weight of responsibility became more than he felt able to bear. He spoke honestly before God, and the Lord did not shame him for reaching his limit.

Instead, God provided help.

Seventy elders were appointed to share the burden.

This moment reminds us that endurance is not the same as pretending to be invincible. Sometimes perseverance means receiving support, reducing unnecessary weight, and admitting that we were never meant to carry everything alone.

The writer of Hebrews encourages believers not to cast away their confidence. They had already endured hardship, yet they still needed patience to continue until the promise was fulfilled.

The Way of Quiet Light reminds us that prolonged faithfulness is rarely dramatic.

It is sustained by small mercies.

Enough strength for today.

Enough courage for the next decision.

Enough hope to pray once more.

Do not demand from yourself the strength for an entire lifetime in a single moment.

God gives daily bread.

Daily grace.

Daily mercy.

If the journey feels too long today, shorten your view.

Do not ask how you will carry everything to the end.

Ask only how you can walk faithfully through this day.

Tomorrow will come with mercies of its own.$$,
  $$Heavenly Father,

When the journey feels too long and my strength grows small, sustain me with Your daily grace. Give me humility to receive help and wisdom to release burdens You never asked me to carry alone. Keep me from losing heart, and help me remain faithful one day at a time.

In the name of Jesus Christ, Amen.$$,
  'Am I exhausted because the trial is long, or because I have been trying to carry it without enough help?',
  'Identify one burden you can share with a trustworthy person today. Ask for prayer, practical help, or simply an understanding ear.',
  'God does not always shorten the road, but He faithfully provides strength for every step.',
  '2026-11-20'
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
