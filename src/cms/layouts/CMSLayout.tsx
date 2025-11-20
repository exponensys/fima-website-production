import { ReactNode } from 'react';
import { CMSSidebar } from '../components/CMSSidebar';
import { CMSHeader } from '../components/CMSHeader';
import { CMSPage } from '../CMSApp';

interface CMSLayoutProps {
  children: ReactNode;
  currentPage: CMSPage;
  onNavigate: (page: CMSPage) => void;
  onBackToSite: () => void;
}

export function CMSLayout({ children, currentPage, onNavigate, onBackToSite }: CMSLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <CMSSidebar currentPage={currentPage} onNavigate={onNavigate} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <CMSHeader onBackToSite={onBackToSite} />
        
        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
