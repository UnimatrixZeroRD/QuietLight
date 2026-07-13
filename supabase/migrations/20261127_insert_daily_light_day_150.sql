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
  'day-150-faith-through-the-storm',
  'Faith Through the Storm',
  'No storm can separate believers from the love of God in Christ, whose light remains through fear, weakness, grief, waiting, and every trial.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  150,
  'Trusting the God Who Never Leaves',
  'Psalm 107:23-32',
  'Romans 8:31-39',
  'Romans 8:37',
  'In all these things we are more than conquerors through him that loved us.',
  'Romans 8:37',
  'In all these things we are more than conquerors through him that loved us.',
  $$Over these thirty days, we have walked through many kinds of storms.

Fear.

Weakness.

Silence.

Uncertainty.

Grief.

Physical suffering.

Disappointment.

Loneliness.

Unanswered prayer.

Spiritual conflict.

Sudden change.

Long seasons of waiting.

Each storm has been different.

Yet one truth has remained constant:

God has not left us.

Faith through the storm does not mean pretending the storm is harmless.

It does not deny pain, grief, exhaustion, or unanswered questions.

It means believing that none of these things can separate us from the love of God revealed in Jesus Christ.

Paul names the forces that so often frighten us:

Tribulation.

Distress.

Persecution.

Famine.

Danger.

Death itself.

Then he declares that none of them can separate believers from Christ.

We are more than conquerors—not because we escape every hardship, but because Christ's love holds us securely through every one.

Psalm 107 tells of sailors caught in a raging sea. Their courage failed, and they cried to the Lord. He brought them through the storm and guided them toward the haven they desired.

The Way of Quiet Light reminds us that every storm eventually reveals what the soul is anchored to.

If our confidence rests only in comfort, the storm can take it.

If it rests in possessions, circumstances, or human approval, the storm can shake it.

But when faith rests in Christ, the foundation remains.

The lantern may be weathered.

The keeper may be weary.

The road may still be wet beneath our feet.

But the Light has not gone out.

As this volume closes, carry these truths forward:

You may be weak, but grace is sufficient.

You may be grieving, but Christ weeps beside you.

You may be waiting, but God has not forgotten.

You may be wounded, but your story is not finished.

You may be surrounded by darkness, but the Light remains.

The goal is not to become a person who never trembles.

It is to become a person who knows where to turn when trembling begins.

Turn toward Christ.

In the storm.

After the storm.

And through every season still to come.$$,
  $$Heavenly Father,

Thank You for remaining faithful through every storm. Thank You that nothing can separate me from Your love in Jesus Christ. When future trials arise, remind me of everything You have taught me: to pray, to trust, to receive help, to surrender fear, and to keep walking one faithful step at a time. Anchor my soul in Christ and preserve the light You have entrusted to me.

In the name of Jesus Christ, Amen.$$,
  'What central truth from this volume do I most need to carry into the storms I may face in the future?',
  'Review the lessons of this volume and choose one key verse to memorize as an anchor for future seasons of hardship.',
  'The storm may change the journey, but it cannot extinguish the Light carried by a heart anchored in Christ.',
  '2026-11-27'
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
