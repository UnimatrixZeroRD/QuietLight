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
  'day-97-a-song-of-praise',
  'A Song of Praise',
  'Praise overflows from a heart that remembers God''s goodness, faithfulness, mercy, deliverance, steadfast love, and unchanging worth.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  97,
  'Worship That Overflows with Joy',
  'Psalm 150',
  'Ephesians 5:15-20',
  'Psalm 150:6',
  'Let every thing that hath breath praise the LORD. Praise ye the LORD.',
  'Psalm 150:6',
  'Let every thing that hath breath praise the LORD. Praise ye the LORD.',
  $$Praise is the natural response of a heart that has encountered the goodness of God.

Throughout Scripture, God's people lifted their voices in celebration because they remembered His mighty works. They praised Him for His creation, His faithfulness, His mercy, His deliverance, and above all His steadfast love.

Psalm 150 concludes the Book of Psalms with an invitation that includes all creation.

Praise Him in His sanctuary.

Praise Him in the heavens.

Praise Him for His mighty acts.

Praise Him for His excellent greatness.

Finally, the psalmist declares,

"Let every thing that hath breath praise the LORD."

No believer is excluded from this invitation.

Paul encourages the Church to be filled with the Holy Spirit, expressing that fullness through psalms, hymns, and spiritual songs while making melody in our hearts to the Lord.

Notice that worship is not limited to the voice.

It begins within the heart.

Even when circumstances are difficult, praise reminds us that God's character has not changed.

The Way of Quiet Light reminds us that praise is more than music.

It is the joyful recognition of God's worth.

A whispered "thank You."

A hymn sung while working.

A prayer offered in gratitude.

A heart filled with wonder.

These become songs of worship that delight our Heavenly Father.

There will be days when singing comes easily.

There will be days when praise becomes an act of faith.

Offer it anyway.

The God who was worthy yesterday remains worthy today.

His faithfulness has not diminished.

Let your heart become a song that never grows silent.$$,
  $$Heavenly Father,

You alone are worthy of all praise. Fill my heart with joy as I remember Your goodness and faithfulness. Teach me to praise You not only when life is easy, but also in seasons of difficulty. May every breath I take become an opportunity to glorify You and to rejoice in Jesus Christ, my Savior and King.

In His holy name, Amen.$$,
  'Is my praise dependent upon my circumstances, or upon the unchanging character of God?',
  'Spend time today singing a hymn or worship song, or simply read Psalm 150 aloud as your personal expression of praise.',
  'Praise is the language of a heart that remembers the faithfulness of God.',
  '2026-10-05'
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
