/**
 * Script d'initialisation des données Phase 1 & 2 dans le KV Store Supabase
 * 
 * Usage:
 * 1. Ouvrir la console du navigateur (F12)
 * 2. Copier-coller ce code
 * 3. Appeler initSupabaseData()
 */

import { projectId, publicAnonKey } from './supabase/info';

export const initSupabaseData = async () => {
  console.log('🚀 Initialisation des données Phase 1 & 2...');
  console.log('📡 Connexion à Supabase:', projectId);
  
  try {
    const url = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-phase-1-2`;
    
    console.log('📤 Envoi de la requête d\'initialisation...');
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Initialisation réussie !');
      console.log('📊 Données créées:', result.data);
      console.log('');
      console.log('🎉 Phase 1 & 2 est maintenant opérationnelle !');
      console.log('');
      console.log('⏭️ Prochaines étapes:');
      console.log('   1. Recharger la page (F5 ou Cmd+R)');
      console.log('   2. Vérifier que les erreurs ont disparu');
      console.log('   3. Tester les composants migrés');
      console.log('');
      console.log('📚 Documentation: /docs/INIT_DATA_GUIDE.md');
      
      return result;
    } else {
      throw new Error(result.error || 'Unknown error');
    }
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    console.error('');
    console.error('🔍 Vérifications:');
    console.error('   1. Le serveur backend est déployé');
    console.error('   2. Les credentials sont corrects (PROJECT_ID, ANON_KEY)');
    console.error('   3. Vous avez une connexion internet');
    console.error('');
    console.error('📖 Guide complet: /docs/INIT_DATA_GUIDE.md');
    
    throw error;
  }
};

// Log d'aide au démarrage
console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('  🎯 FIMA - Initialisation Supabase');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log('Pour initialiser les données Phase 1 & 2:');
console.log('');
console.log('  import { initSupabaseData } from "./utils/initSupabaseData"');
console.log('  initSupabaseData()');
console.log('');
console.log('Ou utilisez la commande curl dans /docs/INIT_DATA_GUIDE.md');
console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');