import { useRouter } from 'next/router';
import { UniversGlassPage } from '../src/components/business-units/UniversGlassPage';

export default function UniversGlass() {
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
    console.log('Quote request for Univers Glass');
  };

  return (
    <UniversGlassPage
      onNavigate={handleNavigate}
      onBack={handleBack}
      onQuoteRequest={handleQuoteRequest}
    />
  );
}