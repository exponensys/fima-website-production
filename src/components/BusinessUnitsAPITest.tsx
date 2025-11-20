import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

/**
 * Composant de test visuel pour l'API Business Units
 * À utiliser temporairement pour diagnostiquer l'erreur 404
 */
export function BusinessUnitsAPITest() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [data, setData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const testAPI = async () => {
    setStatus('loading');
    setStatusCode(null);
    setData(null);
    setErrorMessage('');

    try {
      console.log('🧪 Test de l\'API Business Units...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setStatusCode(response.status);

      if (!response.ok) {
        if (response.status === 404) {
          setStatus('error');
          setErrorMessage('Route non trouvée (404) - Le serveur Supabase doit être redéployé');
        } else {
          setStatus('error');
          setErrorMessage(`Erreur HTTP ${response.status}`);
        }
        return;
      }

      const result = await response.json();
      setData(result);

      if (result.success) {
        setStatus('success');
        console.log('✅ API Business Units fonctionne!');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Erreur inconnue');
      }
    } catch (error) {
      setStatus('error');
      setStatusCode(null);
      setErrorMessage(error instanceof Error ? error.message : 'Erreur réseau');
      console.error('❌ Erreur lors du test:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border-2 border-gray-300 p-4 max-w-md shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Test API Business Units</h3>
        <button
          onClick={testAPI}
          disabled={status === 'loading'}
          className="px-3 py-1 bg-blue-500 text-white text-sm hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${status === 'loading' ? 'animate-spin' : ''}`} />
          Tester
        </button>
      </div>

      {status === 'idle' && (
        <p className="text-sm text-gray-600">
          Cliquez sur "Tester" pour vérifier si l'API répond
        </p>
      )}

      {status === 'loading' && (
        <div className="flex items-center gap-2 text-blue-600">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span className="text-sm">Test en cours...</span>
        </div>
      )}

      {status === 'success' && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">API OK!</span>
          </div>
          <div className="text-xs bg-green-50 p-2 border border-green-200">
            <div className="font-medium mb-1">Status: {statusCode}</div>
            {data && (
              <div>
                <div className="mb-1">Business Units: {data.data?.length || 0}</div>
                {data.data?.map((bu: any) => (
                  <div key={bu.id} className="ml-2 text-gray-700">
                    • {bu.name || bu.name_fr}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-xs text-green-700">
            ✅ L'API fonctionne! Vous pouvez maintenant:
            <ul className="ml-4 mt-1">
              <li>• Initialiser les données</li>
              <li>• Utiliser le CMS</li>
            </ul>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-red-600">
            <XCircle className="w-5 h-5" />
            <span className="font-medium">Erreur API</span>
          </div>
          <div className="text-xs bg-red-50 p-2 border border-red-200">
            {statusCode && <div className="font-medium mb-1">Status: {statusCode}</div>}
            <div className="text-red-700">{errorMessage}</div>
          </div>
          
          {statusCode === 404 && (
            <div className="text-xs bg-yellow-50 p-2 border border-yellow-200">
              <div className="flex items-center gap-1 text-yellow-800 mb-2">
                <AlertCircle className="w-4 h-4" />
                <span className="font-medium">Solution:</span>
              </div>
              <div className="text-yellow-900">
                Redéployez le serveur Supabase:
                <div className="mt-1 bg-yellow-100 p-1 font-mono text-xs">
                  supabase functions deploy server
                </div>
              </div>
            </div>
          )}

          <div className="text-xs text-gray-700 bg-blue-50 p-2 border border-blue-200">
            <div className="font-medium mb-1">ℹ️ Important:</div>
            <div>
              Le site fonctionne quand même grâce au système de fallback.
              Les 3 métiers s'affichent normalement.
            </div>
          </div>
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
        <div>Endpoint: .../business-units</div>
        <div>Project: {projectId}</div>
      </div>
    </div>
  );
}