import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'support';
}

export interface ChatbotConfig {
  initial_messages: ChatMessage[];
  quick_replies: string[];
  auto_responses: Record<string, string>;
}

// Données de fallback locales
const DEFAULT_CONFIG: ChatbotConfig = {
  initial_messages: [
    {
      id: '1',
      text: 'Bonjour ! Je suis Sophie, votre conseillère FIMA. Comment puis-je vous aider aujourd\'hui ?',
      sender: 'support'
    }
  ],
  quick_replies: [
    'Informations sur les matelas',
    'Délais de livraison',
    'Retours et garanties',
    'Aide au choix'
  ],
  auto_responses: {
    'matelas': 'Notre gamme de matelas propose différents niveaux de fermeté et technologies. Quel type de confort recherchez-vous ?',
    'livraison': 'Nous livrons gratuitement en 3-5 jours ouvrés avec installation incluse. Dans quelle région êtes-vous ?',
    'garantie': 'Tous nos matelas bénéficient d\'une garantie de 10 ans et de 14 nuits d\'essai. Avez-vous des questions spécifiques ?',
    'prix': 'Nos prix commencent à 489€ pour un matelas Queen. Nous avons régulièrement des promotions. Quel budget avez-vous en tête ?',
    'taille': 'Nous proposons toutes les tailles standards : Single, Queen, King et California King. Quelle taille vous intéresse ?'
  }
};

export const useChatbotConfig = () => {
  const [config, setConfig] = useState<ChatbotConfig>(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        
        const url = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/chatbot-config`;
        
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch chatbot config');
        }

        const result = await response.json();

        if (result.success) {
          setConfig(result.data || DEFAULT_CONFIG);
          setError(null);
        } else {
          throw new Error(result.error || 'Unknown error');
        }
      } catch (err) {
        console.error('Error fetching chatbot config:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Fallback vers les données locales en cas d'erreur
        setConfig(DEFAULT_CONFIG);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
};