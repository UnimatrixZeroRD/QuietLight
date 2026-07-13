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
  'day-157-rich-in-mercy',
  'Rich in Mercy',
  'Christlike mercy does not deny sin, but joins truth with compassion and seeks restoration rather than condemnation.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  157,
  'Restoring Rather Than Condemning',
  'Hosea 11:1-9',
  'John 8:1-11',
  'John 8:11',
  'Neither do I condemn thee: go, and sin no more.',
  'John 8:11',
  'Neither do I condemn thee: go, and sin no more.',
  $$Mercy does not pretend that sin is harmless.

It refuses to believe that failure must have the final word.

When a woman caught in adultery was brought before Jesus, her accusers were not primarily seeking righteousness. They were using her shame as a weapon and hoping to trap Christ with their question.

Jesus saw through them.

He did not excuse the woman's sin.

Neither did He join the crowd in destroying her.

Instead, He exposed the hypocrisy of those eager to condemn and then spoke words that joined mercy with truth:

"Neither do I condemn thee: go, and sin no more."

Mercy protected her from condemnation.

Truth called her into a different life.

This is the character of Christ.

He receives the repentant without pretending repentance is unnecessary. He forgives completely while calling people away from what enslaves them.

The prophet Hosea reveals this same tenderness in the heart of God. Though Israel repeatedly wandered, the Lord spoke as a Father grieving over a beloved child. His holiness required truth, yet His compassion restrained destruction.

The Way of Quiet Light reminds us that Christlike mercy is most clearly seen in how we respond to the failures of others.

Do we expose their weakness to make ourselves feel righteous?

Do we secretly enjoy seeing them brought low?

Or do we seek restoration?

Mercy does not require ignoring danger, denying consequences, or abandoning wise boundaries. It means refusing cruelty. It means remembering that every believer lives by grace.

There will be moments when someone else's failure becomes visible.

In that moment, we reveal something about our own hearts.

The proud heart asks, "How could they?"

The merciful heart remembers, "Apart from grace, where would I be?"

Today, ask God to make you an instrument of restoration rather than condemnation.

Speak truth.

Protect what is right.

But do so with the heart of Christ, who came not to destroy the repentant, but to save them.$$,
  $$Heavenly Father,

Thank You for the mercy You have shown me through Jesus Christ. Guard me from pride, harsh judgment, and delight in the failures of others. Teach me to join truth with compassion and correction with grace. Help me become an instrument of restoration, reflecting the heart of Christ toward those who have fallen.

In the name of Jesus Christ, Amen.$$,
  'When someone fails, is my first response condemnation, curiosity, or compassionate concern for restoration?',
  'Refuse to participate in gossip about another person''s failure today. Instead, pray for their repentance, healing, and restoration.',
  'Mercy does not deny the fall; it reaches down with the hope of restoration.',
  '2026-12-04'
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
