# Account Message Log

Quiet Light now shows user-submitted contact messages inside the account area.

---

## User Flow

1. A signed-in user opens `/support`.
2. The user submits a message about an order, download, membership, account, or technical issue.
3. The message is stored in `public.messages` and tied to the user's account.
4. The user opens `/account` and views the message log.

---

## Account Area

The account page now includes:

- Profile form.
- Order history.
- Purchase history.
- Message log.
- Product library.

The message log panel includes:

- Status filters.
- Topic.
- Subject.
- Submitted message text.
- Admin note text when available.

---

## Admin Flow

Admins review and update messages from `/admin/support`.

---

## Next Work

- Add reply text separate from internal admin notes.
- Add email notification when a message is created.
- Add account notification when a message is updated.
- Add message counts to the admin dashboard.
