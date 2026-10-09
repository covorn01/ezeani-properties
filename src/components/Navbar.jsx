import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Compass, 
  HardHat, 
  Search, 
  Calendar, 
  Heart, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  MessageSquare,
  FileCheck,
  ChevronDown,
  Layers,
  Globe,
  Newspaper,
  Briefcase,
  PhoneCall,
  ShieldCheck,
  MapPin,
  Lock
} from 'lucide-react';
import { EZEANI_COMPANY_INFO } from '../data/mockData';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  activeSection, 
  setActiveSection, 
  favoritesCount, 
  onOpenFavorites, 
  onOpenBooking,
  onOpenMyBookings,
  comparedCount,
  onOpenCompare,
  currency,
  setCurrency,
  onOpenNews,
  onOpenCareers,
  onOpenContacts,
  onOpenAdmin
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown states
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const propDropdownRef = useRef(null);
  const srvDropdownRef = useRef(null);
  const currDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (propDropdownRef.current && !propDropdownRef.current.contains(event.target)) {
        setPropertiesDropdownOpen(false);
      }
      if (srvDropdownRef.current && !srvDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (currDropdownRef.current && !currDropdownRef.current.contains(event.target)) {
        setCurrencyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setPropertiesDropdownOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav shadow-md border-b border-purple-200/50 dark:border-purple-900/50 py-3' 
        : 'bg-white/90 dark:bg-[#1E0424]/90 backdrop-blur-md py-4 border-b border-purple-100 dark:border-purple-900/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Ezeani Brand Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#34073E] flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform border border-purple-800">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50 L30 20 L50 35 L70 20 L80 50 Z" fill="#B462E8" />
                <rect x="38" y="52" width="24" height="36" rx="4" fill="#8DC63F" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-[#34073E] dark:text-white leading-tight">
                EZEANI
              </span>
              <span className="text-[10px] tracking-widest text-[#7A2FB0] dark:text-[#B462E8] font-mono uppercase font-semibold">
                PROPERTIES LTD
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 font-sans">
            
            {/* 1. Properties Dropdown */}
            <div className="relative" ref={propDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setPropertiesDropdownOpen(!propertiesDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeSection === 'properties'
                    ? 'text-[#7A2FB0] dark:text-[#B462E8] bg-purple-50 dark:bg-purple-950/60'
                    : 'text-[#34073E] dark:text-purple-100 hover:text-[#7A2FB0] dark:hover:text-[#B462E8]'
                }`}
              >
                <span>Properties</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${propertiesDropdownOpen ? 'rotate-180 text-[#8DC63F]' : ''}`} />
              </button>

              {propertiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#34073E] rounded-2xl p-2 shadow-2xl border border-purple-200 dark:border-purple-800 space-y-1 animate-fade-in z-50">
                  <button
                    onClick={() => scrollToSection('properties')}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1F0A26] dark:text-purple-100 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center justify-between"
                  >
                    <span>All Property Directory</span>
                    <Building2 className="w-3.5 h-3.5 text-[#7A2FB0]" />
                  </button>
                  <button
                    onClick={() => scrollToSection('properties')}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1F0A26] dark:text-purple-100 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center justify-between"
                  >
                    <span>Residential Real Estate</span>
                    <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Villas</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('properties')}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1F0A26] dark:text-purple-100 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center justify-between"
                  >
                    <span>Commercial Real Estate</span>
                    <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Towers</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('properties')}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1F0A26] dark:text-purple-100 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center justify-between"
                  >
                    <span>Industrial Real Estate</span>
                    <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Hubs</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('properties')}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1F0A26] dark:text-purple-100 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center justify-between"
                  >
                    <span>Luxury Lands</span>
                    <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Plots</span>
                  </button>
                </div>
              )}
            </div>

            {/* 2. About */}
            <button
              onClick={() => scrollToSection('about')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSection === 'about'
                  ? 'text-[#7A2FB0] dark:text-[#B462E8] bg-purple-50 dark:bg-purple-950/60'
                  : 'text-[#34073E] dark:text-purple-100 hover:text-[#7A2FB0] dark:hover:text-[#B462E8]'
              }`}
            >
              About
            </button>

            {/* 3. Services (Land Surveying & GIS) */}
            <button
              onClick={() => scrollToSection('surveying')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSection === 'surveying'
                  ? 'text-[#7A2FB0] dark:text-[#B462E8] bg-purple-50 dark:bg-purple-950/60'
                  : 'text-[#34073E] dark:text-purple-100 hover:text-[#7A2FB0] dark:hover:text-[#B462E8]'
              }`}
            >
              Services
            </button>

            {/* 4. News */}
            <button
              onClick={onOpenNews}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#34073E] dark:text-purple-100 hover:text-[#7A2FB0] dark:hover:text-[#B462E8] transition-all"
            >
              News
            </button>

            {/* 5. Careers */}
            <button
              onClick={onOpenCareers}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#34073E] dark:text-purple-100 hover:text-[#7A2FB0] dark:hover:text-[#B462E8] transition-all"
            >
              Careers
            </button>

            {/* 6. Contacts */}
            <button
              onClick={onOpenContacts}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#34073E] dark:text-purple-100 hover:text-[#7A2FB0] dark:hover:text-[#B462E8] transition-all"
            >
              Contacts
            </button>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Currency Selector (NGN / USD) */}
            <div className="relative" ref={currDropdownRef}>
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-[#34073E] text-xs font-bold text-[#34073E] dark:text-white hover:border-[#7A2FB0] transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#8DC63F]" />
                <span>{currency === 'USD' ? 'USD $' : 'NGN ₦'}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-[#34073E] rounded-xl p-1 shadow-xl border border-purple-200 dark:border-purple-800 z-50">
                  <button
                    onClick={() => {
                      setCurrency('NGN');
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between ${
                      currency === 'NGN' ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424]' : 'text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900'
                    }`}
                  >
                    <span>NGN (₦)</span>
                    {currency === 'NGN' && <span className="text-[10px]">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      setCurrency('USD');
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between ${
                      currency === 'USD' ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424]' : 'text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900'
                    }`}
                  >
                    <span>USD ($)</span>
                    {currency === 'USD' && <span className="text-[10px]">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Compare Shortcut */}
            {comparedCount > 0 && (
              <button
                onClick={onOpenCompare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#8DC63F] bg-[#8DC63F]/10 text-xs font-bold text-[#34073E] dark:text-[#8DC63F] hover:bg-[#8DC63F]/20 transition-all"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Compare ({comparedCount})</span>
              </button>
            )}

            {/* Saved Favorites */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-full text-[#34073E] dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
              title="Saved Properties"
            >
              <Heart className="w-4 h-4 text-[#7A2FB0] dark:text-[#B462E8] fill-[#7A2FB0]/20 dark:fill-[#B462E8]/20" />
              {favoritesCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#8DC63F] text-[#34073E] rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Consultation CTA (Door Green #8DC63F) */}
            <button
              onClick={() => onOpenBooking(null)}
              className="flex items-center gap-2 bg-[#8DC63F] hover:bg-[#9ECF52] text-[#34073E] px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-[#34073E] dark:text-purple-200"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#34073E] dark:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-purple-200 dark:border-purple-900 px-4 pt-4 pb-6 mt-2 space-y-3 animate-fade-in">
          <div className="space-y-1">
            <button
              onClick={() => scrollToSection('properties')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              Properties Directory
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              About Ezeani
            </button>
            <button
              onClick={() => scrollToSection('surveying')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              Land Surveying & GIS Services
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenNews(); }}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              Company News & Insights
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCareers(); }}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              Careers at Ezeani
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContacts(); }}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-[#34073E] dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              Contact & Offices
            </button>
          </div>

          <div className="pt-2 border-t border-purple-200 dark:border-purple-900 flex flex-col gap-2">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-[#34073E] dark:text-purple-200">Currency Display:</span>
              <button
                onClick={() => setCurrency(currency === 'USD' ? 'NGN' : 'USD')}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-lg text-xs font-bold text-[#7A2FB0] dark:text-[#B462E8]"
              >
                {currency === 'USD' ? 'USD ($)' : 'NGN (₦)'}
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking(null);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#8DC63F] text-[#34073E] py-3 rounded-lg text-xs font-bold shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
