import { ReactNode } from 'react';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

interface DataWrapperProps {
  loading: boolean;
  error: string | null;
  data: any;
  children: ReactNode;
  emptyMessage?: string;
  onRetry?: () => void;
  minHeight?: string;
}

/**
 * Wrapper universel pour gérer les états de chargement, erreur et vide
 * Compatible avec Supabase, Strapi et autres sources de données
 */
export function DataWrapper({
  loading,
  error,
  data,
  children,
  emptyMessage = "Aucune donnée disponible",
  onRetry,
  minHeight = "200px"
}: DataWrapperProps) {
  
  // État de chargement
  if (loading) {
    return (
      <div 
        className="flex items-center justify-center"
        style={{ minHeight }}
      >
        <div className="text-center">
          {/* Spinner FIMA avec les 3 couleurs */}
          <div className="relative w-16 h-16 mx-auto mb-4">
            {/* Cercle extérieur vert */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background: `conic-gradient(from 0deg, transparent, #B5C233, transparent)`,
                animation: 'spin 1.5s linear infinite'
              }}
            />
            
            {/* Cercle intermédiaire bleu */}
            <div 
              className="absolute inset-2 rounded-full border-3 border-transparent"
              style={{
                background: `conic-gradient(from 180deg, transparent, #0EA5E9, transparent)`,
                animation: 'spin 2s linear infinite reverse'
              }}
            />
            
            {/* Cercle intérieur rouge avec pulse */}
            <div 
              className="absolute inset-4 rounded-full"
              style={{
                background: `radial-gradient(circle, #E30613, transparent)`,
                animation: 'pulse 1s ease-in-out infinite alternate'
              }}
            />
            
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
        
        {/* Styles CSS */}
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
