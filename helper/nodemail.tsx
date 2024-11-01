/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer"

const configOptions = {
    host: 'imap.gmail.com',
    port: 465,
    secure: true,
    secureConnection: true,
    auth: {
      user: 'nilton667@gmail.com',
      pass: 'jerp wrfl txcn lrck',
    },
    tls: {
      rejectUnauthorized: true
    }
};

const Transporter = nodemailer.createTransport(configOptions);

async function SendEmail(
  {name, email, to, subject, text} 
  : {name: string, email: string, to: string, subject: string, text: string}) : Promise<boolean|string>{
  try {
    await nodemailer.createTransport(configOptions).sendMail({
      from: `"${name}" <${email}>`,
      to: to,
      subject: subject,
      text: text,
    });
    return true;
  } catch (error: any) {
    return error.message;
  }
}

export {Transporter, SendEmail};