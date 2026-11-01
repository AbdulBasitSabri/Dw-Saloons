import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Crown,
  MapPin,
  CheckCircle,
  ExternalLink,
  MessageCircle,
  ListFilter,
  Navigation,
} from 'lucide-react';
import { SALON_INFO, CATALOGUE_PACKAGES, TEAM_MEMBERS, EXPLORE_SERVICES, BOOKING_FAQS } from '../data/salonData';
import { saveBooking, getBookings} from '../utils/storage';
import type { Booking } from '../utils/storage';
import { BookingsManagerModal } from '../components/BookingsManagerModal';
import { FaqSection } from '../components/FaqSection';

export const AppointmentBooking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialLook = searchParams.get('look') || '';

  // Form State
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [look, setLook] = useState(initialLook || 'Barat Special');
  const [artist, setArtist] = useState('Dania W. Khan (Founder & Lead Artist)');
  const [date, setDate] = useState(() => {
    // Default to tomorrow
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('1:00 PM');
  const [notes, setNotes] = useState('');

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSavedBooking, setLastSavedBooking] = useState<Booking | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingsList, setBookingsList] = useState<Booking[]>([]);
  const [isManagerOpen, setIsManagerOpen] = useState(false);

  useEffect(() => {
    setBookingsList(getBookings());
    if (initialLook) {
      setLook(initialLook);
    }
  }, [initialLook]);

  const timeSlots = ['11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'];

  // All look options compiled from catalogue and explore services
  const lookOptions = [
    'Bridal Makeup',
    'Barat Special',
    'Mehndi Makeup',
    'Engagement Makeup',
    'Anniversary Special',
    'Birthday Makeup',
    'Party Makeup',
    'New Year Special',
    'Photoshoot Makeup',
    'Skin Care / Organic Facial',
    'Body Waxing',
    'Royal Bridal Package',
  ];

  const artistOptions = [
    'Any Available Senior Artist',
    'Dania W. Khan (Founder & Lead Artist)',
    'Sana Malik (Senior Makeup Artist)',
    'Hira Fatima (Bridal Specialist)',
    'Mahnoor Ali (Hair & Styling Expert)',
    'Zara Ahmed (Makeup Artist)',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name.';
    if (!phoneNumber.trim()) {
      newErrors.phone = 'Please provide your active WhatsApp number.';
    } else if (phoneNumber.length < 9) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!date) newErrors.date = 'Please select a preferred date.';
    if (!time) newErrors.time = 'Please pick a preferred time slot.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const saved = saveBooking({
        name,
        phone: phoneNumber,
        look,
        artist,
        date,
        time,
        notes,
        status: 'Confirmed',
      });

      setLastSavedBooking(saved);
      setBookingsList(getBookings());
      setIsSubmitting(false);

      // Reset form
      setName('');
      setPhoneNumber('');
      setNotes('');
    }, 600);
  };

  const handleRefreshBookings = () => {
    setBookingsList(getBookings());
  };

  return (
    <div className="bg-[#1e0911] text-[#fcedd8] min-h-screen py-12 lg:py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header (As shown in video) */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase font-sans">
            RESERVE YOUR SLOT
          </span>

          <h1 className="font-cursive text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide">
            Book Your <span className="text-[#d4af37]">Appointment</span>
          </h1>

          <p className="text-sm sm:text-base text-amber-200/80 leading-relaxed font-sans">
            Hey gorgeous — let's get you booked in. Pick your look, your date, and we'll take care of the rest. No calls needed, no hassle.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsManagerOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2c0e1c] border border-[#d4af37]/30 text-xs font-sans font-semibold text-[#f3d068] hover:border-[#d4af37] transition-colors"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>View Saved Bookings ({bookingsList.length})</span>
            </button>
          </div>
        </div>

        {/* Success Banner if newly submitted */}
        {lastSavedBooking && (
          <div className="max-w-4xl mx-auto mb-10 p-6 rounded-2xl bg-gradient-to-r from-[#2a1309] via-[#351020] to-[#1e0811] border-2 border-[#d4af37] shadow-2xl animate-in fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37] text-[#1a060d] flex items-center justify-center font-bold text-xl shrink-0">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-white">
                      Slot Reserved for {lastSavedBooking.name}!
                    </span>
                    <span className="text-xs bg-[#d4af37] text-black font-bold px-2 py-0.5 rounded font-mono">
                      #{lastSavedBooking.id}
                    </span>
                  </div>
                  <p className="text-xs text-amber-200/80 mt-1">
                    Confirmed for <strong className="text-[#f3d068]">{lastSavedBooking.look}</strong> on {lastSavedBooking.date} at {lastSavedBooking.time}.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/923343777040?text=${encodeURIComponent(
                    `Hi DW Saloons, I just booked appointment #${lastSavedBooking.id} for ${lastSavedBooking.look} on ${lastSavedBooking.date} at ${lastSavedBooking.time}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Confirmation</span>
                </a>
                <button
                  onClick={() => setLastSavedBooking(null)}
                  className="text-xs text-amber-200/60 hover:text-white px-2 py-1"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Split: Map & Studio Details (Left) + Booking Form (Right) (Exact Layout from Video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map & Studio Details */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:col-span-5 space-y-6"
          >
            {/* Interactive Map Card */}
            <div className="rounded-2xl overflow-hidden border border-[#d4af37]/35 bg-[#250a17] shadow-xl">
              <div className="relative aspect-[16/10] w-full bg-[#1b0610]">
                {/* Styled Map Embed representing F-11 Markaz Islamabad */}
                <iframe
                  title="DW Saloons Studio Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13274.654228945634!2d72.99617277861967!3d33.68205244199994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe3868e40f89%3A0xe54e3a47d2b2708b!2sF-11%20Markaz%20F%2011%20Markaz%20F-11%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  className="w-full h-full border-0 filter contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="absolute top-3 left-3 bg-[#19060e]/90 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 shadow">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>DW Saloons Studio Islamabad</span>
                </div>
              </div>
            </div>

            {/* Find Us Box (From video) */}
            <div className="p-6 rounded-2xl bg-[#280c19] border border-[#d4af37]/25 space-y-5 shadow-xl">
              <div className="border-b border-[#d4af37]/20 pb-3">
                <span className="font-cursive text-2xl text-[#d4af37] block">Find Us</span>
                <h3 className="font-sans font-bold text-base text-white">
                  DW Saloons Studio & Academy
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-amber-100 uppercase tracking-wider block">
                    ADDRESS
                  </span>
                  <p className="text-amber-200/80 leading-relaxed">
                    {SALON_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-amber-100 uppercase tracking-wider block">
                    HOURS
                  </span>
                  <p className="text-amber-200/80">{SALON_INFO.hours}</p>
                  <p className="text-[#d4af37] font-semibold">{SALON_INFO.closedDays}</p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-amber-100 uppercase tracking-wider block">
                    PHONE / WHATSAPP
                  </span>
                  <p className="text-amber-200/80 font-mono">{SALON_INFO.phone}</p>
                </div>
              </div>

              {/* Direction Button */}
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SALON_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline w-full py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Get Directions From My Location</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form (Exact Layout from Video) */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#270b18] border-2 border-[#d4af37]/35 shadow-2xl">
              {/* Form Header Notice */}
              <div className="mb-6 pb-4 border-b border-[#d4af37]/20">
                <p className="text-sm sm:text-base font-cursive text-[#f3d068] text-center sm:text-left">
                  Fill in your details and we'll confirm your slot within a few hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-100 mb-1.5 font-sans">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ayesha Raza"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1a060f] border border-[#d4af37]/40 text-sm text-white placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-100 mb-1.5 font-sans">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="03XX XXXXXXX"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1a060f] border border-[#d4af37]/40 text-sm text-white placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] font-mono"
                    />
                    {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Choose Look Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-100 mb-1.5 font-sans">
                    CHOOSE YOUR LOOK
                  </label>
                  <select
                    value={look}
                    onChange={(e) => setLook(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1a060f] border border-[#d4af37]/40 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {lookOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#1a060f] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Artist & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-100 mb-1.5 font-sans">
                      PREFERRED ARTIST
                    </label>
                    <select
                      value={artist}
                      onChange={(e) => setArtist(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1a060f] border border-[#d4af37]/40 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      {artistOptions.map((art) => (
                        <option key={art} value={art} className="bg-[#1a060f] text-white">
                          {art}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-100 mb-1.5 font-sans">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 rounded-lg bg-[#1a060f] border border-[#d4af37]/40 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                    {errors.date && <p className="text-[11px] text-rose-400 mt-1">{errors.date}</p>}
                  </div>
                </div>

                {/* Preferred Time (Clickable time slots matching video) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-100 mb-2 font-sans">
                    PREFERRED TIME
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                          time === slot
                            ? 'bg-[#d4af37] text-[#1a060d] border-[#d4af37] shadow-md font-bold'
                            : 'bg-[#1b0610] text-amber-100/90 border-[#d4af37]/30 hover:border-[#d4af37]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="text-[11px] text-rose-400 mt-1">{errors.time}</p>}
                </div>

                {/* Anything We Should Know? (Textarea) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-100 mb-1.5 font-sans">
                    ANYTHING WE SHOULD KNOW? (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Outfit colour, allergies, inspiration pictures, jewellery preferences..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1a060f] border border-[#d4af37]/40 text-sm text-white placeholder-amber-200/30 focus:outline-none focus:border-[#d4af37] resize-none"
                  />
                </div>

                {/* Confirm Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Confirming Your Slot...' : 'Confirm My Appointment'}
                  </button>
                </div>

                {/* Trust Footer Notice (From video) */}
                <p className="text-center text-[11px] text-amber-200/60 pt-2 font-sans">
                  We'll never share your details. You'll get a confirmation on WhatsApp shortly after booking.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Booking FAQ Section */}
      <div className="mt-16 border-t border-[#d4af37]/20 pt-6">
        <FaqSection
          title="Appointments & Studio FAQ"
          subtitle="Helpful guidance regarding slot reservations, studio timings, and custom bridal requests."
          items={BOOKING_FAQS}
        />
      </div>

      {/* Bookings Manager Modal */}
      <BookingsManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        bookings={bookingsList}
        onRefresh={handleRefreshBookings}
      />
    </div>
  );
};
