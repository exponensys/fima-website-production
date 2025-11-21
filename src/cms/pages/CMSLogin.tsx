import { useState } from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

interface CMSLoginProps {
  onLogin: () => void;
  onBackToSite: () => void;
}

export function CMSLogin({ onLogin, onBackToSite }: CMSLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Vérifier les identifiants admin
      if (email === 'admin@fima.com' && password === 'admin123') {
        // Utiliser la fonction login du UserContext avec un email contenant "admin"
        await login('admin@fima.com', password);
        onLogin();
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4" style={{ backgroundColor: '#B5C233' }}>
            <span className="text-white font-bold text-2xl">F</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FIMA Admin</h1>
          <p className="text-gray-600">Connectez-vous à votre espace d'administration</p>
        </div>

        {/* Login Form */}
        <div className="bg-white border border-gray-200 p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3">
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                placeholder="admin@fima.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2"
              style={{ backgroundColor: '#B5C233' }}
            >
              <Lock className="w-5 h-5" />
              <span>{loading ? 'Connexion...' : 'Se connecter'}</span>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={onBackToSite}
              className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Retour au site</span>
            </button>
          </div>
        </div>

        {/* Demo credentials */}
        {/*<div className="mt-6 bg-blue-50 border border-blue-200 p-4 text-center">
          <p className="text-sm text-blue-900 mb-2">
            <strong>Identifiants de démonstration :</strong>
          </p>
          <p className="text-sm text-blue-800">
            Email: <span className="font-mono">admin@fima.com</span><br />
            Mot de passe: <span className="font-mono">admin123</span>
          </p>
        </div>*/}
      </div>
    </div>
  );
}