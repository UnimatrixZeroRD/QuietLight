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
  'day-29-the-kingdom-of-god',
  'The Kingdom of God',
  'The eternal Kingdom of God calls believers to seek Christ first, living as faithful citizens and ambassadors of His unshakable reign.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  29,
  'Living for an Eternal Kingdom',
  'Daniel 7:13-14',
  'Matthew 6:25-34',
  'Matthew 6:33',
  'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
  'Matthew 6:33',
  'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
  $$Every kingdom of this world has its limits.

Empires rise and fall. Governments change. Wealth fades. Human accomplishments, no matter how impressive, eventually pass into history. Yet above every earthly kingdom stands the everlasting Kingdom of God—a kingdom that will never be shaken, never be conquered, and never come to an end.

Daniel was given a remarkable vision of this eternal Kingdom. He saw One "like the Son of man" receiving everlasting dominion, glory, and authority. Centuries later, Jesus revealed Himself as that promised King, inviting all people to enter His Kingdom through repentance and faith.

To belong to God's Kingdom is to live according to different priorities.

The world tells us to seek success first, security first, or personal fulfillment first. Jesus says, "Seek ye first the kingdom of God."

This does not mean neglecting our responsibilities. Rather, it means allowing every responsibility to be guided by God's purposes. Our work becomes worship. Our homes become places of discipleship. Our relationships become opportunities to demonstrate Christ's love. Every decision is measured by one question: "Will this honor my King?"

The Way of Quiet Light reminds us that the Kingdom often advances quietly. Jesus compared it to a mustard seed that begins almost unnoticed yet grows into a great tree. He described it as leaven working unseen until the whole loaf is transformed. God's greatest work is often accomplished through quiet faithfulness rather than public spectacle.

As citizens of Heaven, we are called to live differently. We pursue justice with mercy, truth with humility, courage with gentleness, and conviction with love. Our hope is not rooted in temporary earthly systems but in the reign of Christ, whose Kingdom is both present and yet still to come in its fullness.

Whatever challenges you face today, remember where your true citizenship lies. Earthly kingdoms may disappoint, but the Kingdom of God remains forever.

Live today as an ambassador of that eternal Kingdom. Let your words, your actions, and your quiet faithfulness bear witness to the King you serve.$$,
  $$Heavenly Father,

Thank You for inviting me into Your eternal Kingdom through Jesus Christ. Help me to seek Your Kingdom above every earthly ambition and to live each day as a faithful citizen of Heaven. May my priorities reflect Your will, my relationships display Your love, and my life point others toward the everlasting reign of Christ.

In the name of Jesus Christ, Amen.$$,
  'What earthly concern has been competing with my commitment to seek God''s Kingdom first?',
  'Before making an important decision today, ask yourself, "Does this reflect the values of Christ''s Kingdom?" Allow that answer to guide your choice.',
  'Those who seek first the Kingdom discover that the greatest treasures are the ones that cannot be taken away.',
  '2026-07-29'
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
