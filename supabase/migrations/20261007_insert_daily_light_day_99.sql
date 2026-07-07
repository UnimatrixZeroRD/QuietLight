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
  'day-99-the-gift-of-prayer',
  'The Gift of Prayer',
  'Prayer is the gift of speaking with our Heavenly Father, aligning our hearts with His will, and resting in His loving presence.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  99,
  'Speaking with Our Heavenly Father',
  'Psalm 62:5-8',
  'Matthew 6:5-13',
  'Matthew 6:9',
  'After this manner therefore pray ye...',
  'Matthew 6:9',
  'After this manner therefore pray ye...',
  $$Prayer is one of God's greatest gifts to His children.

It is not merely a religious obligation or a spiritual exercise. It is an invitation to speak with our Heavenly Father, who knows us completely, loves us perfectly, and welcomes us into His presence through Jesus Christ.

When the disciples asked Jesus to teach them how to pray, He did not begin with elaborate words or complicated formulas. Instead, He began with a relationship.

"Our Father..."

Those two words change everything.

We do not approach God as strangers seeking an audience with a distant ruler.

We come as beloved children welcomed by a gracious Father.

Jesus' model prayer teaches us to begin with worship, submit ourselves to God's will, depend upon Him for our daily needs, seek forgiveness, extend forgiveness to others, and trust Him for guidance and protection.

Prayer is not about informing God of what He does not know.

It is about aligning our hearts with His purposes.

The Way of Quiet Light reminds us that prayer is conversation before it is presentation.

Sometimes we speak.

Sometimes we listen.

Sometimes we praise.

Sometimes we simply sit quietly, aware of God's presence.

Every sincere prayer, whether spoken aloud or whispered in silence, is heard by the Father who sees in secret.

Do not measure prayer by its length or eloquence.

Measure it by its sincerity.

The simplest prayer offered with genuine faith delights the heart of God.

Come to Him today.

He is already waiting.$$,
  $$Heavenly Father,

Thank You for inviting me to come before You through Jesus Christ. Teach me to pray with sincerity, humility, and confidence. Help me to seek Your will above my own and to trust Your wisdom in every circumstance. May prayer become not merely a habit, but the joyful conversation of a child with a loving Father.

In the name of Jesus Christ, Amen.$$,
  'Is prayer becoming a genuine relationship with God, or has it become only a list of requests?',
  'Spend part of your prayer time today simply thanking God, listening quietly, and enjoying His presence before bringing your requests to Him.',
  'Prayer is the privilege of children who know they are deeply loved by their Father.',
  '2026-10-07'
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
