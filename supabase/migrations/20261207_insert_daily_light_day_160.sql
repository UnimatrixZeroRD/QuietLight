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
  'day-160-love-that-lays-itself-down',
  'Love That Lays Itself Down',
  'Christlike love moves beyond convenience into sacrificial faithfulness, giving time, attention, forgiveness, presence, and service where God leads.',
  'public',
  'published',
  'Volume Six',
  'The Character of Christ',
  160,
  'Reflecting the Sacrificial Love of Christ',
  'Ruth 1:6-18',
  'John 13:31-38; 15:9-13',
  'John 15:13',
  'Greater love hath no man than this, that a man lay down his life for his friends.',
  'John 15:13',
  'Greater love hath no man than this, that a man lay down his life for his friends.',
  $$Love is easy to speak about.

It is much harder to practice when it becomes costly.

Jesus did not define love primarily through emotion.

He defined it through sacrifice.

On the night before His crucifixion, Christ commanded His disciples to love one another as He had loved them. Within hours, He would demonstrate exactly what those words meant.

He would surrender His comfort.

His reputation.

His safety.

And ultimately His life.

The cross is the clearest picture of love the world has ever seen.

Sacrificial love does not ask first,

"What will this cost me?"

It asks,

"What does faithfulness require?"

Ruth displayed this kind of love toward Naomi.

She had every reason to return to familiar people and begin a new life. Instead, she chose loyalty, shared uncertainty, and companionship with a grieving widow.

Her famous words were not romantic poetry.

They were a costly promise:

"Whither thou goest, I will go."

The Way of Quiet Light reminds us that laying down our lives rarely begins with one dramatic sacrifice.

It is usually practiced through daily acts of self-giving love.

Listening when we would rather speak.

Serving when we are tired.

Remaining faithful when relationships become difficult.

Giving time we would prefer to keep.

Forgiving when resentment feels justified.

Love becomes Christlike when it moves beyond convenience.

This does not mean neglecting wisdom, health, or appropriate boundaries. Sacrifice is not the same as allowing abuse or abandoning every legitimate need.

Jesus sometimes withdrew to rest.

He refused manipulation.

He spoke truth clearly.

Yet within every boundary, His heart remained devoted to the good of others and obedient to the Father.

Today, consider what love requires of you.

Perhaps someone needs your patience.

Your presence.

Your forgiveness.

Your practical help.

The opportunity may appear small.

But love offered in Christ's name is never insignificant.$$,
  $$Heavenly Father,

Thank You for the sacrificial love revealed through Jesus Christ. Teach me to love others with patience, faithfulness, courage, and generosity. Free me from selfishness and help me willingly give my time, attention, and service where You lead. Grant me wisdom to love well and strength to remain faithful when love becomes costly.

In the name of Jesus Christ, Amen.$$,
  'Has my love for others remained mostly convenient, or am I willing to serve when it requires sacrifice?',
  'Choose one practical way to place another person''s genuine need before your own convenience today.',
  'Christlike love is measured not merely by what it feels, but by what it is willing to give.',
  '2026-12-07'
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
