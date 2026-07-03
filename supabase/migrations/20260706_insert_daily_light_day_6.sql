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
  'day-6-the-fear-of-the-lord',
  'The Fear of the Lord',
  'True wisdom begins with holy reverence for God, shaping not only what we know but how we live, serve, speak, and obey.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  6,
  'The Beginning of Wisdom',
  'Proverbs 1:1-7',
  'James 3:13-18',
  'Proverbs 1:7',
  'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.',
  'Proverbs 1:7',
  'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.',
  $$In today's world, wisdom is often confused with intelligence. A person may possess remarkable knowledge, academic achievement, or practical skill and yet remain spiritually unwise. Scripture teaches that true wisdom begins in an entirely different place—it begins with the fear of the Lord.

The fear of the Lord is not a terror that drives us away from God. Rather, it is a holy reverence that draws us nearer to Him. It is the humble recognition that God alone is perfectly holy, perfectly just, and perfectly wise. When we understand who He is, pride begins to fade, and our hearts become teachable.

King Solomon, renowned for his wisdom, understood that knowledge apart from God can easily become arrogance. James echoes this truth by distinguishing earthly wisdom from heavenly wisdom. Earthly wisdom seeks personal gain, recognition, and power. Heavenly wisdom is "pure, peaceable, gentle, and easy to be entreated, full of mercy and good fruits."

The Way of Quiet Light encourages believers to pursue wisdom not as a means of elevating themselves, but as a way of serving God and others more faithfully. Wisdom is revealed not merely in what we know, but in how we live. A gentle answer, an honest confession, a patient spirit, and a forgiving heart often display greater wisdom than the most eloquent speech.

Our generation has access to more information than any before it, yet information alone cannot transform the heart. Only God can do that. As we submit ourselves to His Word and allow His Spirit to shape our lives, we begin to see the world through His eyes rather than our own.

Ask yourself today not, "How can I appear wiser?" but rather, "How can I become more faithful?" The truly wise person does not seek admiration; they seek obedience. In doing so, they discover a wisdom that neither time nor circumstance can take away.$$,
  $$Heavenly Father,

Teach me to walk in true wisdom. Remove every trace of pride from my heart and replace it with humble reverence for You. Help me to seek understanding through Your Word rather than through my own opinions. May my thoughts, words, and actions reflect the wisdom that comes from above, bringing peace to those around me and glory to Your name.

In the name of Jesus Christ, Amen.$$,
  'Do I seek wisdom to honor God, or do I seek knowledge merely to impress others?',
  'Before making an important decision today, pause and ask, "Lord, what choice would most glorify You?"',
  'Wisdom begins the moment we stop trusting ourselves and begin trusting God.',
  '2026-07-06'
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
