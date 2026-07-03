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
  'day-20-the-joy-of-salvation',
  'The Joy of Salvation',
  'The joy of salvation rests not in changing circumstances or personal perfection, but in God''s saving grace and perfect love in Christ.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  20,
  'Rejoicing in God''s Saving Grace',
  'Psalm 51:10-15',
  'Luke 15:11-32',
  'Psalm 51:12',
  'Restore unto me the joy of thy salvation; and uphold me with thy free spirit.',
  'Psalm 51:12',
  'Restore unto me the joy of thy salvation; and uphold me with thy free spirit.',
  $$Joy is one of the distinguishing marks of a life transformed by God.

It is deeper than happiness and more enduring than emotion. Happiness often depends upon favorable circumstances, but joy rests upon an unchanging relationship with the Lord. Even in seasons of sorrow, believers can experience a quiet confidence that God remains faithful.

King David understood the difference.

After his grievous sin, David did not ask God to restore his kingdom, his reputation, or his comfort. Instead, he pleaded, "Restore unto me the joy of thy salvation." He knew that the greatest treasure he possessed was not earthly success but fellowship with God.

Jesus illustrated this same truth through the parable of the prodigal son. The young man squandered everything he had, believing freedom could be found apart from his father. When he finally returned in repentance, expecting only judgment, he was met instead with compassion, forgiveness, and celebration.

This is the heart of the Gospel.

Every believer is the recipient of undeserved mercy. We have been welcomed home not because of our own righteousness but because of God's abundant grace through Jesus Christ.

The Way of Quiet Light reminds us that joy flourishes where gratitude is cultivated. When we continually remember what Christ has done for us, our hearts naturally overflow with thanksgiving. Gratitude shifts our focus from what we lack to the immeasurable riches we already possess in Him.

There may be days when your emotions feel heavy and your spirit weary. Joy is not pretending those burdens do not exist. Rather, it is remembering that no circumstance can separate you from the love of God in Christ Jesus.

Lift your eyes today beyond temporary struggles. Remember the cross. Remember the empty tomb. Remember the Father who welcomes every repentant sinner with open arms.

The joy of salvation is not found in our perfection but in God's perfect love.$$,
  $$Heavenly Father,

Thank You for the priceless gift of salvation through Jesus Christ. Restore the joy of knowing You and forgive me whenever I allow the concerns of this world to overshadow the wonder of Your grace. Fill my heart with gratitude, and let my life become a joyful testimony to the mercy You have shown me.

In the name of Jesus Christ, Amen.$$,
  'Have I allowed daily worries to diminish my gratitude for the salvation Christ has given me?',
  'Spend time thanking God specifically for your salvation. Reflect upon how your life has changed because of His grace.',
  'The deepest joy is not found in what we possess, but in the One who has redeemed us.',
  '2026-07-20'
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
