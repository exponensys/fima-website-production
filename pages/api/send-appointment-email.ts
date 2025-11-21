import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { formData } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const services = {
    'literie': 'Literie & Couchage',
    'menuiserie': 'Menuiserie & Design',
    'vitrerie': 'Vitrerie & Aluminium',
    'b2b': 'Solutions B2B',
    'autre': 'Autre projet'
  };

  const consultationModes = {
    'presential': 'Présentiel',
    'video': 'Visioconférence',
    'phone': 'Téléphone'
  };

  const htmlContent = `
    <h2>Nouvelle demande de rendez-vous</h2>
    
    <h3>Informations client</h3>
    <p><strong>Nom:</strong> ${formData.firstName} ${formData.lastName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Téléphone:</strong> ${formData.phone}</p>
    ${formData.company ? `<p><strong>Entreprise:</strong> ${formData.company}</p>` : ''}
    
    <h3>Service demandé</h3>
    <p><strong>Domaine:</strong> ${services[formData.serviceType] || formData.serviceType}</p>
    <p><strong>Description du projet:</strong> ${formData.projectDescription}</p>
    <p><strong>Budget:</strong> ${formData.budget}</p>
    <p><strong>Délai:</strong> ${formData.timeline}</p>
    
    <h3>Rendez-vous souhaité</h3>
    <p><strong>Date:</strong> ${formData.preferredDate}</p>
    <p><strong>Heure:</strong> ${formData.preferredTime}</p>
    <p><strong>Mode:</strong> ${consultationModes[formData.consultationMode] || formData.consultationMode}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@groupfima.com',
      to: 'contact@groupfima.com',
      subject: `Nouvelle demande de rendez-vous - ${formData.firstName} ${formData.lastName}`,
      html: htmlContent,
    });

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
  }
}