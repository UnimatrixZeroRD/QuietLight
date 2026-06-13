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
- Select any snapshot for detailed comparison
- Compare two saved snapshots side by side
- Export a side-by-side comparison report
- View the selected snapshot checklist and notes
- Delete old or accidental snapshots
- Export the latest snapshot history as CSV
- View a readiness trend chart

## Side-by-side comparison

The side-by-side comparison panel lets an admin choose two saved snapshots and compare them directly.

It shows:

- Earlier snapshot selector
- Later snapshot selector
- Overall score change
- Operations score change
- Delivery score change
- Live pages score change
- Draft cleanup score change
- Notes from both selected snapshots
- Copyable comparison report
- Downloadable comparison report

If fewer than two snapshots exist, the panel prompts the admin to save another snapshot first.

## Snapshot comparison export

The side-by-side comparison report can be copied or downloaded as a `.txt` file.

The report includes:

- Earlier snapshot date
- Later snapshot date
- Score changes by area
- Earlier notes
- Later notes

The downloaded file is named with the current date, for example:

`quiet-light-snapshot-comparison-2026-06-13.txt`

## Snapshot comparison details

Each saved snapshot has a View Comparison button.

Selecting a snapshot shows:

- Snapshot date
- Snapshot total score
- Current overall difference from that snapshot
- Current operations difference from that snapshot
- Current delivery difference from that snapshot
- Current live pages difference from that snapshot
- Current draft cleanup difference from that snapshot
- Snapshot notes
- Snapshot checklist text

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

Future work can add snapshot PDF exports or richer chart types.
