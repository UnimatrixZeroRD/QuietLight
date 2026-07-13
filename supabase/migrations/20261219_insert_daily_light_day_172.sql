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
  'day-172-steadfast-in-hope',
  'Steadfast in Hope',
  'Christlike hope anchors the heart in God''s promises, speaking truth to discouragement and remembering resurrection beyond present suffering.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  172,
  'Confidence Rooted in the Father''s Promises',
  'Psalm 42:1-11',
  'Hebrews 12:1-3',
  'Psalm 42:11',
  'Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God.',
  'Psalm 42:11',
  'Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God.',
  $$Hope is not merely a feeling.

Feelings rise and fall.

Hope is a decision to anchor the heart in the faithfulness of God.

Jesus lived with this steadfast hope throughout His earthly ministry.

He knew rejection awaited Him.

He knew His disciples would scatter.

He knew the cross stood ahead.

Yet He also knew the Father's purpose would prevail.

The writer of Hebrews says that Jesus endured the cross because of the joy set before Him. He saw beyond present suffering toward resurrection, redemption, and the restoration His sacrifice would accomplish.

Christ did not deny the pain before Him.

He refused to believe pain would have the final word.

The psalmist also spoke honestly to his discouraged soul.

He did not pretend sadness was absent.

He questioned it.

He named it.

Then he redirected his heart:

"Hope thou in God."

The Way of Quiet Light reminds us that sometimes the soul must be gently reminded of what it already knows.

God remains faithful.

His promises remain true.

His mercy remains new.

His Kingdom remains unshaken.

Hope does not require every circumstance to improve immediately.

It requires a trustworthy foundation.

A lantern continues shining because the flame within it remains protected. In the same way, Christian hope survives difficult seasons because it is sheltered within the promises of God.

There may be days when hope feels strong.

There may be days when it feels like the smallest remaining ember.

Do not despise the ember.

Protect it.

Feed it with Scripture.

Strengthen it through prayer.

Surround it with faithful people.

Remember what God has already done.

The resurrection of Jesus Christ stands as the eternal declaration that darkness, suffering, sin, and death do not have the final word.

Today, speak to your own soul.

Do not allow temporary circumstances to define eternal reality.

Hope in God.

The One who carried Christ through the cross and into resurrection remains faithful still.$$,
  $$Heavenly Father,

When discouragement weighs heavily upon me, anchor my heart in Your promises. Help me fix my eyes upon Jesus and remember that present trials do not determine the final outcome. Renew my hope through Your Word, strengthen me through Your Spirit, and keep me steadfast through every season.

In the name of Jesus Christ, Amen.$$,
  'What circumstance has been speaking more loudly to me than the promises of God?',
  'Choose one verse of hope today and repeat it whenever discouragement rises. Let God''s promise become the answer you speak to your own soul.',
  'Steadfast hope does not deny the darkness; it remembers that resurrection has already answered it.',
  '2026-12-19'
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