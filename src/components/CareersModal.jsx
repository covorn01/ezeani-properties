import React, { useState } from 'react';
import { 
  X, 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  Globe,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CAREERS_LIST } from '../data/mockData';

export default function CareersModal({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceYears: '3-5 Years',
    coverLetter: '',
    portfolio: '',
    cvFile: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleOpenForm = (role) => {
    setSelectedRole(role);
    setIsSubmittedSuccess(false);
  };

  const handleBackToList = () => {
    setSelectedRole(null);
    setIsSubmittedSuccess(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cvFile: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmittedSuccess(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setSelectedRole(null);
    setIsSubmittedSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experienceYears: '3-5 Years',
      coverLetter: '',
      portfolio: '',
      cvFile: null
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1E0424]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white dark:bg-[#2A0631] max-w-4xl w-full max-h-[92vh] rounded-[2.25rem] p-6 sm:p-9 lg:p-11 space-y-8 border border-purple-200 dark:border-purple-800 shadow-2xl overflow-y-auto transition-all duration-300">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-800/80 pb-5">
          <div className="flex items-center gap-3.5">
            {selectedRole && !isSubmittedSuccess ? (
              <button
                onClick={handleBackToList}
                className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-900/60 border border-purple-200 dark:border-purple-800 text-[#34073E] dark:text-white flex items-center justify-center font-bold hover:bg-purple-100 transition-colors cursor-pointer"
                title="Back to All Positions"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-11 h-11 rounded-2xl bg-[#34073E] text-[#8DC63F] dark:bg-[#8DC63F] dark:text-[#34073E] flex items-center justify-center font-bold shadow-xs shrink-0">
                <Briefcase className="w-5 h-5 stroke-[2.2]" />
              </div>
            )}

            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                {selectedRole ? `Application: ${selectedRole.title}` : 'Careers at Ezeani Group'}
              </h3>
              <p className="text-xs sm:text-sm text-[#52525B] dark:text-purple-200 mt-0.5">
                {selectedRole 
                  ? `${selectedRole.department} • ${selectedRole.location}` 
                  : 'Join our team of land surveyors, GIS drone specialists & real estate advisors'}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-900/40 text-purple-400 hover:text-purple-700 dark:hover:text-white flex items-center justify-center text-xs font-mono font-bold transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* VIEW 1: SUCCESS CONFIRMATION STATE */}
        {isSubmittedSuccess ? (
          <div className="py-12 px-6 sm:px-10 text-center space-y-6 bg-[#F4FAEA] dark:bg-[#1E0424] rounded-[2rem] border border-[#8DC63F]/60">
            <div className="w-20 h-20 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                Application & CV Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#171717] dark:text-white">{formData.fullName || 'Candidate'}</span>. Your resume and credentials for the position of <span className="font-bold text-[#7A2FB0] dark:text-[#B462E8]">{selectedRole?.title}</span> have been delivered to our recruitment team.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-[#2A0631] rounded-2xl border border-purple-100 dark:border-purple-800 text-xs text-[#52525B] dark:text-purple-200 max-w-md mx-auto font-mono">
              Confirmation sent to: <span className="font-bold text-[#171717] dark:text-white">{formData.email || 'your email'}</span>.
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleBackToList}
                className="px-6 py-3 bg-white dark:bg-[#2A0631] border border-purple-200 dark:border-purple-800 text-[#171717] dark:text-white rounded-xl text-xs font-bold hover:bg-purple-50 transition-colors"
              >
                View Other Positions
              </button>
              <button
                onClick={handleResetAndClose}
                className="px-7 py-3 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] rounded-xl text-xs font-bold transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : selectedRole ? (
          /* VIEW 2: SPLIT-LAYOUT CAREER APPLICATION FORM (Matching Join-Us Inspo) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Brand & Culture Context Panel (5 Cols on LG) */}
            <div className="lg:col-span-5 bg-[#34073E] text-white dark:bg-[#1E0424] p-7 sm:p-9 rounded-[1.75rem] border border-purple-900 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E0424] text-[#8DC63F] text-[10px] font-mono font-bold uppercase tracking-wider border border-purple-900">
                  <Sparkles className="w-3 h-3 text-[#8DC63F]" />
                  <span>Join Our Professional Team</span>
                </div>

                <h4 className="text-2xl font-bold font-heading text-white tracking-tight leading-snug">
                  Build Your Career Shaping Property Standards
                </h4>

                <p className="text-xs text-purple-200 leading-relaxed">
                  At Ezeani Group, we combine RTK GPS field engineering, LiDAR drone photogrammetry, and title search diligence to safeguard real estate investments across Nigeria.
                </p>

                <div className="space-y-3 pt-2 border-t border-purple-900">
                  <div className="text-[10px] font-mono uppercase text-[#8DC63F] font-bold tracking-wider">
                    Why Engineers & Professionals Join Us:
                  </div>
                  <div className="space-y-2 text-xs text-purple-100">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <span>RTK GPS & 3D LiDAR Drone Stack</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <span>State Surveyor-General Lodgement Practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <span>Competitive Salaries & Development</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contained Graphic Line Art Accent */}
              <div className="p-3 bg-[#1E0424] rounded-xl border border-purple-900/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#34073E] text-[#8DC63F] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-purple-200 font-mono">
                  <div className="font-bold text-white">Certified Expertise</div>
                  <div>Verified Titles & Honest Advice</div>
                </div>
              </div>
            </div>

            {/* Right Application Form (7 Cols on LG) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
              
              {/* Position Header Banner */}
              <div className="p-4 bg-[#FAF7FC] dark:bg-[#1E0424] rounded-2xl border border-purple-100 dark:border-purple-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#7A2FB0] dark:text-[#B462E8]">
                    Applying For Position:
                  </span>
                  <div className="text-sm font-bold text-[#171717] dark:text-white">{selectedRole.title}</div>
                </div>

                <button
                  type="button"
                  onClick={handleBackToList}
                  className="text-xs font-mono text-[#7A2FB0] dark:text-[#B462E8] hover:underline font-bold"
                >
                  Change Role
                </button>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase text-[#52525B] dark:text-purple-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Engr. Chidi Ezeani"
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-2xl text-xs text-[#171717] dark:text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase text-[#52525B] dark:text-purple-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. candidate@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-2xl text-xs text-[#171717] dark:text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase text-[#52525B] dark:text-purple-300">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 801 234 5678"
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-2xl text-xs text-[#171717] dark:text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
                    />
                  </div>
                </div>

                {/* Relevant Experience */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase text-[#52525B] dark:text-purple-300">
                    Experience Level
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full py-3 px-3.5 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-2xl text-xs text-[#171717] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8DC63F] cursor-pointer"
                  >
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5-8 Years">5 - 8 Years</option>
                    <option value="8+ Years">8+ Years (Senior / Lead)</option>
                  </select>
                </div>

              </div>

              {/* CV Upload Component */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-[#52525B] dark:text-purple-300">
                  Upload Curriculum Vitae (CV) / Resume *
                </label>
                
                <div className="border-2 border-dashed border-purple-200 dark:border-purple-800 hover:border-purple-400 bg-[#FAF7FC] dark:bg-[#1E0424] rounded-2xl p-5 text-center space-y-2 transition-colors relative cursor-pointer">
                  <input
                    type="file"
                    required={!formData.cvFile}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 text-[#7A2FB0] dark:text-[#B462E8] flex items-center justify-center mx-auto">
                    <Upload className="w-5 h-5" />
                  </div>

                  {formData.cvFile ? (
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#8DC63F] flex items-center justify-center gap-1.5">
                        <FileText className="w-4 h-4" />
                        <span>{formData.cvFile.name}</span>
                      </div>
                      <div className="text-[10px] font-mono text-[#52525B] dark:text-purple-300">
                        {(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB • Click to replace file
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-[#171717] dark:text-white">
                        Click to upload your CV (PDF, DOC, DOCX)
                      </div>
                      <div className="text-[10px] text-[#52525B] dark:text-purple-300 font-mono">
                        Maximum file size: 10MB
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Portfolio Link */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-[#52525B] dark:text-purple-300">
                  Portfolio or LinkedIn Profile (Optional)
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/yourprofile or portfolio URL"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-2xl text-xs text-[#171717] dark:text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
                  />
                </div>
              </div>

              {/* Cover Statement */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-[#52525B] dark:text-purple-300">
                  Cover Statement & Qualifications
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Summarize your key achievements, surveying licenses, or technical tools..."
                  className="w-full p-3.5 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-2xl text-xs text-[#171717] dark:text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-purple-100 dark:border-purple-800">
                <button
                  type="button"
                  onClick={handleBackToList}
                  className="px-5 py-3 bg-white dark:bg-[#2A0631] border border-purple-200 dark:border-purple-800 text-[#171717] dark:text-white rounded-xl text-xs font-bold hover:bg-purple-50 transition-colors"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application & CV</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* VIEW 3: JOB OPENINGS LIST (Spacious Editorial Bento Layout) */
          <div className="space-y-6">
            {CAREERS_LIST.map((role) => (
              <div
                key={role.id}
                className="bg-[#F8F5FA] dark:bg-[#1E0424] rounded-[1.75rem] p-6 sm:p-7 border border-purple-100/90 dark:border-purple-900/60 space-y-5 transition-all hover:border-purple-200 dark:hover:border-purple-800 shadow-xs"
              >
                {/* Header & Tags Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8] bg-purple-100/80 dark:bg-purple-950 px-2.5 py-1 rounded-md inline-block">
                      {role.department}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                      {role.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/40 text-[#52525B] dark:text-purple-300 border border-purple-100 dark:border-purple-800 text-xs font-mono font-semibold">
                      {role.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/40 text-[#52525B] dark:text-purple-300 border border-purple-100 dark:border-purple-800 text-xs font-mono font-semibold">
                      {role.experience}
                    </span>
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans">
                  {role.desc}
                </p>

                {/* Divider + Location + Action */}
                <div className="flex items-center justify-between pt-4 border-t border-purple-200/60 dark:border-purple-800/60">
                  <div className="flex items-center gap-2 text-xs text-[#52525B] dark:text-purple-300 font-medium font-mono">
                    <MapPin className="w-4 h-4 text-[#8DC63F] shrink-0" />
                    <span>{role.location}</span>
                  </div>

                  <button
                    onClick={() => handleOpenForm(role)}
                    className="px-6 py-2.5 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 active:scale-98 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-end pt-3 border-t border-purple-100 dark:border-purple-800">
              <button
                onClick={onClose}
                className="px-7 py-3 bg-[#34073E] dark:bg-[#B462E8] text-white dark:text-[#1E0424] rounded-xl text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
