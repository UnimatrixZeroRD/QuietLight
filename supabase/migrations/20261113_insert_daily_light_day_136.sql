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
  'day-136-casting-every-burden',
  'Casting Every Burden',
  'Anxiety is surrendered through repeated trust, as believers cast every care upon God because He personally cares for His children.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  136,
  'Surrendering Anxiety to God',
  'Psalm 55:16-23',
  '1 Peter 5:6-11',
  '1 Peter 5:7',
  'Casting all your care upon him; for he careth for you.',
  '1 Peter 5:7',
  'Casting all your care upon him; for he careth for you.',
  $$Some burdens are too heavy for human shoulders.

Yet many of us continue carrying them as though we were meant to bear them alone.

Worries about family.

Health.

Finances.

The future.

Responsibilities.

Regrets.

One burden joins another until the soul grows weary beneath the weight.

Peter offers one of Scripture's most comforting invitations:

Cast all your cares upon Him.

Not some of them.

All of them.

Why?

Because He cares for you.

This is not merely theological truth.

It is deeply personal truth.

The God of the universe is not indifferent to the concerns of His children.

Nothing is too large for His power.

Nothing is too small for His attention.

David understood this when he wrote,

"Cast thy burden upon the LORD, and he shall sustain thee."

Notice that God does not always immediately remove the burden.

Sometimes He does something equally wonderful.

He carries it with us.

The Way of Quiet Light reminds us that surrender is often repeated daily.

Yesterday's worries have a habit of returning.

When they do, we simply place them back into God's hands again.

And again.

And again.

You were never designed to carry alone what only God can carry completely.

Today, loosen your grip.

Release the burden.

The hands that hold the stars are strong enough to hold your worries as well.$$,
  $$Heavenly Father,

Thank You for caring about every burden I carry. Forgive me for the times I cling to worries instead of surrendering them to You. Help me trust Your care, Your wisdom, and Your strength. Teach me to place my anxieties into Your hands and to rest in the peace that comes from knowing You are in control.

In the name of Jesus Christ, Amen.$$,
  'What burden am I continuing to carry that God has invited me to surrender?',
  'Write down one worry that has weighed heavily upon you and consciously offer it to God in prayer.',
  'Peace often begins when we stop carrying what God has asked us to surrender.',
  '2026-11-13'
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
