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
  'day-28-the-cost-of-discipleship',
  'The Cost of Discipleship',
  'Discipleship calls believers to follow Christ above all else, surrendering self-centered living and carrying the cross daily with faithful devotion.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  28,
  'Following Christ Above All Else',
  'Deuteronomy 6:4-9',
  'Luke 9:23-26',
  'Luke 9:23',
  'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.',
  'Luke 9:23',
  'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.',
  $$Every worthwhile journey requires commitment.

No builder begins constructing a house without first counting the cost. No farmer expects a harvest without months of faithful labor. In the same way, Jesus never hid the cost of following Him. He invited people not merely to admire His teachings but to become His disciples.

The call of Christ is both simple and demanding.

It is simple because salvation is received by grace through faith. It is demanding because grace transforms the entire direction of our lives. Jesus calls us to deny ourselves—not because He desires to diminish us, but because He desires to free us from the tyranny of self-centered living.

To take up our cross is to surrender our own will each day and place Christ at the center of every decision. It means choosing forgiveness when resentment seems easier. It means speaking truth with love when silence would be more comfortable. It means pursuing holiness even when compromise appears more convenient.

Moses gave Israel a similar command before they entered the Promised Land. The people were instructed to love the Lord with all their heart, soul, and strength. God's Word was to shape every part of their lives, from their homes to their daily conversations.

The Way of Quiet Light embraces this same wholehearted devotion. Discipleship is not confined to Sunday worship or moments of public ministry. It is lived quietly in ordinary decisions made throughout the day. Every choice either draws us closer to Christ or farther from Him.

The cost of discipleship is real, but so is its reward.

Whatever we surrender for Christ, we gain something infinitely greater—His presence, His peace, His purpose, and the promise of eternal life. Nothing we leave behind compares with what He has prepared for those who love Him.

As you walk today, ask yourself not what following Christ might cost you, but what life would become without Him. The answer reveals the immeasurable worth of the Savior.$$,
  $$Heavenly Father,

Help me to follow Jesus with an undivided heart. Give me courage to deny myself whenever my desires conflict with Your will. Strengthen me to carry my cross faithfully each day, trusting that Your ways lead to life. May my greatest desire always be to know Christ more fully and to honor Him in everything I do.

In the name of Jesus Christ, Amen.$$,
  'Is there anything I have been unwilling to surrender in order to follow Christ more faithfully?',
  'Prayerfully identify one area where God is calling you to deeper obedience, and take one practical step toward that obedience today.',
  'The cross we carry today becomes the testimony of the Savior we follow forever.',
  '2026-07-28'
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
