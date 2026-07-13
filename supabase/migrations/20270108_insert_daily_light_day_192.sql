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
  'day-192-shepherding-with-care',
  'Shepherding with Care',
  'Kingdom leadership protects, guides, and serves those entrusted to our influence with the heart of the Good Shepherd.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  192,
  'Leadership That Protects, Guides, and Serves',
  'Ezekiel 34:1-16',
  'John 10:1-15',
  'John 10:11',
  'I am the good shepherd: the good shepherd giveth his life for the sheep.',
  'John 10:11',
  'I am the good shepherd: the good shepherd giveth his life for the sheep.',
  $$Leadership can be used to serve people or to use them.

Scripture speaks strongly against leaders who seek personal benefit while neglecting those entrusted to their care.

Through Ezekiel, God rebuked Israel’s shepherds because they fed themselves rather than the flock. They failed to strengthen the weak, heal the sick, seek the lost, or protect the vulnerable.

Their authority had become self-serving.

Jesus revealed a completely different kind of leadership.

The Good Shepherd knows His sheep.

Calls them by name.

Leads them toward nourishment.

Protects them from danger.

Searches for those who wander.

And gives His life for their safety.

This is the pattern for every Christian entrusted with influence.

Parents.

Pastors.

Teachers.

Employers.

Volunteers.

Community leaders.

Older believers guiding younger ones.

Leadership in God’s Kingdom is stewardship, not ownership.

People are never tools for building our reputation. They are souls entrusted temporarily to our care.

The Way of Quiet Light reminds us that good shepherding requires both tenderness and courage.

The shepherd comforts frightened sheep but also confronts danger.

Guides patiently but also sets boundaries.

Listens carefully but does not abandon truth.

Christlike leadership asks:

Are the people under my care becoming healthier, stronger, safer, and closer to God?

Or are they becoming exhausted, fearful, dependent, or overlooked?

The shepherd does not walk behind the flock shouting directions from a distance.

He walks among them.

He knows the terrain because he travels it too.

Today, consider anyone God has placed within your influence.

Do they experience your leadership as control or care?

Pressure or protection?

Self-promotion or service?

The Good Shepherd never treats the sheep as disposable.

Neither should we.$$,
  $$Heavenly Father,

Thank You for Jesus Christ, the Good Shepherd who knows, leads, protects, and loves His people. Help me care faithfully for anyone You have placed under my influence. Guard me from selfish ambition, control, neglect, and pride. Give me wisdom to guide, courage to protect, and compassion to serve.

In His holy name, Amen.$$,
  'Do the people under my influence feel cared for and strengthened, or merely managed?',
  'Check in personally with someone entrusted to your care. Ask how they are doing, listen carefully, and offer one form of practical support.',
  'Kingdom leadership does not stand above people; it walks among them with the heart of the Shepherd.',
  '2027-01-08'
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
