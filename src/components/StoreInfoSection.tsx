import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation, Building2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const StoreInfoSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 px-4 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Showroom Location & Contact
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Visit RS SINCE - 1977
          </h2>
          <p className="text-xs text-slate-300">
            {STORE_INFO.companyName} • Tirupati Flagship Store & Textile Compound
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-6 bg-emerald-950/60 border border-emerald-800/80 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl shrink-0 font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">Company Name</h3>
                  <p className="text-base text-white font-bold">
                    {STORE_INFO.companyName}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl shrink-0 font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">Full Showroom Address</h3>
                  <p className="text-sm text-slate-200 font-medium leading-relaxed">
                    {STORE_INFO.address}<br />
                    <strong className="text-amber-300">{STORE_INFO.cityState}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl shrink-0 font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">Store Timings</h3>
                  <p className="text-sm text-slate-200 font-medium">
                    {STORE_INFO.timing}
                  </p>
                  <div className="inline-block bg-emerald-800/80 text-emerald-200 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase mt-1">
                    ● Open Today
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl shrink-0 font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">Direct Hotline</h3>
                  <p className="text-lg font-serif font-bold text-white">
                    <a href={`tel:${STORE_INFO.phone}`} className="hover:text-amber-300 transition-colors">
                      {STORE_INFO.phoneFormatted}
                    </a>
                  </p>
                  <p className="text-xs text-slate-400">Call for size availability & saree appointments</p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-emerald-800/60 flex flex-wrap gap-3">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store Now</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello AMRUTA APPAREL / RS SINCE 1977, I would like to visit your showroom in Tirupati.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Map & Directions Panel */}
          <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-amber-400" />
                  <span>Tirupati Store Location</span>
                </h3>
                <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800 font-bold uppercase">
                  Reddygunta Landmark
                </span>
              </div>

              {/* Map Graphic Preview */}
              <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-2xl p-6 text-center space-y-3 relative overflow-hidden">
                <div className="w-14 h-14 bg-emerald-900 rounded-full flex items-center justify-center mx-auto text-amber-300 border border-emerald-700">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="text-base font-bold text-white">{STORE_INFO.companyName}</div>
                <div className="text-xs text-amber-300 font-bold">RS SINCE - 1977 Flagship Compound</div>
                <div className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed pt-1">
                  {STORE_INFO.fullAddress}
                </div>
              </div>
            </div>

            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-700"
            >
              <span>Get Directions on Google Maps (Tirupati)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
