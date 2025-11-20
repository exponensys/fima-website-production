# 📣 Exemples d'utilisation des Call to Action

## 🎯 Guide pratique avec exemples de code

Ce document contient des exemples concrets d'utilisation des Call to Action dans différents contextes.

---

## 1️⃣ Utilisation basique du composant

### Dans une page existante

```tsx
import { CallToAction } from './components/CallToAction';

function MyPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div>
      <h1>Ma Page</h1>
      
      {/* Afficher tous les CTAs de position "inline" */}
      <CallToAction 
        position="inline" 
        onNavigate={onNavigate}
      />
    </div>
  );
}
```

### Afficher seulement le premier CTA

```tsx
<CallToAction 
  position="hero" 
  onNavigate={onNavigate}
  single={true}  // Affiche seulement le premier CTA
/>
```

---

## 2️⃣ Utilisation du hook directement

### Récupérer tous les CTAs d'une position

```tsx
import { useCallToAction } from '../hooks/useCallToAction';

function CustomCTA() {
  const { ctas, isLoading, error } = useCallToAction('footer');
  
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  
  if (error) {
    console.error('Erreur CTAs:', error);
    return null;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {ctas.map((cta) => (
        <div 
          key={cta.id}
          className="p-6"
          style={{ backgroundColor: cta.background_color }}
        >
          <h3 style={{ color: cta.text_color }}>{cta.title}</h3>
          <p style={{ color: cta.text_color }}>{cta.description}</p>
          <button 
            onClick={() => handleClick(cta.button_link)}
            style={{ 
              backgroundColor: cta.button_style === 'primary' ? '#E30613' : '#6E6E6E',
              color: '#FFFFFF'
            }}
          >
            {cta.button_text}
          </button>
        </div>
      ))}
    </div>
  );
}
```

### Récupérer un CTA spécifique par ID

```tsx
import { useCallToActionById } from '../hooks/useCallToAction';

function SpecificCTA() {
  const { cta, isLoading, error } = useCallToActionById('123-456-789');
  
  if (isLoading) return <div>Chargement...</div>;
  if (error || !cta) return null;
  
  return (
    <div style={{ backgroundColor: cta.background_color }}>
      <h2>{cta.title}</h2>
      <p>{cta.description}</p>
      <a href={cta.button_link}>{cta.button_text}</a>
    </div>
  );
}
```

---

## 3️⃣ Intégration dans le Hero

```tsx
// Dans Hero.tsx
import { CallToAction } from './CallToAction';

export function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="hero">
      {/* Contenu du Hero */}
      <div className="hero-content">
        <h1>Bienvenue chez FIMA</h1>
        <p>Votre expert literie depuis 1985</p>
      </div>
      
      {/* CTA Hero */}
      <CallToAction 
        position="hero" 
        onNavigate={onNavigate}
        single={true}
        className="mt-8"
      />
    </section>
  );
}
```

---

## 4️⃣ Intégration dans le Footer

```tsx
// Dans Footer.tsx
import { CallToAction } from './CallToAction';

export function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <footer>
      {/* Contenu du footer */}
      <div className="footer-content">
        {/* ... */}
      </div>
      
      {/* CTAs Footer - Plusieurs possibles */}
      <CallToAction 
        position="footer" 
        onNavigate={onNavigate}
        className="border-t border-gray-200 pt-8 mt-8"
      />
    </footer>
  );
}
```

---

## 5️⃣ Sidebar dans une page produit

```tsx
// Dans ProductDetailPage.tsx
import { CallToAction } from './CallToAction';

export function ProductDetailPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contenu principal */}
      <div className="lg:col-span-2">
        <h1>Détails du produit</h1>
        {/* ... */}
      </div>
      
      {/* Sidebar avec CTA */}
      <aside className="lg:col-span-1">
        <div className="sticky top-4">
          <CallToAction 
            position="sidebar" 
            onNavigate={onNavigate}
          />
        </div>
      </aside>
    </div>
  );
}
```

---

