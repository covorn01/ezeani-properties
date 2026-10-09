import React from 'react';
import { X, Newspaper, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/mockData';

export default function NewsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1E0424]/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#34073E] max-w-3xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 space-y-6 border border-purple-200 dark:border-purple-800 shadow-2xl overflow-y-auto">
        
        <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] flex items-center justify-center font-bold">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-[#171717] dark:text-white">
                Ezeani Group News & Market Insights
              </h3>
              <p className="text-xs text-[#3F3F46] dark:text-purple-200">Latest announcements, cadastral updates & real estate research</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-purple-400 hover:text-purple-600 dark:hover:text-white text-xs font-mono font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-2xl p-5 border border-purple-200 dark:border-purple-800 flex flex-col md:flex-row gap-5 items-start"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full md:w-48 h-36 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] font-bold font-mono text-[10px]">
                    {article.category}
                  </span>
                  <span className="text-[#52525B] dark:text-purple-300 font-mono text-[11px]">{article.date}</span>
                  <span className="text-[#52525B] dark:text-purple-300 font-mono text-[11px]">• {article.readTime}</span>
                </div>
                <h4 className="text-base font-bold font-heading text-[#171717] dark:text-white leading-snug">
                  {article.title}
                </h4>
                <p className="text-xs text-[#3F3F46] dark:text-purple-200 leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-2 border-t border-purple-200 dark:border-purple-800">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#34073E] dark:bg-[#B462E8] text-white dark:text-[#1E0424] rounded-xl text-xs font-bold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
