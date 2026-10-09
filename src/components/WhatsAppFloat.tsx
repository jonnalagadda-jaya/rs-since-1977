import React from 'react';
import { MessageSquare } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello RS SINCE 1977, I would like to inquire about your clothing catalog & fabrics.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip badge */}
      <div className="hidden sm:block bg-slate-900 text-emerald-100 text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-lg border border-emerald-800 animate-bounce">
        Chat with RS SINCE 1977 👋
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-amber-300 group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-amber-300 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
