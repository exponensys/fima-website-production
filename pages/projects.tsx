import { useRouter } from 'next/router';
import { AllProjectsPage } from '../src/components/AllProjectsPage';

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
    <AllProjectsPage
      onProjectClick={handleProjectClick}
      onNavigate={handleNavigate}
      onBack={handleBack}
    />
  );
}