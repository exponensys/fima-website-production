import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductDetailPage } from '../../src/components/ProductDetailPage';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { useProducts } from '../../src/hooks/useProducts';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const { products } = useProducts();

  useEffect(() => {
    if (id && products && products.length > 0) {
      const foundProduct = products.find(p => p.id === id);
      setProduct(foundProduct || null);
      setLoading(false);
    }
  }, [id, products]);

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleProductClick = (product: any) => {
    router.push(`/product/${product.id}`);
  };

  if (loading) {
    return (
      <>
        <Header onNavigate={handleNavigate} />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
                 style={{ borderColor: '#B5C233', borderTopColor: 'transparent' }}>
            </div>
            <p className="text-gray-600">Chargement du produit...</p>
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header onNavigate={handleNavigate} />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
              Produit introuvable
            </h2>
            <button onClick={handleBack} className="px-6 py-3 rounded-lg transition-colors"
                    style={{ backgroundColor: '#B5C233', color: '#333333' }}>
              Retour à l'accueil
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <ProductDetailPage
        product={product}
        onBack={handleBack}
        onProductClick={handleProductClick}
        onViewAllProducts={() => router.push('/products')}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}