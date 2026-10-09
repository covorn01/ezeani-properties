import React, { useState } from 'react';
import { 
  Compass, 
  Map, 
  ShieldCheck, 
  Layers, 
  Ruler, 
  Check, 
  ArrowRight, 
  Calendar, 
  FileText, 
  Clock, 
  DollarSign, 
  Sparkles,
  Info,
  ChevronDown
} from 'lucide-react';
import { SURVEY_SERVICES } from '../data/mockData';

export default function SurveyServices({ onOpenBooking, companyInfo }) {
  // Survey Cost Estimator State
  const [landAcres, setLandAcres] = useState(2.5);
  const [selectedServiceId, setSelectedServiceId] = useState('boundary');
  const [terrain, setTerrain] = useState('flat'); // 'flat' | 'hilly' | 'dense'
  const [showDeliverablesModal, setShowDeliverablesModal] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  // Calculation Logic
  const serviceBasePrices = {
    boundary: 1200,
    topo: 1800,
    'title-search': 600,
    'drone-gis': 1500,
    staking: 1400
  };

  const terrainMultipliers = {
    flat: 1.0,
    hilly: 1.25,
    dense: 1.5
  };

  const basePrice = serviceBasePrices[selectedServiceId] || 1200;
  const acreFactor = Math.max(1, Math.sqrt(landAcres));
  const estimatedCost = Math.round(basePrice * acreFactor * terrainMultipliers[terrain]);
  const minCost = Math.round(estimatedCost * 0.9);
  const maxCost = Math.round(estimatedCost * 1.15);

  const selectedServiceObj = SURVEY_SERVICES.find((s) => s.id === selectedServiceId) || SURVEY_SERVICES[0];
  const boundarySrv = SURVEY_SERVICES.find((s) => s.id === 'boundary') || SURVEY_SERVICES[0];
  const titleSrv = SURVEY_SERVICES.find((s) => s.id === 'title-search') || SURVEY_SERVICES[2];
  const topoSrv = SURVEY_SERVICES.find((s) => s.id === 'topo') || SURVEY_SERVICES[1];
  const droneSrv = SURVEY_SERVICES.find((s) => s.id === 'drone-gis') || SURVEY_SERVICES[3];

  return (
    <section id="surveying" className="py-24 bg-[#FAF7FC] dark:bg-[#1E0424] border-b border-purple-200/50 dark:border-purple-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono uppercase tracking-widest font-bold mb-3">
              <Compass className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span>{companyInfo?.surveyBadge || "Geospatial & Land Verification"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
              {companyInfo?.surveyTitle || "Land Surveying & Title Clearance Services"}
            </h2>
            <p className="text-sm sm:text-base text-[#3F3F46] dark:text-purple-200 mt-3 max-w-2xl leading-relaxed">
              {companyInfo?.surveySubtitle || "Eliminate boundary disputes and title risks with RTK GPS total stations, 3D LiDAR drone mapping, and official registry title search verification."}
            </p>
          </div>

          <button
            onClick={() => setShowDeliverablesModal(true)}
            className="flex items-center gap-2 bg-white dark:bg-[#34073E] border border-purple-200 dark:border-purple-800 px-5 py-3 rounded-2xl text-xs font-bold text-[#171717] dark:text-white hover:bg-purple-50 dark:hover:bg-purple-900/60 transition-all shadow-xs shrink-0 active:scale-98"
          >
            <FileText className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
            <span>Sample Deliverables Preview</span>
          </button>
        </div>

        {/* RESPONSIVE ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-20">
          
          {/* 1. FEATURED LARGE BENTO CARD: Boundary & Cadastral Survey (7 Cols on Desktop) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#2A0631] text-[#171717] dark:text-white rounded-[2.25rem] p-8 sm:p-10 lg:p-11 border-2 border-purple-200 dark:border-purple-800/80 shadow-xl relative flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:border-[#7A2FB0]/40">
            
            <div className="space-y-6">
              {/* Header Badge & Turnaround */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#34073E] text-white dark:bg-[#8DC63F] dark:text-[#34073E] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                  ★ Featured Geospatial Service
                </span>
                <span className="text-xs font-mono text-[#7A2FB0] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/50 px-3.5 py-1.5 rounded-full border border-purple-200 dark:border-purple-800 font-semibold">
                  {boundarySrv.estimatedDays}
                </span>
              </div>

              {/* Main Content & Contained Technical Illustration Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                    {boundarySrv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A2FB0] dark:text-[#8DC63F] font-mono font-semibold">
                    {boundarySrv.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans pt-1">
                    {boundarySrv.description}
                  </p>
                </div>

                {/* Card 1 Illustration Placement: Dedicated Side Visual Surface (Contained) */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-full h-44 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-100 dark:border-purple-900/60 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-colors">
                    <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-36">
                      <rect x="15" y="15" width="130" height="110" rx="14" fill="#FFFFFF" fillOpacity="0.8" dark:fill="#2A0631" stroke="#CDBAD6" strokeWidth="1.5" strokeDasharray="4 4"/>
                      <polygon points="35,95 60,35 125,50 110,105" fill="#8DC63F" fillOpacity="0.18" stroke="#8DC63F" strokeWidth="2.5"/>
                      <line x1="35" y1="95" x2="125" y2="50" stroke="#7A2FB0" strokeWidth="1" strokeDasharray="2 2" opacity="0.6"/>
                      <circle cx="35" cy="95" r="5" fill="#8DC63F" stroke="#34073E" strokeWidth="2"/>
                      <circle cx="60" cy="35" r="5" fill="#8DC63F" stroke="#34073E" strokeWidth="2"/>
                      <circle cx="125" cy="50" r="5" fill="#8DC63F" stroke="#34073E" strokeWidth="2"/>
                      <circle cx="110" cy="105" r="5" fill="#8DC63F" stroke="#34073E" strokeWidth="2"/>
                      <g transform="translate(100, 15)">
                        <rect x="0" y="0" width="42" height="20" rx="10" fill="#34073E" stroke="#8DC63F" strokeWidth="1"/>
                        <text x="21" y="13" fill="#8DC63F" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RTK ±2mm</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables Grid & CTA */}
            <div className="space-y-6 pt-6 border-t border-purple-100 dark:border-purple-800/80 mt-8">
              <div>
                <div className="text-[10px] uppercase font-mono text-[#7A2FB0] dark:text-[#8DC63F] font-bold tracking-widest mb-3">
                  Key Cadastral Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {boundarySrv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#171717] dark:text-purple-100 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#8DC63F]/25 text-[#34073E] dark:text-[#8DC63F] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-[#52525B] dark:text-purple-300 font-mono">
                  RTK GPS ±2mm Precision Lodged with Surveyor-General
                </div>
                <button
                  onClick={() => onOpenBooking({ 
                    category: 'Land Surveying',
                    notes: `Inquiring about ${boundarySrv.title}`
                  })}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] px-6 py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md active:scale-98"
                >
                  <span>Book This Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* 2. MEDIUM BENTO CARD: Land Title Verification & Registry Search (5 Cols on Desktop) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#2A0631] text-[#171717] dark:text-white rounded-[2.25rem] p-8 sm:p-10 lg:p-11 border border-purple-200 dark:border-purple-800/80 shadow-xl relative flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:border-[#7A2FB0]/40">
            
            <div className="space-y-6">
              {/* Header Badge & Turnaround */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono font-bold uppercase tracking-wider">
                  Title Due Diligence
                </span>
                <span className="text-xs font-mono text-[#52525B] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/50 px-3 py-1.5 rounded-full font-semibold border border-purple-100 dark:border-purple-800">
                  {titleSrv.estimatedDays}
                </span>
              </div>

              {/* Title & Upper-Right Contained Illustration Box */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                    {titleSrv.title}
                  </h3>
                  <p className="text-xs text-[#7A2FB0] dark:text-[#B462E8] font-mono font-semibold">
                    {titleSrv.tagline}
                  </p>
                </div>

                {/* Card 2 Illustration Placement: Upper-Right Contained Deed Panel */}
                <div className="w-24 h-24 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-100 dark:border-purple-900/60 rounded-2xl p-2 flex items-center justify-center shrink-0 group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-colors">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="18" y="22" width="64" height="68" rx="8" fill="#FFFFFF" stroke="#CDBAD6" strokeWidth="1.5"/>
                    <rect x="24" y="14" width="64" height="68" rx="8" fill="#FFFFFF" stroke="#7A2FB0" strokeWidth="1.5"/>
                    <line x1="34" y1="28" x2="74" y2="28" stroke="#34073E" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="34" y1="38" x2="68" y2="38" stroke="#7A2FB0" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="34" y1="46" x2="70" y2="46" stroke="#CDBAD6" strokeWidth="1.5" strokeLinecap="round"/>
                    <g transform="translate(56, 50)">
                      <circle cx="16" cy="16" r="14" fill="#8DC63F" stroke="#34073E" strokeWidth="1.5"/>
                      <path d="M11 16L14.5 19.5L21 13" stroke="#34073E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans">
                {titleSrv.description}
              </p>
            </div>

            {/* Deliverables & CTA */}
            <div className="space-y-6 pt-6 border-t border-purple-100 dark:border-purple-800/80 mt-8">
              <div className="space-y-2.5">
                <div className="text-[10px] uppercase font-mono text-[#52525B] dark:text-purple-300 font-bold tracking-wider">
                  Verification Scope:
                </div>
                {titleSrv.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#171717] dark:text-purple-100 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#8DC63F] shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenBooking({ 
                  category: 'Land Surveying',
                  notes: `Inquiring about ${titleSrv.title}`
                })}
                className="w-full flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <span>Request Title Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* 3. MEDIUM BENTO CARD: Topographical & 3D Contour Mapping (6 Cols on Desktop) */}
          <div className="lg:col-span-6 bg-white dark:bg-[#2A0631] text-[#171717] dark:text-white rounded-[2.25rem] p-8 sm:p-10 lg:p-11 border border-purple-200 dark:border-purple-800/80 shadow-xl relative flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:border-[#7A2FB0]/40">
            
            <div className="space-y-6">
              {/* Header Badge & Turnaround */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono font-bold uppercase tracking-wider">
                  Terrain & Slope Analysis
                </span>
                <span className="text-xs font-mono text-[#52525B] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/50 px-3 py-1.5 rounded-full font-semibold border border-purple-100 dark:border-purple-800">
                  {topoSrv.estimatedDays}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                  {topoSrv.title}
                </h3>
                <p className="text-xs text-[#7A2FB0] dark:text-[#B462E8] font-mono font-semibold">
                  {topoSrv.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans pt-1">
                  {topoSrv.description}
                </p>
              </div>

              {/* Card 3 Illustration Placement: Dedicated Middle Horizontal Banner (Contained) */}
              <div className="w-full h-32 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-100 dark:border-purple-900/60 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-colors">
                <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-24">
                  <path d="M10 80 C 60 50, 120 90, 230 60" stroke="#7A2FB0" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.7"/>
                  <path d="M10 50 C 70 20, 140 75, 230 35" stroke="#8DC63F" strokeWidth="2.5" fill="none"/>
                  <path d="M10 25 C 80 10, 150 40, 230 15" stroke="#B462E8" strokeWidth="1.5" fill="none"/>
                  <g transform="translate(110, 25)">
                    <rect x="0" y="0" width="62" height="24" rx="12" fill="#34073E" stroke="#8DC63F" strokeWidth="1"/>
                    <text x="31" y="15" fill="#8DC63F" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">+18.5m</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Deliverables & CTA */}
            <div className="space-y-6 pt-6 border-t border-purple-100 dark:border-purple-800/80 mt-8">
              <div className="space-y-2.5">
                <div className="text-[10px] uppercase font-mono text-[#52525B] dark:text-purple-300 font-bold tracking-wider">
                  Technical Map Formats:
                </div>
                {topoSrv.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#171717] dark:text-purple-100 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#8DC63F] shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenBooking({ 
                  category: 'Land Surveying',
                  notes: `Inquiring about ${topoSrv.title}`
                })}
                className="w-full flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <span>Book Topographical Mapping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* 4. MEDIUM BENTO CARD: Drone Aerial & GIS Mapping (6 Cols on Desktop) */}
          <div className="lg:col-span-6 bg-white dark:bg-[#2A0631] text-[#171717] dark:text-white rounded-[2.25rem] p-8 sm:p-10 lg:p-11 border border-purple-200 dark:border-purple-800/80 shadow-xl relative flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:border-[#7A2FB0]/40">
            
            <div className="space-y-6">
              {/* Header Badge & Turnaround */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono font-bold uppercase tracking-wider">
                  Aerial Photogrammetry
                </span>
                <span className="text-xs font-mono text-[#52525B] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/50 px-3 py-1.5 rounded-full font-semibold border border-purple-100 dark:border-purple-800">
                  {droneSrv.estimatedDays}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                  {droneSrv.title}
                </h3>
                <p className="text-xs text-[#7A2FB0] dark:text-[#B462E8] font-mono font-semibold">
                  {droneSrv.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed font-sans pt-1">
                  {droneSrv.description}
                </p>
              </div>

              {/* Card 4 Illustration Placement: Lower Contained Radar & Telemetry Box */}
              <div className="w-full h-32 bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-100 dark:border-purple-900/60 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-colors">
                <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-24">
                  <circle cx="120" cy="50" r="40" fill="none" stroke="#7A2FB0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
                  <circle cx="120" cy="50" r="26" fill="none" stroke="#8DC63F" strokeWidth="1.5" opacity="0.7"/>
                  <circle cx="120" cy="50" r="10" fill="#8DC63F" fillOpacity="0.25" stroke="#8DC63F" strokeWidth="2"/>
                  <line x1="120" y1="5" x2="120" y2="95" stroke="#8DC63F" strokeWidth="1.5" strokeDasharray="2 2"/>
                  <line x1="60" y1="50" x2="180" y2="50" stroke="#8DC63F" strokeWidth="1.5" strokeDasharray="2 2"/>
                  <g transform="translate(60, 68)">
                    <rect x="0" y="0" width="120" height="22" rx="6" fill="#34073E" stroke="#B462E8" strokeWidth="1"/>
                    <text x="60" y="14" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle">6.4531° N  3.4344° E</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Deliverables & CTA */}
            <div className="space-y-6 pt-6 border-t border-purple-100 dark:border-purple-800/80 mt-8">
              <div className="space-y-2.5">
                <div className="text-[10px] uppercase font-mono text-[#52525B] dark:text-purple-300 font-bold tracking-wider">
                  GIS Datasets Provided:
                </div>
                {droneSrv.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#171717] dark:text-purple-100 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#8DC63F] shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenBooking({ 
                  category: 'Land Surveying',
                  notes: `Inquiring about ${droneSrv.title}`
                })}
                className="w-full flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <span>Book Drone GIS Mapping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Interactive Survey Cost Estimator Widget (Soft Bento Module) */}
        <div id="calculators" className="rounded-[2.5rem] p-8 sm:p-10 lg:p-12 border border-purple-200/90 dark:border-purple-900 shadow-2xl bg-white dark:bg-[#2A0631] relative overflow-hidden transition-all duration-300">
          <div className="max-w-6xl mx-auto space-y-10">
            
            {/* Header / Title Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-purple-100 dark:border-purple-800/80 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#34073E] text-[#8DC63F] dark:bg-[#8DC63F] dark:text-[#34073E] flex items-center justify-center font-bold shadow-sm shrink-0">
                  <Compass className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                    Interactive Land Survey Estimator
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] dark:text-purple-200 mt-0.5">
                    Instant budgetary range & delivery estimate
                  </p>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2.5 text-xs font-mono text-[#3F5D19] dark:text-[#B2D96E] bg-[#F4FAEA] dark:bg-[#2A3E12] px-4 py-2 rounded-full border border-[#8DC63F]/40 font-semibold shadow-xs shrink-0 self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
                <span>Live Interactive Calculator</span>
              </div>
            </div>

            {/* Main Interactive Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: 3 Dedicated Soft Input Cards (7 Cols on LG) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* 1. SELECT SURVEY SERVICE CARD */}
                <div className="bg-[#F8F5FA] dark:bg-[#1E0424] border border-purple-100/90 dark:border-purple-900/60 rounded-[1.75rem] p-6 sm:p-7 space-y-4 transition-all hover:border-purple-200 dark:hover:border-purple-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52525B] dark:text-purple-300">
                      1. Select Survey Service
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7A2FB0] dark:text-[#B462E8] bg-purple-100/80 dark:bg-purple-950 px-2.5 py-1 rounded-md">
                      STEP 01
                    </span>
                  </div>

                  {/* Custom Floating Popover Dropdown (Matching Inspiration) */}
                  <div className="relative">
                    {/* Backdrop to close popover on outside click */}
                    {isServiceDropdownOpen && (
                      <div 
                        className="fixed inset-0 z-20" 
                        onClick={() => setIsServiceDropdownOpen(false)} 
                      />
                    )}

                    {/* Dropdown Trigger Button with Chevron and Generous Padding */}
                    <button
                      type="button"
                      onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                      className="w-full text-left px-5 py-4 bg-white dark:bg-[#2A0631] border border-purple-200 dark:border-purple-800 rounded-2xl text-xs sm:text-sm font-semibold text-[#171717] dark:text-white flex items-center justify-between cursor-pointer shadow-xs hover:border-purple-300 dark:hover:border-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#8DC63F] relative z-10"
                    >
                      <div className="flex items-center gap-2.5 truncate pr-4">
                        <span className="truncate">{selectedServiceObj.title}</span>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-[#FAF7FC] dark:bg-[#1E0424] flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-900/60 ml-3">
                        <ChevronDown className={`w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8] transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180 text-[#8DC63F]' : ''}`} />
                      </div>
                    </button>

                    {/* Floating Popover Menu Container */}
                    {isServiceDropdownOpen && (
                      <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-[#2A0631] border border-purple-200 dark:border-purple-800 rounded-2xl shadow-2xl p-2.5 space-y-1.5 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                        {SURVEY_SERVICES.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              setSelectedServiceId(s.id);
                              setIsServiceDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                              selectedServiceId === s.id
                                ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] font-bold shadow-xs'
                                : 'hover:bg-[#FAF7FC] dark:hover:bg-[#1E0424] text-[#171717] dark:text-purple-100 font-medium'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <div className="text-xs sm:text-sm font-heading">{s.title}</div>
                              <div className={`text-[10px] font-mono ${selectedServiceId === s.id ? 'opacity-90' : 'text-[#7A2FB0] dark:text-[#B462E8]'}`}>
                                {s.tagline}
                              </div>
                            </div>
                            {selectedServiceId === s.id && (
                              <div className="w-5 h-5 rounded-full bg-[#8DC63F] text-[#34073E] flex items-center justify-center shrink-0 ml-3">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. PARCEL SIZE CARD */}
                <div className="bg-[#F8F5FA] dark:bg-[#1E0424] border border-purple-100/90 dark:border-purple-900/60 rounded-[1.75rem] p-6 sm:p-7 space-y-5 transition-all hover:border-purple-200 dark:hover:border-purple-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52525B] dark:text-purple-300">
                      2. Parcel Size (Acres)
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7A2FB0] dark:text-[#B462E8] bg-purple-100/80 dark:bg-purple-950 px-2.5 py-1 rounded-md">
                      STEP 02
                    </span>
                  </div>

                  {/* Dynamic Parcel Size Display */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2 pt-1">
                    <div className="text-3xl sm:text-4xl font-bold font-heading text-[#34073E] dark:text-white tracking-tight">
                      {landAcres} <span className="text-lg font-mono font-medium text-[#7A2FB0] dark:text-[#B462E8]">Acres</span>
                    </div>
                    <div className="text-xs font-mono font-semibold text-[#7A2FB0] dark:text-[#B462E8] bg-white dark:bg-[#2A0631] px-3.5 py-1.5 rounded-xl border border-purple-100 dark:border-purple-800/80 shadow-xs">
                      ~{(landAcres * 4046.86).toLocaleString(undefined, { maximumFractionDigits: 0 })} sqm
                    </div>
                  </div>

                  {/* Premium Slider */}
                  <div className="space-y-2 pt-2">
                    <input
                      type="range"
                      min="0.25"
                      max="25"
                      step="0.25"
                      value={landAcres}
                      onChange={(e) => setLandAcres(Number(e.target.value))}
                      className="w-full h-2.5 bg-purple-200/80 dark:bg-purple-950 rounded-lg appearance-none cursor-pointer accent-[#7A2FB0] dark:accent-[#B462E8]"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-[#71717A] dark:text-purple-300 font-semibold pt-1">
                      <span>0.25 Plot</span>
                      <span>12.5 Acres</span>
                      <span>25.0 Acres</span>
                    </div>
                  </div>
                </div>

                {/* 3. TERRAIN / VEGETATION CARD */}
                <div className="bg-[#F8F5FA] dark:bg-[#1E0424] border border-purple-100/90 dark:border-purple-900/60 rounded-[1.75rem] p-6 sm:p-7 space-y-4 transition-all hover:border-purple-200 dark:hover:border-purple-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52525B] dark:text-purple-300">
                      3. Terrain Vegetation & Slope
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7A2FB0] dark:text-[#B462E8] bg-purple-100/80 dark:bg-purple-950 px-2.5 py-1 rounded-md">
                      STEP 03
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'flat', label: 'Flat / Cleared', sub: 'Standard' },
                      { id: 'hilly', label: 'Rolling Hills', sub: '+25% complexity' },
                      { id: 'dense', label: 'Dense Forest', sub: '+50% complexity' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTerrain(item.id)}
                        className={`px-4 sm:px-5 py-3.5 rounded-full border text-left transition-all cursor-pointer flex items-center gap-3 ${
                          terrain === item.id
                            ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] border-[#34073E] dark:border-[#B462E8] font-bold shadow-md scale-[1.02]'
                            : 'bg-transparent text-[#171717] dark:text-purple-200 border-purple-200 dark:border-purple-800/80 hover:border-purple-300 dark:hover:border-purple-700 font-medium'
                        }`}
                      >
                        {/* Radio Button Circle Indicator */}
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          terrain === item.id
                            ? 'border-[#8DC63F] bg-[#8DC63F]/20'
                            : 'border-purple-300 dark:border-purple-700'
                        }`}>
                          {terrain === item.id && (
                            <div className="w-2 h-2 rounded-full bg-[#8DC63F] dark:bg-[#34073E]" />
                          )}
                        </div>

                        {/* Left-Aligned Label and Subtitle */}
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="text-xs font-semibold truncate">{item.label}</div>
                          <div className={`text-[10px] font-mono truncate ${
                            terrain === item.id ? 'opacity-90' : 'text-[#7A2FB0] dark:text-[#B462E8]'
                          }`}>
                            {item.sub}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Bold Result Summary Card ("THIS IS THE ANSWER") */}
              <div className="lg:col-span-5 bg-gradient-to-b from-white to-[#FAF7FC] dark:from-[#2A0631] dark:to-[#1E0424] p-7 sm:p-9 rounded-[2.25rem] border-2 border-purple-200 dark:border-purple-800 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
                
                <div className="space-y-6">
                  {/* Selected Survey Summary */}
                  <div className="border-b border-purple-100 dark:border-purple-800/80 pb-4">
                    <div className="text-[10px] font-mono text-[#7A2FB0] dark:text-[#B462E8] font-bold uppercase tracking-widest mb-1">
                      Target Survey Service
                    </div>
                    <div className="text-base sm:text-lg font-bold font-heading text-[#171717] dark:text-white">
                      {selectedServiceObj.title}
                    </div>
                  </div>

                  {/* Hero Result Budgetary Range */}
                  <div>
                    <div className="text-xs font-mono text-[#52525B] dark:text-purple-300 uppercase font-semibold">
                      Estimated Budgetary Range
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold font-heading text-[#34073E] dark:text-white tracking-tight my-2">
                      ${minCost.toLocaleString()} to ${maxCost.toLocaleString()}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A2FB0] dark:text-[#8DC63F] bg-purple-50 dark:bg-purple-950 px-3 py-1 rounded-full border border-purple-100 dark:border-purple-900 mt-1">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>Estimated Lead Time: {selectedServiceObj.estimatedDays}</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-4 border-t border-purple-100 dark:border-purple-800/80">
                    <div className="text-[10px] font-mono text-[#52525B] dark:text-purple-300 font-bold uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    <div className="space-y-2">
                      {selectedServiceObj.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-[#171717] dark:text-purple-100 font-medium">
                          <div className="w-4 h-4 rounded-full bg-[#8DC63F]/25 text-[#34073E] dark:text-[#8DC63F] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <button
                  onClick={() => onOpenBooking({
                    category: 'Land Surveying',
                    notes: `Survey Estimate: ${selectedServiceObj.title} for ${landAcres} acres on ${terrain} terrain. Estimated budget $${minCost.toLocaleString()} - $${maxCost.toLocaleString()}.`
                  })}
                  className="w-full flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] py-4 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer mt-4"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Survey Team For This Parcel</span>
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Deliverables Preview Modal */}
      {showDeliverablesModal && (
        <div className="fixed inset-0 z-50 bg-[#1E0424]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#34073E] max-w-2xl w-full rounded-3xl p-6 space-y-4 border border-purple-200 dark:border-purple-800 shadow-2xl">
            <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-3">
              <h3 className="text-lg font-bold font-heading text-[#171717] dark:text-white">
                Official Survey Certificate Deliverable Sample
              </h3>
              <button
                onClick={() => setShowDeliverablesModal(false)}
                className="text-purple-400 hover:text-purple-600 text-xs font-mono font-bold"
              >
                Close [X]
              </button>
            </div>

            <div className="p-4 bg-[#FAF7FC] dark:bg-[#1E0424] rounded-2xl border border-purple-200 dark:border-purple-800 space-y-3 font-mono text-xs text-[#171717] dark:text-purple-100">
              <div className="flex justify-between text-[#7A2FB0] dark:text-[#B462E8] font-bold border-b border-dashed border-purple-300 dark:border-purple-800 pb-2">
                <span>CERTIFICATE OF CADASTRAL BOUNDARY VERIFICATION</span>
                <span>DOC #SUR-2026-8819</span>
              </div>
              <div>SURVEYOR LICENCE: NGR-SURV-40912</div>
              <div>COORDINATE SYSTEM: WGS84 / UTM ZONE 11N (RTK PRECISION ±2mm)</div>
              <div>BEARINGS & DISTANCES: VERIFIED NO ENCROACHMENT</div>
              <div className="pt-2 text-[#3F3F46] dark:text-purple-300 text-[11px]">
                Deliverable package includes certified physical plan with seal, DXF 3D surface mesh, shapefile for GIS systems, and legal registry clearance affidavit.
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowDeliverablesModal(false)}
                className="px-5 py-2.5 bg-[#34073E] dark:bg-[#B462E8] text-white dark:text-[#1E0424] rounded-xl text-xs font-bold"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

