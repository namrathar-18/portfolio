const nodemailer = require('nodemailer');

// Explicit Gmail SMTP settings (SSL on 465) — reliable from cloud hosts
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Google App Password, NOT the account password
  },
});

const sendContactEmail = async (contactData) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    // Hitting "Reply" answers the visitor directly
    replyTo: `"${contactData.name}" <${contactData.email}>`,
    subject: `New portfolio message from ${contactData.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${String(contactData.message).replace(/</g, '&lt;').replace(/\n/g, '<br>')}</p>
      <p><em>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
    `,
  });

  return { success: true };
};

module.exports = { sendContactEmail };
