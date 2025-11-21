import { useRouter } from 'next/router';
import { AllProductsPage } from '../src/components/AllProductsPage';

export default function ProductsPage() {
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <AllProductsPage
      onProductClick={handleProductClick}
      onBack={handleBack}
    />
  );
}