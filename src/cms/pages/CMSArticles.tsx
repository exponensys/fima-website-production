import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, FileText } from 'lucide-react';
import { useBlogs, useBlogMutation } from '../../hooks/useBlogs';
import { toast } from 'sonner';
import { ArticlesInitButton } from '../components/ArticlesInitButton';
import { BlogFormModal } from '../components/BlogFormModal';

export function CMSArticles() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const { blogs, loading, error, refetch } = useBlogs('fr', undefined, false);
  const { createBlog, updateBlog, deleteBlog } = useBlogMutation();

  const handleEdit = (blog: any) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;

    const result = await deleteBlog(id);
    if (result.success) {
      toast.success('Article supprimé avec succès');
      await refetch();
    } else {
      toast.error(result.error || 'Erreur lors de la suppression');
    }
  };

  const handleSubmit = async (data: any) => {
    if (editingBlog) {
      const result = await updateBlog(editingBlog.id, data);
      if (result.success) {
        toast.success('Article mis à jour avec succès');
        setIsModalOpen(false);
        setEditingBlog(null);
        await refetch();
      } else {
        toast.error(result.error || 'Erreur lors de la mise à jour');
        throw new Error(result.error);
      }
    } else {
      const result = await createBlog(data);
      if (result.success) {
        toast.success('Article créé avec succès');
        setIsModalOpen(false);
        await refetch();
      } else {
        toast.error(result.error || 'Erreur lors de la création');
        throw new Error(result.error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingBlog(null);
  };

  const handleNewArticle = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Actualités & Blog</h1>
            <p className="text-gray-600">Gérer les articles</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <p>Chargement des articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Actualités & Blog</h1>
            <p className="text-gray-600">Gérer les articles</p>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Actualités & Blog</h1>
          <p className="text-gray-600">
            {blogs.length} article{blogs.length > 1 ? 's' : ''} • Gérer le contenu éditorial
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <ArticlesInitButton />
          <button
            onClick={handleNewArticle}
            className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90"
            style={{ backgroundColor: '#B5C233' }}
          >
            <Plus className="w-5 h-5" />
            <span>Nouvel article</span>
          </button>
        </div>
      </div>

      {/* Modal de formulaire */}
      <BlogFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={editingBlog}
        isEditing={!!editingBlog}
      />

      {/* Liste des articles */}
      {blogs.length === 0 ? (
        <div className="bg-white border border-gray-200 p-12 text-center text-gray-500">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">Aucun article</p>
          <p className="text-sm">Créez votre premier article pour commencer</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Titre</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Catégorie</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Auteur</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-start space-x-3">
                      {blog.featuredImage && (
                        <img
                          src={blog.featuredImage}
                          alt={blog.titleFr}
                          className="w-16 h-16 object-cover"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate">{blog.titleFr}</div>
                        <div className="text-sm text-gray-500 truncate">{blog.titleEn}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {blog.readTime} min • {blog.tags?.length || 0} tags
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                      {blog.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{blog.author}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {new Date(blog.publishedDate || blog.createdAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="py-3 px-4">
                    {blog.published ? (
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
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="p-2 text-blue-600 hover:bg-blue-50"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
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
