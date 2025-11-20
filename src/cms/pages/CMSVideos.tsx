import { useState } from 'react';
import { Plus, Trash2, Edit, Video, Eye, EyeOff } from 'lucide-react';
import { useVideoStories, useVideoStoryMutation } from '../../hooks/useVideoStories';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner@2.0.3';
import { VideoStoriesInitButton } from '../components/VideoStoriesInitButton';

export function CMSVideos() {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { videoStories, loading, error, refetch } = useVideoStories('fr', undefined, false, false);
  const { createVideoStory, updateVideoStory, deleteVideoStory } = useVideoStoryMutation();

  // État du formulaire
  const [formData, setFormData] = useState({
    titleFr: '',
    titleEn: '',
    descriptionFr: '',
    descriptionEn: '',
    videoUrl: '',
    thumbnailUrl: '',
    duration: '',
    category: 'general' as 'couchage' | 'design' | 'glass' | 'general',
    featured: false,
    published: false,
    publishedDate: new Date().toISOString().split('T')[0],
    order: 0,
    quoteFr: '',
    quoteEn: '',
    quoteAuthorFr: '',
    quoteAuthorEn: ''
  });

  const handleEdit = (videoStory: any) => {
    setEditingId(videoStory.id);
    setFormData({
      titleFr: videoStory.titleFr || '',
      titleEn: videoStory.titleEn || '',
      descriptionFr: videoStory.descriptionFr || '',
      descriptionEn: videoStory.descriptionEn || '',
      videoUrl: videoStory.videoUrl || '',
      thumbnailUrl: videoStory.thumbnailUrl || '',
      duration: videoStory.duration || '',
      category: videoStory.category || 'general',
      featured: videoStory.featured || false,
      published: videoStory.published || false,
      publishedDate: videoStory.publishedDate || new Date().toISOString().split('T')[0],
      order: videoStory.order || 0,
      quoteFr: videoStory.quoteFr || '',
      quoteEn: videoStory.quoteEn || '',
      quoteAuthorFr: videoStory.quoteAuthorFr || '',
      quoteAuthorEn: videoStory.quoteAuthorEn || ''
    });
    setIsAddingNew(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette vidéo ?')) return;

    const result = await deleteVideoStory(id);
    if (result.success) {
      toast.success('Vidéo supprimée avec succès');
      await refetch();
    } else {
      toast.error(result.error || 'Erreur lors de la suppression');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const result = await updateVideoStory(editingId, formData);
      if (result.success) {
        toast.success('Vidéo mise à jour avec succès');
        setIsAddingNew(false);
        setEditingId(null);
        resetForm();
        await refetch();
      } else {
        toast.error(result.error || 'Erreur lors de la mise à jour');
      }
    } else {
      const result = await createVideoStory(formData);
      if (result.success) {
        toast.success('Vidéo créée avec succès');
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
      titleFr: '',
      titleEn: '',
      descriptionFr: '',
      descriptionEn: '',
      videoUrl: '',
      thumbnailUrl: '',
      duration: '',
      category: 'general',
      featured: false,
      published: false,
      publishedDate: new Date().toISOString().split('T')[0],
      order: 0,
      quoteFr: '',
      quoteEn: '',
      quoteAuthorFr: '',
      quoteAuthorEn: ''
    });
  };

  const handleCancel = () => {
    setIsAddingNew(false);
    setEditingId(null);
    resetForm();
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Stories</h1>
            <p className="text-gray-600">Gérer les vidéos du site</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <p>Chargement des vidéos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Stories</h1>
            <p className="text-gray-600">Gérer les vidéos du site</p>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Stories</h1>
          <p className="text-gray-600">
            {videoStories.length} vidéo{videoStories.length > 1 ? 's' : ''} • Gérer les vidéos du site
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <VideoStoriesInitButton />
          {!isAddingNew && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90"
              style={{ backgroundColor: '#B5C233' }}
            >
              <Plus className="w-5 h-5" />
              <span>Nouvelle vidéo</span>
            </button>
          )}
        </div>
      </div>

      {/* Formulaire d'ajout/édition */}
      {isAddingNew && (
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {editingId ? 'Modifier la vidéo' : 'Nouvelle vidéo'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Titre en français"
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
                  placeholder="Titre en anglais"
                />
              </div>
            </div>

            {/* Descriptions */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Français)
                </label>
                <textarea
                  value={formData.descriptionFr}
                  onChange={(e) => setFormData({ ...formData, descriptionFr: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Description en français"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Anglais)
                </label>
                <textarea
                  value={formData.descriptionEn}
                  onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Description en anglais"
                />
              </div>
            </div>

            {/* URL et Thumbnail */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL de la vidéo *
                </label>
                <input
                  type="url"
                  required
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durée *
                </label>
                <input
                  type="text"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="3:45"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL de la miniature
              </label>
              <input
                type="url"
                value={formData.thumbnailUrl}
                onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            {/* Citations (optionnel) */}
            <div className="border-t pt-4">
              <h3 className="text-md font-semibold text-gray-800 mb-3">Citation (Optionnel)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Citation (Français)
                  </label>
                  <textarea
                    value={formData.quoteFr}
                    onChange={(e) => setFormData({ ...formData, quoteFr: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Citation en français"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Citation (Anglais)
                  </label>
                  <textarea
                    value={formData.quoteEn}
                    onChange={(e) => setFormData({ ...formData, quoteEn: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Citation en anglais"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auteur (Français)
                  </label>
                  <input
                    type="text"
                    value={formData.quoteAuthorFr}
                    onChange={(e) => setFormData({ ...formData, quoteAuthorFr: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Auteur en français"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auteur (Anglais)
                  </label>
                  <input
                    type="text"
                    value={formData.quoteAuthorEn}
                    onChange={(e) => setFormData({ ...formData, quoteAuthorEn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Auteur en anglais"
                  />
                </div>
              </div>
            </div>

            {/* Catégorie et Options */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="general">Général</option>
                  <option value="couchage">Couchage</option>
                  <option value="design">Design</option>
                  <option value="glass">Glass</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordre
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0"
                />
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
            </div>

            {/* Checkboxes */}
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                />
                <span className="text-sm font-medium text-gray-700">En vedette</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                />
                <span className="text-sm font-medium text-gray-700">Publié</span>
              </label>
            </div>

            {/* Boutons */}
            <div className="flex items-center space-x-4 pt-4 border-t">
              <Button
                type="submit"
                className="px-6 py-2 text-white"
                style={{ backgroundColor: '#B5C233' }}
              >
                {editingId ? 'Mettre à jour' : 'Créer'}
              </Button>
              <Button
                type="button"
                onClick={handleCancel}
                variant="outline"
              >
                Annuler
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des vidéos */}
      {videoStories.length === 0 ? (
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">Aucune vidéo</p>
          <p className="text-sm">Commencez par créer votre première vidéo</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Vidéo</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Catégorie</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Durée</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {videoStories.map((video) => (
                <tr key={video.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      {video.thumbnailUrl && (
                        <img 
                          src={video.thumbnailUrl} 
                          alt={video.titleFr}
                          className="w-16 h-10 object-cover"
                        />
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{video.titleFr}</div>
                        <div className="text-sm text-gray-500">{video.titleEn}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800">
                      {video.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{video.duration}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {video.published ? (
                        <span className="flex items-center text-green-600 text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Publié
                        </span>
                      ) : (
                        <span className="flex items-center text-gray-400 text-sm">
                          <EyeOff className="w-4 h-4 mr-1" />
                          Brouillon
                        </span>
                      )}
                      {video.featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">
                          ⭐ Vedette
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(video)}
                        className="p-2 text-blue-600 hover:bg-blue-50"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(video.id)}
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
