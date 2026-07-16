INSERT INTO public.daily_light_entries (
  slug, title, scripture_reference, scripture_text, reflection, prayer,
  status, access_level, published_on, summary, volume, volume_title, day,
  theme, old_testament_reading, new_testament_reading,
  key_verse_reference, key_verse_text, reflection_question,
  today_practice, closing_thought, updated_at
)
VALUES
(
  'day-303-hallowed-be-thy-name',
  'Hallowed Be Thy Name',
  'Matthew 6:9',
  'Hallowed be thy name.',
  $$Prayer begins with nearness.

“Our Father.”

It also begins with reverence.

“Hallowed be thy name.”

To hallow God’s name means to recognize it as holy, set apart, and worthy of honour.

Prayer is not merely entering the presence of someone who loves us.

It is entering the presence of the Holy One.

These truths belong together.

God is near enough to call Father.

Great enough to inspire awe.

The heavenly beings in Revelation continually worship before His throne:

“Holy, holy, holy, Lord God Almighty.”

Their worship does not arise from fear alone.

It comes from seeing God as He truly is.

Glorious.

Eternal.

Powerful.

Perfectly good.

The psalmist responds similarly when considering the heavens:

“O LORD our Lord, how excellent is thy name in all the earth!”

Worship changes the perspective of prayer.

We often enter prayer carrying a problem that fills our entire vision.

The diagnosis.

The conflict.

The financial need.

The uncertain future.

The burden may be real and serious.

Worship places it beside the greater reality of God.

The Way of Quiet Light reminds us that lifting the lantern does not remove the darkness.

It helps us see more clearly within it.

Worship lifts the heart.

It reminds us that fear is not sovereign.

Pain is not eternal.

Circumstances do not sit upon the throne.

God does.

To hallow His name also means caring about how His name is represented through our lives.

We cannot pray for His name to be honoured while treating others with cruelty, dishonesty, or pride.

Our words and actions should help others see something true about the God we worship.

Today, begin prayer before making requests.

Remember who God is.

Name His attributes.

Thank Him for His holiness, mercy, wisdom, faithfulness, and love.

The heart often becomes steadier when it stops looking only at the burden and looks first toward the throne.$$, 
  $$Holy Father,

Your name is worthy of all honour, worship, and praise. Lift my eyes beyond my immediate concerns and help me remember Your holiness, power, mercy, and faithfulness. May Your name be honoured through my prayers, my words, my choices, and the way I treat others.

In the name of Jesus Christ, Amen.$$, 
  'published','public','2027-04-29',
  'Beginning prayer with worship, reverence, and a renewed vision of God’s holiness and greatness.',
  '11','The Heart of Prayer',303,'Beginning Prayer with Worship',
  'Psalm 8:1–9','Revelation 4:8–11',
  'Matthew 6:9','Hallowed be thy name.',
  'Do my prayers begin primarily with the size of my problems or with the greatness of God?',
  'Before making any requests today, spend time naming and praising at least three attributes of God.',
  'Worship does not make the burden unreal; it reminds the heart that the burden is not upon the throne.',
  now()
),
(
  'day-304-thy-will-be-done',
  'Thy Will Be Done',
  'Matthew 26:39',
  'Nevertheless not as I will, but as thou wilt.',
  $$Some of the hardest words in prayer are also among the most freeing:

“Thy will be done.”

We often approach prayer with a clear idea of what should happen.

Healing should come.

The door should open.

The relationship should be restored.

The burden should disappear.

There is nothing wrong with asking boldly.

Jesus Himself prayed specifically in Gethsemane:

“O my Father, if it be possible, let this cup pass from me.”

He did not pretend the suffering ahead was easy.

He expressed His desire honestly.

Then He surrendered it:

“Nevertheless not as I will, but as thou wilt.”

Surrender is not the absence of desire.

It is placing desire beneath trust.

Samuel learned this posture as a child:

“Speak; for thy servant heareth.”

Prayer is not only telling God what we want Him to do.

It is making room to hear what He may require of us.

The Way of Quiet Light reminds us that surrender is not passive resignation.

It does not say:

“Nothing matters.”

It says:

“God’s wisdom matters more than my limited understanding.”

Surrender may lead toward action.

An apology.

A difficult decision.

A boundary.

A sacrifice.

A season of waiting.

The surrendered heart remains willing to be redirected.

This can be deeply difficult when the request concerns someone we love or a burden we desperately want removed.

“Thy will be done” should never be spoken casually over another person’s pain.

It is not a simple explanation for suffering.

It is a personal act of trust made within mystery.

Jesus prayed these words while sweating in anguish.

Surrender can coexist with tears.

It can tremble.

It can ask again.

Jesus prayed in Gethsemane more than once.

Yet each prayer returned to the Father’s will.

Today, bring your desires honestly.

God already knows them.

Do not hide disappointment, fear, or longing beneath religious language.

Then hold the request with open hands.

Faith asks boldly.

Trust surrenders humbly.

Prayer does both.$$, 
  $$Heavenly Father,

You know the desires, fears, and requests I carry. Help me bring them before You with honesty and confidence. When Your will differs from mine, give me grace to trust Your wisdom without pretending surrender is easy. Make my heart attentive, obedient, and willing to follow wherever You lead.

In the name of Jesus Christ, Amen.$$, 
  'published','public','2027-04-30',
  'Bringing honest desires to God while surrendering every outcome to His greater wisdom and will.',
  '11','The Heart of Prayer',304,'Prayer as Surrender',
  '1 Samuel 3:1–10','Matthew 26:36–46',
  'Matthew 26:39','Nevertheless not as I will, but as thou wilt.',
  'Is there a request I am willing to bring to God only if He answers it according to my preferred outcome?',
  'Pray honestly about one deeply desired outcome, then end with the words, “Father, I trust Your wisdom. Thy will be done.”',
  'Surrender does not silence desire; it places desire into hands wiser than our own.',
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