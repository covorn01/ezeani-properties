import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Building2, 
  FileText, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  Clock, 
  Search, 
  Upload, 
  X, 
  Image as ImageIcon, 
  Compass, 
  Eye, 
  Save, 
  Check, 
  Copy, 
  ExternalLink,
  ShieldCheck,
  Users,
  DollarSign,
  ArrowUpRight,
  Filter,
  RefreshCw,
  LogOut,
  MapPin,
  Sparkles,
  Lock,
  KeyRound,
  Sun,
  Moon,
  AlertTriangle,
  Film,
  Video,
  Play,
  Menu,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { formatCurrencyPrice } from '../data/mockData';

export default function AdminDashboard({ 
  isOpen, 
  onClose, 
  properties = [], 
  onAddProperty, 
  onUpdateProperty, 
  onDeleteProperty,
  bookings = [], 
  onUpdateBookingStatus,
  onDeleteBooking,
  companyInfo = {},
  onUpdateCompanyInfo,
  onOpenLiveSite
}) {
  // Staff Security Authentication Gate State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('ezeani_staff_auth') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [authForm, setAuthForm] = useState({ staffId: 'admin@ezeaniproperties.com', pin: '' });
  const [authError, setAuthError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);

  // Theme State: 'dark' | 'light'
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('ezeani_admin_theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('ezeani_admin_theme', nextTheme);
  };

  // Sidebar & Navigation State
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'consultations' | 'properties' | 'content' | 'media'
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Schedule Manager Search & Filter
  const [bookingSearch, setBookingSearch] = useState('');
  const [bookingFilterStatus, setBookingFilterStatus] = useState('All');

  // Property Listing Editor State
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [propForm, setPropForm] = useState({
    title: '',
    category: 'Residential',
    status: 'For Sale',
    price: 150000000,
    location: 'Lekki Phase 1, Lagos',
    address: 'Admiralty Way, Lekki, Lagos',
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    acres: 0.25,
    image: '/images/hero-villa.jpg',
    surveyStatus: "Verified Governor's Consent & C of O",
    description: '',
    features: ['Verified Title Certificate', '24/7 Gated Security', 'Solar Power Integration']
  });

  // Copy Editor State
  const [copyForm, setCopyForm] = useState({
    headline: companyInfo.headline || "Every kind of property, one trusted partner.",
    subheadline: companyInfo.subheadline || "Residential, commercial and industrial real estate, luxury lands and expert consultation, delivered nationwide.",
    phone: companyInfo.phone || "0902 171 0933",
    whatsapp: companyInfo.whatsapp || "+2349021710933",
    email: companyInfo.email || "info@ezeaniproperties.com",
    lagosOffice: companyInfo.offices?.[0]?.address || "Plot 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
    abujaOffice: companyInfo.offices?.[1]?.address || "Suite 402, Capital Place, Maitama, Abuja, Nigeria"
  });
  const [copySaved, setCopySaved] = useState(false);

  // Media & Video Hub State
  const [mediaList, setMediaList] = useState([
    { id: 'm1', name: 'hero-villa.jpg', type: 'image', url: '/images/hero-villa.jpg', size: '2.4 MB', date: '2026-10-01' },
    { id: 'm2', name: 'hero-commercial.jpg', type: 'image', url: '/images/hero-commercial.jpg', size: '3.1 MB', date: '2026-10-02' },
    { id: 'm3', name: 'hero-surveyor.jpg', type: 'image', url: '/images/hero-surveyor.jpg', size: '1.8 MB', date: '2026-10-03' },
    { id: 'm4', name: 'hero-construction.jpg', type: 'image', url: '/images/hero-construction.jpg', size: '2.9 MB', date: '2026-10-04' },
    { id: 'm5', name: 'mansion.jpg', type: 'image', url: '/images/mansion.jpg', size: '2.1 MB', date: '2026-10-05' },
    { id: 'm6', name: 'Ezeani Drone Survey Overview', type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', size: 'HD Video', date: '2026-10-06' }
  ]);

  // Upload States (Max 5MB for images, URL required for video)
  const [uploadMode, setUploadMode] = useState('image'); // 'image' | 'video'
  const [selectedFileError, setSelectedFileError] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [videoUrlInput, setVideoUrlInput] = useState('');
  const [copiedMediaId, setCopiedMediaId] = useState(null);

  if (!isOpen) return null;

  // Handle Staff Login Authentication
  const handleStaffLogin = (e) => {
    e.preventDefault();
    if (isLockedOut) return;

    // Allowed demo PINs: 8844, 2026, or 1234
    const validPins = ['8844', '2026', '1234', 'admin'];
    
    if (validPins.includes(authForm.pin.trim())) {
      setIsAuthenticated(true);
      sessionStorage.setItem('ezeani_staff_auth', 'true');
      setAuthError('');
      setFailedAttempts(0);
    } else {
      const attempts = failedAttempts + 1;
      setFailedAttempts(attempts);
      if (attempts >= 3) {
        setIsLockedOut(true);
        setAuthError('Too many failed attempts. Security lock engaged for 15 seconds.');
        setTimeout(() => {
          setIsLockedOut(false);
          setFailedAttempts(0);
          setAuthError('');
        }, 15000);
      } else {
        setAuthError(`Invalid Staff PIN. ${3 - attempts} attempt(s) remaining. (Demo PIN: 8844 or 2026)`);
      }
    }
  };

  const handleStaffLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ezeani_staff_auth');
    setAuthForm({ staffId: 'admin@ezeaniproperties.com', pin: '' });
  };

  // Filter Bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch = 
      b.clientName.toLowerCase().includes(bookingSearch.toLowerCase()) ||
      b.id.toLowerCase().includes(bookingSearch.toLowerCase()) ||
      b.serviceCategory.toLowerCase().includes(bookingSearch.toLowerCase());
    
    if (bookingFilterStatus === 'All') return matchesSearch;
    return matchesSearch && b.status === bookingFilterStatus;
  });

  // Handle Save Copy
  const handleSaveCopy = (e) => {
    e.preventDefault();
    if (onUpdateCompanyInfo) {
      onUpdateCompanyInfo({
        ...companyInfo,
        headline: copyForm.headline,
        subheadline: copyForm.subheadline,
        phone: copyForm.phone,
        whatsapp: copyForm.whatsapp,
        email: copyForm.email,
        offices: [
          { city: "Lagos Office", address: copyForm.lagosOffice },
          { city: "Abuja Office", address: copyForm.abujaOffice }
        ]
      });
    }
    setCopySaved(true);
    setTimeout(() => setCopySaved(false), 3000);
  };

  // Handle Property Save (Create / Update)
  const handleSaveProperty = (e) => {
    e.preventDefault();
    if (!propForm.title || !propForm.price) {
      alert('Please fill in property title and price.');
      return;
    }

    const priceFormatted = `₦${Number(propForm.price).toLocaleString()}`;
    const newProp = {
      ...propForm,
      id: editingProperty ? editingProperty.id : `ez-prop-${Date.now()}`,
      priceFormatted,
      gallery: [propForm.image, '/images/hero-surveyor.jpg']
    };

    if (editingProperty) {
      if (onUpdateProperty) onUpdateProperty(newProp);
    } else {
      if (onAddProperty) onAddProperty(newProp);
    }

    setIsPropertyModalOpen(false);
    setEditingProperty(null);
  };

  // Open Property Modal for Editing
  const openEditProperty = (prop) => {
    setEditingProperty(prop);
    setPropForm({
      title: prop.title,
      category: prop.category,
      status: prop.status,
      price: prop.price,
      location: prop.location,
      address: prop.address || prop.location,
      beds: prop.beds || 0,
      baths: prop.baths || 0,
      sqft: prop.sqft || 0,
      acres: prop.acres || 0,
      image: prop.image,
      surveyStatus: prop.surveyStatus || "Verified C of O",
      description: prop.description || '',
      features: prop.features || ['Verified Title']
    });
    setIsPropertyModalOpen(true);
  };

  // Image Upload File Handling with 5MB validation
  const handleImageFileChange = (e, target = 'media') => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 5MB Limit Validation (5 * 1024 * 1024 bytes)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedFileError(`File size (${sizeMB} MB) exceeds the maximum allowed 5MB limit. Please select a smaller image.`);
      return;
    }

    setSelectedFileError('');
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const resultUrl = uploadEvent.target.result;
      if (target === 'property') {
        setPropForm((prev) => ({ ...prev, image: resultUrl }));
      } else {
        const newAsset = {
          id: `m-${Date.now()}`,
          name: file.name,
          type: 'image',
          url: resultUrl,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          date: new Date().toISOString().split('T')[0]
        };
        setMediaList([newAsset, ...mediaList]);
      }
    };
    reader.readAsDataURL(file);
  };

  // Video URL Addition
  const handleAddVideoUrl = (e) => {
    e.preventDefault();
    if (!videoUrlInput) return;
    const newVideo = {
      id: `v-${Date.now()}`,
      name: videoUrlInput.split('/').pop() || 'Property Video Showcase',
      type: 'video',
      url: videoUrlInput,
      size: 'Streaming Video',
      date: new Date().toISOString().split('T')[0]
    };
    setMediaList([newVideo, ...mediaList]);
    setVideoUrlInput('');
  };

  // Delete Media
  const handleDeleteMedia = (id) => {
    setMediaList((prev) => prev.filter((m) => m.id !== id));
  };

  // Render Authentication Modal if staff is not authenticated
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-[#1E0424]/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-[#34073E] text-white w-full max-w-md rounded-[2.5rem] border border-purple-800/80 shadow-2xl p-8 space-y-7 relative overflow-hidden">
          
          {/* Subtle Glow Background Accent */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8DC63F]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Modal Header */}
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#8DC63F] text-[#1E0424] mx-auto flex items-center justify-center shadow-lg font-bold">
              <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#8DC63F]/30">
                Restricted Staff Gate
              </span>
              <h2 className="text-2xl font-bold font-heading mt-2">Staff Portal Access</h2>
              <p className="text-xs text-purple-200/80 mt-1">
                Ezeani Properties Ltd • Authorized Personnel Only
              </p>
            </div>
          </div>

          {/* Security Alert Banner */}
          <div className="p-3.5 bg-purple-950/60 rounded-2xl border border-purple-800/80 text-[11px] text-purple-200 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-[#8DC63F] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Public Access Blocked</p>
              <p className="text-purple-300/80 mt-0.5">This administrative portal is locked. Please authenticate with your staff credential key.</p>
            </div>
          </div>

          {authError && (
            <div className="p-3.5 bg-red-950/80 text-red-200 border border-red-800/80 rounded-2xl text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleStaffLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-purple-200">Staff Identity / Email</label>
              <input
                type="email"
                required
                value={authForm.staffId}
                onChange={(e) => setAuthForm({ ...authForm, staffId: e.target.value })}
                placeholder="staff@ezeaniproperties.com"
                className="w-full p-3.5 bg-[#1E0424] border border-purple-800/80 rounded-xl text-xs font-medium text-white focus:outline-none focus:border-[#8DC63F]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-purple-200">Staff PIN / Security Passcode</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={authForm.pin}
                  onChange={(e) => setAuthForm({ ...authForm, pin: e.target.value })}
                  placeholder="Enter 4-digit PIN (Demo: 8844)"
                  className="w-full pl-3.5 pr-10 py-3.5 bg-[#1E0424] border border-purple-800/80 rounded-xl text-xs font-medium text-white focus:outline-none focus:border-[#8DC63F]"
                />
                <KeyRound className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-purple-900/60 hover:bg-purple-900 text-purple-200 text-xs font-semibold"
              >
                Return to Site
              </button>
              <button
                type="submit"
                disabled={isLockedOut}
                className="px-6 py-3 rounded-xl bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] text-xs font-bold shadow-lg transition-all active:scale-98 disabled:opacity-50"
              >
                Verify & Unlock Portal
              </button>
            </div>
          </form>

          <div className="text-center border-t border-purple-800/60 pt-4 text-[10px] text-purple-300/70 font-mono">
            Demo Key PIN: <span className="text-[#8DC63F] font-bold">8844</span> or <span className="text-[#8DC63F] font-bold">2026</span>
          </div>

        </div>
      </div>
    );
  }

  // Theme Specific Classes
  const isDark = theme === 'dark';
  const bgMain = isDark ? 'bg-[#120217] text-white' : 'bg-[#FAF7FC] text-[#1F0A26]';
  const bgSidebar = isDark ? 'bg-[#1E0424] border-purple-900/60' : 'bg-white border-purple-200';
  const bgCard = isDark ? 'bg-[#2A0631] border-purple-800/80' : 'bg-white border-purple-200/80';
  const textMuted = isDark ? 'text-purple-300/80' : 'text-[#52525B]';
  const textHeading = isDark ? 'text-white' : 'text-[#34073E]';
  const bgSubtle = isDark ? 'bg-[#1E0424]' : 'bg-[#FAF7FC]';

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden ${bgMain} flex animate-fade-in font-sans`}>
      
      {/* ========================================================= */}
      {/* SIDE NAVIGATION BAR */}
      {/* ========================================================= */}
      <aside className={`w-72 shrink-0 ${bgSidebar} border-r flex flex-col justify-between p-5 transition-all z-20`}>
        
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center justify-between pb-4 border-b border-purple-800/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#8DC63F] text-[#1E0424] font-bold flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h1 className={`text-base font-bold font-heading tracking-tight ${textHeading}`}>
                  Ezeani Staff Portal
                </h1>
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] font-mono text-[9px] font-bold uppercase tracking-wider">
                  Admin Command
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: 'overview', label: 'Overview & Analytics', icon: BarChart3 },
              { id: 'consultations', label: 'Booked Schedules', icon: Calendar, badge: bookings.length },
              { id: 'properties', label: 'Land & Property Assets', icon: Building2, badge: properties.length },
              { id: 'content', label: 'Website Copy Editor', icon: Edit3 },
              { id: 'media', label: 'Media & Video Hub', icon: ImageIcon, badge: mediaList.length },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#8DC63F] text-[#1E0424] shadow-md'
                      : isDark
                      ? 'text-purple-200 hover:bg-purple-900/40 hover:text-white'
                      : 'text-[#34073E] hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4.5 h-4.5" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge !== undefined && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isActive ? 'bg-[#1E0424] text-[#8DC63F]' : isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-[#34073E]'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Controls */}
        <div className="space-y-4 pt-4 border-t border-purple-800/40">
          
          {/* Light / Dark Mode Switcher with Real Interactive Toggle Switch */}
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
              isDark 
                ? 'bg-purple-950/60 border-purple-800 text-purple-200 hover:bg-purple-900' 
                : 'bg-purple-50 border-purple-200 text-[#34073E] hover:bg-purple-100'
            }`}
          >
            <div className="flex items-center gap-2">
              {isDark ? <Moon className="w-4 h-4 text-[#8DC63F]" /> : <Sun className="w-4 h-4 text-amber-500" />}
              <span>{isDark ? 'Dark Theme' : 'Light Theme'}</span>
            </div>

            {/* Interactive Toggle Switch Pill */}
            <div className={`w-10 h-5.5 rounded-full p-0.5 flex items-center transition-colors duration-300 ${
              isDark ? 'bg-[#8DC63F]' : 'bg-purple-300'
            }`}>
              <div className={`w-4.5 h-4.5 rounded-full bg-[#34073E] shadow-md transition-transform duration-300 transform ${
                isDark ? 'translate-x-4.5' : 'translate-x-0'
              }`} />
            </div>
          </button>

          {/* Staff User Profile Card */}
          <div className={`p-3.5 rounded-2xl ${bgSubtle} border border-purple-800/40 flex items-center justify-between`}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#34073E] text-[#8DC63F] border border-[#8DC63F]/40 flex items-center justify-center font-bold text-xs">
                EA
              </div>
              <div>
                <div className={`text-xs font-bold ${textHeading}`}>Engr. Ezeani Staff</div>
                <span className="text-[10px] text-[#8DC63F] font-mono">Lead Administrator</span>
              </div>
            </div>

            <button
              onClick={handleStaffLogout}
              className="p-1.5 text-purple-400 hover:text-red-400 rounded-lg"
              title="Lock Staff Portal / Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#34073E] hover:bg-[#25042D] text-white text-xs font-semibold shadow-sm"
          >
            <Eye className="w-4 h-4 text-[#8DC63F]" />
            <span>Return to Website</span>
          </button>

        </div>
      </aside>

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================= */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header Strip */}
        <header className={`sticky top-0 z-10 ${bgSidebar} border-b px-8 py-4 flex items-center justify-between`}>
          <div>
            <h2 className={`text-lg font-bold font-heading ${textHeading}`}>
              {activeTab === 'overview' && 'Executive Performance & Operational Stream'}
              {activeTab === 'consultations' && 'Consultation Operations & Schedule Tracker'}
              {activeTab === 'properties' && 'Real Estate & Land Asset Portfolio'}
              {activeTab === 'content' && 'Live Website Copy & Brand Configuration'}
              {activeTab === 'media' && 'Media Assets & Video Showcase Manager'}
            </h2>
            <p className={`text-xs ${textMuted}`}>
              Ezeani Properties Ltd • Certified Surveying & Real Estate Command Portal
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] text-xs font-mono font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse" />
              Staff Auth Active
            </span>
            <button
              onClick={onClose}
              className={`p-2 rounded-full ${isDark ? 'bg-purple-900/60 hover:bg-purple-800 text-purple-200' : 'bg-purple-100 hover:bg-purple-200 text-[#34073E]'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content Body Container */}
        <div className="p-8 space-y-6">
          
          {/* TAB 1: OVERVIEW & PERFORMANCE */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Total Site Visits</span>
                    <div className="w-9 h-9 rounded-xl bg-purple-900/40 text-[#B462E8] flex items-center justify-center font-bold">
                      <Users className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>42,850</div>
                    <div className="flex items-center gap-1.5 text-xs text-[#8DC63F] font-bold mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+18.4% this month</span>
                    </div>
                  </div>
                </div>

                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Booked Schedules</span>
                    <div className="w-9 h-9 rounded-xl bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center font-bold">
                      <Calendar className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>{bookings.length + 27}</div>
                    <div className={`text-xs ${textMuted} font-medium mt-1`}>
                      {bookings.filter(b => b.status === 'Confirmed').length} Confirmed Site Tours
                    </div>
                  </div>
                </div>

                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Portfolio Valuation</span>
                    <div className="w-9 h-9 rounded-xl bg-purple-900/40 text-[#B462E8] flex items-center justify-center font-bold">
                      <Building2 className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>₦2.15 Billion</div>
                    <div className={`text-xs ${textMuted} font-medium mt-1`}>
                      {properties.length} Verified Listings
                    </div>
                  </div>
                </div>

                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Title Accuracy</span>
                    <div className="w-9 h-9 rounded-xl bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>100%</div>
                    <div className="text-xs text-[#8DC63F] font-bold mt-1">
                      Certified Surveyor Verification
                    </div>
                  </div>
                </div>

              </div>

              {/* Performance Visualizer Chart & Stream */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                <div className={`lg:col-span-8 ${bgCard} p-7 rounded-[2.25rem] shadow-md space-y-6 border`}>
                  <div className="flex items-center justify-between pb-4 border-b border-purple-800/40">
                    <div>
                      <h3 className={`text-lg font-bold font-heading ${textHeading}`}>
                        Inquiries & Site Tour Operations
                      </h3>
                      <p className={`text-xs ${textMuted}`}>
                        Monthly Land Survey Searches, Site Visits & Acquisition Bookings
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#34073E] text-[#8DC63F] font-mono text-xs font-bold">
                      Q4 2026 Metrics
                    </div>
                  </div>

                  <div className="h-60 flex items-end justify-between gap-3 sm:gap-6 pt-6 pb-1 px-2 overflow-hidden">
                    {[
                      { month: 'May', tours: 40, surveys: 65 },
                      { month: 'Jun', tours: 55, surveys: 70 },
                      { month: 'Jul', tours: 70, surveys: 85 },
                      { month: 'Aug', tours: 60, surveys: 90 },
                      { month: 'Sep', tours: 85, surveys: 110 },
                      { month: 'Oct', tours: 100, surveys: 130 }
                    ].map((bar, idx) => {
                      const maxVal = 140; // Max scale upper bound
                      const toursHeight = Math.min((bar.tours / maxVal) * 100, 88);
                      const surveysHeight = Math.min((bar.surveys / maxVal) * 100, 88);

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                          <div className="w-full flex items-end justify-center gap-1.5 h-full max-h-[85%]">
                            {/* Tour Bar */}
                            <div 
                              className="w-1/2 bg-[#34073E] dark:bg-purple-600 rounded-t-xl transition-all group-hover:bg-[#7A2FB0] relative" 
                              style={{ height: `${toursHeight}%` }}
                              title={`${bar.month}: ${bar.tours} Site Tours`}
                            />
                            {/* Survey Bar */}
                            <div 
                              className="w-1/2 bg-[#8DC63F] rounded-t-xl transition-all group-hover:bg-[#7bb532] relative" 
                              style={{ height: `${surveysHeight}%` }}
                              title={`${bar.month}: ${bar.surveys} Title Searches`}
                            />
                          </div>
                          <span className={`text-[11px] font-mono font-bold ${textMuted}`}>{bar.month}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-3 border-t border-purple-800/40 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#34073E]" />
                      <span className={textHeading}>Site Tour Requests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#8DC63F]" />
                      <span className={textHeading}>Land Survey Searches</span>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-4 ${bgCard} p-7 rounded-[2.25rem] shadow-md space-y-5 border`}>
                  <div className="flex items-center justify-between pb-3 border-b border-purple-800/40">
                    <h3 className={`text-base font-bold font-heading ${textHeading}`}>
                      Live System Activity
                    </h3>
                    <Sparkles className="w-4 h-4 text-[#8DC63F]" />
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { title: 'New Consultation Booked', desc: 'Dr. Anthony Eze requested Guzape Plot Site Tour', time: '12 mins ago', icon: Calendar, color: 'text-[#8DC63F]' },
                      { title: 'Title Verification Stamped', desc: 'Lekki Phase 1 C of O lodged with Surveyor-General', time: '45 mins ago', icon: ShieldCheck, color: 'text-[#B462E8]' },
                      { title: 'Asset Listing Published', desc: 'The Royal Monarch Mansion updated to Handover Ready', time: '2 hours ago', icon: Building2, color: 'text-[#8DC63F]' }
                    ].map((act, idx) => {
                      const Icon = act.icon;
                      return (
                        <div key={idx} className={`p-3.5 ${bgSubtle} rounded-2xl border border-purple-800/40 flex items-start gap-3`}>
                          <div className="p-2 rounded-xl bg-[#34073E] text-white shrink-0 mt-0.5">
                            <Icon className={`w-4 h-4 ${act.color}`} />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${textHeading}`}>{act.title}</div>
                            <p className={`text-[11px] ${textMuted} mt-0.5 leading-snug`}>{act.desc}</p>
                            <span className="text-[10px] text-purple-400 font-mono mt-1 block">{act.time}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: CONSULTATIONS & SCHEDULE TRACKER */}
          {activeTab === 'consultations' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className={`${bgCard} p-6 rounded-[2.25rem] border shadow-md flex flex-col sm:flex-row items-center justify-between gap-4`}>
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
                  <input
                    type="text"
                    value={bookingSearch}
                    onChange={(e) => setBookingSearch(e.target.value)}
                    placeholder="Search client name, ref, or service..."
                    className={`w-full pl-10 pr-4 py-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs ${textHeading} focus:outline-none focus:border-[#8DC63F]`}
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
                  {['All', 'Confirmed', 'Pending', 'Completed'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setBookingFilterStatus(st)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        bookingFilterStatus === st
                          ? 'bg-[#34073E] text-[#8DC63F] border border-[#8DC63F]'
                          : `${bgSubtle} ${textMuted} hover:text-[#8DC63F]`
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`${bgCard} rounded-[2.25rem] border shadow-md overflow-hidden`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[750px]">
                    <thead>
                      <tr className={`${bgSubtle} border-b border-purple-800/40 text-[11px] font-mono uppercase ${textMuted}`}>
                        <th className="p-4">Ref Code</th>
                        <th className="p-4">Client Details</th>
                        <th className="p-4">Service Category</th>
                        <th className="p-4">Schedule Date & Time</th>
                        <th className="p-4">Assigned Lead</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-800/40 text-xs">
                      {filteredBookings.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="p-10 text-center text-purple-400">
                            No consultation schedules found matching your query.
                          </td>
                        </tr>
                      ) : (
                        filteredBookings.map((b) => (
                          <tr key={b.id} className="hover:bg-purple-900/20 transition-colors">
                            <td className="p-4">
                              <span className="font-mono font-bold text-xs bg-[#34073E] text-[#8DC63F] px-2.5 py-1 rounded-lg">
                                {b.id}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className={`font-bold ${textHeading}`}>{b.clientName}</div>
                              <div className={`text-[11px] ${textMuted}`}>{b.email} • {b.phone}</div>
                            </td>
                            <td className="p-4">
                              <div className={`font-semibold ${textHeading}`}>{b.serviceCategory}</div>
                              <div className="text-[10px] text-purple-400">{b.consultationType}</div>
                            </td>
                            <td className="p-4">
                              <div className={`font-semibold ${textHeading}`}>{b.date}</div>
                              <div className={`text-[11px] ${textMuted}`}>{b.time}</div>
                            </td>
                            <td className={`p-4 font-medium ${textHeading}`}>
                              {b.assignedSpecialist}
                            </td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                                b.status === 'Confirmed' 
                                  ? 'bg-[#8DC63F]/20 text-[#8DC63F]' 
                                  : b.status === 'Completed'
                                  ? 'bg-purple-900 text-purple-200'
                                  : 'bg-amber-900/60 text-amber-300'
                              }`}>
                                {b.status}
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                {b.status !== 'Completed' && (
                                  <button
                                    onClick={() => onUpdateBookingStatus && onUpdateBookingStatus(b.id, 'Completed')}
                                    className="px-2.5 py-1 rounded-lg bg-[#8DC63F] text-[#1E0424] text-[11px] font-bold hover:bg-[#7bb532]"
                                  >
                                    Complete
                                  </button>
                                )}
                                <button
                                  onClick={() => onDeleteBooking && onDeleteBooking(b.id)}
                                  className="p-1.5 text-purple-400 hover:text-red-400 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: PROPERTY & LAND ASSET MANAGER */}
          {activeTab === 'properties' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className={`${bgCard} p-6 rounded-[2.25rem] border shadow-md flex items-center justify-between`}>
                <div>
                  <h3 className={`text-xl font-bold font-heading ${textHeading}`}>
                    Property & Land Assets Portfolio ({properties.length})
                  </h3>
                  <p className={`text-xs ${textMuted}`}>
                    Post new land plots or luxury estates, edit title survey details & imagery.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingProperty(null);
                    setSelectedFileError('');
                    setPropForm({
                      title: '',
                      category: 'Residential',
                      status: 'For Sale',
                      price: 150000000,
                      location: 'Lekki Phase 1, Lagos',
                      address: 'Admiralty Way, Lekki Phase 1, Lagos',
                      beds: 4,
                      baths: 4.5,
                      sqft: 4200,
                      acres: 0.25,
                      image: '/images/hero-villa.jpg',
                      surveyStatus: "Verified Governor's Consent & C of O",
                      description: '',
                      features: ['Verified Certificate of Occupancy (C of O)', '24/7 Gated Security', 'Solar Power Backup']
                    });
                    setIsPropertyModalOpen(true);
                  }}
                  className="flex items-center gap-2 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md active:scale-98"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>Post Land / Asset Listing</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((prop) => (
                  <div 
                    key={prop.id}
                    className={`${bgCard} rounded-[2rem] overflow-hidden border shadow-md flex flex-col justify-between group`}
                  >
                    <div className="space-y-4 p-5">
                      <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-purple-950">
                        <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#34073E] text-[#8DC63F] text-[10px] font-mono font-bold">
                          {prop.category}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <div className={`text-lg font-bold font-heading ${textHeading} line-clamp-1`}>
                          {prop.title}
                        </div>
                        <div className="text-sm font-bold text-[#8DC63F] font-mono">
                          {prop.priceFormatted}
                        </div>
                        <div className={`text-xs ${textMuted} flex items-center gap-1`}>
                          <MapPin className="w-3.5 h-3.5 text-[#8DC63F]" />
                          <span>{prop.location}</span>
                        </div>
                      </div>

                      <div className={`p-3 ${bgSubtle} rounded-xl border border-purple-800/40 text-[11px] ${textHeading} font-semibold`}>
                        {prop.surveyStatus}
                      </div>
                    </div>

                    <div className={`p-4 ${bgSubtle} border-t border-purple-800/40 flex items-center justify-between`}>
                      <button
                        onClick={() => openEditProperty(prop)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#34073E] text-white text-xs font-semibold hover:bg-[#25042D]"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#8DC63F]" />
                        <span>Edit Listing</span>
                      </button>

                      <button
                        onClick={() => onDeleteProperty && onDeleteProperty(prop.id)}
                        className="p-2 text-purple-400 hover:text-red-400 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: WEBSITE COPY EDITOR */}
          {activeTab === 'content' && (
            <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
              
              <div className={`${bgCard} p-8 sm:p-10 rounded-[2.25rem] border shadow-md space-y-6`}>
                <div className="flex items-center justify-between border-b border-purple-800/40 pb-5">
                  <div>
                    <h3 className={`text-2xl font-bold font-heading ${textHeading}`}>
                      Live Website Copy & Contact Editor
                    </h3>
                    <p className={`text-xs ${textMuted} mt-1`}>
                      Edit homepage headlines, phone numbers, and regional office addresses live across the website.
                    </p>
                  </div>
                  <Sparkles className="w-6 h-6 text-[#8DC63F]" />
                </div>

                {copySaved && (
                  <div className="p-4 bg-[#8DC63F]/20 text-[#8DC63F] border border-[#8DC63F] rounded-2xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Website Copy Deployed Successfully! Changes are live across the application.</span>
                  </div>
                )}

                <form onSubmit={handleSaveCopy} className="space-y-5">
                  
                  <div className="space-y-2">
                    <label className={`block text-xs font-semibold ${textHeading}`}>
                      Hero Section Main Headline
                    </label>
                    <input
                      type="text"
                      value={copyForm.headline}
                      onChange={(e) => setCopyForm({ ...copyForm, headline: e.target.value })}
                      className={`w-full p-3.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs sm:text-sm font-medium ${textHeading} focus:outline-none focus:border-[#8DC63F]`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`block text-xs font-semibold ${textHeading}`}>
                      Hero Section Subheadline
                    </label>
                    <textarea
                      rows={3}
                      value={copyForm.subheadline}
                      onChange={(e) => setCopyForm({ ...copyForm, subheadline: e.target.value })}
                      className={`w-full p-3.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs sm:text-sm font-medium ${textHeading} focus:outline-none focus:border-[#8DC63F] resize-none`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className={`block text-xs font-semibold ${textHeading}`}>
                        Primary Hotline
                      </label>
                      <input
                        type="text"
                        value={copyForm.phone}
                        onChange={(e) => setCopyForm({ ...copyForm, phone: e.target.value })}
                        className={`w-full p-3.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:outline-none focus:border-[#8DC63F]`}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className={`block text-xs font-semibold ${textHeading}`}>
                        Official Support Email
                      </label>
                      <input
                        type="email"
                        value={copyForm.email}
                        onChange={(e) => setCopyForm({ ...copyForm, email: e.target.value })}
                        className={`w-full p-3.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:outline-none focus:border-[#8DC63F]`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`block text-xs font-semibold ${textHeading}`}>
                      Lagos Regional Office Address
                    </label>
                    <input
                      type="text"
                      value={copyForm.lagosOffice}
                      onChange={(e) => setCopyForm({ ...copyForm, lagosOffice: e.target.value })}
                      className={`w-full p-3.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:outline-none focus:border-[#8DC63F]`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`block text-xs font-semibold ${textHeading}`}>
                      Abuja Regional Office Address
                    </label>
                    <input
                      type="text"
                      value={copyForm.abujaOffice}
                      onChange={(e) => setCopyForm({ ...copyForm, abujaOffice: e.target.value })}
                      className={`w-full p-3.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:outline-none focus:border-[#8DC63F]`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 active:scale-98 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Deploy Copy Updates</span>
                  </button>

                </form>
              </div>

            </div>
          )}

          {/* TAB 5: MEDIA & VIDEO HUB (MAX 5MB IMAGE FILE UPLOAD + VIDEO URL REQUIREMENT) */}
          {activeTab === 'media' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className={`${bgCard} p-8 rounded-[2.25rem] border shadow-md space-y-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-xl font-bold font-heading ${textHeading}`}>
                      Media Assets & Video Upload Hub
                    </h3>
                    <p className={`text-xs ${textMuted} mt-0.5`}>
                      Upload custom images (Max 5MB per file) or add video URL links for client streaming.
                    </p>
                  </div>

                  {/* Upload Mode Selector */}
                  <div className="flex items-center gap-2 bg-[#34073E] p-1 rounded-xl">
                    <button
                      onClick={() => setUploadMode('image')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        uploadMode === 'image' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                      }`}
                    >
                      📷 Image Upload (&le; 5MB)
                    </button>
                    <button
                      onClick={() => setUploadMode('video')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        uploadMode === 'video' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                      }`}
                    >
                      🎬 Video URL Upload
                    </button>
                  </div>
                </div>

                {selectedFileError && (
                  <div className="p-4 bg-red-950/80 text-red-200 border border-red-800 rounded-2xl text-xs font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{selectedFileError}</span>
                  </div>
                )}

                {/* MODE 1: IMAGE FILE UPLOAD (&le; 5MB) */}
                {uploadMode === 'image' && (
                  <div className={`p-6 ${bgSubtle} border border-dashed border-purple-700/80 rounded-2xl text-center space-y-4`}>
                    <div className="w-12 h-12 rounded-2xl bg-[#34073E] text-[#8DC63F] mx-auto flex items-center justify-center font-bold">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${textHeading}`}>Select Image File from Local Computer</h4>
                      <p className={`text-xs ${textMuted} mt-1`}>
                        PNG, JPG, WEBP formats allowed. Maximum file size allowed: <span className="text-[#8DC63F] font-bold">5.0 MB</span>.
                      </p>
                    </div>

                    <label className="inline-flex items-center gap-2 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] px-6 py-3 rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all active:scale-98">
                      <Upload className="w-4 h-4" />
                      <span>Browse Image File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageFileChange(e, 'media')}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                {/* MODE 2: VIDEO URL UPLOAD */}
                {uploadMode === 'video' && (
                  <form onSubmit={handleAddVideoUrl} className="space-y-4">
                    <div className="p-4 bg-purple-950/40 rounded-xl border border-purple-800/60 text-xs text-purple-200">
                      <p className="font-semibold text-[#8DC63F]">Video File Upload Rule:</p>
                      <p className="text-purple-300/80 mt-0.5">Video files must be uploaded via URL link (YouTube embed, Vimeo, or direct MP4 URL) so users can stream the video smoothly.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <input
                        type="url"
                        required
                        value={videoUrlInput}
                        onChange={(e) => setVideoUrlInput(e.target.value)}
                        placeholder="Paste Video URL (e.g. https://www.youtube.com/watch?v=... or .mp4 link)..."
                        className={`flex-1 w-full p-3.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:outline-none focus:border-[#8DC63F]`}
                      />
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] rounded-xl text-xs font-bold transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
                      >
                        <Video className="w-4 h-4" />
                        <span>Register Video Link</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>

              {/* Media Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {mediaList.map((m) => (
                  <div 
                    key={m.id}
                    className={`${bgCard} p-3 rounded-2xl border shadow-xs space-y-2 group relative`}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden bg-purple-950 relative flex items-center justify-center">
                      {m.type === 'video' ? (
                        <div className="w-full h-full bg-[#34073E] flex flex-col items-center justify-center p-3 text-center">
                          <Film className="w-8 h-8 text-[#8DC63F] mb-1" />
                          <span className="text-[10px] font-mono text-purple-200 font-bold">STREAM VIDEO</span>
                        </div>
                      ) : (
                        <img src={m.url} alt={m.name} className="w-full h-full object-cover" />
                      )}

                      <button
                        onClick={() => handleDeleteMedia(m.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-950/80 text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete Media Asset"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className={`text-[11px] font-bold ${textHeading} truncate`}>
                      {m.name}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-purple-400 font-mono">
                      <span>{m.size}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(m.url);
                          setCopiedMediaId(m.id);
                          setTimeout(() => setCopiedMediaId(null), 2000);
                        }}
                        className="hover:text-[#8DC63F]"
                        title="Copy Asset Link"
                      >
                        {copiedMediaId === m.id ? <Check className="w-3.5 h-3.5 text-[#8DC63F]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </main>

      {/* CREATE / EDIT PROPERTY MODAL */}
      {isPropertyModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1E0424]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`${bgCard} w-full max-w-2xl max-h-[90vh] rounded-[2.25rem] p-6 sm:p-8 space-y-6 border shadow-2xl overflow-y-auto`}>
            
            <div className="flex items-center justify-between border-b border-purple-800/40 pb-4">
              <h3 className={`text-xl font-bold font-heading ${textHeading}`}>
                {editingProperty ? 'Edit Property Listing' : 'Post New Asset Listing'}
              </h3>
              <button
                onClick={() => setIsPropertyModalOpen(false)}
                className="p-2 rounded-full bg-purple-900/40 text-purple-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProperty} className="space-y-4 text-xs">
              
              <div className="space-y-1.5">
                <label className={`font-semibold ${textHeading}`}>Property Title *</label>
                <input
                  type="text"
                  required
                  value={propForm.title}
                  onChange={(e) => setPropForm({ ...propForm, title: e.target.value })}
                  placeholder="e.g. Imperial Crest Hilltop Villa"
                  className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`font-semibold ${textHeading}`}>Asset Category</label>
                  <select
                    value={propForm.category}
                    onChange={(e) => setPropForm({ ...propForm, category: e.target.value })}
                    className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Luxury Lands">Luxury Lands</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label className={`font-semibold ${textHeading}`}>Price (NGN) *</label>
                  <input
                    type="number"
                    required
                    value={propForm.price}
                    onChange={(e) => setPropForm({ ...propForm, price: Number(e.target.value) })}
                    className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`font-semibold ${textHeading}`}>Location (City)</label>
                  <input
                    type="text"
                    value={propForm.location}
                    onChange={(e) => setPropForm({ ...propForm, location: e.target.value })}
                    placeholder="e.g. Ikoyi, Lagos"
                    className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                  />
                </div>

                <div>
                  <label className={`font-semibold ${textHeading}`}>Survey & Title Status</label>
                  <input
                    type="text"
                    value={propForm.surveyStatus}
                    onChange={(e) => setPropForm({ ...propForm, surveyStatus: e.target.value })}
                    placeholder="e.g. Verified Governor's Consent"
                    className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                  />
                </div>
              </div>

              {/* Image Input Selection: File Upload (Max 5MB) or URL */}
              <div className="space-y-2">
                <label className={`font-semibold ${textHeading}`}>Property Photo Image</label>
                
                {selectedFileError && (
                  <p className="text-[11px] text-red-400 font-semibold">{selectedFileError}</p>
                )}

                <div className="flex items-center gap-3">
                  <label className="bg-[#34073E] text-[#8DC63F] hover:bg-[#25042D] px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all shrink-0 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload File (&le;5MB)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageFileChange(e, 'property')}
                      className="hidden"
                    />
                  </label>

                  <input
                    type="text"
                    value={propForm.image}
                    onChange={(e) => setPropForm({ ...propForm, image: e.target.value })}
                    placeholder="Or paste image URL (/images/hero-villa.jpg)..."
                    className={`flex-1 p-2.5 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                  />
                </div>

                {propForm.image && (
                  <div className="w-24 h-16 rounded-lg overflow-hidden bg-purple-950 border border-purple-800/60">
                    <img src={propForm.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className={`font-semibold ${textHeading}`}>Description</label>
                <textarea
                  rows={3}
                  value={propForm.description}
                  onChange={(e) => setPropForm({ ...propForm, description: e.target.value })}
                  className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} resize-none`}
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-purple-800/40">
                <button
                  type="button"
                  onClick={() => setIsPropertyModalOpen(false)}
                  className="px-5 py-2.5 bg-purple-900/40 text-purple-200 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#8DC63F] text-[#1E0424] rounded-xl text-xs font-bold hover:bg-[#7bb532]"
                >
                  {editingProperty ? 'Update Listing' : 'Publish Listing'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
