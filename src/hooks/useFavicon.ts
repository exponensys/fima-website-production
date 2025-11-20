import { useEffect } from 'react';

/**
 * Hook pour définir le favicon du site dynamiquement
 * @param faviconUrl - URL de l'image à utiliser comme favicon
 */
export const useFavicon = (faviconUrl: string) => {
  useEffect(() => {
    // Supprimer les anciens favicons
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach(link => link.remove());

    // Créer le nouveau favicon principal
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconUrl;
    document.head.appendChild(link);

    // Ajouter aussi apple-touch-icon pour iOS
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = faviconUrl;
    document.head.appendChild(appleLink);

    // Mettre à jour le titre si nécessaire
    if (!document.title || document.title === 'React App') {
      document.title = 'FIMA - Literie, Menuiserie & Vitrerie depuis 1985';
    }

    // Cleanup
    return () => {
      // On ne supprime pas au démontage pour éviter de perdre le favicon
    };
  }, [faviconUrl]);
};
