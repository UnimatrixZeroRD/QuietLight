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
  'day-48-the-faithfulness-of-god',
  'The Faithfulness of God',
  'God''s faithfulness remains unchanging through every season, giving His people confidence when circumstances, emotions, and earthly hopes shift.',
  'public',
  'published',
  'Volume Two',
  'Growing in Grace',
  48,
  'Trusting the Unchanging Character of the Lord',
  'Lamentations 3:19-26',
  '2 Timothy 2:11-13',
  'Lamentations 3:23',
  'Great is thy faithfulness.',
  'Lamentations 3:23',
  'Great is thy faithfulness.',
  $$Everything around us changes.

Seasons change.

Circumstances change.

Health changes.

Relationships change.

Even our own emotions rise and fall from day to day.

Yet above every changing circumstance stands one eternal truth:

God never changes.

Jeremiah wrote the words "Great is thy faithfulness" during one of the darkest periods in Israel's history. Jerusalem lay in ruins. The future appeared uncertain. Yet instead of allowing despair to define his hope, Jeremiah deliberately remembered God's steadfast love and unfailing mercy.

Hope was not found in his surroundings.

Hope was found in the character of God.

Paul expresses the same confidence when he declares that even if we are faithless, God remains faithful, for He cannot deny Himself. His promises do not depend upon changing human emotions. They rest upon His eternal nature.

The Way of Quiet Light encourages believers to anchor their confidence in God's faithfulness rather than in temporary experiences. Feelings may fluctuate. Circumstances may disappoint. But the Lord remains exactly who He has always been—holy, loving, just, merciful, and true.

When you remember God's faithfulness throughout Scripture, you begin to recognize it within your own life.

He has carried you through difficulties you once thought impossible.

He has provided when you lacked.

He has forgiven when you failed.

He has remained present when you felt alone.

The same God who guided Abraham, strengthened Moses, comforted David, sustained Daniel, and raised Christ from the dead continues to faithfully lead His people today.

Look back upon your own journey.

Notice the quiet ways God has provided, protected, corrected, and sustained you.

His fingerprints are often most visible when viewed in hindsight.

Today, rest confidently in His unchanging love.

Your future is secure because it rests in the hands of a faithful God.$$,
  $$Heavenly Father,

Thank You for Your unfailing faithfulness. When my circumstances change, remind me that You remain constant. Strengthen my trust in Your promises, and help me remember the many ways You have already demonstrated Your love throughout my life. May Your faithfulness become the foundation of my confidence each day.

In the name of Jesus Christ, Amen.$$,
  'Looking back over my life, where have I most clearly seen God''s faithfulness?',
  'Write down five specific ways God has remained faithful to you. Offer Him sincere thanks for each one.',
  'Our confidence rests not in the strength of our faith, but in the faithfulness of our God.',
  '2026-08-17'
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
