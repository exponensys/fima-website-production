import { useRouter } from 'next/router';
import { FimaCouchagePage } from '../src/components/business-units/FimaCouchagePage';

export default function FimaCouchage() {
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
    // You can implement quote request logic here
    console.log('Quote request for FIMA Couchage');
  };

  return (
    <FimaCouchagePage
      onNavigate={handleNavigate}
      onBack={handleBack}
      onQuoteRequest={handleQuoteRequest}
    />
  );
}