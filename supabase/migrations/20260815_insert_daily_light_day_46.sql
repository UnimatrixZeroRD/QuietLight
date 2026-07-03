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
  'day-46-a-faithful-witness',
  'A Faithful Witness',
  'A faithful witness reflects Christ before the world through integrity, compassion, quiet service, hope, and a life surrendered to Him.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  46,
  'Reflecting Christ Before the World',
  'Isaiah 43:8-13',
  'Matthew 5:13-16',
  'Matthew 5:14,16',
  'Ye are the light of the world... Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
  'Matthew 5:14,16',
  'Ye are the light of the world... Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
  $$Every believer tells a story.

Long before we speak about Christ, people often observe how we respond to disappointment, success, criticism, hardship, and everyday relationships. Our lives quietly testify to what we truly believe.

Jesus described His followers as the salt of the earth and the light of the world.

Salt preserves what is good.

Light reveals what is true.

Neither fulfills its purpose by drawing attention to itself. Both exist to benefit others.

Isaiah records the Lord declaring, "Ye are my witnesses." God's people were chosen to bear testimony to His faithfulness among the nations. That calling continues today. Every act of honesty, every expression of compassion, every quiet act of service, and every word spoken in love points beyond ourselves toward Christ.

The Way of Quiet Light embraces this calling wholeheartedly.

We do not seek attention for ourselves.

We simply desire that others might see the character of Christ reflected through ordinary lives surrendered to Him.

Some of the most powerful witnesses are never delivered from pulpits.

They are seen in faithful parents raising their children.

Employees working with integrity.

Neighbors caring for one another.

Friends who forgive.

Believers who remain hopeful in suffering.

These quiet testimonies often speak louder than eloquent sermons.

Remember that witnessing is not only something we do—it is someone we become.

As we walk closely with Christ, His light naturally shines through us.

Our responsibility is not to manufacture the light.

Our responsibility is to remain close to the Light.

Today, ask yourself whether your life makes it easier or more difficult for others to see Jesus.

Then walk in such a way that when people notice your kindness, your integrity, your peace, and your hope, they are ultimately drawn not to you, but to the Savior you serve.$$,
  $$Heavenly Father,

Help my life become a faithful witness to Jesus Christ. Let my words, actions, and attitudes reflect His love and truth. Guard me from hypocrisy, and teach me to live with integrity in every circumstance. May others see Christ through me and be drawn to the hope that is found in Him alone.

In the name of Jesus Christ, Amen.$$,
  'What kind of testimony does my daily life present to those around me?',
  'Look for one opportunity today to quietly demonstrate the love of Christ through your actions rather than your words alone.',
  'The brightest witness is a life that quietly reflects the character of Christ.',
  '2026-08-15'
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
