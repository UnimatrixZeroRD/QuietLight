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
  'day-32-renewing-the-mind',
  'Renewing the Mind',
  'God transforms believers through the renewing of the mind, reshaping thoughts, desires, priorities, and attitudes by His truth.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  32,
  'Being Transformed by God''s Truth',
  'Psalm 119:9-16',
  'Romans 12:1-2',
  'Romans 12:2',
  'And be not conformed to this world: but be ye transformed by the renewing of your mind.',
  'Romans 12:2',
  'And be not conformed to this world: but be ye transformed by the renewing of your mind.',
  $$Every day our minds are being shaped.

The voices we listen to, the words we read, the conversations we entertain, and the things upon which we dwell quietly influence the direction of our hearts. Left unattended, our thinking naturally begins to reflect the values of the world rather than the wisdom of God.

The Apostle Paul calls believers to something different.

Rather than allowing the world to mold us into its image, we are invited to experience the transforming work of God through the renewing of our minds. This renewal is not merely the accumulation of biblical knowledge. It is the gradual reshaping of our thoughts, desires, priorities, and attitudes until they increasingly resemble those of Christ.

The psalmist discovered this truth long before Paul's letter to the Romans. He treasured God's Word within his heart so that he might not sin against the Lord. Scripture became more than information—it became the foundation upon which every decision was built.

The Way of Quiet Light encourages believers to cultivate this daily renewal. Just as our bodies require nourishment each day, our minds require the truth of God's Word. A single meal cannot sustain us for a lifetime, nor can a single moment in Scripture sustain a growing faith indefinitely.

When we consistently meditate upon God's Word, we begin to see the world differently. Fear gives way to trust. Pride gives way to humility. Anger softens into patience. Confusion is replaced by wisdom. The Holy Spirit uses the Scriptures to gently reshape our thinking until our lives increasingly reflect the character of Christ.

This transformation rarely happens dramatically.

It happens verse by verse.

Prayer by prayer.

Decision by decision.

Day by day.

If your mind has been burdened by worry, bitterness, temptation, or discouragement, return to the Word of God. Let His truth become the lens through which you view every circumstance.

The mind surrendered to Christ becomes a heart prepared for faithful service.$$,
  $$Heavenly Father,

Renew my mind through Your Holy Word. Guard my thoughts from everything that draws me away from You, and help me delight in the truth of Scripture. Teach me to think as Christ thinks, to love what He loves, and to reject whatever dishonors You. Let Your Word guide every decision I make today.

In the name of Jesus Christ, Amen.$$,
  'What has been influencing my thinking more than the Word of God?',
  'Choose one verse from today''s reading and commit it to memory. Return to it throughout the day whenever your thoughts begin to wander.',
  'A life transformed by Christ begins with a mind continually renewed by His truth.',
  '2026-08-01'
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
