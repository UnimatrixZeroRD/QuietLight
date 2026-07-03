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
  'day-36-a-grateful-heart',
  'A Grateful Heart',
  'A grateful heart recognizes God''s goodness in every season, turning attention from complaint toward His mercy, faithfulness, and daily gifts.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  36,
  'Giving Thanks in Every Season',
  'Psalm 100',
  '1 Thessalonians 5:16-24',
  '1 Thessalonians 5:18',
  'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  '1 Thessalonians 5:18',
  'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
  $$Gratitude changes the way we see the world.

When our attention is fixed only upon what is missing, disappointment quickly grows. We begin to measure God's goodness by our circumstances rather than by His unchanging character. Yet Scripture repeatedly calls us to a different perspective—one rooted in thanksgiving.

Notice that Paul does not say we must give thanks for every hardship. Instead, he teaches us to give thanks in every circumstance. Even during seasons of sorrow, there remain countless reasons to praise God: His mercy, His forgiveness, His presence, His promises, and the hope we have through Jesus Christ.

The psalmist invites God's people to enter His gates with thanksgiving and His courts with praise. Worship begins with remembering who God is. Before considering our needs, we first acknowledge His goodness, His steadfast love, and His enduring faithfulness.

The Way of Quiet Light encourages believers to cultivate quiet gratitude each day. Many of God's greatest blessings are easily overlooked because they have become familiar—the sunrise, daily bread, the love of family, the encouragement of friends, the gift of Scripture, the privilege of prayer, and the assurance of salvation.

A grateful heart also guards us against pride.

When we remember that every good gift comes from our Heavenly Father, boasting disappears. Gratitude produces humility, generosity, contentment, and joy. It reminds us that life itself is a gift entrusted to us by God's gracious hand.

If today has brought unexpected blessings, thank Him.

If today has brought unexpected difficulties, thank Him that He remains faithful within them.

If today feels ordinary, thank Him for the quiet mercies that sustain you every moment.

The more we recognize God's faithfulness, the more naturally praise flows from our hearts.

A grateful life becomes a powerful witness in a world that is often consumed by complaint.$$,
  $$Heavenly Father,

Thank You for every good gift You have placed in my life. Forgive me for the times I have overlooked Your daily mercies or allowed complaints to replace gratitude. Open my eyes to recognize Your goodness in every season. May thanksgiving become the natural language of my heart and a testimony of Your faithfulness to everyone around me.

In the name of Jesus Christ, Amen.$$,
  'What blessings have I taken for granted that deserve renewed thanksgiving today?',
  'Write down ten specific blessings from God, both great and small. Offer Him sincere thanks for each one.',
  'Gratitude does not wait for perfect circumstances; it recognizes God''s goodness within every season.',
  '2026-08-05'
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
