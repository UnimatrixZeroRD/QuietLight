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
  'day-10-living-water',
  'Living Water',
  'Christ alone satisfies the deepest thirst of the soul, inviting the weary to drink freely from His grace, presence, and promises.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  10,
  'The Soul''s Deepest Need',
  'Isaiah 55:1-3',
  'John 4:1-26',
  'John 4:14',
  'But whosoever drinketh of the water that I shall give him shall never thirst.',
  'John 4:14',
  'But whosoever drinketh of the water that I shall give him shall never thirst.',
  $$Every human heart thirsts for something.

Some pursue wealth, believing it will satisfy. Others seek success, comfort, relationships, or recognition. Yet no earthly pursuit can fully satisfy the deepest longing of the soul, for we were created to know God.

Through the prophet Isaiah, the Lord extended a remarkable invitation: "Ho, every one that thirsteth, come ye to the waters." It was an invitation not to those who had earned God's favor, but to those who recognized their need. The water was freely offered because God's grace is freely given.

That invitation reached its fullness when Jesus met the Samaritan woman at Jacob's well.

She came seeking ordinary water, burdened by a difficult past and searching for meaning in places that could never satisfy. Christ looked beyond her failures and offered her something infinitely greater—living water that would become within her "a well of water springing up into everlasting life."

The Lord continues to extend that same invitation today. He knows every disappointment, every hidden wound, every unanswered question, and every burden we carry. Yet He does not ask us to clean ourselves before coming to Him. He simply invites us to come.

The Way of Quiet Light reminds us that the quiet soul is one that continually returns to Christ as its source of life. Just as our bodies require fresh water each day, our spirits require daily communion with God through His Word, prayer, worship, and faithful obedience. Yesterday's devotion cannot sustain today's faithfulness.

If you have found yourself spiritually weary, do not search elsewhere for satisfaction. Return to the One who alone gives living water. His grace has never run dry, and His mercy is renewed every morning.

Drink deeply from His promises today. Let His Spirit refresh your heart, renew your strength, and remind you that the deepest thirst of your soul has already been answered in Christ.$$,
  $$Heavenly Father,

Thank You for the living water found only in Jesus Christ. Forgive me for the times I have sought satisfaction in things that cannot truly fulfill. Draw me back to You each day through Your Word and by Your Spirit. Refresh my soul, strengthen my faith, and help me to find my joy in Your presence alone.

In the name of Jesus Christ, Amen.$$,
  'Where have I been looking for fulfillment apart from Christ?',
  'Before reaching for entertainment or distraction today, spend time reading God''s Word and asking Him to satisfy your heart with His presence.',
  'The soul that drinks daily from Christ will never be emptied by the world''s disappointments.',
  '2026-07-10'
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
