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
  'day-9-the-light-shines',
  'The Light Shines',
  'Christ is the Light of the World, and His people are called to carry His light with humility so others may be guided toward Him.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  9,
  'Christ, the Light of the World',
  'Isaiah 9:1-7',
  'John 8:12',
  'John 8:12',
  'Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.',
  'John 8:12',
  'Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.',
  $$From the opening chapter of Genesis to the final pages of Revelation, light is one of Scripture's most enduring images of God's presence.

Before the sun and moon were created, God spoke light into existence. Throughout Israel's history, His glory appeared as fire by night, guiding His people through the wilderness. The prophets looked forward to a day when a great Light would dawn upon those who sat in darkness.

That Light is Jesus Christ.

When Jesus declared, "I am the light of the world," He was making one of the most remarkable claims in all of Scripture. He was not merely offering good advice or a better philosophy of life. He was revealing Himself as the very source of truth, hope, life, and salvation.

Darkness cannot overcome light. Even the smallest flame pushes back the darkness surrounding it. In the same way, one faithful life surrendered to Christ can become a testimony that points others toward Him.

The Way of Quiet Light is built upon this truth. We do not create the light, nor do we possess it by our own strength. We simply carry the light that Christ has placed within us. Like a lantern in the night, our purpose is not to draw attention to ourselves but to illuminate the path toward the Savior.

This calling requires humility. A lantern fulfills its purpose only when its light shines outward. If we seek recognition for ourselves, we obscure the very light we were meant to display. But when Christ is lifted high, His light reaches farther than we could ever imagine.

Perhaps today you feel surrounded by darkness—whether through discouragement, uncertainty, grief, or temptation. Remember that darkness is not the absence of God's power. It is simply the place where His light shines most clearly.

Walk confidently today, not because you are strong, but because Christ, the Light of the World, goes before you. His light has never failed, and it never will.$$,
  $$Heavenly Father,

Thank You for sending Your Son to be the Light of the world. Let His light shine brightly within me so that others may see Your love, truth, and grace. Guard me against pride, and remind me that I am only a servant entrusted with reflecting Christ's light. May my words and actions point others toward Him today.

In the name of Jesus Christ, Amen.$$,
  'Does my life draw attention to Christ, or does it seek attention for myself?',
  'Intentionally encourage someone today with words that point them toward God''s faithfulness rather than your own accomplishments.',
  'The lantern has no light of its own; it fulfills its purpose only by carrying the flame entrusted to it.',
  '2026-07-09'
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
