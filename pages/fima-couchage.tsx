import { useRouter } from 'next/router';
import { FimaCouchagePage } from '../src/components/business-units/FimaCouchagePage';
import { Header } from '../src/components/Header';

export default function FimaCouchagePageRoute() {
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
      <FimaCouchagePage
        onNavigate={handleNavigate}
        onBack={handleBack}
        onQuoteRequest={handleQuoteRequest}
      />
    </>
  );
}