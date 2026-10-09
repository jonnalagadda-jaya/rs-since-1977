import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/storeData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 px-4 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-[#004d28] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Customer Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Trusted Across Generations
          </h2>
          <p className="text-xs text-slate-500">
            Hear from our esteemed patrons who have been shopping with us since 1977
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="bg-emerald-50/40 border border-emerald-900/10 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-800/20" />
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-900/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#004d28] font-serif">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.role} • {t.location}</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
