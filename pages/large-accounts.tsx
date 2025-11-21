import { useRouter } from 'next/router';
import { LargeAccountsPage } from '../src/components/LargeAccountsPage';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function LargeAccountsPageRoute() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <LargeAccountsPage
        onNavigate={handleNavigate}
        onBack={handleBack}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}