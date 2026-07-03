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
  'day-37-walking-in-humility',
  'Walking in Humility',
  'Humility reflects the heart of Christ, teaching believers to serve quietly, reject pride, and delight in God''s glory above their own.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  37,
  'Becoming More Like Christ',
  'Micah 6:6-8',
  'Philippians 2:1-11',
  'Micah 6:8',
  'He hath shewed thee, O man, what is good... to do justly, and to love mercy, and to walk humbly with thy God.',
  'Micah 6:8',
  'He hath shewed thee, O man, what is good... to do justly, and to love mercy, and to walk humbly with thy God.',
  $$Humility is one of the greatest evidences of spiritual maturity.

The world often associates greatness with influence, recognition, and personal achievement. Yet throughout Scripture, God consistently honors those who humble themselves before Him. Humility is not weakness. It is strength that has learned to bow before its Creator.

Paul presents Jesus Christ as the perfect example.

Though He was equal with the Father, Christ willingly laid aside His heavenly glory, taking upon Himself the form of a servant. He humbled Himself, becoming obedient even unto death upon the cross. No act of humility has ever equaled the love displayed at Calvary.

This is the pattern every disciple is called to follow.

Humility is not pretending we have no gifts. Rather, it is recognizing that every gift comes from God and is meant to be used for His glory rather than our own. A humble heart rejoices in serving quietly, celebrates the success of others, and remains teachable throughout life.

The Way of Quiet Light reminds us that the brightest lights rarely draw attention to themselves. A lantern fulfills its purpose by illuminating the path, not by demanding admiration. Likewise, the Christian life shines most clearly when Christ becomes more visible and we become less concerned with ourselves.

Humility also transforms our relationships.

It enables us to listen before speaking, forgive before judging, encourage rather than compete, and seek peace rather than personal victory. Pride divides; humility restores.

Ask the Lord today to reveal any area where pride has quietly taken root. Do not fear His correction. Every act of repentance makes room for greater grace.

The closer we walk with Christ, the less concerned we become with our own importance and the more joyful we become in serving His Kingdom.$$,
  $$Heavenly Father,

Teach me to walk in true humility. Guard me from pride, selfish ambition, and the desire for recognition. Help me to follow the example of Jesus Christ, who came not to be served but to serve. May my words, attitudes, and actions reflect His gentle and humble heart in every relationship I have.

In the name of Jesus Christ, Amen.$$,
  'Is there an area of my life where pride has prevented me from serving God or others faithfully?',
  'Quietly encourage or honor someone else''s accomplishments today without drawing attention to your own.',
  'The closer we draw to Christ, the less we seek our own glory and the more we delight in His.',
  '2026-08-06'
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
