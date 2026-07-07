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
  'day-87-the-joy-of-obedience',
  'The Joy of Obedience',
  'Obedience grows from love for Christ, turning God''s commands from burdens into life-giving expressions of trust, gratitude, and delight.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  87,
  'Walking Gladly in God''s Will',
  'Psalm 40:6-10',
  'John 14:15-24',
  'John 14:15',
  'If ye love me, keep my commandments.',
  'John 14:15',
  'If ye love me, keep my commandments.',
  $$Obedience is often misunderstood.

Many people see God's commandments as restrictions designed to limit freedom. Scripture reveals something entirely different. God's commands are expressions of His wisdom, His love, and His desire for our flourishing.

Jesus did not say, "If you fear Me, keep My commandments."

He said,

"If ye love me."

Obedience grows from love.

When our hearts are captivated by Christ, following Him becomes more than duty—it becomes our delight.

David expressed this same joy centuries earlier when he declared, "I delight to do thy will, O my God." He understood that God's ways were not burdensome but life-giving. The Lord's commands led him toward righteousness, peace, and deeper fellowship with God.

The Way of Quiet Light reminds us that joyful obedience is often revealed in ordinary decisions.

Choosing honesty when dishonesty would be easier.

Choosing patience instead of anger.

Choosing forgiveness instead of resentment.

Choosing generosity instead of selfishness.

Choosing prayer instead of worry.

These choices may appear small, but they shape a life that increasingly reflects the character of Christ.

Every act of obedience is an opportunity to declare,

"Lord, I trust Your wisdom more than my own."

Far from diminishing our freedom, obedience frees us from the slavery of sin and draws us into the abundant life Christ has promised.

Today, do not ask merely what God requires.

Ask what response of love He deserves.

When love leads, obedience follows naturally.$$,
  $$Heavenly Father,

Thank You for giving me Your Word as a guide for life. Help me to obey You not from fear or obligation, but from genuine love for Jesus Christ. Teach me to delight in Your will and to trust that every command You give is for my good and for Your glory. Let my obedience become an expression of my gratitude for Your grace.

In the name of Jesus Christ, Amen.$$,
  'Is my obedience to God motivated more by duty or by love?',
  'Choose one command of Scripture you have been neglecting, and intentionally obey it today as an act of love toward Christ.',
  'The deepest obedience grows from the deepest love for Christ.',
  '2026-09-25'
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
