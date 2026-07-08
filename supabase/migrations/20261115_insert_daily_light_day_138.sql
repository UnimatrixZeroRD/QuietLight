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
  'day-138-when-the-answer-is-no',
  'When the Answer Is No',
  'Faith trusts God''s wisdom and love when His answers differ from our desires, resting in grace that remains sufficient even in disappointment.',
  'public',
  'published',
  'Volume Five',
  'Faith Through the Storm',
  138,
  'Trusting God Through Unanswered Prayer',
  'Deuteronomy 3:23-29',
  '2 Corinthians 12:7-10',
  '2 Corinthians 12:9',
  'My grace is sufficient for thee.',
  '2 Corinthians 12:9',
  'My grace is sufficient for thee.',
  $$Some prayers receive joyful answers.

Some prayers receive patient waiting.

And some prayers receive an answer we never wanted to hear.

No.

Moses longed to enter the Promised Land.

Paul pleaded for the removal of his thorn in the flesh.

Jesus Himself prayed in Gethsemane that the cup might pass from Him.

Scripture reminds us that faithful people sometimes receive answers that differ from their desires.

This does not mean God is distant.

Nor does it mean He is uncaring.

Sometimes God's love is expressed through granting our requests.

Sometimes His love is expressed through withholding them.

The Way of Quiet Light reminds us that faith trusts God's wisdom even when it struggles to understand His decisions.

The child does not always understand the Father's reasons.

Yet the Father's love remains unchanged.

Paul eventually discovered that the greater miracle was not the removal of the thorn.

It was the sufficiency of grace within it.

Perhaps there is a prayer you wished God had answered differently.

If so, bring that disappointment honestly before Him.

The Lord welcomes honesty.

He is not threatened by questions.

And while His answers may sometimes remain mysterious, His character never does.

The cross forever settled that question.

The God who gave His Son for us can still be trusted with the prayers He answers differently than we hoped.$$,
  $$Heavenly Father,

Help me trust You when Your answers differ from my expectations. Give me faith to believe that Your wisdom is greater than my understanding and Your love remains constant even when I am disappointed. Teach me to rest in Your grace and to trust Your heart when I cannot understand Your hand.

In the name of Jesus Christ, Amen.$$,
  'Is there an unanswered prayer or painful answer that I still struggle to trust God with?',
  'Bring that prayer before God once more today and honestly tell Him both your disappointment and your trust.',
  'Faith does not require understanding every answer. It requires trusting the One who gives them.',
  '2026-11-15'
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
