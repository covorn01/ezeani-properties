import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Eye, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  MapPin,
  Users,
  Compass,
  FileCheck,
  TrendingUp,
  HeartHandshake,
  Heart,
  Scale,
  PhoneCall
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';
import LeadershipSection from './LeadershipSection';

export default function WhyEzeani({ onOpenBooking, onOpenContacts, companyInfo }) {
  const valueIcons = [ShieldCheck, Eye, TrendingUp, Scale, HeartHandshake];
  const whyImage = companyInfo?.whyMedia || "/images/hero-villa.jpg";
  const isWhyVideo = Boolean(
    whyImage && (
      (companyInfo?.whyMediaType === 'video') ||
      whyImage.includes('youtube') ||
      whyImage.includes('vimeo') ||
      whyImage.endsWith('.mp4')
    )
  );

  const activeValues = (companyInfo?.coreValues || EZEANI_COMPANY_INFO.coreValues).slice(0, 4);
  const activeSegments = EZEANI_COMPANY_INFO.clientSegments;

  return (
    <section id="about" className="py-20 bg-[#FAF7FC] dark:bg-[#1E0424] border-t border-b border-purple-200/50 dark:border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#8DC63F]" />
            <span>{companyInfo?.whyBadge || "THE EZEANI PHILOSOPHY & FOUNDATION"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
            {companyInfo?.whyTitle || "Luxury Through Positioning: Creating Legacies, Building Trust."}
          </h2>
          <p className="text-base sm:text-lg text-[#3F3F46] dark:text-purple-200 leading-relaxed max-w-3xl mx-auto">
            {companyInfo?.whySubtitle || "Real estate is not just what we do; it is a responsibility we understand. Built on firsthand experience, professional diligence, and an uncompromising commitment to protecting buyers, couples, diaspora clients, and investors."}
          </p>
        </div>

        {/* Brand Promise Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#34073E] via-[#2A0631] to-[#1E0424] p-6 sm:p-8 text-white border border-purple-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold tracking-widest flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>OUR BRAND PROMISE</span>
            </div>
            <p className="text-lg sm:text-xl font-heading font-semibold text-purple-100 leading-snug">
              “{EZEANI_COMPANY_INFO.brandPromise}”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 text-xs font-mono">
            <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
              <span className="text-purple-300 block text-[10px] uppercase">Tagline</span>
              <span className="font-bold text-white text-xs sm:text-sm">Luxury Through Positioning</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-[#8DC63F]/20 border border-[#8DC63F]/30 text-center">
              <span className="text-[#8DC63F] block text-[10px] uppercase">Motto</span>
              <span className="font-bold text-[#8DC63F] text-xs sm:text-sm">Creating Legacies • Securing Land</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards - Exact Content from Founder Story Document */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Vision Card */}
          <div className="bg-[#34073E] text-white rounded-[2rem] overflow-hidden shadow-2xl border border-purple-900 flex flex-col justify-between group transition-all duration-300 hover:shadow-purple-900/30 hover:-translate-y-1">
            
            {/* Image/Video Banner Container */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-purple-950">
              {isWhyVideo ? (
                <iframe
                  src={whyImage.includes('youtube') ? whyImage.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&controls=0&loop=1' : whyImage}
                  title="Why Ezeani Video"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={whyImage}
                  alt="Ezeani Vision Luxury Real Estate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#34073E] via-[#34073E]/30 to-transparent pointer-events-none" />
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between -mt-4 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1.5 bg-[#8DC63F] rounded-full" />
                  <span className="text-xs font-mono uppercase text-[#8DC63F] tracking-widest font-bold">
                    OUR VISION
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug tracking-tight">
                  {EZEANI_COMPANY_INFO.vision}
                </h3>

                <p className="text-sm sm:text-base text-purple-100 leading-relaxed font-sans pt-1">
                  Setting high benchmarks across Delta State, Anambra State, and nationwide for certified land documentation, strategic wealth creation, and zero boundary encumbrance.
                </p>
              </div>

              {/* Bottom Highlights */}
              <div className="pt-6 border-t border-purple-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-purple-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                  <span>Generational Wealth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                  <span>Strategic Positioning</span>
                </div>
              </div>
            </div>

          </div>

          {/* Mission Card */}
          <div className="bg-white dark:bg-[#34073E] text-[#171717] dark:text-white rounded-[2rem] overflow-hidden shadow-xl border border-purple-200 dark:border-purple-800 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            
            {/* Image Banner Container */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-purple-950">
              <img
                src="/images/hero-commercial.jpg"
                alt="Ezeani Mission Commercial & Land Excellence"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#34073E] via-transparent to-transparent" />
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between -mt-4 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1.5 bg-[#7A2FB0] dark:bg-[#B462E8] rounded-full" />
                  <span className="text-xs font-mono uppercase text-[#7A2FB0] dark:text-[#B462E8] tracking-widest font-bold">
                    OUR MISSION
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white leading-snug tracking-tight">
                  {EZEANI_COMPANY_INFO.mission}
                </h3>

                <p className="text-sm sm:text-base text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans pt-1">
                  We approach every real estate consultation with deep diligence, providing transparent property valuation, verified title deeds, and honest advisory that protects our clients from avoidable loss.
                </p>
              </div>

              {/* Bottom Highlights */}
              <div className="pt-6 border-t border-purple-200/80 dark:border-purple-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-[#52525B] dark:text-purple-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8] shrink-0" />
                  <span>Rigorous Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8] shrink-0" />
                  <span>Responsible Diligence</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 5 Core Values - 2-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          
          {/* Left Column: Section Copy & Contact Us CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono uppercase tracking-wider font-bold border border-purple-200/80 dark:border-purple-800/60 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
              <span>UNCOMPROMISING PILLARS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] dark:text-white tracking-tight leading-tight">
              Our 5 Core Values
            </h3>
            <p className="text-base sm:text-lg text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans">
              These principles were not created in a boardroom; they were forged through years of ground-level experience in Nigeria's real estate terrain.
            </p>

            {/* Contact Us CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onOpenContacts) {
                    onOpenContacts();
                  } else {
                    const el = document.getElementById('contact-advisory');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#8DC63F] dark:hover:bg-[#9de047] text-white dark:text-[#1E0424] font-bold text-sm sm:text-base shadow-lg shadow-purple-950/20 dark:shadow-[#8DC63F]/20 hover:shadow-xl transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#8DC63F] dark:text-[#1E0424]" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Bento Grid of Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4.5">
              {activeValues.map((val, idx) => {
                const Icon = valueIcons[idx] || ShieldCheck;
                const isHero = idx === 0;

                return (
                  <div
                    key={val.title}
                    className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-full ${
                      isHero
                        ? 'sm:col-span-2 bg-gradient-to-br from-white via-purple-50/60 to-white dark:from-[#34073E] dark:via-[#2A0633] dark:to-[#1E0424] border-purple-300/90 dark:border-purple-700/80 shadow-md ring-1 ring-purple-500/10'
                        : 'bg-white dark:bg-[#34073E] border-purple-200/80 dark:border-purple-900/80 shadow-xs hover:border-[#8DC63F]/60 dark:hover:border-[#8DC63F]/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div
                          className={`rounded-xl flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-105 ${
                            isHero
                              ? 'w-12 h-12 bg-gradient-to-tr from-[#34073E] to-[#7A2FB0] text-[#8DC63F] shadow-sm'
                              : 'w-10 h-10 bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#8DC63F]'
                          }`}
                        >
                          <Icon className={isHero ? 'w-6 h-6' : 'w-5 h-5'} />
                        </div>

                        <div className="flex items-center gap-2">
                          {isHero && (
                            <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-[#7A2FB0] dark:text-[#8DC63F] border border-purple-200 dark:border-purple-800">
                              Foundational Pillar
                            </span>
                          )}
                          <span className="text-xs font-mono font-bold text-purple-400/70 dark:text-purple-400/50">
                            0{idx + 1}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4
                          className={`font-bold font-heading text-[#171717] dark:text-white transition-colors group-hover:text-[#7A2FB0] dark:group-hover:text-[#8DC63F] ${
                            isHero ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                          }`}
                        >
                          {val.title}
                        </h4>
                        <p
                          className={`text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans ${
                            isHero ? 'text-sm sm:text-base' : 'text-sm'
                          }`}
                        >
                          {val.desc || val.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* The Ezeani Standard - Outline Bento Tile Aligned at Bottom Right */}
              <div className="group relative p-6 rounded-2xl border border-purple-200/80 dark:border-purple-800/60 bg-transparent transition-all duration-300 hover:border-[#8DC63F]/60 dark:hover:border-[#8DC63F]/60 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100/50 dark:bg-purple-950/40 text-[#7A2FB0] dark:text-[#8DC63F] flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-105">
                      <ShieldCheck className="w-5 h-5 text-[#8DC63F]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-purple-400/70 dark:text-purple-400/50">
                      05
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold font-heading text-base sm:text-lg text-[#171717] dark:text-white transition-colors group-hover:text-[#7A2FB0] dark:group-hover:text-[#8DC63F]">
                      The Ezeani Standard
                    </h4>
                    <p className="text-sm text-[#52525B] dark:text-purple-200/90 leading-relaxed font-sans">
                      Every acquisition is held to uncompromising ethical due diligence, authentic registered survey coordinates, and verified legal documentation.
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-[#71717A] dark:text-purple-300/70 border-t border-purple-200/50 dark:border-purple-900/40 mt-4">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8DC63F]" />
                    Zero Fraud
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8DC63F]" />
                    100% Title Sanity
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Who We Protect & Empower (New Section Directly Addressing Founder's Mission) */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#7A2FB0] dark:text-[#B462E8] font-bold tracking-widest">
              WHO WE SERVE & SAFEGUARD
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white">
              Why We Operate Differently
            </h3>
            <p className="text-xs sm:text-sm text-[#52525B] dark:text-purple-200 max-w-xl mx-auto">
              Having seen people lose life savings, couples torn apart by disputes, and diaspora buyers exploited by fake agents, our services are structured to provide total sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeSegments.map((seg, idx) => (
              <div 
                key={seg.title}
                className="bg-white dark:bg-[#34073E] p-6 sm:p-7 rounded-[2rem] border border-purple-200/80 dark:border-purple-800 shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#8DC63F] text-[10px] font-mono font-bold uppercase">
                    {seg.tagline}
                  </span>
                  <h4 className="text-xl font-bold font-heading text-[#171717] dark:text-white leading-snug">
                    {seg.title}
                  </h4>
                  <p className="text-sm text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
                    {seg.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-100 dark:border-purple-800/50 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-[#8DC63F] font-bold">100% Protected</span>
                  <button
                    onClick={() => onOpenBooking({ category: 'Property Acquisition', notes: `Consultation regarding ${seg.title}` })}
                    className="text-[#7A2FB0] dark:text-[#8DC63F] font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Executive Leadership Team Section */}
        <LeadershipSection 
          variant="full" 
          companyInfo={companyInfo} 
          onOpenBooking={onOpenBooking} 
        />

        {/* How We Work - 4 Simple Steps to Property Ownership */}
        <div className="bg-[#34073E] text-white p-8 sm:p-10 rounded-3xl space-y-8 shadow-2xl border border-purple-900 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-900 pb-6">
            <div>
              <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold tracking-widest mb-1">
                HOW WE WORK
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                Four Steps to Verified Property Ownership
              </h3>
            </div>

            <button
              onClick={() => onOpenBooking(null)}
              className="px-5 py-2.5 rounded-xl bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Start Step 01: Consult</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EZEANI_COMPANY_INFO.processSteps.map((step) => (
              <div key={step.num} className="space-y-2 relative group">
                <div className="text-4xl font-bold font-heading text-purple-400/40 group-hover:text-[#8DC63F] transition-colors">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold font-heading text-white">
                  {step.title}
                </h4>
                <p className="text-sm text-purple-200 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
