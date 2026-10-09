import React from 'react';
import { Scissors, Sparkles, GraduationCap, Building2, Palette, Shirt } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shirt className="w-6 h-6 text-amber-400" />,
      title: 'Gents Readymades & Royal Sarees',
      desc: 'Showroom collections of executive shirts, trousers, suits, denim jeans & 100% Silk Mark certified Kanchipuram Pattu sarees.'
    },
    {
      icon: <Scissors className="w-6 h-6 text-amber-400" />,
      title: 'Custom Stitching & Tailoring',
      desc: 'Master tailors on-site for precision custom stitching, coat suit tailoring, alteration adjustments, and bespoke fitting.'
    },
    {
      icon: <Palette className="w-6 h-6 text-amber-400" />,
      title: 'In-House Designers',
      desc: 'Expert fashion & style designers to assist with fabric choices, custom suit design, color matching, and saree styling.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
      title: 'School & College Uniforms',
      desc: 'End-to-end bulk uniform solutions for educational institutions — providing high-durability fabrics and custom batch stitching.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      title: 'Industrial & Corporate Uniforms',
      desc: 'Heavy-duty factory workwear, commercial uniforms, and executive corporate attire tailored for industries & businesses.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: '60" Premium Fabric Rolls',
      desc: 'Direct mill suiting & shirting fabrics (Giza Cotton, Poly Wool, Merino Wool, Pure Linen) in standard 60" width (150 cm).'
    },
  ];

  return (
    <section className="bg-emerald-50/60 border-y border-emerald-900/10 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-[#004d28] uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            About RS SINCE 1977
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#004d28]">
            Your Complete Apparel & Institutional Textile Partner
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Serving individuals, families, schools, and industrial corporations with guaranteed quality since 1977.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div 
              key={idx}
              className="bg-white border border-emerald-900/10 rounded-2xl p-6 space-y-3 shadow-xs hover:shadow-md transition duration-200 text-center sm:text-left"
            >
              <div className="w-12 h-12 bg-[#004d28] rounded-xl flex items-center justify-center shadow-sm mx-auto sm:mx-0">
                {f.icon}
              </div>

              <h3 className="text-base font-serif font-bold text-slate-900">
                {f.title}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
