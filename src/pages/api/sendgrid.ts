import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_TOKEN as string);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { subject, message, name, email } = req.body;

      await sendgrid.send({
        to: 'info@plant-burger.de',
        from: 'info@plant-burger.de',
        subject: subject,
        html: `<div><p>Neue Nachricht von ${name} (${email})</p><p>${message}</p></div>`,
      });
      return res.status(200).json({ message: 'E-Mail erfolgreich gesendet' });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Error occured sending E-Mail' });
    }
  } else {
    return res.status(405).json('Method not allowed');
  }
}

export default sendEmail;
