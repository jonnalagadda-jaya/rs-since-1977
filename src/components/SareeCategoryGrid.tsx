import React from 'react';
import { Sparkles } from 'lucide-react';
import type { CategoryFilter } from '../types';

interface SareeCategoryGridProps {
  onSelectCategory: (category: CategoryFilter) => void;
}

export const SareeCategoryGrid: React.FC<SareeCategoryGridProps> = ({ onSelectCategory }) => {
  const sareeCategories = [
    {
      title: 'PURE PATTU SAREES',
      image: '/saree_pattu_sq.jpg',
      desc: '100% Kanchipuram Silk & Pure Gold Zari',
      badge: 'Silk Mark'
    },
    {
      title: 'HALF PATTU SAREES',
      image: '/saree_halfpattu_sq.jpg',
      desc: 'Vibrant Festive Silk Drapes & Borders',
      badge: 'Popular'
    },
    {
      title: 'DESIGNER SAREES',
      image: '/saree_designer_sq.jpg',
      desc: 'Hand Zardozi & Sequin Embroidery',
      badge: 'Partywear'
    },
    {
      title: 'HI-FANCY SAREES',
      image: '/saree_organza_sq.jpg',
      desc: 'Hi-Fancy Shimmer & Metallic Tissue',
      badge: 'Trending'
    },
    {
      title: 'DIGITAL PRINTED SAREES',
      image: '/saree_printed_sq.jpg',
      desc: 'Botanical Digital Art on Satin Crepe',
      badge: 'Artistic'
    },
    {
      title: 'CRAPE SAREES',
      image: '/saree_crape_sq.jpg',
      desc: 'Flowy Soft Satin Crape Luster Finish',
      badge: 'Smooth'
    },
    {
      title: 'CHIFFON SAREES',
      image: '/saree_kanchipuram.jpg',
      desc: 'Featherlight Pastel Drape & Gold Foil',
      badge: 'Breezy'
    },
  ];

  return (
    <section className="bg-white py-12 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* SAREE SHOWCASE CATEGORIES HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-[#004d28] text-white rounded-2xl shadow-xs">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#004d28]">
                ROYAL SAREE CATEGORIES
              </h2>
              <p className="text-xs text-slate-500">
                Pure Kanchipuram Pattu, Half Pattu, Designer, Organza, Crepe & Chiffon Drapes
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onSelectCategory('sarees');
              const el = document.getElementById('sarees');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold text-[#004d28] bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200 transition-colors self-start sm:self-auto cursor-pointer"
          >
            Explore All Sarees →
          </button>
        </div>

        {/* 7-Column / Responsive Horizontal Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {sareeCategories.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelectCategory('sarees');
                const el = document.getElementById('sarees');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center text-center group cursor-pointer space-y-2.5"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 group-hover:border-[#004d28] shadow-xs group-hover:shadow-md transition-all duration-300 relative bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-2 right-2 text-[9px] font-black uppercase bg-[#004d28] text-amber-300 px-2 py-0.5 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#004d28] underline underline-offset-4 decoration-slate-300 group-hover:decoration-[#004d28] transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
