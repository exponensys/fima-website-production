import { useState, useEffect } from 'react';
import { X, Upload, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useCMSCategories } from '../../hooks/useCMSCategories';
import { useProductMutation, type ProductVariation } from '../../hooks/useProducts';
import { RichTextEditor } from './RichTextEditor';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductAdded: () => void;
}

export function AddProductModal({ isOpen, onClose, onProductAdded }: AddProductModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    category: '',
    business: 'fima-couchage',
    price: 0,
    compareAtPrice: 0,
    currency: 'FCFA', // Devise par défaut pour le marché ouest-africain
    stock: 0,
    lowStockThreshold: 10,
    unit: 'pièce',
    shortDescription: '',
    description: '',
    tagline: '', // Nouveau champ Tagline
    features: '', // Nouveau champ Caractéristiques
    benefits: [] as string[], // Nouveau champ Bénéfices (multiselect)
    isCustom: false, // Nouveau champ : Produit sur mesure
    images: [] as string[],
    status: 'active' as 'active' | 'inactive' | 'out-of-stock',
    specifications: {} as Record<string, any>,
    variations: [] as ProductVariation[]
  });

  const [imageUrl, setImageUrl] = useState('');
  const [newVariation, setNewVariation] = useState({
    name: '',
    price: 0,
    stock: 0,
    sku: '',
    compareAtPrice: 0
  });
  const { categories, loading } = useCMSCategories();
  const { createProduct } = useProductMutation();

  // Mapper business_unit vers business
  const businessMapping: Record<string, string> = {
    'couchage': 'fima-couchage',
    'design': 'fima-design',
    'univers-glass': 'univers-glass'
  };

  // Obtenir les catégories disponibles pour le métier sélectionné
  const availableCategories = categories.filter(cat => {
    if (cat.business_unit === 'all') return true;
    return businessMapping[cat.business_unit] === formData.business;
  }).filter(cat => cat.is_active);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        sku: '',
        category: '',
        business: 'fima-couchage',
        price: 0,
        compareAtPrice: 0,
        currency: 'FCFA', // Devise par défaut pour le marché ouest-africain
        stock: 0,
        lowStockThreshold: 10,
        unit: 'pièce',
        shortDescription: '',
        description: '',
        tagline: '', // Nouveau champ Tagline
        features: '', // Nouveau champ Caractéristiques
        benefits: [] as string[], // Nouveau champ Bénéfices (multiselect)
        isCustom: false, // Nouveau champ : Produit sur mesure
        images: [],
        status: 'active',
        specifications: {},
        variations: []
      });
      setImageUrl('');
      setNewVariation({
        name: '',
        price: 0,
        stock: 0,
        sku: '',
        compareAtPrice: 0
      });
    }
  }, [isOpen]);

  // Générer un SKU automatique basé sur le nom et la catégorie
  const generateSKU = () => {
    const businessPrefix = formData.business === 'fima-couchage' ? 'FC' : 
                          formData.business === 'fima-design' ? 'FD' : 'UG';
    const categoryPrefix = formData.category.substring(0, 3).toUpperCase();
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${businessPrefix}-${categoryPrefix}-${randomNum}`;
  };

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl.trim()]
      }));
      setImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleAddVariation = () => {
    if (newVariation.name.trim() && newVariation.price >= 0 && newVariation.stock >= 0) {
      setFormData(prev => ({
        ...prev,
        variations: [...prev.variations, { ...newVariation, id: crypto.randomUUID() }]
      }));
      setNewVariation({
        name: '',
        price: 0,
        stock: 0,
        sku: '',
        compareAtPrice: 0
      });
    } else {
      toast.error('Veuillez remplir tous les champs de la variation');
    }
  };

  const handleRemoveVariation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      variations: prev.variations.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast.error('Le nom du produit est requis');
      return;
    }
    
    if (!formData.category) {
      toast.error('Veuillez sélectionner une catégorie');
      return;
    }

    if (formData.price < 0) {
      toast.error('Le prix ne peut pas être négatif');
      return;
    }

    try {
      // Générer un SKU si non fourni
      const sku = formData.sku.trim() || generateSKU();

      // Préparer les données du produit
      const productData: any = {
        name: formData.name.trim(),
        sku,
        category: formData.category,
        business: formData.business,
        price: Number(formData.price),
        compareAtPrice: formData.compareAtPrice > 0 ? Number(formData.compareAtPrice) : undefined,
        currency: formData.currency, // Ajouter la devise
        stock: Number(formData.stock),
        lowStockThreshold: Number(formData.lowStockThreshold),
        unit: formData.unit,
        shortDescription: formData.shortDescription || '',
        description: formData.description || '',
        tagline: formData.tagline || '', // Nouveau champ Tagline
        features: formData.features || '', // Nouveau champ Caractéristiques
        benefits: formData.benefits || [], // Nouveau champ Bénéfices (multiselect)
        isCustom: formData.isCustom || false, // Nouveau champ : Produit sur mesure
        images: formData.images,
        status: formData.status,
        specifications: formData.specifications,
        tags: [],
        featured: false,
        variations: formData.variations.map(variation => ({
          name: variation.name,
          price: Number(variation.price),
          stock: Number(variation.stock),
          sku: variation.sku || generateSKU(),
          compareAtPrice: (variation.compareAtPrice && variation.compareAtPrice > 0) ? Number(variation.compareAtPrice) : undefined
        }))
      };

      // Envoyer au serveur Supabase via le hook
      const result = await createProduct(productData);

      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de l\'ajout du produit');
      }
      
      toast.success('Produit ajouté avec succès !');
      onProductAdded();
      onClose();
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors de l\'ajout du produit');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Nouveau Produit</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Métier */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Métier *
            </label>
            <select
              value={formData.business}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                business: e.target.value,
                category: '' // Reset category when business changes
              }))}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
              required
            >
              <option value="fima-couchage">FIMA Couchage</option>
              <option value="fima-design">FIMA Design</option>
              <option value="univers-glass">Univers Glass</option>
            </select>
          </div>

          {/* Catégorie */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Catégorie *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
              required
              disabled={loading}
            >
              <option value="">
                {loading ? 'Chargement des catégories...' : 'Sélectionner une catégorie'}
              </option>
              {availableCategories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.icon_emoji} {cat.name}
                </option>
              ))}
            </select>
            {availableCategories.length === 0 && !loading && (
              <p className="text-xs text-gray-500 mt-1">
                Aucune catégorie disponible pour ce métier. Créez-en une dans le module Catégories.
              </p>
            )}
          </div>

          {/* Nom du produit */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nom du produit *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
              placeholder="Ex: Matelas Confort Premium"
              required
            />
          </div>

          {/* SKU */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              SKU (Référence)
            </label>
            <input
              type="text"
              value={formData.sku}
              onChange={(e) => setFormData(prev => ({ ...prev, sku: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
              placeholder="Laissez vide pour génération automatique"
            />
            <p className="text-xs text-gray-500 mt-1">Si non renseigné, un SKU sera généré automatiquement</p>
          </div>

          {/* Description courte */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Description courte
            </label>
            <input
              type="text"
              value={formData.shortDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
              placeholder="Brève description affichée dans les listes"
            />
          </div>

          {/* Description complète */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Description complète
            </label>
            <RichTextEditor
              value={formData.description}
              onChange={(value) => setFormData(prev => ({ ...prev, description: value }))}
              placeholder="Description détaillée du produit"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Tagline
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
              placeholder="Phrase accrocheuse pour le produit"
            />
          </div>

          {/* Caractéristiques */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Caractéristiques
            </label>
            <RichTextEditor
              value={formData.features}
              onChange={(value) => setFormData(prev => ({ ...prev, features: value }))}
              placeholder="Caractéristiques techniques du produit"
            />
          </div>

          {/* Bénéfices */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Bénéfices
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border border-gray-300 bg-gray-50">
              {[
                'Confort optimal',
                'Qualité certifiée',
                'Durabilité garantie',
                'Santé du dos',
                'Livraison rapide',
                "Conseils d'experts"
              ].map((benefit) => (
                <label key={benefit} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.benefits.includes(benefit)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData(prev => ({
                          ...prev,
                          benefits: [...prev.benefits, benefit]
                        }));
                      } else {
                        setFormData(prev => ({
                          ...prev,
                          benefits: prev.benefits.filter(b => b !== benefit)
                        }));
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-[#B5C233] focus:ring-[#B5C233]"
                  />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Option Sur mesure */}
          <div className="bg-blue-50 border border-blue-200 p-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isCustom}
                onChange={(e) => setFormData(prev => ({ ...prev, isCustom: e.target.checked }))}
                className="w-5 h-5 text-[#B5C233] border-gray-300 focus:ring-[#B5C233]"
              />
              <div>
                <span className="text-sm font-semibold text-gray-900">Produit sur mesure</span>
                <p className="text-xs text-gray-600">
                  Le prix ne sera pas affiché. Un bouton "Contacter service commercial" apparaîtra à la place.
                </p>
              </div>
            </label>
          </div>

          {/* Prix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Devise *
              </label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData(prev => ({ ...prev, currency: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                required={!formData.isCustom}
                disabled={formData.isCustom}
              >
                <option value="FCFA">FCFA (Franc CFA)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="USD">USD (Dollar)</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                {formData.isCustom ? 'Non applicable pour les produits sur mesure' : 'Devise dans laquelle vous saisissez le prix'}
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Prix {!formData.isCustom && '*'}
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233] disabled:bg-gray-100 disabled:cursor-not-allowed"
                min="0"
                step="100"
                required={!formData.isCustom}
                disabled={formData.isCustom}
              />
              {formData.isCustom && (
                <p className="text-xs text-gray-500 mt-1">
                  Prix sur devis
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Prix barré
              </label>
              <input
                type="number"
                value={formData.compareAtPrice}
                onChange={(e) => setFormData(prev => ({ ...prev, compareAtPrice: Number(e.target.value) }))}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233] disabled:bg-gray-100 disabled:cursor-not-allowed"
                min="0"
                step="100"
                disabled={formData.isCustom}
              />
            </div>
          </div>

          {/* Stock */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Stock *
              </label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData(prev => ({ ...prev, stock: Number(e.target.value) }))}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                min="-1"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Saisissez -1 pour un stock illimité
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Seuil d'alerte
              </label>
              <input
                type="number"
                value={formData.lowStockThreshold}
                onChange={(e) => setFormData(prev => ({ ...prev, lowStockThreshold: Number(e.target.value) }))}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Unité
              </label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
              >
                <option value="pièce">pièce</option>
                <option value="m²">m²</option>
                <option value="ml">ml</option>
                <option value="lot">lot</option>
              </select>
            </div>
          </div>

          {/* Statut */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Statut
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
            >
              <option value="active">Actif</option>
              <option value="inactive">Inactif</option>
              <option value="out-of-stock">Rupture de stock</option>
            </select>
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Images
            </label>
            <div className="space-y-3">
              {/* Image list */}
              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt={`Image ${index + 1}`}
                        className="w-full h-24 object-cover border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 p-1 bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Add image */}
              <div className="flex gap-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                  placeholder="URL de l'image (Unsplash, etc.)"
                />
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="px-4 py-2 text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#B5C233' }}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Variations */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Variations (ex: différentes tailles avec prix différents)
            </label>
            <p className="text-xs text-gray-500 mb-3">
              Les variations permettent de proposer le même produit avec différentes options (tailles, dimensions, etc.) et des prix spécifiques pour chaque option.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-3 rounded mb-3">
              <p className="text-xs text-blue-800">
                <strong>💡 Comment ça fonctionne :</strong><br/>
                • Si vous ajoutez des variations, le client pourra choisir entre les différentes options sur la page produit<br/>
                • Le prix affiché changera automatiquement selon l'option sélectionnée<br/>
                • Si aucune variation n'est sélectionnée par défaut, le prix de base du produit sera affiché<br/>
                • Chaque variation peut avoir son propre stock (ou stock illimité avec -1)
              </p>
            </div>
            <div className="space-y-3">
              {/* Variation list */}
              {formData.variations.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  {formData.variations.map((variation, index) => (
                    <div key={index} className="relative group border border-gray-200 p-3">
                      <p className="text-sm font-semibold text-gray-900">{variation.name}</p>
                      <p className="text-xs text-gray-600">Prix: {variation.price.toLocaleString()} {formData.currency}</p>
                      <p className="text-xs text-gray-600">
                        Stock: {variation.stock === -1 ? 'Illimité' : `${variation.stock} ${formData.unit}`}
                      </p>
                      {variation.sku && <p className="text-xs text-gray-500">SKU: {variation.sku}</p>}
                      {variation.compareAtPrice && variation.compareAtPrice > 0 && (
                        <p className="text-xs text-gray-500 line-through">Prix barré: {variation.compareAtPrice.toLocaleString()} {formData.currency}</p>
                      )}
                      <button
                        type="button"
                        onClick={() => handleRemoveVariation(index)}
                        className="absolute top-2 right-2 p-1 bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Add variation form */}
              <div className="border border-gray-300 p-4 bg-gray-50">
                <p className="text-sm font-semibold text-gray-900 mb-3">Ajouter une variation</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Nom de la variation *
                    </label>
                    <input
                      type="text"
                      value={newVariation.name}
                      onChange={(e) => setNewVariation(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                      placeholder="Ex: 1 place (90x190 cm)"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Prix *
                    </label>
                    <input
                      type="number"
                      value={newVariation.price}
                      onChange={(e) => setNewVariation(prev => ({ ...prev, price: Number(e.target.value) }))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                      placeholder="Ex: 150000"
                      min="0"
                      step="100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Stock *
                    </label>
                    <input
                      type="number"
                      value={newVariation.stock}
                      onChange={(e) => setNewVariation(prev => ({ ...prev, stock: Number(e.target.value) }))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                      placeholder="Ex: 10"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Prix barré (optionnel)
                    </label>
                    <input
                      type="number"
                      value={newVariation.compareAtPrice}
                      onChange={(e) => setNewVariation(prev => ({ ...prev, compareAtPrice: Number(e.target.value) }))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                      placeholder="Ex: 200000"
                      min="0"
                      step="100"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      SKU (optionnel)
                    </label>
                    <input
                      type="text"
                      value={newVariation.sku}
                      onChange={(e) => setNewVariation(prev => ({ ...prev, sku: e.target.value }))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5C233]"
                      placeholder="Laissez vide pour génération automatique"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleAddVariation}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#B5C233' }}
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter cette variation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#B5C233' }}
            >
              Ajouter le produit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}