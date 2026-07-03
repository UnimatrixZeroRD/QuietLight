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
  'day-16-the-servants-heart',
  'The Servant''s Heart',
  'True greatness is revealed through humility and quiet service, following Christ who came not to be served but to serve.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  16,
  'Greatness Through Humility',
  'Isaiah 42:1-4',
  'Mark 10:35-45',
  'Mark 10:45',
  'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
  'Mark 10:45',
  'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
  $$The world measures greatness by influence, wealth, authority, and recognition. We celebrate those who rise above others, command attention, and leave their mark upon history.

Jesus measured greatness differently.

When His disciples argued over who would be the greatest in His kingdom, Jesus did not rebuke their desire to serve God. Instead, He transformed their understanding of greatness. The greatest, He said, would be the servant of all.

The Creator of heaven and earth chose to wash the feet of His disciples.

The King of kings welcomed children, touched lepers, comforted the brokenhearted, and gave His own life for those who rejected Him. Every act of Christ's ministry revealed that genuine authority is expressed through sacrificial love.

Isaiah foresaw this Servant centuries before Christ was born. The promised Messiah would not cry aloud to draw attention to Himself. He would not crush the bruised reed nor extinguish the faintly burning wick. His strength would be displayed through gentleness, compassion, and unwavering faithfulness.

The Way of Quiet Light embraces this same calling. We are not called to build our own reputation but to quietly reflect the character of Christ. Many of the most meaningful acts of service are never noticed by the public. A word of encouragement, an anonymous gift, a patient conversation, a prayer offered in secret, or a helping hand extended without expectation of praise—these are the works that often shine brightest in God's sight.

True service begins with humility.

Humility is not thinking less of yourself; it is thinking of yourself less often. It frees us to rejoice when others succeed, to forgive when we are wronged, and to serve without seeking recognition.

Today, ask yourself not, "How can I be noticed?" but, "Whom can I serve?"

The answer may seem small in the eyes of the world, but no act of love offered in Christ's name is ever insignificant. The Lord who sees in secret delights in every faithful servant whose heart reflects His own.$$,
  $$Heavenly Father,

Thank You for the perfect example of Jesus Christ, who came to serve rather than to be served. Remove pride from my heart and replace it with genuine humility. Help me to notice the needs of others before my own desires and to serve faithfully without seeking recognition. May every act of kindness become an offering of worship to You.

In the name of Jesus Christ, Amen.$$,
  'In what ways have I sought recognition instead of simply serving others in love?',
  'Perform one act of service today without telling anyone. Let it remain a quiet gift between you and God.',
  'The brightest lights often shine where no one thinks to look.',
  '2026-07-16'
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
