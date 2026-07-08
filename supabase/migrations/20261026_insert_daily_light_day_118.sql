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
  'day-118-joining-heavens-song',
  'Joining Heaven''s Song',
  'Earthly worship echoes Heaven''s eternal praise as believers rehearse for the day they will worship before God''s throne face to face.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  118,
  'Worship That Echoes Eternity',
  'Isaiah 6:1-8',
  'Revelation 4:1-11',
  'Revelation 4:8',
  'Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.',
  'Revelation 4:8',
  'Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.',
  $$Every worship service on earth is only a faint echo of a far greater song already filling Heaven.

Isaiah caught a glimpse of it.

John saw it more clearly.

Around the throne of God, worship never ceases.

The angels proclaim His holiness.

The elders cast their crowns before Him.

Creation itself joins the chorus.

At the center of it all stands the Lord Himself, worthy of endless praise.

Sometimes we become distracted by styles, preferences, and traditions.

Heaven's worship reminds us what truly matters.

The focus is not the worshiper.

It is the One being worshiped.

God's holiness inspires awe.

His power inspires wonder.

His mercy inspires gratitude.

His redemption inspires joy.

The Way of Quiet Light reminds us that every act of worship on earth prepares our hearts for eternity.

Every hymn.

Every prayer.

Every whispered praise.

Every moment of reverence.

These become rehearsals for the everlasting worship that awaits God's people.

One day, faith will become sight.

The prayers we offered in quiet rooms will give way to praise around the throne.

The songs sung through tears will become songs of perfect joy.

The worship that often feels incomplete here will become complete in His presence.

Until that day comes, let your worship anticipate eternity.

Join your voice to Heaven's song even now.

For the King who is worthy there is worthy here as well.$$,
  $$Heavenly Father,

Thank You for the promise that one day I will stand among the redeemed and worship You face to face. Help me never to lose the wonder of Your holiness or the joy of Your salvation. Let my worship here on earth prepare my heart for the eternal praise that awaits in Your presence.

In the name of Jesus Christ, Amen.$$,
  'Does my worship reflect the greatness and holiness of the God I serve?',
  'Spend time today reading Revelation chapter 4 slowly and imagine yourself standing before the throne of God in worship.',
  'Every act of worship on earth is a small participation in the eternal worship of Heaven.',
  '2026-10-26'
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
