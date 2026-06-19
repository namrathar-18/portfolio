# Portfolio Backend

Backend API for the portfolio contact form with Node.js, Express, and MongoDB.

## Setup

1. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

2. Update `.env` with your configuration:
```
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
EMAIL_USER=jasminchopda540@gmail.com
EMAIL_PASSWORD=your_app_password  # use a Google App Password
EMAIL_TO=jasminchopda540@gmail.com
```


3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm run dev
```

## Test locally
- Open the frontend (usually http://localhost:5173)
- Submit the contact form
- Backend will save the message to MongoDB and send emails via Gmail


## API Endpoints

### POST /api/contacts
Send a contact message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully",
  "contact": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here",
    "status": "new",
    "createdAt": "2024-01-30T..."
  }
}
```

### GET /api/contacts
Get all contact messages (admin).

### GET /api/contacts/:id
Get a single contact message.

### PATCH /api/contacts/:id
Update contact status.

### DELETE /api/contacts/:id
Delete a contact message.

## Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Google Account
2. Create an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the generated 16-character password
3. Use this password in your `.env` file as `EMAIL_PASSWORD` (replace `PLEASE_SET_APP_PASSWORD`)

