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
  CheckCircle2,
  PhoneCall,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';
import { COVERED_STATES, EZEANI_COMPANY_INFO } from '../data/mockData';

export default function Hero({ onOpenBooking, onOpenContacts, onFilterByState, onSearchProperties, onQuickSurvey, onQuickBuild, currency, companyInfo }) {
  const [activeTab, setActiveTab] = useState('properties');
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  
  // Background Image Slider Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 'slide-1',
      title: 'Luxury Through Positioning: Where Tomorrow’s Wealth Is Created',
      subtitle: 'Specializing in verified luxury lands, generational estates & strategic commercial corridors across Delta State, Anambra State & nationwide.',
      image: '/images/hero-villa.jpg',
      ctaText: 'Browse Verified Lands & Homes',
      category: 'properties'
    },
    {
      id: 'slide-2',
      title: 'Prime Asaba, Okpanam Road & Awka Strategic Plots',
      subtitle: 'Position your portfolio in high-growth commercial and residential corridors with verified titles and zero boundary encumbrances.',
      image: '/images/hero-commercial.jpg',
      ctaText: 'Explore Strategic Plots',
      category: 'properties'
    },
    {
      id: 'slide-luxury',
      title: 'Generational Estates & Ultra-Luxury Sanctuaries',
      subtitle: 'Exclusive private sanctuaries, master-planned layouts & architectural developments built to preserve and grow lasting family wealth.',
      image: '/images/mansion.jpg',
      ctaText: 'View Elite Estates',
      category: 'properties'
    }
    /* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
    ,
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
    */
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

          {/* Top Header Controls */}
          <div className="relative z-20 flex items-center justify-end mb-6">

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
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {companyInfo?.heroPill && (
                <div className="inline-block px-3 py-1 rounded-md bg-[#8DC63F] text-[#34073E] text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  {companyInfo.heroPill}
                </div>
              )}
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-semibold tracking-wider border border-white/20 shadow-sm">
                Creating Legacies • Building Trust
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading text-white tracking-tight leading-[1.1] drop-shadow-md transition-all duration-500">
              {currentSlide === 0 && companyInfo?.headline ? companyInfo.headline : slide.title}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 font-normal leading-relaxed mt-5 drop-shadow-xs max-w-3xl">
              {currentSlide === 0 && companyInfo?.subheadline ? companyInfo.subheadline : slide.subtitle}
            </p>

            {/* Contact Us Call To Action (CTA) */}
            <div className="mt-5">
              <button
                type="button"
                onClick={() => {
                  if (onOpenContacts) {
                    onOpenContacts();
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#8DC63F] hover:bg-[#9de047] text-[#1E0424] font-bold text-sm sm:text-base shadow-lg shadow-[#8DC63F]/25 hover:shadow-xl hover:shadow-[#8DC63F]/35 transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#1E0424]" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#1E0424] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
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

              {/* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
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
              */}
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
                        className="w-full pl-10 pr-4 py-3 bg-[#FAF7FC] dark:bg-[#2A0633] border border-purple-200 dark:border-purple-800 rounded-xl text-sm sm:text-base font-medium text-[#171717] dark:text-white placeholder-purple-400 focus:outline-hidden focus:ring-2 focus:ring-[#8DC63F]"
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
                      className="w-full py-3 px-4 bg-[#FAF7FC] dark:bg-[#2A0633] border border-purple-200 dark:border-purple-800 rounded-xl text-sm sm:text-base font-semibold text-[#171717] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8DC63F] cursor-pointer"
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
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] px-7 py-3 rounded-xl text-sm font-bold transition-all shadow-md shrink-0 h-[46px]"
                    >
                      <Search className="w-4 h-4" />
                      <span>Search</span>
                    </button>
                  </div>
                </>
              )}

              {/* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
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
              */}
            </form>
          </div>
        </div>

        {/* Contact Us Section (Between Hero Search and State Coverage Loop) */}
        <section id="contact-advisory" aria-label="Contact Ezeani Properties" className="relative z-20 max-w-7xl mx-auto mt-8 sm:mt-10 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#1E0424] rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-purple-100/90 dark:border-purple-800/80 shadow-2xl transition-all duration-300 relative overflow-hidden group">
            
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8DC63F] via-[#B462E8] to-[#34073E]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading, Subtitle, Fast Meta Info & Vertically Stacked Action Buttons */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/40 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DC63F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8DC63F]"></span>
                  </span>
                  <span>Direct Advisory Desk • Fast Response</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#171717] dark:text-white tracking-tight leading-tight">
                  Contact Us For Immediate Property Guidance
                </h2>

                <p className="text-base sm:text-lg text-[#52525B] dark:text-purple-200 font-sans leading-relaxed">
                  Have questions about verified titles, strategic land allocations, or booking an on-site inspection? Connect directly via WhatsApp, direct phone call, or our advisory form.
                </p>

                {/* Direct info links */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-xs sm:text-sm text-[#71717A] dark:text-purple-300">
                  <a 
                    href={`tel:${companyInfo?.phone || EZEANI_COMPANY_INFO.phone}`} 
                    className="inline-flex items-center gap-1.5 font-semibold hover:text-[#7A2FB0] dark:hover:text-[#B462E8] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8DC63F]" />
                    <span>{companyInfo?.phone || EZEANI_COMPANY_INFO.phone}</span>
                  </a>
                  <span className="text-purple-300 dark:text-purple-700">•</span>
                  <a 
                    href={`mailto:${companyInfo?.email || EZEANI_COMPANY_INFO.email}`} 
                    className="inline-flex items-center gap-1.5 font-semibold hover:text-[#7A2FB0] dark:hover:text-[#B462E8] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#8DC63F]" />
                    <span>{companyInfo?.email || EZEANI_COMPANY_INFO.email}</span>
                  </a>
                  <span className="hidden sm:inline text-purple-300 dark:text-purple-700">•</span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#8DC63F]" />
                    <span>Asaba HQ & Awka Desk</span>
                  </span>
                </div>

                {/* Contact Action Buttons Row at the bottom of the text */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  
                  {/* 1. Primary WhatsApp Action Button */}
                  <a
                    href={`https://wa.me/${(companyInfo?.whatsapp || EZEANI_COMPANY_INFO.whatsapp).replace(/[^0-9]/g, '')}?text=Hello%20Ezeani%20Properties,%20I%20would%20like%20to%20inquire%20about%20your%20verified%20properties.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-200 active:scale-95 group cursor-pointer"
                    title="Contact Ezeani Properties on WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.71C7.02 10.93 7.91 12.11 8.03 12.28C8.16 12.44 9.79 14.94 12.27 16.02C12.86 16.28 13.32 16.43 13.68 16.55C14.28 16.74 14.82 16.71 15.25 16.65C15.73 16.58 16.73 16.04 16.94 15.45C17.15 14.86 17.15 14.36 17.09 14.26C17.03 14.16 16.86 14.1 16.61 13.98C16.36 13.85 15.13 13.24 14.9 13.16C14.67 13.08 14.51 13.04 14.34 13.28C14.18 13.53 13.71 14.1 13.56 14.26C13.42 14.43 13.27 14.45 13.02 14.32C12.77 14.2 11.97 13.93 11.02 13.09C10.28 12.43 9.78 11.61 9.63 11.36C9.49 11.11 9.62 10.98 9.74 10.86C9.85 10.75 9.99 10.57 10.12 10.42C10.24 10.27 10.29 10.17 10.37 10.01C10.45 9.84 10.41 9.7 10.35 9.57C10.29 9.45 9.82 8.29 9.62 7.82C9.43 7.36 9.23 7.42 9.08 7.41C8.94 7.41 8.78 7.4 8.61 7.4C8.45 7.4 8.19 7.46 7.96 7.71L8.53 7.33Z"/>
                    </svg>
                    <span>Contact on WhatsApp</span>
                  </a>

                  {/* 2. Direct Call Action Button */}
                  <a
                    href={`tel:${companyInfo?.phone || EZEANI_COMPANY_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/40 dark:hover:bg-purple-900/60 text-[#34073E] dark:text-purple-100 font-bold text-sm sm:text-base border border-purple-200/80 dark:border-purple-800/80 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
                    <span>Call Us</span>
                  </a>

                  {/* 3. Send Inquiry Action Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenContacts) onOpenContacts();
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#B462E8] dark:hover:bg-[#c27af0] text-white dark:text-[#1E0424] font-bold text-sm sm:text-base shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>

                </div>
              </div>

              {/* Right Column: Contact & Property Advisory Depiction Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-purple-100 dark:border-purple-800/80 group">
                  <img
                    src="/images/contact-advisory.jpg"
                    alt="Ezeani Properties Advisory & Inquiries Desk"
                    className="w-full h-72 sm:h-80 lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Status Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#1E0424]/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-purple-100/90 dark:border-purple-700/60 shadow-lg flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F] animate-pulse"></span>
                        <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
                          Concierge & Advisory Desk
                        </p>
                      </div>
                      <p className="text-sm font-bold text-[#171717] dark:text-white mt-0.5">
                        Instant Client Advisory
                      </p>
                    </div>
                    <div className="shrink-0 pl-2">
                      <span className="px-2.5 py-1 rounded-lg bg-[#8DC63F]/15 text-[#34073E] dark:text-[#8DC63F] text-xs font-bold font-mono">
                        Online Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Nationwide State Coverage Automated Infinite Loop (Replaces Old Metric Cards) */}
        <section id="state-coverage" aria-label="Coverage Across Nigerian States" className="max-w-7xl mx-auto mt-12 px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 px-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono uppercase tracking-wider font-bold mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#8DC63F]" />
                <span>NATIONWIDE COVERAGE • STRATEGIC REGIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                Explore Properties By State
              </h2>
              <p className="text-sm sm:text-base text-[#52525B] dark:text-purple-200 mt-1 max-w-2xl font-sans">
                Active coverage in Lagos, Abuja, Delta, Ebonyi, Anambra, and across the South-East. Click any card to view available verified listings.
              </p>
            </div>

            <div className="text-xs font-mono text-[#8DC63F] flex items-center gap-1.5 shrink-0 self-start sm:self-end bg-purple-950/40 dark:bg-purple-900/40 px-3 py-1.5 rounded-full border border-purple-800/40">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DC63F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8DC63F]"></span>
              </span>
              <span>Automated Loop • Hover to Pause</span>
            </div>
          </div>

          {/* Infinite Smooth Scrolling Track (Soft sliding from right to left) */}
          <div className="relative overflow-hidden w-full py-2 group/marquee">
            {/* Edge fade gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white dark:from-[#120216] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white dark:from-[#120216] to-transparent z-20" />

            {/* Continuous Marquee Sliding Cards */}
            <div className="animate-marquee-slow flex items-stretch gap-5 sm:gap-6">
              {[...COVERED_STATES, ...COVERED_STATES].map((state, idx) => (
                <div
                  key={`${state.id}-${idx}`}
                  onClick={() => {
                    if (onFilterByState) {
                      onFilterByState(state.name);
                    } else {
                      const el = document.getElementById('properties');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-[300px] sm:w-[340px] shrink-0 bg-white dark:bg-[#1E0424] rounded-[2rem] p-5 border border-purple-100/90 dark:border-purple-800/80 shadow-md hover:shadow-2xl hover:border-[#8DC63F] dark:hover:border-[#8DC63F] transition-all duration-300 flex flex-col justify-between cursor-pointer group/card select-none"
                >
                  {/* Top Image Preview with Gradient & Badges */}
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden mb-4 bg-purple-950">
                    <img
                      src={state.image}
                      alt={state.fullName}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424]/90 via-[#1E0424]/40 to-transparent" />
                    
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-[#34073E]/90 text-white backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider">
                        {state.name}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#8DC63F] text-[#1E0424] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                        Available
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <div className="text-white text-lg font-bold font-heading drop-shadow-md truncate">
                        {state.fullName}
                      </div>
                      <div className="text-purple-200 text-xs truncate">
                        {state.region}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8] mb-1">
                        Key Corridors & Enclaves
                      </div>
                      <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-purple-200 line-clamp-2 leading-relaxed">
                        {state.locations}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-purple-100 dark:border-purple-800/60">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#8DC63F]">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{state.titleStatus}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onFilterByState) {
                          onFilterByState(state.name);
                        } else {
                          const el = document.getElementById('properties');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full mt-2 py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-[#8DC63F] dark:bg-purple-900/40 dark:hover:bg-[#8DC63F] text-[#34073E] dark:text-purple-100 hover:text-[#1E0424] dark:hover:text-[#1E0424] text-xs font-bold transition-all flex items-center justify-center gap-1.5 group/btn border border-purple-200/80 dark:border-purple-800/80 cursor-pointer"
                    >
                      <span>Explore {state.name} Listings</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}




