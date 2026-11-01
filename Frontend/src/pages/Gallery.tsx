import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, Eye, Calendar, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import type {GalleryItem } from '../data/salonData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    return GALLERY_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.likes }), {});
  });

  const categories = ['All', 'Bridal', 'Party Glam', 'Hair & Mehndi', 'Skincare & Spa'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesMap((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="bg-[#1e0911] text-[#fcedd8] min-h-screen">
      {/* Header (As shown in video) */}
      <section
        data-aos="fade-up"
        className="py-14 lg:py-20 px-4 lg:px-8 max-w-5xl mx-auto text-center space-y-3"
      >
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans">
          DW SALOONS OFFICIAL
        </span>

        <h1 className="font-cursive text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide">
          The Salon <span className="text-[#d4af37]">Gallery</span>
        </h1>

        <p className="text-sm sm:text-base text-amber-200/80 max-w-xl mx-auto font-sans leading-relaxed">
          A glimpse into our sanctuary of transformation. Real brides, opulent festivities, and serene self-care experiences.
        </p>

        {/* Category Filters */}
        <div data-aos="zoom-in" data-aos-delay="100" className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-[#1a060d] shadow-md'
                  : 'bg-[#270c18] border border-[#d4af37]/25 text-amber-200/80 hover:border-[#d4af37] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid (3 columns matching video) */}
      <section className="pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 100}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#d4af37]/25 bg-[#290c19] shadow-lg cursor-pointer transition-all duration-300 hover:border-[#d4af37]/80 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#f3d068] bg-[#1a060d]/80 px-2.5 py-1 rounded-full border border-[#d4af37]/40">
                    {item.category}
                  </span>
                  <button
                    onClick={(e) => handleLike(item.id, e)}
                    className="p-1.5 rounded-full bg-black/60 text-rose-400 hover:text-rose-300 flex items-center gap-1 text-xs"
                    aria-label="Like photo"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span className="text-white text-[11px]">{likesMap[item.id]}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans">{item.title}</h3>
                    <span className="text-[11px] text-[#d4af37]">Click to enlarge</span>
                  </div>
                  <div className="p-2 rounded-full bg-[#d4af37] text-[#1a060d]">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "See More" Button (as shown in video) */}
        {visibleCount < filteredItems.length && (
          <div data-aos="zoom-in" className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="btn-gold px-10 py-3.5 rounded-md text-xs sm:text-sm font-bold tracking-widest uppercase shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              See More
            </button>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative bg-[#230913] border-2 border-[#d4af37]/50 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#d4af37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-[#1a060e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                  {activeItem.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                  {activeItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/appointment-booking?look=${encodeURIComponent(activeItem.title)}`}
                  className="btn-gold px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Look</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
