import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Eye, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';

export default function WhyEzeani({ onOpenBooking }) {
  const iconMap = [ShieldCheck, Award, Eye, UserCheck];

  return (
    <section id="about" className="py-20 bg-[#FAF7FC] dark:bg-[#1E0424] border-t border-b border-purple-200/50 dark:border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#8DC63F]" />
            <span>About Ezeani Properties Ltd</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
            A property company built on trust, quality and reach.
          </h2>
          <p className="text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed">
            Ezeani Properties Ltd is a real estate company and a subsidiary of Ezeani Group. We help individuals, families, businesses and investors buy, own and develop property with confidence, delivered nationwide.
          </p>
        </div>

        {/* Vision & Mission Cards - Taller, Richer, Fuller with Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Vision Card (Plum background + High Quality Architectural Image Banner) */}
          <div className="bg-[#34073E] text-white rounded-[2rem] overflow-hidden shadow-2xl border border-purple-900 flex flex-col justify-between group transition-all duration-300 hover:shadow-purple-900/30 hover:-translate-y-1">
            
            {/* Image Banner Container */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-purple-950">
              <img
                src="/images/hero-villa.jpg"
                alt="Ezeani Vision Luxury Real Estate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#34073E] via-[#34073E]/30 to-transparent" />
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

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-snug tracking-tight">
                  To be the most trusted name in Nigerian real estate, the first call for every kind of home.
                </h3>

                <p className="text-sm text-purple-200 leading-relaxed font-sans pt-1">
                  Setting nationwide benchmarks for verified land title documentation, zero boundary encumbrance, and seamless client handover across every region of Nigeria.
                </p>
              </div>

              {/* Bottom Highlights */}
              <div className="pt-6 border-t border-purple-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-purple-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                  <span>100% C of O Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                  <span>Zero Boundary Encumbrance</span>
                </div>
              </div>
            </div>

          </div>

          {/* Mission Card (Elevated Surface + High Quality Commercial Image Banner) */}
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

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white leading-snug tracking-tight">
                  To connect our clients with genuine, well-located property through honest advice and seamless delivery.
                </h3>

                <p className="text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans pt-1">
                  Providing transparent property valuation, certified land survey plans, and expert real estate advisory across every region of Nigeria.
                </p>
              </div>

              {/* Bottom Highlights */}
              <div className="pt-6 border-t border-purple-200/80 dark:border-purple-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-[#52525B] dark:text-purple-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8] shrink-0" />
                  <span>Transparent Valuation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8] shrink-0" />
                  <span>Certified Title Documentation</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Core Values 4-Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold font-heading text-[#171717] dark:text-white">
              Our Core Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EZEANI_COMPANY_INFO.coreValues.map((val, idx) => {
              const Icon = iconMap[idx] || ShieldCheck;
              return (
                <div
                  key={val.title}
                  className="bg-white dark:bg-[#34073E] p-6 rounded-2xl border border-purple-200/80 dark:border-purple-900 shadow-xs space-y-3 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#171717] dark:text-white">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#3F3F46] dark:text-purple-200 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How We Work - 4 Simple Steps */}
        <div className="bg-[#34073E] text-white p-8 sm:p-10 rounded-3xl space-y-8 shadow-2xl border border-purple-900 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-900 pb-6">
            <div>
              <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold tracking-widest mb-1">
                HOW WE WORK
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                Four Simple Steps to Property Ownership
              </h3>
            </div>

            <button
              onClick={() => onOpenBooking(null)}
              className="px-5 py-2.5 rounded-xl bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] text-xs font-bold transition-all shadow-md flex items-center gap-2"
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
                <p className="text-xs text-purple-200 leading-relaxed">
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

