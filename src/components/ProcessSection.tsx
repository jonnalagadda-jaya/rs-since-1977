import React from 'react';
import { Search, Scissors, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <Search className="w-6 h-6 text-amber-300" />,
      title: 'Explore Collections',
      desc: 'Browse our catalog of 60" width suiting & shirting fabrics, readymade shirts/trousers, and Silk Mark sarees.'
    },
    {
      step: '02',
      icon: <Scissors className="w-6 h-6 text-amber-300" />,
      title: 'Check Size & Meterage',
      desc: 'Verify required shirt size (38-48), trouser waist (28-48), or select 1.3m / 2.5m fabric roll cut.'
    },
    {
      step: '03',
      icon: <MessageSquare className="w-6 h-6 text-amber-300" />,
      title: 'WhatsApp Swatch Inquiry',
      desc: 'Send instant WhatsApp inquiry to get fabric swatch photos, color options, and showroom availability.'
    },
    {
      step: '04',
      icon: <CheckCircle2 className="w-6 h-6 text-amber-300" />,
      title: 'Showroom Visit & Fitting',
      desc: 'Visit our main showroom to touch real swatches, get custom fit measurements, and enjoy guaranteed quality.'
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-14 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Simple 4-Step Store Consultation
          </h2>
          <p className="text-xs text-slate-400">
            Getting your ideal fabric swatch or custom readymade fit is fast & seamless
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div 
              key={s.step}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3 relative group hover:border-emerald-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center border border-emerald-800">
                  {s.icon}
                </div>
                <span className="text-2xl font-serif font-black text-amber-300">
                  {s.step}
                </span>
              </div>

              <h3 className="text-base font-serif font-bold text-white">
                {s.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
