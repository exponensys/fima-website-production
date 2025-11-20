/**
 * Utilitaires pour gérer les vidéos YouTube et les vidéos directes
 */

/**
 * Extrait l'ID de la vidéo YouTube depuis différents formats d'URL
 * Formats supportés:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
export function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;

  // Format: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];

  // Format: https://youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return shortMatch[1];

  // Format: https://www.youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (embedMatch) return embedMatch[1];

  return null;
}

/**
 * Vérifie si une URL est une URL YouTube
 */
export function isYouTubeUrl(url: string): boolean {
  if (!url) return false;
  return url.includes('youtube.com') || url.includes('youtu.be');
}

/**
 * Convertit une URL YouTube en URL embed
 */
export function getYouTubeEmbedUrl(url: string, autoplay: boolean = false): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;

  const autoplayParam = autoplay ? '&autoplay=1&mute=1' : '';
  return `https://www.youtube.com/embed/${videoId}?rel=0${autoplayParam}`;
}

/**
 * Convertit une URL YouTube en URL de thumbnail
 */
export function getYouTubeThumbnail(url: string, quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'hq'): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;

  const qualityMap = {
    'default': 'default.jpg',
    'mq': 'mqdefault.jpg',
    'hq': 'hqdefault.jpg',
    'sd': 'sddefault.jpg',
    'maxres': 'maxresdefault.jpg'
  };

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}`;
}
