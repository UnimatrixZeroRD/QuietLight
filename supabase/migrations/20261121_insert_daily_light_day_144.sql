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
  'day-144-forgiving-through-the-pain',
  'Forgiving Through the Pain',
  'Forgiveness does not deny deep wounds, but surrenders vengeance to God and refuses to let hatred shape the future.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  144,
  'Releasing Deep Wounds into God''s Hands',
  'Genesis 45:1-15',
  'Luke 23:32-43',
  'Luke 23:34',
  'Father, forgive them; for they know not what they do.',
  'Luke 23:34',
  'Father, forgive them; for they know not what they do.',
  $$Forgiveness is hardest when the wound is deepest.

Minor offenses may be released quickly. Betrayal, cruelty, abandonment, or injustice can leave pain that remains long after the moment itself has passed.

Joseph carried such wounds.

His brothers had hated him, sold him, and allowed their father to believe he was dead. Years later, Joseph held power over the very people who had harmed him.

He could have chosen revenge.

Instead, he wept.

He revealed himself.

And he chose mercy.

Jesus demonstrated forgiveness at an even greater depth. While suffering upon the cross, He prayed for those responsible for His pain.

"Father, forgive them."

Forgiveness does not declare the wrong acceptable.

It does not erase consequences.

It does not always restore trust immediately.

And it does not require remaining in an unsafe situation.

Forgiveness means surrendering personal vengeance into God's hands and refusing to allow hatred to shape the future.

The Way of Quiet Light reminds us that forgiveness is often a process before it becomes a settled peace.

A wound may need to be surrendered many times.

A painful memory may return.

Each time, we place it again before the Lord.

Forgiveness does not always change the person who hurt us.

But it prevents their actions from continuing to rule our hearts.

If you are carrying a deep wound today, do not pretend it is small.

Bring the full truth of it before God.

He is perfectly just.

He is deeply compassionate.

And He is able to lead wounded hearts toward freedom without denying what happened.

The cross shows us that mercy is not weakness.

It is holy strength.$$,
  $$Heavenly Father,

You know the wounds I carry and the wrongs that have been done. Help me release bitterness, hatred, and the desire for revenge into Your hands. Give me wisdom where boundaries are needed, courage where truth must be spoken, and grace to forgive as Christ has forgiven me. Heal my heart and lead me into freedom.

In the name of Jesus Christ, Amen.$$,
  'Is there a deep wound I keep reopening through resentment or imagined revenge?',
  'Pray honestly about the person who hurt you. Ask God to take over the work of justice and begin freeing your heart from bitterness.',
  'Forgiveness does not say the wound was harmless; it says the wound will not become your master.',
  '2026-11-21'
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
