import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, Palette } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface BusinessUnit {
  id: string;
  slug: string;
  name: string;
  name_fr: string;
  name_en: string;
  description: string;
  description_fr: string;
  description_en: string;
  icon: string;
  primary_color: string;
  order_index: number;
  is_active: boolean;
}

// Icônes disponibles pour les métiers
const AVAILABLE_ICONS = [
  { value: 'Bed', label: '🛏️ Lit (Bed)' },
  { value: 'Armchair', label: '🪑 Fauteuil (Armchair)' },
  { value: 'Building2', label: '🏢 Bâtiment (Building)' },
  { value: 'Sofa', label: '🛋️ Sofa' },
  { value: 'Lamp', label: '💡 Lampe' },
  { value: 'Home', label: '🏠 Maison' },
  { value: 'Wrench', label: '🔧 Outils' },
  { value: 'Package', label: '📦 Paquet' },
];

// Couleurs prédéfinies FIMA
const FIMA_COLORS = [
  { value: '#B5C233', label: 'Vert FIMA (Green)' },
  { value: '#6E6E6E', label: 'Gris FIMA (Gray)' },
  { value: '#E30613', label: 'Rouge FIMA (Red)' },
  { value: '#0EA5E9', label: 'Bleu Cyan (Univers Glass)' },
  { value: '#4A52A8', label: 'Bleu FIMA (Blue)' },
];

// Données de fallback - identiques au hook frontend
const DEFAULT_BUSINESS_UNITS: BusinessUnit[] = [
  {
    id: 'fima-couchage',
    slug: 'fima-couchage',
    name: 'FIMA Couchage',
    name_fr: 'FIMA Couchage',
    name_en: 'FIMA Bedding',
    description: 'Solutions complètes pour literie professionnelle et particuliers',
    description_fr: 'Solutions complètes pour literie professionnelle et particuliers',
    description_en: 'Complete solutions for professional and residential bedding',
    icon: 'Bed',
    primary_color: '#B5C233',
    order_index: 1,
    is_active: true
  },
  {
    id: 'fima-design',
    slug: 'fima-design',
    name: 'FIMA Design',
    name_fr: 'FIMA Design',
    name_en: 'FIMA Design',
    description: 'Menuiserie et ameublement sur mesure',
    description_fr: 'Menuiserie et ameublement sur mesure',
    description_en: 'Custom carpentry and furniture',
    icon: 'Armchair',
    primary_color: '#6E6E6E',
    order_index: 2,
    is_active: true
  },
  {
    id: 'univers-glass',
    slug: 'univers-glass',
    name: 'UNIVERS GLASS',
    name_fr: 'UNIVERS GLASS',
    name_en: 'UNIVERS GLASS',
    description: 'Vitrerie et menuiserie aluminium',
    description_fr: 'Vitrerie et menuiserie aluminium',
    description_en: 'Glazing and aluminum carpentry',
    icon: 'Building2',
    primary_color: '#0EA5E9',
    order_index: 3,
    is_active: true
  }
];

