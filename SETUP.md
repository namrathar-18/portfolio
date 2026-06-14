# Portfolio Setup Guide

## Frontend Setup (React + Vite)

The frontend is already set up. To run it:

```bash
npm install
npm run dev
```

The frontend will be available at `http://localhost:8081/`

## Backend Setup (Node + Express + MongoDB)

### 1. Navigate to backend folder
```bash
cd backend
```

### 2. Create `.env` file
Copy `.env.example` to `.env` and update with your configuration:

```bash
cp .env.example .env
```

### 3. Update `.env` file

**Required:**
- `MONGO_URI` - MongoDB connection string (default: `mongodb://localhost:27017/portfolio`)
- `PORT` - Backend port (default: `5000`)

**For Email (Optional but recommended):**
- `EMAIL_USER` - Your Gmail address
- `EMAIL_PASSWORD` - Your Gmail App Password (not regular password)
- `EMAIL_TO` - Where to receive contact notifications

### 4. Set up Gmail for sending emails

1. Enable 2-Factor Authentication: https://myaccount.google.com/
2. Create App Password: https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer"
4. Copy the 16-character password and paste it in `.env` as `EMAIL_PASSWORD`

### 5. Install MongoDB

**Option A: Local MongoDB**
- Download and install MongoDB: https://docs.mongodb.com/manual/installation/
- Start MongoDB service

**Option B: MongoDB Atlas (Cloud)**
- Go to https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Use the connection string as `MONGO_URI` in `.env`

### 6. Install and run backend

```bash
npm install
npm run dev
```

Backend will run on `http://localhost:5000`

## How It Works

1. **Frontend** (React) - User fills out contact form
2. **API Call** - Form data is sent to backend at `POST http://localhost:5000/api/contacts`
3. **MongoDB** - Message is stored in database
4. **Email** - Automatic emails sent to admin and user confirmation
5. **Response** - User sees success message

## API Endpoints

### POST /api/contacts
Send a contact message

```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message"
  }'
```

### GET /api/contacts
Get all messages (admin dashboard)

```bash
curl http://localhost:5000/api/contacts
```

### GET /api/contacts/:id
Get specific message

## Troubleshooting

**Port already in use:**
- Change `PORT` in `.env`
- Or kill the process: `npx kill-port 5000`

**MongoDB connection error:**
- Check if MongoDB is running
- Verify `MONGO_URI` in `.env`

**Email not sending:**
- Verify Gmail credentials
- Check if 2FA is enabled
- Use App Password, not regular password

**CORS errors:**
- Backend already has CORS enabled for all origins
- If still having issues, check backend is running on correct port

## Deployment

When deploying:
1. Update `API_URL` in `Contact.tsx` to your production backend URL
2. Deploy backend to a Node.js hosting (Heroku, Railway, Render, etc.)
3. Deploy frontend to a static hosting (Vercel, Netlify, GitHub Pages, etc.)
3. Update MongoDB URI to production database
4. Set up email credentials on production server
