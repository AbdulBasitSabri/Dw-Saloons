import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { SALON_INFO, TEAM_MEMBERS } from '../data/salonData';
import { TeamCard } from '../components/TeamCard';
import salonInteriorImg from '../assets/images/salon_interior_luxury_1792042031585.jpg';

export const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#1e0911] text-[#fcedd8] min-h-screen">
      {/* Top Story Section (As shown in video) */}
      <section className="py-12 lg:py-20 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans">
              ABOUT US
            </span>

            <h1 className="font-cursive text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide">
              The Story Behind <span className="text-[#d4af37]">DW Saloons</span>
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-amber-200/85 leading-relaxed font-sans">
              <p>
                What began as a small home-based studio has grown into one of the city's most trusted names for bridal and party makeup. Every look we create is built on one belief: makeup should enhance who you already are, not hide it.
              </p>
              <p>
                Our artists are trained in HD, airbrush and traditional techniques, and stay current with the latest bridal and editorial trends — so whether it's your barat, your best friend's mehndi, or a New Year's Eve party, you leave the chair looking like the best version of yourself.
              </p>
            </div>

            {/* Stats Row (from video) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#d4af37]/25">
              <div data-aos="zoom-in" data-aos-delay="100">
                <div className="text-2xl sm:text-4xl font-extrabold text-[#d4af37] font-sans">
                  9+
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-200/70 mt-1">
                  Years In Business
                </div>
              </div>

              <div data-aos="zoom-in" data-aos-delay="200">
                <div className="text-2xl sm:text-4xl font-extrabold text-[#d4af37] font-sans">
                  {SALON_INFO.bridesCount}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-200/70 mt-1">
                  Brides & Clients
                </div>
              </div>

              <div data-aos="zoom-in" data-aos-delay="300">
                <div className="text-2xl sm:text-4xl font-extrabold text-[#d4af37] font-sans">
                  {SALON_INFO.expertArtists}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-200/70 mt-1">
                  Expert Artists
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/appointment-booking"
                className="btn-gold px-7 py-3 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Your Appointment</span>
              </Link>
            </div>
          </div>

          {/* Right Arched Studio Frame */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md `aspect-[4/5]` rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#d4af37]/45 p-2 bg-[#2a0c1a] shadow-2xl">
              <div className="w-full h-full rounded-t-full rounded-b-2xl overflow-hidden relative group">
                <img
                  src={salonInteriorImg}
                  alt="DW Saloons Studio Interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 `bg-gradient-to-t` from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-4 right-4 text-center">
                  <span className="font-cursive text-2xl sm:text-3xl text-[#f3d068] block">
                    Our studio, where every look begins
                  </span>
                  <span className="text-[11px] text-amber-200/70 font-sans">
                    F-11 Markaz, Islamabad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Meet the Team" Section (Matching video) */}
      <section className="py-16 bg-[#18050d] border-t border-[#d4af37]/20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans block mb-1">
              HAUTE ARTISTS
            </span>
            <h2 className="font-cursive text-5xl sm:text-6xl text-white tracking-wide">
              Meet the <span className="text-[#d4af37]">Team</span>
            </h2>
            <p className="text-sm sm:text-base text-amber-200/80 mt-2 font-sans">
              The hands behind every bridal glow, every party glam, and every mehndi look — here's who you'll be sitting with.
            </p>
          </div>

          {/* Artists Grid - 5 Separate Face Portraits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard key={member.id} member={member} delay={index * 120} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