export function CMSBusinessUnits() {
  const [businessUnits, setBusinessUnits] = useState<BusinessUnit[]>(DEFAULT_BUSINESS_UNITS);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isApiAvailable, setIsApiAvailable] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<BusinessUnit>>({
    slug: '',
    name: '',
    name_fr: '',
    name_en: '',
    description: '',
    description_fr: '',
    description_en: '',
    icon: 'Bed',
    primary_color: '#B5C233',
    order_index: 0,
    is_active: true,
  });

  useEffect(() => {
    loadBusinessUnits();
  }, []);

  const loadBusinessUnits = async () => {
    try {
      setIsLoading(true);
      
      // ⚠️ API TEMPORAIREMENT DÉSACTIVÉE - Mode local uniquement
      // Pour éviter l'erreur 404 jusqu'au redéploiement du serveur
      console.log('🏢 CMS Business Units: Mode local (API désactivée)');
      console.log('💡 Pour activer l\'API: redéployez avec "supabase functions deploy server"');
      
      // Utiliser directement les données de fallback
      setBusinessUnits(DEFAULT_BUSINESS_UNITS);
      setIsApiAvailable(false);
      setIsLoading(false);
      
      /* 
      ==========================================
      CODE API À DÉCOMMENTER APRÈS REDÉPLOIEMENT
      ==========================================
      
      console.log('🏢 Chargement des business units depuis Supabase...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          console.warn('⚠️ Route /business-units retourne 404 - Mode local activé');
          setBusinessUnits(DEFAULT_BUSINESS_UNITS);
          setIsApiAvailable(false);
          setIsLoading(false);
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        console.log('✅ Business units chargés:', result.data);
        setBusinessUnits(result.data);
        setIsApiAvailable(true);
      } else {
        console.warn('⚠️ Aucune business unit trouvée');
        setBusinessUnits(DEFAULT_BUSINESS_UNITS);
        setIsApiAvailable(false);
      }
      
      ==========================================
      FIN DU CODE À DÉCOMMENTER
      ==========================================
      */
      
    } catch (error) {
      console.error('❌ Erreur lors du chargement des métiers:', error);
      setBusinessUnits(DEFAULT_BUSINESS_UNITS);
      setIsApiAvailable(false);
    } finally {
      setIsLoading(false);
    }
  };

  const saveAllBusinessUnits = async (units: BusinessUnit[]) => {
    try {
      setIsSaving(true);
      console.log('💾 Sauvegarde des business units:', units);
      
      // Si l'API n'est pas disponible, sauvegarder uniquement en local
      if (!isApiAvailable) {
        console.warn('⚠️ API non disponible - Sauvegarde locale uniquement');
        toast.warning('Mode local: Modifications non synchronisées avec le serveur', {
          duration: 4000
        });
        return true;
      }
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(units),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        console.log('✅ Business units sauvegardés avec succès');
        return true;
      } else {
        throw new Error(result.error || 'Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la sauvegarde:', error);
      toast.warning('Sauvegarde locale uniquement (serveur non disponible)', {
        duration: 4000
      });
      // Ne pas bloquer - continuer en mode local
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let updatedUnits: BusinessUnit[];
      
      if (editingId) {
        // Mise à jour
        updatedUnits = businessUnits.map(bu => 
          bu.id === editingId ? { ...bu, ...formData } as BusinessUnit : bu
        );
        await saveAllBusinessUnits(updatedUnits);
        setBusinessUnits(updatedUnits);
        toast.success('Métier mis à jour avec succès');
        setEditingId(null);
      } else {
        // Création
        const newBusinessUnit: BusinessUnit = {
          id: formData.slug || `business-unit-${Date.now()}`,
          slug: formData.slug || `business-unit-${Date.now()}`,
          name: formData.name || formData.name_fr || '',
          name_fr: formData.name_fr || '',
          name_en: formData.name_en || '',
          description: formData.description || formData.description_fr || '',
          description_fr: formData.description_fr || '',
          description_en: formData.description_en || '',
          icon: formData.icon || 'Bed',
          primary_color: formData.primary_color || '#B5C233',
          order_index: formData.order_index || 0,
          is_active: formData.is_active !== false,
        };
        
        updatedUnits = [...businessUnits, newBusinessUnit];
        await saveAllBusinessUnits(updatedUnits);
        setBusinessUnits(updatedUnits);
        toast.success('Métier créé avec succès');
        setIsCreating(false);
      }
      
      resetForm();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      toast.error('Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (businessUnit: BusinessUnit) => {
    setEditingId(businessUnit.id);
    setFormData(businessUnit);
    setIsCreating(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce métier ?')) return;
    
    try {
      const updatedUnits = businessUnits.filter(bu => bu.id !== id);
      await saveAllBusinessUnits(updatedUnits);
      setBusinessUnits(updatedUnits);
      toast.success('Métier supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const resetForm = () => {
    setFormData({
      slug: '',
      name: '',
      name_fr: '',
      name_en: '',
      description: '',
      description_fr: '',
      description_en: '',
      icon: 'Bed',
      primary_color: '#B5C233',
      order_index: 0,
      is_active: true,
    });
    setEditingId(null);
    setIsCreating(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
               style={{ borderColor: '#B5C233', borderTopColor: 'transparent' }}>
          </div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Card Métiers</h1>
          <p className="text-gray-600">
            Gérez les 3 métiers du Groupe FIMA
            {isApiAvailable ? (
              <span className="text-green-600 ml-2">● Connecté à Supabase</span>
            ) : (
              <span className="text-orange-600 ml-2">● Mode local (redéployez le serveur)</span>
            )}
          </p>
        </div>
        <button
          onClick={() => {
            setIsCreating(true);
            setEditingId(null);
            resetForm();
          }}
          className="flex items-center space-x-2 px-4 py-2 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#B5C233' }}
          disabled={isSaving}
        >
          <Plus className="w-5 h-5" />
          <span>Nouveau métier</span>
        </button>
      </div>

      {/* Alerte de statut API */}
      {!isApiAvailable && (
        <div className="mb-6 bg-orange-50 border border-orange-200 p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-orange-800 mb-1">
                Mode local actif
              </h3>
              <p className="text-sm text-orange-700 mb-2">
                L'API Supabase n'est pas disponible (erreur 404). Vous travaillez en mode local avec des données de fallback.
              </p>
              <div className="text-xs text-orange-600 bg-orange-100 p-2 font-mono">
                💡 Pour activer la synchronisation: <strong>supabase functions deploy server</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formulaire de création/édition */}
      {(isCreating || editingId) && (
        <div className="mb-8 bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">
              {editingId ? 'Modifier le métier' : 'Nouveau métier'}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700"
              disabled={isSaving}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Identifiant et ordre */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (identifiant unique) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: fima-couchage"
                  disabled={!!editingId}
                />
                <p className="text-xs text-gray-500 mt-1">Ne peut pas être modifié après création</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordre d'affichage
                </label>
                <input
                  type="number"
                  value={formData.order_index}
                  onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            {/* Nom multilingue */}
            <div className="border-t pt-6">
              <h3 className="text-lg text-gray-900 mb-4">🌐 Contenu multilingue</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom (Français) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name_fr}
                    onChange={(e) => setFormData({ ...formData, name_fr: e.target.value, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    placeholder="Ex: FIMA Couchage"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom (English)
                  </label>
                  <input
                    type="text"
                    value={formData.name_en}
                    onChange={(e) => setFormData({ ...formData, name_en: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    placeholder="Ex: FIMA Bedding"
                  />
                </div>
              </div>
            </div>

            {/* Description multilingue */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Français) *
                </label>
                <textarea
                  required
                  value={formData.description_fr}
                  onChange={(e) => setFormData({ ...formData, description_fr: e.target.value, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Décrivez le métier en français..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (English)
                </label>
                <textarea
                  value={formData.description_en}
                  onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Describe the business unit in English..."
                />
              </div>
            </div>

            {/* Icône et couleur */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icône
                </label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                >
                  {AVAILABLE_ICONS.map(icon => (
                    <option key={icon.value} value={icon.value}>
                      {icon.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Couleur principale
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.primary_color}
                    onChange={(e) => setFormData({ ...formData, primary_color: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  >
                    {FIMA_COLORS.map(color => (
                      <option key={color.value} value={color.value}>
                        {color.label}
                      </option>
                    ))}
                  </select>
                  <div
                    className="w-12 h-10 border border-gray-300"
                    style={{ backgroundColor: formData.primary_color }}
                  />
                </div>
              </div>
            </div>

            {/* Statut actif */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">Métier actif (visible sur le site)</span>
              </label>
            </div>

            <div className="flex items-center space-x-4 pt-4 border-t">
              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-2 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                style={{ backgroundColor: '#B5C233' }}
                disabled={isSaving}
              >
                <Save className="w-4 h-4" />
                <span>{isSaving ? 'Sauvegarde...' : 'Enregistrer'}</span>
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
                disabled={isSaving}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des métiers */}
      <div className="bg-white border border-gray-200">
        {businessUnits.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>Aucun métier configuré.</p>
            <p className="text-sm mt-2">Cliquez sur "Nouveau métier" pour commencer.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                    Ordre
                  </th>
                  <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                    Métier
                  </th>
                  <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                    Description (FR)
                  </th>
                  <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                    Icône
                  </th>
                  <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                    Couleur
                  </th>
                  <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-right text-xs uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {businessUnits
                  .sort((a, b) => a.order_index - b.order_index)
                  .map((businessUnit) => (
                  <tr key={businessUnit.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {businessUnit.order_index}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm text-gray-900">{businessUnit.name_fr || businessUnit.name}</div>
                        <div className="text-xs text-gray-500">{businessUnit.slug}</div>
                        {businessUnit.name_en && (
                          <div className="text-xs text-gray-400 italic">EN: {businessUnit.name_en}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                      <div className="truncate" title={businessUnit.description_fr}>
                        {businessUnit.description_fr || businessUnit.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {businessUnit.icon}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-6 h-6 border border-gray-300"
                          style={{ backgroundColor: businessUnit.primary_color }}
                        />
                        <span className="text-xs text-gray-600">{businessUnit.primary_color}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs ${
                          businessUnit.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {businessUnit.is_active ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                      <button
                        onClick={() => handleEdit(businessUnit)}
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                        disabled={isSaving}
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(businessUnit.id)}
                        className="text-red-600 hover:text-red-800 inline-flex items-center ml-3"
                        disabled={isSaving}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}