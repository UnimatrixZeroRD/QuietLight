-- Remove literal Markdown artifacts from the two affected Daily Light entries.
-- Day 365's extended final-word section belongs in the reflection rather than
-- inside the short closing-thought presentation field.

update public.daily_light_entries
set reflection = replace(reflection, '**', '')
where day in (90, 365);

update public.daily_light_entries
set
  prayer = replace(prayer, '**', ''),
  today_practice = replace(today_practice, '**', '')
where day = 365;

update public.daily_light_entries
set
  reflection = reflection || E'\n\nThe Final Word of The Daily Light\n\nThree hundred and sixty-five days.\n\nTwelve volumes.\n\nOne unfolding journey through Scripture.\n\nOne Saviour at the centre of every page.\n\nThe Father has been faithful.\n\nThe Son has remained our Light.\n\nThe Spirit has helped us in our weakness.\n\nThe road continues beyond these words.\n\nCarry the lantern.\n\nWalk the quiet path.\n\nKeep watch through the night.\n\nThe dawn is coming.\n\nThe Light has not failed.\n\nThe Lamb still reigns.\n\nThe flame remains.',
  closing_thought = E'The book may close, but the Word still speaks.\nThe year may end, but mercy rises with the morning.\nThe traveller may grow weary, but Christ does not abandon the road.\nThe lantern may pass from hand to hand, but the Light is eternal.\nWe are not the Light. We are only its keepers.\nAnd the flame remains.'
where day = 365;
