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
  'day-197-do-not-grow-weary',
  'Do Not Grow Weary',
  'Faithful servants persevere by returning to God for renewal, trusting that no labour offered in Christ is wasted.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  197,
  'Persevering in Faithful Service',
  'Isaiah 40:28-31',
  'Galatians 6:7-10',
  'Galatians 6:9',
  'And let us not be weary in well doing: for in due season we shall reap, if we faint not.',
  'Galatians 6:9',
  'And let us not be weary in well doing: for in due season we shall reap, if we faint not.',
  $$Service can be joyful.

It can also be exhausting.

Needs continue.

Problems return.

People disappoint us.

Results arrive more slowly than we hoped.

Even faithful servants sometimes wonder whether their efforts matter.

Paul understood this reality.

That is why he encouraged believers not to grow weary in doing good.

Weariness is not failure.

It is part of being human.

The danger comes when weariness persuades us to stop sowing entirely.

The farmer plants seed long before the harvest appears.

Weeks may pass without visible results.

Yet beneath the soil, growth continues unseen.

Much Christian service follows the same pattern.

The conversation that seemed ineffective.

The child patiently taught.

The person prayed for over many years.

The kindness that appeared unnoticed.

God may be accomplishing far more than we can presently see.

Isaiah reminds us that even the young grow tired and stumble, but those who wait upon the Lord renew their strength.

Service was never meant to be sustained through human determination alone.

The servant must return regularly to the Master.

The Way of Quiet Light reminds us that lanterns require oil.

A lantern that only shines outward without ever being refilled eventually burns dry.

Prayer.

Rest.

Scripture.

Worship.

Fellowship.

Silence before God.

These are not distractions from ministry.

They sustain it.

There may be seasons when the work feels heavy and the fruit invisible.

Continue faithfully.

Adjust your pace if needed.

Receive help where appropriate.

Rest when wisdom requires it.

But do not surrender hope.

The harvest belongs to God.

Our calling is faithfulness.

Today, remember:

The King who sees every cup of cold water also sees every tired servant.

And He has not forgotten your labour.$$,
  $$Heavenly Father,

When service becomes tiring and discouragement grows, renew my strength. Help me distinguish between healthy rest and surrendering to weariness. Remind me that You see every act of faithfulness and that no labour offered in Christ is wasted. Teach me to draw my strength continually from You.

In the name of Jesus Christ, Amen.$$,
  'Am I truly exhausted because of service, or because I have been trying to serve without regularly returning to God for renewal?',
  'Spend intentional time today being spiritually refilled through prayer, Scripture, worship, or quiet rest with God.',
  'The servant who remains close to the Master will find strength for another day.',
  '2027-01-13'
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
