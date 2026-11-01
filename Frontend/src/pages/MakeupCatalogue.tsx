import React, { useState } from 'react';
import { MessageCircle, Info, Filter } from 'lucide-react';
import { CATALOGUE_PACKAGES, CATALOGUE_FAQS } from '../data/salonData';
import { CatalogueCard } from '../components/CatalogueCard';
import { FaqSection } from '../components/FaqSection';

export const MakeupCatalogue: React.FC = () => {
  const [filterBadge, setFilterBadge] = useState<string>('All');

  const badges = [
    'All',
    'Signature',
    'Wedding Day',
    'Festive',
    'Special Day',
    'Celebration',
    'Party',
    'Night Out',
    'Camera Ready',
  ];

  const filteredPackages = CATALOGUE_PACKAGES.filter((pkg) => {
    if (filterBadge === 'All') return true;
    return pkg.badge === filterBadge;
  });

  return (
    <div className="bg-[#1e0911] text-[#fcedd8] min-h-screen">
      {/* Header Section (Matching video) */}
      <section
        data-aos="fade-up"
        className="py-14 lg:py-20 px-4 lg:px-8 max-w-5xl mx-auto text-center space-y-3"
      >
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans">
          DW SALOONS OFFICIAL
        </span>

        <h1 className="font-cursive text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide">
          The Makeup <span className="text-[#d4af37]">Catalogue</span>
        </h1>

        <p className="text-sm sm:text-base text-amber-200/80 max-w-2xl mx-auto font-sans leading-relaxed">
          From your mehndi to your anniversary night — every look, styled for the occasion it deserves. Browse our signature packages and starting prices below.
        </p>

        {/* Filter Pills */}
        <div data-aos="zoom-in" data-aos-delay="100" className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {badges.map((b) => (
            <button
              key={b}
              onClick={() => setFilterBadge(b)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-200 ${
                filterBadge === b
                  ? 'bg-[#d4af37] text-[#1a060d] shadow-md'
                  : 'bg-[#270c18] border border-[#d4af37]/25 text-amber-200/75 hover:border-[#d4af37] hover:text-white'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </section>

      {/* Catalogue Cards Grid */}
      <section className="pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg, index) => (
            <CatalogueCard key={pkg.id} pkg={pkg} delay={(index % 6) * 100} />
          ))}
        </div>

        {/* Footnote (from video) */}
        <div
          data-aos="zoom-in"
          className="mt-14 max-w-2xl mx-auto text-center p-5 rounded-2xl bg-[#17050d] border border-[#d4af37]/25 space-y-3"
        >
          <p className="text-xs sm:text-sm text-amber-200/80 italic font-sans">
            Prices vary based on look complexity, products used and add-ons. Message us for a custom quote.
          </p>

          <div className="pt-1 flex items-center justify-center gap-3">
            <a
              href="https://wa.me/923343777040"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-sans font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat On WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue FAQ Section */}
      <div className="border-t border-[#d4af37]/20 bg-[#16040d]">
        <FaqSection
          title="Packages & Pricing FAQ"
          subtitle="Answers to common questions regarding customized packages, advance deposits, and group bookings."
          items={CATALOGUE_FAQS}
        />
      </div>
    </div>
  );
};
