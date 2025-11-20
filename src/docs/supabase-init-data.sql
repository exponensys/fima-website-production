-- ==========================================
-- FIMA Supabase - Script d'initialisation
-- ==========================================
-- Ce script crée les tables et insère des données de test
-- Exécuter dans Supabase SQL Editor

-- ==========================================
-- 1. CRÉATION DES TABLES
-- ==========================================

-- Table: business_units
CREATE TABLE IF NOT EXISTS business_units (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR UNIQUE NOT NULL,
  primary_color VARCHAR DEFAULT '#B5C233',
  icon_name VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table: business_units_i18n
CREATE TABLE IF NOT EXISTS business_units_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_unit_id UUID REFERENCES business_units(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  name VARCHAR NOT NULL,
  description TEXT,
  UNIQUE(business_unit_id, locale)
);

-- Table: products
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_unit_id UUID REFERENCES business_units(id),
  slug VARCHAR UNIQUE NOT NULL,
  price_eur DECIMAL NOT NULL,
  price_fcfa DECIMAL GENERATED ALWAYS AS (price_eur * 655.957) STORED,
  is_b2b_only BOOLEAN DEFAULT FALSE,
  minimum_order_qty INTEGER DEFAULT 1,
  images JSONB DEFAULT '[]',
  specifications JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table: products_i18n
CREATE TABLE IF NOT EXISTS products_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  name VARCHAR NOT NULL,
  description TEXT,
  category VARCHAR,
  subcategory VARCHAR,
  specifications_translated JSONB DEFAULT '{}',
  UNIQUE(product_id, locale)
);

-- Table: social_proofs
CREATE TABLE IF NOT EXISTS social_proofs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type VARCHAR CHECK (type IN ('testimonial', 'case_study', 'certification')),
  business_unit_id UUID REFERENCES business_units(id),
  client_name VARCHAR,
  client_location VARCHAR,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  project_value DECIMAL,
  completion_date DATE,
  images JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table: social_proofs_i18n
CREATE TABLE IF NOT EXISTS social_proofs_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  social_proof_id UUID REFERENCES social_proofs(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  content TEXT,
  UNIQUE(social_proof_id, locale)
);

