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
  'day-27-faithful-stewardship',
  'Faithful Stewardship',
  'Faithful stewardship honors God by wisely using the time, gifts, resources, and responsibilities He has entrusted to each believer.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  27,
  'Honoring God with What He Has Entrusted',
  'Psalm 24:1-6',
  'Matthew 25:14-30',
  '1 Corinthians 4:2',
  'Moreover it is required in stewards, that a man be found faithful.',
  '1 Corinthians 4:2',
  'Moreover it is required in stewards, that a man be found faithful.',
  $$Everything we possess ultimately belongs to God.

Our time, abilities, resources, relationships, opportunities, and even the breath within our lungs are gifts entrusted to us by our Creator. Scripture describes us not as owners but as stewards—caretakers who have been entrusted with responsibilities that ultimately belong to another.

This truth changes how we view every aspect of life.

The parable of the talents teaches that God does not measure success by comparing us with others. Each servant received different responsibilities according to his ability. The master's expectation was not equality of results but faithfulness with what had been entrusted.

Likewise, the Lord has uniquely equipped every believer for His purposes. Some are called to teach. Others encourage quietly behind the scenes. Some possess financial resources, while others offer hospitality, compassion, craftsmanship, wisdom, or prayer. No gift is insignificant when placed into God's hands.

The Way of Quiet Light encourages believers to serve faithfully without seeking recognition. Much of God's work is accomplished through ordinary people faithfully carrying out ordinary responsibilities with extraordinary love. The parent teaching a child, the neighbor offering a helping hand, the volunteer serving without applause, the believer praying faithfully in private—all are valuable in the Kingdom of God.

Faithful stewardship also includes how we care for creation, manage our finances, use our words, and invest our time. Every decision becomes an opportunity to honor the One who has entrusted these gifts to us.

One day each of us will give an account—not of how much we possessed, but of how faithfully we used what God provided.

Do not compare your calling with someone else's. Instead, ask yourself, "How can I faithfully use what God has placed in my hands today?"

The Lord delights in those who quietly serve with grateful and faithful hearts.

When our lives are surrendered to Him, even the smallest offering becomes an act of worship.$$,
  $$Heavenly Father,

Everything I have comes from You. Thank You for entrusting me with gifts, opportunities, and responsibilities. Help me to use them wisely and faithfully for Your glory. Guard me against selfishness and comparison, and teach me to serve with humility, generosity, and gratitude. May my life reflect the faithfulness of a good steward.

In the name of Jesus Christ, Amen.$$,
  'What gift, opportunity, or responsibility has God entrusted to me that I could use more faithfully?',
  'Choose one resource God has given you—your time, abilities, finances, or encouragement—and intentionally use it today to bless someone else.',
  'God does not ask us to manage someone else''s gifts—only to faithfully steward our own.',
  '2026-07-27'
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
