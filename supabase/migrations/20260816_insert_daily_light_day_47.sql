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
  'day-47-persevering-in-prayer',
  'Persevering in Prayer',
  'Persevering prayer remains faithful in communion with God, trusting His timing while drawing the heart nearer to Christ.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  47,
  'Remaining Faithful in Communion with God',
  'Daniel 6:10-23',
  'Luke 18:1-8',
  'Luke 18:1',
  'Men ought always to pray, and not to faint.',
  'Luke 18:1',
  'Men ought always to pray, and not to faint.',
  $$Prayer is not simply how we begin the Christian life—it is how we continue walking with God.

There are seasons when prayer flows naturally. Our hearts are full of thanksgiving, our faith feels strong, and God's presence seems especially near. Yet there are other seasons when prayer feels difficult. Heaven appears silent, answers seem delayed, and discouragement quietly whispers that our prayers accomplish little.

Jesus knew His disciples would face such moments.

For this reason, He told the parable of the persistent widow, teaching them that they "ought always to pray, and not to faint." Persistence in prayer is not about persuading a reluctant God to care. It is about developing a heart that continues trusting Him even when His answers unfold according to His perfect timing rather than our own.

Daniel provides a beautiful example of unwavering faithfulness.

When prayer became illegal, he continued kneeling before the Lord just as he had always done. His confidence rested not in the absence of danger but in the presence of God. Though the lions' den awaited him, Daniel chose obedience over fear.

The Way of Quiet Light reminds us that many of God's greatest works begin in hidden places of prayer. Before ministries flourish, lives change, or hearts are healed, someone has quietly remained faithful before the Lord.

Prayer also shapes us.

As we continue bringing our concerns before God, our perspective begins to change. We become less anxious and more trusting, less impatient and more peaceful. We learn to desire God's will above our own.

Do not measure the effectiveness of prayer by how quickly circumstances change.

Measure it by how faithfully it draws you nearer to Christ.

If you have been tempted to grow weary in prayer, take heart.

The Father who hears in secret has not forgotten you.

Continue praying.

Continue trusting.

Continue waiting.

His faithfulness has never failed.$$,
  $$Heavenly Father,

Strengthen me to remain faithful in prayer. Guard me from discouragement when answers seem delayed, and teach me to trust Your perfect timing. Draw me closer to You each day, shaping my heart through quiet communion with Your Spirit. Help me to pray with confidence, perseverance, and unwavering faith.

In the name of Jesus Christ, Amen.$$,
  'Have I become discouraged in prayer because God has not answered according to my expectations?',
  'Spend extra time in prayer today for one request you have nearly given up on. Offer it again to God with renewed trust.',
  'Every faithful prayer is heard, even when the answer has not yet appeared.',
  '2026-08-16'
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
