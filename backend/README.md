# Portfolio Contact API

Express + Nodemailer service behind the portfolio contact form. Sends every submission straight to your inbox via Gmail SMTP, with the visitor's address as `Reply-To` — hit Reply to answer them directly. MongoDB persistence is optional.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/namrathar-18/portfolio)

> One click on the button above reads [`render.yaml`](../render.yaml) and provisions everything. You only connect GitHub once and paste the three `EMAIL_*` values.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `EMAIL_USER` | ✅ | Gmail address that sends the mail (e.g. `namrp.18@gmail.com`) |
| `EMAIL_PASSWORD` | ✅ | **Google App Password** — NOT your Gmail password (see below) |
| `EMAIL_TO` | — | Recipient inbox; defaults to `EMAIL_USER` |
| `ADMIN_KEY` | — | Secret for reading/deleting stored messages (`x-admin-key` header) |
| `MONGO_URI` / `MONGO_USER` / `MONGO_PASS` | — | Optional MongoDB persistence; email works without it |

### Getting a Google App Password (2 minutes, one time)

1. Open [myaccount.google.com/security](https://myaccount.google.com/security) and turn on **2-Step Verification** if it isn't already.
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
3. Create one named `portfolio` and copy the 16-character password.
4. Use it as `EMAIL_PASSWORD`. (The old "BadCredentials" failure was from using the normal account password — Gmail blocks that.)

## Deploy on Render (free)

1. Go to [dashboard.render.com](https://dashboard.render.com) → **New → Blueprint** and pick this repository — `render.yaml` configures everything (root dir `backend`, health check, free plan).
2. Fill in `EMAIL_USER`, `EMAIL_PASSWORD` (the App Password), and `EMAIL_TO` when prompted.
3. Deploy, then copy the service URL, e.g. `https://portfolio-api-xxxx.onrender.com`.

## Point the website at it

Add a repository **Actions variable** (GitHub → repo → Settings → Secrets and variables → Actions → Variables):

```
VITE_API_URL = https://portfolio-api-xxxx.onrender.com/api
```

The next deploy of the site uses your API directly — no third-party form service involved.

## Run locally

```bash
cd backend
npm install
cp .env.example .env   # fill in the values
npm run dev            # http://localhost:5000/api/health
```

## API

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| `POST` | `/api/contacts` | public (rate-limited) | Submit a message → emails you |
| `GET` | `/api/health` | public | Service, email-config, and DB status |
| `GET/PATCH/DELETE` | `/api/contacts[/:id]` | `x-admin-key` header | Manage stored messages (needs MongoDB) |
