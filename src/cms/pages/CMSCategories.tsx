import { useState } from 'react';
import { Plus, Edit, Trash2, X, Save, RefreshCw, Upload, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useCMSCategories, CMSCategory } from '../../hooks/useCMSCategories';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function CMSCategories() {
  const { categories, loading, refetch } = useCMSCategories();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [formData, setFormData] = useState<Partial<CMSCategory>>({
    name: '',
    slug: '',
    description: '',
    parent_id: null,
    color: '#B5C233',
    icon_emoji: '📦',
    order_index: 0,
    is_active: true,
    business_unit: 'all',
    images: [],
    thumbnail: '',
  });

  // Fonction pour initialiser des catégories par défaut
  const initializeDefaultCategories = async () => {
    setIsInitializing(true);
    try {
      const defaultCategories: Partial<CMSCategory>[] = [
        // FIMA Couchage
        { name: 'Matelas', slug: 'matelas', business_unit: 'couchage', icon_emoji: '🛏️', color: '#B5C233', order_index: 1, is_active: true },
        { name: 'Sommiers', slug: 'sommiers', business_unit: 'couchage', icon_emoji: '📐', color: '#B5C233', order_index: 2, is_active: true },
        { name: 'Oreillers', slug: 'oreillers', business_unit: 'couchage', icon_emoji: '🎯', color: '#B5C233', order_index: 3, is_active: true },
        { name: 'Linge de lit', slug: 'linge-de-lit', business_unit: 'couchage', icon_emoji: '🧺', color: '#B5C233', order_index: 4, is_active: true },
        
        // FIMA Design
        { name: 'Bureaux', slug: 'bureaux', business_unit: 'design', icon_emoji: '🪑', color: '#6E6E6E', order_index: 5, is_active: true },
        { name: 'Chaises', slug: 'chaises', business_unit: 'design', icon_emoji: '💺', color: '#6E6E6E', order_index: 6, is_active: true },
        { name: 'Tables', slug: 'tables', business_unit: 'design', icon_emoji: '🪵', color: '#6E6E6E', order_index: 7, is_active: true },
        { name: 'Rangements', slug: 'rangements', business_unit: 'design', icon_emoji: '🗄️', color: '#6E6E6E', order_index: 8, is_active: true },
        
        // Univers Glass
        { name: 'Vitrines', slug: 'vitrines', business_unit: 'univers-glass', icon_emoji: '🪟', color: '#0EA5E9', order_index: 9, is_active: true },
        { name: 'Miroirs', slug: 'miroirs', business_unit: 'univers-glass', icon_emoji: '🪞', color: '#0EA5E9', order_index: 10, is_active: true },
        { name: 'Portes vitrées', slug: 'portes-vitrees', business_unit: 'univers-glass', icon_emoji: '🚪', color: '#0EA5E9', order_index: 11, is_active: true },
        { name: 'Verrières', slug: 'verrieres', business_unit: 'univers-glass', icon_emoji: '🏠', color: '#0EA5E9', order_index: 12, is_active: true },
      ];

      // Créer chaque catégorie via l'API
      const promises = defaultCategories.map(cat =>
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/categories`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cat)
        })
      );

      await Promise.all(promises);
      
      toast.success(`${defaultCategories.length} catégories initialisées avec succès !`);
      refetch();
    } catch (error) {
      console.error('Erreur lors de l\'initialisation:', error);
      toast.error('Erreur lors de l\'initialisation des catégories');
    } finally {
      setIsInitializing(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const slug = formData.slug || generateSlug(formData.name || '');
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId 
        ? `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/categories/${editingId}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/categories`;

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, slug })
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la sauvegarde');
      }

      toast.success(editingId ? 'Catégorie mise à jour' : 'Catégorie créée');
      resetForm();
      refetch();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (category: CMSCategory) => {
    setEditingId(category.id);
    setFormData(category);
    setIsCreating(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) return;
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/categories/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la suppression');
      }

      toast.success('Catégorie supprimée');
      refetch();
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors de la suppression');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      parent_id: null,
      color: '#B5C233',
      icon_emoji: '📦',
      order_index: 0,
      is_active: true,
      business_unit: 'all',
      images: [],
      thumbnail: '',
    });
    setEditingId(null);
    setIsCreating(false);
  };

  const getBusinessUnitLabel = (unit: string) => {
    switch (unit) {
      case 'couchage': return 'FIMA Couchage';
      case 'design': return 'FIMA Design';
      case 'univers-glass': return 'Univers Glass';
      case 'all': return 'Tous les métiers';
      default: return unit;
    }
  };

  const getBusinessUnitColor = (unit: string) => {
    switch (unit) {
      case 'couchage': return '#B5C233';
      case 'design': return '#6E6E6E';
      case 'univers-glass': return '#0EA5E9';
      default: return '#B5C233';
    }
  };

  // Filtrer les catégories selon le métier sélectionné
  const filteredCategories = selectedFilter === 'all' 
    ? categories 
    : categories.filter(cat => cat.business_unit === selectedFilter || cat.business_unit === 'all');

  if (loading) {
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
          <h1 className="text-3xl text-gray-900 mb-2">Catégories</h1>
          <p className="text-gray-600">Gérez les catégories de produits par métier</p>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center space-x-2 px-4 py-2 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#B5C233' }}
        >
          <Plus className="w-5 h-5" />
          <span>Nouvelle catégorie</span>
        </button>
      </div>

      {/* Filtres par métier */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Filtrer par métier :</p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 transition-all ${
              selectedFilter === 'all'
                ? 'text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            style={selectedFilter === 'all' ? { backgroundColor: '#B5C233' } : {}}
          >
            <span className="flex items-center space-x-2">
              <span>🏢</span>
              <span>Tous les métiers</span>
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20">
                {categories.length}
              </span>
            </span>
          </button>

          <button
            onClick={() => setSelectedFilter('couchage')}
            className={`px-4 py-2 transition-all ${
              selectedFilter === 'couchage'
                ? 'text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            style={selectedFilter === 'couchage' ? { backgroundColor: '#B5C233' } : {}}
          >
            <span className="flex items-center space-x-2">
              <span>🛏️</span>
              <span>FIMA Couchage</span>
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20">
                {categories.filter(c => c.business_unit === 'couchage' || c.business_unit === 'all').length}
              </span>
            </span>
          </button>

          <button
            onClick={() => setSelectedFilter('design')}
            className={`px-4 py-2 transition-all ${
              selectedFilter === 'design'
                ? 'text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            style={selectedFilter === 'design' ? { backgroundColor: '#6E6E6E' } : {}}
          >
            <span className="flex items-center space-x-2">
              <span>🪑</span>
              <span>FIMA Design</span>
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20">
                {categories.filter(c => c.business_unit === 'design' || c.business_unit === 'all').length}
              </span>
            </span>
          </button>

          <button
            onClick={() => setSelectedFilter('univers-glass')}
            className={`px-4 py-2 transition-all ${
              selectedFilter === 'univers-glass'
                ? 'text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            style={selectedFilter === 'univers-glass' ? { backgroundColor: '#0EA5E9' } : {}}
          >
            <span className="flex items-center space-x-2">
              <span>🪟</span>
              <span>Univers Glass</span>
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20">
                {categories.filter(c => c.business_unit === 'univers-glass' || c.business_unit === 'all').length}
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Bouton d'initialisation des catégories */}
      <div className="mb-8">
        <div className="bg-blue-50 border border-blue-200 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-900 font-medium">Besoin de catégories par défaut ?</p>
            <p className="text-xs text-blue-700">Initialise 12 catégories prêtes à l'emploi pour les 3 métiers</p>
          </div>
          <button
            onClick={initializeDefaultCategories}
            disabled={isInitializing || categories.length > 0}
            className="flex items-center space-x-2 px-4 py-2 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#0EA5E9' }}
          >
            <RefreshCw className={`w-4 h-4 ${isInitializing ? 'animate-spin' : ''}`} />
            <span>{isInitializing ? 'Initialisation...' : 'Initialiser catégories'}</span>
          </button>
        </div>
      </div>

      {/* Modal de création/édition */}
      {(isCreating || editingId) && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={resetForm}
          />
          
          {/* Modal */}
          <div className="absolute inset-y-0 right-0 w-full max-w-3xl bg-white shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl text-gray-900">
                {editingId ? 'Modifier la catégorie' : 'Nouvelle catégorie'}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setFormData({ 
                      ...formData, 
                      name,
                      slug: generateSlug(name)
                    });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Matelas"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Slug (URL)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="matelas"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Description de la catégorie..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Métier
                </label>
                <select
                  value={formData.business_unit}
                  onChange={(e) => setFormData({ ...formData, business_unit: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                >
                  <option value="all">Tous les métiers</option>
                  <option value="couchage">FIMA Couchage</option>
                  <option value="design">FIMA Design</option>
                  <option value="univers-glass">Univers Glass</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Catégorie parente
                </label>
                <select
                  value={formData.parent_id || ''}
                  onChange={(e) => setFormData({ ...formData, parent_id: e.target.value || null })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                >
                  <option value="">Aucune (catégorie racine)</option>
                  {categories
                    .filter(cat => cat.id !== editingId)
                    .map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Icône (Emoji)
                </label>
                <input
                  type="text"
                  value={formData.icon_emoji}
                  onChange={(e) => setFormData({ ...formData, icon_emoji: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="📦"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Couleur
                </label>
                <input
                  type="color"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full h-10 px-1 py-1 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
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
                  <span className="text-sm text-gray-700">Catégorie active</span>
                </label>
              </div>
            </div>

            {/* Section Images */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg text-gray-900 mb-4 flex items-center space-x-2">
                <ImageIcon className="w-5 h-5" />
                <span>Images de la catégorie</span>
              </h3>
              
              <div className="space-y-4">
                {/* Image miniature / principale */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Image miniature (URL) *
                  </label>
                  <input
                    type="url"
                    value={formData.thumbnail || ''}
                    onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    placeholder="https://exemple.com/image.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Cette image sera utilisée comme vignette et image principale de la catégorie
                  </p>
                  {formData.thumbnail && (
                    <div className="mt-2">
                      <img
                        src={formData.thumbnail}
                        alt="Aperçu"
                        className="w-32 h-32 object-cover border border-gray-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Galerie d'images */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Galerie d'images (URLs séparées par des virgules)
                  </label>
                  <textarea
                    value={(formData.images || []).join(', ')}
                    onChange={(e) => {
                      const urls = e.target.value
                        .split(',')
                        .map(url => url.trim())
                        .filter(url => url.length > 0);
                      setFormData({ ...formData, images: urls });
                    }}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    placeholder="https://exemple.com/image1.jpg, https://exemple.com/image2.jpg, ..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ajoutez plusieurs URLs d'images séparées par des virgules pour créer une galerie
                  </p>
                  {formData.images && formData.images.length > 0 && (
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {formData.images.map((url, index) => (
                        <div key={index} className="relative">
                          <img
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="w-full h-24 object-cover border border-gray-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Erreur';
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newImages = formData.images?.filter((_, i) => i !== index) || [];
                              setFormData({ ...formData, images: newImages });
                            }}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 hover:bg-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4">
                  <p className="text-xs text-blue-900">
                    💡 <strong>Astuce :</strong> Vous pouvez télécharger vos images sur des services comme{' '}
                    <a href="https://imgur.com" target="_blank" rel="noopener noreferrer" className="underline">Imgur</a>,{' '}
                    <a href="https://imgbb.com" target="_blank" rel="noopener noreferrer" className="underline">ImgBB</a> ou{' '}
                    <a href="https://cloudinary.com" target="_blank" rel="noopener noreferrer" className="underline">Cloudinary</a>,{' '}
                    puis coller les URLs ici. Pour de meilleures performances, utilisez des images optimisées (JPG, WebP) d'environ 1200x800px.
                  </p>
                </div>
              </div>
            </div>

                <div className="flex items-center space-x-4 pt-4 border-t">
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
          </div>
        </div>
      )}

      {/* Liste des catégories */}
      <div className="bg-white border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Catégorie
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Métier
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Slug
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Ordre
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
              {filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    {selectedFilter === 'all' 
                      ? 'Aucune catégorie. Créez-en une pour commencer.'
                      : `Aucune catégorie pour ${getBusinessUnitLabel(selectedFilter)}.`
                    }
                  </td>
                </tr>
              ) : (
                filteredCategories
                  .sort((a, b) => a.order_index - b.order_index)
                  .map((category) => (
                  <tr key={category.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon_emoji}</span>
                        <div>
                          <div className="text-sm text-gray-900">{category.name}</div>
                          {category.description && (
                            <div className="text-xs text-gray-500">{category.description}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {getBusinessUnitLabel(category.business_unit)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <code className="text-xs bg-gray-100 px-2 py-1 text-gray-800">
                        /{category.slug}
                      </code>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {category.order_index}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs ${
                          category.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {category.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                      <button
                        onClick={() => handleEdit(category)}
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="text-red-600 hover:text-red-800 inline-flex items-center ml-3"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}