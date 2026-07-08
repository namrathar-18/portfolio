const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../services/emailService');

const router = express.Router();

// --- Minimal in-memory rate limit: 5 submissions per IP per 10 minutes ---
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimit(req, res, next) {
  const now = Date.now();
  const key = req.ip;
  const entry = hits.get(key) ?? { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  hits.set(key, entry);
  if (entry.count > MAX_PER_WINDOW) {
    return res.status(429).json({ error: 'Too many messages — please try again later.' });
  }
  next();
}

// --- Admin guard for reading/managing stored messages ---
function requireAdmin(req, res, next) {
  const key = req.get('x-admin-key');
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

const dbReady = () => mongoose.connection.readyState === 1;

// POST new contact message — the public endpoint the website uses
router.post('/', rateLimit, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!validator.isEmail(String(email))) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }
    if (String(message).length > 5000 || String(name).length > 200) {
      return res.status(400).json({ error: 'Message is too long' });
    }

    const contactData = {
      name: validator.escape(String(name).trim()),
      email: validator.normalizeEmail(String(email)) || String(email).trim(),
      message: String(message).trim(),
    };

    // Email is the primary channel — fail the request if it fails
    await sendContactEmail(contactData);

    // Persist when a database is configured; never block the email on it
    if (dbReady()) {
      try {
        await new Contact(contactData).save();
      } catch (dbError) {
        console.error('DB save failed (email already sent):', dbError.message);
      }
    }

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact submission failed:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please email me directly.' });
  }
});

// Admin: list stored messages
router.get('/', requireAdmin, async (req, res) => {
  if (!dbReady()) return res.status(503).json({ error: 'Database not configured' });
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin: single message
router.get('/:id', requireAdmin, async (req, res) => {
  if (!dbReady()) return res.status(503).json({ error: 'Database not configured' });
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin: update status
router.patch('/:id', requireAdmin, async (req, res) => {
  if (!dbReady()) return res.status(503).json({ error: 'Database not configured' });
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin: delete message
router.delete('/:id', requireAdmin, async (req, res) => {
  if (!dbReady()) return res.status(503).json({ error: 'Database not configured' });
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
