import React from 'react';
import { X, Trash2, Calendar, MapPin, Layers, Heart, ArrowRight } from 'lucide-react';

export default function FavoritesDrawer({ 
  isOpen, 
  onClose, 
  favorites, 
  properties, 
  onToggleFavorite, 
  onSelectProperty,
  onOpenBooking,
  comparedIds,
  onToggleCompare,
  onOpenCompare 
}) {
  if (!isOpen) return null;

  const favProperties = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#1E0424]/80 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-[#2A0631] h-full flex flex-col justify-between shadow-2xl border-l border-purple-200/80 dark:border-purple-800/80 rounded-l-[2.25rem] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-purple-100 dark:border-purple-900/60 flex items-center justify-between bg-[#FAF7FC] dark:bg-[#1E0424]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#34073E] text-[#8DC63F] flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <h3 className="text-base font-bold font-heading text-[#34073E] dark:text-white">
              Saved Properties ({favProperties.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white dark:bg-[#34073E] text-[#34073E] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/80 border border-purple-200/60 dark:border-purple-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {favProperties.length === 0 ? (
            <div className="text-center py-20 text-purple-300 dark:text-purple-600 space-y-3">
              <Heart className="w-12 h-12 mx-auto stroke-1" />
              <p className="text-sm font-bold text-[#34073E] dark:text-white">No saved properties yet</p>
              <p className="text-xs text-[#52525B] dark:text-purple-300/70 max-w-xs mx-auto">
                Click the heart icon on any property listing card to save it here for quick access or consultation.
              </p>
            </div>
          ) : (
            favProperties.map((prop) => {
              const isCompared = comparedIds.includes(prop.id);
              return (
                <div
                  key={prop.id}
                  className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-2xl p-4 border border-purple-200/80 dark:border-purple-800/80 flex gap-3.5 shadow-xs relative group"
                >
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 space-y-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#34073E] dark:text-[#8DC63F] font-mono">
                        {prop.priceFormatted}
                      </span>
                      <button
                        onClick={() => onToggleFavorite(prop.id)}
                        className="text-purple-400 hover:text-red-500 transition-colors"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h4 
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      className="text-xs font-bold text-[#34073E] dark:text-white line-clamp-1 hover:underline cursor-pointer"
                    >
                      {prop.title}
                    </h4>

                    <div className="text-[11px] text-[#52525B] dark:text-purple-300/70 truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#8DC63F] shrink-0" />
                      <span className="truncate">{prop.location}</span>
                    </div>

                    <div className="flex items-center gap-3 pt-1.5">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenBooking({ category: 'Property Acquisition', propertyTitle: prop.title });
                        }}
                        className="text-[11px] font-bold text-[#7A2FB0] dark:text-[#B462E8] hover:underline flex items-center gap-1"
                      >
                        <span>Schedule Tour</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {favProperties.length > 0 && (
          <div className="p-5 border-t border-purple-100 dark:border-purple-900/60 bg-[#FAF7FC] dark:bg-[#1E0424] space-y-3">
            {comparedIds.length > 0 && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCompare();
                }}
                className="w-full py-3 bg-[#34073E] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#25042D]"
              >
                <Layers className="w-4 h-4 text-[#8DC63F]" />
                <span>Compare Selected ({comparedIds.length})</span>
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                onOpenBooking({ category: 'Property Acquisition' });
              }}
              className="w-full py-3 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] rounded-xl text-xs font-bold transition-all shadow-md"
            >
              Book General Property Consultation
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

