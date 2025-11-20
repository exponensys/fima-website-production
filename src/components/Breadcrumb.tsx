import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  accentColor?: string;
}

export function Breadcrumb({ items, accentColor = '#B5C233' }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm py-3 px-4 bg-gray-50 border-b border-gray-200">
      {/* Icône Home */}
      <button
        onClick={items[0]?.onClick}
        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
        style={{ color: '#6E6E6E' }}
        aria-label="Accueil"
      >
        <Home className="w-4 h-4" />
      </button>

      {/* Séparateur */}
      <ChevronRight className="w-4 h-4" style={{ color: '#6E6E6E' }} />

      {/* Items du breadcrumb */}
      {items.slice(1).map((item, index) => {
        const isLast = index === items.length - 2;
        
        return (
          <div key={index} className="flex items-center gap-2">
            {item.onClick ? (
              <button
                onClick={item.onClick}
                className="hover:opacity-70 transition-opacity truncate max-w-[200px]"
                style={{ color: isLast ? accentColor : '#6E6E6E' }}
              >
                {item.label}
              </button>
            ) : (
              <span
                className="truncate max-w-[200px]"
                style={{ 
                  color: isLast ? accentColor : '#6E6E6E',
                  fontWeight: isLast ? '600' : '400'
                }}
              >
                {item.label}
              </span>
            )}
            
            {/* Séparateur si ce n'est pas le dernier item */}
            {!isLast && (
              <ChevronRight className="w-4 h-4" style={{ color: '#6E6E6E' }} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
