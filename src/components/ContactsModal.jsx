import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  ArrowRight, 
  User, 
  Sparkles,
  Building2
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';

export default function ContactsModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    serviceCategory: 'Land Surveying & Title Clearance',
    message: '' 
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1E0424]/85 backdrop-blur-md overflow-y-auto p-3 sm:p-6 lg:p-10 flex items-center justify-center animate-fade-in">
      <div className="relative w-full max-w-6xl bg-white dark:bg-[#2A0631] rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-200/80 dark:border-purple-800/80 my-auto flex flex-col min-h-[85vh]">
        
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 p-3 rounded-full bg-white/90 dark:bg-[#34073E]/90 text-[#34073E] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 border border-purple-200/60 dark:border-purple-800/60 shadow-lg transition-all"
          title="Close Contact Experience"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Spacious Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
          
          {/* ================================================== */}
          {/* LEFT PANEL: LARGE IMAGE PANEL (45-50% Desktop Width) */}
          {/* ================================================== */}
          <div className="lg:col-span-5 relative min-h-[480px] lg:min-h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12 overflow-hidden group">
            
            {/* Background Property Image */}
            <img 
              src="/images/hero-villa.jpg" 
              alt="Ezeani Properties Luxury Estate & Surveying"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Ezeani Dark Plum Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424] via-[#34073E]/85 to-[#34073E]/50 z-10" />

            {/* Content Placed Over Image */}
            <div className="relative z-20 space-y-6">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#8DC63F] text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#8DC63F]" />
                <span>Regional Advisory Desk</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight">
                  Let's Discuss Your Property & Survey Needs
                </h3>
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed font-sans max-w-md">
                  Our certified surveyors, title clearance specialists, and real estate advisors are available across Lagos and Abuja to assist your acquisitions.
                </p>
              </div>

              {/* Office Locations Overlay Cards */}
              <div className="space-y-3 pt-2">
                
                {EZEANI_COMPANY_INFO.offices.map((office, idx) => (
                  <div key={idx} className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8DC63F]">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span>{office.city}</span>
                    </div>
                    <p className="text-xs text-purple-100 font-medium leading-snug pl-6">
                      {office.address}
                    </p>
                  </div>
                ))}

                {/* Direct Phone & WhatsApp */}
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-white">
                    <Phone className="w-4 h-4 text-[#8DC63F]" />
                    <span>{EZEANI_COMPANY_INFO.phone}</span>
                  </div>

                  <a
                    href={`https://wa.me/${EZEANI_COMPANY_INFO.whatsapp.replace(/\+/g, '')}?text=Hello%20Ezeani%20Properties,%20I%20want%20to%20inquire%20about%20a%20property.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#8DC63F] text-[#1E0424] text-xs font-bold hover:bg-[#7bb532] transition-all shadow-md shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Bottom Guarantee Badge */}
            <div className="relative z-20 pt-6 mt-6 border-t border-white/20 flex items-center gap-2 text-xs font-mono font-semibold text-[#8DC63F]">
              <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
              <span>Certified Title Verification & Boundary Guarantee</span>
            </div>

          </div>

          {/* ================================================== */}
          {/* RIGHT PANEL: SPACIOUS FORM AREA (50-55% Desktop Width) */}
          {/* ================================================== */}
          <div className="lg:col-span-7 bg-white dark:bg-[#2A0631] p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
            
            {submitted ? (
              /* Success State */
              <div className="my-auto text-center space-y-6 p-8 bg-[#FAF7FC] dark:bg-[#1E0424] rounded-[2rem] border border-purple-200/80 dark:border-purple-800/80">
                <div className="w-16 h-16 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center mx-auto ring-8 ring-[#8DC63F]/10">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-heading text-[#34073E] dark:text-white">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#52525B] dark:text-purple-300/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#34073E] dark:text-white">{formData.name}</span>. Your request has been routed to our Lagos & Abuja advisory desk. An advisor will contact you within 2 hours.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', serviceCategory: 'Land Surveying & Title Clearance', message: '' });
                  }}
                  className="px-7 py-3 bg-[#34073E] dark:bg-purple-900 text-white rounded-xl text-xs font-semibold hover:bg-[#25042D]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Form Container */
              <form onSubmit={handleSubmit} className="space-y-8 my-auto">
                
                {/* Form Header */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
                    Direct Advisory Enquiry
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#34073E] dark:text-white tracking-tight">
                    Contact Ezeani Properties Ltd
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] dark:text-purple-300/80 leading-relaxed">
                    Fill out your project requirements below. Our advisory desk will provide immediate guidance and title clearance support.
                  </p>
                </div>

                {/* Input Fields Stack */}
                <div className="space-y-5">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#34073E] dark:text-purple-200">
                      Full Name <span className="text-[#8DC63F]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Arc. Olamide Johnson"
                        className="w-full pl-11 pr-4 py-3.5 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs sm:text-sm font-medium text-[#34073E] dark:text-white placeholder:text-purple-400/60 dark:placeholder:text-purple-300/40 focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
                      />
                    </div>
                  </div>

                  {/* Email & Phone 2-Column Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-semibold text-[#34073E] dark:text-purple-200">
                        Email Address <span className="text-[#8DC63F]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. olamide@company.ng"
                          className="w-full pl-11 pr-4 py-3.5 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs sm:text-sm font-medium text-[#34073E] dark:text-white placeholder:text-purple-400/60 dark:placeholder:text-purple-300/40 focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-semibold text-[#34073E] dark:text-purple-200">
                        Phone / WhatsApp Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +234 902 171 0933"
                          className="w-full pl-11 pr-4 py-3.5 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs sm:text-sm font-medium text-[#34073E] dark:text-white placeholder:text-purple-400/60 dark:placeholder:text-purple-300/40 focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Primary Service Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#34073E] dark:text-purple-200">
                      Primary Service Required
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full py-3.5 px-4 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs sm:text-sm font-medium text-[#34073E] dark:text-white focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20 cursor-pointer"
                    >
                      <option value="Land Surveying & Title Clearance">Land Surveying & Title Clearance (RTK / GIS)</option>
                      <option value="Residential & Luxury Property Acquisition">Residential & Luxury Property Acquisition</option>
                      <option value="Commercial Land & Industrial Acreage">Commercial Land & Industrial Acreage</option>
                      <option value="Governor's Consent & C of O Verification">Governor's Consent & C of O Legal Search</option>
                      <option value="General Real Estate Advisory Desk">General Real Estate Advisory Desk</option>
                    </select>
                  </div>

                  {/* Message Scope Textarea */}
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#34073E] dark:text-purple-200">
                      Message & Project Scope <span className="text-[#8DC63F]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe parcel location (e.g. Lekki, Ikeja, Guzape), title status questions, or property acquisition scope..."
                      className="w-full p-4 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 rounded-xl text-xs sm:text-sm font-medium text-[#34073E] dark:text-white placeholder:text-purple-400/60 dark:placeholder:text-purple-300/40 focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/20 resize-none"
                    />
                  </div>

                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-purple-100 dark:border-purple-900/60">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 text-xs font-semibold text-[#52525B] dark:text-purple-300 hover:text-[#34073E] dark:hover:text-white transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 active:scale-98 cursor-pointer"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

