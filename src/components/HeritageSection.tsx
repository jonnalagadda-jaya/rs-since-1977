import React from 'react';
import { History } from 'lucide-react';
import { HERITAGE_MILESTONES } from '../data/storeData';

export const HeritageSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-[#061d12] to-slate-900 text-white py-16 px-4 relative overflow-hidden">
      
      {/* Decorative Gold Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-amber-400/30">
            <History className="w-3.5 h-3.5" />
            <span>SINCE 1977 HERITAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white">
            47+ Years of Tailoring Excellence & Quality Fabrics
          </h2>

          <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
            From an unstitched suiting cloth house to a flagship multi-category destination for Gents Readymades, 60" Width Fabrics, and Royal Pure Pattu Sarees.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HERITAGE_MILESTONES.map((item, idx) => (
            <div 
              key={idx}
              className="bg-emerald-950/40 border border-emerald-800/60 hover:border-amber-400/50 rounded-2xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-lg relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black text-amber-300 group-hover:text-amber-400">
                  {item.year}
                </span>
                <span className="w-8 h-8 rounded-full bg-emerald-900/60 border border-emerald-700 flex items-center justify-center text-amber-300 text-xs font-bold">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-white">
                {item.title}
              </h3>

              <p className="text-xs text-emerald-100/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Heritage Trust Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-emerald-900/50 to-amber-500/20 border border-amber-400/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-serif font-bold text-amber-300">
              Visit Our Showroom Experience
            </h4>
            <p className="text-xs text-emerald-100">
              Touch and feel authentic Giza Cotton, Merino Wool, and Pure Kanchipuram Silk with expert tailoring consultation.
            </p>
          </div>

          <a
            href="tel:9246999508"
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            Call Showroom Direct
          </a>
        </div>

      </div>
    </section>
  );
};
