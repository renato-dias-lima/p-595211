
import React from "react";
import { Search, Calendar, Filter, BarChart2, Grid, Users, Plus } from "lucide-react";

interface PerformanceFiltersProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filterType: string, value: string) => void;
  onCreateEvaluation?: () => void;
}

const PerformanceFilters: React.FC<PerformanceFiltersProps> = ({
  onSearch = () => {},
  onFilterChange = () => {},
  onCreateEvaluation = () => {},
}) => {
  return (
    <div className="flex flex-wrap gap-3 w-full items-center">
      {/* Calendar Filter */}
      <div className="h-10 w-10 flex items-center justify-center bg-[#E7F2FF] border border-[#0671E0] rounded shadow-sm">
        <Calendar className="w-5 h-5 text-[#0671E0]" />
      </div>

      {/* Status Filter */}
      <div className="h-10 flex items-center gap-2 px-3 bg-white border border-[#E8EBF4] rounded text-[#586B78] text-sm">
        <Filter className="w-5 h-5" />
        <span>Status</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>

      {/* Area Filter */}
      <div className="h-10 flex items-center gap-2 px-3 bg-white border border-[#E8EBF4] rounded text-[#586B78] text-sm">
        <BarChart2 className="w-5 h-5" />
        <span>Área</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>

      {/* Type Filter */}
      <div className="h-10 flex items-center gap-2 px-3 bg-white border border-[#E8EBF4] rounded text-[#586B78] text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter">
          <path d="M3 6h18"/>
          <path d="M7 12h10"/>
          <path d="M10 18h4"/>
        </svg>
        <span>Tipo</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>

      {/* Person Filter */}
      <div className="h-10 flex items-center gap-2 px-3 bg-white border border-[#E8EBF4] rounded text-[#586B78] text-sm">
        <Users className="w-5 h-5" />
        <span>Pessoa</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>

      {/* Date Range */}
      <div className="flex gap-2 md:flex-grow-0 flex-grow basis-full md:basis-auto lg:min-w-[320px]">
        <div className="flex-1">
          <div className="h-10 flex items-center gap-2 px-3 py-2 bg-white border border-[#99B9D1] rounded-lg text-[#B6C7D4] text-sm">
            <span>dd/mm/aaaa</span>
            <Calendar className="w-5 h-5 ml-auto" />
          </div>
        </div>
        <div className="flex-1">
          <div className="h-10 flex items-center gap-2 px-3 py-2 bg-white border border-[#99B9D1] rounded-lg text-[#B6C7D4] text-sm">
            <span>dd/mm/aaaa</span>
            <Calendar className="w-5 h-5 ml-auto" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex-grow basis-full md:basis-auto">
        <div className="h-10 flex items-center gap-2 px-3 py-2 bg-white border border-[#99B9D1] rounded-lg text-[#99B9D1] text-sm">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Pesquisar avaliação"
            className="flex-1 bg-transparent outline-none"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* View Options */}
      <div className="h-10 flex items-center gap-3 px-3 bg-white border border-[#E8EBF4] rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#586B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list">
          <line x1="8" x2="21" y1="6" y2="6"/>
          <line x1="8" x2="21" y1="12" y2="12"/>
          <line x1="8" x2="21" y1="18" y2="18"/>
          <line x1="3" x2="3.01" y1="6" y2="6"/>
          <line x1="3" x2="3.01" y1="12" y2="12"/>
          <line x1="3" x2="3.01" y1="18" y2="18"/>
        </svg>
        <Grid className="w-5 h-5 text-[#586B78]" />
      </div>

      {/* Create Button */}
      <button
        className="h-10 flex items-center gap-2 px-4 py-2 bg-[#0671E0] rounded-lg text-white text-sm font-medium"
        onClick={onCreateEvaluation}
      >
        <Plus className="w-5 h-5" />
        <span>Criar avaliação</span>
      </button>
    </div>
  );
};

export default PerformanceFilters;
