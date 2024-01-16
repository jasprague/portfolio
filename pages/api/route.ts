import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === 'POST') {
    // Set up Nodemailer
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || '587'),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }      
    });

    // Send email
    await transporter.sendMail({
      from: '"Website Contact Form" <leftyjds@gmail.com>',
      to: 'leftyjds@gmail.com',
      subject: 'New Message from Contact Form',
      text: `Name: ${req.body.name} \n Email: ${req.body.email}\n Phone: ${req.body.phone} \n Message: ${req.body.message}`,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  }
  else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
