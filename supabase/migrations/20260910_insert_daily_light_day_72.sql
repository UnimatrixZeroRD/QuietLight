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
  'day-72-loving-your-enemies',
  'Loving Your Enemies',
  'The radical love of Christ calls believers to respond to opposition with prayer, mercy, restraint, forgiveness, and grace rather than hatred.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  72,
  'The Radical Love of Christ',
  'Proverbs 25:21-22',
  'Matthew 5:43-48',
  'Matthew 5:44',
  'Love your enemies, bless them that curse you, do good to them that hate you.',
  'Matthew 5:44',
  'Love your enemies, bless them that curse you, do good to them that hate you.',
  $$Few teachings of Jesus challenge us more deeply than this one.

Loving our friends feels natural.

Loving those who love us is expected.

But loving our enemies...

That is the unmistakable mark of God's Kingdom.

Jesus does not ask us to approve of evil or ignore injustice. Rather, He calls us to respond to hatred without becoming hateful ourselves. The cycle of revenge is broken only when someone chooses grace over retaliation.

This is exactly what Christ did.

While hanging upon the cross, surrounded by those who mocked and crucified Him, He prayed, "Father, forgive them; for they know not what they do."

His love was not dependent upon the worthiness of those receiving it.

Neither should ours be.

The book of Proverbs teaches that if our enemy is hungry, we should feed him. If he is thirsty, we should give him water. These acts of kindness are not signs of weakness. They are demonstrations that God's love is greater than human hatred.

The Way of Quiet Light reminds us that loving an enemy often begins quietly.

Praying for them instead of speaking against them.

Refusing to spread gossip.

Choosing not to rejoice when they suffer.

Speaking truth without malice.

Leaving justice in God's hands.

This kind of love is impossible through human strength alone.

It is the work of the Holy Spirit within a surrendered heart.

When we love those who oppose us, we reveal something extraordinary.

We reveal the character of our Heavenly Father.

Today, ask yourself not whether someone deserves your kindness.

Instead ask whether your response reflects the love that Christ has already shown to you.$$,
  $$Heavenly Father,

Your love reached me even while I was still a sinner. Help me to reflect that same grace toward those who oppose, misunderstand, or mistreat me. Guard my heart from bitterness, hatred, and revenge. Fill me with the love of Christ so that my life may become a witness to the transforming power of the Gospel.

In the name of Jesus Christ, Amen.$$,
  'Is there someone I struggle to love as Christ has loved me?',
  'Pray sincerely for someone who has hurt you. Ask God to bless them, guide them, and continue His work within your own heart.',
  'The love of Christ shines brightest when it reaches those who least expect to receive it.',
  '2026-09-10'
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
