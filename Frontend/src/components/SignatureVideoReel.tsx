import React from 'react';
import { Link } from 'react-router-dom';
import  { Crown, Calendar } from 'lucide-react';
import type { VideoReelItem } from '../data/salonData';

interface SignatureCardProps {
  item: VideoReelItem;
  delay?: number;
}

export const SignatureVideoReel: React.FC<SignatureCardProps> = ({ item, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/30 bg-[#250a17] shadow-2xl transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_12px_30px_rgba(212,175,55,0.25)] flex flex-col"
    >
      {/* Image Container (Preserving original vertical card layout) */}
      <div className="relative `aspect-[9/14] sm:aspect-[3/4]` w-full bg-[#1b0610] overflow-hidden">
        <img
          src={item.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 `bg-gradient-to-t` from-black/85 via-black/20 to-black/40 pointer-events-none" />

        {/* Top Header Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#17050d]/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f3d068] text-[11px] font-semibold">
            <Crown className="w-3 h-3 text-[#d4af37]" />
            <span className="font-sans">Signature Aesthetic</span>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200/80 text-[11px] font-sans border border-white/10">
            {item.handle}
          </div>
        </div>
      </div>

      {/* Card Footer Details */}
      <div className="p-4 bg-[#1f0913] border-t border-[#d4af37]/20 flex flex-col justify-between `flex-grow`">
        <div>
          <h4 className="font-cursive text-2xl sm:text-3xl text-amber-100 group-hover:text-[#d4af37] transition-colors mb-1 tracking-wide">
            {item.title}
          </h4>

          <div className="flex flex-wrap gap-1.5 my-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-amber-200/70 bg-[#2b0e1b] px-2 py-0.5 rounded border border-[#d4af37]/20 font-sans"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-[#d4af37]/15 flex items-center justify-between">
          <span className="text-[11px] text-[#d4af37] font-semibold flex items-center gap-1">
            {/* <Instagram className="w-3.5 h-3.5" /> */}
            <span>@dwsaloons.official</span>
          </span>

          <Link
            to={`/appointment-booking?look=${encodeURIComponent(item.title)}`}
            className="btn-gold px-3.5 py-1.5 rounded-md text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1 hover:scale-105 active:scale-95 transition-transform"
          >
            <Calendar className="w-3 h-3" />
            <span>Book Look</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
