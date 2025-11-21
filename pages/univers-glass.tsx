import { useRouter } from 'next/router';
import { UniversGlassPage } from '../src/components/business-units/UniversGlassPage';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function UniversGlassPageRoute() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleQuoteRequest = () => {
    // Handle quote request
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <UniversGlassPage
        onNavigate={handleNavigate}
        onBack={handleBack}
        onQuoteRequest={handleQuoteRequest}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}