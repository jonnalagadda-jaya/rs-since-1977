import React, { useState } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { GENTS_PRODUCTS, FABRICS_DATA, SAREES_DATA } from '../data/storeData';
import type { Product, Fabric, Saree } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: Product | Fabric | Saree) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectItem }) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const allItems: (Product | Fabric | Saree)[] = [
    ...GENTS_PRODUCTS,
    ...FABRICS_DATA,
    ...SAREES_DATA,
  ];

  const filteredResults = query.trim() === '' 
    ? allItems.slice(0, 6)
    : allItems.filter(item => {
        const q = query.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(q);
        const catMatch = 'category' in item ? item.category.toLowerCase().includes(q) : false;
        const typeMatch = 'type' in item ? item.type.toLowerCase().includes(q) : false;
        const descMatch = 'desc' in item ? item.desc.toLowerCase().includes(q) : ('description' in item && item.description ? item.description.toLowerCase().includes(q) : false);
        const sizeMatch = 'sizes' in item ? item.sizes.toLowerCase().includes(q) : false;

        return nameMatch || catMatch || typeMatch || descMatch || sizeMatch;
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-emerald-900/20 relative p-5 sm:p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-emerald-700 absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Giza cotton, Merino wool suiting, trouser size (28-48), silk sarees..."
            className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d28] focus:bg-white"
            autoFocus
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="absolute right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Quick Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
          <span className="text-slate-400 font-bold self-center">Popular:</span>
          {['Giza Cotton', 'Trouser 34', 'Shirts 42', 'Suits', 'Silk Sarees', '60" Width'].map((chip) => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              className="px-2.5 py-1 bg-emerald-50 text-[#004d28] hover:bg-emerald-100 rounded-lg font-bold border border-emerald-200 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-2 pt-2 divide-y divide-slate-100">
          {filteredResults.length === 0 ? (
            <div className="text-center py-8 text-slate-500 space-y-1">
              <p className="font-bold">No catalog matches found for "{query}"</p>
              <p className="text-xs">Try searching for shirt sizes (38-48), trouser sizes (28-48), or fabric types.</p>
            </div>
          ) : (
            filteredResults.map((item) => {
              const categoryTag = 'category' in item ? item.category : 'type' in item ? item.type : 'Royal Saree';
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                  className="p-3 rounded-xl hover:bg-emerald-50/70 transition-colors cursor-pointer flex items-center gap-3 group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = '/hero_fabrics.jpg';
                    }}
                  />
                  
                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] font-bold text-[#004d28] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-emerald-200">
                      {categoryTag}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#004d28]">
                      {item.name}
                    </h4>
                    {'sizes' in item && (
                      <p className="text-[11px] text-emerald-800 font-semibold">
                        Sizes: {item.sizes}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-bold text-[#004d28] group-hover:underline flex items-center gap-1">
                      <span>View Swatch</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
