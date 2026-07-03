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
  'day-21-loving-your-neighbor',
  'Loving Your Neighbor',
  'Love for God overflows into compassionate service, calling believers to notice, serve, and become a neighbor to those in need.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  21,
  'Reflecting God''s Love Through Compassion',
  'Leviticus 19:9-18',
  'Luke 10:25-37',
  'Leviticus 19:18',
  'Thou shalt love thy neighbour as thyself.',
  'Leviticus 19:18',
  'Thou shalt love thy neighbour as thyself.',
  $$Love is the clearest evidence of a heart transformed by God.

Throughout Scripture, love is never presented merely as an emotion. It is an active commitment to seek the good of others, even when doing so requires sacrifice. God's love is demonstrated not simply in words but through action.

When asked to identify the greatest commandment, Jesus joined two truths that can never be separated: love for God and love for neighbor. Genuine worship naturally overflows into compassionate service.

To illustrate this, Jesus told the parable of the Good Samaritan.

The wounded traveler had been ignored by those who might have been expected to help him. Yet it was the Samaritan—an outsider despised by many—who stopped, cared for the injured man, and provided everything necessary for his recovery.

Compassion often interrupts our plans.

Love asks us to notice those whom others overlook. It invites us to slow our hurried pace, to listen before speaking, to forgive instead of retaliating, and to extend kindness without calculating what we might receive in return.

The Way of Quiet Light calls believers to practice this quiet compassion every day. We need not accomplish extraordinary acts to reflect Christ's love. A patient conversation, a thoughtful letter, a meal shared with someone who is lonely, or a sincere prayer for another person can become powerful expressions of God's grace.

The question is not merely, "Who is my neighbor?" but, "To whom can I become a neighbor today?"

Christ became our neighbor when He entered our broken world to rescue us. Having received such mercy, we are now called to extend that same mercy to others.

As you walk through this day, ask God to help you notice someone who may be carrying an unseen burden. Let your words bring encouragement, your actions demonstrate kindness, and your life reflect the love of Christ.

In doing so, you become a living testimony that His light continues to shine through ordinary people who quietly follow Him.$$,
  $$Heavenly Father,

Thank You for loving me with an everlasting love. Teach me to love others as Christ has loved me. Open my eyes to the needs around me and give me the courage to respond with compassion, generosity, and patience. May my life reflect Your mercy so clearly that others are drawn toward Your goodness.

In the name of Jesus Christ, Amen.$$,
  'Who has God placed in my path today that needs to experience His love through me?',
  'Perform one intentional act of kindness for someone who cannot repay you. Offer it quietly as an act of worship to God.',
  'Love shines brightest when it serves without seeking recognition.',
  '2026-07-21'
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
