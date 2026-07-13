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
  'day-173-bold-without-pride',
  'Bold Without Pride',
  'Holy boldness is courage rooted in obedience, standing firm for Christ without aggression, self-promotion, or the need to win.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  173,
  'Courage Rooted in Obedience',
  'Jeremiah 1:4-10, 17-19',
  'Acts 4:13-31',
  'Acts 4:31',
  'And they spake the word of God with boldness.',
  'Acts 4:31',
  'And they spake the word of God with boldness.',
  $$Boldness and pride can look similar from a distance.

Both may speak firmly.

Both may refuse to retreat.

Both may stand against opposition.

Yet their hearts are entirely different.

Pride seeks to prove itself.

Holy boldness seeks to remain faithful to God.

Jesus spoke with remarkable authority, but never from insecurity or self-importance. He did not need to dominate every conversation or defend His reputation at every turn. His confidence rested in the Father and in the mission He had been given.

The apostles learned this same courage.

When Peter and John stood before the rulers who ordered them to stop speaking about Jesus, they did not respond with cruelty or panic. They simply declared that they could not remain silent about what they had seen and heard.

Afterward, the believers prayed not for comfort, revenge, or the destruction of their opponents.

They prayed for boldness.

The Way of Quiet Light reminds us that Christian courage is neither loudness nor aggression.

It is the willingness to obey God when obedience becomes costly.

Sometimes boldness means speaking truth clearly.

Sometimes it means admitting our faith openly.

Sometimes it means defending someone who is being mistreated.

Sometimes it means refusing to participate in something dishonest, degrading, or unjust.

Boldness also requires humility.

We may speak courageously and still be wrong in our timing, tone, or understanding. A Christlike heart remains open to correction even while standing firmly upon truth.

Before speaking boldly, ask:

Am I trying to honor Christ or prove myself?

Am I seeking another person's good or merely winning?

Have I prayed before I speak?

Courage surrendered to God becomes a powerful witness.

Courage driven by pride becomes another form of self-promotion.

Today, stand firm where faithfulness requires it.

But let your confidence remain quiet, humble, and rooted in Christ.$$,
  $$Heavenly Father,

Give me courage to speak and act faithfully when obedience becomes difficult. Guard me from pride, aggression, and the desire to prove myself. Help me stand firmly upon Your truth while remaining humble, prayerful, and loving. May my boldness always point others toward Jesus Christ rather than toward me.

In the name of Jesus Christ, Amen.$$,
  'When I speak boldly, am I motivated by obedience to God or by the need to win and be recognized?',
  'In one situation where you might normally remain silent from fear, speak truthfully and graciously after first praying for wisdom.',
  'Holy boldness stands firm for truth without making the self the centre of the battle.',
  '2026-12-20'
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