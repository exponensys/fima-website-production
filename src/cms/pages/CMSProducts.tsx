import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import { useProducts, useProductMutation } from '../../hooks/useProducts';
import { AddProductModal } from '../components/AddProductModal';
import { EditProductModal } from '../components/EditProductModal';
import type { Product } from '../../hooks/useProducts';
import { toast } from 'sonner@2.0.3';

export function CMSProducts() {
  const [businessFilter, setBusinessFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  
  const { products, loading, error } = useProducts(
    businessFilter === 'all' ? undefined : businessFilter,
    undefined,
    false,
    refreshKey,
    true // includeInactive = true pour le CMS
  );

  const { deleteProduct } = useProductMutation();

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductUpdated = () => {
    setRefreshKey(prev => prev + 1);
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const handleProductAdded = () => {
    setRefreshKey(prev => prev + 1);
    setIsAddModalOpen(false);
  };

  const handleProductDeleted = async (productId: string, productName: string) => {
    // Demander confirmation avant suppression
    const confirmed = window.confirm(
      `Êtes-vous sûr de vouloir supprimer le produit "${productName}" ?\n\nCette action est irréversible.`
    );
    
    if (!confirmed) {
      return;
    }

    try {
      const result = await deleteProduct(productId);
      
      if (result.success) {
        setRefreshKey(prev => prev + 1);
        toast.success('Produit supprimé avec succès');
      } else {
        toast.error(result.error || 'Erreur lors de la suppression du produit');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      toast.error('Erreur lors de la suppression du produit');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Catalogue Produits</h1>
          <p className="text-gray-600">{products.length} produits au total</p>
        </div>
        <button
          className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#B5C233' }}
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus className="w-5 h-5" />
          <span>Nouveau produit</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
            />
          </div>

          {/* Business Unit Filter */}
          <select
            value={businessFilter}
            onChange={(e) => setBusinessFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
          >
            <option value="all">Tous les métiers</option>
            <option value="fima-couchage">FIMA Couchage</option>
            <option value="fima-design">FIMA Design</option>
            <option value="univers-glass">Univers Glass</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Produit</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Catégorie</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Prix</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Stock</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Statut</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                  Chargement...
                </td>
              </tr>
            ) : filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                  Aucun produit trouvé
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="w-16 h-16 bg-gray-100 flex items-center justify-center overflow-hidden">
                      {product.images && product.images[0] ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 text-xs">No image</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-500 line-clamp-1">{product.shortDescription}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{product.price.toLocaleString()} FCFA</p>
                      {product.compareAtPrice && (
                        <p className="text-sm text-gray-500 line-through">
                          {product.compareAtPrice.toLocaleString()} FCFA
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${
                      product.stock > (product.lowStockThreshold || 10)
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}>
                      {product.stock} {product.unit}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs text-white ${
                      product.status === 'active'
                        ? 'bg-green-600'
                        : product.status === 'inactive'
                        ? 'bg-gray-600'
                        : 'bg-red-600'
                    }`}>
                      {product.status === 'active' ? 'Actif' : product.status === 'inactive' ? 'Inactif' : 'Rupture'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsEditModalOpen(true);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 transition-colors"
                        onClick={() => handleProductDeleted(product.id, product.name)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onProductAdded={handleProductAdded}
      />

      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        product={selectedProduct}
        onProductUpdated={handleProductUpdated}
      />
    </div>
  );
}