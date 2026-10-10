import React from 'react';
import { Award, CheckCircle2, Phone, MessageSquare, ShieldCheck, Scissors, GraduationCap, Building2, Palette, Sparkles, Shirt } from 'lucide-react';
import type { CategoryFilter } from '../types';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onSelectCategory: (category: CategoryFilter) => void;
  onOpenSizeGuide: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello RS SINCE 1977, I want to inquire about your apparel, sarees, custom stitching, or bulk uniform services.')}`;

  return (
    <section className="bg-white border-b border-slate-200 py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* MAIN HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6">


            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              SINCE - 1977 we are serving the people of tirupati with great respect and reputation Complete Apparel & Textile Destination — Featuring <strong>Gents Readymades</strong>, <strong>Sarees</strong>, and <strong>Highlighting Premium Fabrics</strong>. We have good strength <strong>Custom Stitching</strong>, <strong>In-House Designers</strong>, and Bulk Uniform orders for <strong>Schools</strong>, <strong>Colleges</strong> & <strong>Industrial Enterprises</strong>.
            </p>

            {/* Business Service Quick Chips */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-bold text-slate-800">
              <span className="bg-emerald-50 text-[#004d28] border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs">
                <Shirt className="w-3.5 h-3.5 text-emerald-700" />
                <span>Gents Readymades</span>
              </span>
              <span className="bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Royal Silk Sarees</span>
              </span>
              <span className="bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs">
                <Scissors className="w-3.5 h-3.5 text-slate-700" />
                <span>Custom Stitching & Tailoring</span>
              </span>
              <span className="bg-purple-50 text-purple-900 border border-purple-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs">
                <Palette className="w-3.5 h-3.5 text-purple-700" />
                <span>In-House Designers</span>
              </span>
              <span className="bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                <span>School & College Uniforms</span>
              </span>
              <span className="bg-orange-50 text-orange-900 border border-orange-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-orange-700" />
                <span>Industrial & Corporate Orders</span>
              </span>
            </div>

            {/* Store Phone Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 border border-slate-200">
              <Phone className="w-4 h-4 text-[#004d28]" />
              <span>Direct Store Hotline: <strong>{STORE_INFO.phoneFormatted}</strong></span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#004d28] hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>WhatsApp Order & Inquiry</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Showroom</span>
              </a>
            </div>

          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3]">
                <img src="/fabric_giza_cotton.jpg" alt="Giza Cotton & Fabrics" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3]">
                <img src="/fabric_suiting_wool.jpg" alt="Custom Suiting & Tailoring" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
            </div>
            <div className="space-y-3 pt-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3]">
                <img src="/saree_kanchipuram.jpg" alt="Kanchipuram Silk Sarees" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3]">
                <img src="/hero_gents.jpg" alt="Gents Readymades & Uniforms" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>

        </div>

        {/* 4 BUSINESS PILLARS SHOWCASE STRIP */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-slate-900">
              Our Complete Range of Services & Specializations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From family festive shopping to large-scale institutional uniform bulk orders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 bg-emerald-100 text-[#004d28] rounded-xl flex items-center justify-center font-bold">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900">Gents Readymades & Sarees</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Executive shirts, trousers, suits, denim jeans & 100% Silk Mark certified Kanchipuram Pattu sarees.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 bg-purple-100 text-purple-900 rounded-xl flex items-center justify-center font-bold">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900">Custom Tailoring & Designers</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bespoke stitching services with in-house fashion designers for custom fits, suit styling, and saree details.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900">School & College Uniforms</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complete uniform fabric supply and custom batch stitching for schools, colleges, and educational institutes.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 bg-orange-100 text-orange-900 rounded-xl flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900">Industrial & Corporate Orders</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Heavy-duty workwear, factory uniforms, and corporate executive attire for industrial contracts.
              </p>
            </div>
          </div>

          {/* Trust Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-slate-800 border-t border-slate-200/80">
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#004d28]" />
              <span>Est. 1977 — 47+ Years Trust</span>
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-2xs">
              <Scissors className="w-4 h-4 text-[#004d28]" />
              <span>In-House Custom Stitching</span>
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-2xs">
              <Award className="w-4 h-4 text-[#004d28]" />
              <span>Silk Mark Certified</span>
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#004d28]" />
              <span>Bulk School & Industry Supply</span>
            </span>
          </div>
        </div>

        {/* 4-COLUMN STATS COUNTER BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#004d28]">47+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Years of Excellence</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#004d28]">60"</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Standard Fabric Width</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#004d28]">100+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">School & Industry Clients</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#004d28]">20,000+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Happy Store Customers</div>
          </div>
        </div>

      </div>
    </section>
  );
};
