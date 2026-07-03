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
  'day-58-called-to-holiness',
  'Called to Holiness',
  'Holiness means belonging completely to God, growing daily so that thoughts, words, attitudes, and actions reflect Christ.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  58,
  'Reflecting the Character of God',
  'Leviticus 19:1-4',
  '1 Peter 1:13-21',
  '1 Peter 1:15',
  'But as he which hath called you is holy, so be ye holy in all manner of conversation.',
  '1 Peter 1:15',
  'But as he which hath called you is holy, so be ye holy in all manner of conversation.',
  $$Holiness is often misunderstood.

Some imagine it as perfection reserved for a few exceptionally spiritual people. Others think it means withdrawing completely from the world. Scripture presents something far richer.

Holiness means belonging completely to God.

It is the gradual transformation of our lives so that our thoughts, words, attitudes, and actions increasingly reflect the character of Jesus Christ.

Peter reminds believers that because God is holy, His children are called to pursue holiness in every area of life. This calling is not based upon fear or legalism. It flows from gratitude for the grace we have already received through Christ.

We do not pursue holiness in order to earn salvation.

We pursue holiness because we have been redeemed.

The Way of Quiet Light teaches that holiness is often revealed in ordinary faithfulness.

Choosing honesty when deception would be easier.

Showing mercy when anger feels justified.

Practicing purity in both thought and action.

Keeping promises.

Speaking truth with love.

Serving quietly.

Remaining faithful when no one else is watching.

These daily decisions gradually shape a life that reflects God's holiness.

Holiness is not about appearing more religious than others.

It is about becoming more like Christ.

As we spend time in His presence, His character quietly reshapes our own.

The Holy Spirit patiently reveals attitudes that need to change and strengthens us to walk in obedience.

Do not become discouraged by your imperfections.

Growth in holiness is lifelong.

Each day offers another opportunity to surrender yourself more fully to God.

The One who has called you is faithful.

He is not only calling you to holiness—

He is also giving you the grace to pursue it.$$,
  $$Heavenly Father,

Thank You for calling me to belong completely to You. Shape my life so that it increasingly reflects the holiness of Jesus Christ. Reveal anything within me that dishonors You, and give me the courage to repent and obey. May my thoughts, words, and actions become a testimony of Your transforming grace.

In the name of Jesus Christ, Amen.$$,
  'In what area of my life is God inviting me to become more like Christ?',
  'Ask the Holy Spirit to reveal one attitude or habit that needs to change, and prayerfully begin taking one step of obedience today.',
  'Holiness is not achieved in a single moment—it is cultivated through a lifetime of walking closely with Christ.',
  '2026-08-27'
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
