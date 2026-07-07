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
  'day-95-a-clean-heart',
  'A Clean Heart',
  'Confession and repentance deepen worship by bringing every failure honestly before God and receiving the cleansing mercy of Christ.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  95,
  'Worship Through Confession and Repentance',
  'Psalm 51:1-17',
  '1 John 1:5-10',
  'Psalm 51:10',
  'Create in me a clean heart, O God; and renew a right spirit within me.',
  'Psalm 51:10',
  'Create in me a clean heart, O God; and renew a right spirit within me.',
  $$One of the greatest barriers to worship is an unconfessed heart.

God does not ask us to hide our failures from Him. He already knows every thought, every word, and every action. What He desires is honesty. Worship begins to deepen when we stop pretending and come before Him with humility and repentance.

After David's sin with Bathsheba, he could have defended himself, shifted the blame, or ignored his guilt. Instead, he fell before God in brokenness.

"Against thee, thee only, have I sinned."

David understood that true repentance is more than feeling sorry for sin.

It is turning away from it and returning to the God whose mercy is greater than our failure.

John gives believers a wonderful promise:

"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness."

Notice that forgiveness rests upon God's faithfulness, not our perfection.

The Way of Quiet Light reminds us that confession is an act of worship because it acknowledges God's holiness, His truth, and His grace.

A proud heart hides.

A worshiping heart confesses.

When we humble ourselves before the Lord, we discover that His mercy is always greater than our guilt.

Do not allow shame to keep you distant from God.

Run toward Him.

The cross has already declared His willingness to forgive.

Today, bring every burden into His presence.

Leave with a heart made clean by His grace.$$,
  $$Heavenly Father,

Search my heart and reveal anything that grieves Your Spirit. I confess my sins before You, trusting completely in the mercy made possible through Jesus Christ. Create within me a clean heart, renew my spirit, and restore the joy of my salvation. Help me walk in holiness and sincere devotion to You each day.

In the name of Jesus Christ, Amen.$$,
  'Is there anything I have been reluctant to confess and surrender to God?',
  'Spend time in quiet self-examination before the Lord. Confess every known sin, receive His forgiveness with gratitude, and thank Him for His restoring grace.',
  'A cleansed heart becomes a sanctuary where worship can freely flourish.',
  '2026-10-03'
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
