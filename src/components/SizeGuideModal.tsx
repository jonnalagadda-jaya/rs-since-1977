import React from 'react';
import { X, Ruler, Shirt, Scissors } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shirtSizes = [
    { size: '38 (S)', chest: '38" / 96 cm', neck: '15"', shoulder: '17.5"' },
    { size: '40 (M)', chest: '40" / 102 cm', neck: '15.5"', shoulder: '18"' },
    { size: '42 (L)', chest: '42" / 107 cm', neck: '16"', shoulder: '18.5"' },
    { size: '44 (XL)', chest: '44" / 112 cm', neck: '16.5"', shoulder: '19"' },
    { size: '46 (XXL)', chest: '46" / 117 cm', neck: '17"', shoulder: '19.5"' },
    { size: '48 (3XL)', chest: '48" / 122 cm', neck: '17.5"', shoulder: '20"' },
  ];

  const trouserSizes = ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48'];
  const suitSizes = ['36', '38', '40', '42', '44', '46'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-900/20 relative p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
          <div className="p-3 bg-[#004d28] text-white rounded-2xl shadow-sm">
            <Ruler className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#004d28]">
              OFFICIAL SIZE & FABRIC SPECIFICATIONS
            </h2>
            <p className="text-xs text-slate-500">
              RS SINCE - 1977 Sizing Matrix & Fabric Width Measurement Guide
            </p>
          </div>
        </div>

        {/* SECTION 1: SHIRT SIZE TABLE */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#004d28] uppercase tracking-wider flex items-center gap-2">
            <Shirt className="w-4 h-4 text-emerald-600" />
            <span>Readymade Shirt Size Chart</span>
          </h3>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-emerald-50 text-[#004d28] font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">Shirt Size</th>
                  <th className="p-2.5">Chest (Inches / CM)</th>
                  <th className="p-2.5">Neck Collar</th>
                  <th className="p-2.5">Shoulder Width</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {shirtSizes.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-[#004d28]">{row.size}</td>
                    <td className="p-2.5">{row.chest}</td>
                    <td className="p-2.5">{row.neck}</td>
                    <td className="p-2.5">{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 2: TROUSERS & SUITS MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Trouser Waist Sizes */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="text-xs font-bold text-[#004d28] uppercase tracking-wider">
              Readymade Trouser Waist Sizes
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {trouserSizes.map((sz) => (
                <span key={sz} className="px-2.5 py-1 bg-white text-[#004d28] text-xs font-black rounded-lg border border-emerald-200 shadow-2xs">
                  {sz}"
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Available in Slim Fit, Executive Fit & Stretch Comfort Waistband.
            </p>
          </div>

          {/* Suit & Blazer Sizes */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="text-xs font-bold text-[#004d28] uppercase tracking-wider">
              Suit & Blazer Chest Sizes
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {suitSizes.map((sz) => (
                <span key={sz} className="px-3 py-1 bg-white text-[#004d28] text-xs font-black rounded-lg border border-emerald-200 shadow-2xs">
                  {sz}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              2-Piece, 3-Piece Tuxedos, and Tweed Blazers in standard drop 6 fittings.
            </p>
          </div>
        </div>

        {/* SECTION 3: FABRIC ROLL WIDTH SPECIFICATIONS */}
        <div className="bg-gradient-to-br from-emerald-900 to-[#004d28] text-white p-5 rounded-2xl space-y-3">
          <div className="flex items-center space-x-2 text-amber-300">
            <Scissors className="w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Unstitched Fabric Width & Meterage Guide
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-700">
              <span className="text-amber-300 font-bold block">Suiting Fabrics:</span>
              <span><strong>60" Width (150 cm)</strong> — Standard 1.25m for Trouser, 3.0m for Safari, 3.8m for Suit.</span>
            </div>
            <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-700">
              <span className="text-amber-300 font-bold block">Shirting Fabrics:</span>
              <span><strong>60" Width (150 cm)</strong> — Standard 1.30m for Half Sleeve, 1.60m for Full Sleeve Shirt.</span>
            </div>
          </div>
        </div>

        {/* Footer info button */}
        <div className="text-center pt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-[#004d28] hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            Close Size Matrix
          </button>
        </div>

      </div>
    </div>
  );
};
