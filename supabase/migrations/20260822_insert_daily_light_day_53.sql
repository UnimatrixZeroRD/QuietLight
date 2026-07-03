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
  'day-53-hope-that-never-fails',
  'Hope That Never Fails',
  'Biblical hope holds firmly to God''s promises, resting in His unchanging character even when circumstances remain uncertain.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  53,
  'Holding Firm to God''s Promises',
  'Isaiah 40:27-31',
  'Romans 5:1-5',
  'Romans 5:5',
  'And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us.',
  'Romans 5:5',
  'And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us.',
  $$Hope is one of the greatest treasures of the Christian life.

It is not uncertain optimism or wishful thinking. Biblical hope is the confident expectation that God will accomplish everything He has promised. It rests upon His unchanging character rather than our changing circumstances.

Isaiah spoke to a weary people who wondered whether God had forgotten them. Through the prophet, the Lord reminded them that He never grows weary and never loses sight of His children. Those who wait upon Him renew their strength. They rise above discouragement because their confidence is anchored in the everlasting God.

Paul expands this truth by showing that hope is often strengthened through hardship. Tribulation produces perseverance. Perseverance develops proven character. Character strengthens hope. This process is not pleasant, but it is purposeful.

The Way of Quiet Light reminds us that hope grows quietly.

Like a tree putting down deeper roots during a storm, believers often discover their strongest hope during life's most difficult seasons. God uses waiting, uncertainty, and even suffering to teach us that our confidence belongs in Him alone.

There may be moments when you cannot see how today's circumstances could ever lead to tomorrow's blessing.

Do not lose heart.

God's promises extend far beyond what your eyes can presently see.

Continue trusting Him.

Continue waiting upon Him.

Continue believing His Word.

Hope rooted in Christ is never misplaced.

The Lord who has carried His people through every generation remains faithful today.

Your future is secure because it rests in His hands.$$,
  $$Heavenly Father,

Thank You for the living hope I have through Jesus Christ. Strengthen my heart when discouragement comes, and remind me that Your promises never fail. Help me to wait patiently upon You, trusting that You are working even when I cannot yet see the outcome. Let my hope become a testimony of Your faithfulness.

In the name of Jesus Christ, Amen.$$,
  'What promise of God do I most need to hold onto during my present circumstances?',
  'Read one passage of Scripture that speaks of God''s promises, and carry one verse with you throughout the day.',
  'Hope grows strongest when it is rooted in the faithfulness of God rather than the certainty of circumstances.',
  '2026-08-22'
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
