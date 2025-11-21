import { useRouter } from 'next/router';
import { CategoryDetailPage } from '../src/components/CategoryDetailPage';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function CategoryDetailPageRoute() {
  const router = useRouter();
  const { category, slug } = router.query;

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleProductClick = (product: any) => {
    router.push(`/product/${product.id}`);
  };

  const categoryParam = (slug || category) as string;

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <CategoryDetailPage
        category={categoryParam}
        onNavigate={handleNavigate}
        onBack={handleBack}
        onProductClick={handleProductClick}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}