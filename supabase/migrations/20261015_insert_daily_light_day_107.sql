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
  'day-107-delighting-in-the-lord',
  'Delighting in the Lord',
  'Delight in God grows as believers seek His presence above His gifts, allowing His love and joy to shape their desires.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  107,
  'Finding Joy in God''s Presence',
  'Psalm 37:1-7',
  'John 15:9-11',
  'Psalm 37:4',
  'Delight thyself also in the LORD; and he shall give thee the desires of thine heart.',
  'Psalm 37:4',
  'Delight thyself also in the LORD; and he shall give thee the desires of thine heart.',
  $$There is a difference between seeking God's gifts and delighting in God Himself.

Many people approach the Lord only when they need guidance, provision, or comfort. While our Heavenly Father gladly welcomes every sincere prayer, He desires something even deeper than our requests.

He desires our hearts.

David did not simply seek God's protection.

He delighted in God's presence.

His joy rested not merely in what God did but in who God is.

The promise of Psalm 37 is often misunderstood.

When we delight ourselves in the Lord, our hearts begin to change. Our desires become shaped by His will. What once seemed most important gradually gives way to a deeper longing—to know Christ, to love Him more, and to reflect His character.

Jesus expressed this beautifully.

"As the Father hath loved me, so have I loved you: continue ye in my love."

He then declared that these things were spoken so that His joy might remain in us and that our joy might be full.

The Way of Quiet Light reminds us that delight grows through daily fellowship.

The more we know God, the more we admire Him.

The more we admire Him, the more we trust Him.

The more we trust Him, the more we delight in His presence.

Worship becomes joyful because it is no longer driven by obligation.

It becomes the natural response of a heart that has discovered its greatest treasure.

Today, spend time enjoying God's presence without an agenda.

You do not always need to accomplish something.

Sometimes the greatest act of worship is simply delighting in the One who first delighted to call you His own.$$,
  $$Heavenly Father,

Teach me to delight in You above every earthly blessing. Let my greatest joy be found in knowing You through Jesus Christ. Shape my desires according to Your will, and fill my heart with the lasting joy that comes from abiding in Your love. May my worship flow naturally from a heart that treasures You above all else.

In the name of Jesus Christ, Amen.$$,
  'Do I delight more in God''s gifts or in God Himself?',
  'Spend time today reading a psalm of praise, not to study it, but simply to enjoy and celebrate the character of God.',
  'The worshiping heart discovers that God''s greatest gift is His own presence.',
  '2026-10-15'
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
