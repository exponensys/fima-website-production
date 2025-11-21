import { useRouter } from 'next/router';
import { AllProjectsPage } from '../src/components/AllProjectsPage';
import { Header } from '../src/components/Header';

export default function ProjectsPage() {
  const router = useRouter();

  const handleProjectClick = (project: any) => {
    router.push(`/project/${project.id}`);
  };

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <AllProjectsPage
        onProjectClick={handleProjectClick}
        onNavigate={handleNavigate}
        onBack={handleBack}
      />
    </>
  );
}