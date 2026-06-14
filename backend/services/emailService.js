const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendContactEmail = async (contactData) => {
  try {
    // Email to me (admin)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: 'We received your message - Namratha R',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${contactData.name},</p>
        <p>Thank you for your message. I'll get back to you as soon as possible.</p>
        <p>Best regards,<br>Namratha R</p>
      `,
    });

    return { success: true };
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

module.exports = { sendContactEmail };
