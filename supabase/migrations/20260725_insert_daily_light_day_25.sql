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
  'day-25-the-armor-of-god',
  'The Armor of God',
  'God provides spiritual armor so believers may stand strong in truth, righteousness, faith, salvation, Scripture, and prayer.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  25,
  'Standing Strong in Spiritual Battle',
  'Isaiah 59:15-21',
  'Ephesians 6:10-18',
  'Ephesians 6:11',
  'Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.',
  'Ephesians 6:11',
  'Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.',
  $$The Christian life is not merely a journey; it is also a spiritual battle.

Our greatest struggles are not ultimately against other people. Scripture reminds us that we wrestle against spiritual forces that seek to discourage, deceive, divide, and draw us away from the Lord. For this reason, God has not left His people defenseless. He has provided spiritual armor sufficient for every conflict.

Paul describes each piece with careful purpose.

The belt of truth keeps us grounded in God's Word rather than the changing opinions of the world. The breastplate of righteousness reminds us that our standing before God rests in Christ's righteousness, not our own. The shoes of the Gospel prepare us to walk in peace wherever God leads. The shield of faith extinguishes the fiery darts of doubt, fear, and temptation. The helmet of salvation protects our minds with the assurance of God's redeeming grace. The sword of the Spirit, which is the Word of God, is our offensive weapon, enabling us to answer error with truth just as Jesus did in the wilderness.

Yet Paul concludes not with armor alone, but with prayer.

Prayer is the atmosphere in which every piece of armor is strengthened. It keeps the believer close to the Commander of the battle and reminds us that victory belongs to the Lord.

The Way of Quiet Light does not seek conflict, but neither does it ignore reality. We are called to stand with humility, courage, and unwavering trust in Christ. The battle is not won through anger or human strength. It is won through truth, holiness, faith, and steadfast dependence upon God.

Each morning presents a fresh opportunity to clothe yourself spiritually before stepping into the responsibilities of the day. As surely as you prepare yourself physically before leaving your home, prepare your heart by putting on the armor God has provided.

Remember that you never stand alone. The Captain of your salvation has already overcome the world. His victory is the foundation of your confidence.

Walk today clothed in His strength rather than your own.$$,
  $$Heavenly Father,

Thank You for providing everything I need to stand firm in spiritual battle. Help me to clothe myself each day with truth, righteousness, faith, salvation, and Your Word. Keep me alert through prayer and dependent upon Your strength rather than my own. May I walk courageously, knowing that Christ has already secured the victory.

In the name of Jesus Christ, Amen.$$,
  'Which piece of God''s armor do I most need to consciously put on today?',
  'Read Ephesians 6:10-18 slowly. As you pray, reflect on each piece of armor and ask God to strengthen you in that specific area.',
  'The strongest defense against darkness is a life clothed each day in the strength of Christ.',
  '2026-07-25'
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
