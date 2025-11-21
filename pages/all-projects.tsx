import { useRouter } from 'next/router';
import { AllProjectsPage } from '../src/components/AllProjectsPage';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function AllProjectsPageRoute() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleProjectClick = (project: any) => {
    router.push(`/project/${project.id}`);
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <AllProjectsPage
        onProjectClick={handleProjectClick}
        onNavigate={handleNavigate}
        onBack={handleBack}
      />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}