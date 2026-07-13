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
  'day-159-strength-under-control',
  'Strength Under Control',
  'Christlike self-control is strength surrendered to God, governing words, emotions, appetites, and reactions through the Holy Spirit.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  159,
  'Practicing Christlike Self-Control',
  'Proverbs 16:27-32',
  'Matthew 26:47-56',
  'Proverbs 16:32',
  'He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city.',
  'Proverbs 16:32',
  'He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city.',
  $$The world often associates strength with force.

The strongest person is assumed to be the one who speaks most loudly, responds most quickly, or overpowers every opponent.

Scripture presents a different kind of strength.

Self-control.

The ability to govern our words, emotions, desires, and reactions under the authority of God.

Jesus demonstrated this strength throughout His life, but perhaps nowhere more clearly than during His arrest.

He was betrayed by a friend.

Surrounded by armed men.

Falsely accused.

Peter drew a sword in His defense, but Jesus commanded him to put it away.

Christ possessed the authority to call upon legions of angels. He could have ended the confrontation immediately.

Instead, He remained surrendered to the Father's will.

This was not helplessness.

It was power under perfect control.

The Way of Quiet Light reminds us that many spiritual victories occur in the moment between emotion and response.

Anger rises.

A careless word forms.

An impulse demands immediate satisfaction.

Self-control pauses.

It asks whether the next action will honor Christ or merely release emotion.

This pause is not always easy.

Yet within it, the Holy Spirit gives us freedom to choose a better response.

Self-control does not deny emotion.

Jesus experienced sorrow, anger, anguish, and grief.

But emotion never became His master.

He acted according to truth and love rather than impulse.

The same Spirit now works within believers.

We may not always control what happens around us, but through God's grace, we can learn to govern how we respond.

Sometimes strength means speaking boldly.

Sometimes it means walking away.

Sometimes it means remaining silent until anger has passed.

Sometimes it means refusing an appetite, habit, or temptation that promises satisfaction but leads toward bondage.

Today, do not ask merely whether you possess strong feelings.

Ask whether those feelings have been surrendered to Christ.

The strongest person is not always the one who wins the confrontation.

It is often the one who refuses to be ruled by it.$$,
  $$Heavenly Father,

Teach me the self-control of Jesus Christ. Help me govern my words, emotions, appetites, and reactions through the power of Your Holy Spirit. When anger, temptation, or impulse rises, give me wisdom to pause and strength to choose what honors You. May my life reflect power surrendered completely to Your will.

In the name of Jesus Christ, Amen.$$,
  'In what area of my life am I most likely to react impulsively rather than respond with Christlike self-control?',
  'When strong emotion arises today, pause before responding. Take a breath, offer a brief prayer, and choose your next words carefully.',
  'Self-control is not the absence of strength; it is strength surrendered to the wisdom of God.',
  '2026-12-06'
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
