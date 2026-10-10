import { useState } from 'react';
import { Shirt, Scissors, Sparkles } from 'lucide-react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductCard } from './components/ProductCard';
import { FabricCard } from './components/FabricCard';
import { SareeCard } from './components/SareeCard';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';
import { HeritageSection } from './components/HeritageSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { StoreInfoSection } from './components/StoreInfoSection';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';

import { GENTS_PRODUCTS, FABRICS_DATA, SAREES_DATA } from './data/storeData';
import type { CategoryFilter, Product, Fabric, Saree } from './types';

export function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedQuickView, setSelectedQuickView] = useState<Product | Fabric | Saree | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [toast, setToast] = useState<{ isOpen: boolean; message: string; type: 'success' | 'error' }>({
    isOpen: false,
    message: '',
    type: 'success',
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ isOpen: true, message, type });
  };

  const counts = {
    all: GENTS_PRODUCTS.length + FABRICS_DATA.length + SAREES_DATA.length,
    gents: GENTS_PRODUCTS.length,
    fabrics: FABRICS_DATA.length,
    sarees: SAREES_DATA.length,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#004d28] selection:text-white">

      {/* Announcement Header Bar */}
      <AnnouncementBar />

      {/* Navigation Header */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          if (cat === 'sizes') {
            setIsSizeGuideOpen(true);
          } else {
            setActiveCategory(cat);
          }
        }}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenInquiryForm={() => setIsInquiryModalOpen(true)}
      />

      {/* Main Hero & Trust Strip (Weaveify Style) */}
      <Hero
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Store Catalog Section */}
      <main id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        {/* Category Tabs Filter */}
        <div className="bg-white p-4 rounded-3xl shadow-xs border border-slate-200 sticky top-20 z-30">
          <CategoryTabs
            activeCategory={activeCategory}
            onSelectCategory={(cat) => {
              if (cat === 'sizes') {
                setIsSizeGuideOpen(true);
              } else {
                setActiveCategory(cat);
              }
            }}
            counts={counts}
          />
        </div>

        {/* SECTION 1: GENTS READY MADES */}
        <section id="gents" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-emerald-900/15 gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#004d28] text-white rounded-2xl shadow-xs">
                <Shirt className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#004d28]">
                  GENTS READY MADES
                </h2>
                <p className="text-xs text-slate-500">
                  Executive shirts, trousers, jeans, blazers, 2-piece suits & wedding suits
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold text-[#004d28] self-start sm:self-auto">
              Shirts: 38–48 | Trousers: 28–48 | Suits: 36–46
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GENTS_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedQuickView(p)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 2: FABRICS */}
        <section id="fabrics" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-emerald-900/15 gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#004d28] text-white rounded-2xl shadow-xs">
                <Scissors className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#004d28]">
                  FABRICS
                </h2>
                <p className="text-xs text-slate-500">
                  Premium suiting & shirting cloth rolls (Giza Cotton, Poly Wool, Merino Wool, Pure Linen)
                </p>
              </div>
            </div>

            <span className="bg-[#004d28] text-amber-300 text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider self-start sm:self-auto shadow-xs border border-emerald-800">
              SUITING & SHIRTING SIZE: 60" WIDTH (150 CM)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FABRICS_DATA.map((fabric) => (
              <FabricCard
                key={fabric.id}
                fabric={fabric}
                onQuickView={(f) => setSelectedQuickView(f)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 3: SAREES */}
        <section id="sarees" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-emerald-900/15 gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#004d28] text-white rounded-2xl shadow-xs">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#004d28]">
                  SAREES COLLECTION
                </h2>
                <p className="text-xs text-slate-500">
                  Pure Kanchipuram Pattu, Half Pattu, Designer Embroidery & Shimmer Organza
                </p>
              </div>
            </div>

            <span className="bg-amber-400 text-slate-950 text-xs font-black px-4 py-2 rounded-xl uppercase tracking-wider self-start sm:self-auto shadow-xs">
              100% SILK MARK CERTIFIED PATTU
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAREES_DATA.map((saree) => (
              <SareeCard
                key={saree.id}
                saree={saree}
                onQuickView={(s) => setSelectedQuickView(s)}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Feature Value Grid */}
      <WhyChooseUs />

      {/* 4-Step Consultation Workflow */}
      <ProcessSection />

      {/* 1977 History */}
      <HeritageSection />

      {/* Store FAQ Section */}
      <FAQSection />

      {/* Patron Reviews */}
      <Testimonials />

      {/* Contact & Inquiry Form */}
      <ContactSection onShowToast={showToast} />

      {/* Showroom Location & Address */}
      <StoreInfoSection />

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Overlays */}
      <QuickViewModal
        item={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
        onOpenSizeGuide={() => {
          setSelectedQuickView(null);
          setIsSizeGuideOpen(true);
        }}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <ContactModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Reusable Toast Notification */}
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Floating Action Button */}
      <WhatsAppFloat />

    </div>
  );
}

export default App;
