import React, { useEffect } from 'react';
import { 
  X, 
  Quote, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  MapPin, 
  Award,
  Heart,
  TrendingUp,
  Landmark,
  UserCheck,
  Building2
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';

export default function FounderStoryModal({ isOpen, onClose, onOpenBooking }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl bg-white dark:bg-[#1E0424] text-[#171717] dark:text-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-purple-200/80 dark:border-purple-800/80 overflow-hidden flex flex-col h-[94vh] max-h-[96vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title and Close Button */}
        <div className="sticky top-0 z-30 bg-white/95 dark:bg-[#1E0424]/95 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-5 border-b border-purple-100 dark:border-purple-800/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#34073E] text-[#8DC63F] flex items-center justify-center shadow-sm shrink-0">
              <Quote className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A2FB0] dark:text-[#B462E8] font-bold">
                  EZEANI PROPERTIES LIMITED
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] font-bold">
                  ORIGIN STORY
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-bold font-heading text-[#34073E] dark:text-white tracking-tight">
                The Founder’s Story & Identity
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-900/40 text-[#34073E] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Two-Column Grid Body */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Column (Desktop Only): Fixed Founder Portrait & Profile Card */}
          <div className="hidden lg:flex lg:w-[380px] xl:w-[430px] shrink-0 flex-col justify-between p-6 xl:p-8 bg-gradient-to-b from-[#34073E] via-[#24052B] to-[#1E0424] border-r border-purple-200/40 dark:border-purple-800/60 overflow-hidden text-white relative">
            
            {/* Top Identity Block */}
            <div className="space-y-5">
              
              {/* Founder Portrait Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-700/60 aspect-[3/4] w-full group bg-purple-950">
                <img
                  src="/images/christian-ezeani.jpg"
                  alt="Christian Ezeani - Founder & Managing Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle vignette & gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424]/95 via-transparent to-transparent pointer-events-none" />

                {/* Floating Corner Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-[#34073E]/90 text-white backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10 shadow-md">
                    FOUNDER & MD
                  </span>
                </div>

                {/* Bottom Portrait Caption */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#8DC63F] tracking-wider">
                      CEO, Ezeani Group
                    </span>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold font-heading text-white drop-shadow-md">
                    Christian Ezeani
                  </h3>
                  <p className="text-xs font-mono text-purple-200 italic">
                    “Ezeani na-eme ife ani”
                  </p>
                </div>
              </div>

              {/* Title Meaning & Credentials Callout */}
              <div className="p-4 rounded-2xl bg-white/10 dark:bg-purple-950/60 backdrop-blur-md border border-white/10 dark:border-purple-800/60 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#8DC63F] uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>The King of the Land</span>
                </div>
                <p className="text-xs text-purple-100 leading-relaxed font-sans">
                  "The King of the Land who deals in Lands" — bestowed during university days and transformed into a national brand of trust, verified land titles, and strategic positioning.
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] font-mono text-purple-200">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#8DC63F]" />
                    <span>Since 2010</span>
                  </span>
                  <span>•</span>
                  <span>Delta HQ & Anambra Desk</span>
                </div>
              </div>

            </div>

            {/* Bottom Direct Founder Action Buttons on Left Card */}
            <div className="pt-4 border-t border-purple-800/60 space-y-2.5">
              <a
                href={`https://wa.me/${EZEANI_COMPANY_INFO.whatsapp.replace(/\+/g, '')}?text=Hello%20Christian%20Ezeani,%20I%20just%20read%20your%20inspiring%20Founder%20Story%20and%20would%20love%20to%20discuss%20property%20positioning.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Christian Ezeani</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenBooking) {
                    onOpenBooking({ 
                      category: 'Executive Consultation', 
                      notes: 'Direct Founder Consultation with Christian Ezeani (Ezeani na-eme ife ani)' 
                    });
                  }
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Book Direct Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Column: Scrollable Story Narrative (Breathable & Readable) */}
          <div className="flex-1 h-full overflow-y-auto px-6 sm:px-10 lg:px-12 xl:px-14 py-8 space-y-10 font-sans text-base sm:text-[18px] leading-[1.8] text-[#27272A] dark:text-purple-100 scrollbar-thin">
            
            {/* Mobile-Only Portrait Card (< lg) */}
            <div className="lg:hidden rounded-3xl overflow-hidden border border-purple-200 dark:border-purple-800 shadow-xl bg-[#34073E] text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-36 h-48 sm:w-44 sm:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-purple-700/60 bg-purple-950">
                <img 
                  src="/images/christian-ezeani.jpg" 
                  alt="Christian Ezeani - Founder & Managing Director" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="px-2.5 py-0.5 rounded-full bg-[#8DC63F] text-[#1E0424] text-[10px] font-mono font-bold uppercase">
                  FOUNDER & MD
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Christian Ezeani
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#8DC63F]">
                  “Ezeani na-eme ife ani”
                </p>
                <p className="text-xs text-purple-200 leading-relaxed">
                  The King of the Land who deals in Lands • Luxury Land Specialist & Positioning Strategist
                </p>
              </div>
            </div>

            {/* Hero Banner Quote */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#34073E] via-[#2A0631] to-[#1E0424] text-white p-6 sm:p-8 md:p-10 border border-purple-800 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F] text-[#34073E] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Foundational Manifesto</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight leading-tight text-white">
                  "Real Estate is not what I do, it is who I am."
                </h3>

                <p className="text-purple-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Some people choose a career, others grow into one. And then, there are those whose lives are shaped deliberately, painfully and purposefully into what they are called to become. I am one of them.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#8DC63F]">
                  <span>— Christian Ezeani</span>
                  <span className="opacity-40">•</span>
                  <span className="italic font-bold">"Ezeani na-eme ife ani" (The King of the Land who deals in Lands)</span>
                </div>
              </div>
            </div>

            {/* Chapter 1: The Dream That Was Chosen For Me */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#8DC63F]" />
                <span>CHAPTER 01</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                The Dream That Was Chosen For Me
              </h4>
              <p>
                I was raised with structure, direction and expectation. Like many African homes, my path was already drawn and that was to become a medical doctor or a pharmacist. It wasn’t just a suggestion; it was a responsibility.
              </p>
              <p>
                And I embraced it. I studied relentlessly driven not just by ambition, but by the desire to make my parents proud, which are my role models. That was my first definition of success.
              </p>
              <p className="font-semibold text-[#171717] dark:text-white">
                But life has a way of interrupting even the most carefully written plans.
              </p>
            </section>

            {/* Chapter 2: June 21st – The Day Everything Changed */}
            <section className="space-y-4 bg-purple-50/70 dark:bg-purple-950/40 p-6 sm:p-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#8DC63F]" />
                <span>CHAPTER 02</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                June 21st: The Day Everything Changed
              </h4>
              <p>
                It was doom. A normal day, until it wasn’t normal again. My elder brother, Chinonso, knocked on the door, and I opened it without hesitation. What I received in that moment would redefine everything I thought I knew about life: <span className="font-bold text-[#34073E] dark:text-[#8DC63F]">“Our father is dead!”</span>
              </p>
              <p>
                Those words didn’t just bring pain; they brought silence. The kind of silence that rearranged my reality. In an instant, the dreams I was building collapsed into uncertainty. The man I looked up to, my hero, was gone.
              </p>
              <p>
                I was broken, lost, and directionless, until August 20th, 2010—the very day we laid him to rest. And then, life began, but differently.
              </p>
            </section>

            {/* Chapter 3: When Life Became The Teacher */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#8DC63F]" />
                <span>CHAPTER 03</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                When Life Became The Teacher
              </h4>
              <p>
                After that moment, life stopped being predictable. It became a masterclass through hard lessons, unexpected opportunities, betrayals, growth, and resilience. Every experience, whether painful or rewarding, began shaping me into someone stronger, sharper, and more aware.
              </p>
              <p className="italic text-[#7A2FB0] dark:text-[#B462E8] font-medium">
                What I didn’t realize at that time was: I was being prepared, not for medicine, but for mastery in something else.
              </p>
            </section>

            {/* Chapter 4: Where It Really Began – The Foundation (2010) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#8DC63F]" />
                <span>CHAPTER 04</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                Where It Really Began: The Foundation (2010)
              </h4>
              <p>
                Long before my university days, I had already stepped into the world of land. In 2010, I started working with a land surveying company, <span className="font-bold text-[#171717] dark:text-white">Ubajekwe Survey Services</span>, as a chainman and a labourer. It was not glamorous work, but it was foundational.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Painful land boundary disputes between families",
                  "Fraudulent transactions & fake paper allocations",
                  "Ignorant buyers being ruthlessly exploited",
                  "Diaspora clients losing life savings to untrustworthy agents",
                  "Deadly communal consequences from counterfeit deals"
                ].map((reality, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 text-xs">
                    <ShieldCheck className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{reality}</span>
                  </div>
                ))}
              </div>

              <p className="pt-2">
                I wasn’t just working then. I was observing, learning, and understanding the land system from the inside out. That was my real education.
              </p>
            </section>

            {/* Chapter 5: The Turning Point – My First Deal at FUNAI (2015) */}
            <section className="space-y-4 bg-gradient-to-br from-purple-100/70 via-purple-50/50 to-white dark:from-[#2A0631] dark:via-[#1E0424] dark:to-[#17031C] p-6 sm:p-8 rounded-3xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#8DC63F]" />
                <span>CHAPTER 05</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                The Turning Point: My First Deal (2015)
              </h4>
              <p>
                During my university days at <span className="font-bold text-[#171717] dark:text-white">Ebonyi State University</span>, something happened that would forever define my path. In my second year, I facilitated my first land transaction—a deal in FUNAI.
              </p>
              <p>
                That single move earned me <span className="font-bold font-mono text-[#34073E] dark:text-[#8DC63F]">₦400,000</span>. But more importantly, it gave me clarity.
              </p>
              <p>
                It wasn’t about the money; it was what I felt:
              </p>
              <ul className="space-y-2 list-none pl-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                  <span>The deep satisfaction of helping someone secure genuine land in a desired location.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                  <span>The confidence of navigating a complex, multi-layered regulatory and communal process.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                  <span>The sudden realization that I understood land deeply, instinctively, and thoroughly.</span>
                </li>
              </ul>
              <p className="font-semibold text-[#171717] dark:text-white pt-1">
                That moment changed everything.
              </p>
            </section>

            {/* Chapter 6: From Experience to Identity – Ezeani na-eme ife ani */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#8DC63F]" />
                <span>CHAPTER 06</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                From Experience to Identity
              </h4>
              <p>
                From that day forward, it was no longer a side interest; it became a mission:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#34073E] border border-purple-100 dark:border-purple-800 space-y-1">
                  <div className="font-bold text-xs text-[#34073E] dark:text-[#8DC63F]">01. The Right Way</div>
                  <p className="text-xs text-[#52525B] dark:text-purple-200">Help people acquire land with zero deception and total legal certainty.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-[#34073E] border border-purple-100 dark:border-purple-800 space-y-1">
                  <div className="font-bold text-xs text-[#34073E] dark:text-[#8DC63F]">02. Complete Protection</div>
                  <p className="text-xs text-[#52525B] dark:text-purple-200">Shield buyers, couples, and diaspora investors from costly, heartbreaking traps.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-[#34073E] border border-purple-100 dark:border-purple-800 space-y-1">
                  <div className="font-bold text-xs text-[#34073E] dark:text-[#8DC63F]">03. Professionalism</div>
                  <p className="text-xs text-[#52525B] dark:text-purple-200">Bring dignity and transparency into an industry plagued with uncertainty.</p>
                </div>
              </div>

              <div className="mt-4 p-5 rounded-2xl bg-[#34073E] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold">In the University, I Earned A Name:</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading mt-1 text-[#8DC63F]">
                    “Ezeani na-eme ife ani”
                  </div>
                  <div className="text-xs text-purple-200 italic mt-0.5">
                    Meaning: “The King of the Land who deals in Lands”
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-purple-900/60 border border-purple-700 text-xs font-mono text-purple-200">
                  It wasn’t just a nickname; it was an identity.
                </div>
              </div>

              <p className="pt-2 font-medium">
                And from that identity, <span className="font-bold text-[#171717] dark:text-white">EZEANI PROPERTIES LIMITED</span> was born.
              </p>
            </section>

            {/* Chapter 7: Why I Do This & Delta/Anambra Luxury Specialization */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#8DC63F]" />
                <span>CHAPTER 07</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                Why I Operate Differently
              </h4>
              <p>
                I have seen too much to treat real estate as just a business. I have seen people lose entire life savings. I have seen couples fall into bitter conflict over land. I have seen investors make avoidable mistakes due to dishonest guidance.
              </p>
              <p>
                As a luxury land specialist based in <span className="font-bold text-[#171717] dark:text-white">Delta State (Asaba, Okpanam Road)</span> and <span className="font-bold text-[#171717] dark:text-white">Anambra State</span>, my focus is not just selling land and properties. It is delivering:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {["Security", "Clarity", "Trust", "Long-Term Value"].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800 font-bold text-xs text-[#34073E] dark:text-[#8DC63F]">
                    {item}
                  </div>
                ))}
              </div>

              <p className="pt-1 font-semibold text-[#171717] dark:text-white">
                Because land is not just property; it is a legacy.
              </p>
            </section>

            {/* Chapter 8: The Philosophy That Built Me */}
            <section className="space-y-4 bg-gradient-to-r from-[#34073E] to-[#1E0424] text-white p-6 sm:p-8 rounded-3xl border border-purple-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8DC63F] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>THE PHILOSOPHY THAT BUILT ME</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading">
                "Nothing is truly bad — if you have the mindset to learn from it."
              </h4>
              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                Every setback, every challenge, every disappointment—they were not obstacles. They were alignment:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono pt-1">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#8DC63F]">Alignment with purpose</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#8DC63F]">Alignment with calling</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#8DC63F]">Alignment with who I am</span>
              </div>
              <p className="text-xs sm:text-sm text-purple-100 pt-2">
                Today, I stand not just as a businessman, but as someone shaped by experience, guided by purpose, and committed to excellence. Real estate is not what I do; this is who I am.
              </p>
            </section>

            {/* Company Foundation: Vision, Mission & Core Values Summary */}
            <section className="space-y-6 pt-4 border-t border-purple-100 dark:border-purple-800">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <span className="text-xs font-mono uppercase text-[#7A2FB0] dark:text-[#B462E8] font-bold tracking-widest">
                  OUR CORPORATE FOUNDATION
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                  Vision, Mission & Core Values
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-[#34073E] border border-purple-200 dark:border-purple-800 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8DC63F]">OUR VISION</span>
                  <p className="text-xs text-[#3F3F46] dark:text-purple-200 leading-relaxed">
                    {EZEANI_COMPANY_INFO.vision}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-[#34073E] border border-purple-200 dark:border-purple-800 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#7A2FB0] dark:text-[#B462E8]">OUR MISSION</span>
                  <p className="text-xs text-[#3F3F46] dark:text-purple-200 leading-relaxed">
                    {EZEANI_COMPANY_INFO.mission}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                {EZEANI_COMPANY_INFO.coreValues.map((v) => (
                  <div key={v.title} className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/60 space-y-1">
                    <div className="text-xs font-bold font-heading text-[#34073E] dark:text-[#8DC63F]">{v.title}</div>
                    <p className="text-[11px] text-[#52525B] dark:text-purple-300 leading-snug">{v.desc}</p>
                  </div>
                ))}
              </div>

              {/* Motto & Tagline Pill Banner */}
              <div className="p-4 rounded-2xl bg-[#34073E] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <div>
                  <span className="text-purple-300">MOTTO: </span>
                  <span className="text-[#8DC63F] font-bold">Creating Legacies, Building Trust, Securing Properties</span>
                </div>
                <div>
                  <span className="text-purple-300">TAGLINE: </span>
                  <span className="text-white font-bold">Luxury Through Positioning</span>
                </div>
              </div>
            </section>

          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="sticky bottom-0 bg-white/95 dark:bg-[#1E0424]/95 backdrop-blur-md px-6 sm:px-8 py-3.5 border-t border-purple-100 dark:border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 z-30">
          <div className="text-xs text-[#52525B] dark:text-purple-300">
            <span className="font-semibold text-[#171717] dark:text-white">Partner With Us:</span> The difference is not just in what you buy; it is who you trust to guide you.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${EZEANI_COMPANY_INFO.whatsapp.replace(/\+/g, '')}?text=Hello%20Christian%20Ezeani,%20I%20just%20read%20your%20inspiring%20Founder%20Story%20and%20would%20love%20to%20discuss%20property%20positioning.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/60 hover:bg-purple-200 dark:hover:bg-purple-800 text-[#34073E] dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span>Chat Direct</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenBooking) {
                  onOpenBooking({ 
                    category: 'Executive Consultation', 
                    notes: 'Direct Founder Consultation with Christian Ezeani (Ezeani na-eme ife ani)' 
                  });
                }
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Consult Christian Ezeani</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
