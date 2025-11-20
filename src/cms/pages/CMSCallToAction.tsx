import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Eye, MousePointer } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface CallToAction {
  id: string;
  title: string;
  description: string;
  button_text: string;
  button_link: string;
  button_style: 'primary' | 'secondary' | 'outline';
  background_color: string;
  text_color: string;
  position: 'hero' | 'footer' | 'sidebar' | 'inline';
  is_active: boolean;
  order_index: number;
}

export function CMSCallToAction() {
  const [ctas, setCtas] = useState<CallToAction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<CallToAction>>({
    title: '',
    description: '',
    button_text: '',
    button_link: '',
    button_style: 'primary',
    background_color: '#B5C233',
    text_color: '#FFFFFF',
    position: 'inline',
    is_active: true,
    order_index: 0,
  });

  useEffect(() => {
    loadCTAs();
  }, []);

  const loadCTAs = async () => {
    try {
      setIsLoading(true);
      
      // Charger depuis Supabase via API
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions/all`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success && Array.isArray(data.data)) {
        setCtas(data.data);
        console.log(`✅ ${data.data.length} CTAs chargés depuis Supabase`);
      } else {
        throw new Error('Format de réponse inattendu');
      }
    } catch (error) {
      console.error('❌ Erreur lors du chargement des CTA:', error);
      toast.error('Erreur lors du chargement des CTA');
      // En cas d'erreur, utiliser des données par défaut
      setCtas([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Mise à jour
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions/${editingId}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${publicAnonKey}`,
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.success) {
          toast.success('CTA mis à jour avec succès');
          setEditingId(null);
          loadCTAs(); // Recharger la liste
        } else {
          throw new Error(data.error || 'Erreur lors de la mise à jour');
        }
      } else {
        // Création
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${publicAnonKey}`,
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.success) {
          toast.success('CTA créé avec succès');
          setIsCreating(false);
          loadCTAs(); // Recharger la liste
        } else {
          throw new Error(data.error || 'Erreur lors de la création');
        }
      }
      
      resetForm();
    } catch (error) {
      console.error('❌ Erreur lors de la sauvegarde:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (cta: CallToAction) => {
    setEditingId(cta.id);
    setFormData(cta);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce CTA ?')) return;
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success) {
        toast.success('CTA supprimé avec succès');
        loadCTAs(); // Recharger la liste
      } else {
        throw new Error(data.error || 'Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la suppression:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors de la suppression');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      button_text: '',
      button_link: '',
      button_style: 'primary',
      background_color: '#B5C233',
      text_color: '#FFFFFF',
      position: 'inline',
      is_active: true,
      order_index: 0,
    });
    setEditingId(null);
    setIsCreating(false);
  };

  const getPositionLabel = (position: string) => {
    switch (position) {
      case 'hero': return 'Hero (haut de page)';
      case 'footer': return 'Footer (bas de page)';
      case 'sidebar': return 'Sidebar (colonne latérale)';
      case 'inline': return 'Inline (dans le contenu)';
      default: return position;
    }
  };

  const getButtonStylePreview = (style: string, bgColor: string, textColor: string) => {
    switch (style) {
      case 'primary':
        return { backgroundColor: bgColor, color: textColor, border: 'none' };
      case 'secondary':
        return { backgroundColor: bgColor, color: textColor, border: 'none', opacity: 0.9 };
      case 'outline':
        return { backgroundColor: 'transparent', color: textColor, border: `2px solid ${textColor}` };
      default:
        return { backgroundColor: bgColor, color: textColor };
    }
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
          <h1 className="text-3xl text-gray-900 mb-2">Call to Action</h1>
          <p className="text-gray-600">Gérez les boutons d'appel à l'action sur le site</p>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center space-x-2 px-4 py-2 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#B5C233' }}
        >
          <Plus className="w-5 h-5" />
          <span>Nouveau CTA</span>
        </button>
      </div>

      {/* Formulaire de création/édition */}
      {(isCreating || editingId) && (
        <div className="mb-8 bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">
              {editingId ? 'Modifier le CTA' : 'Nouveau CTA'}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Demandez votre devis gratuit"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Texte d'accompagnement..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Texte du bouton *
                </label>
                <input
                  type="text"
                  required
                  value={formData.button_text}
                  onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Obtenir un devis"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lien du bouton *
                </label>
                <input
                  type="text"
                  required
                  value={formData.button_link}
                  onChange={(e) => setFormData({ ...formData, button_link: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="/quote-request ou https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Style du bouton
                </label>
                <select
                  value={formData.button_style}
                  onChange={(e) => setFormData({ ...formData, button_style: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                >
                  <option value="primary">Primary (plein)</option>
                  <option value="secondary">Secondary (plein alternatif)</option>
                  <option value="outline">Outline (bordure)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                >
                  <option value="hero">Hero (haut de page)</option>
                  <option value="footer">Footer (bas de page)</option>
                  <option value="sidebar">Sidebar (colonne latérale)</option>
                  <option value="inline">Inline (dans le contenu)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Couleur de fond
                </label>
                <input
                  type="color"
                  value={formData.background_color}
                  onChange={(e) => setFormData({ ...formData, background_color: e.target.value })}
                  className="w-full h-10 px-1 py-1 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Couleur du texte
                </label>
                <input
                  type="color"
                  value={formData.text_color}
                  onChange={(e) => setFormData({ ...formData, text_color: e.target.value })}
                  className="w-full h-10 px-1 py-1 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordre d'affichage
                </label>
                <input
                  type="number"
                  value={formData.order_index}
                  onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">CTA actif</span>
                </label>
              </div>

              {/* Prévisualisation */}
              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <h3 className="text-lg text-gray-900 mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Prévisualisation
                </h3>
                
                <div 
                  className="p-8 text-center"
                  style={{ 
                    backgroundColor: formData.background_color,
                    color: formData.text_color 
                  }}
                >
                  {formData.title && (
                    <h3 className="text-2xl mb-2" style={{ color: formData.text_color }}>
                      {formData.title}
                    </h3>
                  )}
                  {formData.description && (
                    <p className="mb-4 opacity-90" style={{ color: formData.text_color }}>
                      {formData.description}
                    </p>
                  )}
                  {formData.button_text && (
                    <button
                      type="button"
                      className="px-6 py-3 font-medium transition-opacity hover:opacity-80"
                      style={getButtonStylePreview(
                        formData.button_style || 'primary',
                        formData.button_style === 'outline' ? formData.background_color : '#E30613',
                        formData.button_style === 'outline' ? formData.text_color : '#FFFFFF'
                      )}
                    >
                      {formData.button_text}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-2 text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#B5C233' }}
              >
                <Save className="w-4 h-4" />
                <span>Enregistrer</span>
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des CTAs */}
      <div className="bg-white border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  CTA
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Bouton
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Style
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
              {ctas
                .sort((a, b) => a.order_index - b.order_index)
                .map((cta) => (
                <tr key={cta.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm text-gray-900">{cta.title}</div>
                      {cta.description && (
                        <div className="text-xs text-gray-500">{cta.description}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <MousePointer className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-900">{cta.button_text}</div>
                        <div className="text-xs text-gray-500">{cta.button_link}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {getPositionLabel(cta.position)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="inline-flex px-2 py-1 text-xs"
                      style={getButtonStylePreview(cta.button_style, cta.background_color, cta.text_color)}
                    >
                      {cta.button_style}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs ${
                        cta.is_active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {cta.is_active ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                    <button
                      onClick={() => handleEdit(cta)}
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(cta.id)}
                      className="text-red-600 hover:text-red-800 inline-flex items-center ml-3"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}