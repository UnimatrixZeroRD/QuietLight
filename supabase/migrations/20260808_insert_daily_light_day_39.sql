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
  'day-39-the-joy-of-obedience',
  'The Joy of Obedience',
  'Obedience flows from love and gratitude, becoming the joyful response of a heart already welcomed by God''s grace in Christ.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  39,
  'Loving God Through Faithful Living',
  'Deuteronomy 10:12-13',
  'John 14:15-24',
  'John 14:15',
  'If ye love me, keep my commandments.',
  'John 14:15',
  'If ye love me, keep my commandments.',
  $$Obedience is often misunderstood.

Many people imagine God's commandments as burdens designed to limit freedom or diminish joy. Yet throughout Scripture, obedience is presented not as slavery but as the natural response of a heart that loves its Creator.

Jesus did not say, "Obey Me so that I will love you."

He said, "If ye love me, keep my commandments."

Love comes first.

Obedience follows.

This distinction changes everything.

We do not strive to earn God's acceptance through our good works. We obey because we have already been welcomed into His family through the grace of Jesus Christ. Every act of obedience becomes an expression of gratitude rather than an attempt to gain favor.

Moses taught Israel a similar lesson. God did not ask for empty rituals or outward appearances. He called His people to fear the Lord, walk in His ways, love Him, and serve Him with all their heart and soul. True obedience has always begun within the heart.

The Way of Quiet Light reminds us that obedience is often revealed in quiet moments.

Choosing honesty when dishonesty would be easier.

Speaking kindly when harsh words would come naturally.

Forgiving instead of retaliating.

Remaining faithful when no one else is watching.

These small decisions shape a life that increasingly reflects the character of Christ.

Every command God gives is rooted in His wisdom and love. He does not withhold good from His children. Instead, His instructions lead us into the fullness of life He intended from the beginning.

If there is an area where you have resisted God's leading, remember that His call to obedience is always an invitation into something better than what you are leaving behind.

Trust His heart.

Follow His voice.

You will never regret walking where Christ leads.$$,
  $$Heavenly Father,

Thank You for loving me before I could ever deserve it. Help me to obey You not out of fear, but out of love and gratitude. Strengthen my heart to follow Your Word in every circumstance, and let my life become a joyful expression of devotion to Jesus Christ. Teach me to delight in Your will, knowing that Your ways always lead to life.

In the name of Jesus Christ, Amen.$$,
  'Is there an area of my life where God has called me to obedience, but I have hesitated?',
  'Choose one command from Scripture that you know God is calling you to practice more faithfully, and intentionally live it out today.',
  'Love delights in obedience because it trusts the heart of the One who gives the command.',
  '2026-08-08'
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
