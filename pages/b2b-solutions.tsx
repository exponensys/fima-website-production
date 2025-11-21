import { useRouter } from 'next/router';
import { useState } from 'react';
import { B2BLandingPage } from '../src/components/B2BLandingPage';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { QuoteRequestModal } from '../src/components/QuoteRequestModal';
import { ExpertConsultationModal } from '../src/components/ExpertConsultationModal';

export default function B2BSolutionsPageRoute() {
  const router = useRouter();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleQuoteRequest = () => {
    setIsQuoteModalOpen(true);
  };

  const handleAppointmentRequest = () => {
    setIsAppointmentModalOpen(true);
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <B2BLandingPage
        onNavigate={handleNavigate}
        onBack={handleBack}
        onQuoteRequest={handleQuoteRequest}
        onAppointmentRequest={handleAppointmentRequest}
      />
      <Footer onNavigate={handleNavigate} />
      
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      
      <ExpertConsultationModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        consultationType="appointment"
      />
    </>
  );
}