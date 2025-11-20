import { useApp } from '../contexts/AppContext';
import { getTranslation, TranslationKey, LanguageCode } from '../utils/translations';

/**
 * Hook personnalisé pour gérer les traductions avec la langue sélectionnée
 */
export function useLanguage() {
  const { selectedLanguage, setSelectedLanguage } = useApp();

  /**
   * Traduit une clé selon la langue sélectionnée
   * @param key Clé de traduction
   * @returns Texte traduit
   */
  const t = (key: TranslationKey): string => {
    return getTranslation(key, selectedLanguage);
  };

  /**
   * Change la langue de l'application
   * @param language Code de la nouvelle langue
   */
  const changeLanguage = (language: LanguageCode) => {
    setSelectedLanguage(language);
  };

  return {
    selectedLanguage,
    changeLanguage,
    t,
  };
}
