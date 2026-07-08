const nodemailer = require('nodemailer');

// --- SMTP transport (STARTTLS on 587; some hosts block 465 but allow 587) ---
const smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // upgrade to TLS via STARTTLS
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Google App Password
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
});

function buildHtml(contactData) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Message:</strong></p>
    <p>${String(contactData.message).replace(/</g, '&lt;').replace(/\n/g, '<br>')}</p>
    <p><em>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
  `;
}

/**
 * Sends the contact email over HTTPS via Resend when RESEND_API_KEY is set
 * (works on Render/Vercel, which block SMTP), otherwise falls back to Gmail
 * SMTP for local development.
 */
const sendContactEmail = async (contactData) => {
  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
  const subject = `New portfolio message from ${contactData.name}`;
  const replyTo = `${contactData.name} <${contactData.email}>`;

  if (process.env.RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Resend's shared sender works with no domain setup
        from: process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>',
        to: [to],
        reply_to: replyTo,
        subject,
        html: buildHtml(contactData),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      throw new Error(`Resend API error ${res.status}: ${detail.slice(0, 200)}`);
    }
    return { success: true };
  }

  // Local fallback
  await smtpTransport.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to,
    replyTo,
    subject,
    html: buildHtml(contactData),
  });
  return { success: true };
};

module.exports = { sendContactEmail };
