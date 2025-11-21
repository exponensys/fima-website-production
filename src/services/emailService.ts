interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  businessUnit: string[];
  budget: string;
  timeline: string;
  description: string;
  location: string;
  surface: string;
  specificRequirements: string;
  preferredContact: string;
  preferredTime: string;
}

interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  preferredDate: string;
  preferredTime: string;
  consultationMode: string;
}

export const sendQuoteEmail = async (formData: QuoteFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-quote-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'contact@groupfima.com',
        subject: `Nouvelle demande de devis - ${formData.firstName} ${formData.lastName}`,
        formData
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Erreur envoi email devis:', error);
    return false;
  }
};

export const sendAppointmentEmail = async (formData: AppointmentFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-appointment-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'contact@groupfima.com',
        subject: `Nouvelle demande de rendez-vous - ${formData.firstName} ${formData.lastName}`,
        formData
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Erreur envoi email rendez-vous:', error);
    return false;
  }
};