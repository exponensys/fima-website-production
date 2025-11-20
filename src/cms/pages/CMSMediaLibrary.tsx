import { useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, Trash2, Edit2, Copy, Check, Search, Filter, X } from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface MediaItem {
  id: string;
  title: string;
  alt_text: string;
  url: string;
  file_name: string;
  file_size: number;
  file_type: string;
  storage_path: string;
  tags: string[];
  category: string;
  created_at: string;
  updated_at: string;
}

export function CMSMediaLibrary() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    alt_text: '',
    tags: '',
    category: ''
  });

  // Catégories disponibles
  const CATEGORIES = [
    { value: '', label: 'Sélectionner une catégorie' },
    { value: 'hero', label: '🎯 Hero / Bannières' },
    { value: 'products', label: '🛋️ Produits' },
    { value: 'projects', label: '🏗️ Projets / Réalisations' },
    { value: 'blog', label: '📝 Blog / Articles' },
    { value: 'icons', label: '🎨 Icônes / Logos' },
    { value: 'backgrounds', label: '🖼️ Arrière-plans' },
    { value: 'chambre-a-coucher', label: '🛏️ Chambre à coucher' },
    { value: 'dressing', label: '👔 Dressing' },
    { value: 'salle-a-manger', label: '🍽️ Salle à manger' },
    { value: 'portes', label: '🚪 Portes' },
    { value: 'panneaux-decoratifs', label: '🎨 Panneaux décoratifs d\'intérieur' },
    { value: 'cuisine', label: '🍳 Cuisine' },
    { value: 'salon', label: '🛋️ Salon' },
    { value: 'bureaux', label: '💼 Bureaux' },
    { value: 'amenagements-buanderie', label: '🧺 Aménagements et buanderie' },
    { value: 'other', label: '📦 Autres' },
  ];

  // Formulaire d'upload
  const [uploadForm, setUploadForm] = useState({
    file: null as File | null,
    title: '',
    alt_text: '',
    tags: '',
    category: ''
  });

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/media`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success && result.data) {
        setMedia(result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch media');
      }
    } catch (error) {
      console.error('Error fetching media:', error);
      toast.error('Erreur lors du chargement des images');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Vérifier le type de fichier
      if (!file.type.startsWith('image/')) {
        toast.error('Veuillez sélectionner un fichier image');
        return;
      }
      
      // Vérifier la taille (max 10MB)
      if (file.size > 10485760) {
        toast.error('La taille du fichier ne doit pas dépasser 10 MB');
        return;
      }
      
      setUploadForm({
        ...uploadForm,
        file,
        title: uploadForm.title || file.name.split('.')[0],
        alt_text: uploadForm.alt_text || file.name.split('.')[0],
        category: uploadForm.category || 'other'
      });
    }
  };

  const handleUpload = async () => {
    if (!uploadForm.file) {
      toast.error('Veuillez sélectionner un fichier');
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('title', uploadForm.title);
      formData.append('alt_text', uploadForm.alt_text);
      formData.append('tags', uploadForm.tags);
      formData.append('category', uploadForm.category || 'other');

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/media/upload`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success('Image uploadée avec succès !');
        setUploadForm({ file: null, title: '', alt_text: '', tags: '', category: '' });
        // Reset file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        fetchMedia();
      } else {
        throw new Error(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading media:', error);
      toast.error('Erreur lors de l\'upload de l\'image');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette image ?')) {
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/media/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success('Image supprimée avec succès');
        fetchMedia();
      } else {
        throw new Error(result.error || 'Delete failed');
      }
    } catch (error) {
      console.error('Error deleting media:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const handleEdit = (item: MediaItem) => {
    setEditingId(item.id);
    setEditForm({
      title: item.title,
      alt_text: item.alt_text,
      tags: item.tags.join(', '),
      category: item.category || 'other'
    });
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/media/${editingId}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: editForm.title,
            alt_text: editForm.alt_text,
            tags: editForm.tags.split(',').map(t => t.trim()).filter(t => t),
            category: editForm.category || 'other'
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success('Image mise à jour avec succès');
        setEditingId(null);
        setEditForm({ title: '', alt_text: '', tags: '', category: '' });
        fetchMedia();
      } else {
        throw new Error(result.error || 'Update failed');
      }
    } catch (error) {
      console.error('Error updating media:', error);
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success('URL copiée dans le presse-papier');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  // Filtrer les images
  const allTags = Array.from(new Set(media.flatMap(item => item.tags)));
  const allCategories = Array.from(new Set(media.map(item => item.category).filter(Boolean)));
  
  const filteredMedia = media.filter(item => {
    // Filtre par recherche
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.alt_text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filtre par tags
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => item.tags.includes(tag));
    
    // Filtre par catégorie
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    
    return matchesSearch && matchesTags && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de la bibliothèque...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bibliothèque d'Images</h1>
          <p className="text-gray-600 mt-1">Gérez vos images et médias</p>
        </div>
        <div className="text-sm text-gray-500">
          {filteredMedia.length} image{filteredMedia.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white p-6 border-2 border-dashed border-gray-300 hover:border-green-500 transition-colors">
        <div className="flex items-center gap-2 mb-4">
          <Upload className="w-5 h-5 text-green-600" />
          <h2 className="font-semibold text-gray-900">Uploader une nouvelle image</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fichier Image
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
            {uploadForm.file && (
              <p className="text-xs text-gray-500 mt-1">
                {uploadForm.file.name} ({formatFileSize(uploadForm.file.size)})
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Titre
            </label>
            <input
              type="text"
              value={uploadForm.title}
              onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Titre de l'image"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Texte alternatif (Alt)
            </label>
            <input
              type="text"
              value={uploadForm.alt_text}
              onChange={(e) => setUploadForm({ ...uploadForm, alt_text: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Description de l'image"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Catégorie <span className="text-red-500">*</span>
            </label>
            <select
              value={uploadForm.category}
              onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              {CATEGORIES.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (séparés par des virgules)
            </label>
            <input
              type="text"
              value={uploadForm.tags}
              onChange={(e) => setUploadForm({ ...uploadForm, tags: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="hero, produit, bannière..."
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleUpload}
            disabled={!uploadForm.file || uploading}
            className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {uploading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Upload en cours...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Uploader
              </>
            )}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Rechercher par titre, description ou tags..."
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent min-w-[200px]"
            >
              <option value="">Toutes les catégories</option>
              {CATEGORIES.filter(cat => cat.value).map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value=""
              onChange={(e) => {
                if (e.target.value && !selectedTags.includes(e.target.value)) {
                  setSelectedTags([...selectedTags, e.target.value]);
                }
              }}
              className="px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Filtrer par tag...</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Filters */}
        {(selectedTags.length > 0 || selectedCategory) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {/* Selected Category */}
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm">
                📁 {CATEGORIES.find(c => c.value === selectedCategory)?.label}
                <button
                  onClick={() => setSelectedCategory('')}
                  className="hover:bg-blue-200 p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            {/* Selected Tags */}
            {selectedTags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm"
              >
                {tag}
                <button
                  onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                  className="hover:bg-green-200 p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            
            <button
              onClick={() => {
                setSelectedTags([]);
                setSelectedCategory('');
              }}
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Effacer tout
            </button>
          </div>
        )}
      </div>

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 border border-gray-200">
          <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">
            {searchQuery || selectedTags.length > 0
              ? 'Aucune image ne correspond à vos critères'
              : 'Aucune image dans la bibliothèque'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Image Preview */}
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt_text}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                {editingId === item.id ? (
                  // Edit Mode
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="w-full px-2 py-1 border border-gray-300 text-sm"
                      placeholder="Titre"
                    />
                    <input
                      type="text"
                      value={editForm.alt_text}
                      onChange={(e) => setEditForm({ ...editForm, alt_text: e.target.value })}
                      className="w-full px-2 py-1 border border-gray-300 text-sm"
                      placeholder="Texte alternatif"
                    />
                    <select
                      value={editForm.category}
                      onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                      className="w-full px-2 py-1 border border-gray-300 text-sm"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={editForm.tags}
                      onChange={(e) => setEditForm({ ...editForm, tags: e.target.value })}
                      className="w-full px-2 py-1 border border-gray-300 text-sm"
                      placeholder="Tags (séparés par virgules)"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveEdit}
                        className="flex-1 px-3 py-1 bg-green-600 text-white text-sm hover:bg-green-700"
                      >
                        Sauvegarder
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex-1 px-3 py-1 bg-gray-200 text-gray-700 text-sm hover:bg-gray-300"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <>
                    <h3 className="font-semibold text-gray-900 truncate mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate mb-2">
                      {item.alt_text}
                    </p>
                    
                    {/* Category Badge */}
                    {item.category && (
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium">
                          {CATEGORIES.find(c => c.value === item.category)?.label || item.category}
                        </span>
                      </div>
                    )}
                    
                    {/* Tags */}
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="text-xs text-gray-400 mb-3">
                      <p>{formatFileSize(item.file_size)}</p>
                      <p>{new Date(item.created_at).toLocaleDateString('fr-FR')}</p>
                    </div>

                    {/* URL */}
                    <div className="mb-3">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        URL de l'image :
                      </label>
                      <div className="flex gap-1">
                        <input
                          type="text"
                          value={item.url}
                          readOnly
                          className="flex-1 px-2 py-1 bg-gray-50 border border-gray-200 text-xs truncate"
                        />
                        <button
                          onClick={() => copyToClipboard(item.url, item.id)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-200"
                          title="Copier l'URL"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex-1 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 text-sm flex items-center justify-center gap-1"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex-1 px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 text-sm flex items-center justify-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Supprimer
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
