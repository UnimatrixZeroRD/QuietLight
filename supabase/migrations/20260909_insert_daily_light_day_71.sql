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
  'day-71-ministers-of-reconciliation',
  'Ministers of Reconciliation',
  'Those reconciled to God through Christ are called to become ambassadors of peace, carrying His restoring grace into broken relationships.',
  'public',
  'published',
  'Volume Three',
  'Living the Kingdom',
  71,
  'Restoring Relationships Through Christ',
  'Genesis 33:1-11',
  '2 Corinthians 5:17-21',
  '2 Corinthians 5:18',
  'And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation.',
  '2 Corinthians 5:18',
  'And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation.',
  $$The Gospel is a message of reconciliation.

Because of sin, humanity became separated from God. Left to ourselves, there was no bridge we could build and no work we could accomplish to restore that relationship. Yet through Jesus Christ, God took the first step toward us. At the cross, justice and mercy met, and the way home was opened.

Those who have been reconciled to God are called to become people of reconciliation.

Paul describes believers as ambassadors entrusted with God's message of peace. We are not merely recipients of grace—we are called to carry that grace into a broken world.

Jacob and Esau offer a remarkable picture of restored relationships. Years earlier, deceit and bitterness had driven them apart. Yet when they met again, Jacob found not vengeance but unexpected mercy. Though their past could not be erased, forgiveness opened the door to peace.

The Way of Quiet Light reminds us that reconciliation begins with humility.

It requires the courage to admit our own failures.

It requires a willingness to listen.

It requires patience when healing takes time.

Not every relationship can be fully restored, because reconciliation involves the choices of more than one person. Yet followers of Christ are called to pursue peace wherever it is possible and to refuse the bitterness that so easily hardens the heart.

Sometimes the first step is a conversation.

Sometimes it is an apology.

Sometimes it is choosing to pray for someone who has deeply wounded us.

The Gospel invites us to become bridge-builders rather than wall-builders.

As Christ has reconciled us to the Father, let us seek to reflect that same grace toward others.$$,
  $$Heavenly Father,

Thank You for reconciling me to Yourself through Jesus Christ. Help me become an ambassador of Your peace in every relationship. Give me humility to seek forgiveness where I have failed, courage to pursue reconciliation where it is possible, and wisdom to trust You where healing requires time. May my life reflect the restoring power of Your grace.

In the name of Jesus Christ, Amen.$$,
  'Is there a relationship in which God is inviting me to become an instrument of reconciliation?',
  'Pray for someone with whom your relationship has become strained. If appropriate and wise, take one small step toward restoring peace.',
  'The cross not only reconciles us to God—it teaches us how to seek reconciliation with one another.',
  '2026-09-09'
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
