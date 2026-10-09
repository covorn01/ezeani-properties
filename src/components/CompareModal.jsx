import React from 'react';
import { X, Check, ShieldCheck, Calendar, Bed, Bath, Square, Building } from 'lucide-react';

export default function CompareModal({ isOpen, onClose, comparedIds, properties, onOpenBooking }) {
  if (!isOpen) return null;

  const comparedProperties = properties.filter((p) => comparedIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E0424]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#2A0631] rounded-[2.25rem] overflow-hidden shadow-2xl border border-purple-200/80 dark:border-purple-800/80 my-auto flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-purple-100 dark:border-purple-900/60 bg-[#FAF7FC] dark:bg-[#1E0424]">
          <div>
            <h3 className="text-base sm:text-lg font-bold font-heading text-[#34073E] dark:text-white">
              Side-by-Side Property Comparison
            </h3>
            <p className="text-xs text-[#52525B] dark:text-purple-300/80 font-mono">
              Comparing {comparedProperties.length} selected estates and plots
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white dark:bg-[#34073E] text-[#34073E] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/80 border border-purple-200/60 dark:border-purple-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Matrix Table */}
        <div className="p-6 overflow-x-auto overflow-y-auto">
          {comparedProperties.length === 0 ? (
            <div className="text-center py-12 text-purple-300 dark:text-purple-600">
              No properties selected for comparison. Click the compare icon on listing cards to view side by side.
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-3.5 text-xs font-mono uppercase text-[#52525B] dark:text-purple-300/70 border-b border-purple-100 dark:border-purple-900/60 w-1/4">
                    Property Spec
                  </th>
                  {comparedProperties.map((p) => (
                    <th key={p.id} className="p-3.5 border-b border-purple-100 dark:border-purple-900/60 w-1/3">
                      <img src={p.image} alt={p.title} className="w-full h-32 object-cover rounded-2xl mb-2.5 shadow-xs" />
                      <div className="text-sm font-bold text-[#34073E] dark:text-white line-clamp-1">{p.title}</div>
                      <div className="text-xs font-bold text-[#34073E] dark:text-[#8DC63F] font-mono mt-0.5">{p.priceFormatted}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-purple-100 dark:divide-purple-900/40 text-[#3F3F46] dark:text-purple-200">
                <tr>
                  <td className="p-3.5 font-semibold text-[#52525B] dark:text-purple-300/70 font-mono">Category & Status</td>
                  {comparedProperties.map((p) => (
                    <td key={p.id} className="p-3.5 font-medium">{p.category} ({p.status})</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#52525B] dark:text-purple-300/70 font-mono">Location</td>
                  {comparedProperties.map((p) => (
                    <td key={p.id} className="p-3.5 font-medium">{p.location}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#52525B] dark:text-purple-300/70 font-mono">Bedrooms / Baths</td>
                  {comparedProperties.map((p) => (
                    <td key={p.id} className="p-3.5 font-medium">{p.beds} Beds / {p.baths} Baths</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#52525B] dark:text-purple-300/70 font-mono">Footprint</td>
                  {comparedProperties.map((p) => (
                    <td key={p.id} className="p-3.5 font-medium">{p.sqft > 0 ? `${p.sqft.toLocaleString()} sqft` : `${p.acres} Acres`}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#52525B] dark:text-purple-300/70 font-mono">Survey Status</td>
                  {comparedProperties.map((p) => (
                    <td key={p.id} className="p-3.5 text-[#8DC63F] font-bold">{p.surveyStatus}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#52525B] dark:text-purple-300/70 font-mono">Action</td>
                  {comparedProperties.map((p) => (
                    <td key={p.id} className="p-3.5">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenBooking({ category: 'Property Acquisition', propertyTitle: p.title });
                        }}
                        className="w-full py-2.5 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] font-bold rounded-xl text-xs transition-all shadow-sm"
                      >
                        Schedule Tour
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}

