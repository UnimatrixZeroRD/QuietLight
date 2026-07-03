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
  'day-12-the-gift-of-grace',
  'The Gift of Grace',
  'Grace is God''s undeserved favor, saving sinners through faith in Jesus Christ and calling every good work to flow from grateful humility.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  12,
  'Saved by God''s Unmerited Favor',
  'Isaiah 53:1-12',
  'Ephesians 2:1-10',
  'Ephesians 2:8',
  'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.',
  'Ephesians 2:8',
  'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.',
  $$There are few words in Scripture more beautiful than the word grace.

Grace is God's undeserved favor toward those who could never earn it. It is His love reaching into our brokenness, His mercy extending to the undeserving, and His kindness drawing us into fellowship with Himself. Grace is not a reward for the righteous—it is God's gift to sinners who place their trust in Jesus Christ.

The prophet Isaiah looked centuries into the future and described the suffering Servant who would bear our griefs, carry our sorrows, and be wounded for our transgressions. Every detail pointed toward Christ, who willingly laid down His life so that we might receive forgiveness and peace.

Paul reminds us that salvation is entirely the work of God. We were spiritually dead, unable to rescue ourselves. No amount of religious effort, charitable giving, or personal discipline could bridge the separation caused by sin. Yet God, rich in mercy, made us alive together with Christ.

This truth guards us against both pride and despair.

We cannot boast because salvation is not something we achieved. Neither must we lose hope because our acceptance before God does not depend upon our performance. We stand secure because Christ has accomplished what we never could.

The Way of Quiet Light calls us to live with grateful humility. Every act of obedience, every quiet service, every prayer, and every expression of love flows from grace—it never earns grace. We serve because we have been loved. We forgive because we have been forgiven. We extend mercy because mercy has first been shown to us.

As you go through this day, remember that God's grace is not exhausted by yesterday's failures or diminished by today's struggles. His mercies are new every morning, and His faithfulness never comes to an end.

Receive His gift with gratitude, and let your life become a joyful response to the grace you have already received.$$,
  $$Heavenly Father,

Thank You for the immeasurable gift of Your grace through Jesus Christ. I confess that I could never earn Your love or deserve Your mercy. Teach me to live with humble gratitude, relying not on my own strength but on Your unfailing kindness. May every good work I do today be a response to Your grace and a testimony to Your glory.

In the name of Jesus Christ, Amen.$$,
  'Have I been trying to earn God''s acceptance instead of resting in the finished work of Christ?',
  'Thank God specifically for His grace. Write down three ways His mercy has been evident in your life and offer Him praise.',
  'Grace is not the reward for the faithful; it is the reason we are able to walk faithfully.',
  '2026-07-12'
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
