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
  'day-42-encouraging-one-another',
  'Encouraging One Another',
  'God calls believers to strengthen one another through attentive love, hopeful words, sincere prayer, and faithful acts of encouragement.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  42,
  'Building Up the Body of Christ',
  'Isaiah 40:28-31',
  'Hebrews 10:19-25',
  'Hebrews 10:24',
  'And let us consider one another to provoke unto love and to good works.',
  'Hebrews 10:24',
  'And let us consider one another to provoke unto love and to good works.',
  $$No believer was meant to walk alone.

From the beginning, God designed His people to encourage, strengthen, and support one another. The Christian life is deeply personal, but it is never intended to be isolated.

The writer of Hebrews urges believers not only to gather together but to intentionally consider how they might encourage one another toward love and good works. This requires more than simply attending worship. It requires paying attention to the needs of others and responding with compassion.

Encouragement is one of the simplest yet most powerful ministries available to every Christian.

You do not need a public platform to encourage someone.

A handwritten note.

A thoughtful phone call.

A sincere prayer.

A listening ear.

A quiet reminder of God's promises.

These small acts often become life-changing moments in the lives of those who receive them.

Isaiah reminds us that even the strongest grow weary. Every person you meet is carrying burdens that may not be visible. Some are battling illness. Others are grieving. Many quietly wrestle with fear, loneliness, disappointment, or doubt.

The Way of Quiet Light teaches that faithful disciples learn to notice these unseen burdens. We become attentive to those who have been overlooked, offering hope without seeking recognition for ourselves.

Encouragement is not pretending that difficulties do not exist. Rather, it is gently reminding one another that God remains faithful in the midst of them.

Perhaps God has placed someone upon your heart today.

Do not ignore that prompting.

A simple message or kind conversation may become the very encouragement they have been praying for.

As Christ has strengthened you, become a source of strength for someone else.

His grace was never meant to stop with us.

It is meant to flow through us.$$,
  $$Heavenly Father,

Thank You for the people You have placed in my life. Help me to become an encouragement to others through my words, my actions, and my prayers. Open my eyes to recognize those who are weary or discouraged, and give me wisdom to strengthen them with Your truth and love. May my life reflect the compassion of Jesus Christ every day.

In the name of Jesus Christ, Amen.$$,
  'Who in my life may need encouragement today, and how can I faithfully strengthen them?',
  'Reach out to one person today simply to encourage them. Share a Scripture, offer a prayer, or remind them that they are not alone.',
  'God often answers someone''s prayer by sending a faithful believer with words of hope.',
  '2026-08-11'
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
