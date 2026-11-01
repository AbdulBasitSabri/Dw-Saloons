import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Check, ArrowRight } from 'lucide-react';
import { EXPLORE_SERVICES, PROUD_SERVICES, SERVICES_FAQS } from '../data/salonData';
import { ServiceCard } from '../components/ServiceCard';
import { FaqSection } from '../components/FaqSection';

export const Services: React.FC = () => {
  return (
    <div className="bg-[#1e0911] text-[#fcedd8] min-h-screen">
      {/* Top Header Section */}
      <section
        data-aos="fade-up"
        className="py-14 lg:py-20 px-4 lg:px-8 max-w-5xl mx-auto text-center space-y-4"
      >
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans">
          DW SALOONS OFFICIAL
        </span>

        <h1 className="font-cursive text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide">
          Your Satisfaction Is <span className="text-[#d4af37]">Our Priority</span>
        </h1>

        <p className="text-sm sm:text-base text-amber-200/80 max-w-2xl mx-auto leading-relaxed font-sans">
          We perform a full spectrum of bridal couture, makeup artistry, facials, and clinical skin and hair treatments using sophisticated, customizable techniques tailored to your unique elegance.
        </p>
      </section>

      {/* Explore Our Services (4 Main Services - As shown in video) */}
      <section className="pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans block mb-1">
            HAUTE TREATMENTS
          </span>
          <h2 className="font-cursive text-4xl sm:text-5xl text-white tracking-wide">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPLORE_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} variant="grid" delay={index * 120} />
          ))}
        </div>
      </section>

      {/* "We Are Proud Of Our Service" Section (Arched frames from video) */}
      <section className="py-20 bg-[#17050d] border-t border-[#d4af37]/25 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase font-sans block mb-1">
              HAUTE ATELIER
            </span>
            <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
              We Are Proud Of <span className="text-[#d4af37]">Our Service</span>
            </h2>
          </div>

          {/* 5 Arched Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {PROUD_SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} variant="arched" delay={index * 120} />
            ))}
          </div>

          <div data-aos="zoom-in" className="mt-14 text-center">
            <Link
              to="/appointment-booking"
              className="btn-gold px-8 py-3.5 rounded-md text-xs sm:text-sm font-sans font-bold tracking-widest uppercase inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Specialized Service</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <div className="border-t border-[#d4af37]/20 bg-[#15040b]">
        <FaqSection
          title="Services & Treatments FAQ"
          subtitle="Everything you need to know about our skin preparations, bridal duration, and specialized organic treatments."
          items={SERVICES_FAQS}
        />
      </div>
    </div>
  );
};
