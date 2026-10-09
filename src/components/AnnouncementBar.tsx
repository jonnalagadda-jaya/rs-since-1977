import React from 'react';
import { Sparkles, Clock, Phone, MessageSquare } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#00381d] text-emerald-50 text-xs py-2 px-4 border-b border-emerald-800/60 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        
        {/* Banner Message */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <span className="bg-amber-400/20 text-amber-300 p-1 rounded-full border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="font-semibold tracking-wide">
            RS SINCE 1977 — 47+ Years of Legacy & Quality Craftsmanship
          </span>
          <span className="hidden lg:inline-block bg-amber-400/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
            Showroom Open
          </span>
        </div>

        {/* Quick Contact & Hours */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-emerald-100">
          <span className="flex items-center gap-1.5 bg-emerald-950/40 px-2.5 py-0.5 rounded-md border border-emerald-800/40">
            <Clock className="w-3.5 h-3.5 text-amber-300" /> 
            <span>{STORE_INFO.timing}</span>
          </span>
          
          <a 
            href={`tel:${STORE_INFO.phone}`} 
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium"
            title="Call Showroom"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>{STORE_INFO.phoneFormatted}</span>
          </a>

          <a 
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello RS SINCE 1977, I would like to inquire about your collection.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded-md transition-all font-semibold shadow-sm"
          >
            <MessageSquare className="w-3 h-3 text-amber-300" />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>

      </div>
    </div>
  );
};
