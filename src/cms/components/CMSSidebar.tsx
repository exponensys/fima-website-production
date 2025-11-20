import { 
  LayoutDashboard, 
  Package, 
  Image, 
  FileText, 
  MessageSquare, 
  Users, 
  Video, 
  ShoppingCart, 
  UserCircle, 
  Settings,
  ChevronRight,
  Briefcase,
  FolderKanban,
  BookOpen,
  MousePointerClick,
  Tag,
  Images
} from 'lucide-react';
import { CMSPage } from '../CMSApp';

interface CMSSidebarProps {
  currentPage: CMSPage;
  onNavigate: (page: CMSPage) => void;
}

interface MenuItem {
  id: CMSPage;
  label: string;
  icon: any;
  section?: string;
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { id: 'media-library', label: 'Bibliothèque d\'Images', icon: Images, section: 'Médias' },
  { id: 'hero-slides', label: 'Hero', icon: Image, section: 'HomePage' },
  { id: 'business-units', label: 'Card Métiers', icon: Briefcase, section: 'HomePage' },
  { id: 'call-to-action', label: 'Call to Action', icon: MousePointerClick, section: 'HomePage' },
  { id: 'testimonials', label: 'Témoignages (Bedtime)', icon: MessageSquare, section: 'HomePage' },
  { id: 'videos', label: 'Video Stories', icon: Video, section: 'HomePage' },
  { id: 'categories', label: 'Catégories', icon: Tag, section: 'Catalogue' },
  { id: 'products', label: 'Card Produits', icon: Package, section: 'Catalogue' },
  { id: 'articles', label: 'Actualités', icon: FileText, section: 'Contenu Dynamique' },
  { id: 'article-categories', label: 'Catégories d\'Articles', icon: BookOpen, section: 'Contenu Dynamique' },
  { id: 'projects', label: 'Projets', icon: FolderKanban, section: 'Contenu Dynamique' },
  { id: 'team', label: 'Équipe', icon: Users, section: 'Contenu Dynamique' },
  { id: 'orders', label: 'Commandes', icon: ShoppingCart, section: 'E-commerce' },
  { id: 'clients', label: 'Clients actifs', icon: UserCircle, section: 'E-commerce' },
  { id: 'settings', label: 'Paramètres', icon: Settings, section: 'Utilisateurs' },
];

export function CMSSidebar({ currentPage, onNavigate }: CMSSidebarProps) {
  let currentSection = '';

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed h-full overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: '#B5C233' }}>
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">FIMA</h1>
            <p className="text-sm text-gray-500">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          // Afficher le titre de section si nouvelle section
          const showSectionTitle = item.section && item.section !== currentSection;
          if (item.section) {
            currentSection = item.section;
          }

          return (
            <div key={item.id}>
              {showSectionTitle && (
                <div className="px-3 py-2 mt-4 mb-1">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    {item.section}
                  </h3>
                </div>
              )}
              
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 transition-colors ${
                  currentPage === item.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {currentPage === item.id && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}