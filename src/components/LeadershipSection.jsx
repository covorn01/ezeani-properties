import React from 'react';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Camera, 
  User, 
  CheckCircle2, 
  Sparkles,
  Briefcase,
  Compass,
  FileCheck
} from 'lucide-react';
import { LEADERSHIP_MEMBERS } from '../data/leadershipData';

/**
 * Reusable Profile Card Picture Frame
 * Displays photo if available, or a clean, styled empty placeholder frame
 * where executive headshots can be dropped in later.
 */
function ProfilePictureFrame({ image, name, initials, badge, role }) {
  if (image) {
    return (
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 group-hover:border-[#8DC63F] transition-all duration-300 shadow-sm">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-[#2A0631] dark:via-[#24052B] dark:to-[#1E0424] border-2 border-dashed border-gray-300 dark:border-purple-800/80 group-hover:border-[#8DC63F] dark:group-hover:border-[#8DC63F] transition-all duration-300 flex flex-col items-center justify-center p-6 text-center select-none shadow-inner">
      {/* Background Monogram Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07] dark:opacity-[0.12]">
        <span className="font-heading font-black text-7xl sm:text-8xl tracking-tighter text-[#34073E] dark:text-[#B462E8]">
          {initials || "EP"}
        </span>
      </div>

      {/* Center Avatar Placeholder Icon */}
      <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-[#34073E] shadow-md border border-gray-200 dark:border-purple-700/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 mb-3">
        <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 dark:text-purple-300/70" />
      </div>

      {/* Frame Label */}
      <div className="relative z-10 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#34073E]/90 border border-gray-200 dark:border-purple-800 text-[10px] font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] shadow-xs">
          <Camera className="w-3 h-3 text-[#8DC63F]" />
          <span>Executive Photo Frame</span>
        </div>
        <p className="text-[10px] text-gray-400 dark:text-purple-400 font-sans">
          Placeholder • Ready for headshot
        </p>
      </div>

      {/* Corner Badge */}
      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#34073E]/80 dark:bg-[#8DC63F]/20 text-[#8DC63F] dark:text-[#8DC63F] text-[9px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs">
        {badge || "Executive"}
      </div>
    </div>
  );
}

/**
 * LeadershipSection
 * @param {'full' | 'preview'} variant - 'full' for dedicated About section, 'preview' for condensed Home page
 * @param {Array} members - Array of leadership objects (optional override)
 * @param {Function} onOpenBooking - Callback for consultation action
 * @param {Function} onViewAll - Callback when user clicks "View Full Team" in preview mode
 */
export default function LeadershipSection({ 
  variant = 'full', 
  members,
  onOpenBooking,
  onViewAll,
  companyInfo
}) {
  const team = members || companyInfo?.leadership || LEADERSHIP_MEMBERS;
  const isPreview = variant === 'preview';
  const displayTeam = isPreview ? team.slice(0, 3) : team;

  return (
    <section 
      id={isPreview ? "leadership-preview" : "leadership"} 
      className={`relative ${
        isPreview 
          ? "py-16 sm:py-20 bg-white dark:bg-[#1E0424] border-t border-purple-200/50 dark:border-purple-900/40" 
          : "pt-8 pb-12"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono uppercase tracking-widest font-bold">
              <Users className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span>{isPreview ? "Executive Team Preview" : "Executive Leadership & Management"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
              {isPreview 
                ? "Meet Our Executive Leadership" 
                : "Guided by Certified Surveyors & Property Leaders"}
            </h2>

            <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans">
              {isPreview 
                ? "Direct executive oversight across certified cadastral mapping, luxury property acquisitions, and transparent title handovers nationwide."
                : "Our multidisciplinary leadership combines seasoned cadastral surveyors, legal title perfection experts, and commercial real estate advisors dedicated to client success."}
            </p>
          </div>

          {/* Action button in Preview Mode */}
          {isPreview && onViewAll && (
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/60 dark:hover:bg-purple-900 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-bold transition-all shrink-0 cursor-pointer"
            >
              <span>View Full Leadership Team</span>
              <ArrowRight className="w-4 h-4 text-[#8DC63F]" />
            </button>
          )}
        </div>

        {/* Team Grid */}
        <div className={`grid grid-cols-1 ${
          isPreview 
            ? "md:grid-cols-3 gap-6 lg:gap-8" 
            : "md:grid-cols-2 lg:grid-cols-4 gap-6"
        }`}>
          {displayTeam.map((leader, idx) => (
            <div
              key={leader.id || leader.name + idx}
              className="bg-white dark:bg-[#34073E] rounded-[2rem] border border-purple-200/80 dark:border-purple-800 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-5 hover:-translate-y-1"
            >
              {/* Picture Frame Block */}
              <div className="space-y-4">
                <ProfilePictureFrame 
                  image={leader.image}
                  name={leader.name}
                  initials={leader.initials || leader.name.split(' ').filter(n => !n.startsWith('(') && !n.startsWith('Surv.') && !n.startsWith('Barr.') && !n.startsWith('Mrs.')).map(n => n[0]).join('').slice(0, 2)}
                  badge={leader.badge}
                  role={leader.role}
                />

                {/* Role Pill & Credentials */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#34073E] text-[#8DC63F] dark:bg-[#8DC63F] dark:text-[#34073E] text-[10px] font-mono font-bold uppercase tracking-wider">
                      {leader.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#7A2FB0] dark:text-purple-300 font-semibold truncate max-w-[140px]">
                      {leader.role}
                    </span>
                  </div>

                  {/* Name & Credentials */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#171717] dark:text-white group-hover:text-[#7A2FB0] dark:group-hover:text-[#8DC63F] transition-colors leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-[11px] font-mono font-bold text-[#8DC63F] dark:text-[#8DC63F] mt-1 leading-snug">
                      {leader.credentials}
                    </p>
                  </div>

                  {/* Short Bio */}
                  <p className={`text-xs text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans ${
                    isPreview ? "line-clamp-3" : ""
                  }`}>
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="pt-3 border-t border-purple-100 dark:border-purple-800/50 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-[#52525B] dark:text-purple-300 font-medium">
                  NIS & SURCON Certified
                </span>
                
                {onOpenBooking ? (
                  <button
                    onClick={() => onOpenBooking({ 
                      category: 'Consultation', 
                      notes: `Request direct consultation with ${leader.name} (${leader.role})` 
                    })}
                    className="inline-flex items-center gap-1 font-bold text-[#7A2FB0] dark:text-[#8DC63F] hover:underline cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-[10px] font-mono text-[#8DC63F] font-bold">
                    Ezeani Leader
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner for Full View */}
        {!isPreview && (
          <div className="bg-purple-50 dark:bg-purple-950/40 rounded-2xl p-4 sm:p-5 border border-purple-200 dark:border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2.5 text-[#34073E] dark:text-purple-200">
              <ShieldCheck className="w-5 h-5 text-[#8DC63F] shrink-0" />
              <span>All corporate real estate acquisitions and surveys are vetted by registered SURCON surveyors and Nigerian Bar legal counsel.</span>
            </div>

            {onOpenBooking && (
              <button
                onClick={() => onOpenBooking({ category: 'Executive Consultation', notes: 'Consultation with Ezeani Leadership Team' })}
                className="px-4 py-2 rounded-xl bg-[#8DC63F] text-[#34073E] font-bold hover:bg-[#9ECF52] transition-colors shrink-0 cursor-pointer shadow-xs"
              >
                Book Leadership Consultation
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
