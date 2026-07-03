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
  'day-2-the-god-who-sees',
  'The God Who Sees',
  'God sees the faithful heart even when the world overlooks it, calling His children to rest in His compassionate presence rather than the approval of others.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  2,
  'God''s Faithful Presence',
  'Genesis 16:7-14',
  'Matthew 6:25-34',
  'Genesis 16:13',
  'Thou God seest me.',
  'Genesis 16:13',
  'Thou God seest me.',
  $$There are moments in every life when we feel forgotten.

Perhaps our prayers seem unanswered. Perhaps our burdens are carried in silence, unseen by those around us. In such seasons, it is easy to believe that we have been overlooked. Yet Scripture reminds us of a profound truth: the God who created the heavens also sees the individual heart.

Hagar fled into the wilderness believing she had been abandoned. Alone, weary, and uncertain of what lay ahead, she encountered the Angel of the Lord. In that sacred moment she declared, "Thou God seest me." Her circumstances did not change immediately, but her understanding did. She discovered that she was never beyond God's sight.

Centuries later, Jesus taught His disciples not to be consumed by worry. The heavenly Father knows what we need before we ask Him. He clothes the lilies of the field with beauty and feeds the birds of the air without fail. If He cares for His creation with such tenderness, how much more does He care for those made in His image?

The Way of Quiet Light reminds us that faith is often lived in places unseen by the world. Many of the greatest acts of obedience happen without applause or recognition. Yet every quiet prayer, every hidden act of kindness, and every faithful step is fully known to God.

When others fail to notice your efforts, remember that your purpose is not to be seen by people but to walk faithfully before the One who sees all things. His approval is of greater value than the praise of the world.

Walk today with quiet confidence. You are neither forgotten nor alone. The Lord who watched over Hagar in the wilderness continues to watch over His children. His eyes are upon you—not with condemnation, but with compassion, wisdom, and unfailing love.$$,
  $$Heavenly Father,

Thank You for knowing me completely and loving me perfectly. When I feel unseen or discouraged, remind me that Your eyes are always upon me. Help me to trust Your care instead of giving in to fear or anxiety. Teach me to live for Your approval alone, finding peace in Your constant presence. May I faithfully walk before You today, knowing that nothing escapes Your loving gaze.

In the name of Jesus Christ, Amen.$$,
  'Where have I been seeking the approval of others instead of resting in the knowledge that God already sees and knows me?',
  'Perform one act of kindness today without telling anyone. Let it be an offering of worship to God alone.',
  'The world may overlook the faithful servant, but the Lord never overlooks a heart that quietly seeks Him.',
  '2026-07-02'
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
