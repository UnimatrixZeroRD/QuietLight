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
  'day-22-forgiveness-without-measure',
  'Forgiveness Without Measure',
  'Forgiveness reflects the mercy received in Christ, releasing bitterness into God''s hands and allowing His light to heal the heart.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  22,
  'Extending the Mercy We Have Received',
  'Psalm 103:8-14',
  'Matthew 18:21-35',
  'Ephesians 4:32',
  'Be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ''s sake hath forgiven you.',
  'Ephesians 4:32',
  'Be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ''s sake hath forgiven you.',
  $$Few acts reveal the heart of Christ more clearly than forgiveness.

It is one thing to forgive when an offense is small or when an apology comes quickly. It is another to forgive when the wound is deep, the pain lingers, and justice seems absent. Yet it is precisely in those difficult moments that the Gospel speaks most powerfully.

When Peter asked Jesus how many times he should forgive his brother, he likely thought he was being generous. The common expectation was far less than the seven times Peter suggested. Jesus answered, "Until seventy times seven," not to establish a mathematical limit, but to reveal that forgiveness should become a way of life for those who have experienced God's mercy.

He then told the parable of a servant who had been forgiven an unimaginable debt but refused to forgive someone who owed him very little. The contrast is striking. Compared to the holiness of God, every one of us owed a debt we could never repay. Yet through the sacrifice of Jesus Christ, that debt has been completely forgiven.

Forgiveness does not pretend that evil never happened. It does not excuse injustice or require the restoration of trust where wisdom says caution is needed. Forgiveness is the deliberate decision to release the desire for personal vengeance and entrust justice to God, who judges perfectly.

The Way of Quiet Light reminds us that bitterness quietly darkens the heart, while forgiveness allows the light of Christ to shine freely. Carrying resentment only deepens our wounds. Releasing it into God's hands opens the way for healing.

There may be someone today whose name immediately comes to your mind. Perhaps the hurt is recent, or perhaps it has been carried for many years. Ask the Lord for the strength to begin the work of forgiveness. You may not be able to restore every relationship, but you can choose to surrender your hurt to the One who has forgiven you completely.

The cross forever reminds us that mercy triumphs over vengeance. As those who have received immeasurable grace, let us become people who extend that grace to others.$$,
  $$Heavenly Father,

Thank You for forgiving my sins through the sacrifice of Jesus Christ. Help me to forgive those who have wronged me, even when it is difficult. Remove bitterness from my heart and replace it with compassion, humility, and peace. Teach me to trust Your perfect justice while reflecting Your perfect mercy.

In the name of Jesus Christ, Amen.$$,
  'Is there someone I have struggled to forgive, even though God has freely forgiven me?',
  'Pray sincerely for someone who has hurt you. Ask God to bless them and to continue His work of healing in your own heart.',
  'Forgiveness does not erase the past, but it frees the heart to walk toward the future with Christ.',
  '2026-07-22'
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
