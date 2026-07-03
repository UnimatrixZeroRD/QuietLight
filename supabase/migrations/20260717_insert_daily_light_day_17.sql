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
  'day-17-the-wisdom-from-above',
  'The Wisdom from Above',
  'Godly wisdom is pure, peaceable, gentle, and humble, guiding believers to trust the Lord above their own understanding.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  17,
  'Living According to God''s Wisdom',
  'Proverbs 3:1-8',
  'James 3:13-18',
  'Proverbs 3:5',
  'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
  'Proverbs 3:5',
  'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
  $$Every decision we make reveals the source of our wisdom.

Some choices are guided by convenience. Others are shaped by emotion, public opinion, or personal ambition. Yet Scripture invites us to seek a wisdom that comes from above—a wisdom rooted not in changing circumstances but in the unchanging character of God.

Solomon urged God's people to trust in the Lord with all their hearts rather than leaning upon their own understanding. This is not a call to ignore reason or refuse thoughtful planning. Rather, it is an invitation to recognize that our perspective is limited while God's wisdom is perfect.

James expands upon this truth by contrasting two kinds of wisdom.

Earthly wisdom is driven by envy, selfish ambition, and pride. It asks, "What benefits me?" Heavenly wisdom asks, "What glorifies God?"

Wisdom from above is pure before it is persuasive. It is peaceable before it is powerful. It is gentle rather than harsh, merciful rather than condemning, and willing to listen before speaking.

The Way of Quiet Light encourages believers to cultivate this quiet wisdom. We live in a culture that often rewards the loudest voice and the quickest response. God's wisdom frequently invites us to slow down—to listen carefully, pray earnestly, and respond thoughtfully.

There is strength in restraint.

Not every criticism deserves an answer. Not every disagreement requires an argument. Sometimes the wisest response is a gentle word, patient silence, or a sincere prayer.

As you face today's decisions, ask not merely, "What do I think is best?" but, "Lord, what would You have me do?"

The Holy Spirit delights in guiding hearts that are willing to listen. As you submit your plans to Him, you will discover that true wisdom produces not confusion, but peace.

Those who walk according to God's wisdom become peacemakers in a divided world, reflecting the calm confidence that comes from trusting the Lord completely.$$,
  $$Heavenly Father,

Grant me the wisdom that comes from above. Guard me against pride, impatience, and selfish ambition. Teach me to trust You more than my own understanding and to seek Your will in every decision I make. May my words bring peace, my actions reflect Your love, and my life bear witness to Your perfect wisdom.

In the name of Jesus Christ, Amen.$$,
  'Am I making decisions primarily through my own understanding, or have I invited God to guide my thinking?',
  'Before making your next important decision, pause to pray and read Proverbs 3:5-6. Ask God to direct your path before taking your next step.',
  'God''s wisdom is rarely the loudest voice, but it is always the truest guide.',
  '2026-07-17'
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
