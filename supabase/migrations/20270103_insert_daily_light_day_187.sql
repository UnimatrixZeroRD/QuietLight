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
  'day-187-the-ministry-of-encouragement',
  'The Ministry of Encouragement',
  'Serving the King includes strengthening weary hearts through truthful, timely, grace-filled encouragement rooted in God’s faithfulness.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  187,
  'Strengthening the Weary',
  '1 Samuel 23:14-18',
  'Acts 4:32-37; 11:22-26',
  '1 Thessalonians 5:11',
  'Wherefore comfort yourselves together, and edify one another, even as also ye do.',
  '1 Thessalonians 5:11',
  'Wherefore comfort yourselves together, and edify one another, even as also ye do.',
  $$Not every ministry is performed from a platform.

Some of the most important work in God’s Kingdom happens through a few sincere words spoken at the right moment.

Encouragement means more than offering compliments.

It means placing courage into another person.

It reminds the weary that they are not alone.

It helps the discouraged remember what fear has caused them to forget.

Jonathan offered this kind of encouragement to David.

David was hiding from Saul, carrying danger, uncertainty, and the weight of a future he could not yet see. Jonathan found him in the wilderness and strengthened his hand in God.

He did not promise that the danger would disappear immediately.

He reminded David of God’s faithfulness.

The early Church later knew another encourager named Barnabas. His name meant “son of consolation” or “son of encouragement.” He gave generously, welcomed Saul when others feared him, and recognized the grace of God growing in new believers.

Barnabas did not need to be the central figure.

He delighted in helping others become faithful.

The Way of Quiet Light reminds us that encouragement is a form of service available to nearly everyone.

A thoughtful message.

A prayer offered aloud.

A Scripture shared carefully.

A sincere expression of gratitude.

A reminder that someone’s quiet faithfulness matters.

These acts may take only moments, but their influence can endure for years.

Discouragement often isolates people. It convinces them that no one notices, no one understands, and their effort makes no difference.

Encouragement answers:

“I see you.”

“Your faithfulness matters.”

“God has not forgotten you.”

True encouragement is honest. It does not offer empty promises or deny hardship. It points people toward real reasons for hope.

Today, consider who may need courage placed back into their heart.

Do not assume someone else will speak.

Your words may become part of God’s provision for them.$$,
  $$Heavenly Father,

Make me attentive to those who are weary, discouraged, or quietly losing hope. Give me words that are truthful, timely, and filled with grace. Help me strengthen others in You rather than offering shallow comfort. May my presence and speech become instruments of courage in the lives of those around me.

In the name of Jesus Christ, Amen.$$, 
  'Who in my life may be continuing faithfully while receiving very little encouragement?',
  'Contact one person today and offer sincere, specific encouragement. Tell them what you appreciate and remind them that their faithfulness matters.',
  'A few faithful words can help a weary heart find the courage to take another step.',
  '2027-01-03'
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
