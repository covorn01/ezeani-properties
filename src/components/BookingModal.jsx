import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Compass, 
  FileText, 
  Check, 
  Download, 
  Video, 
  CheckCircle2,
  Copy,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { CONSULTATION_TYPES } from '../data/mockData';

export default function BookingModal({ isOpen, onClose, initialData, onSaveBooking }) {
  const [step, setStep] = useState(1);

  // Form State
  const [serviceCategory, setServiceCategory] = useState(initialData?.category || 'Property Acquisition');
  const [consultationType, setConsultationType] = useState('virtual');
  const [selectedDate, setSelectedDate] = useState('2026-10-10');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  // Client Info
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState(initialData?.propertyTitle ? `Site Tour: ${initialData.propertyTitle}` : '');
  const [budget, setBudget] = useState('Flexible');
  const [notes, setNotes] = useState(initialData?.notes || '');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  // Available dates
  const availableDates = [
    { date: '2026-10-09', day: 'Fri', label: 'Oct 9' },
    { date: '2026-10-10', day: 'Sat', label: 'Oct 10' },
    { date: '2026-10-12', day: 'Mon', label: 'Oct 12' },
    { date: '2026-10-13', day: 'Tue', label: 'Oct 13' },
    { date: '2026-10-14', day: 'Wed', label: 'Oct 14' },
    { date: '2026-10-15', day: 'Thu', label: 'Oct 15' },
    { date: '2026-10-16', day: 'Fri', label: 'Oct 16' },
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM'
  ];

  const categories = [
    { 
      id: 'Property Acquisition', 
      label: 'Property Acquisition & Site Tour', 
      icon: Building2,
      desc: 'Private site inspections, verified title checks, land verification & investment advisory.' 
    },
    { 
      id: 'Land Surveying', 
      label: 'Land Surveying & Title Clearance', 
      icon: Compass,
      desc: 'Boundary mapping, RTK GPS survey, Governor’s Consent & Lagos/Abuja clearance.' 
    },
    { 
      id: 'General Advisory', 
      label: 'Real Estate & Land Advisory', 
      icon: FileText,
      desc: 'Portfolio expansion, diaspora property desk & legal due diligence consultation.' 
    }
  ];

  const handleNext = () => {
    if (step === 4) {
      if (!clientName || !email) {
        alert('Please provide your full name and email address.');
        return;
      }

      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const bookingRef = `EZN-2026-${randomNum}`;
      
      const newBooking = {
        id: bookingRef,
        clientName,
        email,
        phone: phone || 'Not provided',
        serviceCategory,
        consultationType: CONSULTATION_TYPES.find(c => c.id === consultationType)?.title || consultationType,
        date: selectedDate,
        time: selectedTime,
        location: location || 'To be specified',
        budget,
        notes: notes || 'Standard consultation request',
        status: 'Confirmed',
        assignedSpecialist: serviceCategory.includes('Survey') 
          ? 'Surv. Chidi Ezeani (Principal Cadastral Lead)' 
          : 'Ezeani Senior Advisory Team',
        createdDate: new Date().toLocaleDateString()
      };

      setConfirmedBooking(newBooking);
      if (onSaveBooking) onSaveBooking(newBooking);
      setStep(5);
    } else {
      setStep(step + 1);
    }
  };

  const handleDownloadICS = () => {
    if (!confirmedBooking) return;
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ezeani Properties//Consultation Booking//EN
BEGIN:VEVENT
UID:${confirmedBooking.id}@ezeaniproperties.com
DTSTAMP:20261008T160000Z
SUMMARY:Ezeani Consultation: ${confirmedBooking.serviceCategory} - Ref #${confirmedBooking.id}
DESCRIPTION:Scheduled consultation for ${confirmedBooking.clientName}. Format: ${confirmedBooking.consultationType}.
LOCATION:${confirmedBooking.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Ezeani_Consultation_${confirmedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyRefCode = () => {
    if (confirmedBooking) {
      navigator.clipboard.writeText(confirmedBooking.id);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E0424]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#2A0631] rounded-[2.25rem] overflow-hidden shadow-2xl border border-purple-200/80 dark:border-purple-800/80 my-auto flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-9 py-5 border-b border-purple-100 dark:border-purple-900/60 bg-[#FAF7FC] dark:bg-[#1E0424] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#34073E] text-[#8DC63F] flex items-center justify-center shrink-0 shadow-sm border border-purple-800/40">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#34073E] dark:text-white">
                  Schedule Consultation
                </h3>
                {step <= 4 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8DC63F]/15 text-[#34073E] dark:text-[#8DC63F] text-[10px] font-mono font-bold">
                    Step 0{step} / 04
                  </span>
                )}
              </div>
              <p className="text-xs text-[#52525B] dark:text-purple-300/80 font-medium">
                {step <= 4 ? 'Ezeani Properties Advisory & Technical Booking Desk' : 'Consultation Confirmed'}
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

        {/* Multi-Step Indicator Bar */}
        {step <= 4 && (
          <div className="px-6 sm:px-9 pt-4 pb-2 bg-white dark:bg-[#2A0631] border-b border-purple-100 dark:border-purple-900/40">
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { s: 1, label: 'Service' },
                { s: 2, label: 'Format' },
                { s: 3, label: 'Date & Time' },
                { s: 4, label: 'Details' }
              ].map((item) => (
                <div key={item.s} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold">
                    <span className={step >= item.s ? 'text-[#34073E] dark:text-white' : 'text-[#52525B] dark:text-purple-300/40'}>
                      0{item.s}. {item.label}
                    </span>
                  </div>
                  <div className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === item.s 
                      ? 'bg-[#8DC63F]' 
                      : step > item.s 
                      ? 'bg-[#34073E] dark:bg-purple-600' 
                      : 'bg-purple-100 dark:bg-purple-950'
                  }`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-9 overflow-y-auto space-y-7">
          
          {/* STEP 1: Select Service Category */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
                  Step 01 — Service Category
                </span>
                <h4 className="text-xl font-bold font-heading text-[#34073E] dark:text-white">
                  What domain requires expert consultation?
                </h4>
                <p className="text-xs text-[#52525B] dark:text-purple-300/80">
                  Select the core service track to ensure you are matched with the right cadastral surveyor or property specialist.
                </p>
              </div>

              <div className="space-y-3">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = serviceCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setServiceCategory(cat.id)}
                      className={`w-full p-5 rounded-2xl border text-left flex items-start gap-4 transition-all ${
                        isSelected
                          ? 'bg-[#FAF7FC] dark:bg-[#34073E] border-[#8DC63F] ring-2 ring-[#8DC63F]/20 shadow-md'
                          : 'bg-white dark:bg-[#1E0424] border-purple-200/80 dark:border-purple-800/80 hover:border-purple-300 dark:hover:border-purple-700'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? 'bg-[#34073E] text-[#8DC63F]' 
                          : 'bg-purple-100 dark:bg-purple-900/60 text-[#7A2FB0] dark:text-purple-300'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-bold text-[#34073E] dark:text-white">
                            {cat.label}
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected 
                              ? 'border-[#8DC63F] bg-[#8DC63F] text-[#1E0424]' 
                              : 'border-purple-300 dark:border-purple-700'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-xs text-[#52525B] dark:text-purple-300/80 mt-1 leading-relaxed">
                          {cat.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Consultation Format */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
                  Step 02 — Consultation Format
                </span>
                <h4 className="text-xl font-bold font-heading text-[#34073E] dark:text-white">
                  Choose your preferred consultation mode
                </h4>
                <p className="text-xs text-[#52525B] dark:text-purple-300/80">
                  Select between direct site visits, high-definition virtual consultations, or executive office meetings.
                </p>
              </div>

              <div className="space-y-3">
                {CONSULTATION_TYPES.map((type) => {
                  const isSelected = consultationType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setConsultationType(type.id)}
                      className={`w-full p-5 rounded-2xl border text-left flex items-start justify-between gap-4 transition-all ${
                        isSelected
                          ? 'bg-[#FAF7FC] dark:bg-[#34073E] border-[#8DC63F] ring-2 ring-[#8DC63F]/20 shadow-md'
                          : 'bg-white dark:bg-[#1E0424] border-purple-200/80 dark:border-purple-800/80 hover:border-purple-300'
                      }`}
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm font-bold text-[#34073E] dark:text-white">{type.title}</span>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] font-bold">
                            {type.fee}
                          </span>
                        </div>
                        <p className="text-xs text-[#52525B] dark:text-purple-300/80 leading-relaxed">{type.desc}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-xs font-mono font-semibold text-[#7A2FB0] dark:text-[#B462E8]">
                          {type.duration}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected 
                            ? 'border-[#8DC63F] bg-[#8DC63F] text-[#1E0424]' 
                            : 'border-purple-300 dark:border-purple-700'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time Selection */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
                  Step 03 — Date & Time
                </span>
                <h4 className="text-xl font-bold font-heading text-[#34073E] dark:text-white">
                  Select your preferred appointment window
                </h4>
                <p className="text-xs text-[#52525B] dark:text-purple-300/80">
                  Choose a date and time slot convenient for your schedule.
                </p>
              </div>

              {/* Date Selection */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#34073E] dark:text-purple-200 uppercase tracking-wider font-mono">
                  Available Dates
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {availableDates.map((item) => {
                    const isActive = selectedDate === item.date;
                    return (
                      <button
                        key={item.date}
                        type="button"
                        onClick={() => setSelectedDate(item.date)}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isActive
                            ? 'bg-[#34073E] text-white border-[#8DC63F] ring-2 ring-[#8DC63F]/30 shadow-md'
                            : 'bg-[#FAF7FC] dark:bg-[#1E0424] text-[#34073E] dark:text-purple-200 border-purple-200/80 dark:border-purple-800/80 hover:border-purple-300'
                        }`}
                      >
                        <div className={`text-[10px] uppercase font-mono ${isActive ? 'text-[#8DC63F]' : 'text-[#52525B] dark:text-purple-300/70'}`}>
                          {item.day}
                        </div>
                        <div className="text-xs font-bold mt-0.5">{item.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold text-[#34073E] dark:text-purple-200 uppercase tracking-wider font-mono">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {timeSlots.map((slot) => {
                    const isActive = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-[#8DC63F] text-[#1E0424] border-[#8DC63F] font-bold shadow-sm'
                            : 'bg-[#FAF7FC] dark:bg-[#1E0424] text-[#34073E] dark:text-purple-200 border-purple-200/80 dark:border-purple-800/80 hover:border-purple-300'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Client & Project Details */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
                  Step 04 — Contact & Project Information
                </span>
                <h4 className="text-xl font-bold font-heading text-[#34073E] dark:text-white">
                  Tell us about your project or enquiry
                </h4>
                <p className="text-xs text-[#52525B] dark:text-purple-300/80">
                  Please provide your contact details so our advisory team can reach you with relevant site documentation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#34073E] dark:text-purple-200">
                    Full Name <span className="text-[#8DC63F]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Arc. Olamide Balogun"
                    className="w-full px-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs font-medium text-[#34073E] dark:text-white focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#34073E] dark:text-purple-200">
                    Email Address <span className="text-[#8DC63F]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. olamide@group.ng"
                    className="w-full px-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs font-medium text-[#34073E] dark:text-white focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#34073E] dark:text-purple-200">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +234 902 171 0933"
                    className="w-full px-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs font-medium text-[#34073E] dark:text-white focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#34073E] dark:text-purple-200">
                    Project Location / Site Address
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lekki Phase 1, Lagos or Guzape, Abuja"
                    className="w-full px-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs font-medium text-[#34073E] dark:text-white focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#34073E] dark:text-purple-200">
                  Project Notes & Specific Requirements
                </label>
                <textarea
                  rows="3"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention parcel size (sqm), title status (C of O / Governor's Consent), or specific questions..."
                  className="w-full p-4 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs font-medium text-[#34073E] dark:text-white focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20 resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 5: Instant Confirmation Screen */}
          {step === 5 && confirmedBooking && (
            <div className="text-center space-y-6 animate-fade-in py-3">
              <div className="w-16 h-16 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center mx-auto ring-8 ring-[#8DC63F]/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold font-heading text-[#34073E] dark:text-white">
                  Consultation Successfully Scheduled!
                </h3>
                <p className="text-xs text-[#52525B] dark:text-purple-300/80 max-w-md mx-auto">
                  Your appointment has been registered with Ezeani Properties Advisory Desk. A calendar invitation has been generated.
                </p>
              </div>

              {/* Reference Box */}
              <div className="bg-[#FAF7FC] dark:bg-[#1E0424] p-6 rounded-2xl border border-purple-200/80 dark:border-purple-800/80 max-w-lg mx-auto space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-900/60 pb-3">
                  <span className="text-[11px] font-mono text-[#52525B] dark:text-purple-300 uppercase tracking-wider">
                    Booking Reference
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#8DC63F] text-sm bg-[#34073E] px-3 py-1 rounded-lg">
                      {confirmedBooking.id}
                    </span>
                    <button
                      onClick={copyRefCode}
                      className="p-1.5 text-purple-600 dark:text-purple-300 hover:text-[#34073E] dark:hover:text-white"
                      title="Copy Reference Code"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    {copiedCode && <span className="text-[10px] text-[#8DC63F] font-mono font-bold">Copied!</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-[10px] text-[#52525B] dark:text-purple-300/70 uppercase font-mono">Client Name</div>
                    <div className="font-semibold text-[#34073E] dark:text-white mt-0.5">{confirmedBooking.clientName}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#52525B] dark:text-purple-300/70 uppercase font-mono">Service Category</div>
                    <div className="font-semibold text-[#34073E] dark:text-white mt-0.5">{confirmedBooking.serviceCategory}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#52525B] dark:text-purple-300/70 uppercase font-mono">Scheduled Date & Time</div>
                    <div className="font-semibold text-[#34073E] dark:text-white mt-0.5">{confirmedBooking.date} at {confirmedBooking.time}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#52525B] dark:text-purple-300/70 uppercase font-mono">Assigned Lead Specialist</div>
                    <div className="font-semibold text-[#34073E] dark:text-white mt-0.5">{confirmedBooking.assignedSpecialist}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadICS}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Calendar (.ICS)</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-[#34073E] dark:bg-purple-900 text-white rounded-xl text-xs font-semibold hover:bg-[#25042D]"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Navigation Control Bar */}
        {step <= 4 && (
          <div className="px-6 sm:px-9 py-4 bg-[#FAF7FC] dark:bg-[#1E0424] border-t border-purple-100 dark:border-purple-900/60 flex items-center justify-between sticky bottom-0 z-20">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#52525B] dark:text-purple-300 hover:text-[#34073E] dark:hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] px-7 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <span>{step === 4 ? 'Confirm & Schedule Consultation' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

