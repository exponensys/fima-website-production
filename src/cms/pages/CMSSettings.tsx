import { Settings as SettingsIcon, Save } from 'lucide-react';

export function CMSSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
        <p className="text-gray-600">Configuration du site et du CMS</p>
      </div>

      <div className="bg-white border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Informations générales</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du site
            </label>
            <input
              type="text"
              defaultValue="FIMA"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email de contact
            </label>
            <input
              type="email"
              defaultValue="contact@fima.com"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              defaultValue="+225 XX XX XX XX"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse
            </label>
            <textarea
              rows={3}
              defaultValue="Abidjan, Côte d'Ivoire"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
            />
          </div>

          <div className="pt-4">
            <button
              className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90"
              style={{ backgroundColor: '#B5C233' }}
            >
              <Save className="w-5 h-5" />
              <span>Enregistrer les modifications</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
        <SettingsIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p>Autres paramètres en développement</p>
      </div>
    </div>
  );
}