## 6️⃣ CTAs inline dans le contenu

```tsx
// Dans une page de contenu
import { InlineCTA } from './components/CallToAction';
import { useCallToAction } from '../hooks/useCallToAction';

export function ContentPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { ctas } = useCallToAction('inline');
  
  return (
    <article>
      <h1>Article</h1>
      
      <p>Premier paragraphe...</p>
      <p>Deuxième paragraphe...</p>
      
      {/* Premier CTA inline après 2 paragraphes */}
      {ctas[0] && (
        <InlineCTA 
          cta={ctas[0]} 
          onNavigate={onNavigate}
          className="my-8"
        />
      )}
      
      <p>Suite du contenu...</p>
      <p>Encore du contenu...</p>
      
      {/* Deuxième CTA inline à la fin */}
      {ctas[1] && (
        <InlineCTA 
          cta={ctas[1]} 
          onNavigate={onNavigate}
          className="my-8"
        />
      )}
    </article>
  );
}
```

---

## 7️⃣ Créer un CTA personnalisé avec le hook

```tsx
import { useCallToAction } from '../hooks/useCallToAction';
import { ArrowRight, Phone } from 'lucide-react';

function FancyCTA() {
  const { ctas, isLoading } = useCallToAction('hero');
  
  if (isLoading || ctas.length === 0) return null;
  
  const cta = ctas[0];
  
  return (
    <div 
      className="relative overflow-hidden"
      style={{ backgroundColor: cta.background_color }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* SVG pattern */}
      </div>
      
      {/* Contenu */}
      <div className="relative z-10 p-12 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1 bg-white/20 text-white text-sm mb-4">
          OFFRE SPÉCIALE
        </div>
        
        {/* Titre */}
        <h2 
          className="text-4xl mb-4"
          style={{ color: cta.text_color }}
        >
          {cta.title}
        </h2>
        
        {/* Description */}
        <p 
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: cta.text_color }}
        >
          {cta.description}
        </p>
        
        {/* Bouton avec icône */}
        <button
          onClick={() => handleClick(cta.button_link)}
          className="group px-8 py-4 text-white text-lg font-medium transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
          style={{ backgroundColor: '#E30613' }}
        >
          <span className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            {cta.button_text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
}
```

---

## 8️⃣ CTA conditionnel selon le contexte

```tsx
import { useCallToAction } from '../hooks/useCallToAction';

function SmartCTA({ userType }: { userType: 'b2b' | 'b2c' }) {
  // Récupérer tous les CTAs inline
  const { ctas, isLoading } = useCallToAction('inline');
  
  if (isLoading || ctas.length === 0) return null;
  
  // Filtrer selon le type d'utilisateur
  const relevantCTA = ctas.find(cta => {
    if (userType === 'b2b') {
      // Afficher le CTA "Grands comptes" pour les B2B
      return cta.button_link.includes('large-accounts');
    } else {
      // Afficher le CTA "Devis" pour les B2C
      return cta.button_link.includes('quote-request');
    }
  });
  
  if (!relevantCTA) return null;
  
  return (
    <InlineCTA 
      cta={relevantCTA} 
      onNavigate={onNavigate}
    />
  );
}
```

---

## 9️⃣ CTA avec animation

```tsx
import { motion } from 'motion/react';
import { useCallToAction } from '../hooks/useCallToAction';

function AnimatedCTA() {
  const { ctas } = useCallToAction('hero');
  
  if (ctas.length === 0) return null;
  
  const cta = ctas[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{ backgroundColor: cta.background_color }}
      className="p-8 text-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ color: cta.text_color }}
      >
        {cta.title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        style={{ color: cta.text_color }}
        className="mb-6"
      >
        {cta.description}
      </motion.p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 text-white font-medium"
        style={{ backgroundColor: '#E30613' }}
      >
        {cta.button_text}
      </motion.button>
    </motion.div>
  );
}
```

---

## 🔟 Multi-positions responsive

