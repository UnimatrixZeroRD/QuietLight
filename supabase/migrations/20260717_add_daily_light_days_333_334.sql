INSERT INTO public.daily_light_entries (
  slug, title, scripture_reference, scripture_text, reflection, prayer,
  status, access_level, published_on, summary, volume, volume_title, day,
  theme, old_testament_reading, new_testament_reading,
  key_verse_reference, key_verse_text, reflection_question,
  today_practice, closing_thought, updated_at
)
VALUES
(
  'day-333-a-teachable-heart',
  'A Teachable Heart',
  'Proverbs 9:9',
  'Give instruction to a wise man, and he will be yet wiser.',
  $$Wisdom is not demonstrated by knowing everything.

It is demonstrated by remaining willing to learn.

The foolish person treats correction as an insult.

The wise person receives it as an opportunity.

This does not mean every criticism is accurate or every teacher trustworthy. Discernment remains necessary.

Yet a teachable heart does not reject instruction merely because it is uncomfortable.

Apollos was an eloquent and knowledgeable teacher. He understood the Scriptures and spoke boldly about the things of God.

Still, his understanding was incomplete.

Priscilla and Aquila heard him and quietly explained the way of God more perfectly.

Apollos could have become defensive.

He could have pointed toward his knowledge, ability, or public reputation.

Instead, he received instruction.

Because he remained teachable, his ministry became stronger.

The Way of Quiet Light reminds us that correction does not extinguish the flame.

It trims the wick so the Light may burn more clearly.

Pride fears correction because it believes worth depends upon always appearing right.

Humility understands that being corrected is not the same as being rejected.

We all possess blind spots.

Patterns we do not recognize.

Assumptions we have never questioned.

Weaknesses that others may see more clearly than we do.

God often uses people to reveal what private reflection has missed.

A spouse.

A friend.

A teacher.

A child.

A trusted leader.

Even an unexpected voice may carry a truth worth considering.

The first response of wisdom is not immediate agreement.

Neither is it immediate defence.

It is attention.

“What part of this may be true?”

“Have I heard this concern before?”

“Is my discomfort coming from unfairness, or from conviction?”

A teachable heart also knows how to ask questions.

It does not pretend to understand.

It seeks clarification.

Admits uncertainty.

And values growth more than appearance.

Today, resist the burden of needing to seem complete.

You are still learning.

Still growing.

Still being formed.

The wise do not become less teachable as they mature.

They become more aware of how much remains to be learned.$$,
  $$Heavenly Father,

Give me a humble and teachable heart. Protect me from pride, defensiveness, and the need to appear as though I already know enough. Help me discern wise instruction, receive correction with grace, and continue growing in truth. Use the people around me to refine my understanding and character.

In the name of Jesus Christ, Amen.$$,
  'published', 'public', '2027-05-27',
  'Receiving instruction with humility and valuing growth above the appearance of perfection.',
  '12', 'The Way of Wisdom', 333,
  'Receiving Instruction with Humility',
  'Proverbs 9:7–12',
  'Acts 18:24–28',
  'Proverbs 9:9',
  'Give instruction to a wise man, and he will be yet wiser.',
  'When someone corrects or instructs me, do I listen carefully or immediately begin preparing my defence?',
  'Reflect upon one recent correction or disagreement. Ask honestly whether it contains a lesson that could help you grow.',
  'The wise heart is not ashamed to learn, because it values growth more than the appearance of perfection.',
  now()
),
(
  'day-334-guard-the-wellspring',
  'Guard the Wellspring',
  'Proverbs 4:23',
  'Keep thy heart with all diligence; for out of it are the issues of life.',
  $$A life is shaped from the inside outward.

Words.

Decisions.

Reactions.

Habits.

Relationships.

These do not appear from nowhere.

They flow from the heart.

In Scripture, the heart represents more than emotion. It includes the inner world of desire, thought, motive, loyalty, and will.

Proverbs therefore tells us to guard it carefully.

Not fearfully.

Diligently.

Jesus taught that a good tree produces good fruit and a corrupt tree produces corrupt fruit. The fruit reveals what has been growing within.

Harsh words may reveal stored anger.

Envy may reveal a heart shaped by comparison.

Dishonesty may reveal fear or misplaced desire.

Compassion, patience, and integrity also grow from roots cultivated over time.

The Way of Quiet Light reminds us that a lantern’s flame must be protected from both wind and neglect.

What we repeatedly allow into the heart will eventually influence what comes out.

The voices we hear.

The images we watch.

The arguments we revisit.

The resentments we rehearse.

The truths we remember.

The gratitude we practice.

All of these help shape the inner life.

Guarding the heart does not mean isolating ourselves from every difficult reality.

Jesus remained present in a broken world.

He encountered suffering, injustice, temptation, and conflict.

Yet He remained rooted in the Father.

The guarded heart is not unaware.

It is anchored.

Wisdom asks:

What is this influence producing within me?

Does it make me more truthful or more suspicious?

More compassionate or more contemptuous?

More peaceful or more restless?

More faithful or more distracted?

We should also guard the heart against unresolved wounds.

Pain left unattended may begin interpreting every new experience through an old injury.

Seeking counsel, forgiveness, medical care, or emotional support may become part of wise spiritual stewardship.

Guarding the heart is not pretending wounds do not exist.

It is refusing to let them quietly govern the whole life.

Today, consider what has been entering and shaping your inner world.

Some influences may need to be reduced.

Others need to be strengthened.

Scripture.

Prayer.

Healthy friendship.

Rest.

Gratitude.

Truth.

The fruit of tomorrow is being cultivated within the heart today.$$,
  $$Heavenly Father,

Guard and purify my heart. Show me which influences, habits, wounds, or desires are shaping me away from Jesus Christ. Help me fill my inner life with truth, gratitude, mercy, and wisdom. Heal what is wounded and establish my heart firmly in Your love.

In the name of Jesus Christ, Amen.$$,
  'published', 'public', '2027-05-28',
  'Protecting the inner life so that truth, healing, and faithfulness shape what flows outward.',
  '12', 'The Way of Wisdom', 334,
  'Protecting the Inner Life',
  'Proverbs 4:20–27',
  'Luke 6:43–49',
  'Proverbs 4:23',
  'Keep thy heart with all diligence; for out of it are the issues of life.',
  'What repeated influence is having the strongest effect upon my thoughts, emotions, and character?',
  'Remove or reduce one influence that is feeding fear, anger, temptation, or resentment. Replace it with something that strengthens truth, peace, and faithfulness.',
  'The direction of a life is often decided quietly within the heart long before it becomes visible in the steps.',
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
