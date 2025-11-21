import { useRouter } from 'next/router';
import { FimaDesignPage } from '../src/components/business-units/FimaDesignPage';
import { Header } from '../src/components/Header';

export default function FimaDesignPageRoute() {
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
      <FimaDesignPage
        onNavigate={handleNavigate}
        onBack={handleBack}
        onQuoteRequest={handleQuoteRequest}
      />
    </>
  );
}