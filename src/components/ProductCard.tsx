import React from 'react';
import { Eye, MessageSquare, Tag, Sparkles } from 'lucide-react';
import type { Product } from '../types';
import { STORE_INFO } from '../data/storeData';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const whatsappMsg = `Hello RS SINCE 1977, I want to inquire about *${product.name}* (${product.price || ''}). Category: ${product.category}. Available Sizes: ${product.sizes}.`;
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-white border border-emerald-900/15 hover:border-[#004d28] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* Product Image Thumbnail */}
      <div className="relative h-52 sm:h-56 w-full bg-slate-100 overflow-hidden cursor-pointer flex items-center justify-center p-2" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/hero_gents.jpg';
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Bottom Fabric Spec on Image */}
        <div className="absolute bottom-2 left-3 right-3 text-white flex items-center justify-between">
          <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="truncate">{product.fabricType || 'Hand-Selected Fabric'}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <h3 
            className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#004d28] transition-colors leading-snug cursor-pointer line-clamp-1"
            onClick={() => onQuickView(product)}
          >
            {product.name}
          </h3>

          {product.description && (
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Price & Available Size Badges */}
        <div className="pt-2.5 border-t border-slate-100 space-y-2">
          {product.price && (
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-slate-500 font-medium">Price:</span>
              <span className="text-lg font-serif font-bold text-[#004d28]">{product.price}</span>
            </div>
          )}

          <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100/80 text-xs font-bold text-emerald-950">
            <div className="text-[11px] text-[#004d28] font-bold">Sizes Available:</div>
            <div className="text-xs font-extrabold text-slate-800 tracking-wide line-clamp-1">
              {product.sizes}
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="pt-1.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#004d28] hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            title="Inquire Fit & Availability"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>Inquire</span>
          </a>
        </div>
      </div>

    </div>
  );
};
