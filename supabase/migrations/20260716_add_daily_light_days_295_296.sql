insert into public.daily_light_entries (
  slug, title, scripture_reference, scripture_text, reflection, prayer,
  status, access_level, published_on, summary, volume, volume_title, day,
  theme, old_testament_reading, new_testament_reading,
  key_verse_reference, key_verse_text, reflection_question,
  today_practice, closing_thought, updated_at
)
values
(
  'day-295-faith-that-learns-to-rest',
  'Faith That Learns to Rest',
  'Exodus 14:14',
  'The LORD shall fight for you, and ye shall hold your peace.',
  $$Not every act of faith involves movement.

Sometimes faith marches around Jericho.

Sometimes it faces giants.

Sometimes it crosses rivers.

And sometimes faith stands still.

Israel stood trapped between Pharaoh's army and the Red Sea.

Behind them came danger.

Before them stood impossibility.

Panic spread quickly through the camp.

Fear demanded action.

Any action.

Yet Moses spoke unexpected words:

"Fear ye not, stand still, and see the salvation of the LORD."

Standing still can feel harder than running.

We prefer control.

Movement creates the feeling that we are solving the problem.

Stillness forces us to confront our dependence upon God.

The disciples faced a similar lesson during the storm upon the sea.

The waves rose.

The wind increased.

Meanwhile Jesus slept.

To the disciples, His rest appeared almost offensive.

How could He sleep while danger surrounded them?

Yet Christ's peace revealed something they had not yet learned:

The storm had not escaped the Father's authority.

The Way of Quiet Light reminds us that faith does not confuse activity with trust.

There are moments for planning.

Moments for work.

Moments for courage.

There are also moments when wisdom has already done everything it can do.

The application has been submitted.

The conversation has been held.

The treatment has begun.

The apology has been offered.

The responsibility has been fulfilled.

At that point, anxiety often continues labouring long after faithfulness has completed its work.

Faith learns to rest where responsibility ends.

Rest is not laziness.

It is surrender.

It is the refusal to carry burdens that belong only to God.

Today, ask yourself:

Have I already done what faithfulness requires?

Am I continuing to labour because action is needed, or because stillness feels frightening?

The sea did not part because Israel panicked more effectively.

The storm did not calm because the disciples worried harder.

There are battles God intends to fight Himself.

Trust Him enough to stand still when standing still is obedience.$$,
  $$Heavenly Father,

Teach me to recognize the difference between responsibility and control. Give me wisdom to act when action is required and peace to rest when I have done what faithfulness demands. Quiet my anxious heart and help me trust You with the battles that belong only to You.

In the name of Jesus Christ, Amen.$$,
  'published', 'public', '2027-04-21',
  'Trusting God enough to be still when responsibility has ended and the outcome belongs to Him.',
  '10', 'The Life of Faith', 295,
  'Trusting God Enough to Be Still',
  'Exodus 14:10–14', 'Mark 4:35–41',
  'Exodus 14:14',
  'The LORD shall fight for you, and ye shall hold your peace.',
  'Is there a burden I continue carrying after I have already done what faithfulness required?',
  'Identify one concern that lies beyond your control and consciously place it into God''s hands without taking it back throughout the day.',
  'Faith sometimes moves forward, and sometimes stands still long enough to watch God move instead.',
  now()
),
(
  'day-296-when-god-feels-far-away',
  'When God Feels Far Away',
  'Isaiah 50:10',
  'Who is among you that feareth the LORD... that walketh in darkness, and hath no light? let him trust in the name of the LORD, and stay upon his God.',
  $$There are seasons when God feels near.

Prayer feels natural.

Scripture feels alive.

Worship feels joyful.

There are other seasons that feel very different.

Prayer feels empty.

Heaven feels quiet.

The heart feels distant.

Many believers become frightened during these seasons.

They wonder whether they have failed.

Whether God has withdrawn.

Whether faith itself is disappearing.

Scripture speaks honestly about such experiences.

Isaiah describes faithful people who fear the Lord and obey His servant while walking in darkness and having no light.

Notice carefully:

The darkness is not presented as proof of rebellion.

Sometimes faithful people walk through dark valleys.

Thomas experienced a similar struggle after the resurrection.

The other disciples had seen the risen Christ.

Thomas had not.

He remained in the difficult space between testimony and experience.

When Jesus finally appeared, He did not reject Thomas.

He met him.

Answered his doubts.

Strengthened his faith.

The Way of Quiet Light reminds us that feelings are real but not always reliable guides.

Clouds may hide the stars without removing them from the sky.

The absence of warmth is not the same as the absence of fire.

God's presence does not depend upon our ability to sense it clearly.

Faith often grows deepest in seasons where emotion cannot carry it.

During such times we continue praying.

Continue reading Scripture.

Continue worshipping.

Continue gathering with God's people.

Not because we feel strongly.

Because Christ remains worthy.

Many believers discover later that seasons of spiritual dryness taught them to trust God's character rather than spiritual emotion alone.

The darkness eventually passed.

God had not abandoned them within it.

If God feels distant today, do not interpret silence as rejection.

Continue walking.

Continue trusting.

The hand that feels absent may still be holding you more securely than you know.$$,
  $$Heavenly Father,

When I cannot feel Your presence clearly, help me trust Your promises more than my emotions. Strengthen me during seasons of spiritual dryness and remind me that You remain faithful even when my heart feels weak. Teach me to walk by faith and not by feeling alone.

In the name of Jesus Christ, Amen.$$,
  'published', 'public', '2027-04-22',
  'Trusting God''s presence and promises during seasons of spiritual dryness and emotional distance.',
  '10', 'The Life of Faith', 296,
  'Trusting God''s Presence Beyond Feelings',
  'Isaiah 50:10–11', 'John 20:24–29',
  'Isaiah 50:10',
  'Who is among you that feareth the LORD... that walketh in darkness, and hath no light? let him trust in the name of the LORD, and stay upon his God.',
  'Have I mistaken spiritual dryness or emotional exhaustion for abandonment by God?',
  'Spend time with God today even if the experience feels quiet or uneventful. Offer Him your presence without demanding a particular feeling in return.',
  'Faith trusts that God remains present even when the heart can no longer feel His footsteps beside it.',
  now()
)
on conflict (day) do update set
  slug = excluded.slug,
  title = excluded.title,
  scripture_reference = excluded.scripture_reference,
  scripture_text = excluded.scripture_text,
  reflection = excluded.reflection,
  prayer = excluded.prayer,
  status = excluded.status,
  access_level = excluded.access_level,
  published_on = excluded.published_on,
  summary = excluded.summary,
  volume = excluded.volume,
  volume_title = excluded.volume_title,
  theme = excluded.theme,
  old_testament_reading = excluded.old_testament_reading,
  new_testament_reading = excluded.new_testament_reading,
  key_verse_reference = excluded.key_verse_reference,
  key_verse_text = excluded.key_verse_text,
  reflection_question = excluded.reflection_question,
  today_practice = excluded.today_practice,
  closing_thought = excluded.closing_thought,
  updated_at = now();
