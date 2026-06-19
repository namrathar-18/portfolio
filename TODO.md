# TODO - Contact form email delivery fix

## Steps
- [x] Ensure email is sent **only** to admin (`EMAIL_TO`) after saving contact to MongoDB.
- [x] If email fails, API should return an error so frontend doesn’t show success falsely.
- [x] Remove confirmation email to the user.
- [x] Restart backend and verify:
  - MongoDB document is created.
  - If email fails, frontend shows failure (HTTP 500) and backend logs the error.
  - Note: current failure is Gmail auth (BadCredentials) — fix EMAIL_USER/EMAIL_PASSWORD (Google App Password).


