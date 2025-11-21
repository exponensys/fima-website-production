import { useRouter } from 'next/router';
import { AllProductsPage } from '../src/components/AllProductsPage';
import { Header } from '../src/components/Header';

export default function ProductsPage() {
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <AllProductsPage
        onProductClick={handleProductClick}
        onBack={handleBack}
      />
    </>
  );
}