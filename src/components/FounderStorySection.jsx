import React from 'react';
import { 
  Quote, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Compass, 
  Calendar, 
  BookOpen,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export default function FounderStorySection({ onOpenFullStory, onOpenBooking }) {
  const milestones = [
    {
      year: "2010",
      step: "01",
      title: "The Dream Interrupted",
      subtitle: "When Life Became The Teacher",
      desc: "Raised to pursue medicine to make his parents proud. When his father passed away on June 21, 2010, the certainty collapsed, transforming heartbreak into resilience and purpose."
    },
    {
      year: "2010",
      step: "02",
      title: "Ground-Level Foundation",
      subtitle: "Ubajekwe Survey Services",
      desc: "Started as a chainman and labourer. Witnessed the harsh realities many never see: land disputes, fraudulent transactions, and diaspora clients losing hard-earned life savings to fake agents."
    },
    {
      year: "2015",
      step: "03",
      title: "The Turning Point",
      subtitle: "First Transaction at EBSU & FUNAI",
      desc: "Facilitated his first land deal at Ebonyi State University, earning ₦400,000. It brought crystal clarity: the deep fulfillment of guiding buyers to secure authentic land with complete confidence."
    },
    {
      year: "Today",
      step: "04",
      title: "From Identity to Brand",
      subtitle: "“Ezeani na-eme ife ani”",
      desc: "Earned the title meaning 'The King of the Land who deals in Lands'. From that identity, Ezeani Properties Ltd was born to deliver security, clarity, and positioning where tomorrow's wealth is created."
    }
  ];

  return (
    <section id="founder-story" className="py-20 bg-gradient-to-b from-white via-[#FAF7FC] to-white dark:from-[#1E0424] dark:via-[#16021B] dark:to-[#1E0424] border-t border-purple-200/50 dark:border-purple-900/40 relative overflow-hidden">
      
      {/* Decorative Background Lighting Effects */}
      <div className="absolute top-1/4 left-0 -ml-20 w-80 h-80 bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 -mr-20 w-80 h-80 bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-purple-200/70 dark:border-purple-900/60 pb-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span>THE FOUNDER'S JOURNEY & IDENTITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] dark:text-white tracking-tight leading-[1.15]">
              "Real Estate is not what I do, <br className="hidden sm:inline" />
              <span className="text-[#7A2FB0] dark:text-[#B462E8] italic">it is who I am.</span>"
            </h2>

            <p className="text-base sm:text-lg text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans">
              Some people choose a career, others grow into one. And then, there are those whose lives are shaped deliberately, painfully and purposefully into what they are called to become.
            </p>
          </div>

          {/* Quick Action Trigger */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenFullStory}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-purple-900/60 dark:hover:bg-purple-900 text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer group"
            >
              <BookOpen className="w-4 h-4 text-[#8DC63F]" />
              <span>Read Full Founder Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {onOpenBooking && (
              <button
                onClick={() => onOpenBooking({ 
                  category: 'Executive Consultation', 
                  notes: 'Direct consultation with Christian Ezeani (Founder & MD)' 
                })}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4 stroke-[2.5]" />
                <span>Consult Christian Ezeani</span>
              </button>
            )}
          </div>
        </div>

        {/* Identity Spotlight Banner ("Ezeani na-eme ife ani") - Cinematic Architectural Showcase */}
        <div className="rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-purple-800/80 min-h-[580px] lg:min-h-[640px] flex items-center py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-14">
          
          {/* Background Architectural Image */}
          <img 
            src="/images/mansion.jpg" 
            alt="Ezeani Prime Architectural Estate" 
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105" 
          />

          {/* Deep Luxury Brand Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E0424]/95 via-[#34073E]/90 to-[#18021F]/94" />
          <div className="absolute inset-0 bg-radial at-bottom-left from-[#8DC63F]/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Foreground Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center relative z-10 w-full">
            
            {/* Left: Name, Cultural Identity & Story Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] text-xs font-mono font-bold uppercase tracking-wider border border-[#8DC63F]/30 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#8DC63F]" />
                <span>HONORARY TITLE & REVERED IDENTITY</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold font-heading text-white tracking-tight leading-[1.12]">
                  “Ezeani na-eme ife ani”
                </h3>

                <div className="text-base sm:text-lg lg:text-xl font-mono text-[#8DC63F] font-semibold flex flex-wrap items-center gap-2">
                  <span>Meaning:</span>
                  <span className="underline decoration-purple-400 decoration-2 underline-offset-4 text-white">
                    “The King of the Land who deals in Lands”
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-sans max-w-2xl">
                Bestowed during his university days after navigating and mastering complex land transactions, this title was never just a nickname. It became an identity, a personal standard, and the foundation upon which <span className="text-white font-bold">Ezeani Properties Limited</span> was built.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-purple-200">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
                  <ShieldCheck className="w-4 h-4 text-[#8DC63F]" />
                  <span>14+ Years Field Mastery (Since 2010)</span>
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
                  <MapPin className="w-4 h-4 text-[#8DC63F]" />
                  <span>Delta State & Anambra Specialist</span>
                </span>
              </div>
            </div>

            {/* Right: Key Brand Pillars Glassmorphic Card */}
            <div className="lg:col-span-5 bg-white/10 dark:bg-[#1E0424]/75 backdrop-blur-xl rounded-3xl p-7 sm:p-9 lg:p-10 border border-white/15 dark:border-purple-500/25 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8DC63F] font-bold">
                  THE FOUNDER'S STANDARD
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] font-bold">
                  Core Pillar
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-[#8DC63F] text-[#34073E] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-bold text-white">Luxury Through Positioning</div>
                    <div className="text-sm text-purple-200/90 leading-relaxed">
                      Placing investments where tomorrow's economic expansion and infrastructural wealth are being created.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-[#8DC63F] text-[#34073E] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-bold text-white">Creating Legacies & Securing Land</div>
                    <div className="text-sm text-purple-200/90 leading-relaxed">
                      Land is not merely property; it is the ultimate financial legacy for your family and heirs.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-[#8DC63F] text-[#34073E] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-bold text-white">Protecting What You Love</div>
                    <div className="text-sm text-purple-200/90 leading-relaxed">
                      Eliminating fraud, family disputes, and exploitation through rigorous title verification.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenFullStory}
                  className="w-full py-3.5 px-5 rounded-2xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold font-mono transition-all text-center flex items-center justify-center gap-2 cursor-pointer border border-white/20 hover:border-white/40 shadow-sm group"
                >
                  <span>Explore The Full Narrative</span>
                  <ArrowRight className="w-4 h-4 text-[#8DC63F] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Stage Interactive Milestones Timeline */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-[#7A2FB0] dark:text-[#B462E8] font-bold tracking-widest">
              THE 4 FORMATIVE MILESTONES
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white">
              How Hardship Was Forged Into Mastery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div 
                key={m.step}
                className="bg-white dark:bg-[#34073E] p-6 sm:p-7 rounded-[2rem] border border-purple-200/80 dark:border-purple-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-[#7A2FB0] dark:text-[#8DC63F] font-mono text-xs font-bold">
                      {m.year}
                    </span>
                    <span className="text-xs font-mono text-gray-400 dark:text-purple-400 font-bold">
                      STEP {m.step}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-heading text-[#171717] dark:text-white group-hover:text-[#7A2FB0] dark:group-hover:text-[#8DC63F] transition-colors leading-snug">
                    {m.title}
                  </h4>

                  <div className="text-sm font-mono font-semibold text-[#8DC63F] dark:text-[#8DC63F]">
                    {m.subtitle}
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-100 dark:border-purple-800/50 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-gray-400 dark:text-purple-400">
                    Formative Phase {idx + 1}
                  </span>
                  <button
                    onClick={onOpenFullStory}
                    className="text-[#7A2FB0] dark:text-[#8DC63F] font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Founder's Philosophy Banner */}
        <div className="bg-purple-50/70 dark:bg-[#2A0631] rounded-[2rem] p-8 sm:p-10 border border-purple-200/90 dark:border-purple-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7A2FB0] dark:text-[#8DC63F] font-bold uppercase tracking-wider">
              <Quote className="w-4 h-4 fill-current" />
              <span>THE PHILOSOPHY THAT BUILT ME</span>
            </div>
            
            <p className="text-xl sm:text-2xl font-heading font-bold text-[#171717] dark:text-white leading-snug">
              "Nothing is truly bad — if you have the mindset to learn from it. Every setback was not an obstacle; it was alignment with purpose, calling, and who I am."
            </p>

            <p className="text-sm sm:text-base text-[#52525B] dark:text-purple-200 font-medium">
              — Christian Ezeani, MD Ezeani Properties Ltd & CEO Ezeani Group
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenFullStory}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#34073E] dark:bg-[#B462E8] text-white dark:text-[#1E0424] text-xs font-bold transition-all shadow-sm text-center cursor-pointer hover:opacity-90"
            >
              Read Unabridged Story
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
