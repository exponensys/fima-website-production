import { useState } from 'react';
import { Images, X, Check, Search, Upload, Filter } from 'lucide-react';
import { useMediaLibrary } from '../../hooks/useMediaLibrary';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface ImagePickerProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  placeholder?: string;
  category?: string; // Filtre optionnel par catégorie
}

export function ImagePicker({ value, onChange, label, placeholder, category }: ImagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { media, loading, refetch } = useMediaLibrary();

  // Catégories disponibles
  const CATEGORIES = [
    { value: '', label: 'Toutes les catégories' },
    { value: 'hero', label: '🎯 Hero / Bannières' },
    { value: 'products', label: '🛋️ Produits' },
    { value: 'projects', label: '🏗️ Projets / Réalisations' },
    { value: 'team', label: '👥 Équipe' },
    { value: 'blog', label: '📝 Blog / Articles' },
    { value: 'icons', label: '🎨 Icônes / Logos' },
    { value: 'backgrounds', label: '🖼️ Arrière-plans' },
    { value: 'other', label: '📦 Autres' },
  ];

  // Formulaire d'upload
  const [uploadForm, setUploadForm] = useState({
    file: null as File | null,
    title: '',
    alt_text: '',
    category: category || 'other',
    tags: ''
  });

  const filteredMedia = media.filter(item => {
    // Filtre par recherche
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.alt_text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filtre par catégorie
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSelect = (url: string) => {
    onChange(url);
    setIsOpen(false);
    setShowUploadForm(false);
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
        alt_text: uploadForm.alt_text || file.name.split('.')[0]
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
      formData.append('category', uploadForm.category || 'other');
      formData.append('tags', uploadForm.tags);

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
        
        // Sélectionner automatiquement l'image uploadée
        onChange(result.data.url);
        
        // Rafraîchir la liste
        refetch();
        
        // Fermer le formulaire
        setShowUploadForm(false);
        setUploadForm({ file: null, title: '', alt_text: '', category: category || 'other', tags: '' });
        
        // Optionnel : fermer le modal
        // setIsOpen(false);
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

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="space-y-2">
        {/* URL Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder={placeholder || "URL de l'image ou sélectionnez depuis la bibliothèque"}
          />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center gap-2"
            title="Choisir depuis la bibliothèque"
          >
            <Images className="w-4 h-4" />
            Bibliothèque
          </button>
        </div>

        {/* Preview */}
        {value && (
          <div className="relative w-full h-32 bg-gray-100 border border-gray-200 overflow-hidden">
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999"%3EImage invalide%3C/text%3E%3C/svg%3E';
              }}
            />
            <button
              type="button"
              onClick={() => onChange('')}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white hover:bg-red-600"
              title="Supprimer l'image"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Modal de sélection */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-6xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">
                {showUploadForm ? 'Uploader une image' : 'Sélectionner une image'}
              </h3>
              <div className="flex items-center gap-2">
                {!showUploadForm && (
                  <button
                    type="button"
                    onClick={() => setShowUploadForm(true)}
                    className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Uploader
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowUploadForm(false);
                  }}
                  className="p-1 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {showUploadForm ? (
              /* Formulaire d'upload */
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-2xl mx-auto space-y-4">
                  {/* File Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fichier Image <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                    />
                    {uploadForm.file && (
                      <p className="text-xs text-gray-500 mt-1">
                        {uploadForm.file.name} ({(uploadForm.file.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    )}
                  </div>

                  {/* Preview */}
                  {uploadForm.file && (
                    <div className="relative w-full h-48 bg-gray-100 border border-gray-200 overflow-hidden">
                      <img
                        src={URL.createObjectURL(uploadForm.file)}
                        alt="Preview"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {/* Title */}
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

                  {/* Alt Text */}
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

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Catégorie <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={uploadForm.category}
                      onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {CATEGORIES.filter(cat => cat.value).map(cat => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tags */}
                  <div>
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

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleUpload}
                      disabled={!uploadForm.file || uploading}
                      className="flex-1 px-6 py-3 bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {uploading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Upload en cours...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4" />
                          Uploader et Sélectionner
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowUploadForm(false);
                        setUploadForm({ file: null, title: '', alt_text: '', category: category || 'other', tags: '' });
                      }}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Filters */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-3">
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
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div className="sm:w-64">
                      <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          {CATEGORIES.map(cat => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto p-4">
                  {loading ? (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-gray-600">Chargement...</p>
                      </div>
                    </div>
                  ) : filteredMedia.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      {searchQuery || selectedCategory
                        ? 'Aucune image ne correspond à vos critères'
                        : 'Aucune image dans la bibliothèque'}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {filteredMedia.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSelect(item.url)}
                          className={`relative aspect-square bg-gray-100 border-2 overflow-hidden hover:border-green-500 transition-colors group ${
                            value === item.url ? 'border-green-500' : 'border-gray-200'
                          }`}
                        >
                          <img
                            src={item.url}
                            alt={item.alt_text}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Category Badge - Top Left */}
                          {item.category && (
                            <div className="absolute top-2 left-2 z-10">
                              <span className="text-xs px-2 py-1 bg-blue-500 text-white font-medium">
                                {CATEGORIES.find(c => c.value === item.category)?.label?.split(' ')[0] || '📦'}
                              </span>
                            </div>
                          )}
                          
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex flex-col items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 text-white text-center p-3">
                              <p className="text-sm font-medium mb-1">{item.title}</p>
                              {item.alt_text && (
                                <p className="text-xs text-gray-300 line-clamp-2">{item.alt_text}</p>
                              )}
                            </div>
                          </div>

                          {/* Selected indicator */}
                          {value === item.url && (
                            <div className="absolute top-2 right-2 bg-green-500 text-white p-1.5 z-10">
                              <Check className="w-4 h-4" />
                            </div>
                          )}

                          {/* Tags - Bottom */}
                          {item.tags.length > 0 && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-2">
                              <div className="flex flex-wrap gap-1">
                                {item.tags.slice(0, 2).map(tag => (
                                  <span
                                    key={tag}
                                    className="text-xs px-1.5 py-0.5 bg-white bg-opacity-90 text-gray-800 font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {item.tags.length > 2 && (
                                  <span className="text-xs px-1.5 py-0.5 bg-gray-200 bg-opacity-90 text-gray-600">
                                    +{item.tags.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Footer */}
            {!showUploadForm && (
              <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {filteredMedia.length} image{filteredMedia.length !== 1 ? 's' : ''} disponible{filteredMedia.length !== 1 ? 's' : ''}
                  {selectedCategory && ` • ${CATEGORIES.find(c => c.value === selectedCategory)?.label}`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setShowUploadForm(false);
                  }}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  Annuler
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
