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
  'day-121-when-the-storm-comes',
  'When the Storm Comes',
  'Storms do not remove God''s presence; trials teach believers to trust Christ, who remains with them through every fear and uncertainty.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  121,
  'God''s Presence in Times of Trial',
  'Psalm 46:1-11',
  'Mark 4:35-41',
  'Psalm 46:1',
  'God is our refuge and strength, a very present help in trouble.',
  'Psalm 46:1',
  'God is our refuge and strength, a very present help in trouble.',
  $$Storms are part of every life.

Some arrive suddenly.

Others gather slowly on the horizon.

Illness.

Loss.

Disappointment.

Fear.

Uncertainty.

No believer is exempt from the reality of suffering in a fallen world.

The disciples discovered this while crossing the Sea of Galilee.

The storm was fierce.

The waves crashed against the boat.

Experienced fishermen feared for their lives.

Yet Jesus was there.

The greatest danger was not the storm around them.

It was forgetting who was in the boat with them.

When the disciples cried out, Christ rose and spoke only a few words:

"Peace, be still."

Immediately the storm obeyed its Creator.

Sometimes God calms the storm.

Sometimes He calms His children while the storm continues.

The Way of Quiet Light reminds us that God's presence is often most clearly seen during difficult seasons.

Comfort can make us self-reliant.

Trials teach dependence.

Pain drives us toward prayer.

Weakness teaches us where true strength is found.

Do not measure God's faithfulness by the absence of hardship.

Measure it by His presence within it.

The same Savior who walked upon the waters still walks beside His people today.

You may not understand the storm.

You may not see the shore.

But you are not alone in the boat.

The Lord who commands the wind and waves remains with you.

And that changes everything.$$,
  $$Heavenly Father,

When storms arise, help me remember that You are near. Strengthen my faith when fear begins to grow and remind me that Your presence is greater than any trial I face. Teach me to trust You whether You calm the storm or carry me safely through it. May my confidence remain fixed upon Jesus Christ, my refuge and strength.

In His holy name, Amen.$$,
  'Am I focusing more upon the storm around me or the Savior beside me?',
  'Bring one specific fear before God today and intentionally place it into His hands through prayer.',
  'The presence of Christ does not remove every storm, but it transforms every storm we face.',
  '2026-10-29'
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
