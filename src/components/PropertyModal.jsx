import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  ShieldCheck, 
  Compass, 
  Calculator, 
  Check, 
  Calendar, 
  FileText, 
  Share2, 
  Heart,
  ChevronLeft,
  ChevronRight,
  Download,
  Building
} from 'lucide-react';

export default function PropertyModal({ property, onClose, onOpenBooking, isFavorite, onToggleFavorite }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'survey' | 'mortgage'

  // Mortgage Calculator state
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRatePct, setInterestRatePct] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  if (!property) return null;

  // Calculate monthly mortgage
  const price = property.price;
  const principal = price * (1 - downPaymentPct / 100);
  const monthlyRate = interestRatePct / 100 / 12;
  const numPayments = loanTermYears * 12;
  const monthlyPayment = Math.round(
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E0424]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#34073E] rounded-3xl overflow-hidden shadow-2xl border border-purple-200 dark:border-purple-800 my-auto flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-200 dark:border-purple-800 bg-[#FAF7FC] dark:bg-[#1E0424] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#34073E] dark:bg-purple-900 text-white text-[11px] font-bold uppercase tracking-wider">
              {property.status}
            </span>
            <span className="text-xs font-mono text-[#52525B] dark:text-purple-300">
              Ref: {property.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(property.id)}
              className={`p-2 rounded-full border transition-all ${
                isFavorite
                  ? 'bg-[#7A2FB0] text-white border-[#7A2FB0]'
                  : 'bg-purple-50 dark:bg-purple-900/60 border-purple-200 dark:border-purple-800 text-[#34073E] dark:text-purple-200 hover:text-[#7A2FB0] dark:hover:text-[#B462E8]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/60 hover:bg-purple-200 text-[#34073E] dark:text-purple-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Gallery Display */}
          <div className="space-y-3">
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-zinc-950">
              <img
                src={property.gallery[activeImageIdx] || property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {/* Prev / Next image arrows */}
              {property.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? property.gallery.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/60 text-white hover:bg-zinc-950 backdrop-blur-xs transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === property.gallery.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/60 text-white hover:bg-zinc-950 backdrop-blur-xs transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {property.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIdx === idx
                        ? 'border-[#8DC63F] scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Key Highlights Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-purple-200 dark:border-purple-800 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#7A2FB0] dark:text-[#B462E8]">
                <MapPin className="w-4 h-4 text-[#8DC63F]" />
                <span>{property.address}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#34073E] dark:text-white">
                {property.title}
              </h2>
            </div>

            <div className="text-left md:text-right">
              <div className="text-3xl font-bold font-heading text-[#34073E] dark:text-white">
                {property.priceFormatted}
              </div>
              <div className="text-xs text-[#52525B] dark:text-purple-300 font-mono">
                Survey & Title Clearance Included
              </div>
            </div>
          </div>

          {/* Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#FAF7FC] dark:bg-[#1E0424] border border-purple-200 dark:border-purple-800 text-[#34073E] dark:text-purple-200 text-xs font-semibold">
            {property.beds > 0 && (
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
                <div>
                  <div className="text-[10px] text-[#52525B] dark:text-purple-300 uppercase font-mono">Bedrooms</div>
                  <div>{property.beds} Beds</div>
                </div>
              </div>
            )}
            {property.baths > 0 && (
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
                <div>
                  <div className="text-[10px] text-[#52525B] dark:text-purple-300 uppercase font-mono">Bathrooms</div>
                  <div>{property.baths} Baths</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Square className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
              <div>
                <div className="text-[10px] text-[#52525B] dark:text-purple-300 uppercase font-mono">Footprint</div>
                <div>{property.sqft > 0 ? `${property.sqft.toLocaleString()} sqft` : `${property.acres} Acres`}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
              <div>
                <div className="text-[10px] text-[#52525B] dark:text-purple-300 uppercase font-mono">Developer</div>
                <div>{property.builder}</div>
              </div>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-purple-200 dark:border-purple-800 pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#34073E] text-white dark:bg-[#8DC63F] dark:text-[#1E0424]'
                  : 'text-[#52525B] hover:text-[#34073E] dark:hover:text-white'
              }`}
            >
              Overview & Features
            </button>
            <button
              onClick={() => setActiveTab('survey')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'survey'
                  ? 'bg-[#34073E] text-white dark:bg-[#8DC63F] dark:text-[#1E0424]'
                  : 'text-[#52525B] hover:text-[#34073E] dark:hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Survey & Legal Report</span>
            </button>
            <button
              onClick={() => setActiveTab('mortgage')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'mortgage'
                  ? 'bg-[#34073E] text-white dark:bg-[#8DC63F] dark:text-[#1E0424]'
                  : 'text-[#52525B] hover:text-[#34073E] dark:hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Financing Estimator</span>
            </button>
          </div>

          {/* Tab Content 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-5 text-sm text-[#3F3F46] dark:text-purple-200 leading-relaxed">
              <p>{property.description}</p>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#34073E] dark:text-white mb-3">
                  Property & Site Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#34073E] dark:text-purple-200">
                      <div className="w-4 h-4 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Survey & Legal */}
          {activeTab === 'survey' && (
            <div className="space-y-4 bg-[#34073E] text-white p-5 rounded-2xl border border-purple-800">
              <div className="flex items-center justify-between border-b border-purple-800 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#8DC63F]" />
                  <span className="font-bold text-sm">Certified Land Survey Status</span>
                </div>
                <span className="text-xs font-mono text-[#8DC63F] bg-[#1E0424] px-2.5 py-1 rounded-md border border-[#8DC63F]/40 font-bold">
                  {property.surveyStatus}
                </span>
              </div>

              <p className="text-xs text-purple-200 leading-relaxed">
                {property.surveyDetails}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#1E0424]/80 rounded-xl border border-purple-800/40">
                  <div className="text-purple-300 text-[10px] uppercase font-mono">Geotechnical Clearance</div>
                  <div className="font-semibold text-[#FAF7FC]">Approved for Heavy Foundation Load</div>
                </div>
                <div className="p-3 bg-[#1E0424]/80 rounded-xl border border-purple-800/40">
                  <div className="text-purple-300 text-[10px] uppercase font-mono">Boundary Encroachment Audit</div>
                  <div className="font-semibold text-[#FAF7FC]">Zero (0) Boundary Disputes</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Financing Estimator */}
          {activeTab === 'mortgage' && (
            <div className="space-y-5 bg-[#FAF7FC] dark:bg-[#1E0424] p-5 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-200 dark:border-purple-800 pb-4">
                <div>
                  <div className="text-xs font-mono text-[#52525B] uppercase">Estimated Monthly Payment</div>
                  <div className="text-3xl font-bold font-heading text-[#34073E] dark:text-white">
                    ${monthlyPayment.toLocaleString()} <span className="text-xs text-[#52525B] font-sans">/ mo</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking({ category: 'Property Acquisition', notes: `Inquiring about financing options for ${property.title}` })}
                  className="px-4 py-2 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] rounded-xl text-xs font-bold shadow-xs transition-all"
                >
                  Consult Mortgage Advisor
                </button>
              </div>

              {/* Slider Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium">
                <div>
                  <label className="flex justify-between text-[#34073E] dark:text-purple-200 mb-1">
                    <span>Down Payment ({downPaymentPct}%)</span>
                    <span>${(price * (downPaymentPct / 100)).toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={downPaymentPct}
                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                    className="w-full accent-[#8DC63F] cursor-pointer"
                  />
                </div>

                <div>
                  <label className="flex justify-between text-[#34073E] dark:text-purple-200 mb-1">
                    <span>Interest Rate</span>
                    <span>{interestRatePct}%</span>
                  </label>
                  <input
                    type="range"
                    min="3.0"
                    max="12.0"
                    step="0.1"
                    value={interestRatePct}
                    onChange={(e) => setInterestRatePct(Number(e.target.value))}
                    className="w-full accent-[#8DC63F] cursor-pointer"
                  />
                </div>

                <div>
                  <label className="flex justify-between text-[#34073E] dark:text-purple-200 mb-1">
                    <span>Loan Term</span>
                    <span>{loanTermYears} Years</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="30"
                    step="5"
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    className="w-full accent-[#8DC63F] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer CTA Sticky Bar */}
        <div className="p-4 bg-[#FAF7FC] dark:bg-[#1E0424] border-t border-purple-200 dark:border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
          <div className="text-xs text-[#3F3F46] dark:text-purple-300 font-medium hidden sm:block">
            Want to inspect this property on site with an Ezeani advisor?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking({
                category: 'Land Surveying',
                propertyTitle: property.title,
                notes: `Requesting land survey verification for ${property.title} at ${property.address}`
              })}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-purple-300 dark:border-purple-700 text-[#34073E] dark:text-white hover:bg-purple-50 dark:hover:bg-purple-900 text-xs font-semibold transition-all"
            >
              <Compass className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8]" />
              <span>Verify Survey</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking({
                  category: 'Property Acquisition',
                  propertyTitle: property.title,
                  propertyId: property.id
                });
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] px-6 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Private Site Visit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
