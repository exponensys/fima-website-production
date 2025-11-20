import { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Tag, Eye, EyeOff } from 'lucide-react';
import { useArticleCategories, useArticleCategoryMutation } from '../../hooks/useArticleCategories';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';

export function CMSArticleCategories() {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { categories, loading, error, refetch } = useArticleCategories();
  const { createCategory, updateCategory, deleteCategory } = useArticleCategoryMutation();

  // État du formulaire
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    color: '#0EA5E9',
    icon: '📰',
    isActive: true,
    orderIndex: 1
  });

  const handleEdit = (category: any) => {
    setEditingId(category.id);
    setFormData({
      name: category.name || '',
      slug: category.slug || '',
      description: category.description || '',
      color: category.color || '#0EA5E9',
      icon: category.icon || '📰',
      isActive: category.isActive !== undefined ? category.isActive : true,
      orderIndex: category.orderIndex || 1
    });
    setIsAddingNew(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) return;

    const result = await deleteCategory(id);
    if (result.success) {
      toast.success('Catégorie supprimée avec succès');
      await refetch();
    } else {
      toast.error(result.error || 'Erreur lors de la suppression');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const result = await updateCategory(editingId, formData);
      if (result.success) {
        toast.success('Catégorie mise à jour avec succès');
        setIsAddingNew(false);
        setEditingId(null);
        resetForm();
        await refetch();
      } else {
        toast.error(result.error || 'Erreur lors de la mise à jour');
      }
    } else {
      const result = await createCategory(formData);
      if (result.success) {
        toast.success('Catégorie créée avec succès');
        setIsAddingNew(false);
        resetForm();
        await refetch();
      } else {
        toast.error(result.error || 'Erreur lors de la création');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      color: '#0EA5E9',
      icon: '📰',
      isActive: true,
      orderIndex: 1
    });
  };

  const handleCancel = () => {
    setIsAddingNew(false);
    setEditingId(null);
    resetForm();
  };

  // Générer automatiquement le slug à partir du nom
  const handleNameChange = (value: string) => {
    setFormData({ 
      ...formData, 
      name: value,
      slug: value.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    });
  };

  // Initialiser les catégories par défaut
  const initializeDefaultCategories = async () => {
    const defaultCategories = [
      {
        name: "Guides d'achat",
        slug: "guides-achat",
        description: "Guides complets pour vous aider à choisir les meilleurs produits",
        color: "#B5C233",
        icon: "📖",
        isActive: true,
        orderIndex: 1
      },
      {
        name: "Conseils sommeil",
        slug: "conseils-sommeil",
        description: "Astuces et recommandations pour améliorer votre sommeil",
        color: "#6E6E6E",
        icon: "💤",
        isActive: true,
        orderIndex: 2
      },
      {
        name: "Tendances déco",
        slug: "tendances-deco",
        description: "Découvrez les dernières tendances en décoration d'intérieur",
        color: "#E30613",
        icon: "🎨",
        isActive: true,
        orderIndex: 3
      },
      {
        name: "Fiches techniques",
        slug: "fiches-techniques",
        description: "Informations techniques détaillées sur nos produits et services",
        color: "#0EA5E9",
        icon: "⚙️",
        isActive: true,
        orderIndex: 4
      }
    ];

    let successCount = 0;
    for (const category of defaultCategories) {
      const result = await createCategory(category);
      if (result.success) {
        successCount++;
      }
    }

    if (successCount > 0) {
      toast.success(`${successCount} catégories initialisées avec succès`);
      await refetch();
    } else {
      toast.error('Erreur lors de l\'initialisation des catégories');
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Catégories d'articles</h1>
            <p className="text-gray-600">Gérer les catégories des articles de blog</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <p>Chargement des catégories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Catégories d'articles</h1>
            <p className="text-gray-600">Gérer les catégories des articles de blog</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-12 text-center text-red-500">
          <p>Erreur: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Catégories d'articles</h1>
          <p className="text-gray-600">
            {categories.length} catégorie{categories.length > 1 ? 's' : ''} • Gérer les catégories des articles
          </p>
        </div>
        <div className="flex items-center space-x-3">
          {categories.length === 0 && (
            <button
              onClick={initializeDefaultCategories}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white hover:bg-blue-600"
            >
              <Plus className="w-5 h-5" />
              <span>Initialiser les catégories</span>
            </button>
          )}
          {!isAddingNew && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90"
              style={{ backgroundColor: '#B5C233' }}
            >
              <Plus className="w-5 h-5" />
              <span>Nouvelle catégorie</span>
            </button>
          )}
        </div>
      </div>

      {/* Formulaire d'ajout/édition */}
      {isAddingNew && (
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {editingId ? 'Modifier la catégorie' : 'Nouvelle catégorie'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom et Slug */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de la catégorie *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Guides d'achat"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (URL) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="guides-achat"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Description de la catégorie"
              />
            </div>

            {/* Icône, Couleur et Ordre */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icône (emoji)
                </label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-2xl text-center"
                  placeholder="📰"
                  maxLength={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Couleur
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-12 h-10 border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="#0EA5E9"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordre d'affichage
                </label>
                <input
                  type="number"
                  value={formData.orderIndex}
                  onChange={(e) => setFormData({ ...formData, orderIndex: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  min="1"
                />
              </div>
            </div>

            {/* Checkbox Active */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Catégorie active</span>
            </div>

            {/* Boutons */}
            <div className="flex items-center space-x-4 pt-4 border-t">
              <Button
                type="submit"
                className="px-6 py-2 text-white"
                style={{ backgroundColor: '#B5C233' }}
              >
                <Save className="w-4 h-4 mr-2" />
                {editingId ? 'Mettre à jour' : 'Créer'}
              </Button>
              <Button
                type="button"
                onClick={handleCancel}
                variant="outline"
              >
                <X className="w-4 h-4 mr-2" />
                Annuler
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des catégories */}
      {categories.length === 0 ? (
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <Tag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">Aucune catégorie</p>
          <p className="text-sm">Initialisez les catégories par défaut ou créez votre première catégorie</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Icône</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Nom</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Slug</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Description</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Couleur</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Ordre</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="text-3xl">{category.icon}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{category.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-sm bg-gray-100 px-2 py-1 text-gray-700">{category.slug}</code>
                  </td>
                  <td className="py-3 px-4 max-w-xs">
                    <div className="text-sm text-gray-600 truncate">{category.description || '-'}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 border border-gray-300"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <code className="text-xs text-gray-600">{category.color}</code>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-900">{category.orderIndex}</span>
                  </td>
                  <td className="py-3 px-4">
                    {category.isActive ? (
                      <span className="flex items-center text-green-600 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center text-gray-400 text-sm">
                        <EyeOff className="w-4 h-4 mr-1" />
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(category)}
                        className="p-2 text-blue-600 hover:bg-blue-50"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="p-2 text-red-600 hover:bg-red-50"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
