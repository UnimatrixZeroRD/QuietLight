# Support Message Flow

Quiet Light now has an account-based message flow for launch support.

---

## Public Route

- `/support`

Signed-in users can send messages for:

- General questions.
- Orders.
- Downloads.
- Membership.
- Account access.
- Technical issues.

Anonymous visitors are directed to sign in or email directly.

---

## Admin Route

- `/admin/support`

Admins can:

- View submitted messages.
- Filter by status.
- Update status.
- Add internal notes.

---

## Database Table

The flow uses `public.messages`.

Important columns:

- `user_id`
- `sender_name`
- `sender_address`
- `topic`
- `subject`
- `message_text`
- `status`
- `notes`

---

## Access Rules

- Signed-in users can create messages tied to their own account.
- Signed-in users can view their own messages if an account message history is added later.
- Admins can read and manage all messages.

---

## Next Work

- Add message history to `/account`.
- Add email notifications for new messages.
- Add admin reply workflow.
- Add optional public contact flow after spam protection is added.
