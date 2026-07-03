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
  'day-55-the-heart-of-a-servant',
  'The Heart of a Servant',
  'Christ reveals true greatness through humble service, calling His followers to quietly serve others with compassion, humility, and love.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  55,
  'Greatness Through Humble Service',
  'Isaiah 42:1-4',
  'John 13:1-17',
  'John 13:14',
  'If I then, your Lord and Master, have washed your feet; ye also ought to wash one another''s feet.',
  'John 13:14',
  'If I then, your Lord and Master, have washed your feet; ye also ought to wash one another''s feet.',
  $$The world often measures greatness by power, influence, or recognition.

Jesus measured greatness by something entirely different.

On the night before His crucifixion, the King of kings knelt before His disciples and performed the work of the lowest household servant. He washed their dusty feet, including the feet of Judas, who would soon betray Him.

This moment forever changed the meaning of leadership.

True greatness is found in humble service.

Jesus did not merely command His followers to serve others; He demonstrated what that service looks like. He loved sacrificially, gave generously, forgave freely, and placed the needs of others before His own comfort.

Isaiah had foretold the coming of such a Servant centuries earlier. The promised Messiah would not crush the bruised reed or extinguish the faintly burning wick. His strength would be revealed through gentleness, mercy, and steadfast faithfulness.

The Way of Quiet Light embraces this same pattern.

The brightest lights are often found quietly serving where few people are watching.

Preparing a meal for someone in need.

Helping a neighbor without being asked.

Praying faithfully for another person.

Offering encouragement without seeking recognition.

Serving patiently within one's own family.

These quiet acts often accomplish more for God's Kingdom than public displays of greatness.

Service is never beneath the follower of Christ because it was never beneath Christ Himself.

Ask yourself today not, "How can I be noticed?"

Instead ask,

"Whom can I quietly serve?"

The answer to that question will often reveal the next step God desires you to take.$$,
  $$Heavenly Father,

Thank You for the perfect example of Jesus Christ, who humbled Himself to serve others. Remove pride from my heart and teach me to find joy in serving quietly and faithfully. Open my eyes to the needs around me and help me reflect the compassion, humility, and love of Christ in every opportunity You provide.

In the name of Jesus Christ, Amen.$$,
  'Where is God inviting me to serve without expecting recognition or reward?',
  'Perform one hidden act of service today. Let it remain known only to God and the person you are serving.',
  'The hands that quietly serve often shine brightest in the eyes of God.',
  '2026-08-24'
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
