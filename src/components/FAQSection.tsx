import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the width standard for unstitched suiting & shirting fabrics?',
      a: 'All our suiting and shirting fabric rolls come in standard 60" width (150 cm), providing ample width for European and Italian custom trouser, shirt, and suit tailoring patterns.'
    },
    {
      q: 'What readymade sizes are available for Gents shirts, trousers & suits?',
      a: 'We maintain extensive inventory in readymade formal & casual shirts (sizes 38, 40, 42, 44, 46, 48), trousers & jeans (waist sizes 28 to 48), and suit blazers (chest 36 to 46).'
    },
    {
      q: 'Are your Kanchipuram silk sarees certified authentic pure silk?',
      a: 'Yes, every pure Kanchipuram pattu saree in our royal collection carries official Silk Mark certification woven with pure tested gold/silver zari.'
    },
    {
      q: 'Can I request fabric swatch photos on WhatsApp before visiting?',
      a: 'Absolutely! Click the "WhatsApp Hotline" button anywhere on our website to request high-definition swatch pictures, shade options, and fabric roll meterage quotes.'
    },
    {
      q: 'What are your showroom opening hours and address?',
      a: 'Our main showroom at Commercial Textile Center, Main Road is open 7 days a week from 10:00 AM to 9:30 PM. Call us at 9246999508 for direction assistance.'
    },
  ];

  return (
    <section className="bg-white py-14 px-4 border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-[#004d28] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Got Questions? We Have Answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-serif font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 bg-slate-50 hover:bg-emerald-50/50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#004d28] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-[#004d28]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
