const nodemailer = require('nodemailer');

// Use explicit Gmail SMTP settings to avoid Render/Gmail transport timeouts
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // Allow Render environment to negotiate successfully
    rejectUnauthorized: false,
  },
});


const sendContactEmail = async (contactData) => {
  try {
    // Email to admin only (portfolio owner)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(contactData.message).replace(/\n/g, '<br>')}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    });

    return { success: true };
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

module.exports = { sendContactEmail };

