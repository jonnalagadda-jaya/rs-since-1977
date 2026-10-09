import React from 'react';
import { Shirt, Scissors, Sparkles, Grid, Ruler } from 'lucide-react';
import type { CategoryFilter } from '../types';

interface CategoryTabsProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  counts: {
    all: number;
    gents: number;
    fabrics: number;
    sarees: number;
  };
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
  counts
}) => {
  const tabs: { id: CategoryFilter; label: string; icon: React.ReactNode; count?: number }[] = [
    { id: 'gents', label: 'RS Gents Readymades', icon: <Shirt className="w-4 h-4" />, count: counts.gents },
    { id: 'fabrics', label: 'RS Fabrics', icon: <Scissors className="w-4 h-4" />, count: counts.fabrics },
    { id: 'sarees', label: 'RS Sarees', icon: <Sparkles className="w-4 h-4" />, count: counts.sarees },
    { id: 'sizes', label: 'Size Matrix Guide', icon: <Ruler className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 py-4">
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectCategory(tab.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs ${isActive
              ? 'bg-[#004d28] text-white shadow-md ring-2 ring-emerald-600/30 scale-105 font-extrabold'
              : 'bg-white text-slate-700 hover:text-[#004d28] hover:bg-emerald-50 border border-slate-200'
              }`}
          >
            <span className={isActive ? 'text-amber-300' : 'text-emerald-700'}>{tab.icon}</span>
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isActive ? 'bg-emerald-900 text-amber-300' : 'bg-slate-100 text-slate-600'
                }`}>
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
