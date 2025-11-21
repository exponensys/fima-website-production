import { CMSApp } from '../src/cms/CMSApp';
import { useRouter } from 'next/router';
import { UserProvider } from '../src/contexts/UserContext';
import { AppProvider } from '../src/contexts/AppContext';

export default function CMSPage() {
  const router = useRouter();

  const handleBackToSite = () => {
    router.push('/');
  };

  return (
    <UserProvider>
      <AppProvider>
        <CMSApp onBackToSite={handleBackToSite} />
      </AppProvider>
    </UserProvider>
  );
}