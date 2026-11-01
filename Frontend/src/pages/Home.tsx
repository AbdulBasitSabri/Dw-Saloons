import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin,  ArrowRight } from 'lucide-react';
import { SALON_INFO, SIGNATURE_VIDEOS, GENERAL_FAQS } from '../data/salonData';
import { SignatureVideoReel } from '../components/SignatureVideoReel';
import { FaqSection } from '../components/FaqSection';
import heroBridalImg from '../assets/images/home1.jfif';
import salonInteriorImg from '../assets/images/Parlour interiour .jfif';
import partyGlamImg from '../assets/images/home2.jfif';
import mehndiImg from '../assets/images/home3.jfif';
import skincareImg from '../assets/images/home4.jfif';

export const Home: React.FC = () => {
  return (
    <div className="`bg-[#000]` text-[#fcedd8] min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-1">
              <h1 className="font-cursive text-5xl sm:text-6xl lg:text-7xl text-[#d4af37] leading-tight tracking-wide">
                Welcome to DW Saloons
              </h1>
              <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90 uppercase block pt-1">
                Official Luxury Beauty & Bridal Studio
              </span>
            </div>

            <p className="font-cursive text-3xl sm:text-4xl text-[#f3d068] tracking-wide pt-1">
              Enhance Your Beauty with DW Saloons
            </p>

            <p className="text-sm sm:text-base text-amber-200/80 max-w-xl font-sans leading-relaxed">
              Step into an enclave of haute aesthetics, bespoke bridal makeovers, and rejuvenating clinical skin rituals. Designed for the woman of distinction.
            </p>

            {/* CTA Buttons (as shown in video) */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to="/appointment-booking"
                className="btn-gold px-6 sm:px-8 py-3 rounded-md text-xs sm:text-sm tracking-wider uppercase font-sans font-bold flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Appointment</span>
              </Link>

              <Link
                to="/services"
                className="btn-gold-outline px-6 sm:px-8 py-3 rounded-md text-xs sm:text-sm tracking-wider uppercase font-sans font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Hero Visual: 4-Grid Montage (Matching video layout) */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-2 gap-3 p-3 bg-[#2b0c19] border-2 border-[#d4af37]/35 rounded-3xl shadow-2xl shadow-black/50">
              <div className="relative `aspect-[4/5]` rounded-2xl overflow-hidden border border-[#d4af37]/25 group">
                <img
                  src={heroBridalImg}
                  alt="DW Saloons Traditional Bridal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 `bg-gradient-to-t` from-black/50 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-semibold text-[#f3d068] px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs font-sans">
                  Royal Bridal
                </span>
              </div>

              <div className="relative `aspect-[4/5]` rounded-2xl overflow-hidden border border-[#d4af37]/25 group">
                <img
                  src={partyGlamImg}
                  alt="DW Saloons Soft Glam Look"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 `bg-gradient-to-t` from-black/50 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-semibold text-[#f3d068] px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs font-sans">
                  Party Glam
                </span>
              </div>

              <div className="relative `aspect-[4/5]` rounded-2xl overflow-hidden border border-[#d4af37]/25 group">
                <img
                  src={mehndiImg}
                  alt="DW Saloons Festive Mehndi Art"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 `bg-gradient-to-t` from-black/50 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-semibold text-[#f3d068] px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs font-sans">
                  Festive Mehndi
                </span>
              </div>

              <div className="relative `aspect-[4/5]` rounded-2xl overflow-hidden border border-[#d4af37]/25 group">
                <img
                  src={skincareImg}
                  alt="DW Saloons Organic Skin Care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 `bg-gradient-to-t` from-black/50 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-semibold text-[#f3d068] px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs font-sans">
                  Botanical Facial
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: "THE BEST STUDIO YOU CHOOSE" (Matching video section) */}
      <section className="py-16 lg:py-24 `bg-[#000]` border-t border-b border-[#d4af37]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Arched Salon Mirror Visual */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative w-full max-w-lg `aspect-[4/5]` rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#d4af37]/50 shadow-2xl p-2 bg-[#2a0c1a]">
                <div className="w-full h-full rounded-t-full rounded-b-2xl overflow-hidden relative">
                  <img
                    src={salonInteriorImg}
                    alt="DW Saloons Studio Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 `bg-gradient-to-t` from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-0 right-0 text-center">
                    <span className="font-cursive text-3xl sm:text-4xl text-[#f3d068]">
                      Our studio, where every look begins
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans block mb-1">
                  THE BEST STUDIO YOU CHOOSE
                </span>
                <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
                  We Will Change Your Out Looks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-amber-200/80 leading-relaxed font-sans">
                We believe in delivering nothing but the best. Immerse yourself in a world of unparalleled beauty treatments and rejuvenation. Experience the epitome of excellence with us. Your pampering awaits.
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#d4af37]/20">
                <div data-aos="zoom-in" data-aos-delay="100">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#d4af37] font-sans">
                    {SALON_INFO.experienceYears}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-amber-200/70 font-sans font-semibold mt-1">
                    Years Experience
                  </div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#d4af37] font-sans">
                    {SALON_INFO.happyClients}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-amber-200/70 font-sans font-semibold mt-1">
                    Happy Clients
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/appointment-booking"
                  className="btn-gold px-8 py-3.5 rounded-md text-xs sm:text-sm font-sans font-bold tracking-widest uppercase inline-flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <MapPin className="w-4 h-4" />
                  <span>LOCATION & HOURS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Signature Aesthetics */}
      <section className="py-16 max-w-7xl mx-auto px-4 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans block mb-1">
            SIGNATURE AESTHETICS
          </span>
          <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            Real Transformations
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/70 mt-2 font-sans">
            Explore our master artists' radiant bridal looks, precision graphic liners, and festive glam portraits.
          </p>
        </div>

        {/* Aesthetics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SIGNATURE_VIDEOS.map((item, index) => (
            <SignatureVideoReel key={item.id} item={item} delay={index * 150} />
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <div className="border-t border-[#d4af37]/20 `bg-[#000]`">
        <FaqSection
          title="Questions & Answers"
          subtitle="Everything you need to know about our studio bookings, artistry techniques, and bridal services."
          items={GENERAL_FAQS}
        />
      </div>
    </div>
  );
};
