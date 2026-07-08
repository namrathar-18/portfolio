const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contacts');

const app = express();

// Running behind a proxy (Render/Railway) — needed for correct client IPs
app.set('trust proxy', 1);

// Only the portfolio and local dev may call this API
const allowedOrigins = [
  'https://namrathar-18.github.io',
  'http://localhost:8080',
  'http://localhost:5173',
];
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser tools (no Origin header) and allowed sites
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
  })
);

app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: true }));

// MongoDB is OPTIONAL — the contact form works email-only without it.
// Credentials are passed separately (not in the URI) so passwords containing
// special characters like '@' don't break URI parsing.
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err.message));
} else {
  console.log('MONGO_URI not set — running email-only (messages are not persisted)');
}

// Routes
app.use('/api/contacts', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    email: Boolean(process.env.RESEND_API_KEY || (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD)),
    resend: Boolean(process.env.RESEND_API_KEY),
    db: mongoose.connection.readyState === 1,
  });
});

// Error handling middleware
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
