import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { formData } = req.body;

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const businessUnits = {
    'fima-couchage': 'FIMA Couchage',
    'fima-design': 'FIMA Design',
    'univers-glass': 'UNIVERS GLASS'
  };

  const projectTypes = {
    'residential': 'Projet résidentiel',
    'commercial': 'Projet commercial',
    'hospitality': 'Hôtellerie',
    'institutional': 'Institutionnel',
    'industrial': 'Industriel'
  };

  const htmlContent = `
    <h2>Nouvelle demande de devis B2B</h2>
    
    <h3>Informations client</h3>
    <p><strong>Nom:</strong> ${formData.firstName} ${formData.lastName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Téléphone:</strong> ${formData.phone}</p>
    ${formData.company ? `<p><strong>Entreprise:</strong> ${formData.company}</p>` : ''}
    
    <h3>Projet</h3>
    <p><strong>Type:</strong> ${projectTypes[formData.projectType] || formData.projectType}</p>
    <p><strong>Métiers concernés:</strong> ${formData.businessUnit.map(unit => businessUnits[unit] || unit).join(', ')}</p>
    <p><strong>Budget:</strong> ${formData.budget}</p>
    <p><strong>Délai:</strong> ${formData.timeline}</p>
    
    <h3>Détails</h3>
    <p><strong>Description:</strong> ${formData.description}</p>
    ${formData.location ? `<p><strong>Localisation:</strong> ${formData.location}</p>` : ''}
    ${formData.surface ? `<p><strong>Surface:</strong> ${formData.surface}</p>` : ''}
    ${formData.specificRequirements ? `<p><strong>Exigences particulières:</strong> ${formData.specificRequirements}</p>` : ''}
    
    <h3>Contact</h3>
    <p><strong>Mode préféré:</strong> ${formData.preferredContact}</p>
    <p><strong>Meilleur moment:</strong> ${formData.preferredTime}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@groupfima.com',
      to: 'contact@groupfima.com',
      subject: `Nouvelle demande de devis - ${formData.firstName} ${formData.lastName}`,
      html: htmlContent,
    });

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
  }
}