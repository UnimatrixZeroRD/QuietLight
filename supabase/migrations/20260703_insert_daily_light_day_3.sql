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
  'day-3-walking-by-faith',
  'Walking by Faith',
  'Faith trusts the character of God beyond what can be seen, taking the next obedient step even when the full path has not yet been revealed.',
  'public',
  'published',
  'Volume One',
  'Walking in the Light',
  3,
  'Trusting God Beyond What We Can See',
  'Genesis 12:1-9',
  'Hebrews 11:1-10',
  'Hebrews 11:1',
  'Now faith is the substance of things hoped for, the evidence of things not seen.',
  'Hebrews 11:1',
  'Now faith is the substance of things hoped for, the evidence of things not seen.',
  $$Faith is not the absence of questions; it is the decision to trust God even when every answer has not yet been revealed.

When the Lord called Abram to leave his homeland, He did not provide a detailed map of the journey ahead. He simply gave a promise and a command: "Go." Abram obeyed, not because he knew every destination along the way, but because he knew the One who was leading him.

The Christian life is much the same. We often desire certainty before we take our next step. We ask God to show us the entire path before we are willing to move. Yet throughout Scripture, God usually reveals His will one faithful step at a time.

Faith is not blind optimism or wishful thinking. It is confidence in the character of God. We trust Him because He has proven Himself faithful throughout history and throughout our own lives. The God who parted the Red Sea, sustained Elijah in the wilderness, raised Christ from the dead, and fulfilled every promise concerning the Messiah has not changed.

The Way of Quiet Light reminds us that most faithful steps are small and unseen. Rarely does God ask us to accomplish extraordinary things overnight. More often, He calls us to ordinary obedience—offering forgiveness, speaking truth with love, serving quietly, praying faithfully, and trusting Him in seasons of uncertainty.

Every act of obedience becomes another testimony that our confidence rests not in ourselves, but in God.

You may not know what tomorrow holds. You may not understand why certain doors remain closed while others unexpectedly open. Yet faith does not require complete understanding. It requires a willing heart that says, "Lord, wherever You lead, I will follow."

Walk today with confidence, not because your path is perfectly visible, but because your Guide is perfectly faithful.$$,
  $$Heavenly Father,

Strengthen my faith when fear and uncertainty seek to overwhelm me. Help me to trust Your wisdom even when I cannot see the road ahead. Give me the courage to obey Your voice, knowing that every step taken in faith is held securely in Your hands. May my life bear witness to Your faithfulness, and may I follow Christ with a willing and obedient heart.

In the name of Jesus Christ, Amen.$$,
  'Is there an area of my life where I have been waiting for complete certainty instead of taking the next faithful step that God has already shown me?',
  'Identify one act of obedience you have been delaying. Commit it to prayer, and if it is within your ability today, take that first step in faith.',
  'Faith does not illuminate the entire journey; it provides enough light for the next faithful step.',
  '2026-07-03'
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
