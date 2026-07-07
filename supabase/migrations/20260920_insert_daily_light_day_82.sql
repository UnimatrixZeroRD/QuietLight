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
  'day-82-courage-without-fear',
  'Courage Without Fear',
  'Kingdom courage is obedience in the presence of fear, trusting that God goes before His servants and remains with them.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  82,
  'Standing Firm for Christ',
  'Joshua 1:1-9',
  'Acts 4:13-31',
  'Joshua 1:9',
  'Be strong and of a good courage... for the LORD thy God is with thee whithersoever thou goest.',
  'Joshua 1:9',
  'Be strong and of a good courage... for the LORD thy God is with thee whithersoever thou goest.',
  $$Courage is not the absence of fear.

It is choosing obedience even when fear is present.

Joshua faced an overwhelming responsibility. Moses was gone, and the leadership of Israel now rested upon his shoulders. Humanly speaking, the task seemed impossible. Yet God did not promise Joshua an easy journey.

He promised His presence.

Again and again the Lord declared,

"Be strong and of a good courage."

Centuries later, Peter and John stood before religious leaders who commanded them to stop speaking about Jesus. Rather than responding with anger or fear, they simply declared that they could not remain silent about what they had seen and heard. After praying together, they were filled with fresh boldness to continue proclaiming Christ.

The Way of Quiet Light reminds us that courage is often quiet.

It is the employee who refuses dishonesty.

The student who chooses integrity.

The believer who gently speaks the truth when silence would be easier.

The Christian who remains faithful during ridicule.

The parent who raises children according to God's Word despite cultural pressure.

These moments may never appear dramatic.

Yet Heaven sees every act of faithful courage.

Our confidence does not come from our own strength.

It comes from the promise that Christ walks beside us.

When fear whispers that obedience is too costly, remember the words spoken to Joshua.

"The LORD thy God is with thee."

That promise still stands.

Walk forward today with confidence.

The King never sends His servants anywhere He does not first go Himself.$$,
  $$Heavenly Father,

When fear rises within me, remind me that You are always with me. Give me courage to obey Your Word, speak Your truth with love, and remain faithful regardless of the cost. Strengthen my heart through the presence of Your Holy Spirit, and let my life reflect unwavering confidence in Jesus Christ.

In His holy name, Amen.$$,
  'Is fear preventing me from obeying God in any area of my life?',
  'Take one step of obedience you have been avoiding because of fear, trusting God''s presence to strengthen you.',
  'Kingdom courage is not confidence in ourselves—it is confidence in the God who goes before us.',
  '2026-09-20'
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
