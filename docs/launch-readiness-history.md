# Launch Readiness History Snapshots

The admin dashboard can now save launch readiness snapshots over time.

## Route

`/admin`

## Database table

`launch_readiness_snapshots`

## Stored fields

Each snapshot stores:

- Overall readiness score
- Operations score
- Delivery score
- Live pages score
- Draft cleanup score
- Generated checklist text
- Optional notes
- Snapshot metadata
- Created timestamp
- Admin user that created it when available

## Admin dashboard behavior

The Launch Readiness section now includes a snapshot timeline.

Admins can:

- Save the current readiness score
- Add optional notes
- See the latest saved snapshots
- Compare the current score against the previous snapshot
- Delete old or accidental snapshots

## Delete controls

Each saved snapshot has a Delete Snapshot button.

The browser asks for confirmation before the snapshot is removed.

After deletion, the timeline refreshes and the current comparison recalculates against the latest remaining snapshot.

## Security

Snapshots are protected by row-level security.

Only admins can read, create, update, or delete launch readiness snapshots.

## Follow-up

Future work can add charting, CSV export, and richer snapshot comparison views.
