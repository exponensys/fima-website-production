/**
 * Composant qui vérifie et propose d'initialiser les données Supabase si nécessaire
 * 
 * S'affiche automatiquement si:
 * - Les données ne sont pas encore initialisées
 * - Une erreur de chargement est détectée
 * 
 * Peut être supprimé une fois le site en production
 */

import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { ManualDataInitializer } from './ManualDataInitializer';

export function DataInitializer() {
  const [needsInit, setNeedsInit] = useState(false);
  const [showManualInit, setShowManualInit] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    checkIfDataExists();
  }, []);

  const checkIfDataExists = async () => {
    try {
      setChecking(true);
      
      // Vérifier les 3 routes critiques
      const checks = await Promise.all([
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/site-settings`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          }
        }).then(r => r.json()).catch(() => ({ success: false })),
        
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          }
        }).then(r => r.json()).catch(() => ({ success: false })),
        
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/product-categories`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          }
        }).then(r => r.json()).catch(() => ({ success: false }))
      ]);
      
      // Si au moins une route échoue ou retourne des données vides, on a besoin d'initialiser
      const needsInitialization = checks.some(result => {
        if (!result.success) return true;
        if (!result.data) return true;
        if (Array.isArray(result.data) && result.data.length === 0) return true;
        if (typeof result.data === 'object' && Object.keys(result.data).length === 0) return true;
        return false;
      });
      
      setNeedsInit(needsInitialization);
      
      if (needsInitialization) {
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('  🚨 DONNÉES SUPABASE NON INITIALISÉES');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('');
        console.log('Un modal va s\'afficher pour initialiser les données.');
        console.log('');
        console.log('Les données seront créées automatiquement.');
        console.log('');
        console.log('Guide complet: /INITIALISER_DONNEES.md');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        // Afficher automatiquement le modal d'initialisation
        setShowManualInit(true);
      }
      
    } catch (error) {
      console.error('Erreur vérification données:', error);
      // En cas d'erreur, on suppose qu'il faut initialiser
      setNeedsInit(true);
      setShowManualInit(true);
    } finally {
      setChecking(false);
    }
  };

  // Ne rien afficher si on est en train de vérifier
  if (checking) {
    return null;
  }

  // Afficher le modal d'initialisation manuelle
  if (showManualInit && needsInit) {
    return <ManualDataInitializer onClose={() => setShowManualInit(false)} />;
  }

  return null;
}