import nodemailer from 'nodemailer';
import type { Handler, APIGatewayProxyEvent, Context } from 'aws-lambda';
const handler: Handler = async (event: APIGatewayProxyEvent, context: Context) => {
  // Ensure the request method is POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}');

    // Basic validation to ensure required fields are not empty
    if (!name || !email || !subject) { // Message is optional based on your frontend validation preference
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Name, Email, and Subject fields are required.' }),
      };
    }
    
    // Create a Nodemailer transporter
    // You'll need to configure this with your email service provider details.
    // For Gmail, you'll likely need to use an App Password.
    // Store your email and App Password in environment variables for security.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address (e.g., your-email@gmail.com)
        pass: process.env.EMAIL_PASS, // Your email password or App Password
      },
    });
    // Attempt to send the email

      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Set the sender's name and email
        to: process.env.EMAIL_RECIPIENT, // Your email address where you want to receive messages
        subject: `New Contact Form Submission: ${subject}`,
        // Plain text body
        text: `
Name: ${name}\n
Email: ${email}\n
Subject: ${subject}\n
Message:\n
${message}`,
        html: `
<!-- HTML body -->
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
`,
      });
      
      console.log('Email sent successfully!');
      
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Message sent successfully!' }),
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error sending message', error: error.message }),
      };
    }
};
export default handler;