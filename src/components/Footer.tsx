import React from 'react';
import { MapPin, Phone, Clock, ChevronRight, Heart, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { STORE_INFO } from '../data/storeData';
import type { CategoryFilter } from '../types';

interface FooterProps {
  onSelectCategory: (category: CategoryFilter) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenSizeGuide }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo size="md" variant="light" />
            <p className="text-slate-400 leading-relaxed text-xs">
              Premier destination for Gents Readymades, 60" Width Suiting & Shirting Fabrics, and Handcrafted Royal Silk Sarees since 1977.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-300 font-bold bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/60">
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Silk Mark & Standard Mill Quality Certified</span>
            </div>
          </div>

          {/* Quick Category Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider text-amber-300">
              Catalog Categories
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => onSelectCategory('gents')} 
                  className="hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Gents Readymades (Shirts 38-48, Trousers 28-48)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('fabrics')} 
                  className="hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Fabrics (Giza Cotton, Poly Wool 60" Width)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('sarees')} 
                  className="hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Royal Pure Kanchipuram & Silk Sarees</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSizeGuide} 
                  className="hover:text-amber-300 flex items-center gap-1.5 transition-colors font-bold text-emerald-400 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Official Size Guide & Roll Specs</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Store Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider text-amber-300">
              Store Location
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}, {STORE_INFO.cityState}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{STORE_INFO.timing}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-amber-300 font-bold text-white">
                  {STORE_INFO.phoneFormatted}
                </a>
              </p>
            </div>
          </div>

          {/* Store Hours & Assistance */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider text-amber-300">
              Customer Assistance
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Have questions about fabric meterage requirements or size fitting? Call our showroom staff directly.
            </p>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Call 9246999508</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} RS SINCE - 1977. All Rights Reserved. Gents Readymades, Fabrics & Sarees Store.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Quality Clothing Heritage</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
