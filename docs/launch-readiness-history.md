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
- Export the latest snapshot history as CSV
- View a readiness trend chart

## Readiness trend chart

The dashboard now shows a simple bar chart for the latest saved snapshots.

The chart displays:

- Overall score per snapshot
- Snapshot date labels
- Current latest score
- Overall point change across the displayed range
- Latest operations, delivery, live pages, and draft cleanup sub-scores

If no snapshots exist yet, the chart prompts the admin to save a snapshot first.

## CSV export

The Export CSV button downloads the latest snapshot timeline as a `.csv` file.

The exported columns are:

- created_at
- total_score
- operations_score
- delivery_score
- live_pages_score
- draft_cleanup_score
- notes
- id

The downloaded file is named with the current date, for example:

`quiet-light-readiness-history-2026-06-13.csv`

## Delete controls

Each saved snapshot has a Delete Snapshot button.

The browser asks for confirmation before the snapshot is removed.

After deletion, the timeline refreshes and the current comparison recalculates against the latest remaining snapshot.

## Security

Snapshots are protected by row-level security.

Only admins can read, create, update, or delete launch readiness snapshots.

## Follow-up

Future work can add richer snapshot comparison views.
