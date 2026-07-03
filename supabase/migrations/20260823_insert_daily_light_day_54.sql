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
  'day-54-the-peace-of-god',
  'The Peace of God',
  'The peace of God guards anxious hearts as believers rest in His presence, entrust their burdens to Him, and fix their minds upon His truth.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  54,
  'Resting in God''s Presence',
  'Isaiah 26:1-4',
  'Philippians 4:4-9',
  'Philippians 4:7',
  'And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
  'Philippians 4:7',
  'And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
  $$Peace is one of the greatest gifts Christ offers His people.

It is not merely the absence of conflict or the removal of difficulty. Biblical peace is the settled confidence that God remains sovereign, loving, and present regardless of what surrounds us.

Isaiah declared that God keeps in perfect peace those whose minds remain fixed upon Him. Notice that peace is connected not to changing circumstances but to a steadfast focus upon the Lord.

Paul offers the same encouragement.

Instead of being consumed by anxiety, believers are invited to bring every concern before God through prayer and thanksgiving. As we entrust our burdens to Him, something remarkable happens.

The peace of God begins guarding our hearts.

This peace often surpasses human explanation.

It steadies us when others expect panic.

It strengthens us when others expect despair.

It comforts us when circumstances suggest fear.

The Way of Quiet Light embraces this quiet confidence.

Our lantern does not remove the darkness around us.

It simply reminds us that light is still present.

Likewise, God's peace does not always remove every hardship immediately. Instead, it enables us to walk faithfully through those hardships with calm assurance that Christ has not abandoned us.

Many things compete for our attention each day.

News.

Responsibilities.

Financial concerns.

Relationships.

Uncertainty about tomorrow.

Paul gently redirects our minds toward whatever is true, honest, just, pure, lovely, and of good report. As our thoughts become centered upon God's truth, our hearts increasingly experience His peace.

Today, release your anxieties into your Father's hands.

You were never meant to carry them alone.

Rest in His presence.

Trust His promises.

Walk confidently beneath His care.

His peace is greater than your fear.$$,
  $$Heavenly Father,

Thank You for the peace that only You can give. Quiet my anxious thoughts and help me trust You with every concern I carry today. Guard my heart and mind through Jesus Christ, and teach me to rest confidently in Your loving care. May Your peace become evident in every part of my life.

In the name of Jesus Christ, Amen.$$,
  'What anxiety do I need to place completely into God''s hands today?',
  'Whenever anxiety arises today, immediately pause and pray, thanking God before asking Him for His help.',
  'God''s peace is not found in having every answer, but in trusting the One who does.',
  '2026-08-23'
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
