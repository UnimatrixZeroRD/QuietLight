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
  'day-120-forever-before-the-throne',
  'Forever Before the Throne',
  'Worship begins on earth and continues forever before the throne, where the redeemed will praise the Lamb face to face.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  120,
  'Worship as Our Eternal Calling',
  'Psalm 84:1-12',
  'Revelation 7:9-17',
  'Revelation 7:10',
  'Salvation to our God which sitteth upon the throne, and unto the Lamb.',
  'Revelation 7:10',
  'Salvation to our God which sitteth upon the throne, and unto the Lamb.',
  $$The story of worship does not end on earth.

It begins here.

John was given a vision of a great multitude from every nation, tribe, people, and language standing before the throne of God and before the Lamb.

Their voices rose together in praise.

Their tears had been wiped away.

Their trials had ended.

Their faith had become sight.

At the center of Heaven stood the Lamb who was slain.

The cross would never be forgotten.

Grace would never lose its wonder.

Redemption would never become ordinary.

The worship of Heaven is not forced duty.

It is joyful response.

Those who have seen the King cannot help but adore Him.

The Way of Quiet Light has always pointed toward this final hope.

The lantern we carry today shines only because it reflects a greater Light.

One day, there will be no need for lanterns.

No more shadows.

No more night.

No more tears.

The Light Himself will dwell among His people.

Until that day comes, worship remains our calling.

In moments of joy.

In moments of sorrow.

In seasons of abundance.

In seasons of waiting.

We continue lifting our eyes toward the throne.

Every prayer whispered in faith.

Every hymn sung through tears.

Every quiet act of devotion.

These are preparations for eternity.

The day is coming when the songs of earth will join the songs of Heaven.

And we will stand before our King forever.

As this volume closes, carry this hope with you:

Worship is not merely what believers do.

It is what believers were created for.$$,
  $$Heavenly Father,

Thank You for the hope of eternity in Your presence through Jesus Christ. Keep my heart fixed upon the Lamb who was slain and now reigns forever. May my worship on earth prepare me for the joy of worship in Heaven. Until that day comes, let my life reflect gratitude, reverence, and love for You in all things.

In the name of Jesus Christ, Amen.$$,
  'How would my daily life change if I lived more consciously in light of eternity?',
  'Spend time today reading Revelation 7:9-17 and thank God for the promise that one day faith will become sight.',
  'The worship that begins in faith on earth will continue forever in the presence of the King.',
  '2026-10-28'
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
