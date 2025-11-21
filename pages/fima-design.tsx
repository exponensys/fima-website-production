import { useRouter } from 'next/router';
import { FimaDesignPage } from '../src/components/business-units/FimaDesignPage';
import { Header } from '../src/components/Header';

export default function FimaDesign() {
  const router = useRouter();

  const handleNavigate = (page: string, category?: string) => {
    if (page === 'all-products' && category) {
      router.push(`/products?category=${category}`);
    } else {
      router.push(`/${page}`);
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleQuoteRequest = () => {
    console.log('Quote request for FIMA Design');
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