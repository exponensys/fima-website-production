import { useRouter } from 'next/router';
import LoginPage  from '../src/components/AuthPage';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function LoginRoute() {
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
      <LoginPage
        onNavigate={handleNavigate}
        onBack={handleBack}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}