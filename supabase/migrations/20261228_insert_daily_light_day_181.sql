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
  'day-181-called-to-serve',
  'Called to Serve',
  'Serving the King means following the example of Jesus, who chose humility, compassion, hidden service, and sacrificial love.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  181,
  'Following the Example of the Servant King',
  'Isaiah 42:1-7',
  'Mark 10:35-45',
  'Mark 10:45',
  'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
  'Mark 10:45',
  'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
  $$Jesus Christ is the King of kings.

All authority belongs to Him.

Angels worship Him.

Creation obeys His voice.

Yet when He entered the world, He chose the path of a servant.

He washed feet.

Fed the hungry.

Touched the unclean.

Welcomed children.

Comforted the grieving.

And ultimately gave His life for the salvation of others.

When James and John sought places of honour beside Christ, they were still imagining greatness according to the kingdoms of the world. They wanted position, recognition, and authority.

Jesus offered them a different vision.

In His Kingdom, greatness is not measured by how many people serve us.

It is measured by how faithfully we serve others.

Service is not beneath the Christian.

It is the path Christ Himself walked.

Isaiah foretold the coming Messiah as the Servant of the Lord—gentle with the bruised, faithful in His mission, and committed to bringing justice and light to the nations.

The Way of Quiet Light embraces this pattern of hidden service.

Not every ministry requires a title.

Not every calling requires a platform.

Much of God's work is accomplished through ordinary people who quietly recognize a need and respond with love.

Preparing food for someone who is ill.

Driving a neighbour to an appointment.

Listening patiently to someone who is lonely.

Cleaning a room after others have gone.

Praying faithfully for people who may never know.

These acts may appear small, but nothing offered to Christ is insignificant.

We do not serve in order to earn God's love.

We serve because His love has already been poured into us.

Grace received becomes grace extended.

Mercy experienced becomes mercy offered.

The hands that Christ has cleansed become hands ready to help.

Today, look around you.

Do not ask whether the opportunity is impressive.

Ask whether it is faithful.

The King is often served most beautifully through the needs of the person standing directly before us.$$,
  $$Heavenly Father,

Thank You for the example of Jesus Christ, who came not to be served but to serve. Remove pride, selfishness, and the desire for recognition from my heart. Open my eyes to the needs around me and give me willing hands, patient words, and a compassionate spirit. May every act of service become an offering of love to my King.

In the name of Jesus Christ, Amen.$$,
  'Am I more interested in being recognized for serving, or in quietly meeting the needs God places before me?',
  'Perform one practical act of service today without seeking attention, praise, or repayment.',
  'We serve the King whenever we humbly care for those He places in our path.',
  '2026-12-28'
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
