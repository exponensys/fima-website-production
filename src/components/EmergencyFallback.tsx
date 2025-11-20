/**
 * Composant de secours d'urgence
 * S'affiche quand tout le reste échoue
 */

export function EmergencyFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full bg-white p-8 shadow-lg text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-4xl">🛏️</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Bienvenue chez FIMA
        </h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Spécialiste de la literie, matelas et ameublement depuis 1985
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-left">
          <p className="text-sm text-blue-900">
            <strong>ℹ️ Information:</strong> L'application est en cours de chargement.
            Si cette page persiste, veuillez actualiser votre navigateur.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            style={{ backgroundColor: '#B5C233' }}
          >
            🔄 Actualiser la page
          </button>
          
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="px-6 py-3 bg-gray-600 text-white font-semibold hover:bg-gray-700 transition-colors"
          >
            🗑️ Réinitialiser et actualiser
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            FIMA - Literie, Matelas & Ameublement • Depuis 1985
          </p>
        </div>
      </div>
    </div>
  );
}