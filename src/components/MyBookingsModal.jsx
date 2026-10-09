import React, { useState } from 'react';
import { X, Search, FileCheck, Calendar, Clock, User, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function MyBookingsModal({ isOpen, onClose, bookings = [] }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = bookings.filter((b) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      b.id.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q) ||
      b.clientName.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E0424]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#2A0631] rounded-[2.25rem] overflow-hidden shadow-2xl border border-purple-200/80 dark:border-purple-800/80 my-auto flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-purple-100 dark:border-purple-900/60 bg-[#FAF7FC] dark:bg-[#1E0424]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#34073E] text-[#8DC63F] flex items-center justify-center font-bold shadow-sm border border-purple-800/40 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#34073E] dark:text-white">
                Lookup Scheduled Consultations
              </h3>
              <p className="text-xs text-[#52525B] dark:text-purple-300/80 font-medium">
                Track status of your land survey, build consultation, or private site visit
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white dark:bg-[#34073E] text-[#34073E] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/80 border border-purple-200/60 dark:border-purple-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="p-6 border-b border-purple-100 dark:border-purple-900/60 bg-[#FAF7FC]/50 dark:bg-[#1E0424]/50">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Booking Ref (e.g. EZN-2026-9014) or email address..."
              className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs font-medium text-[#34073E] dark:text-white focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
            />
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-4">
          {results.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <ShieldAlert className="w-10 h-10 text-purple-300 dark:text-purple-600 mx-auto" />
              <h4 className="text-sm font-bold text-[#34073E] dark:text-white">No consultations found</h4>
              <p className="text-xs text-[#52525B] dark:text-purple-300/70 max-w-sm mx-auto">
                Double check your reference code or schedule a new consultation using our interactive booking portal.
              </p>
            </div>
          ) : (
            results.map((booking) => (
              <div
                key={booking.id}
                className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-2xl p-5 border border-purple-200/80 dark:border-purple-800/80 space-y-3.5 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-900/60 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono font-bold text-xs bg-[#34073E] text-[#8DC63F] px-2.5 py-1 rounded-lg">
                      {booking.id}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] font-bold">
                      {booking.status}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#34073E] dark:text-white">
                    {booking.serviceCategory}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-[#52525B] dark:text-purple-300/70 uppercase font-mono block">Client Name</span>
                    <span className="font-semibold text-[#34073E] dark:text-white mt-0.5 block">{booking.clientName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#52525B] dark:text-purple-300/70 uppercase font-mono block">Scheduled Date & Time</span>
                    <span className="font-semibold text-[#34073E] dark:text-white mt-0.5 block">{booking.date} at {booking.time}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] text-[#52525B] dark:text-purple-300/70 uppercase font-mono block">Assigned Specialist</span>
                    <span className="font-semibold text-[#34073E] dark:text-white mt-0.5 block">{booking.assignedSpecialist}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

