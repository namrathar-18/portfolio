# TODO

## Step 1: Update frontend API URL handling
- [ ] Modify `src/components/Contact.tsx` to use `import.meta.env.VITE_API_URL` with fallback to `http://localhost:5000/api`.

## Step 2: Verify frontend build
- [ ] Run `npm install` in repo root (if needed).
- [ ] Run `npm run build`.
- [ ] Run `npm run preview` and confirm app loads.

## Step 3: Verify backend run
- [ ] In `backend/`, confirm `.env` is set (at least `MONGO_URI`).
- [ ] Run `cd backend && npm install` (if needed).
- [ ] Run `cd backend && npm run start`.
- [ ] Check `GET /api/health` returns `{ status: 'Backend is running' }`.

## Step 4: End-to-end smoke test
- [ ] Start both services and submit contact form.
- [ ] Confirm success toast and backend logs.

## Step 5: Hosting notes
- [ ] Document how to set `VITE_API_URL` on the hosting platform.

