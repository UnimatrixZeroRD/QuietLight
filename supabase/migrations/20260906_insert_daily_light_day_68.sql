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
  'day-68-walking-in-truth',
  'Walking in Truth',
  'Walking in truth means living with integrity before God and others, allowing words, actions, promises, and character to reflect Christ.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  68,
  'Living with Integrity Before God and Others',
  'Proverbs 12:17-22',
  'Ephesians 4:17-32',
  'Ephesians 4:25',
  'Wherefore putting away lying, speak every man truth with his neighbour: for we are members one of another.',
  'Ephesians 4:25',
  'Wherefore putting away lying, speak every man truth with his neighbour: for we are members one of another.',
  $$Truth is one of the foundations of God's Kingdom.

God is truth.

His Word is truth.

Jesus declared Himself to be "the way, the truth, and the life."

Because truth is rooted in God's own character, His people are called to become people of honesty and integrity.

Integrity means that our private life and our public life tell the same story.

It means our words match our actions.

Our promises can be trusted.

Our character remains consistent whether anyone is watching or not.

The book of Proverbs teaches that lying lips are an abomination to the Lord, but those who deal faithfully delight Him. Honesty is not merely good advice; it is an expression of worship because it reflects the character of our Heavenly Father.

Paul urges believers to put away falsehood and speak truth to one another because we belong to one body in Christ. Dishonesty damages trust, while truth spoken in love strengthens relationships and builds unity.

The Way of Quiet Light encourages believers to pursue quiet integrity.

Not merely avoiding obvious lies, but also refusing exaggeration, gossip, manipulation, hidden motives, and deceptive appearances.

Integrity often costs something.

It may cost popularity.

It may cost convenience.

It may even cost financial gain.

Yet nothing is worth sacrificing a clear conscience before God.

When we walk in truth, we experience a freedom that deception can never provide.

Today, let your words be honest.

Let your promises be dependable.

Let your life become a reflection of the One who is Himself Truth.

The Kingdom of God is strengthened whenever one believer chooses integrity over compromise.$$,
  $$Heavenly Father,

Thank You for revealing Yourself as the God of truth. Guard my heart from deception in every form, and help me to live with honesty and integrity. May my words always be truthful, my actions consistent, and my character pleasing in Your sight. Let my life faithfully reflect Jesus Christ, who is the Truth.

In the name of Jesus Christ, Amen.$$,
  'Is there any area of my life where my words and my actions are not fully aligned?',
  'Examine your conversations today. Speak honestly, gently, and faithfully, allowing every word to honor Christ.',
  'Integrity is the quiet testimony that our lives truly belong to the God of truth.',
  '2026-09-06'
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
