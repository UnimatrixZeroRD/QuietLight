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
  'day-115-remembering-his-faithfulness',
  'Remembering His Faithfulness',
  'Remembrance strengthens worship as believers look back on God''s provision, mercy, promises, and grace with renewed gratitude and trust.',
  'public',
  'published',
  'Volume Four',
  'The Heart of Worship',
  115,
  'Worship Through Remembrance',
  'Deuteronomy 8:1-18',
  'Philippians 4:4-9',
  'Psalm 103:2',
  'Bless the LORD, O my soul, and forget not all his benefits.',
  'Psalm 103:2',
  'Bless the LORD, O my soul, and forget not all his benefits.',
  $$One of the greatest dangers to faith is forgetfulness.

Not forgetting facts.

Forgetting faithfulness.

Again and again throughout Scripture, God instructed His people to remember.

Remember the deliverance from Egypt.

Remember the crossing of the sea.

Remember the manna in the wilderness.

Remember the promises fulfilled.

Memory became an act of worship because remembrance strengthened trust.

Moses warned Israel that prosperity could become spiritually dangerous if it caused them to forget the Lord who had sustained them.

The same danger remains today.

When life is difficult, we wonder whether God is present.

When life is comfortable, we sometimes forget that every blessing came from His hand.

David commanded his own soul,

"Forget not all his benefits."

The Way of Quiet Light reminds us that worship often begins by remembering.

Remember the prayers He answered.

Remember the strength He provided.

Remember the doors He opened.

Remember the mercy He showed.

Remember the cross.

Remember the empty tomb.

The God who carried you yesterday remains faithful today.

And the God who is faithful today will remain faithful tomorrow.

Faith grows stronger when memory grows clearer.

Today, pause and look backward for a moment.

You will likely discover footprints of grace all along the path behind you.$$,
  $$Heavenly Father,

Forgive me for the times I forget Your faithfulness and become consumed by present worries. Help me remember Your goodness, Your provision, and Your promises. Strengthen my faith through remembrance, and let gratitude for what You have already done fill my heart with confidence for what lies ahead.

In the name of Jesus Christ, Amen.$$,
  'What moments of God''s faithfulness in my life have I allowed myself to forget?',
  'Write down several ways God has been faithful to you over the years and thank Him for each one specifically.',
  'Faith remembers what fear tries to make us forget.',
  '2026-10-23'
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
