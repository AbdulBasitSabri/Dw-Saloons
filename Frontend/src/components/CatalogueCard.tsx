import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, CheckCircle2 } from 'lucide-react';
import type { CataloguePackage } from '../data/salonData';

interface CatalogueCardProps {
  pkg: CataloguePackage;
  onBookClick?: (lookName: string) => void;
  delay?: number;
}

export const CatalogueCard: React.FC<CatalogueCardProps> = ({ pkg, onBookClick, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-[#290c19] border border-[#d4af37]/25 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/75 hover:shadow-2xl hover:-translate-y-1 group"
    >
      {/* Visual & Badge */}
      <div className="relative `aspect-[4/3]` overflow-hidden bg-[#1a070e]">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 `bg-gradient-to-t` from-[#290c19] via-black/20 to-transparent" />

        {/* Top Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-[#1c0812]/90 backdrop-blur-md border border-[#d4af37]/50 rounded-full text-[11px] font-semibold text-[#f3d068] tracking-wide flex items-center gap-1.5 shadow-md">
          <Crown className="w-3 h-3 text-[#d4af37]" />
          <span className="font-sans">{pkg.badge}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex flex-col `flex-grow` justify-between">
        <div>
          <h3 className="font-cursive text-3xl text-amber-100 group-hover:text-[#d4af37] transition-colors mb-1 tracking-wide">
            {pkg.title}
          </h3>
          <p className="text-xs text-amber-200/75 leading-relaxed mb-4 `min-h-[48px]`">
            {pkg.description}
          </p>

          {pkg.features && pkg.features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {pkg.features.map((feat) => (
                <span
                  key={feat}
                  className="text-[10px] bg-[#1d0711] text-amber-200/80 px-2.5 py-1 rounded-md border border-[#d4af37]/20 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#d4af37]" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing and CTA */}
        <div className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] tracking-widest text-[#d4af37]/80 uppercase font-semibold">
              STARTING FROM
            </span>
            <span className="text-lg lg:text-xl font-bold text-amber-50 font-sans tabular-nums">
              {pkg.price}
            </span>
          </div>

          <Link
            to={`/appointment-booking?look=${encodeURIComponent(pkg.title)}`}
            onClick={() => onBookClick?.(pkg.title)}
            className="btn-gold px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};
