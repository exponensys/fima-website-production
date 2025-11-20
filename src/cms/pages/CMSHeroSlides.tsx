import { useState, useEffect } from 'react';
import { Plus, Image as ImageIcon, Video as VideoIcon, Trash2, Edit, GripVertical, Wand2, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useHeroSlides } from '../../hooks/useHeroSlides';
import { projectId, publicAnonKey } from '../../utils/supabase/info';
import { initHeroSlides } from '../../utils/initHeroSlidesData';
import { ImagePicker } from '../components/ImagePicker';

interface HeroSlideForm {
  id?: string;
  title_fr: string;
  title_en: string;
  subtitle_fr: string;
  subtitle_en: string;
  description_fr: string;
  description_en: string;
  cta_primary_fr: string;
  cta_primary_en: string;
  badge_fr: string;
  badge_en: string;
  background_image_url: string;
  is_video: boolean;
  video_url?: string;
  slide_duration: number;
  video_play_duration?: number;
  video_loop: boolean;
  is_active: boolean;
  sort_order: number;
  cta_bg_color?: string;
  cta_text_color?: string;
}

export function CMSHeroSlides() {
  const { slides, loading, error, refetch } = useHeroSlides();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlide, setEditingSlide] = useState<HeroSlideForm | null>(null);
  const [formData, setFormData] = useState<HeroSlideForm>({
    title_fr: '',
    title_en: '',
    subtitle_fr: '',
    subtitle_en: '',
    description_fr: '',
    description_en: '',
    cta_primary_fr: 'Découvrir',
    cta_primary_en: 'Discover',
    badge_fr: '',
    badge_en: '',
    background_image_url: '',
    is_video: false,
    video_url: '',
    slide_duration: 5000,
    video_play_duration: 10000,
    video_loop: true,
    is_active: true,
    sort_order: slides.length + 1,
    cta_bg_color: '#FFFFFF',
    cta_text_color: '#B5C233'
  });
  const [activeTab, setActiveTab] = useState<'content' | 'media' | 'settings'>('content');
  const [saving, setSaving] = useState(false);
  const [initializing, setInitializing] = useState(false);

  const handleInitSlides = async () => {
    if (!confirm('⚠️ Cela va créer 7 slides par défaut (3 vidéos + 4 images). Continuer ?')) return;
    
    setInitializing(true);
    try {
      const result = await initHeroSlides();
      if (result.success) {
        alert(`✅ ${result.message}\n\n📊 ${result.data.total_slides} slides créés:\n🎥 ${result.data.video_slides} vidéos\n🖼️ ${result.data.image_slides} images`);
        window.location.reload();
      } else {
        alert(`❌ Erreur: ${result.error}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('❌ Erreur lors de l\'initialisation des slides');
    } finally {
      setInitializing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const isEditing = !!editingSlide;
      const endpoint = isEditing 
        ? `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides/${editingSlide.id}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides`;
      
      const method = isEditing ? 'PUT' : 'POST';

      // Mapper le formData vers le format attendu par l'API
      const payload = {
        sort_order: formData.sort_order,
        background_image_url: formData.background_image_url,
        is_video: formData.is_video,
        video_url: formData.is_video ? formData.video_url : null,
        slide_duration: formData.slide_duration,
        video_play_duration: formData.is_video ? formData.video_play_duration : null,
        video_loop: formData.video_loop,
        is_active: formData.is_active,
        cta_bg_color: formData.cta_bg_color || '#FFFFFF',
        cta_text_color: formData.cta_text_color || '#B5C233',
        translations: {
          fr: {
            title: formData.title_fr,
            subtitle: formData.subtitle_fr,
            description: formData.description_fr,
            cta_primary: formData.cta_primary_fr,
            badge: formData.badge_fr
          },
          en: {
            title: formData.title_en,
            subtitle: formData.subtitle_en,
            description: formData.description_en,
            cta_primary: formData.cta_primary_en,
            badge: formData.badge_en
          }
        }
      };

      console.log(`📤 ${isEditing ? 'Modification' : 'Création'} du slide:`, payload);

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        const errorMessage = result.error || `Erreur HTTP ${response.status}`;
        console.error('❌ Erreur API:', errorMessage);
        throw new Error(errorMessage);
      }

      console.log('✅ Slide sauvegardé:', result);

      // Afficher le message approprié
      toast.success(isEditing ? 'Slide modifié avec succès !' : 'Slide créé avec succès !');
      
      // Rafraîchir la liste
      setIsModalOpen(false);
      setEditingSlide(null);
      await refetch();
    } catch (err) {
      console.error('❌ Erreur:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      toast.error(`Erreur lors de la sauvegarde: ${errorMessage}`);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const newStatus = !currentStatus;
      console.log(`🔄 Toggle slide ${id}: ${currentStatus} → ${newStatus}`);
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides/${id}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            is_active: newStatus
          })
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        const errorMessage = result.error || `Erreur HTTP ${response.status}`;
        console.error('❌ Erreur API toggle:', errorMessage);
        throw new Error(errorMessage);
      }

      console.log('✅ Toggle réussi:', result);
      toast.success(newStatus ? 'Slide activé avec succès' : 'Slide désactivé avec succès');
      await refetch();
    } catch (err) {
      console.error('❌ Erreur toggle:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      toast.error(`Erreur lors de la mise à jour: ${errorMessage}`);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('⚠️ Êtes-vous sûr de vouloir SUPPRIMER DÉFINITIVEMENT ce slide ?\n\nℹ️ Conseil : Utilisez plutôt le bouton "Désactiver" pour masquer temporairement un slide.')) return;

    try {
      console.log(`🗑️ Suppression slide ${id}`);
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          }
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        const errorMessage = result.error || `Erreur HTTP ${response.status}`;
        console.error('❌ Erreur API suppression:', errorMessage);
        throw new Error(errorMessage);
      }

      console.log('✅ Suppression réussie:', result);
      toast.success('Slide supprimé définitivement');
      await refetch();
    } catch (err) {
      console.error('❌ Erreur suppression:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      toast.error(`Erreur lors de la suppression: ${errorMessage}`);
    }
  };

  const openEditModal = (slide: any) => {
    setEditingSlide(slide);
    
    // Récupérer les traductions FR/EN si disponibles, sinon utiliser la traduction courante
    const frTranslation = slide.translations?.fr || slide.translation || {};
    const enTranslation = slide.translations?.en || slide.translation || {};
    
    setFormData({
      id: slide.id,
      title_fr: frTranslation.title || '',
      title_en: enTranslation.title || '',
      subtitle_fr: frTranslation.subtitle || '',
      subtitle_en: enTranslation.subtitle || '',
      description_fr: frTranslation.description || '',
      description_en: enTranslation.description || '',
      cta_primary_fr: frTranslation.cta_primary || 'Découvrir',
      cta_primary_en: enTranslation.cta_primary || 'Discover',
      badge_fr: frTranslation.badge || '',
      badge_en: enTranslation.badge || '',
      background_image_url: slide.background_image_url || '',
      is_video: slide.is_video || false,
      video_url: slide.video_url || '',
      slide_duration: slide.slide_duration || 5000,
      video_play_duration: slide.video_play_duration || 10000,
      video_loop: slide.video_loop !== undefined ? slide.video_loop : true,
      is_active: slide.is_active !== undefined ? slide.is_active : true,
      sort_order: slide.sort_order || 1,
      cta_bg_color: slide.cta_bg_color || '#FFFFFF',
      cta_text_color: slide.cta_text_color || '#B5C233'
    });
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setEditingSlide(null);
    setFormData({
      title_fr: '',
      title_en: '',
      subtitle_fr: '',
      subtitle_en: '',
      description_fr: '',
      description_en: '',
      cta_primary_fr: 'Découvrir',
      cta_primary_en: 'Discover',
      badge_fr: '',
      badge_en: '',
      background_image_url: '',
      is_video: false,
      video_url: '',
      slide_duration: 5000,
      video_play_duration: 10000,
      video_loop: true,
      is_active: true,
      sort_order: slides.length + 1,
      cta_bg_color: '#FFFFFF',
      cta_text_color: '#B5C233'
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Slides Hero</h1>
          <p className="text-gray-600">
            {slides.length} slides configurés 
            <span className="ml-2 text-green-600 font-medium">
              • {slides.filter(s => s.is_active).length} actifs
            </span>
            {slides.filter(s => !s.is_active).length > 0 && (
              <span className="ml-2 text-red-600 font-medium">
                • {slides.filter(s => !s.is_active).length} masqués
              </span>
            )}
            {slides.filter(s => s.is_video).length > 0 && (
              <span className="ml-2 text-gray-500">
                • {slides.filter(s => s.is_video).length} vidéo(s)
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          {/* Bouton d'initialisation */}
          {slides.length === 0 && (
            <button
              onClick={handleInitSlides}
              disabled={initializing}
              className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
              style={{ backgroundColor: '#E30613' }}
            >
              <Wand2 className="w-5 h-5" />
              <span>{initializing ? 'Initialisation...' : 'Initialiser 7 slides'}</span>
            </button>
          )}
          
          {/* Bouton de création */}
          <button
            onClick={openCreateModal}
            className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#B5C233' }}
          >
            <Plus className="w-5 h-5" />
            <span>Ajouter un slide</span>
          </button>
        </div>
      </div>

      {/* Slides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((slide) => (
          <div key={slide.id} className={`bg-white border overflow-hidden hover:shadow-lg transition-shadow ${
            slide.is_active ? 'border-gray-200' : 'border-gray-300 bg-gray-50 opacity-75'
          }`}>
            {/* Preview */}
            <div className={`relative h-48 bg-gray-100 ${!slide.is_active ? 'opacity-60' : ''}`}>
              {slide.is_video ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <VideoIcon className="w-12 h-12 text-white" />
                  <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs">
                    Vidéo
                  </span>
                </div>
              ) : (
                <img
                  src={slide.background_image_url}
                  alt={slide.translation.title}
                  className="w-full h-full object-cover"
                />
              )}
              {!slide.is_active && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                    <p className="text-white font-medium">Masqué du site</p>
                  </div>
                </div>
              )}
              <div className="absolute top-2 left-2">
                <span className={`px-3 py-1.5 text-xs font-semibold text-white shadow-lg ${
                  slide.is_active ? 'bg-green-600' : 'bg-red-600'
                }`}>
                  {slide.is_active ? '✓ Visible sur le site' : '✕ Masqué du site'}
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 text-xs bg-black bg-opacity-50 text-white">
                  Ordre: {slide.sort_order}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <GripVertical className="w-4 h-4 text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{slide.translation.title}</h3>
                    <p className="text-sm text-gray-600">{slide.translation.subtitle}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                {slide.translation.description}
              </p>

              {slide.translation.badge && (
                <div className="mb-4">
                  <span className="px-2 py-1 text-xs text-white" style={{ backgroundColor: '#B5C233' }}>
                    {slide.translation.badge}
                  </span>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => openEditModal(slide)}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span>Modifier</span>
                </button>
                <button
                  onClick={() => handleToggleActive(slide.id, slide.is_active)}
                  className={`px-4 py-2 border transition-colors ${
                    slide.is_active
                      ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      : 'border-green-300 text-green-600 hover:bg-green-50'
                  }`}
                  title={slide.is_active ? 'Désactiver le slide' : 'Activer le slide'}
                >
                  {slide.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleDelete(slide.id)}
                  className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 transition-colors"
                  title="Supprimer définitivement le slide"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleSubmit}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingSlide ? 'Modifier le slide' : 'Nouveau slide'}
                </h2>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 px-6">
                <div className="flex space-x-6">
                  <button
                    type="button"
                    onClick={() => setActiveTab('content')}
                    className={`py-3 border-b-2 ${
                      activeTab === 'content'
                        ? 'border-[#B5C233] text-gray-900'
                        : 'border-transparent text-gray-600'
                    }`}
                  >
                    Contenu
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('media')}
                    className={`py-3 border-b-2 ${
                      activeTab === 'media'
                        ? 'border-[#B5C233] text-gray-900'
                        : 'border-transparent text-gray-600'
                    }`}
                  >
                    Média
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('settings')}
                    className={`py-3 border-b-2 ${
                      activeTab === 'settings'
                        ? 'border-[#B5C233] text-gray-900'
                        : 'border-transparent text-gray-600'
                    }`}
                  >
                    Paramètres
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    {/* Français */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Textes du Slide 1 (Français)</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            H2 - Surtitre (Français) *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.subtitle_fr}
                            onChange={(e) => setFormData({ ...formData, subtitle_fr: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="FIMA Couchage"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            H1 - Titre principal (Français) *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.title_fr}
                            onChange={(e) => setFormData({ ...formData, title_fr: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="Excellence en Literie"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description (Français)
                          </label>
                          <textarea
                            value={formData.description_fr}
                            onChange={(e) => setFormData({ ...formData, description_fr: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="Découvrez notre gamme complète de matelas..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Texte du bouton (Français)
                          </label>
                          <input
                            type="text"
                            value={formData.cta_primary_fr}
                            onChange={(e) => setFormData({ ...formData, cta_primary_fr: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="Découvrir"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Badge (Français) <span className="text-xs text-gray-500">(optionnel)</span>
                          </label>
                          <input
                            type="text"
                            value={formData.badge_fr}
                            onChange={(e) => setFormData({ ...formData, badge_fr: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="Nouveauté"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Anglais */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Textes du Slide 1 (Anglais)</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            H2 - Surtitre (Anglais) *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.subtitle_en}
                            onChange={(e) => setFormData({ ...formData, subtitle_en: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="FIMA Bedding"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            H1 - Titre principal (Anglais) *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.title_en}
                            onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="Excellence in Bedding"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description (Anglais)
                          </label>
                          <textarea
                            value={formData.description_en}
                            onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="Discover our complete range of mattresses..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Texte du bouton (Anglais)
                          </label>
                          <input
                            type="text"
                            value={formData.cta_primary_en}
                            onChange={(e) => setFormData({ ...formData, cta_primary_en: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="Discover"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Badge (Anglais) <span className="text-xs text-gray-500">(optionnel)</span>
                          </label>
                          <input
                            type="text"
                            value={formData.badge_en}
                            onChange={(e) => setFormData({ ...formData, badge_en: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                            placeholder="New"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'media' && (
                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          checked={formData.is_video}
                          onChange={(e) => setFormData({ ...formData, is_video: e.target.checked })}
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium text-gray-700">Ce slide contient une vidéo</span>
                      </label>
                    </div>

                    {/* Image de fond (toujours requise comme fallback) */}
                    <div>
                      <ImagePicker
                        value={formData.background_image_url}
                        onChange={(url) => setFormData({ ...formData, background_image_url: url })}
                        label={`Image de fond * ${formData.is_video ? '(fallback si la vidéo ne charge pas)' : ''}`}
                        placeholder="Sélectionnez une image de bannière depuis la bibliothèque"
                        category="hero"
                      />
                    </div>

                    {/* URL vidéo si type vidéo */}
                    {formData.is_video && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          URL de la vidéo *
                        </label>
                        <input
                          type="url"
                          required={formData.is_video}
                          value={formData.video_url}
                          onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                          placeholder="https://commondatastorage.googleapis.com/.../video.mp4"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Format recommandé : MP4 (H.264), max 10-15 secondes
                        </p>
                      </div>
                    )}

                    {/* Preview */}
                    {(formData.background_image_url || formData.video_url) && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Aperçu</p>
                        <div className="h-48 bg-gray-100 border border-gray-300">
                          {formData.is_video ? (
                            <div className="h-full flex items-center justify-center bg-gray-900">
                              <VideoIcon className="w-12 h-12 text-white" />
                            </div>
                          ) : (
                            <img
                              src={formData.background_image_url}
                              alt="Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+invalide';
                              }}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Durée du slide (ms)
                      </label>
                      <input
                        type="number"
                        value={formData.slide_duration}
                        onChange={(e) => setFormData({ ...formData, slide_duration: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                      />
                    </div>

                    {formData.is_video && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Durée de lecture vidéo (ms)
                          </label>
                          <input
                            type="number"
                            value={formData.video_play_duration}
                            onChange={(e) => setFormData({ ...formData, video_play_duration: parseInt(e.target.value) })}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                          />
                        </div>

                        <div>
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.video_loop}
                              onChange={(e) => setFormData({ ...formData, video_loop: e.target.checked })}
                              className="w-4 h-4"
                            />
                            <span className="text-sm font-medium text-gray-700">Vidéo en boucle</span>
                          </label>
                        </div>
                      </>
                    )}

                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.is_active}
                          onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium text-gray-700">Slide actif</span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ordre d'affichage
                      </label>
                      <input
                        type="number"
                        value={formData.sort_order}
                        onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                      />
                    </div>

                    {/* Couleurs du bouton CTA */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">🎨 Style du bouton</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Couleur de fond
                          </label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="color"
                              value={formData.cta_bg_color || '#FFFFFF'}
                              onChange={(e) => setFormData({ ...formData, cta_bg_color: e.target.value })}
                              className="w-12 h-10 border border-gray-300 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={formData.cta_bg_color || '#FFFFFF'}
                              onChange={(e) => setFormData({ ...formData, cta_bg_color: e.target.value })}
                              className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                              placeholder="#FFFFFF"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Couleur du texte
                          </label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="color"
                              value={formData.cta_text_color || '#B5C233'}
                              onChange={(e) => setFormData({ ...formData, cta_text_color: e.target.value })}
                              className="w-12 h-10 border border-gray-300 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={formData.cta_text_color || '#B5C233'}
                              onChange={(e) => setFormData({ ...formData, cta_text_color: e.target.value })}
                              className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                              placeholder="#B5C233"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Aperçu du bouton */}
                      <div className="mt-4 p-4 bg-gray-50 border border-gray-200">
                        <p className="text-xs text-gray-600 mb-2">Aperçu du bouton :</p>
                        <button
                          type="button"
                          className="px-6 py-3 transition-all"
                          style={{
                            backgroundColor: formData.cta_bg_color || '#FFFFFF',
                            color: formData.cta_text_color || '#B5C233',
                            border: `2px solid ${formData.cta_text_color || '#B5C233'}`
                          }}
                        >
                          {formData.cta_primary_fr || 'Découvrir'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: '#B5C233' }}
                >
                  {saving ? 'Enregistrement...' : 'Enregistrer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
