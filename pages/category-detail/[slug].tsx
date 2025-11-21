import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CategoryDetailPage } from '../../src/components/CategoryDetailPage';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';

export default function CategoryDetailSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [categorySlug, setCategorySlug] = useState<string>('');

  useEffect(() => {
    console.log('🔍 Router state:', { isReady: router.isReady, slug, query: router.query });
    if (router.isReady && slug) {
      console.log('✅ Setting categorySlug:', slug);
      setCategorySlug(slug as string);
    }
  }, [router.isReady, slug]);

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleProductClick = (product: any) => {
    router.push(`/product/${product.id}`);
  };

  // Attendre que le slug soit chargé
  if (!categorySlug) {
    return (
      <>
        <Header onNavigate={handleNavigate} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
                 style={{ borderColor: '#B5C233', borderTopColor: 'transparent' }}>
            </div>
            <p className="text-gray-600">Chargement de la catégorie...</p>
          </div>
        </div>
        <Footer onNavigate={handleNavigate} />
      </>
    );
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <CategoryDetailPage
        category={categorySlug}
        onNavigate={handleNavigate}
        onBack={handleBack}
        onProductClick={handleProductClick}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}