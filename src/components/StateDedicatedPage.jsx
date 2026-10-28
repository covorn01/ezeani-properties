import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Layers, 
  Search, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle2,
  Filter,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COVERED_STATES, formatCurrencyPrice, EZEANI_COMPANY_INFO } from '../data/mockData';

export default function StateDedicatedPage({
  stateName,
  allStates = COVERED_STATES,
  properties = [],
  currency = 'NGN',
  favorites = [],
  onToggleFavorite,
  comparedIds = [],
  onToggleCompare,
  onOpenCompare,
  onSelectProperty,
  onOpenBooking,
  onOpenContacts,
  onBackHome,
  onSelectState,
  companyInfo = EZEANI_COMPANY_INFO
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Find the state metadata from COVERED_STATES
  const stateData = useMemo(() => {
    return allStates.find(
      s => s.name.toLowerCase() === (stateName || '').toLowerCase()
    ) || {
      id: (stateName || '').toLowerCase(),
      name: stateName || 'State',
      fullName: `${stateName || 'State'} State`,
      region: 'Strategic Nigerian Region',
      headline: `Verified Properties & Prime Enclaves in ${stateName}`,
      locations: 'Prime Enclaves & Developing Urban Corridors',
      listingsCount: 0,
      image: '/images/hero-villa.jpg',
      titleStatus: 'Governor\'s Consent & Verified C of O',
      tagline: 'High-Yield Verified Estates'
    };
  }, [stateName, allStates]);

  // Filter properties matching this state
  const stateProperties = useMemo(() => {
    const sName = (stateName || '').toLowerCase();
    return properties.filter((prop) => {
      const loc = (prop.location || '').toLowerCase();
      const addr = (prop.address || '').toLowerCase();
      const desc = (prop.description || '').toLowerCase();
      const matchState = loc.includes(sName) || addr.includes(sName) || desc.includes(sName);

      const matchCat = selectedCategory === 'All' || prop.category === selectedCategory;
      const matchSearch = !searchQuery || 
        (prop.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.includes(searchQuery.toLowerCase()) ||
        addr.includes(searchQuery.toLowerCase());

      return matchState && matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'size-desc') return (b.sqft || 0) - (a.sqft || 0);
      return 0;
    });
  }, [properties, stateName, selectedCategory, searchQuery, sortBy]);

  // Categories available in this state
  const categories = ['All', 'Residential', 'Commercial', 'Luxury Lands', 'Industrial'];

  // Scroll to top when mounted or when stateName changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [stateName]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#120216] text-[#171717] dark:text-purple-100 transition-colors duration-300 pt-24 pb-20">
      
      {/* 1. Top Navigation & Breadcrumbs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-purple-100 dark:border-purple-900/60">
          
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-1.5 font-bold text-[#7A2FB0] dark:text-[#B462E8] hover:text-[#34073E] dark:hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-purple-300 dark:text-purple-700">/</span>
            <span className="text-[#71717A] dark:text-purple-300">Explore States</span>
            <span className="text-purple-300 dark:text-purple-700">/</span>
            <span className="font-bold text-[#34073E] dark:text-white">{stateData.fullName}</span>
          </div>

          {comparedIds.length > 0 && (
            <button
              onClick={onOpenCompare}
              className="flex items-center gap-2 bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] border border-[#8DC63F] px-3.5 py-1.5 rounded-xl text-xs font-bold hover:bg-[#8DC63F]/30 transition-all cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Compare ({comparedIds.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. State Dedicated Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#34073E] shadow-2xl border border-purple-900/40 p-6 sm:p-10 lg:p-12 text-white">
          
          {/* Background Image Preview */}
          <div className="absolute inset-0 z-0">
            <img 
              src={stateData.image} 
              alt={stateData.fullName} 
              className="w-full h-full object-cover opacity-25 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E0424] via-[#34073E]/90 to-[#1E0424]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(141,198,63,0.15),transparent_60%)]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8DC63F] text-[#1E0424] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#1E0424] animate-pulse"></span>
                <span>{stateData.name} Regional Coverage</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-purple-200 text-xs font-mono font-medium border border-white/15">
                <MapPin className="w-3 h-3 text-[#8DC63F]" />
                <span>{stateData.region}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-purple-200 text-xs font-mono font-medium border border-white/15">
                <ShieldCheck className="w-3 h-3 text-[#8DC63F]" />
                <span>{stateData.titleStatus}</span>
              </span>
            </div>

            {/* Main State Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              {stateData.fullName} Property Directory
            </h1>

            {/* Headline & Description */}
            <p className="mt-3 text-base sm:text-lg text-purple-200 font-sans leading-relaxed">
              {stateData.headline}. Every property in this regional portfolio has been physically verified by Ezeani Properties with genuine titles and zero boundary encumbrances.
            </p>

            {/* Key Corridors & Enclaves */}
            <div className="mt-5 pt-4 border-t border-purple-800/60 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-purple-200">
              <span className="font-mono uppercase font-bold text-[#8DC63F] tracking-wider">
                Key Corridors:
              </span>
              <span>{stateData.locations}</span>
            </div>

          </div>

          {/* Quick Stats Pill (Desktop) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-10 lg:right-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 max-w-xs">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-bold font-mono text-[#8DC63F]">
                  {stateProperties.length}
                </p>
                <p className="text-xs text-purple-200 font-medium mt-0.5">
                  Verified Listings in {stateData.name}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#8DC63F]/20 flex items-center justify-center text-[#8DC63F]">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. State Switcher Quick Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#71717A] dark:text-purple-300 shrink-0 mr-1">
            Switch State:
          </span>
          {allStates.map((s) => {
            const isActive = s.name.toLowerCase() === stateData.name.toLowerCase();
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  if (onSelectState) onSelectState(s.name);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-md ring-2 ring-[#8DC63F]'
                    : 'bg-purple-50 text-[#34073E] hover:bg-purple-100 dark:bg-purple-950/60 dark:text-purple-200 dark:hover:bg-purple-900 border border-purple-200/80 dark:border-purple-800/80'
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Filter & Search Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-2xl p-4 border border-purple-200 dark:border-purple-900/60 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#7A2FB0] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-xs'
                    : 'bg-white dark:bg-purple-950/40 text-[#52525B] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 border border-purple-200/60 dark:border-purple-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px] flex-1 sm:flex-initial">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${stateData.name}...`}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white"
              />
            </div>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 text-xs font-semibold text-[#34073E] dark:text-purple-200 focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] cursor-pointer"
            >
              <option value="default">Default Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="size-desc">Largest Space</option>
            </select>
          </div>

        </div>
      </div>

      {/* 5. Property Listings Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {stateProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateProperties.map((prop) => (
              <div 
                key={prop.id}
                className="bg-white dark:bg-[#1E0424] rounded-3xl overflow-hidden border border-purple-100/90 dark:border-purple-800/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => onSelectProperty && onSelectProperty(prop)}
              >
                {/* Image Section */}
                <div className="relative aspect-16/10 overflow-hidden bg-purple-950">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#34073E]/90 text-white backdrop-blur-md text-xs font-mono font-bold uppercase tracking-wider">
                      {prop.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onToggleCompare) onToggleCompare(prop.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          comparedIds.includes(prop.id)
                            ? 'bg-[#8DC63F] text-[#1E0424]'
                            : 'bg-white/80 dark:bg-purple-950/80 text-[#34073E] dark:text-purple-200 hover:bg-white'
                        }`}
                        title="Compare Property"
                      >
                        <Layers className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onToggleFavorite) onToggleFavorite(prop.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          favorites.includes(prop.id)
                            ? 'bg-rose-500 text-white'
                            : 'bg-white/80 dark:bg-purple-950/80 text-[#34073E] dark:text-purple-200 hover:bg-white'
                        }`}
                        title="Save to Favorites"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(prop.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Price Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight drop-shadow-md">
                        {formatCurrencyPrice(prop.price, currency)}
                      </p>
                      <p className="text-xs text-purple-200 font-medium flex items-center gap-1 drop-shadow-sm">
                        <MapPin className="w-3 h-3 text-[#8DC63F]" />
                        <span>{prop.location}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-[#171717] dark:text-white line-clamp-1 group-hover:text-[#7A2FB0] dark:group-hover:text-[#B462E8] transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#71717A] dark:text-purple-300 line-clamp-2 mt-1 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Property Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-purple-100 dark:border-purple-800/60 text-xs font-semibold text-[#52525B] dark:text-purple-200">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#7A2FB0] dark:text-[#B462E8]" />
                      <span>{prop.beds > 0 ? `${prop.beds} Beds` : 'Plot'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-[#7A2FB0] dark:text-[#B462E8]" />
                      <span>{prop.baths > 0 ? `${prop.baths} Baths` : 'Clear'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Square className="w-3.5 h-3.5 text-[#7A2FB0] dark:text-[#B462E8]" />
                      <span>{prop.sqft > 0 ? `${prop.sqft.toLocaleString()} sqft` : `${prop.acres} Acres`}</span>
                    </div>
                  </div>

                  {/* Verification Pill */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#8DC63F]">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{prop.surveyStatus || 'Cadastral Survey & C of O Verified'}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectProperty) onSelectProperty(prop);
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/40 dark:hover:bg-purple-900/60 text-[#34073E] dark:text-purple-100 text-xs font-bold transition-all text-center border border-purple-200/80 dark:border-purple-800/80 cursor-pointer"
                    >
                      View Details
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenBooking) {
                          onOpenBooking({
                            propertyId: prop.id,
                            propertyTitle: prop.title,
                            location: prop.location,
                            state: stateData.name,
                            serviceCategory: 'Site Inspection'
                          });
                        }
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#B462E8] dark:hover:bg-[#c27af0] text-white dark:text-[#1E0424] text-xs font-bold transition-all text-center shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Inspection</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-[2.5rem] bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200/80 dark:border-purple-800/80 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-3xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center mx-auto text-[#7A2FB0] dark:text-[#B462E8] mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] dark:text-white">
              No Listings Currently Displayed in {stateData.name}
            </h3>

            <p className="text-sm sm:text-base text-[#71717A] dark:text-purple-300 mt-2 max-w-lg mx-auto leading-relaxed">
              {searchQuery || selectedCategory !== 'All' 
                ? 'Try adjusting your search criteria or clearing filters to see all available properties.'
                : `Our ${stateData.name} desk handles exclusive off-market and pre-allocation developments along ${stateData.locations}. Speak with our regional advisory team for private listings.`}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {(searchQuery || selectedCategory !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-purple-100 dark:bg-purple-900 text-[#34073E] dark:text-white text-xs font-bold hover:bg-purple-200 transition-all cursor-pointer"
                >
                  Clear Filters
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  if (onOpenBooking) {
                    onOpenBooking({
                      serviceCategory: 'Site Inspection',
                      state: stateData.name,
                      notes: `Inquiry regarding off-market land and properties in ${stateData.fullName} (${stateData.locations})`
                    });
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#B462E8] dark:hover:bg-[#c27af0] text-white dark:text-[#1E0424] text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Request {stateData.name} Off-Market Inventory
              </button>
            </div>
          </div>
        )}

      </div>

      {/* 6. Regional Advisory & Direct Desk Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-[#34073E] via-[#1E0424] to-[#34073E] p-8 sm:p-10 lg:p-12 text-white border border-purple-800/80 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] text-xs font-mono font-bold uppercase tracking-wider border border-[#8DC63F]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{stateData.fullName} Regional Desk Advisory</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight">
                Looking to Acquire Verified Land or Homes in {stateData.name}?
              </h2>

              <p className="text-sm sm:text-base text-purple-200 max-w-2xl leading-relaxed">
                Connect directly with our {stateData.name} property specialists. We provide on-ground video walkthroughs, cadastral survey verification, and direct developer allocation without broker markups.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${(companyInfo?.whatsapp || EZEANI_COMPANY_INFO.whatsapp).replace(/[^0-9]/g, '')}?text=Hello%20Ezeani%20Properties,%20I%20would%20like%20to%20inquire%20about%20verified%20properties%20in%20${encodeURIComponent(stateData.fullName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>WhatsApp {stateData.name} Desk</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onOpenBooking) {
                    onOpenBooking({
                      serviceCategory: 'Site Inspection',
                      state: stateData.name,
                      notes: `Schedule inspection for verified properties in ${stateData.fullName}`
                    });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8DC63F] hover:bg-[#7db437] text-[#1E0424] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book {stateData.name} Inspection</span>
              </button>

              <button
                type="button"
                onClick={onBackHome}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Main Directory</span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
