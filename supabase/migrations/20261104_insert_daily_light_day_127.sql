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
  'day-127-the-god-who-weeps-with-us',
  'The God Who Weeps With Us',
  'Grief is not weakness, and believers never mourn alone because Christ enters sorrow, remains near to the brokenhearted, and promises resurrection hope.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  127,
  'God''s Presence in Grief',
  'Psalm 34:15-22',
  'John 11:28-44',
  'Psalm 34:18',
  'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
  'Psalm 34:18',
  'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
  $$Grief changes us.

Sometimes it arrives suddenly.

Sometimes it comes slowly.

Sometimes it follows loss.

Sometimes it follows disappointment, betrayal, or the quiet realization that life did not unfold as we had hoped.

Scripture never treats grief as weakness.

Neither does God.

When Jesus stood before the tomb of Lazarus, He already knew resurrection was coming.

He already knew death would not have the final word.

Yet the shortest verse in Scripture remains one of the most powerful:

"Jesus wept."

The Son of God entered fully into human sorrow.

He did not stand at a distance from grief.

He stepped into it.

Because of this, believers never grieve alone.

The God who created tears understands them.

The Savior who conquered death has Himself tasted sorrow.

The Way of Quiet Light reminds us that grief and faith are not enemies.

A heart can ache deeply while still trusting completely.

The psalmists cried out in lament.

The prophets mourned.

The disciples wept.

Tears are not evidence that faith has failed.

Sometimes they are evidence that love was real.

If grief walks beside you today, do not hide it from God.

Bring your sorrow into His presence.

He is not uncomfortable with your tears.

He collects them.

He remembers them.

And one day, He will wipe every one of them away.

Until that day comes, He remains near to the brokenhearted.$$,
  $$Heavenly Father,

Thank You for being near to those who mourn. When grief feels heavy and words are difficult to find, remind me that You understand every tear and every sorrow. Comfort me with Your presence and strengthen me with the hope found in Jesus Christ, who conquered death and promises resurrection and life.

In His holy name, Amen.$$,
  'Is there grief in my heart that I have been carrying without bringing fully before God?',
  'Spend time honestly speaking to God about your sorrow without trying to hide or minimize it.',
  'The God who created tears is not ashamed of them.',
  '2026-11-04'
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
