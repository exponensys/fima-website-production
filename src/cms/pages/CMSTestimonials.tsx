import { useState } from 'react';
import { Plus, Edit, Trash2, Star, Eye, EyeOff } from 'lucide-react';
import { useTestimonials, useTestimonialMutation } from '../../hooks/useTestimonials';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';
import { TestimonialsInitButton } from '../components/TestimonialsInitButton';

export function CMSTestimonials() {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { testimonials, loading, error, refetch } = useTestimonials('fr', undefined, false, false);
  const { createTestimonial, updateTestimonial, deleteTestimonial } = useTestimonialMutation();

  // État du formulaire
  const [formData, setFormData] = useState({
    clientName: '',
    clientLocation: '',
    clientPhoto: '',
    testimonialFr: '',
    testimonialEn: '',
    project: '',
    rating: 5,
    category: 'general' as 'couchage' | 'design' | 'glass' | 'general',
    featured: false,
    published: false,
    testimonialDate: new Date().toISOString().split('T')[0]
  });

  const handleEdit = (testimonial: any) => {
    setEditingId(testimonial.id);
    setFormData({
      clientName: testimonial.name || '',
      clientLocation: testimonial.location || '',
      clientPhoto: testimonial.avatar || '',
      testimonialFr: testimonial.content_fr || '',
      testimonialEn: testimonial.content_en || '',
      project: testimonial.project || '',
      rating: testimonial.rating || 5,
      category: testimonial.category || 'general',
      featured: testimonial.is_featured || false,
      published: testimonial.is_active || false,
      testimonialDate: testimonial.created_at?.split('T')[0] || new Date().toISOString().split('T')[0]
    });
    setIsAddingNew(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) return;

    const result = await deleteTestimonial(id);
    if (result.success) {
      toast.success('Témoignage supprimé avec succès');
      await refetch();
    } else {
      toast.error(result.error || 'Erreur lors de la suppression');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      const result = await updateTestimonial(editingId, { 
        name: formData.clientName,
        location: formData.clientLocation,
        avatar: formData.clientPhoto,
        content_fr: formData.testimonialFr,
        content_en: formData.testimonialEn,
        rating: formData.rating as 1 | 2 | 3 | 4 | 5,
        is_featured: formData.featured,
        is_active: formData.published,
        position: '',
        company: ''
      });
      if (result.success) {
        toast.success('Témoignage mis à jour avec succès');
        setIsAddingNew(false);
        setEditingId(null);
        resetForm();
        await refetch();
      } else {
        toast.error(result.error || 'Erreur lors de la mise à jour');
      }
    } else {
      const result = await createTestimonial({ 
        name: formData.clientName,
        location: formData.clientLocation,
        avatar: formData.clientPhoto,
        content_fr: formData.testimonialFr,
        content_en: formData.testimonialEn,
        rating: formData.rating as 1 | 2 | 3 | 4 | 5,
        is_featured: formData.featured,
        is_active: formData.published,
        position: '',
        company: ''
      });
      if (result.success) {
        toast.success('Témoignage créé avec succès');
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
      clientName: '',
      clientLocation: '',
      clientPhoto: '',
      testimonialFr: '',
      testimonialEn: '',
      project: '',
      rating: 5,
      category: 'general',
      featured: false,
      published: false,
      testimonialDate: new Date().toISOString().split('T')[0]
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Témoignages</h1>
            <p className="text-gray-600">Gérer les avis clients</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <p>Chargement des témoignages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Témoignages</h1>
            <p className="text-gray-600">Gérer les avis clients</p>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Témoignages</h1>
          <p className="text-gray-600">
            {testimonials.length} témoignage{testimonials.length > 1 ? 's' : ''} • Gérer les avis clients
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <TestimonialsInitButton />
          {!isAddingNew && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90"
              style={{ backgroundColor: '#B5C233' }}
            >
              <Plus className="w-5 h-5" />
              <span>Nouveau témoignage</span>
            </button>
          )}
        </div>
      </div>

      {/* Formulaire d'ajout/édition */}
      {isAddingNew && (
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {editingId ? 'Modifier le témoignage' : 'Nouveau témoignage'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations client */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du client *
                </label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localisation *
                </label>
                <input
                  type="text"
                  required
                  value={formData.clientLocation}
                  onChange={(e) => setFormData({ ...formData, clientLocation: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Abidjan, Côte d'Ivoire"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL (ou emoji)
                </label>
                <input
                  type="text"
                  value={formData.clientPhoto}
                  onChange={(e) => setFormData({ ...formData, clientPhoto: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="👤 ou URL"
                />
              </div>
            </div>

            {/* Témoignages */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Témoignage (Français) *
                </label>
                <textarea
                  required
                  value={formData.testimonialFr}
                  onChange={(e) => setFormData({ ...formData, testimonialFr: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Témoignage en français"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Témoignage (Anglais) *
                </label>
                <textarea
                  required
                  value={formData.testimonialEn}
                  onChange={(e) => setFormData({ ...formData, testimonialEn: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Témoignage en anglais"
                />
              </div>
            </div>

            {/* Projet et Note */}
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Projet / Produit
                </label>
                <input
                  type="text"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Matelas King Size Premium"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note *
                </label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={5}>5 étoiles</option>
                  <option value={4}>4 étoiles</option>
                  <option value={3}>3 étoiles</option>
                  <option value={2}>2 étoiles</option>
                  <option value={1}>1 étoile</option>
                </select>
              </div>
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
            </div>

            {/* Date */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.testimonialDate}
                  onChange={(e) => setFormData({ ...formData, testimonialDate: e.target.value })}
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

      {/* Liste des témoignages */}
      {testimonials.length === 0 ? (
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <Star className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">Aucun témoignage</p>
          <p className="text-sm">Commencez par créer votre premier témoignage</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Client</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Témoignage</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Note</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Catégorie</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {testimonials.map((testimonial) => (
                <tr key={testimonial.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      {testimonial.avatar && testimonial.avatar.startsWith('http') ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-10 h-10 object-cover"
                        />
                      ) : (
                        <div className="text-2xl">{testimonial.avatar || '👤'}</div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 max-w-xs">
                    <div className="text-sm text-gray-900 truncate">{testimonial.content_fr}</div>
                    {testimonial.project && (
                      <div className="text-xs text-green-600 font-medium mt-1">{testimonial.project}</div>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800">
                      {testimonial.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {testimonial.is_active ? (
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
                      {testimonial.is_featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">
                          ⭐ Vedette
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(testimonial)}
                        className="p-2 text-blue-600 hover:bg-blue-50"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
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