-- Table: quotes
CREATE TABLE IF NOT EXISTS quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  business_unit_id UUID REFERENCES business_units(id),
  status VARCHAR CHECK (status IN ('pending', 'processing', 'completed', 'cancelled')) DEFAULT 'pending',
  estimated_budget DECIMAL,
  contact_preferences JSONB DEFAULT '{}',
  preferred_language VARCHAR DEFAULT 'fr' CHECK (preferred_language IN ('fr', 'en')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table: quotes_i18n
CREATE TABLE IF NOT EXISTS quotes_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_id UUID REFERENCES quotes(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  project_type VARCHAR,
  requirements TEXT,
  UNIQUE(quote_id, locale)
);

-- Table: expert_consultations
CREATE TABLE IF NOT EXISTS expert_consultations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  business_unit_id UUID REFERENCES business_units(id),
  consultation_type VARCHAR CHECK (consultation_type IN ('expert', 'appointment')),
  preferred_datetime TIMESTAMP,
  topic VARCHAR,
  description TEXT,
  status VARCHAR CHECK (status IN ('pending', 'scheduled', 'completed', 'cancelled')) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table: profiles
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  business_type VARCHAR CHECK (business_type IN ('b2c', 'b2b', 'both')),
  company_name VARCHAR,
  company_size VARCHAR CHECK (company_size IN ('startup', 'sme', 'enterprise')),
  annual_revenue DECIMAL,
  preferred_currency VARCHAR DEFAULT 'XOF',
  preferred_language VARCHAR DEFAULT 'fr' CHECK (preferred_language IN ('fr', 'en')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ==========================================
-- 2. INSERTION DES BUSINESS UNITS
-- ==========================================

-- Insertion des 3 métiers FIMA
INSERT INTO business_units (slug, primary_color, icon_name) VALUES
('fima-couchage', '#B5C233', 'bed'),
('fima-design', '#6E6E6E', 'wrench'),
('univers-glass', '#0EA5E9', 'building')
ON CONFLICT (slug) DO NOTHING;

-- Traductions françaises
INSERT INTO business_units_i18n (business_unit_id, locale, name, description)
SELECT id, 'fr', 
  CASE slug
    WHEN 'fima-couchage' THEN 'FIMA Couchage'
    WHEN 'fima-design' THEN 'FIMA Design'
    WHEN 'univers-glass' THEN 'UNIVERS GLASS'
  END,
  CASE slug
    WHEN 'fima-couchage' THEN 'Literie et matelas professionnels depuis 1985'
    WHEN 'fima-design' THEN 'Menuiserie et ameublement sur mesure'
    WHEN 'univers-glass' THEN 'Vitrerie et solutions aluminium haut de gamme'
  END
FROM business_units
ON CONFLICT (business_unit_id, locale) DO NOTHING;

-- Traductions anglaises
INSERT INTO business_units_i18n (business_unit_id, locale, name, description)
SELECT id, 'en',
  CASE slug
    WHEN 'fima-couchage' THEN 'FIMA Bedding'
    WHEN 'fima-design' THEN 'FIMA Design'
    WHEN 'univers-glass' THEN 'UNIVERS GLASS'
  END,
  CASE slug
    WHEN 'fima-couchage' THEN 'Professional bedding and mattresses since 1985'
    WHEN 'fima-design' THEN 'Custom carpentry and furniture'
    WHEN 'univers-glass' THEN 'High-end glazing and aluminum solutions'
  END
FROM business_units
ON CONFLICT (business_unit_id, locale) DO NOTHING;

-- ==========================================
-- 3. INSERTION DES PRODUITS (EXEMPLES)
-- ==========================================

-- Produits FIMA Couchage
DO $$
DECLARE
  bu_id UUID;
  prod_id UUID;
BEGIN
  -- Récupérer l'ID de FIMA Couchage
  SELECT id INTO bu_id FROM business_units WHERE slug = 'fima-couchage';
  
  -- Matelas Premium 140x190
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images, specifications)
  VALUES (
    bu_id,
    'matelas-premium-140x190',
    299.99,
    false,
    1,
    '["https://images.unsplash.com/photo-1648634158203-199accfd7afc?w=1080"]'::jsonb,
    '{"firmness": "medium", "thickness": "25cm", "warranty": "10 years"}'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Matelas Premium 140x190', 'Matelas ressorts ensachés haute qualité avec 7 zones de confort', 'matelas', 'premium'),
    (prod_id, 'en', 'Premium Mattress 140x190', 'High-quality pocket spring mattress with 7 comfort zones', 'mattress', 'premium');

  -- Matelas Luxe 160x200
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images, specifications)
  VALUES (
    bu_id,
    'matelas-luxe-160x200',
    499.99,
    false,
    1,
    '["https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?w=1080"]'::jsonb,
    '{"firmness": "firm", "thickness": "30cm", "warranty": "15 years"}'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Matelas Luxe 160x200', 'Matelas mémoire de forme avec gel refroidissant pour un confort optimal', 'matelas', 'luxe'),
    (prod_id, 'en', 'Luxury Mattress 160x200', 'Memory foam mattress with cooling gel for optimal comfort', 'mattress', 'luxury');

  -- Oreiller Ergonomique
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images)
  VALUES (
    bu_id,
    'oreiller-ergonomique',
    49.99,
    false,
    1,
    '["https://images.unsplash.com/photo-1673201102066-b0599d45002b?w=1080"]'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Oreiller Ergonomique', 'Oreiller mémoire de forme pour un soutien cervical optimal', 'oreillers', 'ergonomique'),
    (prod_id, 'en', 'Ergonomic Pillow', 'Memory foam pillow for optimal neck support', 'pillows', 'ergonomic');

  -- Sommier Tapissier
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images)
  VALUES (
    bu_id,
    'sommier-tapissier-140x190',
    199.99,
    false,
    1,
    '["https://images.unsplash.com/photo-1648634158203-199accfd7afc?w=1080"]'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Sommier Tapissier 140x190', 'Sommier tapissier à lattes recouvert, hauteur 15cm', 'sommiers', 'tapissier'),
    (prod_id, 'en', 'Upholstered Box Spring 140x190', 'Upholstered slatted box spring, height 15cm', 'box-springs', 'upholstered');
END $$;

-- Produits FIMA Design
DO $$
DECLARE
  bu_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO bu_id FROM business_units WHERE slug = 'fima-design';
  
  -- Cuisine Sur Mesure
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images)
  VALUES (
    bu_id,
    'cuisine-sur-mesure-premium',
    8999.99,
    true,
    1,
    '["https://images.unsplash.com/photo-1715582888577-403297f39fef?w=1080"]'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Cuisine Sur Mesure Premium', 'Cuisine équipée sur mesure, design contemporain, bois noble', 'cuisines', 'premium'),
    (prod_id, 'en', 'Premium Custom Kitchen', 'Custom fitted kitchen, contemporary design, premium wood', 'kitchens', 'premium');

  -- Dressing Sur Mesure
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images)
  VALUES (
    bu_id,
    'dressing-sur-mesure',
    3499.99,
    false,
    1,
    '["https://images.unsplash.com/photo-1675528030415-dc82908eeb73?w=1080"]'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Dressing Sur Mesure', 'Dressing modulable sur mesure avec portes coulissantes', 'dressings', 'modulable'),
    (prod_id, 'en', 'Custom Wardrobe', 'Custom modular wardrobe with sliding doors', 'wardrobes', 'modular');
END $$;

-- Produits UNIVERS GLASS
DO $$
DECLARE
  bu_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO bu_id FROM business_units WHERE slug = 'univers-glass';
  
  -- Fenêtre Aluminium
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images)
  VALUES (
    bu_id,
    'fenetre-aluminium-double-vitrage',
    599.99,
    true,
    5,
    '["https://images.unsplash.com/photo-1581432304608-f0d685f08848?w=1080"]'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Fenêtre Aluminium Double Vitrage', 'Fenêtre aluminium haute performance, double vitrage isolant', 'fenetres', 'aluminium'),
    (prod_id, 'en', 'Aluminum Double Glazed Window', 'High-performance aluminum window, insulating double glazing', 'windows', 'aluminum');

  -- Porte Vitrée
  INSERT INTO products (business_unit_id, slug, price_eur, is_b2b_only, minimum_order_qty, images)
  VALUES (
    bu_id,
    'porte-vitree-coulissante',
    1299.99,
    true,
    2,
    '["https://images.unsplash.com/photo-1634302311441-4eadffbd2819?w=1080"]'::jsonb
  )
  RETURNING id INTO prod_id;
  
  INSERT INTO products_i18n (product_id, locale, name, description, category, subcategory)
  VALUES 
    (prod_id, 'fr', 'Porte Vitrée Coulissante', 'Porte coulissante vitrée aluminium, verre sécurit', 'portes', 'vitree'),
    (prod_id, 'en', 'Sliding Glass Door', 'Aluminum sliding glass door, tempered glass', 'doors', 'glass');
END $$;

-- ==========================================
-- 4. INSERTION DES TÉMOIGNAGES
-- ==========================================

DO $$
DECLARE
  bu_id UUID;
  proof_id UUID;
BEGIN
  -- Témoignage FIMA Couchage
  SELECT id INTO bu_id FROM business_units WHERE slug = 'fima-couchage';
  
  INSERT INTO social_proofs (type, business_unit_id, client_name, client_location, rating, project_value, is_featured)
  VALUES ('testimonial', bu_id, 'Hôtel des Oliviers', 'Dakar, Sénégal', 5, 45000, true)
  RETURNING id INTO proof_id;
  
  INSERT INTO social_proofs_i18n (social_proof_id, locale, content)
  VALUES 
    (proof_id, 'fr', 'FIMA a transformé notre établissement avec un mobilier de qualité exceptionnelle. Nos clients remarquent immédiatement la différence de confort. Service impeccable !'),
    (proof_id, 'en', 'FIMA transformed our establishment with exceptional quality furniture. Our guests immediately notice the difference in comfort. Impeccable service!');

  -- Témoignage FIMA Design
  SELECT id INTO bu_id FROM business_units WHERE slug = 'fima-design';
  
  INSERT INTO social_proofs (type, business_unit_id, client_name, client_location, rating, project_value, is_featured)
  VALUES ('testimonial', bu_id, 'TechCorp Africa', 'Abidjan, Côte d\'Ivoire', 5, 120000, true)
  RETURNING id INTO proof_id;
  
  INSERT INTO social_proofs_i18n (social_proof_id, locale, content)
  VALUES 
    (proof_id, 'fr', 'Nos nouveaux espaces de travail ont révolutionné l\'ambiance de l\'entreprise. Design moderne et fonctionnalité parfaite. Équipe très professionnelle.'),
    (proof_id, 'en', 'Our new workspaces have revolutionized the company atmosphere. Modern design and perfect functionality. Very professional team.');

  -- Témoignage UNIVERS GLASS
  SELECT id INTO bu_id FROM business_units WHERE slug = 'univers-glass';
  
  INSERT INTO social_proofs (type, business_unit_id, client_name, client_location, rating, project_value, is_featured)
  VALUES ('testimonial', bu_id, 'Résidence Palmiers', 'Lomé, Togo', 5, 85000, true)
  RETURNING id INTO proof_id;
  
  INSERT INTO social_proofs_i18n (social_proof_id, locale, content)
  VALUES 
    (proof_id, 'fr', 'Projet de façade vitrée réalisé dans les délais avec une qualité irréprochable. UNIVERS GLASS a su répondre à toutes nos exigences techniques.'),
    (proof_id, 'en', 'Glass facade project completed on time with impeccable quality. UNIVERS GLASS met all our technical requirements.');

  -- Case Study
  SELECT id INTO bu_id FROM business_units WHERE slug = 'fima-couchage';
  
  INSERT INTO social_proofs (type, business_unit_id, client_name, client_location, rating, project_value, completion_date, is_featured, images)
  VALUES (
    'case_study', 
    bu_id, 
    'Hôtel Royal Palace', 
    'Bamako, Mali', 
    5, 
    250000, 
    '2024-11-15',
    true,
    '["https://images.unsplash.com/photo-1632598024410-3d8f24daab57?w=1080"]'::jsonb
  )
  RETURNING id INTO proof_id;
  
  INSERT INTO social_proofs_i18n (social_proof_id, locale, content)
  VALUES 
    (proof_id, 'fr', 'Aménagement complet de 120 chambres avec literie premium. Projet réalisé en 4 mois incluant la livraison et l\'installation. Satisfaction client 100%.'),
    (proof_id, 'en', 'Complete furnishing of 120 rooms with premium bedding. Project completed in 4 months including delivery and installation. 100% customer satisfaction.');
END $$;

-- ==========================================
-- 5. CERTIFICATIONS
-- ==========================================

DO $$
DECLARE
  proof_id UUID;
BEGIN
  -- Certification Qualité ISO
  INSERT INTO social_proofs (type, client_name, client_location, rating, is_featured)
  VALUES ('certification', 'ISO 9001:2015', 'International', 5, true)
  RETURNING id INTO proof_id;
  
  INSERT INTO social_proofs_i18n (social_proof_id, locale, content)
  VALUES 
    (proof_id, 'fr', 'Certification ISO 9001:2015 pour la qualité de nos processus de fabrication et de service client.'),
    (proof_id, 'en', 'ISO 9001:2015 certification for the quality of our manufacturing and customer service processes.');

  -- Label EPV
  INSERT INTO social_proofs (type, client_name, client_location, rating, is_featured)
  VALUES ('certification', 'Entreprise du Patrimoine Vivant', 'France', 5, true)
  RETURNING id INTO proof_id;
  
  INSERT INTO social_proofs_i18n (social_proof_id, locale, content)
  VALUES 
    (proof_id, 'fr', 'Label EPV reconnaissant notre savoir-faire d\'excellence et notre engagement dans la préservation des métiers traditionnels.'),
    (proof_id, 'en', 'EPV label recognizing our excellence and commitment to preserving traditional crafts.');
END $$;

-- ==========================================
-- 6. ACTIVER RLS (Row Level Security)
-- ==========================================

-- Activer RLS sur toutes les tables
ALTER TABLE business_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_units_i18n ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE products_i18n ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_proofs ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_proofs_i18n ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes_i18n ENABLE ROW LEVEL SECURITY;
ALTER TABLE expert_consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Politiques de lecture publique pour les tables de référence
CREATE POLICY "Public read access" ON business_units FOR SELECT USING (true);
CREATE POLICY "Public read access" ON business_units_i18n FOR SELECT USING (true);
CREATE POLICY "Public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access" ON products_i18n FOR SELECT USING (true);
CREATE POLICY "Public read access" ON social_proofs FOR SELECT USING (true);
CREATE POLICY "Public read access" ON social_proofs_i18n FOR SELECT USING (true);

-- Politiques pour les quotes (utilisateur peut voir ses propres devis)
CREATE POLICY "Users can view own quotes" ON quotes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create quotes" ON quotes FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own quote translations" ON quotes_i18n FOR SELECT 
  USING (quote_id IN (SELECT id FROM quotes WHERE user_id = auth.uid()));

-- Politiques pour les consultations
CREATE POLICY "Users can view own consultations" ON expert_consultations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create consultations" ON expert_consultations FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Politiques pour les profils
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ==========================================
-- 7. INDEX POUR PERFORMANCE
-- ==========================================

-- Index sur les colonnes de recherche fréquentes
CREATE INDEX IF NOT EXISTS idx_products_business_unit ON products(business_unit_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_i18n_locale ON products_i18n(locale);
CREATE INDEX IF NOT EXISTS idx_products_i18n_category ON products_i18n(category);
CREATE INDEX IF NOT EXISTS idx_business_units_slug ON business_units(slug);
CREATE INDEX IF NOT EXISTS idx_social_proofs_type ON social_proofs(type);
CREATE INDEX IF NOT EXISTS idx_social_proofs_featured ON social_proofs(is_featured);
CREATE INDEX IF NOT EXISTS idx_quotes_user ON quotes(user_id);
CREATE INDEX IF NOT EXISTS idx_consultations_user ON expert_consultations(user_id);

-- ==========================================
-- FIN DU SCRIPT
-- ==========================================

-- Vérification des données insérées
SELECT 'Business Units' as table_name, COUNT(*) as count FROM business_units
UNION ALL
SELECT 'Products', COUNT(*) FROM products
UNION ALL
SELECT 'Social Proofs', COUNT(*) FROM social_proofs
UNION ALL
SELECT 'Testimonials', COUNT(*) FROM social_proofs WHERE type = 'testimonial'
UNION ALL
SELECT 'Case Studies', COUNT(*) FROM social_proofs WHERE type = 'case_study'
UNION ALL
SELECT 'Certifications', COUNT(*) FROM social_proofs WHERE type = 'certification';
