# Stabilization Notes

Quiet Light now has enough launch tooling that the priority should shift from new features to stability.

## Stabilization goal

The goal is to confirm that the current codebase is clean, buildable, and ready for final content entry.

## Immediate priority

Run the project checks locally:

```bash
npm run lint
npm run typecheck
npm run build
```

Fix any errors before adding more product, content, or dashboard features.

## Likely areas to watch

Because the project uses live Supabase tables and generated TypeScript types may lag behind schema changes, the most likely typecheck risks are:

- Newly added tables not present in generated Supabase types
- Newly added columns such as image alt text fields
- Dynamic table names in admin helper components
- Dashboard queries that reference newer database fields
- Next.js dynamic route `params` typing depending on installed Next version

## Suggested fix order

If typecheck fails, fix in this order:

1. Regenerate Supabase types if available in the local workflow.
2. Fix any missing table or column references.
3. Replace dynamic table updates with explicit table-specific switch statements.
4. Confirm dynamic route params match the installed Next.js version.
5. Re-run lint, typecheck, and build after each fix group.

## Feature freeze recommendation

Until the three commands pass, avoid adding more dashboard features.

Recommended freeze scope:

- No new admin sections
- No new database tables unless required for a build fix
- No new public routes
- No new checkout behavior
- No new media workflows

Allowed work during freeze:

- Type fixes
- Runtime bug fixes
- Broken route fixes
- Missing import fixes
- Documentation cleanup
- Final content entry
- Final QA checklist completion

## Ready-to-launch signal

The project is ready for final launch preparation when:

- Local lint passes
- Local typecheck passes
- Local build passes
- Admin dashboard loads without console errors
- Launch readiness dashboard shows acceptable scores
- Final launch QA checklist is complete
