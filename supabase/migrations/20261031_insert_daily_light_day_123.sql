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
  'day-123-when-heaven-seems-silent',
  'When Heaven Seems Silent',
  'Seasons of silence test faith deeply, yet God''s quietness is never absence and often hides His unseen work within waiting hearts.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  123,
  'Trusting God in Seasons of Waiting',
  'Psalm 13:1-6',
  'John 11:1-44',
  'Psalm 13:1',
  'How long wilt thou forget me, O LORD? for ever?',
  'Psalm 13:1',
  'How long wilt thou forget me, O LORD? for ever?',
  $$Few experiences test faith more deeply than silence.

The prayers continue.

The tears continue.

The waiting continues.

Yet Heaven appears quiet.

David knew this feeling.

Again and again he cried out,

"How long, O Lord?"

Scripture does not hide these questions.

Instead, it gives voice to them.

Faith is not pretending that waiting is easy.

Faith is continuing to trust while waiting remains difficult.

Mary and Martha knew this pain as well.

They sent word that Lazarus was sick.

Jesus loved them deeply.

Yet He delayed His arrival.

From their perspective, Heaven was silent.

By the time Jesus arrived, Lazarus had died.

But what appeared to be delay was not absence.

What felt like silence was not indifference.

Christ had not abandoned them.

He was preparing something greater than they could yet understand.

The Way of Quiet Light reminds us that God's silence is not God's absence.

The roots of great trees grow deepest during seasons when little appears to happen above the surface.

Likewise, God often performs His deepest work within us during seasons when we see the least evidence of His activity.

If Heaven seems quiet today, continue trusting.

Continue praying.

Continue walking.

The God who seems silent is often working in ways we cannot yet see.

His timing is not always our timing.

But His faithfulness never changes.$$,
  $$Heavenly Father,

When Your answers seem delayed and Heaven feels silent, help me continue trusting in Your goodness. Strengthen my faith during seasons of waiting and remind me that Your silence never means abandonment. Give me patience to trust Your timing and confidence that You are always working for my good and Your glory.

In the name of Jesus Christ, Amen.$$,
  'Is there an unanswered prayer that has caused me to question God''s presence or faithfulness?',
  'Bring that prayer before God once again today, not demanding answers but expressing trust in His wisdom and timing.',
  'God''s silence is never empty. Often it is the quiet sound of unseen work being done.',
  '2026-10-31'
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
