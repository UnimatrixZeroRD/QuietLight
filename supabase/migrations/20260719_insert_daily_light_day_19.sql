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
  'day-19-hope-that-endures',
  'Hope That Endures',
  'Biblical hope anchors the soul in God''s promises, holding firm in Christ even when present circumstances feel uncertain or heavy.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  19,
  'Anchored in God''s Promises',
  'Lamentations 3:21-26',
  'Hebrews 6:13-20',
  'Lamentations 3:22-23',
  'It is of the LORD''S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.',
  'Lamentations 3:22-23',
  'It is of the LORD''S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.',
  $$Hope is one of God's greatest gifts.

It is not wishful thinking or blind optimism. Biblical hope is confident expectation rooted in the promises of God. It looks beyond present circumstances and rests upon the certainty of His faithfulness.

Jeremiah wrote the words of Lamentations while surrounded by devastation. Jerusalem had fallen. The people were grieving. Everything around him seemed to speak of loss. Yet in the midst of sorrow he deliberately turned his thoughts toward the unchanging character of God: "Great is thy faithfulness."

Hope begins when we remember who God is.

The writer of Hebrews describes hope as an anchor for the soul—steadfast and secure. An anchor does not remove the storm, but it keeps the ship from drifting. Likewise, hope keeps the believer firmly rooted in Christ even when life's waves become overwhelming.

The Way of Quiet Light reminds us that the flame of hope is often brightest during the darkest nights. A lantern is not needed at noon, but it becomes invaluable after sunset. In the same way, God's promises become especially precious when circumstances tempt us toward despair.

Hope is sustained by remembering God's faithfulness.

Reflect upon the times He has answered prayers, provided unexpected strength, opened closed doors, or carried you through seasons you never imagined surviving. The God who has remained faithful throughout your past will not abandon you in your future.

Perhaps today your heart feels weary. You may be facing illness, uncertainty, disappointment, or grief. Lift your eyes beyond what is immediately visible. God's promises remain unchanged. Christ has conquered sin and death, and because He lives, our hope is secure.

Do not allow temporary circumstances to define eternal realities. The Lord who redeemed you continues to sustain you, and His purposes extend far beyond what you can presently see.

Hold firmly to hope today. The anchor has already been secured in Christ.$$,
  $$Heavenly Father,

Thank You for being the source of my enduring hope. When discouragement threatens to overwhelm me, remind me of Your unfailing promises and steadfast love. Help me to keep my eyes fixed upon Jesus Christ, who is my sure foundation and eternal hope. Strengthen my heart so that I may encourage others with the same comfort You have given me.

In the name of Jesus Christ, Amen.$$,
  'Have I allowed my circumstances to determine my hope, or have I anchored my hope in God''s promises?',
  'Write down three promises from Scripture that encourage you. Read them aloud and thank God for His faithfulness.',
  'Hope is the quiet confidence that God''s promises remain true, even when today''s circumstances suggest otherwise.',
  '2026-07-19'
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
