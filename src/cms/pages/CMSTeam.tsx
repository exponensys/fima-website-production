import { Plus } from 'lucide-react';

export function CMSTeam() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Équipe</h1>
          <p className="text-gray-600">Gérer les membres de l'équipe</p>
        </div>
        <button
          className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90"
          style={{ backgroundColor: '#B5C233' }}
        >
          <Plus className="w-5 h-5" />
          <span>Nouveau membre</span>
        </button>
      </div>
      
      <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
        <p>Fonctionnalité en développement</p>
      </div>
    </div>
  );
}
