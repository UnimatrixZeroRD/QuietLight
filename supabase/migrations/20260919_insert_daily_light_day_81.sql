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
  'day-81-making-disciples',
  'Making Disciples',
  'Every follower of Christ is called to help others grow in faith through faithful example, patient teaching, encouragement, and Gospel witness.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  81,
  'Sharing the Life of Christ',
  'Deuteronomy 6:4-9',
  'Matthew 28:16-20',
  'Matthew 28:19-20',
  'Go ye therefore, and teach all nations... teaching them to observe all things whatsoever I have commanded you.',
  'Matthew 28:19-20',
  'Go ye therefore, and teach all nations... teaching them to observe all things whatsoever I have commanded you.',
  $$The Kingdom of God was never intended to stop with us.

Every follower of Jesus has been entrusted with the privilege of helping others grow in faith. This calling belongs not only to pastors, missionaries, or teachers, but to every believer whose life has been transformed by the Gospel.

Before ascending into Heaven, Jesus gave His disciples what has become known as the Great Commission. He did not simply tell them to make converts. He commanded them to make disciples—people who would learn to follow Him, obey His Word, and in turn teach others.

Discipleship begins at home.

Long before Israel entered the Promised Land, Moses instructed parents to teach God's commandments diligently to their children. Faith was to become part of daily conversation—when sitting at home, walking along the road, lying down at night, and rising in the morning.

The Way of Quiet Light embraces this same pattern.

Discipleship is not limited to classrooms or church buildings.

It happens around kitchen tables.

During quiet conversations.

While serving together.

Through faithful example.

By patiently answering questions.

Often the most powerful lessons are never formally taught.

They are quietly lived.

People watch how we respond to disappointment.

They notice how we treat strangers.

They observe our integrity, humility, forgiveness, and hope.

Our lives become living testimonies of the Gospel we proclaim.

Ask yourself today:

Who has God placed in my life to encourage toward Christ?

It may be a child.

A friend.

A coworker.

A neighbor.

A new believer.

Do not underestimate the influence of faithful example.

Kingdom disciples are formed one relationship at a time.$$,
  $$Heavenly Father,

Thank You for those who have helped me grow in faith. Give me wisdom to encourage others toward Jesus Christ through both my words and my example. Help me faithfully teach Your truth with humility, patience, and love. May my life become an invitation for others to follow Christ more closely.

In His holy name, Amen.$$,
  'Who has God entrusted to my influence, and how can I help them grow in their faith?',
  'Encourage someone spiritually today. Share a verse of Scripture, pray with them, or simply speak about God''s faithfulness in your own life.',
  'The greatest legacy we leave is not what we accomplish, but whom we faithfully help follow Christ.',
  '2026-09-19'
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
