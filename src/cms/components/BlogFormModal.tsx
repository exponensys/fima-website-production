import { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { Button } from '../../components/ui/button';

interface BlogFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => Promise<void>;
  initialData?: any;
  isEditing?: boolean;
}

export function BlogFormModal({ isOpen, onClose, onSubmit, initialData, isEditing = false }: BlogFormModalProps) {
  const [formData, setFormData] = useState({
    titleFr: '',
    titleEn: '',
    slug: '',
    summaryFr: '',
    summaryEn: '',
    contentFr: '',
    contentEn: '',
    author: 'FIMA',
    category: 'actualites' as 'actualites' | 'conseils' | 'tendances' | 'innovations' | 'projets',
    tags: [] as string[],
    featuredImage: '',
    published: false,
    publishedDate: new Date().toISOString().split('T')[0],
    readTime: 5
  });

  const [tagsInput, setTagsInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialiser avec les données existantes en mode édition
  useEffect(() => {
    if (initialData) {
      setFormData({
        titleFr: initialData.titleFr || '',
        titleEn: initialData.titleEn || '',
        slug: initialData.slug || '',
        summaryFr: initialData.summaryFr || '',
        summaryEn: initialData.summaryEn || '',
        contentFr: initialData.contentFr || '',
        contentEn: initialData.contentEn || '',
        author: initialData.author || 'FIMA',
        category: initialData.category || 'actualites',
        tags: initialData.tags || [],
        featuredImage: initialData.featuredImage || '',
        published: initialData.published || false,
        publishedDate: initialData.publishedDate || new Date().toISOString().split('T')[0],
        readTime: initialData.readTime || 5
      });
      setTagsInput((initialData.tags || []).join(', '));
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Générer slug automatiquement si vide
    const slug = formData.slug || formData.titleFr.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Convertir les tags string en array
    const tags = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const dataToSubmit = {
      ...formData,
      slug,
      tags
    };

    try {
      await onSubmit(dataToSubmit);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {isEditing ? 'Modifier l\'article' : 'Nouvel article'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content - Scrollable */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Titres */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre (Français) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.titleFr}
                  onChange={(e) => setFormData({ ...formData, titleFr: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Titre de l'article en français"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre (Anglais) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.titleEn}
                  onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Article title in English"
                />
              </div>
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug (URL) - Laisser vide pour génération automatique
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="mon-article-slug (auto-généré si vide)"
              />
            </div>

            {/* Résumés */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Résumé (Français) *
                </label>
                <textarea
                  required
                  value={formData.summaryFr}
                  onChange={(e) => setFormData({ ...formData, summaryFr: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Court résumé de l'article"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Résumé (Anglais) *
                </label>
                <textarea
                  required
                  value={formData.summaryEn}
                  onChange={(e) => setFormData({ ...formData, summaryEn: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Short article summary"
                />
              </div>
            </div>

            {/* Contenus */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu complet (Français) *
                </label>
                <textarea
                  required
                  value={formData.contentFr}
                  onChange={(e) => setFormData({ ...formData, contentFr: e.target.value })}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
                  placeholder="Contenu complet de l'article en français (HTML accepté)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu complet (Anglais) *
                </label>
                <textarea
                  required
                  value={formData.contentEn}
                  onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
                  placeholder="Full article content in English (HTML accepted)"
                />
              </div>
            </div>

            {/* Métadonnées */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auteur
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Auteur"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="actualites">Actualités</option>
                  <option value="conseils">Conseils</option>
                  <option value="tendances">Tendances</option>
                  <option value="innovations">Innovations</option>
                  <option value="projets">Projets</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de publication
                </label>
                <input
                  type="date"
                  value={formData.publishedDate}
                  onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temps de lecture (min)
                </label>
                <input
                  type="number"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  min="1"
                />
              </div>
            </div>

            {/* Image et Tags */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image en vedette (URL)
                </label>
                <input
                  type="url"
                  value={formData.featuredImage}
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (séparés par des virgules)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="literie, matelas, sommeil"
                />
              </div>
            </div>

            {/* Publié */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-4 h-4 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Article publié (visible sur le site)</span>
            </div>
          </div>

          {/* Footer - Actions */}
          <div className="flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="px-6 py-2 text-white"
              style={{ backgroundColor: '#B5C233' }}
              disabled={isSubmitting}
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Enregistrement...' : (isEditing ? 'Mettre à jour' : 'Créer')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
