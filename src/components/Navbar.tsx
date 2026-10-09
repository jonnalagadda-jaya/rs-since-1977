import React, { useState, useEffect } from 'react';
import { Menu, X, Ruler, Send, MessageSquare, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import type { CategoryFilter } from '../types';
import { STORE_INFO } from '../data/storeData';

interface NavbarProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  onOpenSizeGuide: () => void;
  onOpenInquiryForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenSizeGuide,
  onOpenInquiryForm
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: CategoryFilter; label: string; sectionId: string }[] = [
    { id: 'gents', label: 'RS Gents Readymades', sectionId: 'gents' },
    { id: 'fabrics', label: 'RS Fabrics', sectionId: 'fabrics' },
    { id: 'sarees', label: 'RS Sarees', sectionId: 'sarees' },
  ];

  const scrollToElement = (id: string, retries = 5) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (retries > 0) {
        scrollToElement(id, retries - 1);
      }
    }, 60);
  };

  const handleNavClick = (id: CategoryFilter, sectionId: string) => {
    onSelectCategory(id);
    setMobileMenuOpen(false);
    scrollToElement(sectionId);
  };

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Hello RS SINCE 1977, I would like to inquire about your fabric & clothing catalog.')}`;

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
      : 'bg-white border-b border-slate-200 py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <div
          className="cursor-pointer flex items-center group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo size="md" variant="emerald" />
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-2 font-medium text-xs text-slate-700">
          {navItems.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.sectionId)}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer font-bold ${isActive
                  ? 'bg-[#004d28] text-white shadow-xs'
                  : 'hover:text-[#004d28] hover:bg-emerald-50'
                  }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            onClick={onOpenSizeGuide}
            className="px-4 py-2 rounded-full hover:text-[#004d28] hover:bg-emerald-50 transition-all font-bold cursor-pointer text-emerald-800"
          >
            Size Matrix
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          {onOpenInquiryForm && (
            <button
              onClick={onOpenInquiryForm}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-[#004d28] hover:bg-emerald-50 transition-colors border border-emerald-300 flex items-center gap-1.5 cursor-pointer shadow-2xs bg-emerald-50/60"
              title="Open Inquiry Form Popup"
            >
              <Send className="w-3.5 h-3.5 text-amber-600" />
              <span>Inquiry Form</span>
            </button>
          )}

          {/* WhatsApp Pill Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#004d28] hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>WhatsApp Hotline</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          {onOpenInquiryForm && (
            <button
              onClick={onOpenInquiryForm}
              className="px-3 py-1.5 text-xs font-bold text-[#004d28] bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-1"
            >
              <Send className="w-3.5 h-3.5 text-amber-600" />
              <span>Inquiry</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 shadow-xl animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1">
              Store Collections
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.sectionId)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${activeCategory === item.id
                  ? 'bg-[#004d28] text-white'
                  : 'text-slate-700 hover:bg-emerald-50 hover:text-[#004d28]'
                  }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              {onOpenInquiryForm && (
                <button
                  onClick={() => {
                    onOpenInquiryForm();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 text-[#004d28] border border-emerald-200 font-bold text-sm"
                >
                  <Send className="w-4 h-4 text-amber-600" />
                  <span>Open Inquiry Form Popup</span>
                </button>
              )}

              <button
                onClick={() => {
                  onOpenSizeGuide();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 font-bold text-sm"
              >
                <Ruler className="w-4 h-4 text-slate-600" />
                <span>View Full Size & Fabric Matrix</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#004d28] text-white font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>WhatsApp Hotline: 9246999508</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
