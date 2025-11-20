import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, MapPin, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface Project {
  id: string;
  title: string;
  client_name: string;
  location: string;
  category: string;
  description: string;
  images: string[];
  date: string;
  is_featured: boolean;
  business_unit: 'couchage' | 'design' | 'univers-glass' | 'all';
  testimonial_text?: string;
  testimonial_author?: string;
  order_index: number;
}

export function CMSProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    client_name: '',
    location: '',
    category: '',
    description: '',
    images: [],
    date: new Date().toISOString().split('T')[0],
    is_featured: false,
    business_unit: 'all',
    testimonial_text: '',
    testimonial_author: '',
    order_index: 0,
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      // TODO: Charger depuis Supabase
      // Mock data pour l'instant
      setProjects([
        {
          id: '1',
          title: 'Hôtel Premium Dakar',
          client_name: 'Hôtel Terrou-Bi',
          location: 'Dakar, Sénégal',
          category: 'Hôtellerie',
          description: 'Équipement complet de 150 chambres avec matelas premium et mobilier sur mesure',
          images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
          date: '2024-01-15',
          is_featured: true,
          business_unit: 'couchage',
          testimonial_text: 'Un partenariat exceptionnel qui a transformé notre établissement',
          testimonial_author: 'Directeur Général',
          order_index: 1,
        },
        {
          id: '2',
          title: 'Menuiserie Corporate',
          client_name: 'Sonatel',
          location: 'Abidjan, Côte d\'Ivoire',
          category: 'Corporate',
          description: 'Aménagement de bureaux sur mesure pour 200 employés',
          images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
          date: '2024-02-20',
          is_featured: true,
          business_unit: 'design',
          testimonial_text: 'Un travail remarquable et professionnel',
          testimonial_author: 'Responsable des Achats',
          order_index: 2,
        },
        {
          id: '3',
          title: 'Façade Vitrée Moderne',
          client_name: 'Centre Commercial Sea Plaza',
          location: 'Dakar, Sénégal',
          category: 'Commercial',
          description: 'Installation de 500m² de façade vitrée aluminium',
          images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'],
          date: '2024-03-10',
          is_featured: false,
          business_unit: 'univers-glass',
          order_index: 3,
        },
      ]);
    } catch (error) {
      console.error('Erreur lors du chargement des projets:', error);
      toast.error('Erreur lors du chargement des projets');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Mise à jour
        setProjects(prev => prev.map(proj => 
          proj.id === editingId ? { ...proj, ...formData } as Project : proj
        ));
        toast.success('Projet mis à jour avec succès');
        setEditingId(null);
      } else {
        // Création
        const { id, ...projectData } = formData as Project;
        const newProject: Project = {
          id: Date.now().toString(),
          ...projectData,
        };
        setProjects(prev => [...prev, newProject]);
        toast.success('Projet créé avec succès');
        setIsCreating(false);
      }
      
      resetForm();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      toast.error('Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormData(project);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) return;
    
    try {
      setProjects(prev => prev.filter(proj => proj.id !== id));
      toast.success('Projet supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      client_name: '',
      location: '',
      category: '',
      description: '',
      images: [],
      date: new Date().toISOString().split('T')[0],
      is_featured: false,
      business_unit: 'all',
      testimonial_text: '',
      testimonial_author: '',
      order_index: 0,
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

  const handleImageUrlsChange = (value: string) => {
    const urls = value.split('\n').filter(url => url.trim());
    setFormData({ ...formData, images: urls });
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
          <h1 className="text-3xl text-gray-900 mb-2">Projets</h1>
          <p className="text-gray-600">Gérez vos réalisations clients et études de cas</p>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center space-x-2 px-4 py-2 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#B5C233' }}
        >
          <Plus className="w-5 h-5" />
          <span>Nouveau projet</span>
        </button>
      </div>

      {/* Formulaire de création/édition */}
      {(isCreating || editingId) && (
        <div className="mb-8 bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">
              {editingId ? 'Modifier le projet' : 'Nouveau projet'}
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
                  Titre du projet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Hôtel Premium Dakar"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client *
                </label>
                <input
                  type="text"
                  required
                  value={formData.client_name}
                  onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Hôtel Terrou-Bi"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localisation *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Dakar, Sénégal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie *
                </label>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Hôtellerie, Corporate, Résidentiel..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de réalisation
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Décrivez le projet..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URLs des images (une par ligne)
                </label>
                <textarea
                  value={formData.images?.join('\n') || ''}
                  onChange={(e) => handleImageUrlsChange(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 font-mono text-sm"
                  placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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

              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <h3 className="text-lg text-gray-900 mb-4">Témoignage client (optionnel)</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Citation
                    </label>
                    <textarea
                      value={formData.testimonial_text}
                      onChange={(e) => setFormData({ ...formData, testimonial_text: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                      placeholder="Le témoignage du client..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Auteur du témoignage
                    </label>
                    <input
                      type="text"
                      value={formData.testimonial_author}
                      onChange={(e) => setFormData({ ...formData, testimonial_author: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                      placeholder="Ex: Directeur Général"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Projet à la une (affiché en priorité)</span>
                </label>
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

      {/* Liste des projets */}
      <div className="bg-white border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Projet
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Métier
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500">
                  Date
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
              {projects
                .sort((a, b) => a.order_index - b.order_index)
                .map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {project.images && project.images.length > 0 ? (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-16 h-16 object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <div className="text-sm text-gray-900">{project.title}</div>
                        <div className="text-xs text-gray-500 flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{project.client_name}</div>
                    <div className="text-xs text-gray-500">{project.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {getBusinessUnitLabel(project.business_unit)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.date).toLocaleDateString('fr-FR')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.is_featured && (
                      <span className="inline-flex px-2 py-1 text-xs bg-yellow-100 text-yellow-800">
                        À la une
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
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
