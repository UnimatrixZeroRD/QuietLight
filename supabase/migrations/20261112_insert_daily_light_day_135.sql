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
  'day-135-the-battle-unseen',
  'The Battle Unseen',
  'Invisible spiritual battles require prayer, truth, faith, Scripture, righteousness, perseverance, and dependence upon God''s protecting presence.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  135,
  'Standing Firm in Spiritual Warfare',
  '2 Kings 6:8-17',
  'Ephesians 6:10-18',
  'Ephesians 6:12',
  'For we wrestle not against flesh and blood, but against principalities, against powers...',
  'Ephesians 6:12',
  'For we wrestle not against flesh and blood, but against principalities, against powers...',
  $$Not every battle can be seen.

Some struggles take place in the quiet places of the heart and mind.

Temptation.

Discouragement.

Fear.

Accusation.

Doubt.

These battles are often invisible to everyone except the one fighting them.

Scripture reminds us that our struggle is not ultimately against people or circumstances alone. There is a spiritual dimension to the Christian life that calls for vigilance, wisdom, and dependence upon God.

When Elisha's servant looked outside and saw enemy armies surrounding the city, fear immediately took hold.

Elisha prayed a simple prayer:

"Lord, open his eyes."

Suddenly the servant saw that the mountains were filled with heavenly armies surrounding them.

The danger was real.

But so was God's protection.

The Way of Quiet Light reminds us that spiritual battles are not won through anger, pride, or self-reliance.

They are fought through prayer.

Truth.

Faith.

Scripture.

Righteousness.

And perseverance.

The armor of God is not something we wear once.

It is something we put on daily.

Perhaps today you are fighting a battle no one else can see.

Take heart.

The Lord sees it.

The Lord understands it.

And the Lord fights beside His people.

You may feel surrounded.

But God's presence surrounds you still more completely.$$,
  $$Heavenly Father,

Strengthen me for the battles that I cannot see and for the struggles that others may never understand. Help me stand firm in truth, faith, and prayer. Protect my heart and mind through Jesus Christ and remind me that I never fight alone. Open my eyes to Your presence and Your power in every conflict.

In His holy name, Amen.$$,
  'What unseen struggle or spiritual battle am I carrying today?',
  'Read Ephesians 6:10-18 slowly and prayerfully, asking God to strengthen you with each piece of spiritual armor.',
  'The believer may be surrounded by battles, but they are also surrounded by the presence of God.',
  '2026-11-12'
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
