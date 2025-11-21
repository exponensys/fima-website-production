import { useRouter } from 'next/router';
import { OurHistoryPage } from '../src/components/OurHistoryPage';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function OurHistoryPageRoute() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleExpertClick = (type: 'expert' | 'appointment') => {
    // Handle expert consultation
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <OurHistoryPage
        onNavigate={handleNavigate}
        onBack={handleBack}
        onExpertClick={handleExpertClick}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}