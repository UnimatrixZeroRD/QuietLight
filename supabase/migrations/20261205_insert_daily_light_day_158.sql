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
  'day-158-faithful-in-all-things',
  'Faithful in All Things',
  'Christlike faithfulness is dependable character proven through ordinary responsibilities, promises kept, private integrity, and unseen service.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  158,
  'Reflecting the Dependability of Christ',
  'Deuteronomy 7:6-11',
  'Revelation 19:11-16',
  'Revelation 19:11',
  'He that sat upon him was called Faithful and True.',
  'Revelation 19:11',
  'He that sat upon him was called Faithful and True.',
  $$Jesus Christ is faithful and true.

He does not forget His promises.

He does not abandon His people.

He does not change with circumstances or become unreliable when faithfulness becomes costly.

From beginning to end, Scripture reveals a God whose word can be trusted.

Moses reminded Israel that the Lord keeps covenant and mercy through every generation. Human beings may change. Nations may rise and fall. Yet God's faithfulness remains steady.

The book of Revelation presents Christ returning in victory, bearing the name "Faithful and True." This is not merely something He does.

It is who He is.

Christlike character therefore includes dependability.

A faithful person can be trusted with responsibilities, relationships, promises, and private matters. Their commitment does not disappear when recognition is absent or inconvenience arrives.

The Way of Quiet Light reminds us that faithfulness is usually built in ordinary places.

Arriving when we said we would.

Keeping a promise.

Completing a responsibility.

Protecting a confidence.

Remaining loyal during difficulty.

Continuing to pray when no one knows.

These small acts may not attract attention, but they form a trustworthy life.

Faithfulness does not mean never making mistakes. It means taking responsibility when we do, seeking forgiveness, making amends where possible, and returning to the path of integrity.

Many people desire greater opportunities while neglecting the smaller responsibilities already before them.

Yet God's Kingdom often grows through people who remain dependable in unnoticed work.

Today, consider what has been entrusted to you.

A family.

A friendship.

A task.

A calling.

A promise.

Serve faithfully there.

The world has many talented people.

It desperately needs trustworthy ones.$$,
  $$Heavenly Father,

You are faithful in every promise and true in all Your ways. Shape within me the dependable character of Jesus Christ. Help me keep my word, fulfill my responsibilities, and remain faithful even when service is difficult or unseen. Where I have failed, give me humility to take responsibility and grace to make things right.

In the name of Jesus Christ, Amen.$$,
  'Is there a responsibility, promise, or relationship in which I need to become more dependable?',
  'Complete one commitment today that you have delayed or neglected, doing it carefully and without seeking praise.',
  'Faithfulness is Christlike character proven through countless promises quietly kept.',
  '2026-12-05'
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