```tsx
function ResponsiveCTA({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      {/* Desktop : Sidebar */}
      <div className="hidden lg:block">
        <CallToAction 
          position="sidebar" 
          onNavigate={onNavigate}
        />
      </div>
      
      {/* Mobile : Inline */}
      <div className="lg:hidden">
        <CallToAction 
          position="inline" 
          onNavigate={onNavigate}
          single={true}
        />
      </div>
    </>
  );
}
```

---

## 1️⃣1️⃣ CTA avec tracking analytics

```tsx
import { useCallToAction } from '../hooks/useCallToAction';

function TrackedCTA({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { ctas } = useCallToAction('hero');
  
  const handleCTAClick = (cta: CallToAction) => {
    // Tracking analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        cta_title: cta.title,
        cta_position: cta.position,
        cta_link: cta.button_link,
      });
    }
    
    // Navigation
    if (cta.button_link.startsWith('/')) {
      onNavigate(cta.button_link.substring(1));
    } else {
      window.open(cta.button_link, '_blank');
    }
  };
  
  if (ctas.length === 0) return null;
  
  return (
    <div>
      {ctas.map(cta => (
        <button
          key={cta.id}
          onClick={() => handleCTAClick(cta)}
          className="cta-button"
        >
          {cta.button_text}
        </button>
      ))}
    </div>
  );
}
```

---

## 1️⃣2️⃣ CTA en modal

```tsx
import { useState } from 'react';
import { useCallToAction } from '../hooks/useCallToAction';
import { X } from 'lucide-react';

function CTAModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { ctas } = useCallToAction('inline');
  
  if (ctas.length === 0) return null;
  
  const cta = ctas[0];
  
  return (
    <>
      {/* Bouton déclencheur */}
      <button onClick={() => setIsOpen(true)}>
        Voir l'offre
      </button>
      
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
            className="relative max-w-2xl w-full mx-4 p-8"
            style={{ backgroundColor: cta.background_color }}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6" style={{ color: cta.text_color }} />
            </button>
            
            {/* Contenu */}
            <h2 style={{ color: cta.text_color }} className="text-3xl mb-4">
              {cta.title}
            </h2>
            <p style={{ color: cta.text_color }} className="mb-6">
              {cta.description}
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
                // Navigation ou action
              }}
              className="px-8 py-4 text-white font-medium"
              style={{ backgroundColor: '#E30613' }}
            >
              {cta.button_text}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
```

---

## ✅ Bonnes pratiques

### 1. Toujours gérer le loading
```tsx
const { ctas, isLoading } = useCallToAction('hero');

if (isLoading) {
  return <LoadingSpinner />;
}
```

### 2. Gérer l'absence de CTAs
```tsx
if (ctas.length === 0) {
  return null; // Ou un contenu par défaut
}
```

### 3. Utiliser le composant quand possible
```tsx
// ✅ Recommandé
<CallToAction position="hero" onNavigate={onNavigate} />

// ⚠️ Seulement si besoin de personnalisation
const { ctas } = useCallToAction('hero');
```

### 4. Penser responsive
```tsx
// Desktop
<div className="hidden md:block">
  <CallToAction position="sidebar" />
</div>

// Mobile
<div className="md:hidden">
  <CallToAction position="inline" single={true} />
</div>
```

---

## 🎯 Cas d'usage courants

| Situation | Position | Single | Exemple |
|-----------|----------|--------|---------|
| Hero principal | `hero` | ✅ | Bandeau haut de page |
| Bas de page | `footer` | ❌ | Plusieurs CTAs |
| Page produit | `sidebar` | ✅ | Aide à la décision |
| Article blog | `inline` | ❌ | Entre les paragraphes |
| Landing page | `inline` | ✅ | CTA principal |

---

**Besoin d'aide ?** Consultez :
- `/docs/CALL_TO_ACTION_MIGRATION_COMPLETE.md` - Documentation complète
- `/INIT_CALL_TO_ACTION_NOW.md` - Guide d'initialisation
- `/components/CallToAction.tsx` - Code source du composant
