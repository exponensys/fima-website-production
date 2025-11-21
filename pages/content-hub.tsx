import { useRouter } from 'next/router';
import { SEOContentHub } from '../src/components/SEOContentHub';
import { Header } from '../src/components/Header';

export default function ContentHubPage() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleArticleClick = (article: any) => {
    // Handle article navigation if needed
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <SEOContentHub 
        onNavigate={handleNavigate}
        onArticleClick={handleArticleClick}
        onBack={handleBack}
      />
    </>
  );
}