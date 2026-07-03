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
  'day-49-the-joy-of-the-lord',
  'The Joy of the Lord',
  'The joy of the Lord strengthens weary hearts, sustaining believers through every season as they abide in the presence of Christ.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  49,
  'Strength for the Journey',
  'Nehemiah 8:5-12',
  'John 15:9-17',
  'Nehemiah 8:10',
  'The joy of the LORD is your strength.',
  'Nehemiah 8:10',
  'The joy of the LORD is your strength.',
  $$Joy is one of the most beautiful fruits of a life rooted in Christ.

Unlike happiness, which rises and falls with our circumstances, biblical joy is anchored in the unchanging goodness of God. It remains steady because it is founded not upon what happens around us, but upon the One who walks beside us.

When Ezra read the Book of the Law to the people of Israel, many began to weep as they recognized how far they had wandered from the Lord. Yet Nehemiah called them to rejoice, reminding them that "the joy of the LORD is your strength." Their tears of repentance were met by God's gracious invitation to restoration.

Jesus offered the same promise to His disciples.

After teaching them to abide in Him, He declared, "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full."

Notice that Christ does not merely give joy.

He shares His own joy with those who remain in His love.

The Way of Quiet Light reminds us that joy often grows quietly.

It appears in the peaceful confidence of a believer who trusts God during hardship.

It shines through the grateful heart that recognizes God's daily mercies.

It is found in serving others, worshipping faithfully, forgiving freely, and walking closely with Christ.

Joy is not loud.

It is deep.

It quietly strengthens weary hearts and steadies uncertain minds.

There will be days when sorrow visits your home, when prayers seem unanswered, and when burdens feel heavy. Even then, the joy of the Lord remains available because His presence has not departed.

Remember today that your strength does not come from your own determination.

It flows from your relationship with Christ.

Abide in Him.

Walk with Him.

Rejoice in Him.

His joy will sustain you through every season of life.$$,
  $$Heavenly Father,

Thank You for the joy that is found in Jesus Christ. Help me to rejoice in Your goodness regardless of my circumstances. When my heart grows weary, remind me that Your joy is my strength. Fill me with gratitude, hope, and peace so that my life may become a testimony of Your unfailing love.

In the name of Jesus Christ, Amen.$$,
  'Have I been seeking joy in changing circumstances instead of in my relationship with Christ?',
  'Spend time today praising God simply for who He is rather than only for what He has done.',
  'The deepest joy is discovered not in perfect circumstances, but in the abiding presence of Christ.',
  '2026-08-18'
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
