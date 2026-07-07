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
  'day-61-citizens-of-heaven',
  'Citizens of Heaven',
  'Citizens of Heaven live faithfully on earth with an eternal perspective, reflecting the priorities and character of God''s Kingdom.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  61,
  'Living with an Eternal Perspective',
  'Jeremiah 29:4-13',
  'Philippians 3:17-21',
  'Philippians 3:20',
  'For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ.',
  'Philippians 3:20',
  'For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ.',
  $$Every follower of Jesus Christ lives between two worlds.

We are citizens of the nations where God has placed us, called to love our neighbors, obey lawful authority, seek justice, and contribute to the welfare of our communities. Yet above every earthly citizenship stands a far greater identity.

We belong to the Kingdom of God.

The Apostle Paul reminded the believers in Philippi that although they lived under the authority of Rome, their true citizenship was in Heaven. Their greatest loyalty was not to an earthly empire but to Jesus Christ, the eternal King.

This truth transforms how we view the world.

We care deeply about our communities because God has placed us within them.

We work diligently because our labor honors Him.

We pray for those in authority because Scripture commands it.

We seek peace because Christ is the Prince of Peace.

Yet we remember that no earthly government can ever replace God's eternal Kingdom.

Jeremiah gave Israel similar instruction while they lived in Babylonian exile. Rather than withdrawing from society, they were to build homes, plant gardens, raise families, and seek the peace of the city where they lived.

Their temporary residence did not excuse them from faithful living.

Neither does ours.

The Way of Quiet Light reminds us that disciples of Christ are called to quietly transform the places where God has planted them. We are not merely waiting for Heaven—we are living as ambassadors of Heaven today.

Our words should reflect our King.

Our decisions should reflect His wisdom.

Our compassion should reflect His mercy.

Our integrity should reflect His holiness.

People may never read a Bible.

Many will, however, read our lives.

May they see the Kingdom of God reflected through us.$$,
  $$Heavenly Father,

Thank You for making me a citizen of Your eternal Kingdom through Jesus Christ. Help me to live faithfully in this world while keeping my heart fixed upon Heaven. Teach me to bless my community, honor those in authority, and reflect the character of Christ wherever You have placed me. May my life point others toward Your everlasting Kingdom.

In the name of Jesus Christ, Amen.$$,
  'Does my daily life reflect the priorities of God''s Kingdom or the priorities of this world?',
  'Pray for your community, your nation, and those who hold positions of leadership. Ask God to help you become a faithful ambassador of Christ where you live.',
  'The citizen of Heaven serves faithfully on earth while never forgetting where his true home lies.',
  '2026-08-30'
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
