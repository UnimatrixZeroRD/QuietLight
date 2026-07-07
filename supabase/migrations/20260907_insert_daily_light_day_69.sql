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
  'day-69-shining-in-the-darkness',
  'Shining in the Darkness',
  'Christ''s light shines through faithful endurance, allowing trials to become a testimony of hope, courage, patience, and grace.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  69,
  'Bearing Witness Through Trials',
  'Daniel 3:13-30',
  '1 Peter 2:19-25',
  'Philippians 2:15',
  'That ye may be blameless and harmless, the sons of God... among whom ye shine as lights in the world.',
  'Philippians 2:15',
  'That ye may be blameless and harmless, the sons of God... among whom ye shine as lights in the world.',
  $$It is easy to shine when the sun is already bright.

The true purpose of light, however, is revealed in darkness.

Followers of Christ are not promised lives free from hardship. Jesus Himself warned that His disciples would face opposition, misunderstanding, and suffering. Yet He also promised that He would never leave nor forsake them.

The three Hebrew men—Shadrach, Meshach, and Abednego—understood this truth. They refused to bow before the golden image, not because they expected God to rescue them, but because they believed He was worthy of their obedience regardless of the outcome.

Their faithfulness became a testimony before an entire kingdom.

God did not prevent them from entering the fiery furnace.

He joined them within it.

The Way of Quiet Light reminds us that some of our brightest moments of witness come during our darkest seasons of trial. When others observe peace instead of panic, forgiveness instead of bitterness, hope instead of despair, they begin to see the reality of Christ within us.

Peter encourages believers who suffer for doing good not to lose heart. Patient endurance for the sake of righteousness reflects the example of Jesus, who entrusted Himself completely to the Father even while enduring injustice.

Perhaps you are walking through a difficult season today.

Do not assume your suffering has no purpose.

God often uses faithful endurance to reveal His glory in ways comfort never could.

Continue trusting.

Continue loving.

Continue obeying.

The darkness around you does not diminish the light of Christ within you.

It simply makes it easier for others to see.$$,
  $$Heavenly Father,

When I face hardship for following You, strengthen my heart to remain faithful. Help me to reflect the patience, humility, and love of Jesus Christ even in difficult circumstances. May my life become a light that points others toward Your hope and Your faithfulness. Give me courage to trust You in every season.

In the name of Jesus Christ, Amen.$$,
  'How might God be using my present difficulties to become a testimony of His grace?',
  'Choose one difficult situation today and intentionally respond with Christlike patience rather than frustration.',
  'The brightest testimony often shines from those who remain faithful in the fire.',
  '2026-09-07'
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
