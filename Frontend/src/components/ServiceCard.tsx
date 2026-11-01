import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type  { ServiceItem } from '../data/salonData';

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'grid' | 'arched';
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'grid', delay = 0 }) => {
  if (variant === 'arched') {
    return (
      <div
        data-aos="fade-up"
        data-aos-delay={delay}
        className="flex flex-col items-center group"
      >
        {/* Arched Photo Frame (as shown in video "We Are Proud Of Our Service") */}
        <div className="w-full aspect-[3/4] max-w-[240px] rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-xl bg-[#2b0c19] relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#d4af37]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>

        {/* Title and Description */}
        <h3 className="font-cursive text-2xl sm:text-3xl text-amber-100 text-center mt-3 mb-1 group-hover:text-[#d4af37] transition-colors tracking-wide">
          {service.title}
        </h3>
        <p className="text-xs text-amber-200/70 text-center max-w-[220px] leading-relaxed font-sans">
          {service.description}
        </p>

        <Link
          to={`/appointment-booking?look=${encodeURIComponent(service.title)}`}
          className="mt-3 text-xs font-semibold text-[#d4af37] hover:text-[#f3d068] inline-flex items-center gap-1 uppercase tracking-wider font-sans"
        >
          <span>Book Treatment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-[#2a0c1a] border border-[#d4af37]/25 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#d4af37]/70 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1f0913]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0c1a] via-black/20 to-transparent" />
        {service.duration && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#1a070e]/85 backdrop-blur-md border border-[#d4af37]/40 text-[#fcedd8] text-[11px] font-medium rounded-full font-sans">
            {service.duration}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-cursive text-3xl text-amber-50 group-hover:text-[#d4af37] transition-colors mb-1 tracking-wide">
            {service.title}
          </h3>
          <p className="text-xs text-amber-200/75 leading-relaxed mb-4 font-sans">
            {service.description}
          </p>
        </div>

        <Link
          to={`/appointment-booking?look=${encodeURIComponent(service.title)}`}
          className="btn-gold-outline w-full py-2.5 rounded-lg text-xs tracking-wider uppercase text-center block font-semibold hover:border-[#d4af37]"
        >
          Reserve Session
        </Link>
      </div>
    </div>
  );
};
