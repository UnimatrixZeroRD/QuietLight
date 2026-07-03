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
  'day-45-walking-in-discernment',
  'Walking in Discernment',
  'Discernment grows through prayer, Scripture, humility, and patient dependence upon God''s wisdom in every decision.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  45,
  'Seeking God''s Wisdom in Every Decision',
  '1 Kings 3:5-14',
  'Philippians 1:9-11',
  'Philippians 1:9',
  'And this I pray, that your love may abound yet more and more in knowledge and in all judgment.',
  'Philippians 1:9',
  'And this I pray, that your love may abound yet more and more in knowledge and in all judgment.',
  $$Not everything that appears good is God's best.

As we grow in faith, one of the greatest gifts the Lord develops within us is discernment—the ability to recognize truth from error, wisdom from foolishness, and God's leading from our own desires.

When Solomon became king, he could have asked for wealth, power, or long life. Instead, he asked for an understanding heart so that he might rightly govern God's people. His request pleased the Lord because it revealed humility and dependence rather than self-interest.

Discernment begins the same way today.

It grows in hearts that are willing to admit, "Lord, I do not know the best path without You."

The Apostle Paul prayed that believers would abound in love joined with knowledge and discernment. Love without wisdom can become naïve. Knowledge without love can become harsh. God's design is that both grow together, producing lives that are sincere, blameless, and filled with the fruit of righteousness.

The Way of Quiet Light reminds us that discernment is rarely developed in moments of haste. It grows through quiet prayer, careful study of Scripture, wise counsel, and patient waiting upon the Lord. Many mistakes could be avoided if we were willing to pause before acting.

Discernment also protects us from deception.

The world constantly offers competing voices, each claiming to possess truth. Yet Christ has given us His Word, His Spirit, and the fellowship of His Church to guide our steps.

Before making important decisions, ask yourself:

Does this honor Christ?

Does it agree with Scripture?

Does it reflect love, truth, and humility?

Does it produce peace rather than confusion?

The Lord delights in guiding those who sincerely seek His wisdom.

Walk carefully today.

The path of discernment may require patience, but it leads safely through life's many crossroads.$$,
  $$Heavenly Father,

Grant me wisdom and discernment in every decision I make. Guard me from deception, pride, and impulsiveness. Help me to love Your truth, cherish Your Word, and listen carefully for the leading of Your Holy Spirit. May every choice I make bring honor to Jesus Christ and reflect Your perfect wisdom.

In the name of Jesus Christ, Amen.$$,
  'Is there a decision in my life where I need to pause and seek God''s wisdom more carefully?',
  'Before making your next significant decision, spend time in prayer and read a portion of Scripture before taking action.',
  'Discernment grows where prayer, Scripture, and humility meet.',
  '2026-08-14'
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
