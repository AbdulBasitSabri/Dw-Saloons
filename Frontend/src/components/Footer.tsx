import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Check, Phone, MapPin } from 'lucide-react';
import salonBgImg from '../assets/images/salon_interior_luxury_1792042031585.jpg';

export const Footer: React.FC = () => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@dwsaloons.official',
      color: 'from-pink-600 via-purple-600 to-amber-500',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: 'https://instagram.com',
    },
    {
      name: 'Facebook',
      handle: 'facebook.com/dwsaloons',
      color: 'from-blue-600 to-blue-700',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
      url: 'https://facebook.com',
    },
    {
      name: 'TikTok',
      handle: '@dwsaloons_pk',
      color: 'from-zinc-900 to-zinc-950',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98v8.66c-.02 2.37-1.1 4.69-2.93 6.13-1.84 1.45-4.34 1.95-6.66 1.36-2.32-.59-4.28-2.26-5.18-4.43-.9-2.18-.72-4.75.47-6.75 1.19-2 3.32-3.3 5.67-3.48v4.06c-1.18.11-2.28.84-2.82 1.89-.54 1.05-.43 2.36.27 3.31.7 1 1.93 1.54 3.14 1.39 1.21-.15 2.22-1.03 2.53-2.22.14-.54.16-1.1.16-1.66V.02z" />
        </svg>
      ),
      url: 'https://tiktok.com',
    },
    {
      name: 'WhatsApp',
      handle: '+92 334 3777040',
      color: 'from-emerald-500 to-green-600',
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      url: 'https://wa.me/923343777040',
    },
    {
      name: 'Threads',
      handle: '@dwsaloons',
      color: 'from-neutral-900 to-stone-900',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221c-.083-.07-.17-.137-.263-.199-.607-.406-1.395-.612-2.342-.612-1.258 0-2.257.387-2.969 1.15-.555.595-.877 1.392-.958 2.368.513-.198 1.066-.307 1.642-.325.263-.008.528.006.791.042.062-.489.215-.873.456-1.144.32-.361.765-.544 1.322-.544.478 0 .864.103 1.149.306.28.2.421.493.421.87 0 .399-.18.733-.535.993-.356.26-.889.431-1.586.509l-.497.054c-1.397.153-2.484.582-3.23 1.275-.752.7-1.134 1.637-1.134 2.784 0 1.254.444 2.257 1.319 2.981.874.724 2.012 1.092 3.382 1.092 1.391 0 2.502-.387 3.303-1.149.803-.765 1.229-1.849 1.267-3.224v-.234c.731-.418 1.282-.993 1.638-1.711.365-.733.551-1.579.551-2.513 0-1.633-.585-2.923-1.747-3.838z" />
        </svg>
      ),
      url: 'https://threads.net',
    },
  ];

  const handleCopyOrOpen = (item: typeof socialLinks[0]) => {
    if (item.name === 'WhatsApp') {
      window.open(item.url, '_blank');
      return;
    }
    setCopiedHandle(item.name);
    setTimeout(() => setCopiedHandle(null), 3000);
  };

  return (
    <footer className="relative `bg-[#000]` text-amber-100/80 border-t border-[#d4af37]/30 overflow-hidden">
      {/* Background Salon Watermark with Dark Luxury Gradient */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={salonBgImg}
          alt="DW Saloons Luxury Studio"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 `bg-gradient-to-t` from-[#14040b] via-[#1a060e]/95 to-[#1f0913]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-10">
        {/* Social Platforms Highlight Section (As shown in video) */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <h3 className="font-cursive text-3xl md:text-4xl text-[#d4af37] mb-2 tracking-wide">
            Stay Updated With Us.
          </h3>
          <p className="text-sm md:text-base text-amber-200/90 font-sans tracking-wide mb-7">
            Follow Our Social Media Platforms
          </p>

          {/* Social Icons Strip */}
          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
            {socialLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => handleCopyOrOpen(item)}
                title={`Follow DW Saloons on ${item.name} (${item.handle})`}
                className={`w-12 h-12 md:w-13 md:h-13 rounded-xl bg-gradient-to-tr ${item.color} p-0.5 text-white shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group`}
                aria-label={`Open ${item.name}`}
              >
                <div className="w-full h-full rounded-[10px] bg-black/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-transparent transition-colors">
                  {item.icon}
                </div>
              </button>
            ))}
          </div>

          {copiedHandle && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#fcedd8] text-xs rounded-full animate-in fade-in">
              <Check className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{copiedHandle} profile link opened / handle: @dwsaloons.official</span>
            </div>
          )}
        </div>

        {/* Quick Links & Info Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-t border-b border-[#d4af37]/15 text-sm">
          {/* Brand Col */}
          <div className="flex flex-col gap-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] bg-[#1a070e] flex items-center justify-center">
                <span className="font-cursive text-lg text-[#d4af37]">DW</span>
              </div>
              <span className="font-cursive text-2xl text-[#d4af37]">DW Saloons</span>
            </div>
            <p className="text-xs text-amber-200/70 leading-relaxed">
              Pakistan's premier luxury salon & bridal studio. Enhancing your natural elegance with world-class artistry, premium HD cosmetics, and bespoke care.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">Navigation</h4>
            <Link to="/" className="text-xs hover:text-[#d4af37] transition-colors">Home</Link>
            <Link to="/about-us" className="text-xs hover:text-[#d4af37] transition-colors">About Us</Link>
            <Link to="/services" className="text-xs hover:text-[#d4af37] transition-colors">Our Services</Link>
            <Link to="/gallery" className="text-xs hover:text-[#d4af37] transition-colors">Salon Gallery</Link>
            <Link to="/makeup-catalogue" className="text-xs hover:text-[#d4af37] transition-colors">Makeup Catalogue</Link>
          </div>

          {/* Signature Looks */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">Packages</h4>
            <Link to="/makeup-catalogue" className="text-xs hover:text-[#d4af37] transition-colors">Signature Bridal Makeup</Link>
            <Link to="/makeup-catalogue" className="text-xs hover:text-[#d4af37] transition-colors">Barat Special Glam</Link>
            <Link to="/makeup-catalogue" className="text-xs hover:text-[#d4af37] transition-colors">Mehndi & Mayun Look</Link>
            <Link to="/makeup-catalogue" className="text-xs hover:text-[#d4af37] transition-colors">Engagement & Nikkah</Link>
            <Link to="/makeup-catalogue" className="text-xs hover:text-[#d4af37] transition-colors">Skin Glow Facials</Link>
          </div>

          {/* Studio Visit & Hours */}
          <div className="flex flex-col gap-2.5 text-xs text-amber-200/75">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">Studio Details</h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Select One Plaza, F-11 Markaz, Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>0334-3777040 / 0300-DWSALOON</span>
            </div>
            <div className="text-[11px] text-amber-200/60 mt-1">
              Tue - Sun: 11:00 AM - 8:00 PM<br />
              <span className="text-[#d4af37]">Closed on Mondays</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/50 gap-3">
          <p>© Copyright 2026 DW Saloons Official. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/appointment-booking" className="hover:text-[#d4af37] transition-colors">
              Manage Bookings
            </Link>
            <span>•</span>
            <span className="text-amber-200/40">Crafted with Pure Artistry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
