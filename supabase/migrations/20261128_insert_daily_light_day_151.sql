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
  'day-151-the-mind-of-christ',
  'The Mind of Christ',
  'Becoming like Christ begins within, as the Holy Spirit renews thoughts, desires, values, humility, compassion, and obedience.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  151,
  'Learning to Think as Jesus Thought',
  'Isaiah 55:6-11',
  'Philippians 2:1-11',
  'Philippians 2:5',
  'Let this mind be in you, which was also in Christ Jesus.',
  'Philippians 2:5',
  'Let this mind be in you, which was also in Christ Jesus.',
  $$Every outward action begins somewhere within.

Words begin as thoughts.

Decisions begin as desires.

Habits begin as repeated choices of the mind.

For this reason, becoming like Christ requires more than changing our outward behavior. The Holy Spirit desires to transform how we think, what we value, and how we understand ourselves and others.

Paul invites believers to possess the mind of Christ.

What kind of mind did Jesus reveal?

Though He possessed all authority, He chose humility.

Though worthy of all service, He became a servant.

Though surrounded by human pride and ambition, He walked in perfect obedience to the Father.

Christ did not cling to status. He emptied Himself, took the form of a servant, and humbled Himself even unto death upon the cross.

This is the pattern of Christian character.

The world teaches us to protect our position.

Christ teaches us to serve.

The world encourages self-promotion.

Christ demonstrates self-giving love.

The world asks, "What can I gain?"

Christ asks, "Whom can I help?"

Isaiah reminds us that God's thoughts are higher than ours. Left to ourselves, our minds easily become shaped by fear, resentment, pride, comparison, and selfish ambition. Through Scripture and the work of the Holy Spirit, God patiently reshapes our thinking until it increasingly reflects the wisdom of Jesus.

The Way of Quiet Light reminds us that this transformation usually occurs quietly.

A harsh thought is replaced with compassion.

A desire for recognition gives way to humble service.

An assumption becomes a willingness to listen.

An offense becomes an opportunity to forgive.

These hidden changes may not be visible to others, but they are precious in the sight of God. The character of Christ begins taking root within us long before it is displayed through us.

Today, invite the Lord into your thoughts.

Ask Him to reveal what does not resemble Jesus.

Then allow His truth to renew your mind.$$,
  $$Heavenly Father,

Renew my mind and shape my thoughts according to the character of Jesus Christ. Remove pride, selfish ambition, resentment, and every attitude that does not honor You. Teach me to think with humility, compassion, wisdom, and love. May the mind of Christ guide my words, decisions, and relationships today.

In the name of Jesus Christ, Amen.$$,
  'What pattern of thought within me most needs to be transformed by the mind of Christ?',
  'When a negative, prideful, or unloving thought appears today, pause and ask, "How would Jesus view this person or situation?"',
  'The character of Christ becomes visible in our lives only after His truth has quietly reshaped our minds.',
  '2026-11-28'
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
