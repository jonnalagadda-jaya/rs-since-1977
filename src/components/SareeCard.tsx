import React from 'react';
import { Sparkles, Award, MessageSquare, Eye } from 'lucide-react';
import type { Saree } from '../types';
import { STORE_INFO } from '../data/storeData';

interface SareeCardProps {
  saree: Saree;
  onQuickView: (saree: Saree) => void;
}

export const SareeCard: React.FC<SareeCardProps> = ({ saree, onQuickView }) => {
  const whatsappMsg = `Hello RS SINCE 1977, I want to inquire about *${saree.name}*. Material: ${saree.material}. Occasion: ${saree.occasion}.`;
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-white border border-emerald-900/15 hover:border-[#004d28] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* Saree Image Preview */}
      <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(saree)}>
        <img
          src={saree.image}
          alt={saree.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/hero_sarees.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <h3 
            className="text-lg font-serif font-bold text-[#004d28] group-hover:text-emerald-900 transition-colors leading-snug cursor-pointer line-clamp-1"
            onClick={() => onQuickView(saree)}
          >
            {saree.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {saree.desc}
          </p>

          {saree.zariType && (
            <div className="text-[11px] font-semibold text-amber-700 pt-0.5">
              ✦ {saree.zariType}
            </div>
          )}
        </div>

        {/* Action Buttons - NO PRICES */}
        <div className="pt-2.5 border-t border-slate-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#004d28] hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            title="Inquire Saree Availability"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>Showroom Inquiry</span>
          </a>
        </div>
      </div>

    </div>
  );
};
