import React, { useState } from 'react';
import { X, Calendar, Clock,  Phone, Trash2, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import {  deleteBooking, updateBooking } from '../utils/storage';
import type {  Booking } from '../utils/storage';

interface BookingsManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onRefresh: () => void;
}

export const BookingsManagerModal: React.FC<BookingsManagerModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onRefresh,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Confirmed' | 'Cancelled'>('All');
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredBookings = bookings.filter((b) => {
    if (activeTab === 'All') return true;
    return b.status === activeTab;
  });

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove appointment for ${name}?`)) {
      deleteBooking(id);
      onRefresh();
      setFeedbackMsg(`Booking #${id} deleted.`);
      setTimeout(() => setFeedbackMsg(null), 3000);
    }
  };

  const handleStatusToggle = (id: string, currentStatus: Booking['status']) => {
    const nextStatus = currentStatus === 'Confirmed' ? 'Cancelled' : 'Confirmed';
    updateBooking(id, { status: nextStatus });
    onRefresh();
    setFeedbackMsg(`Booking #${id} status marked as ${nextStatus}.`);
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#240a16] border border-[#d4af37]/40 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-[#d4af37]/25 flex items-center justify-between bg-[#1d0711]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cursive text-3xl sm:text-4xl text-amber-50 tracking-wide">
                Your Saved Appointments
              </h3>
              <p className="text-xs text-amber-200/60 font-sans">
                Persisted in your browser's LocalStorage ({bookings.length} total)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-amber-200/70 hover:text-white hover:bg-[#341120] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-5 pt-4 pb-2 flex items-center gap-2 border-b border-[#d4af37]/15">
          {(['All', 'Confirmed', 'Cancelled'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-colors ${
                activeTab === tab
                  ? 'bg-[#d4af37] text-[#1a060d]'
                  : 'bg-[#1b0610] text-amber-200/70 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feedback message banner */}
        {feedbackMsg && (
          <div className="mx-5 mt-3 p-2.5 bg-[#d4af37]/15 border border-[#d4af37]/40 rounded-lg text-xs text-[#fcedd8] flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#d4af37]" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* Bookings List */}
        <div className="p-5 overflow-y-auto space-y-3.5 `flex-grow`">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12 text-amber-200/60 text-sm flex flex-col items-center gap-2">
              <AlertCircle className="w-8 h-8 text-[#d4af37]/50" />
              <span>No {activeTab.toLowerCase()} appointments found.</span>
            </div>
          ) : (
            filteredBookings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-xl bg-[#2b0e1b] border border-[#d4af37]/25 flex flex-col sm:flex-row justify-between gap-4 transition-all hover:border-[#d4af37]/50"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#1c0712] text-[#d4af37] border border-[#d4af37]/30">
                      {b.id}
                    </span>
                    <span className="font-bold text-sm text-amber-50">{b.name}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        b.status === 'Confirmed'
                          ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-900/60 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#d4af37] font-medium flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Look: {b.look}</span>
                    <span className="text-amber-200/40">•</span>
                    <span>Artist: {b.artist}</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-amber-200/70 pt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{b.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{b.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{b.phone}</span>
                    </div>
                  </div>

                  {b.notes && (
                    <p className="text-[11px] text-amber-200/60 italic pt-1 border-t border-[#d4af37]/10 mt-1">
                      Notes: "{b.notes}"
                    </p>
                  )}
                </div>

                <div className="flex sm:flex-col items-center justify-end gap-2 shrink-0">
                  <button
                    onClick={() => handleStatusToggle(b.id, b.status)}
                    className="px-3 py-1.5 rounded text-xs font-semibold border border-[#d4af37]/40 text-amber-100 hover:bg-[#d4af37]/20 transition-colors"
                  >
                    {b.status === 'Confirmed' ? 'Cancel Slot' : 'Reactivate'}
                  </button>

                  <button
                    onClick={() => handleDelete(b.id, b.name)}
                    className="p-1.5 rounded text-rose-400 hover:text-rose-200 hover:bg-rose-950/50 transition-colors"
                    title="Delete record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#1b0610] border-t border-[#d4af37]/25 flex items-center justify-between text-xs text-amber-200/70">
          <span>Updates automatically save in real time.</span>
          <button
            onClick={onClose}
            className="btn-gold px-4 py-1.5 rounded text-xs font-bold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
