import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Rediriger vers la page d'accueil principale
    router.replace('/');
  }, [router]);

  return null;
}