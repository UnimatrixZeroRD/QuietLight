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
  'day-24-standing-firm',
  'Standing Firm',
  'Faithfulness stands firm through every trial, rooted not in human determination but in the sustaining presence and promises of God.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  24,
  'Remaining Faithful Through Every Trial',
  'Joshua 1:1-9',
  '1 Corinthians 15:50-58',
  '1 Corinthians 15:58',
  'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord.',
  '1 Corinthians 15:58',
  'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord.',
  $$Every believer will encounter seasons that test their faith.

Some trials arrive suddenly, while others unfold slowly over months or even years. They may come through illness, disappointment, loneliness, temptation, persecution, or uncertainty. In those moments, the question is not whether our faith will be tested, but where our confidence is anchored.

When Joshua assumed the leadership of Israel after the death of Moses, the task before him must have seemed overwhelming. Yet God did not promise that every obstacle would disappear. Instead, He gave Joshua a command that would sustain him throughout his life: "Be strong and of a good courage." That strength was not rooted in Joshua's abilities but in God's continual presence.

The Apostle Paul expressed the same confidence near the close of his ministry. After speaking of Christ's victory over death, he urged believers to remain steadfast and immovable, knowing that their labor in the Lord is never in vain.

The Way of Quiet Light teaches that faithfulness is often quieter than we imagine. Standing firm does not always require dramatic acts of courage. More often, it means continuing to pray when answers seem delayed, continuing to worship when emotions are weak, continuing to love when others disappoint us, and continuing to obey when no one else notices.

Faithfulness is measured one day at a time.

A tree does not survive the storm because it resists every gust of wind by its own strength. It survives because its roots run deep. Likewise, our confidence rests not in our own determination but in the unchanging faithfulness of God.

If you feel weary today, remember that the Lord who called you is also the One who sustains you. His promises remain secure, His Spirit remains present, and His grace remains sufficient.

Stand firm—not because you are incapable of falling, but because Christ is able to keep you.$$,
  $$Heavenly Father,

Strengthen me to stand firm in every season of life. When trials come, keep my heart rooted in Your promises and my eyes fixed upon Jesus Christ. Give me courage to remain faithful, wisdom to endure with patience, and confidence that You are working even when I cannot yet see the outcome. Let my life remain steadfast for Your glory.

In the name of Jesus Christ, Amen.$$,
  'What trial is currently testing my faith, and how can I choose steadfastness today?',
  'Read Joshua 1:9 several times today. Whenever fear or discouragement arises, repeat the verse as a reminder of God''s presence.',
  'Faithfulness is not measured by never facing storms, but by continuing to stand with Christ through them.',
  '2026-07-24'
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
