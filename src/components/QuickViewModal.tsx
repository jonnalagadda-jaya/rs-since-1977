import React, { useState } from 'react';
import { X, MessageSquare, Phone, Ruler, ShieldCheck, Scissors } from 'lucide-react';
import type { Product, Fabric, Saree } from '../types';
import { STORE_INFO } from '../data/storeData';

interface QuickViewModalProps {
  item: Product | Fabric | Saree | null;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ item, onClose, onOpenSizeGuide }) => {
  if (!item) return null;

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [meterage, setMeterage] = useState<string>('2.5');

  const isProduct = 'sizes' in item && 'category' in item;
  const isFabric = 'type' in item && 'width' in item;
  const isSaree = 'material' in item && 'desc' in item;

  const getWhatsAppMessage = () => {
    let msg = `Hello RS SINCE 1977, I want to inquire about: *${item.name}*\n`;
    if (isProduct) {
      msg += `• Category: ${(item as Product).category}\n`;
      if (selectedSize) msg += `• Preferred Size: ${selectedSize}\n`;
    }
    if (isFabric) {
      msg += `• Fabric Type: ${(item as Fabric).type}\n`;
      msg += `• Requested Meterage: ${meterage} meters (${(item as Fabric).width})\n`;
    }
    if (isSaree) {
      msg += `• Saree Material: ${(item as Saree).material}\n`;
    }
    msg += `\nPlease share swatch catalog pictures and showroom consultation availability.`;
    return msg;
  };

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-900/20 relative p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Item Image Header Banner */}
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 flex items-center justify-center p-2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = '/hero_fabrics.jpg';
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 z-10">
            <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full inline-block">
              {isProduct ? (item as Product).category : isFabric ? (item as Fabric).type : (item as Saree).occasion}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {item.name}
            </h2>
          </div>
        </div>

        {/* Quality Guarantee Box - NO PRICES */}
        <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100 flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="text-xs text-[#004d28] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>RS SINCE 1977 Showroom Guarantee</span>
            </div>
            <div className="text-[11px] text-slate-600">
              Direct Mill Quality • Swatches & Custom Fit Guidance Available
            </div>
          </div>
          <button 
            onClick={onOpenSizeGuide}
            className="text-xs text-[#004d28] bg-white px-3 py-1.5 rounded-xl border border-emerald-200 font-bold flex items-center gap-1 hover:bg-emerald-100"
          >
            <Ruler className="w-3.5 h-3.5" /> Size Guide
          </button>
        </div>

        {/* Details Section */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {isProduct && (
            <div className="space-y-3">
              <p>{(item as Product).description}</p>
              
              <div className="space-y-2 pt-2">
                <div className="font-bold text-slate-900">Available Standard Sizes:</div>
                <div className="flex flex-wrap gap-2">
                  {(item as Product).sizes.split(',').map((sz) => {
                    const sizeStr = sz.trim();
                    const isSelected = selectedSize === sizeStr;
                    return (
                      <button
                        key={sizeStr}
                        onClick={() => setSelectedSize(sizeStr)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-[#004d28] text-white shadow-sm ring-2 ring-emerald-600'
                            : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'
                        }`}
                      >
                        {sizeStr}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {isFabric && (
            <div className="space-y-3">
              <p>{(item as Fabric).description}</p>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-1.5">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <Scissors className="w-4 h-4 text-amber-700" />
                  <span>Fabric Roll Specifications:</span>
                </div>
                <div className="text-xs text-amber-800 space-y-1">
                  <div>Width: <strong>{(item as Fabric).width}</strong></div>
                  <div>Composition: {(item as Fabric).composition}</div>
                  {(item as Fabric).weavePattern && (
                    <div>Weave Style: <strong>{(item as Fabric).weavePattern}</strong></div>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-900 block">Select Required Meterage (Meters):</label>
                <select 
                  value={meterage} 
                  onChange={(e) => setMeterage(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800"
                >
                  <option value="1.2">1.2 Meters (Standard Shirt Piece)</option>
                  <option value="1.3">1.3 Meters (Full Sleeve Shirt)</option>
                  <option value="1.4">1.4 Meters (XL Shirt Piece)</option>
                  <option value="2.5">2.5 Meters (Trouser Piece)</option>
                  <option value="3.0">3.0 Meters (Safari / Blazer Suit)</option>
                  <option value="3.8">3.8 Meters (Full 2-Piece Suit)</option>
                  <option value="custom">Custom Bulk Meterage (Inquire on WhatsApp)</option>
                </select>
              </div>
            </div>
          )}

          {isSaree && (
            <div className="space-y-3">
              <p>{(item as Saree).desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block font-semibold">Material Weaver:</span>
                  <span className="font-bold text-slate-900">{(item as Saree).material}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block font-semibold">Occasion:</span>
                  <span className="font-bold text-slate-900">{(item as Saree).occasion}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-[#004d28] hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>Inquire Swatch & Consultation</span>
          </a>

          <a
            href={`tel:${STORE_INFO.phone}`}
            className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border border-slate-200"
          >
            <Phone className="w-4 h-4 text-slate-600" />
            <span>Call Store</span>
          </a>
        </div>

      </div>
    </div>
  );
};
