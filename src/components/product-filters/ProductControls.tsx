import { Filter, Grid, List, Search, Menu } from 'lucide-react';
import { Filters } from '../../data/filters';

interface ProductControlsProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export function ProductControls({
  filters,
  setFilters,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters
}: ProductControlsProps) {
  return (
    <>
      {/* Mobile Controls - Fixed at bottom */}
      <div 
        className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#374151',
            color: 'white',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          <Filter className="w-4 h-4" />
          Filtrer
        </button>
      </div>

      {/* Desktop Controls */}
      <div className="hidden lg:flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        {/* View Mode */}
        <div className="flex border rounded-lg" style={{ borderColor: '#C0C0C0' }}>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-l-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-r-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
        
        {/* Search + Sort */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
              className="w-48 lg:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: '#C0C0C0', '--tw-ring-color': '#B5C233' } as any}
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5" style={{ color: '#6E6E6E' }} />
          </div>
          
          {/* Sort */}
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg"
            style={{ borderColor: '#C0C0C0' }}
          >
            <option value="name">Trier par nom</option>
            <option value="price-low">Prix croissant</option>
            <option value="price-high">Prix décroissant</option>
          </select>
        </div>
      </div>
    </>
  );
}