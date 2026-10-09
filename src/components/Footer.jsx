import React, { useState } from 'react';
import { 
  Building2, 
  Compass, 
  HardHat, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';

export default function Footer({ onOpenBooking, onOpenMyBookings, onOpenAdmin, companyInfo }) {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setSubscribedEmail('');
    }
  };

  return (
    <footer className="bg-[#34073E] dark:bg-[#1E0424] text-white pt-16 pb-12 border-t border-purple-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Warm Light CTA Conversion Block (High Contrast & Deliberate Brand Surface) */}
        <div className="bg-[#FAF7FC] dark:bg-[#2A0631] text-[#171717] dark:text-white p-8 sm:p-12 lg:p-14 rounded-[2.25rem] border border-purple-200/90 dark:border-purple-800 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden transition-all duration-300">
          
          {/* CTA Left Content */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34073E] text-[#8DC63F] dark:bg-purple-950 dark:text-[#8DC63F] text-xs font-mono font-bold uppercase tracking-wider">
              <span>{companyInfo?.footerCtaBadge || "EZEANI PROPERTIES LTD • NATIONWIDE DELIVERY"}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#34073E] dark:text-white tracking-tight leading-tight">
              {companyInfo?.footerCtaTitle || "Ready to find, secure, or build your next property?"}
            </h3>

            <p className="text-xs sm:text-sm text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
              {companyInfo?.footerCtaSubtitle || "Call, chat or visit. Our team of certified survey experts and real estate advisors is ready to guide you from initial enquiry to final title handover."}
            </p>
          </div>

          {/* CTA Right Conversion Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <a
              href={`https://wa.me/${EZEANI_COMPANY_INFO.whatsapp.replace(/\+/g, '')}?text=Hello%20Ezeani%20Properties,%20I%20want%20to%20inquire%20about%20a%20property.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-[#34073E] hover:bg-[#4A0A58] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#8DC63F]" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenBooking(null)}
              className="px-7 py-4 rounded-2xl bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Book Consultation</span>
            </button>
          </div>

        </div>

        {/* MIDDLE: Organized Information Columns (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mt-16 sm:mt-20 mb-16">
          
          {/* Column 1: Company (4 Cols on LG) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E0424] border border-purple-800 flex items-center justify-center p-1.5 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <path d="M20 50 L30 20 L50 35 L70 20 L80 50 Z" fill="#B462E8" />
                  <rect x="38" y="52" width="24" height="36" rx="4" fill="#8DC63F" />
                </svg>
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                EZEANI PROPERTIES LTD
              </span>
            </div>

            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed max-w-sm">
              {EZEANI_COMPANY_INFO.group}. Residential, commercial and industrial real estate, luxury lands and expert consultation.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8DC63F] font-bold bg-[#1E0424] px-3.5 py-1.5 rounded-full border border-purple-900">
              <ShieldCheck className="w-4 h-4 text-[#8DC63F]" />
              <span>Verified Titles & Honest Advice</span>
            </div>
          </div>

          {/* Column 2: What We Do (2 Cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#8DC63F] tracking-wider font-bold">
              What We Do
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-purple-200">
              <li>
                <a href="#properties" className="hover:text-[#8DC63F] transition-colors flex items-center gap-1.5">
                  <span>Residential Real Estate</span>
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#8DC63F] transition-colors flex items-center gap-1.5">
                  <span>Commercial Real Estate</span>
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#8DC63F] transition-colors flex items-center gap-1.5">
                  <span>Industrial Real Estate</span>
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#8DC63F] transition-colors flex items-center gap-1.5">
                  <span>Luxury Lands</span>
                </a>
              </li>
              <li>
                <a href="#surveying" className="hover:text-[#8DC63F] transition-colors flex items-center gap-1.5">
                  <span>Land Surveying & Title Search</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Offices (3 Cols on LG) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#8DC63F] tracking-wider font-bold">
              Contact & Offices
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-purple-200">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#1E0424] text-[#8DC63F] flex items-center justify-center shrink-0 border border-purple-900">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-white text-sm">{EZEANI_COMPANY_INFO.phone}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#1E0424] text-[#8DC63F] flex items-center justify-center shrink-0 border border-purple-900 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Lagos Office:</div>
                  <div className="text-xs text-purple-300 mt-0.5 leading-snug">{EZEANI_COMPANY_INFO.offices[0].address}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#1E0424] text-[#8DC63F] flex items-center justify-center shrink-0 border border-purple-900 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Abuja Office:</div>
                  <div className="text-xs text-purple-300 mt-0.5 leading-snug">{EZEANI_COMPANY_INFO.offices[1].address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social & Updates (3 Cols on LG) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#8DC63F] tracking-wider font-bold">
              Social & Updates
            </h4>

            <p className="text-xs text-purple-200 leading-relaxed">
              Follow our latest verified listings on Instagram & Facebook <span className="text-[#8DC63F] font-bold">@ezeaniproperties</span>.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
              <input
                type="email"
                required
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                placeholder="Enter email address..."
                className="w-full px-4 py-3 bg-[#1E0424] border border-purple-800 rounded-2xl text-xs text-white placeholder-purple-400 focus:outline-none focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/50 transition-all"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 cursor-pointer"
              >
                <span>Subscribe Briefing</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              {isSubscribed && (
                <div className="text-xs text-[#8DC63F] font-mono flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* BOTTOM: Legal / Copyright / Secondary Info Row */}
        <div className="pt-8 border-t border-purple-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300 font-mono">
          <div>
            © {new Date().getFullYear()} Ezeani Properties Ltd. A subsidiary of Ezeani Group.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-purple-300">
            <span>Verified Titles Guaranteed</span>
            <span>•</span>
            <span>Nationwide Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
