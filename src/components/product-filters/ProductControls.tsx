import { Filter, Grid, List, Search } from 'lucide-react';
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
    <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
      {/* Mobile Filter Button + View Mode */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
          style={{ borderColor: '#C0C0C0' }}
        >
          <Filter className="w-4 h-4" />
          Filtres
        </button>
        
        {/* View Mode - Always visible */}
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
      </div>
      
      {/* Search + Sort - Mobile Responsive */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:gap-4">
        {/* Search */}
        <div className="relative flex-1 sm:flex-none">
          <input
            type="text"
            placeholder="Rechercher..."
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
            className="w-full sm:w-48 lg:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{ borderColor: '#C0C0C0', '--tw-ring-color': '#B5C233' } as any}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5" style={{ color: '#6E6E6E' }} />
        </div>
        
        {/* Sort */}
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-auto px-4 py-2 border rounded-lg"
          style={{ borderColor: '#C0C0C0' }}
        >
          <option value="name">Trier par nom</option>
          <option value="price-low">Prix croissant</option>
          <option value="price-high">Prix décroissant</option>
        </select>
      </div>
    </div>
  );
}