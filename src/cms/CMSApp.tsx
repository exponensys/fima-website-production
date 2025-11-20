import { useState, useEffect } from 'react';
import { CMSLayout } from './layouts/CMSLayout';
import { CMSDashboard } from './pages/CMSDashboard';
import { CMSProducts } from './pages/CMSProducts';
import { CMSHeroSlides } from './pages/CMSHeroSlides';
import { CMSArticles } from './pages/CMSArticles';
import { CMSArticleCategories } from './pages/CMSArticleCategories';
import { CMSTestimonials } from './pages/CMSTestimonials';
import { CMSTeam } from './pages/CMSTeam';
import { CMSVideos } from './pages/CMSVideos';
import { CMSOrders } from './pages/CMSOrders';
import { CMSClients } from './pages/CMSClients';
import { CMSSettings } from './pages/CMSSettings';
import { CMSLogin } from './pages/CMSLogin';
import { CMSBusinessUnits } from './pages/CMSBusinessUnits';
import { CMSCategories } from './pages/CMSCategories';
import { CMSProjects } from './pages/CMSProjects';
import { CMSCallToAction } from './pages/CMSCallToAction';
import { CMSMediaLibrary } from './pages/CMSMediaLibrary';
import { useUser } from '../contexts/UserContext';

export type CMSPage = 
  | 'dashboard'
  | 'products'
  | 'hero-slides'
  | 'business-units'
  | 'categories'
  | 'call-to-action'
  | 'articles'
  | 'article-categories'
  | 'projects'
  | 'testimonials'
  | 'team'
  | 'videos'
  | 'orders'
  | 'clients'
  | 'settings'
  | 'media-library';

interface CMSAppProps {
  onBackToSite: () => void;
}

export function CMSApp({ onBackToSite }: CMSAppProps) {
  const [currentPage, setCurrentPage] = useState<CMSPage>('dashboard');
  const { user, isLoading } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté et a les droits admin
    if (user && user.role === 'admin') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  // Afficher la page de login si non authentifié
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
               style={{ 
                 borderColor: '#B5C233', 
                 borderTopColor: 'transparent' 
               }}>
          </div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <CMSLogin onLogin={() => setIsAuthenticated(true)} onBackToSite={onBackToSite} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <CMSDashboard onNavigate={setCurrentPage} />;
      case 'products':
        return <CMSProducts />;
      case 'hero-slides':
        return <CMSHeroSlides />;
      case 'business-units':
        return <CMSBusinessUnits />;
      case 'categories':
        return <CMSCategories />;
      case 'call-to-action':
        return <CMSCallToAction />;
      case 'articles':
        return <CMSArticles />;
      case 'article-categories':
        return <CMSArticleCategories />;
      case 'projects':
        return <CMSProjects />;
      case 'testimonials':
        return <CMSTestimonials />;
      case 'team':
        return <CMSTeam />;
      case 'videos':
        return <CMSVideos />;
      case 'orders':
        return <CMSOrders />;
      case 'clients':
        return <CMSClients />;
      case 'settings':
        return <CMSSettings />;
      case 'media-library':
        return <CMSMediaLibrary />;
      default:
        return <CMSDashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CMSLayout 
      currentPage={currentPage} 
      onNavigate={setCurrentPage}
      onBackToSite={onBackToSite}
    >
      {renderPage()}
    </CMSLayout>
  );
}