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
  'day-156-courageous-in-truth',
  'Courageous in Truth',
  'Christlike courage stands for truth with grace, joining conviction with humility and faithfulness without pride, fear, or hatred.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  156,
  'Standing Firm with Grace',
  '1 Kings 18:17-39',
  'John 18:33-38',
  'John 18:37',
  'To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth.',
  'John 18:37',
  'To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth.',
  $$Jesus was gentle, but He was never timid.

He welcomed the broken, touched the rejected, and spoke with tenderness to the weary. Yet He also confronted hypocrisy, exposed injustice, and bore witness to truth even when doing so led Him toward the cross.

Christlike courage is not loudness.

It is faithfulness.

It does not seek conflict for its own sake.

Neither does it remain silent when truth, mercy, or righteousness requires a voice.

Elijah demonstrated such courage on Mount Carmel. Surrounded by false prophets and standing before a wavering nation, he called the people to choose whom they would serve. His confidence did not rest in personality or public approval. It rested in the living God.

Jesus stood before Pilate with an even greater calm.

He did not flatter authority.

He did not compromise His mission.

He simply testified to the truth.

The Way of Quiet Light reminds us that truth must be carried with both courage and humility.

Truth without love becomes harsh.

Love without truth becomes empty sentiment.

Christ perfectly joined both.

There will be moments when faithfulness requires speaking.

A lie may need to be corrected.

Someone vulnerable may need to be defended.

A compromise may need to be refused.

An injustice may need to be named.

At other times, courage may mean remaining silent rather than joining gossip, mockery, or anger.

The goal is not to win every argument.

It is to represent Christ faithfully.

Before speaking, ask:

Is it true?

Is it necessary?

Is it loving?

Is it mine to say?

Then speak with conviction, gentleness, and peace.

The strongest voice is often the one that does not need to shout.$$,
  $$Heavenly Father,

Give me courage to stand for truth without pride, anger, or fear. Teach me to speak with the wisdom, grace, and firmness of Jesus Christ. Help me know when to speak, when to listen, and when silence is the better witness. May my life remain faithful to Your truth regardless of public approval.

In the name of Jesus Christ, Amen.$$,
  'Have fear, pride, or the desire for approval kept me from representing truth faithfully?',
  'In one situation today, choose truth over convenience while speaking with humility and grace.',
  'Christlike courage speaks truth without hatred and stands firm without losing gentleness.',
  '2026-12-03'
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
