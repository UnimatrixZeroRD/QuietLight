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
  'day-142-beginning-again',
  'Beginning Again',
  'Failure and loss do not have the final word because Christ restores purpose, redeems what seemed wasted, and calls His people forward.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  142,
  'Faith After Loss and Failure',
  'Joel 2:21-27',
  'John 21:1-19',
  'Joel 2:25',
  'And I will restore to you the years that the locust hath eaten.',
  'Joel 2:25',
  'And I will restore to you the years that the locust hath eaten.',
  $$There are moments when life feels impossible to rebuild.

A failure changes the future.

A relationship ends.

A dream collapses.

A season of loss leaves behind only questions and empty spaces.

Peter must have felt this way after denying Jesus.

He had promised loyalty.

He had spoken with confidence.

Then, when courage was required, he failed three times.

After the resurrection, Peter returned to fishing—the life he knew before Christ called him. Perhaps the familiar work offered temporary refuge from his shame.

But Jesus came looking for him.

On the shore, beside a charcoal fire, Christ did not pretend Peter's failure had never happened. He faced it directly, asking three times:

"Lovest thou me?"

For every denial, there came an opportunity to confess love.

For every failure, there came a renewed calling.

"Feed my sheep."

The Way of Quiet Light reminds us that failure does not have to become identity.

Loss does not have to become destiny.

Christ does not merely forgive the past.

He restores purpose.

Beginning again may not mean returning to life exactly as it was. Restoration is not always replacement. Sometimes God builds something new from what remains.

Joel promised that the years consumed by devastation could be restored by the Lord. Time itself could not be returned, but God could redeem what seemed wasted and bring fruit from barren places.

Perhaps you are standing at the edge of a new beginning.

Do not wait until you feel completely fearless.

Do not wait until every wound disappears.

Answer Christ's invitation with the faith you have.

The One who restored Peter still restores His people.$$,
  $$Heavenly Father,

Thank You that failure and loss do not have the final word. Forgive me where I have fallen, heal what has been broken, and give me courage to begin again. Restore my sense of purpose and help me trust that You can redeem even the years that seem wasted. Lead me forward in the grace of Jesus Christ.

In His holy name, Amen.$$,
  'What failure or loss have I allowed to define me more than the restoring grace of Christ?',
  'Take one small step toward a new beginning today—make the call, offer the apology, return to prayer, or resume the responsibility God has placed before you.',
  'Grace does not merely close the door on yesterday; it opens the way into tomorrow.',
  '2026-11-19'
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
