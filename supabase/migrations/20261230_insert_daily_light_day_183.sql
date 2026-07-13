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
  'day-183-faithful-with-what-you-have',
  'Faithful with What You Have',
  'Serving God through stewardship means faithfully offering the gifts, resources, skills, and opportunities already entrusted to us.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  183,
  'Serving God Through Stewardship',
  'Exodus 35:20-29',
  'Matthew 25:14-30',
  'Matthew 25:21',
  'Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things.',
  'Matthew 25:21',
  'Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things.',
  $$God does not ask us to serve with what He has given someone else.

He asks us to serve faithfully with what He has placed in our hands.

The parable of the talents describes servants entrusted with different amounts. One received five talents, another two, and another one. Their responsibilities were not equal, but the Master expected faithfulness from each of them.

The first two servants used what they had received.

The third buried his gift.

Fear convinced him that avoiding responsibility was safer than risking failure.

Yet unused gifts cannot bless anyone.

The people of Israel demonstrated a different response while preparing the tabernacle. Those with gold brought gold. Those with fabric brought fabric. Skilled craftspeople offered their abilities. Others gave time, labour, and willing hearts.

No single person provided everything.

Together, their offerings created a place dedicated to the worship of God.

The Way of Quiet Light reminds us that stewardship is not measured by comparison.

Some people have financial resources.

Others have time.

Some possess leadership ability.

Others offer practical skill, hospitality, encouragement, wisdom, creativity, or prayer.

Every faithful gift matters.

Comparison distracts us from service.

We may envy those entrusted with greater visibility or feel ashamed because our contribution appears small. Yet the King does not evaluate us according to someone else''s calling.

He asks whether we have been faithful with our own.

A small lamp faithfully carried is more useful than a great flame hidden away.

Today, consider what God has entrusted to you.

What experience have you gained?

What ability can you offer?

What resource can you share?

What person can you encourage?

Do not wait until you possess more.

Begin with what is already in your hands.$$,
  $$Heavenly Father,

Thank You for every gift, resource, opportunity, and experience You have entrusted to me. Protect me from comparison, fear, and neglect. Teach me to use what I have faithfully for Your glory and for the good of others. May I one day hear the words, "Well done, good and faithful servant."

In the name of Jesus Christ, Amen.$$,
  'What gift or resource have I been overlooking because it seems too small to matter?',
  'Identify one ability, possession, or opportunity already available to you and use it today to serve someone else.',
  'God does not ask whether our gift is impressive, but whether it has been faithfully offered.',
  '2026-12-30'
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
