import { ReactNode } from 'react';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

interface StrapiDataWrapperProps {
  loading: boolean;
  error: string | null;
  data: any;
  children: ReactNode;
  emptyMessage?: string;
  onRetry?: () => void;
  minHeight?: string;
}

export function StrapiDataWrapper({
  loading,
  error,
  data,
  children,
  emptyMessage = "Aucune donnée disponible",
  onRetry,
  minHeight = "200px"
}: StrapiDataWrapperProps) {
  
  // État de chargement
  if (loading) {
    return (
      <div 
        className="flex items-center justify-center"
        style={{ minHeight }}
      >
        <div className="text-center">
          {/* Spinner sophistiqué avec cercles concentriques */}
          <div className="relative w-16 h-16 mx-auto mb-4">
            {/* Cercle extérieur avec gradient */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background: `conic-gradient(from 0deg, transparent, #B5C233, transparent)`,
                animation: 'spin 1.5s linear infinite'
              }}
            />
            
            {/* Cercle intermédiaire */}
            <div 
              className="absolute inset-2 rounded-full border-3 border-transparent"
              style={{
                background: `conic-gradient(from 180deg, transparent, #0EA5E9, transparent)`,
                animation: 'spin 2s linear infinite reverse'
              }}
            />
            
            {/* Cercle intérieur avec pulse */}
            <div 
              className="absolute inset-4 rounded-full"
              style={{
                background: `radial-gradient(circle, #E30613, transparent)`,
                animation: 'pulse 1s ease-in-out infinite alternate'
              }}
            />
            
            {/* Points orbitaux */}
            <div className="absolute inset-0">
              <div 
                className="absolute w-2 h-2 rounded-full top-0 left-1/2 transform -translate-x-1/2"
                style={{
                  backgroundColor: '#B5C233',
                  transformOrigin: '0 32px',
                  animation: 'spin 1.5s linear infinite'
                }}
              />
              <div 
                className="absolute w-1.5 h-1.5 rounded-full top-1 right-1"
                style={{
                  backgroundColor: '#0EA5E9',
                  transformOrigin: '-24px 24px',
                  animation: 'spin 2.5s linear infinite reverse'
                }}
              />
            </div>
            
            {/* Effet de lueur */}
            <div 
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background: `radial-gradient(circle, #B5C233, transparent 70%)`,
                animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
              }}
            />
          </div>
          
          <p style={{ color: '#6E6E6E', marginTop: '8px' }}>
            Chargement en cours...
          </p>
          
          {/* Barre de progression animée */}
          <div className="w-24 h-1 bg-gray-200 rounded-full mx-auto mt-2 overflow-hidden">
            <div 
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, #B5C233, #E30613, #0EA5E9, #B5C233)`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>
        
        {/* Styles CSS dans un élément style standard */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `
        }} />
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div 
        className="flex items-center justify-center"
        style={{ minHeight }}
      >
        <div className="text-center max-w-md">
          <AlertCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#E30613' }} />
          <h3 className="mb-2" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Erreur de chargement
          </h3>
          <p className="mb-4" style={{ color: '#6E6E6E' }}>
            {error}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="fima-btn-secondary flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" />
              Réessayer
            </button>
          )}
        </div>
      </div>
    );
  }

  // État vide
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <div 
        className="flex items-center justify-center"
        style={{ minHeight }}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📦</span>
          </div>
          <p style={{ color: '#6E6E6E' }}>
            {emptyMessage}
          </p>
        </div>
      </div>
    );
  }

  // Rendu des données
  return <>{children}</>;
}

// Composant de squelette pour les listes de produits
export function ProductsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-12"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Composant de squelette pour la page produit
export function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images skeleton */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl bg-gray-200 animate-pulse"></div>
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-20 rounded-lg bg-gray-200 animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Info skeleton */}
        <div className="space-y-6">
          <div>
            <div className="h-8 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>

          <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
          
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>

          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

// Hook pour gérer les erreurs Strapi
export function useStrapiErrorHandler() {
  const handleError = (error: any): string => {
    if (error?.response?.data?.error) {
      const strapiError = error.response.data.error;
      
      switch (strapiError.status) {
        case 404:
          return 'Contenu non trouvé';
        case 403:
          return 'Accès non autorisé';
        case 500:
          return 'Erreur serveur. Veuillez réessayer plus tard.';
        default:
          return strapiError.message || 'Une erreur est survenue';
      }
    }
    
    if (error?.message) {
      return error.message;
    }
    
    return 'Une erreur inattendue est survenue';
  };

  return { handleError };
}