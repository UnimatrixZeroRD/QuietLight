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
  'day-57-waiting-upon-the-lord',
  'Waiting Upon the Lord',
  'Waiting upon the Lord is active trust, continuing in prayer, obedience, worship, and hope while relying on God''s perfect timing.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  57,
  'Trusting God''s Perfect Timing',
  'Psalm 27:7-14',
  'James 5:7-11',
  'Psalm 27:14',
  'Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD.',
  'Psalm 27:14',
  'Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD.',
  $$Waiting is one of the hardest disciplines of the Christian life.

We readily trust God when answers come quickly, but when days become months and months become years, our confidence is often tested. We begin to wonder whether God has heard us, whether He has forgotten us, or whether our prayers have somehow gone unnoticed.

Yet Scripture consistently teaches that waiting is not wasted.

David understood this well. Throughout his life he experienced seasons of danger, uncertainty, and delay. Many of God's promises seemed slow in coming, yet David repeatedly encouraged himself to wait upon the Lord. His confidence rested not in knowing when God would act, but in knowing who God is.

James offers the picture of a farmer patiently waiting for the harvest. The farmer cannot force the crops to grow. He faithfully prepares the soil, plants the seed, and waits with confidence because he trusts the seasons God has established.

Our spiritual lives often unfold in much the same way.

The Way of Quiet Light reminds us that God accomplishes many of His greatest works during seasons of waiting. While we are asking Him to change our circumstances, He is often shaping our character. He teaches patience, dependence, humility, and deeper trust—qualities that rarely grow during times of ease.

Waiting does not mean doing nothing.

It means continuing to pray.

Continuing to obey.

Continuing to worship.

Continuing to hope.

It is active trust rather than passive resignation.

If you are waiting today—for healing, guidance, restoration, provision, or an answer to prayer—do not mistake God's silence for His absence.

The One who numbers the stars also numbers your days.

His timing has never been early.

His timing has never been late.

Continue walking faithfully.

The Lord is already preparing tomorrow while giving you grace for today.$$,
  $$Heavenly Father,

Teach me to wait upon You with patience and confidence. Guard my heart from discouragement when answers seem delayed, and strengthen my faith to trust Your perfect timing. Help me remain faithful in prayer, steadfast in obedience, and joyful in hope, knowing that You are always working for my good and Your glory.

In the name of Jesus Christ, Amen.$$,
  'What am I trying to hurry that God may be asking me to trust Him with?',
  'Instead of praying only for God to change your circumstances, ask Him to strengthen your faith while you wait.',
  'Waiting becomes worship when trust replaces impatience.',
  '2026-08-26'
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
