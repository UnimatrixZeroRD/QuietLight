-- Customer library read access.
-- This migration was applied to the live QuietLight Supabase project.
-- It allows signed-in users to read their own license rows and related product library records.

-- Live policies added:
-- 1. Users can read own active licenses.
-- 2. Licensed users can read licensed products.
-- 3. Licensed users can read product file records.
