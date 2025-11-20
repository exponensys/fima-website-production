export const categories = [
  { name: "Tous", value: "all" },
  
  // FIMA COUCHAGE
  { name: "Matelas", value: "matelas", business: "fima-couchage" },
  { name: "Sommiers", value: "sommiers", business: "fima-couchage" },
  { name: "Oreillers", value: "oreillers", business: "fima-couchage" },
  { name: "Linge de lit", value: "linge-de-lit", business: "fima-couchage" },
  { name: "Accessoires literie", value: "accessoires-literie", business: "fima-couchage" },
  
  // FIMA DESIGN
  { name: "Menuiserie", value: "menuiserie", business: "fima-design" },
  { name: "Ameublement", value: "ameublement", business: "fima-design" },
  { name: "Cuisines", value: "cuisines", business: "fima-design" },
  { name: "Dressings", value: "dressings", business: "fima-design" },
  { name: "Aménagements sur mesure", value: "amenagements-mesure", business: "fima-design" },
  
  // UNIVERS GLASS
  { name: "Vitrerie", value: "vitrerie", business: "univers-glass" },
  { name: "Menuiserie Aluminium", value: "menuiserie-aluminium", business: "univers-glass" },
  { name: "Fenêtres", value: "fenetres", business: "univers-glass" },
  { name: "Portes", value: "portes", business: "univers-glass" },
  { name: "Cloisons", value: "cloisons", business: "univers-glass" }
];

export const businessUnits = [
  { name: "Tous les métiers", value: "all" },
  { name: "FIMA Couchage", value: "fima-couchage", color: "#B5C233" },
  { name: "FIMA Design", value: "fima-design", color: "#6E6E6E" },
  { name: "UNIVERS GLASS", value: "univers-glass", color: "#0EA5E9" }
];

export const firmness = [
  { name: "Tous", value: "all" },
  { name: "Moelleux", value: "Moelleux" },
  { name: "Médium", value: "Médium" },
  { name: "Ferme", value: "Ferme" }
];

export const materials = [
  { name: "Tous", value: "all" },
  // FIMA COUCHAGE
  { name: "Ressorts", value: "Ressorts" },
  { name: "Mémoire de forme", value: "Mémoire de forme" },
  { name: "Latex", value: "Latex" },
  { name: "Hybride", value: "Hybride" },
  { name: "Plumes", value: "Plumes" },
  { name: "Coton", value: "Coton" },
  
  // FIMA DESIGN
  { name: "Chêne massif", value: "Chêne massif" },
  { name: "Noyer massif", value: "Noyer massif" },
  { name: "MDF laqué", value: "MDF laqué" },
  { name: "Chêne laqué", value: "Chêne laqué" },
  { name: "Laque + Quartz", value: "Laque + Quartz" },
  { name: "Mélaminé", value: "Mélaminé" },
  { name: "Bois", value: "Bois" },
  
  // UNIVERS GLASS
  { name: "Verre sécurit", value: "Verre sécurit" },
  { name: "Verre feuilleté", value: "Verre feuilleté" },
  { name: "Aluminium", value: "Aluminium" },
  { name: "Alu + Verre", value: "Alu + Verre" }
];

export interface Filters {
  category: string;
  business: string;
  firmness: string;
  material: string;
  priceRange: [number, number];
  search: string;
}