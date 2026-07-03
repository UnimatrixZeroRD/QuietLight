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
  'day-4-the-promise-of-redemption',
  'The Promise of Redemption',
  'Even in the tragedy of the fall, God gave the first promise of redemption, pointing forward to Christ and the grace that restores what sin has broken.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  4,
  'Hope in the Midst of the Fall',
  'Genesis 3:14-24',
  'Romans 5:6-11',
  'Romans 5:8',
  'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
  'Romans 5:8',
  'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
  $$The first pages of Scripture reveal both humanity's greatest tragedy and God's first promise of hope.

Adam and Eve were created to live in perfect fellowship with their Creator. Yet through disobedience, sin entered the world, bringing shame, suffering, and death. The harmony of Eden was broken, and mankind was separated from the God who had lovingly formed them from the dust.

If the story ended there, there would be no hope.

But before Adam and Eve were sent from the garden, God spoke words that echoed throughout history. In His judgment upon the serpent was a promise that one day the offspring of the woman would crush the serpent's head. Though wounded Himself, the coming Redeemer would ultimately defeat sin, death, and Satan forever.

This promise pointed forward to Jesus Christ.

From the very beginning, redemption was not an afterthought. God did not abandon His creation when it fell. Instead, He began unfolding His plan of salvation—a plan that would culminate at the cross and the empty tomb.

Every believer knows something of Eden's loss. We experience temptation, failure, grief, and the consequences of living in a broken world. Yet we also know something Adam and Eve could only anticipate: the promised Redeemer has come.

Because of Christ, our failures do not have the final word. Grace speaks louder than guilt. Mercy triumphs over condemnation. Through faith in Him, what was broken can be restored.

The Way of Quiet Light reminds us that redemption often begins quietly. God usually works in hearts before He changes circumstances. He heals the soul before He heals the world. Every act of repentance is evidence that His restoring work has already begun.

Today, remember that no failure is beyond God's ability to redeem. Bring your burdens honestly before Him. The same Lord who promised salvation in the Garden continues His work of restoration in every heart surrendered to Him.$$,
  $$Heavenly Father,

Thank You for Your mercy that reaches even into my failures. When I stumble, remind me that Your grace is greater than my sin and that Jesus Christ has secured my redemption through His sacrifice. Help me to turn from temptation, trust in Your forgiveness, and walk each day in the new life You have given me. Restore what sin has damaged, and teach me to live in grateful obedience.

In the name of Jesus Christ, Amen.$$,
  'Is there an area of my life where I have allowed guilt to overshadow God''s promise of forgiveness?',
  'Spend time thanking God specifically for His grace rather than focusing only on your shortcomings.',
  'Where sin entered quietly, God''s redemption arrived with greater power.',
  '2026-07-04'
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
