import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Wrench, 
  Users, 
  Activity, 
  BarChart3, 
  FileText, 
  PhoneCall, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  Clock, 
  Lock, 
  Eye, 
  Layers,
  Smartphone,
  Check
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';

export default function PropertyManagementSection({ onOpenBooking, companyInfo = EZEANI_COMPANY_INFO }) {
  const [activeTab, setActiveTab] = useState('in-person'); // 'in-person' | 'dashboard' | 'capacities'
  const [ownerForm, setOwnerForm] = useState({
    name: '',
    phone: '',
    propertyType: 'Residential Mansion/Villa',
    stateLocation: 'Lagos',
    unitsCount: '1-4 Units',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ownerForm.name || !ownerForm.phone) return;
    
    if (onOpenBooking) {
      onOpenBooking({
        clientName: ownerForm.name,
        clientPhone: ownerForm.phone,
        propertyTitle: `${ownerForm.propertyType} (${ownerForm.stateLocation})`,
        serviceCategory: 'Property Management',
        notes: `Property Management Inquiry: ${ownerForm.unitsCount} in ${ownerForm.stateLocation}. Note: ${ownerForm.message}`
      });
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="property-management" className="py-20 lg:py-28 bg-[#FAF7FC] dark:bg-[#16021B] text-[#171717] dark:text-purple-100 transition-colors duration-300 relative overflow-hidden border-t border-b border-purple-200/60 dark:border-purple-900/50">
      
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* 1. Header & Showcase Grid: Text + Buttons on Left, Fitting Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-purple-200/80 dark:border-purple-800/60 pb-12">
          
          {/* Left Column: Heading, Paragraph & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono font-bold uppercase tracking-widest border border-purple-200/80 dark:border-purple-800/60">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DC63F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8DC63F]"></span>
                </span>
                <span>COMPLETE STEWARDSHIP • OFFICIAL OWNER MANDATE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#34073E] dark:text-white tracking-tight leading-[1.15]">
                We Manage, Maintain & Protect Your Properties In Any Official Capacity.
              </h2>

              <p className="text-base sm:text-lg text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
                Whether you are an individual landlord, diaspora owner, or corporate asset investor, Ezeani Properties provides comprehensive, end-to-end stewardship. We pair <strong className="text-[#34073E] dark:text-white">rigorous in-person on-ground management</strong> with a <strong className="text-[#7A2FB0] dark:text-[#8DC63F]">digital telemetry dashboard</strong> that monitors, records, and reports your property’s performance in real time.
              </p>
            </div>

            {/* Action Buttons Row at the bottom of the text */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${(companyInfo?.whatsapp || EZEANI_COMPANY_INFO.whatsapp).replace(/[^0-9]/g, '')}?text=Hello%20Ezeani%20Properties,%20I%20am%20a%20property%20owner%20and%20I%20would%20like%20to%20discuss%20managing%20my%20property%20in%20an%20official%20capacity.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Management Desk</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onOpenBooking) {
                    onOpenBooking({
                      serviceCategory: 'Property Management',
                      notes: 'Property Owner Management Consultation'
                    });
                  }
                }}
                className="px-6 py-3.5 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#B462E8] dark:hover:bg-[#c27af0] text-white dark:text-[#1E0424] text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Owner Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Fitting Visual Asset Filling the Right Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-200/90 dark:border-purple-800/80 group bg-[#1E0424]">
              <img
                src="/images/property-management.jpg"
                alt="Ezeani Properties On-Site Facility Management and Digital Dashboard"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424]/90 via-[#1E0424]/30 to-transparent pointer-events-none" />
              
              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#8DC63F] text-[#1E0424] text-xs font-mono font-bold uppercase tracking-wider shadow-md">
                  Dual-Pillar Management
                </span>
                <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-purple-200 text-xs font-mono border border-white/15">
                  Official Mandate
                </span>
              </div>

              {/* Floating Bottom Card / Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#1E0424]/85 backdrop-blur-md border border-purple-800/80 text-white space-y-1">
                <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8DC63F]" />
                  <span>Physical Care + Live Telemetry</span>
                </div>
                <p className="text-xs text-purple-200 leading-snug">
                  On-site inspections, routine facility fixes, and 24/7 digital records accessible to property owners worldwide.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Interactive Metric Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-[#34073E] via-[#24032C] to-[#1E0424] text-white border border-purple-800/80 shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-purple-800/60 p-6 sm:p-8">
            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#8DC63F]">98.7%</div>
              <div className="text-xs sm:text-sm font-bold text-white">Occupancy & Yield Retention</div>
              <p className="text-[11px] text-purple-300">Vetted high-quality tenants with zero payment defaults</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-200">24/7</div>
              <div className="text-xs sm:text-sm font-bold text-white">Rapid Maintenance Response</div>
              <p className="text-[11px] text-purple-300">Certified technicians on standby for instant physical fixes</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#8DC63F]">100%</div>
              <div className="text-xs sm:text-sm font-bold text-white">Digital Audit & Video Logs</div>
              <p className="text-[11px] text-purple-300">Timestamped HD photos and reports accessible on dashboard</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-200">Legal</div>
              <div className="text-xs sm:text-sm font-bold text-white">Official Power of Attorney</div>
              <p className="text-[11px] text-purple-300">Full legal representation in tenancy, tax & municipal matters</p>
            </div>
          </div>
        </div>

        {/* COMMENTED OUT FOR NOW - TWO PILLARS DETAIL (In-Person Physical Operations vs. Digital Dashboard Monitoring):
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          Pillar 1: In-Person Physical Maintenance & On-Ground Operations
          <div className="bg-white dark:bg-[#1E0424] rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-100/90 dark:border-purple-800/80 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] flex items-center justify-center shadow-xs">
                  <Wrench className="w-6 h-6 text-[#8DC63F]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-[#7A2FB0] dark:text-[#B462E8] text-[11px] font-mono font-bold uppercase">
                  Pillar 01 • Physical Care
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                  In-Person Physical Management & Maintenance
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
                  We don't manage from afar. Our on-ground property managers conduct regular physical visits, manage contractors, and keep your asset in pristine condition.
                </p>
              </div>

              Service Features Checklist
              <div className="space-y-3.5 pt-2">
                {[
                  {
                    title: "Regular Physical Walkthroughs & Inspections",
                    desc: "Scheduled on-site evaluations of structural integrity, plumbing, electrical systems, and roofs with photographic proof."
                  },
                  {
                    title: "Preventive & Emergency Facility Maintenance",
                    desc: "Vetted tradesmen handling generator maintenance, water treatment, borehole servicing, painting, and air-conditioning."
                  },
                  {
                    title: "Strict Tenant Vetting & Relationship Management",
                    desc: "Background verification, credit assessment, formal tenancy agreement drafting, and polite conflict resolution."
                  },
                  {
                    title: "Perimeter Security & Vacant Asset Protection",
                    desc: "Regular perimeter audits, beacon boundary preservation, guard oversight, and preventing unauthorized encroachment."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7FC] dark:bg-purple-950/40 border border-purple-100/80 dark:border-purple-800/60">
                    <div className="w-5 h-5 rounded-full bg-[#8DC63F] text-[#1E0424] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold text-[#171717] dark:text-white">{item.title}</div>
                      <div className="text-xs text-[#71717A] dark:text-purple-300 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-[#8DC63F] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>On-site staff deployed across Lagos, Abuja, Delta, Anambra & East</span>
              </span>
            </div>
          </div>

          Pillar 2: Digital Telemetry, Monitoring & Owner Dashboard Ledger
          <div className="bg-white dark:bg-[#1E0424] rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-100/90 dark:border-purple-800/80 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#34073E] text-[#8DC63F] flex items-center justify-center shadow-xs">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] text-[11px] font-mono font-bold uppercase">
                  Pillar 02 • Digital Telemetry
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                  Digital Telemetry, Monitoring & Owner Dashboard
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
                  Enjoy complete transparency from anywhere in the world. Our dashboard logs every transaction, tenant record, maintenance invoice, and property health metric.
                </p>
              </div>

              Service Features Checklist
              <div className="space-y-3.5 pt-2">
                {[
                  {
                    title: "Live Landlord Dashboard & Telemetry Logs",
                    desc: "24/7 online access to check active lease terms, rent collection dates, maintenance tickets, and utility payment receipts."
                  },
                  {
                    title: "Automated Financial Ledger & Yield Remittance",
                    desc: "Instant disbursement of rental proceeds to your designated bank accounts with zero deduction discrepancies."
                  },
                  {
                    title: "Photographic & Video Maintenance History",
                    desc: "Every repair or upkeep job is logged with 'Before and After' high-resolution photos and contractor invoices."
                  },
                  {
                    title: "Digital Vault for Titles, Deeds & Contracts",
                    desc: "Encrypted cloud archiving for C of O copies, survey plans, signed tenancy agreements, and municipal receipts."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7FC] dark:bg-purple-950/40 border border-purple-100/80 dark:border-purple-800/60">
                    <div className="w-5 h-5 rounded-full bg-[#34073E] dark:bg-[#B462E8] text-white dark:text-[#1E0424] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold text-[#171717] dark:text-white">{item.title}</div>
                      <div className="text-xs text-[#71717A] dark:text-purple-300 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-[#7A2FB0] dark:text-[#B462E8] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8DC63F]" />
                <span>Accessible on smartphone, tablet, or web browser for diaspora owners</span>
              </span>
            </div>
          </div>

        </div>
        */}

        {/* 4. Official Capacities We Handle & Onboarding Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Official Capacity Mandates Handled (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
                OFFICIAL APPOINTMENTS & MANDATES
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                Operating In Full Official Capacity For:
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] dark:text-purple-200 font-sans">
                We represent owners formally with legal agreements, Power of Attorney when required, and full fiduciary accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Diaspora Property Owners",
                  badge: "Safe Remote Care",
                  desc: "Complete peace of mind for Nigerians living in the UK, US, Canada, Europe, or Asia. We handle tenant vetting, remittances, and maintenance without relying on unqualified relatives."
                },
                {
                  title: "Multi-Unit Residential Estates",
                  badge: "Full Complex Care",
                  desc: "Blocks of luxury flats, terraces, and residential enclaves. We oversee estate security, shared generators, waste management, and service charge budgeting."
                },
                {
                  title: "Commercial & Retail Complexes",
                  badge: "Corporate Facilities",
                  desc: "Shopping plazas, corporate headquarters, and retail parks. High-yield tenant placement, commercial lease administration, and facility preservation."
                },
                {
                  title: "Generational & Family Estates",
                  badge: "Dispute-Free Asset Care",
                  desc: "Official management of family land holdings, inheritance properties, and multi-heir portfolios with neutral, transparent accounting and legal compliance."
                }
              ].map((cap, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-[#1E0424] border border-purple-100 dark:border-purple-800/80 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8]">
                      {cap.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#171717] dark:text-white">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-[#52525B] dark:text-purple-300 leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Certification Note */}
            <div className="p-4 rounded-2xl bg-purple-100/70 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/60 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#8DC63F] shrink-0" />
              <p className="text-xs text-[#34073E] dark:text-purple-200 font-sans leading-relaxed">
                <strong className="font-bold">Fiduciary Security:</strong> All client escrow funds and rental payments are held in segregated, audited commercial bank accounts.
              </p>
            </div>
          </div>

          {/* Right: Property Owner Fast Enrollment / Consultation Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#1E0424] rounded-3xl p-6 sm:p-8 border border-purple-200/90 dark:border-purple-800/80 shadow-xl space-y-5">
            <div className="space-y-1.5 border-b border-purple-100 dark:border-purple-800/60 pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-[#7A2FB0] dark:text-[#B462E8]">
                <Building2 className="w-4 h-4 text-[#8DC63F]" />
                <span>LANDLORD ONBOARDING DESK</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
                Submit Your Property For Management
              </h3>
              <p className="text-xs text-[#71717A] dark:text-purple-300 font-sans">
                Tell us about your property. Our asset team will evaluate it and prepare a customized management proposal.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#8DC63F]/15 border border-[#8DC63F]/50 text-center space-y-2 animate-fade-in">
                <CheckCircle2 className="w-8 h-8 text-[#8DC63F] mx-auto" />
                <h4 className="text-base font-bold text-[#1E0424] dark:text-white">Inquiry Received</h4>
                <p className="text-xs text-[#3F3F46] dark:text-purple-200">
                  Our Asset Management team has received your property details. An executive manager will reach out within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={ownerForm.name}
                    onChange={(e) => setOwnerForm({ ...ownerForm, name: e.target.value })}
                    placeholder="e.g. Chief Emeka Okonkwo"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7FC] dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={ownerForm.phone}
                    onChange={(e) => setOwnerForm({ ...ownerForm, phone: e.target.value })}
                    placeholder="+234 or UK/US number"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7FC] dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                      Property Category
                    </label>
                    <select
                      value={ownerForm.propertyType}
                      onChange={(e) => setOwnerForm({ ...ownerForm, propertyType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7FC] dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white cursor-pointer"
                    >
                      <option>Residential Villa/Mansion</option>
                      <option>Block of Luxury Flats</option>
                      <option>Commercial Plaza/Complex</option>
                      <option>Industrial Warehouse</option>
                      <option>Vacant Land / Layout</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                      State / Location
                    </label>
                    <select
                      value={ownerForm.stateLocation}
                      onChange={(e) => setOwnerForm({ ...ownerForm, stateLocation: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7FC] dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white cursor-pointer"
                    >
                      <option>Lagos State</option>
                      <option>Abuja (FCT)</option>
                      <option>Delta State (Asaba)</option>
                      <option>Anambra State (Awka/Onitsha)</option>
                      <option>Ebonyi State</option>
                      <option>Enugu State</option>
                      <option>Imo State</option>
                      <option>Other Nigerian Location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                    Additional Details / Specific Requests
                  </label>
                  <textarea
                    rows={2}
                    value={ownerForm.message}
                    onChange={(e) => setOwnerForm({ ...ownerForm, message: e.target.value })}
                    placeholder="e.g. 4-bedroom duplex currently vacant in Ikoyi; seeking full in-person management and digital dashboard recording."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7FC] dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#8DC63F] hover:bg-[#7db437] text-[#1E0424] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Submit Property for Evaluation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 text-center text-[11px] text-[#71717A] dark:text-purple-300">
              Zero upfront evaluation fees • Guaranteed privacy & discretion
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
