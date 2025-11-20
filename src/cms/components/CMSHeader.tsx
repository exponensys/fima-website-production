import { Bell, Search, ExternalLink } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

interface CMSHeaderProps {
  onBackToSite: () => void;
}

export function CMSHeader({ onBackToSite }: CMSHeaderProps) {
  const { user } = useUser();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#B5C233] focus:border-transparent"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 ml-6">
          {/* Retour au site */}
          <button
            onClick={onBackToSite}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Voir le site</span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 flex items-center justify-center text-white" style={{ backgroundColor: '#B5C233' }}>
              <span className="text-sm font-semibold">
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Administrateur FIMA</p>
              <p className="text-xs text-gray-500">{user?.email || 'admin@fima.com'}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
