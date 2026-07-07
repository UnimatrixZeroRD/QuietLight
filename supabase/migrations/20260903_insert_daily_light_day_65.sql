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
  'day-65-do-justice-love-mercy',
  'Do Justice, Love Mercy',
  'God calls His people to reflect His heart through justice, mercy, humility, integrity, compassion, and faithful obedience.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  65,
  'Reflecting the Heart of God',
  'Micah 6:6-8',
  'Matthew 23:23-28',
  'Micah 6:8',
  'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?',
  'Micah 6:8',
  'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?',
  $$God has always cared about more than outward religion.

Throughout Scripture, He repeatedly calls His people to lives marked by justice, mercy, and humility. Worship that ignores the needs of others is incomplete, for the God we worship is Himself righteous, compassionate, and faithful.

The prophet Micah asked what the Lord truly desired.

Was it larger offerings?

More sacrifices?

Greater displays of religious devotion?

God's answer was remarkably simple.

Do justice.

Love mercy.

Walk humbly with your God.

Jesus echoed these same priorities when He confronted the religious leaders of His day. They carefully observed outward traditions while neglecting "the weightier matters of the law, judgment, mercy, and faith."

The Kingdom of God turns our attention toward what matters most.

Justice means treating people with fairness and integrity because every person bears the image of God.

Mercy means extending compassion even when it costs us something.

Humility reminds us that we ourselves stand only by God's grace.

The Way of Quiet Light teaches that these virtues are often practiced quietly.

Choosing honesty when dishonesty would be profitable.

Defending someone whose voice is ignored.

Showing compassion instead of condemnation.

Listening before passing judgment.

Offering forgiveness where resentment would seem easier.

These ordinary choices reveal the extraordinary character of Christ.

Justice without mercy becomes harsh.

Mercy without truth loses its foundation.

Humility holds them together, reminding us that we serve a Savior who is both perfectly just and infinitely merciful.

Walk today in His footsteps.

Let your life reflect the heart of the King you serve.$$,
  $$Heavenly Father,

Teach me to love what You love and value what You value. Help me to pursue justice with integrity, extend mercy with compassion, and walk humbly before You each day. Guard me from hypocrisy, and let my life reflect the righteousness and grace of Jesus Christ.

In His holy name, Amen.$$,
  'How can I better reflect God''s justice and mercy in my relationships and daily decisions?',
  'Look for an opportunity today to stand up for someone who is overlooked or to extend mercy where it may not be expected.',
  'Justice reveals God''s righteousness. Mercy reveals His heart. Humility keeps us walking beside Him.',
  '2026-09-03'
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
