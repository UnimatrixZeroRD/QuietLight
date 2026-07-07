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
  'day-98-delighting-in-gods-word',
  'Delighting in God''s Word',
  'Reading Scripture is an act of worship that teaches, corrects, strengthens, and leads willing hearts to Jesus Christ.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  98,
  'Worship Through the Scriptures',
  'Psalm 119:97-104',
  '2 Timothy 3:14-17',
  'Psalm 119:105',
  'Thy word is a lamp unto my feet, and a light unto my path.',
  'Psalm 119:105',
  'Thy word is a lamp unto my feet, and a light unto my path.',
  $$God has not left His people to walk through life without guidance.

He has graciously given His Word.

The Scriptures reveal His character, His promises, His wisdom, and His plan of redemption through Jesus Christ. They correct us when we wander, encourage us when we are weary, and strengthen us when our faith grows weak.

The psalmist declared,

"O how love I thy law!"

Notice that he did not merely respect God's Word.

He delighted in it.

Its truth became sweeter than honey and more valuable than earthly treasure because through it he came to know the heart of God.

Paul reminds Timothy that all Scripture is inspired by God and profitable for teaching, correction, instruction, and training in righteousness. The Bible does not simply increase knowledge.

It transforms lives.

The Way of Quiet Light teaches that reading Scripture is itself an act of worship.

When we open God's Word with humble hearts, we acknowledge that His wisdom is greater than our own.

We sit as students before our Heavenly Teacher.

We listen before we speak.

We receive before we respond.

Many people search endlessly for direction while neglecting the very Book through which God has chosen to speak.

Do not allow the Bible to become merely another book upon your shelf.

Let it become your daily companion.

Read it prayerfully.

Study it carefully.

Meditate upon it quietly.

Obey it faithfully.

As God's Word fills your mind, it will gradually shape your heart.

And as your heart is transformed, your worship will deepen.

The God who inspired these words still speaks through them today.$$,
  $$Heavenly Father,

Thank You for the gift of Your holy Word. Give me a deeper hunger to know the Scriptures and to understand Your truth. Help me not only to read Your Word but also to obey it with joy. May Your Word continually shape my thoughts, strengthen my faith, and draw me into closer fellowship with Jesus Christ.

In the name of Jesus Christ, Amen.$$,
  'Do I approach the Bible merely to gain information, or to know God more deeply?',
  'Slowly read one chapter of Scripture today. Before you begin, ask God to reveal something about His character and something He desires to change within your own heart.',
  'The written Word faithfully leads every willing heart to the Living Word, Jesus Christ.',
  '2026-10-06'
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
