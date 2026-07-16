insert into public.daily_light_entries (
  slug,title,scripture_reference,scripture_text,reflection,prayer,status,access_level,published_on,summary,volume,volume_title,day,theme,old_testament_reading,new_testament_reading,key_verse_reference,key_verse_text,reflection_question,today_practice,closing_thought
) values
(
  'day-287-remember-the-stones',
  'Remember the Stones',
  'Psalm 77:11',
  'I will remember the works of the LORD: surely I will remember thy wonders of old.',
  $$Fear often shortens memory.

In difficult moments we may begin to feel as though God has never helped us before.

The present problem becomes so large that it hides the evidence of earlier faithfulness.

Israel faced this danger after crossing the Jordan River.

God instructed Joshua to take twelve stones from the riverbed and build a memorial.

The stones would become a question for future generations:

"What mean these stones?"

The answer would tell the story of God's faithfulness.

The river had once seemed impossible.

God had made a way.

The memorial was not built because Israel would never struggle again.

It was built because they certainly would.

Future fear would require past remembrance.

The psalmist followed this same path during his own distress.

He moved from questions and sorrow toward memory:

"I will remember the works of the LORD."

His circumstances had not yet changed.

His perspective had.

The Way of Quiet Light reminds us that faith often survives today by remembering yesterday.

The answered prayer.

The unexpected provision.

The strength that appeared when strength seemed gone.

The friendship that arrived at the right time.

The comfort that came during grief.

The road that once looked impossible but now lies behind us.

Memory does not guarantee that tomorrow will unfold according to our preferred plan.

It reminds us that God has never ceased being faithful.

Some people keep journals.

Others remember through songs, photographs, conversations, or family stories.

The form matters less than the remembrance itself.

Forgetfulness feeds fear.

Gratitude strengthens trust.

Today, gather your stones.

Remember the places where God carried you.

The same God who guided you through earlier waters has not changed because the river before you is different.

Faith grows stronger when memory remains alive.$$, 
  $$Heavenly Father,

Thank You for every moment of faithfulness You have shown throughout my life. Forgive me for the times I have forgotten Your goodness when fear became loud. Help me remember answered prayers, unexpected provisions, and quiet mercies. Strengthen my trust through the memory of Your faithfulness.

In the name of Jesus Christ, Amen.$$, 
  'published','public','2027-04-13',
  'Strengthening faith by remembering God''s past faithfulness.',
  '10','The Life of Faith',287,'Strengthening Faith Through Remembrance','Joshua 4:1–24','Psalm 77:11–15','Psalm 77:11','I will remember the works of the LORD: surely I will remember thy wonders of old.',
  'What past act of God''s faithfulness do I most need to remember today?',
  'Write down three specific ways God has helped, provided, comforted, or guided you in the past and thank Him for each one.',
  'Faith often finds strength for tomorrow by remembering where God carried us yesterday.'
),
(
  'day-288-a-quiet-witness',
  'A Quiet Witness',
  'Matthew 5:16',
  'Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
  $$Not every witness is loud.

Not every testimony comes through public speaking or dramatic moments.

Much of faith becomes visible through ordinary faithfulness.

Daniel served faithfully through changing governments, difficult circumstances, and political pressure.

His enemies searched for corruption and dishonesty.

They found none.

His life had become his testimony.

Even those who opposed him recognized the consistency of his faith.

Jesus called His followers the light of the world.

Light does not argue with darkness.

It shines.

A lamp does not announce itself.

It simply makes the room brighter.

The Way of Quiet Light reminds us that some of the strongest testimonies are quiet ones.

The person who remains honest when dishonesty would profit them.

The parent who continues loving faithfully through exhaustion.

The worker who serves with integrity when no one is watching.

The believer who responds to suffering without surrendering hope.

The friend who remains loyal.

The neighbour who acts with kindness.

The person who apologizes when wrong.

The one who forgives when bitterness would be easier.

These acts may appear ordinary.

Heaven notices them.

Others notice them as well, even when they say nothing.

Faithfulness often speaks long before words become necessary.

This does not mean Christians should never speak openly about Christ.

There are times when truth must be spoken clearly.

But words carry greater weight when supported by a life that reflects them.

A quiet witness is not a hidden witness.

It is a faithful life that points beyond itself.

Like a lantern, it does not exist to draw attention to itself.

It exists to reveal the Light it carries.

Today, consider what your ordinary life is saying about your faith.

What do your habits teach?

Your reactions?

Your priorities?

Your treatment of people?

Your use of time?

The world may never read your journal.

Many may never hear your testimony.

But they will often read your life.

Let it point toward Christ.$$, 
  $$Heavenly Father,

Help my life reflect the character of Jesus Christ in ordinary moments and daily responsibilities. Make me honest, kind, faithful, and humble. Let my actions support my words and my character strengthen my witness. May others see Your light through the life I live.

In the name of Jesus Christ, Amen.$$, 
  'published','public','2027-04-14',
  'Faith made visible through ordinary integrity, kindness, and service.',
  '10','The Life of Faith',288,'Faith Made Visible Through Daily Life','Daniel 6:1–23','Matthew 5:13–16','Matthew 5:16','Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
  'If people learned about my faith only by watching my life, what would they discover?',
  'Perform one quiet act of integrity, kindness, or service today without seeking recognition or reward.',
  'The brightest witness is often not the loudest voice, but the most faithful life.'
)
on conflict (day) do update set
  slug=excluded.slug,
  title=excluded.title,
  scripture_reference=excluded.scripture_reference,
  scripture_text=excluded.scripture_text,
  reflection=excluded.reflection,
  prayer=excluded.prayer,
  status=excluded.status,
  access_level=excluded.access_level,
  published_on=excluded.published_on,
  summary=excluded.summary,
  volume=excluded.volume,
  volume_title=excluded.volume_title,
  theme=excluded.theme,
  old_testament_reading=excluded.old_testament_reading,
  new_testament_reading=excluded.new_testament_reading,
  key_verse_reference=excluded.key_verse_reference,
  key_verse_text=excluded.key_verse_text,
  reflection_question=excluded.reflection_question,
  today_practice=excluded.today_practice,
  closing_thought=excluded.closing_thought,
  updated_at=now();
