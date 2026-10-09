import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Compass, 
  HardHat, 
  Calendar, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Landmark,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';

export default function Hero({ onOpenBooking, onSearchProperties, onQuickSurvey, onQuickBuild, currency }) {
  const [activeTab, setActiveTab] = useState('properties');
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  
  // Background Image Slider Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 'slide-1',
      title: 'Discover Your Perfect Property Today',
      subtitle: 'Luxury residential mansions, waterfront villas & prime surveyed plots across Lagos & Abuja.',
      badge: 'RESIDENTIAL PORTFOLIO',
      image: '/images/hero-villa.jpg',
      ctaText: 'Browse Luxury Homes',
      category: 'properties'
    },
    {
      id: 'slide-2',
      title: 'Prime Commercial Towers & Business Hubs',
      subtitle: 'Corporate office towers, retail centers & industrial developments in Victoria Island & Epe.',
      badge: 'COMMERCIAL REAL ESTATE',
      image: '/images/hero-commercial.jpg',
      ctaText: 'Explore Commercial Hubs',
      category: 'properties'
    },
    {
      id: 'slide-3',
      title: 'Geospatial Cadastral Surveying & RTK Mapping',
      subtitle: 'Eliminate boundary disputes with RTK GPS total station surveys & FCDA / Lagos title verification.',
      badge: 'LAND SURVEYING & GIS',
      image: '/images/hero-surveyor.jpg',
      ctaText: 'Estimate Survey Cost',
      category: 'survey'
    },
    {
      id: 'slide-4',
      title: 'Turnkey Architectural Design & Construction',
      subtitle: 'Master 3D BIM architectural planning, structural execution & 10-year warranty handover.',
      badge: 'TURNKEY CONSTRUCTION',
      image: '/images/hero-construction.jpg',
      ctaText: 'Consult Architect',
      category: 'construction'
    }
  ];

  // Auto-play slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'properties') {
      onSearchProperties({ query: searchQuery, type: propertyType });
      const el = document.getElementById('properties');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (activeTab === 'survey') {
      const el = document.getElementById('surveying');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      if (onQuickSurvey) onQuickSurvey();
    } else if (activeTab === 'construction') {
      const el = document.getElementById('construction');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      if (onQuickBuild) onQuickBuild();
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 bg-white dark:bg-[#120216] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Rounded Card Container (Reference-inspired Canvas) */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#34073E] shadow-2xl min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-purple-900/40">
          
          {/* Background Image/Video Slider with subtle vignette & gradient overlay */}
          <div className="absolute inset-0 z-0">
            {heroSlides.map((s, idx) => {
              const activeMedia = (idx === 0 && companyInfo?.heroMedia) ? companyInfo.heroMedia : (s.image || '/images/hero-villa.jpg');
              const isVideo = Boolean(
                activeMedia && (
                  (idx === 0 && companyInfo?.heroMediaType === 'video') ||
                  activeMedia.includes('youtube') ||
                  activeMedia.includes('vimeo') ||
                  activeMedia.endsWith('.mp4')
                )
              );

              return (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {isVideo ? (
                    <iframe
                      src={activeMedia.includes('youtube') ? activeMedia.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&controls=0&loop=1' : activeMedia}
                      title="Hero Stream Video"
                      className="w-full h-full object-cover scale-105"
                      allow="autoplay; encrypted-media"
                    />
                  ) : (
                    <img
                      src={activeMedia}
                      alt={s.title}
                      className="w-full h-full object-cover scale-105 transform transition-transform duration-10000 ease-linear"
                    />
                  )}
                  {/* Controlled gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1E0424]/90 via-[#1E0424]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424]/80 via-transparent to-black/30" />
                </div>
              );
            })}
          </div>

          {/* Top Pill Header & Controls */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 text-xs font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-ping" />
              <span className="font-mono text-[11px] tracking-wide text-purple-100 font-semibold">
                {companyInfo?.heroPill || "EZEANI PROPERTIES LTD"}
              </span>
            </div>

            {/* Slide Navigation Buttons & Counter & Dots */}
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-mono font-bold text-white shadow-sm">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="text-white/70 hover:text-[#8DC63F] transition-colors p-0.5"
                title="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[#8DC63F]">0{currentSlide + 1}</span>
              <span className="opacity-40">/</span>
              <span>0{heroSlides.length}</span>
              <button
                type="button"
                onClick={handleNextSlide}
                className="text-white/70 hover:text-[#8DC63F] transition-colors p-0.5"
                title="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="h-3 w-px bg-white/20 mx-1 hidden sm:block" />

              <div className="hidden sm:flex items-center gap-1.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-5 bg-[#8DC63F]' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Top-Left Headline Block */}
          <div className="relative z-20 max-w-2xl mb-16 sm:mb-24 lg:mb-28">
            <div className="inline-block px-3 py-1 rounded-md bg-[#8DC63F] text-[#34073E] text-[11px] font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
              {currentSlide === 0 && companyInfo?.heroPill ? companyInfo.heroPill : slide.badge}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.12] drop-shadow-md transition-all duration-500">
              {currentSlide === 0 && companyInfo?.headline ? companyInfo.headline : slide.title}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-purple-100 font-normal leading-relaxed mt-4 drop-shadow-xs max-w-xl">
              {currentSlide === 0 && companyInfo?.subheadline ? companyInfo.subheadline : slide.subtitle}
            </p>
          </div>

        </div>

        {/* Floating Search / Filter Box Surface (Overlapping Bottom Border of Hero Card) */}
        <div className="relative z-30 max-w-5xl mx-auto -mt-14 sm:-mt-16 lg:-mt-20 px-2 sm:px-4">
          <div className="bg-white dark:bg-[#1E0424] rounded-[2rem] p-4 sm:p-6 shadow-2xl border border-purple-100/90 dark:border-purple-800/80 transition-colors duration-300">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 sm:gap-4 border-b border-purple-100 dark:border-purple-800/80 pb-3 mb-4 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('properties')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === 'properties'
                    ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-sm'
                    : 'text-[#3F3F46] dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/40'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Property Directory</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('survey')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === 'survey'
                    ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-sm'
                    : 'text-[#3F3F46] dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/40'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Land Survey Service</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('construction')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === 'construction'
                    ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-sm'
                    : 'text-[#3F3F46] dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/40'
                }`}
              >
                <HardHat className="w-4 h-4" />
                <span>Turnkey Construction</span>
              </button>
            </div>

            {/* Tab Forms */}
            <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-3">
              {activeTab === 'properties' && (
                <>
                  <div className="flex-1 relative">
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#3F3F46] dark:text-purple-300 mb-1 ml-1">
                      Location / Keyword
                    </label>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search location or title (e.g. Ikoyi, Lekki Phase 1, Guzape, Epe)..."
                        className="w-full pl-10 pr-4 py-3 bg-[#FAF7FC] dark:bg-[#2A0633] border border-purple-200 dark:border-purple-800 rounded-xl text-xs font-semibold text-[#171717] dark:text-white placeholder-purple-400 focus:outline-hidden focus:ring-2 focus:ring-[#8DC63F]"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-56">
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#3F3F46] dark:text-purple-300 mb-1 ml-1">
                      Property Category
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full py-3 px-4 bg-[#FAF7FC] dark:bg-[#2A0633] border border-purple-200 dark:border-purple-800 rounded-xl text-xs font-bold text-[#171717] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8DC63F] cursor-pointer"
                    >
                      <option value="All">All Categories</option>
                      <option value="Residential">Residential Real Estate</option>
                      <option value="Commercial">Commercial Real Estate</option>
                      <option value="Industrial">Industrial Real Estate</option>
                      <option value="Luxury Lands">Luxury Lands</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] px-7 py-3 rounded-xl text-xs font-bold transition-all shadow-md shrink-0 h-[42px]"
                    >
                      <Search className="w-4 h-4" />
                      <span>Search</span>
                    </button>
                  </div>
                </>
              )}

              {activeTab === 'survey' && (
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-1">
                  <div className="text-left space-y-1">
                    <h4 className="text-xs font-bold text-[#171717] dark:text-white uppercase tracking-wider">
                      Verified Land Titles & Cadastral Boundary Surveying
                    </h4>
                    <p className="text-xs text-[#3F3F46] dark:text-purple-200">
                      RTK GPS boundary beacons, Governor's Consent, C of O verification & FCDA titles.
                    </p>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto shrink-0">
                    <button
                      type="submit"
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#7A2FB0] hover:bg-[#5A1A80] text-white px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-xs"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Estimate Survey Cost</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenBooking({ category: 'Land Surveying' })}
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Inspection</span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'construction' && (
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-1">
                  <div className="text-left space-y-1">
                    <h4 className="text-xs font-bold text-[#171717] dark:text-white uppercase tracking-wider">
                      Turnkey Construction & Master Architecture
                    </h4>
                    <p className="text-xs text-[#3F3F46] dark:text-purple-200">
                      Residential, commercial, and industrial turnkey build execution with fixed-price contracts.
                    </p>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto shrink-0">
                    <button
                      type="submit"
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#7A2FB0] hover:bg-[#5A1A80] text-white px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-xs"
                    >
                      <HardHat className="w-4 h-4" />
                      <span>Build Calculator</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenBooking({ category: 'Construction & Architecture' })}
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Consult Architect</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 3 Metric Cards Grid Below Hero (Directly Inspired by Reference Structure) */}
        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Customer & Title Guarantee */}
          <div className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-[2rem] p-6 border border-purple-100/90 dark:border-purple-800/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                100%
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white dark:border-[#1E0424] overflow-hidden">
                  <img src="/images/hero-surveyor.jpg" alt="Verified Title Specialist" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-300 border-2 border-white dark:border-[#1E0424] overflow-hidden">
                  <img src="/images/hero-villa.jpg" alt="Happy Property Owner" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#8DC63F] border-2 border-white dark:border-[#1E0424] flex items-center justify-center text-[10px] font-bold text-[#34073E]">
                  +5k
                </div>
              </div>
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8] mb-1">
                Verified Land Titles
              </div>
              <p className="text-xs text-[#3F3F46] dark:text-purple-200 font-normal">
                Cadastral RTK GPS surveys & C of O guarantees across Nigeria.
              </p>
            </div>
          </div>

          {/* Card 2: Property Scale & Regional Coverage */}
          <div className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-[2rem] p-6 border border-purple-100/90 dark:border-purple-800/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                Lagos & Abuja
              </div>
              <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-[#7A2FB0] dark:text-[#B462E8]">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8] mb-1">
                Nationwide Footprint
              </div>
              <p className="text-xs text-[#3F3F46] dark:text-purple-200 font-normal">
                Dedicated regional desks in Victoria Island, Ikeja & Guzape.
              </p>
            </div>
          </div>

          {/* Card 3: Ezeani Group Backed Fixed-Cost Construction */}
          <div className="bg-[#34073E] text-white rounded-[2rem] p-6 border border-purple-800 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8DC63F]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="text-3xl font-bold font-heading text-white tracking-tight">
                Fixed Cost
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#8DC63F] text-[#34073E] text-[10px] font-mono font-bold uppercase">
                Zero Overrun
              </span>
            </div>
            <div className="relative z-10">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#8DC63F] mb-1">
                Ezeani Group Warranty
              </div>
              <p className="text-xs text-purple-100 font-normal">
                10-Year structural guarantee on all architectural turnkey builds.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}




