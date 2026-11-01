import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about-us' },
    { label: 'OUR SERVICES', path: '/services' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'MAKEUP CATALOGUE', path: '/makeup-catalogue' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      

      {/* Main Navigation Bar */}
      <nav className="`bg-[#000]/95` backdrop-blur-md border-b border-[#d4af37]/25 px-4 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="DW Saloons Home"
          >
            <div className="w-11 h-11 rounded-full border-2 border-[#d4af37] bg-[#1a070e] flex items-center justify-center shadow-md shadow-[#d4af37]/15 group-hover:border-[#f3d068] transition-colors">
              <span className="font-cursive text-2xl text-[#d4af37] group-hover:scale-105 transition-transform">
                DW
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-cursive text-2xl lg:text-3xl text-[#d4af37] leading-none tracking-wide">
                DW Saloons
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#d4af37]/80 uppercase font-sans font-medium">
                Official Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs lg:text-sm font-semibold tracking-wider transition-all duration-200 relative py-1 hover:text-[#d4af37] ${
                    isActive ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-amber-100/90'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/appointment-booking"
              className="btn-gold px-5 py-2.5 rounded-md text-xs lg:text-sm tracking-wider uppercase flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW!</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#d4af37] hover:bg-[#34111e] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 `top-[78px]` z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-72 bg-[#230913] border-l border-[#d4af37]/30 h-full p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/20">
                <span className="font-cursive text-2xl text-[#d4af37]">DW Saloons</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-[#d4af37] hover:bg-[#381120]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-semibold tracking-wider rounded-md transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#d4af37]/15 text-[#d4af37] border-l-2 border-[#d4af37]'
                        : 'text-amber-100/90 hover:bg-[#381120] hover:text-[#d4af37]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/appointment-booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold w-full py-2.5 rounded text-center text-xs font-bold tracking-wider uppercase block"
                >
                  BOOK APPOINTMENT
                </Link>
              </div>
            </div>

            {/* Mobile Footer info */}
            <div className="pt-6 border-t border-[#d4af37]/20 text-xs text-amber-200/60 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>0334-3777040</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>F-11 Markaz, Islamabad</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
