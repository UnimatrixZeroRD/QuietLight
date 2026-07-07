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
  'day-90-thy-kingdom-come',
  'Thy Kingdom Come',
  'The everlasting Kingdom of God shapes daily life as believers reflect Heaven''s values through mercy, truth, prayer, sacrifice, humility, and love.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  90,
  'Living for the Eternal Kingdom',
  'Daniel 7:13-14, 27',
  'Revelation 21:1-7',
  'Matthew 6:10',
  'Thy kingdom come. Thy will be done in earth, as it is in heaven.',
  'Matthew 6:10',
  'Thy kingdom come. Thy will be done in earth, as it is in heaven.',
  $$Every kingdom of this world has an ending.

Empires rise.

Empires fall.

Generations come and go.

History moves steadily forward.

Yet above every earthly throne stands the everlasting Kingdom of God.

Daniel was given a vision of the Son of Man receiving an eternal dominion that would never pass away. Centuries later, John saw the glorious fulfillment of that promise as God established the new Heaven and the new Earth. Every tear would be wiped away. Death would be no more. Sorrow, crying, and pain would forever disappear because the King Himself would dwell among His people.

This is the hope that has sustained God's people throughout history.

The Kingdom we serve today will one day become the Kingdom we see.

The Way of Quiet Light has always pointed toward this eternal reality.

We carry the lantern because we believe the Light has already come.

We walk quietly because we know the King reigns.

We serve faithfully because His Kingdom cannot be shaken.

Every act of mercy.

Every word of truth.

Every prayer.

Every sacrifice.

Every quiet work of love.

These are small reflections of the coming Kingdom where righteousness will dwell forever.

As this volume comes to its conclusion, remember that living the Kingdom is not merely about preparing for Heaven.

It is about allowing Heaven's values to shape life on earth today.

When we forgive, Heaven is reflected.

When we serve, Heaven is reflected.

When we pursue justice, show mercy, walk humbly, and love our neighbors, Heaven becomes visible through ordinary lives surrendered to Christ.

Tomorrow a new volume begins.

The journey continues.

The King remains faithful.

And every step draws us nearer to the day when faith will become sight.

Until then, let your daily prayer remain the same:

**"Thy kingdom come. Thy will be done in earth, as it is in heaven."**$$,
  $$Heavenly Father,

Thank You for the everlasting Kingdom You have prepared through Jesus Christ. Help me to live each day as a faithful citizen of that Kingdom, reflecting its values in my words, my work, my relationships, and my worship. Keep my eyes fixed upon the hope of eternity and my hands faithfully serving until the day Your Kingdom comes in all its fullness.

In the name of Jesus Christ, Amen.$$,
  'How can I reflect the values of God''s eternal Kingdom more faithfully in my daily life?',
  'Pray the Lord''s Prayer slowly today, giving special attention to the words, "Thy kingdom come. Thy will be done," and ask God to make those words visible through your life.',
  'The greatest citizens of Heaven are those who faithfully bring the character of Heaven into the world each day.',
  '2026-09-28'
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
