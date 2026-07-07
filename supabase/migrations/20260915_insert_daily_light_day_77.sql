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
  'day-77-blessed-to-be-a-blessing',
  'Blessed to Be a Blessing',
  'God blesses His people so they may live generously with open hands, allowing His gifts to flow outward for the good of others.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  77,
  'Living Generously for God''s Kingdom',
  'Genesis 12:1-3',
  'Acts 20:32-35',
  'Acts 20:35',
  'It is more blessed to give than to receive.',
  'Acts 20:35',
  'It is more blessed to give than to receive.',
  $$From the beginning, God's blessings have always carried a purpose.

When the Lord called Abraham, He did not simply promise to bless him. He declared that Abraham would become a blessing to the nations. God's gifts were never meant to stop with one person. They were meant to flow outward, bringing hope, provision, and grace to others.

The same principle remains true today.

Every blessing we receive becomes an opportunity to bless someone else.

Sometimes that blessing is financial.

Sometimes it is encouragement.

Sometimes it is wisdom gained through experience.

Sometimes it is simply offering our time to someone who needs a listening ear.

The Kingdom of God grows whenever His people live with open hands.

Jesus reminded His disciples that "it is more blessed to give than to receive." These words challenge the values of a world that often measures success by accumulation. God's Kingdom measures abundance differently.

True wealth is found in generosity.

The Way of Quiet Light reminds us that generosity does not depend upon the size of our resources.

It depends upon the posture of our hearts.

A kind word costs little.

A faithful prayer costs only time.

A meal shared with a lonely neighbor.

A quiet gift given without recognition.

A burden willingly carried alongside another believer.

These offerings become treasures in Heaven because they are expressions of Christ's love.

Ask yourself today:

How has God blessed me?

Then ask:

How can those blessings become a blessing to someone else?

The answer may reveal the very ministry God has placed before you today.$$,
  $$Heavenly Father,

Thank You for every blessing You have entrusted to me. Guard me from selfishness and help me to live with open hands. Teach me to recognize opportunities to encourage, serve, and provide for others as You have provided for me. May my life become a channel through which Your generosity flows into the world.

In the name of Jesus Christ, Amen.$$,
  'What blessing from God can I intentionally share with someone else today?',
  'Give generously today—whether through your time, your encouragement, your resources, or your service—without expecting anything in return.',
  'God blesses His people not only for their joy, but so they may become a blessing to others.',
  '2026-09-15'
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
