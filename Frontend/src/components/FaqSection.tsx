import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  showContactCta?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our bridal makeovers, studio appointments, and luxury salon treatments.',
  items,
  showContactCta = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section data-aos="fade-up" className="py-16 px-4 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans">
          COMMON INQUIRIES
        </span>
        <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
          {title}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-amber-200/80 leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Accordion List with Smooth Motion Transitions */}
      <div className="space-y-3.5">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#2a0c1a] border-[#d4af37]/70 shadow-[0_8px_24px_rgba(212,175,55,0.15)]'
                  : 'bg-[#220a15] border-[#d4af37]/20 hover:border-[#d4af37]/45'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full py-4.5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#17050d] border border-[#d4af37]/35 text-[#d4af37] flex items-center justify-center font-sans text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-sans font-semibold text-sm sm:text-base text-amber-100/95 tracking-wide">
                    {item.question}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border transition-transform duration-300 shrink-0 ${
                    isOpen
                      ? 'rotate-180 bg-[#d4af37] text-[#1a060d] border-[#d4af37]'
                      : 'bg-[#18050e] text-[#d4af37] border-[#d4af37]/30'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-amber-200/80 font-sans leading-relaxed border-t border-[#d4af37]/15 pl-14">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Helpful Support Footer */}
      {showContactCta && (
        <div className="mt-10 p-5 rounded-2xl bg-[#1a060f] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">Have a specific question?</h4>
              <p className="font-sans text-xs text-amber-200/70">
                Our front desk team and bridal consultants are available on WhatsApp and Phone.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/923343777040"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
