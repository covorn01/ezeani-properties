import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  ShieldCheck, 
  Check, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { formatCurrencyPrice } from '../data/mockData';

export default function PropertyListings({ 
  properties, 
  onSelectProperty, 
  favorites, 
  onToggleFavorite, 
  onOpenBooking,
  comparedIds,
  onToggleCompare,
  onOpenCompare,
  currency = 'NGN',
  selectedStateFilter = 'All',
  onSelectStateFilter
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000000000);
  const [sortBy, setSortBy] = useState('default');

  const statusCounts = useMemo(() => {
    const stateBase = properties.filter((prop) => {
      const matchState = !selectedStateFilter || selectedStateFilter === 'All' ||
        prop.location.toLowerCase().includes(selectedStateFilter.toLowerCase()) ||
        prop.address.toLowerCase().includes(selectedStateFilter.toLowerCase());
      return matchState;
    });

    return {
      all: stateBase.length,
      forSale: stateBase.filter(p => p.status === 'For Sale').length,
      forRent: stateBase.filter(p => p.status === 'For Rent').length
    };
  }, [properties, selectedStateFilter]);

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      const matchCat = selectedCategory === 'All' || prop.category === selectedCategory;
      const matchStatus = selectedStatus === 'All' || prop.status === selectedStatus;
      const matchPrice = prop.price <= maxPrice;
      const matchState = !selectedStateFilter || selectedStateFilter === 'All' ||
        prop.location.toLowerCase().includes(selectedStateFilter.toLowerCase()) ||
        prop.address.toLowerCase().includes(selectedStateFilter.toLowerCase());
      return matchCat && matchStatus && matchPrice && matchState;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'size-desc') return b.sqft - a.sqft;
      return 0;
    });
  }, [properties, selectedCategory, selectedStatus, maxPrice, sortBy, selectedStateFilter]);

  return (
    <section id="properties" className="py-20 bg-white dark:bg-[#1E0424] border-t border-b border-purple-200/50 dark:border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7A2FB0] dark:text-[#B462E8] font-bold mb-2">
              <Building2 className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span>Verified Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
              Featured Properties & Luxury Lands
            </h2>
            <p className="text-base sm:text-lg text-[#3F3F46] dark:text-purple-200 mt-2 max-w-2xl leading-relaxed">
              Homes and spaces we’re proud of. Every property comes with verified titles, clear paperwork, and honest advice.
            </p>
          </div>

          {/* Action Bar */}
          {comparedIds.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCompare}
                className="flex items-center gap-2 bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] border border-[#8DC63F] px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-[#8DC63F]/30 transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Compare ({comparedIds.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#FAF7FC] dark:bg-[#34073E] rounded-3xl p-4 sm:p-5 mb-8 space-y-4 border border-purple-200/80 dark:border-purple-900/60 shadow-xs">
          
          {/* Active State Filter Notice */}
          {selectedStateFilter && selectedStateFilter !== 'All' && (
            <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#8DC63F]/15 dark:bg-[#8DC63F]/10 border border-[#8DC63F]/40 text-xs font-semibold text-[#1E0424] dark:text-purple-100 animate-fade-in">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8DC63F] shrink-0" />
                <span>
                  Showing verified listings in <strong className="text-[#34073E] dark:text-[#8DC63F] font-bold">{selectedStateFilter} State</strong> ({filteredProperties.length} found)
                </span>
              </div>
              <button
                type="button"
                onClick={() => onSelectStateFilter && onSelectStateFilter('All')}
                className="px-3 py-1 rounded-lg bg-[#34073E] hover:bg-[#4A0A58] dark:bg-purple-900 dark:hover:bg-purple-800 text-white text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap"
              >
                Clear State Filter
              </button>
            </div>
          )}

          {/* Primary Status Filter Tabs (For Sale / For Rent / All Listings) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-purple-200/70 dark:border-purple-800/60">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-purple-300 shrink-0 mr-1">
                Listing Type:
              </span>
              <div className="inline-flex p-1 bg-white dark:bg-[#1E0424] rounded-2xl border border-purple-200 dark:border-purple-800/80 shadow-xs gap-1">
                {[
                  { id: 'All', label: 'All Listings', count: statusCounts.all },
                  { id: 'For Sale', label: 'For Sale', count: statusCounts.forSale },
                  { id: 'For Rent', label: 'For Rent', count: statusCounts.forRent }
                ].map((tab) => {
                  const isActive = selectedStatus === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedStatus(tab.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-[#34073E] text-white dark:bg-[#8DC63F] dark:text-[#1E0424] shadow-sm ring-1 ring-purple-300 dark:ring-[#8DC63F]'
                          : 'text-[#52525B] dark:text-purple-300 hover:text-[#34073E] dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-900/40'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                          isActive
                            ? 'bg-white/20 dark:bg-[#1E0424]/20'
                            : 'bg-purple-100 dark:bg-purple-900/60 text-[#7A2FB0] dark:text-purple-300'
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#71717A] dark:text-purple-300">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
              <span>
                Showing <strong className="text-[#34073E] dark:text-white font-bold">{filteredProperties.length}</strong> {selectedStatus === 'All' ? 'verified properties' : `${selectedStatus} listings`}
              </span>
            </div>
          </div>

          {/* State Quick Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 shrink-0 mr-1">
              States:
            </span>
            {['All', 'Lagos', 'Abuja', 'Delta', 'Anambra', 'Ebonyi', 'Enugu', 'Imo', 'Abia'].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => onSelectStateFilter && onSelectStateFilter(st)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedStateFilter === st
                    ? 'bg-[#8DC63F] text-[#1E0424] font-bold shadow-xs'
                    : 'text-[#3F3F46] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/40'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Category Pills & Sort Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1 border-t border-purple-200/60 dark:border-purple-800/60">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {['All', 'Residential', 'Commercial', 'Industrial', 'Luxury Lands'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#7A2FB0] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-xs'
                      : 'text-[#3F3F46] dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right filter controls */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
              {(selectedCategory !== 'All' || selectedStatus !== 'All' || (selectedStateFilter && selectedStateFilter !== 'All')) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedStatus('All');
                    if (onSelectStateFilter) onSelectStateFilter('All');
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#7A2FB0] dark:text-[#B462E8] hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Reset Filters
                </button>
              )}

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1.5 px-3 bg-white dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-xl text-xs font-semibold text-[#171717] dark:text-purple-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7A2FB0]"
              >
                <option value="default">Sort by: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Largest Area</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => {
              const isFavorite = favorites.includes(property.id);
              const isCompared = comparedIds.includes(property.id);
              const displayPrice = formatCurrencyPrice(property.price, currency, property.status === 'For Rent');

              return (
                <div
                  key={property.id}
                  className="group bg-white dark:bg-[#34073E] rounded-3xl overflow-hidden border border-purple-200/80 dark:border-purple-900 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative aspect-16/10 overflow-hidden bg-purple-950">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424]/80 via-transparent to-transparent opacity-70" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                        property.status === 'For Rent'
                          ? 'bg-[#8DC63F] text-[#1E0424]'
                          : 'bg-[#34073E]/90 text-white border border-purple-400/30'
                      }`}>
                        {property.status}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleCompare(property.id);
                          }}
                          className={`p-2 rounded-full text-xs font-bold transition-all ${
                            isCompared 
                              ? 'bg-[#8DC63F] text-[#34073E] shadow-xs' 
                              : 'bg-[#34073E]/70 backdrop-blur-md text-white hover:bg-[#8DC63F] hover:text-[#34073E]'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(property.id);
                          }}
                          className={`p-2 rounded-full transition-all ${
                            isFavorite
                              ? 'bg-[#7A2FB0] text-white shadow-xs'
                              : 'bg-[#34073E]/70 backdrop-blur-md text-white hover:bg-[#7A2FB0]'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-2xl font-bold font-heading text-white tracking-tight drop-shadow-md">
                        {displayPrice}
                      </div>
                    </div>
                  </div>


                  {/* Details Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-sm text-[#7A2FB0] dark:text-[#B462E8] font-semibold">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      <h3 
                        onClick={() => onSelectProperty(property)}
                        className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white group-hover:text-[#7A2FB0] dark:group-hover:text-[#B462E8] transition-colors cursor-pointer leading-snug"
                      >
                        {property.title}
                      </h3>

                      <p className="text-base sm:text-[17px] text-[#3F3F46] dark:text-purple-200 line-clamp-2 leading-relaxed">
                        {property.description}
                      </p>
                    </div>

                    {/* Specs Bar */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-purple-200/80 dark:border-purple-800 text-sm font-semibold text-[#34073E] dark:text-purple-100">
                      {property.beds > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
                          <span>{property.beds} Beds</span>
                        </div>
                      )}
                      {property.baths > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
                          <span>{property.baths} Baths</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Square className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
                        <span>{property.sqft > 0 ? `${property.sqft.toLocaleString()} sqft` : `${property.acres} Acres`}</span>
                      </div>
                    </div>

                    {/* Verified Title Status Badge (Door Green) */}
                    <div className="flex items-center gap-2 bg-[#F4FAEA] dark:bg-[#2A3E12] border border-[#8DC63F]/40 px-3 py-1.5 rounded-xl text-[11px] font-bold text-[#3F5D19] dark:text-[#B2D96E]">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#8DC63F]" />
                      <span className="truncate">{property.surveyStatus}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onSelectProperty(property)}
                        className="w-full flex items-center justify-center gap-1.5 bg-purple-100 dark:bg-purple-900/60 hover:bg-purple-200 text-[#34073E] dark:text-white py-2.5 rounded-xl text-xs font-semibold transition-all"
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenBooking({ 
                          category: 'Property Acquisition',
                          propertyTitle: property.title,
                          propertyId: property.id
                        })}
                        className="w-full flex items-center justify-center gap-1.5 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
                      >
                        <span>Book Inspection</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="rounded-3xl bg-[#FAF7FC] dark:bg-[#34073E] border border-purple-200/80 dark:border-purple-800/80 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm my-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center mx-auto text-[#7A2FB0] dark:text-[#B462E8] mb-4">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#171717] dark:text-white">
              No {selectedStatus !== 'All' ? selectedStatus : ''} Properties Found
            </h3>
            <p className="text-sm text-[#71717A] dark:text-purple-300 mt-2 leading-relaxed">
              No listings currently match your criteria for {selectedCategory !== 'All' ? `${selectedCategory} • ` : ''}{selectedStatus}{selectedStateFilter && selectedStateFilter !== 'All' ? ` in ${selectedStateFilter}` : ''}. Switch tabs or reset filters to explore our full verified portfolio.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                  if (onSelectStateFilter) onSelectStateFilter('All');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#8DC63F] dark:hover:bg-[#9dd84a] text-white dark:text-[#1E0424] text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
