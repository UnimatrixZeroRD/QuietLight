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
  'day-67-faithful-stewards',
  'Faithful Stewards',
  'Faithful stewards recognize that every blessing belongs first to God and use what He has entrusted for His glory and the good of others.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  67,
  'Caring for What God Has Entrusted',
  'Genesis 2:15-17',
  '1 Peter 4:7-11',
  '1 Peter 4:10',
  'As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.',
  '1 Peter 4:10',
  'As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.',
  $$Nothing we possess truly belongs to us.

From the very beginning, God placed Adam in the garden "to dress it and to keep it." Humanity was not created to exploit creation carelessly but to steward it faithfully. This principle extends far beyond the Garden of Eden.

Our time.

Our abilities.

Our relationships.

Our finances.

Our opportunities.

Even the Gospel itself.

All have been entrusted to us by God.

A steward is not an owner.

A steward is a faithful caretaker.

This understanding changes the way we view every part of life. Instead of asking, "What do I want to do with what I have?" we begin asking, "Lord, how would You have me use what You have entrusted to me?"

Peter reminds believers that every spiritual gift has been given for the benefit of others. Whether we teach, serve, encourage, lead, show hospitality, or quietly pray for those around us, every gift becomes an opportunity to glorify God.

The Way of Quiet Light reminds us that faithful stewardship is often unseen.

The parent who patiently raises children in the knowledge of the Lord.

The believer who quietly supports someone in need.

The volunteer who faithfully serves without applause.

The person who wisely manages resources so they can be generous when opportunities arise.

These quiet acts of stewardship strengthen God's Kingdom in ways that may never be fully known in this life.

Faithfulness is measured not by how much we have been given, but by how wisely we use what we have received.

One day we will give an account, not as owners, but as stewards.

May we hear our Master say,

"Well done, good and faithful servant."$$,
  $$Heavenly Father,

Everything I have comes from You. Teach me to become a faithful steward of my time, my gifts, my resources, and every opportunity You place before me. Help me to use them wisely for Your glory and for the blessing of others. May my life reflect gratitude for every gift You have entrusted to my care.

In the name of Jesus Christ, Amen.$$,
  'What gift or responsibility has God entrusted to me that I could steward more faithfully?',
  'Choose one resource God has given you—your time, talents, finances, or encouragement—and intentionally use it today to bless someone else.',
  'Stewardship begins when we recognize that every blessing is first God''s before it is ours.',
  '2026-09-05'
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
