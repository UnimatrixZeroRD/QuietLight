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
  'day-207-helping-others-rise-again',
  'Helping Others Rise Again',
  'Serving through restoration and hope means helping people move beyond failure through truth, accountability, mercy, and renewed faithfulness.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  207,
  'Serving Through Restoration and Hope',
  'Psalm 145:8-14',
  'John 21:15-19',
  'Psalm 145:14',
  'The LORD upholdeth all that fall, and raiseth up all those that be bowed down.',
  'Psalm 145:14',
  'The LORD upholdeth all that fall, and raiseth up all those that be bowed down.',
  $$Failure has a way of convincing people that their usefulness is over.

A poor decision.

A broken promise.

A public mistake.

A season of weakness.

Shame whispers that there is no way back.

Peter knew this feeling.

He had promised that he would remain faithful to Jesus even if everyone else fled. Yet when fear came, he denied knowing Christ three times.

After the resurrection, Jesus met Peter beside the sea.

He did not ignore what had happened.

Neither did He leave Peter trapped beneath it.

Three times Jesus asked:

“Lovest thou me?”

And three times He gave Peter a renewed calling:

“Feed my sheep.”

Christ restored both relationship and responsibility.

The Way of Quiet Light reminds us that service sometimes means helping another person believe that grace still has a future for them.

Restoration does not excuse wrongdoing.

It may require confession, consequences, accountability, and time.

But it refuses to believe that failure must become permanent identity.

People who have fallen often need more than correction.

They need someone willing to walk with them after the correction.

Someone who will remind them that repentance is a doorway, not a grave.

Someone who can recognize growth without pretending the past never happened.

We serve the King when we help wounded people return to faithfulness.

This requires wisdom.

Not every person is ready to resume every responsibility immediately.

Trust may need to be rebuilt gradually.

Certain roles may no longer be appropriate.

Yet even when one path closes, grace can still open another.

Jesus did not define Peter by his worst night.

He saw the shepherd he was still becoming.

Today, consider whether someone near you has become discouraged by failure.

Do not flatter them.

Do not minimize what happened.

But neither allow condemnation to speak more loudly than the mercy of Christ.

Help them rise.$$,
  $$Heavenly Father,

Thank You for the restoring grace of Jesus Christ. Help me respond wisely and compassionately to those who have failed. Guard me from harsh judgment, gossip, and hopelessness. Give me discernment to support genuine repentance, accountability, healing, and renewed faithfulness. May I help others rise without ignoring truth.

In the name of Jesus Christ, Amen.$$,
  'Is there someone I have defined entirely by their failure rather than by what God’s grace may still accomplish?',
  'Encourage one person who is trying to rebuild after failure. Recognize a sincere step of growth and remind them that faithfulness can begin again.',
  'Grace does not erase the lesson of failure; it refuses to let failure erase the future.',
  '2027-01-23'
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