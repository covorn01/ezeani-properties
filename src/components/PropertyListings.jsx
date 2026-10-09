import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  ShieldCheck, 
  Compass, 
  Grid, 
  Map, 
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
  currency = 'NGN'
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000000000);
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [activeMapPin, setActiveMapPin] = useState(null);

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      const matchCat = selectedCategory === 'All' || prop.category === selectedCategory;
      const matchStatus = selectedStatus === 'All' || prop.status === selectedStatus;
      const matchPrice = prop.price <= maxPrice;
      return matchCat && matchStatus && matchPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'size-desc') return b.sqft - a.sqft;
      return 0;
    });
  }, [properties, selectedCategory, selectedStatus, maxPrice, sortBy]);

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
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
              Featured Properties & Luxury Lands
            </h2>
            <p className="text-sm text-[#3F3F46] dark:text-purple-200 mt-2 max-w-xl">
              Homes and spaces we’re proud of. Every property comes with verified titles, clear paperwork, and honest advice.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {comparedIds.length > 0 && (
              <button
                onClick={onOpenCompare}
                className="flex items-center gap-2 bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] border border-[#8DC63F] px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-[#8DC63F]/30 transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Compare ({comparedIds.length})</span>
              </button>
            )}

            <div className="flex items-center bg-purple-100 dark:bg-purple-950 p-1 rounded-xl border border-purple-200 dark:border-purple-900">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-xs'
                    : 'text-purple-700 dark:text-purple-300'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'map'
                    ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-xs'
                    : 'text-purple-700 dark:text-purple-300'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>GIS Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#FAF7FC] dark:bg-[#34073E] rounded-2xl p-4 mb-8 space-y-4 border border-purple-200 dark:border-purple-900/60 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {['All', 'Residential', 'Commercial', 'Industrial', 'Luxury Lands'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-xs'
                      : 'text-[#3F3F46] dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right filter controls */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="py-1.5 px-3 bg-white dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-lg text-xs font-semibold text-[#171717] dark:text-purple-100 cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1.5 px-3 bg-white dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 rounded-lg text-xs font-semibold text-[#171717] dark:text-purple-100 cursor-pointer"
              >
                <option value="default">Sort by: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Largest Area</option>
              </select>
            </div>
          </div>
        </div>

        {/* View Modes */}
        {viewMode === 'grid' ? (
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
                      <span className="px-3 py-1 rounded-md bg-[#34073E]/90 text-white backdrop-blur-md text-[11px] font-bold uppercase tracking-wider">
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
                      <div className="text-xl font-bold font-heading text-white tracking-tight">
                        {displayPrice}
                      </div>
                    </div>
                  </div>


                  {/* Details Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#7A2FB0] dark:text-[#B462E8] font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      <h3 
                        onClick={() => onSelectProperty(property)}
                        className="text-lg font-bold font-heading text-[#171717] dark:text-white group-hover:text-[#7A2FB0] dark:group-hover:text-[#B462E8] transition-colors cursor-pointer"
                      >
                        {property.title}
                      </h3>

                      <p className="text-xs text-[#3F3F46] dark:text-purple-200 line-clamp-2 leading-relaxed">
                        {property.description}
                      </p>
                    </div>

                    {/* Specs Bar */}
                    <div className="grid grid-cols-3 gap-2 py-2.5 border-t border-b border-purple-200/80 dark:border-purple-800 text-xs font-semibold text-[#34073E] dark:text-purple-100">
                      {property.beds > 0 && (
                        <div className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-[#7A2FB0] dark:text-[#B462E8]" />
                          <span>{property.beds} Beds</span>
                        </div>
                      )}
                      {property.baths > 0 && (
                        <div className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-[#7A2FB0] dark:text-[#B462E8]" />
                          <span>{property.baths} Baths</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Square className="w-3.5 h-3.5 text-[#7A2FB0] dark:text-[#B462E8]" />
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
        ) : (
          /* Map Canvas */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {filteredProperties.map((prop) => (
                <div
                  key={prop.id}
                  onClick={() => setActiveMapPin(prop)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeMapPin?.id === prop.id
                      ? 'bg-[#34073E] text-white border-[#B462E8] shadow-md'
                      : 'bg-[#FAF7FC] dark:bg-[#34073E] text-[#1F0A26] dark:text-white border-purple-200 dark:border-purple-900 hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#8DC63F]">{prop.priceFormatted}</span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-200/50 dark:bg-purple-900 text-[#34073E] dark:text-purple-200 font-bold">
                      {prop.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold truncate">{prop.title}</h4>
                  <p className="text-xs opacity-75 truncate">{prop.location}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 relative h-[550px] rounded-3xl overflow-hidden border border-purple-900 bg-[#1E0424] text-white p-6 flex flex-col justify-between">
              <div className="relative z-10 flex items-center justify-between glass-card p-3 rounded-xl border border-purple-800">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#8DC63F]" />
                  <span className="text-xs font-mono text-purple-200">
                    Ezeani GIS Verified Map • {filteredProperties.length} Properties
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#8DC63F] bg-[#2A3E12] px-2.5 py-1 rounded-md border border-[#578021]">
                  Titles Verified
                </div>
              </div>

              {/* Pins scatter */}
              <div className="relative z-10 flex-1 my-6 min-h-[300px]">
                {filteredProperties.map((prop, idx) => {
                  const topOffsets = ['20%', '50%', '70%', '35%', '80%'];
                  const leftOffsets = ['25%', '65%', '45%', '80%', '85%'];
                  const isSelected = activeMapPin?.id === prop.id;

                  return (
                    <div
                      key={prop.id}
                      style={{ top: topOffsets[idx % 5], left: leftOffsets[idx % 5] }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        onClick={() => setActiveMapPin(prop)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-lg ${
                          isSelected
                            ? 'bg-[#8DC63F] text-[#34073E] scale-110 ring-4 ring-[#8DC63F]/40'
                            : 'bg-[#34073E] border border-purple-700 text-white hover:bg-purple-900'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#8DC63F]" />
                        <span>{prop.priceFormatted}</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {activeMapPin && (
                <div className="relative z-10 glass-card p-4 rounded-2xl border border-purple-700 bg-[#34073E]/95 text-white flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeMapPin.image}
                      alt={activeMapPin.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <div className="text-xs text-[#8DC63F] font-mono font-bold">{activeMapPin.priceFormatted}</div>
                      <h4 className="text-sm font-bold">{activeMapPin.title}</h4>
                      <div className="text-xs text-purple-200">{activeMapPin.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => onSelectProperty(activeMapPin)}
                      className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white text-xs font-semibold rounded-xl"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenBooking({ category: 'Property Acquisition', propertyTitle: activeMapPin.title })}
                      className="px-4 py-2 bg-[#8DC63F] text-[#34073E] text-xs font-bold rounded-xl"
                    >
                      Book Inspection
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
