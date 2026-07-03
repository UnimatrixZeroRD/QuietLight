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
  'day-7-rest-for-the-soul',
  'Rest for the Soul',
  'Christ offers rest for the soul, calling the weary to lay down their burdens and return to the Shepherd who restores and strengthens them.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  7,
  'Finding Peace in Christ',
  'Psalm 23',
  'Matthew 11:28-30',
  'Matthew 11:28',
  'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
  'Matthew 11:28',
  'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
  $$The pace of modern life often leaves little room for rest. We hurry from one responsibility to another, carrying burdens that seem to grow heavier with each passing day. We strive to accomplish more, fix more, and worry more, believing that peace will finally arrive when every problem has been solved.

Yet Christ offers something the world cannot provide.

He does not merely promise a lighter schedule or easier circumstances. He promises rest for the soul.

David understood this long before Jesus walked the earth. In Psalm 23 he describes the Lord as a Shepherd who leads His sheep beside still waters and restores their souls. Even while walking through the valley of the shadow of death, David speaks with confidence rather than fear because the Shepherd remains near.

Jesus reveals Himself as that Good Shepherd. He invites the weary, the anxious, and the discouraged to come to Him—not after they have solved every difficulty, but precisely because they cannot carry those burdens alone.

The Way of Quiet Light reminds us that rest is not laziness. It is an act of trust. When we intentionally pause to pray, worship, and reflect upon God's goodness, we acknowledge that the world continues because God sustains it—not because we never stop working.

Quiet moments with God renew our strength in ways that constant activity never can. They remind us that our identity is not found in our productivity but in our relationship with our Heavenly Father.

Perhaps your burdens today are invisible to others. Perhaps they are physical pain, emotional exhaustion, uncertainty about the future, or grief that words cannot express. Christ knows each one. He does not ask you to pretend they do not exist. He simply says, "Come."

The Shepherd still leads beside still waters. His peace is available today, even in the midst of life's storms. Lay your burdens before Him and discover the quiet strength that only His presence can provide.$$,
  $$Heavenly Father,

Thank You for being my Shepherd and my refuge. When my heart grows weary and my mind becomes anxious, remind me to come to Christ, who alone gives lasting rest. Help me to trust You with every burden I carry and to find peace in Your presence rather than in my circumstances. Restore my soul and strengthen me to walk faithfully in Your ways.

In the name of Jesus Christ, Amen.$$,
  'What burden have I continued to carry that I need to surrender to Christ today?',
  'Set aside twenty uninterrupted minutes today to be alone with God. Read Psalm 23 slowly, pray through its words, and allow yourself to rest quietly in His presence.',
  'The strongest soul is not the one that never grows weary, but the one that continually returns to the Shepherd for rest.',
  '2026-07-07'
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
