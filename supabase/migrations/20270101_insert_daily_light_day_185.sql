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
  'day-185-gifts-for-the-body',
  'Gifts for the Body',
  'Spiritual gifts are given for the common good, strengthening the Body of Christ through humble, cooperative, grace-filled service.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  185,
  'Using Spiritual Gifts to Strengthen Others',
  'Numbers 11:16-17, 24-30',
  '1 Corinthians 12:4-27',
  '1 Corinthians 12:7',
  'But the manifestation of the Spirit is given to every man to profit withal.',
  '1 Corinthians 12:7',
  'But the manifestation of the Spirit is given to every man to profit withal.',
  $$Every believer has something to contribute.

The Church was never designed to depend upon one person doing everything. God distributes gifts throughout the Body of Christ so that believers may strengthen, teach, encourage, serve, guide, comfort, and support one another.

Paul compares the Church to a human body.

The eye cannot replace the hand.

The ear cannot replace the foot.

Each part is different, yet every part matters.

Problems arise when gifts become reasons for pride or comparison.

Some gifts are public.

Others are quiet.

Some are immediately visible.

Others may be recognized only after years of faithful service.

Yet the Spirit does not give gifts to make one believer appear more important than another. He gives them for the common good.

Moses learned this when the burden of leadership became too heavy. God placed His Spirit upon additional elders so that responsibility could be shared. When Joshua expressed concern that others were prophesying, Moses refused jealousy. He welcomed the work of God beyond himself.

The Way of Quiet Light reminds us that mature service celebrates the gifts of others.

We do not need to control every ministry.

We do not need to be the most visible person in the room.

We do not need to perform work God has assigned to someone else.

Instead, we discover our place and serve faithfully within it.

Perhaps your gift is teaching.

Perhaps it is encouragement.

Hospitality.

Leadership.

Giving.

Administration.

Mercy.

Prayer.

Practical craftsmanship.

Whatever God has entrusted to you, use it to build others up.

A gift buried by fear cannot bless the Body.

A gift distorted by pride can wound it.

A gift surrendered to Christ becomes an instrument of grace.

Today, ask not only, "What am I good at?"

Ask, "How can what God has given me strengthen someone else?"$$,
  $$Heavenly Father,

Thank You for the gifts You distribute throughout the Body of Christ. Help me recognize and faithfully use what You have entrusted to me. Protect me from pride, comparison, jealousy, and fear. Teach me to honour the gifts of others and to serve cooperatively for the strengthening of Your Church and the glory of Jesus Christ.

In His holy name, Amen.$$,
  'Am I using my gifts to strengthen others, or mainly to gain recognition for myself?',
  'Use one of your abilities today to encourage, assist, teach, or strengthen another person without drawing attention to yourself.',
  'Spiritual gifts reach their true purpose when they become grace in someone else''s life.',
  '2027-01-01'
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
