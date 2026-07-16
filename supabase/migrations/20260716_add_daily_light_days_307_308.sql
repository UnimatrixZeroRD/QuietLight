INSERT INTO public.daily_light_entries (
  slug, title, scripture_reference, scripture_text, reflection, prayer,
  status, access_level, published_on, summary, volume, volume_title, day,
  theme, old_testament_reading, new_testament_reading,
  key_verse_reference, key_verse_text, reflection_question,
  today_practice, closing_thought, updated_at
)
VALUES
(
  'day-307-lead-us-not-into-temptation',
  'Lead Us Not into Temptation',
  'Matthew 6:13',
  'And lead us not into temptation, but deliver us from evil.',
  $$Jesus teaches us to pray before temptation becomes defeat.

This is an important part of wisdom.

We often pray intensely after we have fallen.

After the careless words.

After the dishonest choice.

After the appetite has taken control.

Christ invites us to pray earlier.

“Lead us not into temptation.”

This prayer does not suggest that God tempts people toward evil. Scripture is clear that He does not.

It is a request for guidance away from circumstances where weakness may overpower wisdom and for strength when testing cannot be avoided.

Joseph understood the urgency of fleeing temptation.

When Potiphar’s wife repeatedly pressured him, he did not remain nearby to prove how strong he was.

He refused.

Then he ran.

Sometimes the most spiritual response to temptation is simply to leave.

Close the page.

End the conversation.

Walk away.

Ask for help.

Change the routine.

Remove the access.

The Way of Quiet Light reminds us that humility does not ask, “How close can I stand to danger without falling?”

It asks, “What path leads most faithfully toward the Light?”

Jesus Himself faced temptation in the wilderness. He answered deception with Scripture and refused to use power outside the Father’s will.

Temptation often distorts something legitimate.

Hunger.

Belonging.

Rest.

Recognition.

Desire.

The need may be real, but the offered path is false.

Prayer helps us recognize the difference.

“Deliver us from evil” is also a confession of dependence.

We are not strong enough to resist every temptation through willpower alone.

We need Scripture.

The Holy Spirit.

Wise boundaries.

Accountability.

Faithful community.

Sometimes professional support.

There is no shame in using every healthy form of help God provides.

We should also learn our patterns.

When are we most vulnerable?

When tired?

Lonely?

Angry?

Afraid?

Ashamed?

Temptation often enters through predictable doors.

Wisdom notices them before the knock becomes an entrance.

Today, do not wait for the battle to become overwhelming.

Pray now.

Strengthen the boundary now.

Ask for help now.

The prayer for deliverance is not a sign of weak faith.

It is the voice of faith that knows where true strength comes from.$$, 
  $$Heavenly Father,

Lead me away from temptation and deliver me from evil. Reveal the places where I am vulnerable and give me wisdom to establish strong, healthy boundaries. Bring Your Word to my remembrance, strengthen me through Your Spirit, and give me humility to seek help before weakness becomes defeat.

In the name of Jesus Christ, Amen.$$, 
  'published','public','2027-05-03',
  'Praying for guidance, protection, and strength before temptation becomes defeat.',
  '11','The Heart of Prayer',307,'Prayer for Guidance and Protection',
  'Genesis 39:1–12','Matthew 4:1–11; 6:13',
  'Matthew 6:13','And lead us not into temptation, but deliver us from evil.',
  'What pattern, situation, or emotion most often makes me vulnerable to temptation?',
  'Strengthen one practical boundary today. Remove an unnecessary source of temptation, speak with a trustworthy person, or prepare a clear response before the next moment of pressure arrives.',
  'Wisdom does not wait at the edge of temptation to discover whether it is strong enough to stand.',
  now()
),
(
  'day-308-thine-is-the-kingdom',
  'Thine Is the Kingdom',
  'Matthew 6:13',
  'For thine is the kingdom, and the power, and the glory, for ever. Amen.',
  $$The Lord’s Prayer begins with God.

“Our Father.”

It ends with God.

“Thine is the kingdom, and the power, and the glory.”

Between these words, we bring everything.

Our needs.

Our sins.

Our relationships.

Our temptations.

Our hopes.

Our fears.

Then prayer returns the whole world to its rightful centre.

The Kingdom belongs to God.

This means history is not governed finally by chaos, cruelty, politics, wealth, or human ambition.

God reigns.

His purposes will stand.

His Kingdom will come in fullness.

The power belongs to God.

We are not required to carry life through our own strength.

We may act, serve, plan, work, and persevere.

But the power that brings lasting fruit belongs to Him.

The glory belongs to God.

Prayer is not a method for making ourselves important.

It directs attention away from the self and toward the One who is worthy.

David expressed this beautifully before the people of Israel:

“Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty.”

Everything they had offered for the temple had first come from God’s hand.

Even their generosity became an occasion for worship rather than pride.

The Way of Quiet Light reminds us that the lantern does not own the Light.

It carries what it has received.

The Kingdom is not ours to possess.

The power is not ours to manufacture.

The glory is not ours to keep.

This ending gives prayer confidence.

We may not know how the answer will come.

We may not know when circumstances will change.

We may not know what road lies ahead.

But we know who reigns.

The final word, “Amen,” means more than “the prayer is finished.”

It expresses agreement.

So be it.

Let it be established.

The praying heart places its trust beneath the reign of God.

Today, end your prayer by remembering what belongs to Him.

The Kingdom.

The power.

The glory.

Then release the burden.

The throne is occupied.

The King remains faithful.$$, 
  $$Heavenly Father,

Yours is the Kingdom, the power, and the glory forever. Reign over my heart, my choices, my fears, and my future. Keep me from trusting my own strength or seeking glory for myself. Let every answer, every act of service, and every part of my life point toward Jesus Christ and the coming of Your Kingdom.

Amen.$$, 
  'published','public','2027-05-04',
  'Ending prayer with worship, surrender, and confidence in God’s reign.',
  '11','The Heart of Prayer',308,'Ending Prayer with Worship and Confidence',
  '1 Chronicles 29:10–13','Revelation 5:9–14',
  'Matthew 6:13','For thine is the kingdom, and the power, and the glory, for ever. Amen.',
  'Am I praying as though the outcome depends entirely upon me, or as though the Kingdom, power, and glory truly belong to God?',
  'End each prayer today by consciously surrendering the outcome with the words, “Yours is the Kingdom, the power, and the glory.”',
  'Prayer finds peace when it remembers that the burden rests beneath a throne that will never be empty.',
  now()
)
ON CONFLICT (day) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  scripture_reference = EXCLUDED.scripture_reference,
  scripture_text = EXCLUDED.scripture_text,
  reflection = EXCLUDED.reflection,
  prayer = EXCLUDED.prayer,
  status = EXCLUDED.status,
  access_level = EXCLUDED.access_level,
  published_on = EXCLUDED.published_on,
  summary = EXCLUDED.summary,
  volume = EXCLUDED.volume,
  volume_title = EXCLUDED.volume_title,
  theme = EXCLUDED.theme,
  old_testament_reading = EXCLUDED.old_testament_reading,
  new_testament_reading = EXCLUDED.new_testament_reading,
  key_verse_reference = EXCLUDED.key_verse_reference,
  key_verse_text = EXCLUDED.key_verse_text,
  reflection_question = EXCLUDED.reflection_question,
  today_practice = EXCLUDED.today_practice,
  closing_thought = EXCLUDED.closing_thought,
  updated_at = now();
