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
  'day-40-living-with-open-hands',
  'Living with Open Hands',
  'Generosity reflects God''s grace by holding every blessing with open hands and quietly sharing time, encouragement, resources, and love.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  40,
  'The Grace of Generosity',
  'Proverbs 11:24-28',
  '2 Corinthians 9:6-11',
  '2 Corinthians 9:7',
  'God loveth a cheerful giver.',
  '2 Corinthians 9:7',
  'God loveth a cheerful giver.',
  $$Everything we possess is a gift from God.

Our time, abilities, finances, opportunities, relationships, and possessions have all been entrusted to us by our Heavenly Father. Because they ultimately belong to Him, we are invited to hold them with open hands rather than closed fists.

Generosity is more than giving money.

It is a way of living.

A generous heart gladly shares encouragement, forgiveness, hospitality, wisdom, compassion, time, and material resources. It reflects the character of God Himself, who has freely given us all things through Jesus Christ.

Paul reminds believers that giving is never to be done reluctantly or under pressure. God delights in cheerful generosity because it flows from a heart that trusts His provision. The generous believer understands that no act of kindness escapes the Lord's notice.

The book of Proverbs teaches a beautiful paradox: "There is that scattereth, and yet increaseth." God's economy often differs from our own. The more tightly we cling to earthly possessions, the more anxious we become. The more willingly we entrust them to God's purposes, the more freely our hearts experience peace and joy.

The Way of Quiet Light encourages quiet generosity.

Not every gift needs to be announced.

Not every kindness requires recognition.

Some of the greatest acts of love are known only to God and the person receiving them. These hidden offerings become beautiful acts of worship because they seek God's glory rather than human praise.

Generosity also reminds us that our true treasure is not found in what we own but in Christ Himself.

When our hearts are secure in Him, giving becomes a joy rather than a sacrifice.

Look around today.

Someone may need your encouragement.

Someone may need your time.

Someone may need your help.

Ask the Lord to show you how you can become a channel through which His generosity flows into the lives of others.$$,
  $$Heavenly Father,

Thank You for every blessing You have entrusted to me. Help me to hold everything with open hands, recognizing that it all belongs to You. Give me a generous spirit that delights in blessing others without seeking recognition. May my life reflect the abundant grace You have shown me through Jesus Christ.

In the name of Jesus Christ, Amen.$$,
  'What has God entrusted to me that I could use more generously for His Kingdom?',
  'Quietly give something today—your time, encouragement, resources, or service—to someone who needs it, expecting nothing in return.',
  'Hands opened in generosity reveal a heart that trusts completely in God''s provision.',
  '2026-08-09'
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
