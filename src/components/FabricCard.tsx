import React from 'react';
import { Scissors, MessageSquare, Eye, Palette, Sparkles } from 'lucide-react';
import type { Fabric } from '../types';
import { STORE_INFO } from '../data/storeData';

interface FabricCardProps {
  fabric: Fabric;
  onQuickView: (fabric: Fabric) => void;
}

export const FabricCard: React.FC<FabricCardProps> = ({ fabric, onQuickView }) => {
  const whatsappMsg = `Hello RS SINCE 1977, I want to inquire about *${fabric.name}* fabric (${fabric.price || 'Roll Availability'}). Type: ${fabric.type}, Width: ${fabric.width}. Composition: ${fabric.composition}.`;
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-white border border-emerald-900/15 hover:border-[#004d28] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* Fabric Swatch Image Preview */}
      <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(fabric)}>
        <img
          src={fabric.image}
          alt={fabric.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/hero_fabrics.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* Weave Spec on Image */}
        {fabric.weavePattern && (
          <div className="absolute bottom-2 left-3 right-3 text-white">
            <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{fabric.weavePattern}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex justify-between items-start">
            <h3 
              className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#004d28] transition-colors leading-snug cursor-pointer line-clamp-1"
              onClick={() => onQuickView(fabric)}
            >
              {fabric.name}
            </h3>
            {fabric.badge && (
              <span className="text-[9px] font-black uppercase bg-emerald-50 text-[#004d28] border border-emerald-200 px-2 py-0.5 rounded-full shrink-0 ml-1">
                {fabric.badge}
              </span>
            )}
          </div>

          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {fabric.composition}
          </p>
        </div>

        {/* Color Options Swatches */}
        {fabric.colorOptions && fabric.colorOptions.length > 0 && (
          <div className="space-y-1 pt-1">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <Palette className="w-3 h-3 text-slate-400" />
              <span>Shades:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {fabric.colorOptions.map((c, i) => (
                <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price display if available */}
        {fabric.price && (
          <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
            <span className="text-xs text-slate-500 font-medium">Per Meter:</span>
            <span className="text-lg font-serif font-bold text-[#004d28]">{fabric.price}</span>
          </div>
        )}

        {/* Action buttons */}
        <div className="pt-1.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#004d28] hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            title="Inquire Fabric Swatch & Stock"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>Inquire Swatch</span>
          </a>
        </div>
      </div>

    </div>
  );
};
