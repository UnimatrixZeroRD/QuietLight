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
  'day-194-mercy-without-repayment',
  'Mercy Without Repayment',
  'Mercy serves those who cannot repay by giving freely with dignity, wisdom, compassion, and motives purified by Christ’s love.',
  'public',
  'published',
  'Volume Seven',
  'Serving the King',
  194,
  'Serving Those Who Cannot Return the Favour',
  'Deuteronomy 24:17-22',
  'Luke 14:7-14',
  'Luke 14:13-14',
  'When thou makest a feast, call the poor, the maimed, the lame, the blind: and thou shalt be blessed; for they cannot recompense thee.',
  'Luke 14:13-14',
  'When thou makest a feast, call the poor, the maimed, the lame, the blind: and thou shalt be blessed; for they cannot recompense thee.',
  $$Much of human kindness is shaped by exchange.

We invite those who may invite us later.

Help those who can return the favour.

Invest in relationships that may benefit us.

Jesus challenges this instinct.

He tells His followers to welcome people who cannot repay them.

The poor.

The vulnerable.

The overlooked.

Those who have nothing to offer in return except their presence.

This kind of mercy reveals whether service is truly love or merely disguised self-interest.

Under the law of Moses, landowners were instructed not to gather every last portion of the harvest. Some grain was to remain for the stranger, the widow, and the fatherless.

God built generosity into the ordinary rhythms of His people.

The vulnerable were not to survive only through occasional emotion. Their care was to become part of the community’s regular way of life.

The Way of Quiet Light reminds us that service should not be reserved only for people who are easy to love or likely to express gratitude.

Some people may be unable to thank us.

Others may not know how.

Some needs will remain after our help is given.

Some acts of mercy may never be acknowledged.

This can test the heart.

Are we serving for appreciation?

For reputation?

For the feeling of being needed?

Or because the person before us bears the image of God?

Jesus served people who misunderstood Him.

Some received healing and never returned to thank Him.

Others accepted bread but rejected His teaching.

Still, He continued acting from the Father’s love.

Mercy without repayment also requires discernment. Helping wisely may mean setting limits, connecting people with appropriate resources, or refusing requests that would enable harm.

But wisdom should seek a better form of help, not an escape from compassion.

Today, look for someone who cannot advance your interests.

Offer kindness without calculating the return.

The King records acts of mercy the world never notices.

And He repays what the recipient cannot.$$,
  $$Heavenly Father,

Teach me to serve without expecting repayment, recognition, or gratitude. Help me notice those who are often excluded and respond with mercy, dignity, and wisdom. Purify my motives so that my kindness flows from the love of Jesus Christ rather than from self-interest.

In the name of Jesus Christ, Amen.$$,
  'Does my generosity decrease when I know the person cannot repay or publicly appreciate me?',
  'Offer help, inclusion, or encouragement to someone who is unlikely to return the favour.',
  'Mercy becomes most like Christ when it gives freely to those who have nothing to give back.',
  '2027-01-10'
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
