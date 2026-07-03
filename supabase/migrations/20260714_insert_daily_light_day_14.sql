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
  'day-14-the-peace-of-christ',
  'The Peace of Christ',
  'Christ gives a peace that surpasses understanding, guarding anxious hearts as they surrender every burden into God''s care.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  14,
  'Peace That Surpasses Understanding',
  'Isaiah 26:1-4',
  'Philippians 4:4-9',
  'Philippians 4:7',
  'And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
  'Philippians 4:7',
  'And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
  $$Peace is one of humanity's greatest pursuits.

People seek it in financial security, stable relationships, good health, or a life free from hardship. While these blessings are gifts from God, they cannot provide the lasting peace for which the human heart longs. Circumstances change. Health fades. Wealth comes and goes. Even our closest relationships experience seasons of difficulty.

The peace Christ offers is different.

Isaiah declared that God would keep in perfect peace the one whose mind is stayed upon Him. That promise does not depend upon the absence of trouble but upon the presence of God. When our confidence rests in the unchanging character of the Lord, we discover a peace that remains steady even when life is uncertain.

The Apostle Paul wrote these words while imprisoned. His circumstances gave every reason for anxiety, yet his heart overflowed with joy and confidence. He urged believers to bring every concern before God through prayer, promising that the peace of God would guard both heart and mind.

Notice that Paul did not say God would immediately remove every trial. Instead, He promised His presence within the trial.

The Way of Quiet Light reminds us that peace is cultivated through trust. A quiet heart is not one without questions; it is one that has learned to place those questions into the hands of God. We surrender what we cannot control and entrust ourselves to the One who governs all things with perfect wisdom.

Perhaps today your mind is filled with uncertainty. There may be decisions to make, burdens to carry, or fears that refuse to leave. Bring them honestly before the Lord. Prayer is not merely presenting a list of requests—it is placing ourselves into God's care.

As you walk today, let your thoughts dwell upon whatever is true, honest, just, pure, lovely, and worthy of praise. The world feeds anxiety by keeping our eyes fixed upon its troubles. Christ gives peace by lifting our eyes toward Himself.

The storms of life may continue, but the Prince of Peace remains upon the throne. His presence is greater than every fear.$$,
  $$Heavenly Father,

Thank You for the peace that comes through Jesus Christ. Quiet my anxious thoughts and teach me to trust You more deeply. Help me to bring every burden before You in prayer, believing that Your wisdom is greater than my understanding. Guard my heart and mind today, and let Your peace guide my words, decisions, and relationships.

In the name of Jesus Christ, Amen.$$,
  'What anxiety have I been carrying instead of placing into God''s hands?',
  'When worry enters your mind today, immediately turn it into a prayer before allowing it to grow into fear.',
  'Peace is not found when every storm has passed, but when Christ is trusted within the storm.',
  '2026-07-14'
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
