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
  'day-176-restoring-the-fallen',
  'Restoring the Fallen',
  'Christlike correction speaks truth with meekness and hope, pursuing restoration rather than humiliation or indifference.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  176,
  'Correcting with Gentleness and Hope',
  '2 Samuel 12:1-13',
  'Galatians 6:1-5',
  'Galatians 6:1',
  'Restore such an one in the spirit of meekness; considering thyself, lest thou also be tempted.',
  'Galatians 6:1',
  'Restore such an one in the spirit of meekness; considering thyself, lest thou also be tempted.',
  $$When someone falls, people often rush toward one of two extremes.

Some ignore the wrongdoing entirely.

Others condemn the person without mercy.

Christ offers a better way.

Truth that restores.

Nathan demonstrated this when confronting King David. David's sin was serious, and silence would not have been love. Yet Nathan approached with wisdom, courage, and a message designed to awaken repentance rather than merely inflict humiliation.

David responded:

"I have sinned against the LORD."

Correction had opened the way toward confession.

Paul instructs believers to restore those overtaken in sin with a spirit of meekness. The word "restore" carries the idea of repairing something broken so that it can become useful again.

The goal is not destruction.

It is healing.

The Way of Quiet Light reminds us that correction requires humility because every believer remains vulnerable to temptation.

We do not approach the fallen from a position of superiority.

We approach as people who also live by mercy.

Restoration may require difficult truth.

It may require consequences.

It may require boundaries, accountability, and time.

Gentleness does not remove seriousness.

It shapes the manner in which seriousness is addressed.

Before correcting someone, ask:

Have I prayed for them?

Am I motivated by love or irritation?

Do I desire their restoration, or do I want to prove them wrong?

Am I willing to walk beside them afterward?

Christ did not merely identify brokenness.

He carried the cost of redemption.

We cannot redeem another person, but we can reflect His restoring heart.

Today, refuse both indifference and cruelty.

Speak truth where truth is needed.

Extend grace where grace is needed.

And remember that the purpose of correction is not to leave someone beneath the weight of failure, but to help them rise again in Christ.$$,
  $$Heavenly Father,

Give me wisdom and humility when another person needs correction. Guard me from harsh judgment, gossip, cowardice, and pride. Help me speak truth with gentleness and pursue restoration rather than humiliation. Remind me of my own dependence upon grace, and make me a faithful instrument of healing.

In the name of Jesus Christ, Amen.$$,
  'When others fail, do I seek their restoration or simply distance myself through judgment?',
  'Pray for someone who is struggling or has fallen. Ask God whether there is a gentle, appropriate way you can encourage them toward repentance and restoration.',
  'Christlike correction does not push the fallen deeper into the ground; it reaches down to help them stand.',
  '2026-12-23'
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
