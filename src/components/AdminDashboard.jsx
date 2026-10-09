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
  EyeOff,
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
  ShieldAlert,
  Briefcase,
  MessageSquare,
  HelpCircle,
  Download,
  CheckSquare
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
  // Staff Security Authentication & Session State
  const [session, setSession] = useState(() => {
    try {
      const saved = sessionStorage.getItem('ezeani_staff_session');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const isAuthenticated = Boolean(session && session.token);

  // Login Form States
  const [authForm, setAuthForm] = useState({ 
    staffId: 'admin@ezeaniproperties.com', 
    pin: '',
    role: 'Super Admin',
    remember: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutTimer, setLockoutTimer] = useState(0);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  // Audit Log Feed State
  const [auditLogs, setAuditLogs] = useState([
    { id: 'al-1', action: 'Listing Published', details: 'Imperial Crest Hilltop Villa set to Live', user: 'Engr. Ezeani Staff', time: '10 mins ago' },
    { id: 'al-2', action: 'Schedule Confirmed', details: 'Guzape Plot 402 Site Survey confirmed for Dr. Anthony', user: 'Surv. Chidi (Lead)', time: '35 mins ago' },
    { id: 'al-3', action: 'Copy Updated', details: 'Primary Contact Hotline updated to 0902 171 0933', user: 'Super Admin', time: '1 hour ago' },
    { id: 'al-4', action: 'Candidate Reviewed', details: 'Senior Cadastral Surveyor application marked Shortlisted', user: 'HR Dept', time: '2 hours ago' }
  ]);

  const addAuditLog = (action, details) => {
    const newLog = {
      id: `al-${Date.now()}`,
      action,
      details,
      user: session?.user?.name || 'Authorized Staff',
      time: 'Just now'
    };
    setAuditLogs([newLog, ...auditLogs]);
  };

  // Lockout Countdown Timer Effect
  useEffect(() => {
    let interval;
    if (isLockedOut && lockoutTimer > 0) {
      interval = setInterval(() => {
        setLockoutTimer((prev) => {
          if (prev <= 1) {
            setIsLockedOut(false);
            setFailedAttempts(0);
            setAuthError('');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLockedOut, lockoutTimer]);

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

  // Sidebar & Navigation Tabs
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'consultations' | 'properties' | 'careers' | 'messages' | 'content' | 'media'

  // Search & Filters
  const [bookingSearch, setBookingSearch] = useState('');
  const [bookingFilterStatus, setBookingFilterStatus] = useState('All');

  // Confirmation Modals State (Destructive Actions)
  const [deleteConfirmModal, setDeleteConfirmModal] = useState({ open: false, type: '', id: null, title: '' });

  // Career Applications State & In-Browser CV Document Viewer State
  const [selectedCvCandidate, setSelectedCvCandidate] = useState(null);
  const [careerApplications, setCareerApplications] = useState([
    {
      id: 'app-1',
      candidateName: 'Surv. Emmanuel Okafor',
      role: 'Senior Cadastral Land Surveyor',
      email: 'e.okafor@gmail.com',
      phone: '0803 445 1199',
      appliedDate: '2026-10-04',
      experience: '8 Years Cadastral Surveying',
      status: 'Under Review',
      notes: 'Registered SURCON surveyor with extensive Lagos & Abuja site mapping credentials.'
    },
    {
      id: 'app-2',
      candidateName: 'Grace Nnamdi',
      role: 'Real Estate Acquisition Advisor',
      email: 'grace.nnamdi@outlook.com',
      phone: '0812 900 3344',
      appliedDate: '2026-10-06',
      experience: '5 Years Commercial Sales',
      status: 'Shortlisted',
      notes: 'Proven track record negotiating high-yield Lekki residential portfolios.'
    }
  ]);

  // Contact Messages State
  const [contactMessages, setContactMessages] = useState([
    {
      id: 'msg-1',
      senderName: 'Dr. Anthony Eze',
      email: 'dranthony@healthnet.ng',
      phone: '0802 331 4455',
      subject: 'Title Verification Enquiry for Guzape Plot',
      message: 'Hello, I require urgent C of O verification for 2,500 sqft plot in Guzape Phase 2.',
      date: '2026-10-08',
      status: 'Unread'
    },
    {
      id: 'msg-2',
      senderName: 'Chief Kenneth Okoye',
      email: 'kenneth.okoye@okoyegroup.com',
      phone: '0901 223 8877',
      subject: 'Commercial Estate Acquisition Interest',
      message: 'Interested in acquiring 3 floors of Admiralty Commercial Tower for office headquarters.',
      date: '2026-10-07',
      status: 'Replied'
    }
  ]);

  // Property Listing Editor State
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [propForm, setPropForm] = useState({
    title: '',
    category: 'Residential',
    status: 'For Sale',
    publishStatus: 'Published', // 'Published' | 'Draft'
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

  // Copy & Section Editor State
  const [copyForm, setCopyForm] = useState({
    // Hero Section
    heroPill: companyInfo.heroPill || "SURV. EZEANI EMMANUEL ADOLPHUS (FNIS) • MD/CEO",
    headline: companyInfo.headline || "Every kind of property, one trusted partner.",
    subheadline: companyInfo.subheadline || "Residential, commercial and industrial real estate, luxury lands and expert consultation, delivered nationwide.",
    heroMedia: companyInfo.heroMedia || "/images/hero-villa.jpg",
    heroMediaType: companyInfo.heroMediaType || "image",

    // Why Choose Ezeani
    whyBadge: companyInfo.whyBadge || "THE EZEANI ADVANTAGE",
    whyTitle: companyInfo.whyTitle || "A property company built on trust, quality and reach.",
    whySubtitle: companyInfo.whySubtitle || "Ezeani Properties Ltd is a real estate company and a subsidiary of Ezeani Group. We help individuals, families, businesses and investors buy, own and develop property with confidence, delivered nationwide.",
    whyMedia: companyInfo.whyMedia || "/images/hero-villa.jpg",
    whyMediaType: companyInfo.whyMediaType || "image",

    // Land Surveying Services
    surveyBadge: companyInfo.surveyBadge || "CERTIFIED GEOSPATIAL SERVICES",
    surveyTitle: companyInfo.surveyTitle || "Land Surveying & Title Clearance Services",
    surveySubtitle: companyInfo.surveySubtitle || "Eliminate boundary disputes and title risks with RTK GPS total stations, 3D LiDAR drone mapping, and official registry title search verification.",
    surveyMedia: companyInfo.surveyMedia || "/images/hero-surveyor.jpg",
    surveyMediaType: companyInfo.surveyMediaType || "image",

    // Contact & Office Information
    phone: companyInfo.phone || "0902 171 0933",
    whatsapp: companyInfo.whatsapp || "+2349021710933",
    email: companyInfo.email || "info@ezeaniproperties.com",
    lagosOffice: companyInfo.offices?.[0]?.address || "Plot 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
    abujaOffice: companyInfo.offices?.[1]?.address || "Suite 402, Capital Place, Maitama, Abuja, Nigeria",

    // Footer CTA Block
    footerCtaBadge: companyInfo.footerCtaBadge || "EZEANI PROPERTIES LTD • NATIONWIDE DELIVERY",
    footerCtaTitle: companyInfo.footerCtaTitle || "Ready to find, secure, or build your next property?",
    footerCtaSubtitle: companyInfo.footerCtaSubtitle || "Call, chat or visit. Our team of certified survey experts and real estate advisors is ready to guide you from initial enquiry to final title handover."
  });
  const [copySaved, setCopySaved] = useState(false);

  // Media Hub State
  const [mediaList, setMediaList] = useState([
    { id: 'm1', name: 'hero-villa.jpg', type: 'image', url: '/images/hero-villa.jpg', size: '2.4 MB', date: '2026-10-01' },
    { id: 'm2', name: 'hero-commercial.jpg', type: 'image', url: '/images/hero-commercial.jpg', size: '3.1 MB', date: '2026-10-02' },
    { id: 'm3', name: 'hero-surveyor.jpg', type: 'image', url: '/images/hero-surveyor.jpg', size: '1.8 MB', date: '2026-10-03' },
    { id: 'm4', name: 'hero-construction.jpg', type: 'image', url: '/images/hero-construction.jpg', size: '2.9 MB', date: '2026-10-04' },
    { id: 'm5', name: 'mansion.jpg', type: 'image', url: '/images/mansion.jpg', size: '2.1 MB', date: '2026-10-05' },
    { id: 'm6', name: 'Ezeani Drone Survey Overview', type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', size: 'HD Video', date: '2026-10-06' }
  ]);

  const [uploadMode, setUploadMode] = useState('image'); // 'image' | 'video'
  const [selectedFileError, setSelectedFileError] = useState('');
  const [videoUrlInput, setVideoUrlInput] = useState('');
  const [copiedMediaId, setCopiedMediaId] = useState(null);

  if (!isOpen) return null;

  // Handle Staff Login Authentication
  const handleStaffLogin = (e) => {
    e.preventDefault();
    if (isLockedOut) return;

    // Allowed demo PINs / Passcodes: 8844, 2026, or 1234
    const validPins = ['8844', '2026', '1234', 'admin'];
    
    if (validPins.includes(authForm.pin.trim())) {
      const userSession = {
        token: `ez_token_${Date.now()}`,
        user: {
          name: 'Engr. Ezeani Staff',
          email: authForm.staffId,
          role: authForm.role
        },
        loginTime: new Date().toISOString()
      };

      setSession(userSession);
      sessionStorage.setItem('ezeani_staff_session', JSON.stringify(userSession));
      sessionStorage.setItem('ezeani_staff_auth', 'true');
      setAuthError('');
      setFailedAttempts(0);
      addAuditLog('Staff Sign In', `Authenticated as ${authForm.role} (${authForm.staffId})`);
    } else {
      const attempts = failedAttempts + 1;
      setFailedAttempts(attempts);
      if (attempts >= 3) {
        setIsLockedOut(true);
        setLockoutTimer(30);
        setAuthError('Security rate limit triggered: 3 failed attempts. Lockout engaged for 30s.');
      } else {
        setAuthError(`Invalid Passcode. ${3 - attempts} attempt(s) remaining. (Demo PIN: 8844 or 2026)`);
      }
    }
  };

  const handleStaffLogout = () => {
    addAuditLog('Staff Sign Out', 'Session terminated');
    setSession(null);
    sessionStorage.removeItem('ezeani_staff_session');
    sessionStorage.removeItem('ezeani_staff_auth');
    setAuthForm({ staffId: 'admin@ezeaniproperties.com', pin: '', role: 'Super Admin', remember: true });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSent(true);
    setTimeout(() => {
      setForgotSent(false);
      setIsForgotPasswordOpen(false);
      setForgotEmail('');
    }, 3500);
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

  // Handle Save Copy & Section Media
  const handleSaveCopy = (e) => {
    e.preventDefault();
    if (onUpdateCompanyInfo) {
      onUpdateCompanyInfo({
        ...companyInfo,
        // Hero Section
        heroPill: copyForm.heroPill,
        headline: copyForm.headline,
        subheadline: copyForm.subheadline,
        heroMedia: copyForm.heroMedia,
        heroMediaType: copyForm.heroMediaType,

        // Why Choose Ezeani Section
        whyBadge: copyForm.whyBadge,
        whyTitle: copyForm.whyTitle,
        whySubtitle: copyForm.whySubtitle,
        whyMedia: copyForm.whyMedia,
        whyMediaType: copyForm.whyMediaType,

        // Land Surveying Services Section
        surveyBadge: copyForm.surveyBadge,
        surveyTitle: copyForm.surveyTitle,
        surveySubtitle: copyForm.surveySubtitle,
        surveyMedia: copyForm.surveyMedia,
        surveyMediaType: copyForm.surveyMediaType,

        // Contact & Regional Offices
        phone: copyForm.phone,
        whatsapp: copyForm.whatsapp,
        email: copyForm.email,
        offices: [
          { city: "Lagos Office", address: copyForm.lagosOffice },
          { city: "Abuja Office", address: copyForm.abujaOffice }
        ],

        // Footer CTA Block
        footerCtaBadge: copyForm.footerCtaBadge,
        footerCtaTitle: copyForm.footerCtaTitle,
        footerCtaSubtitle: copyForm.footerCtaSubtitle
      });
    }
    setCopySaved(true);
    addAuditLog('Website Content & Media Updated', 'All website sections headlines, pills, image uploads & video URLs updated live');
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
      addAuditLog('Property Updated', `Listing '${propForm.title}' modified`);
    } else {
      if (onAddProperty) onAddProperty(newProp);
      addAuditLog('Property Published', `New listing '${propForm.title}' published`);
    }

    setIsPropertyModalOpen(false);
    setEditingProperty(null);
  };

  const executeDelete = () => {
    if (deleteConfirmModal.type === 'property') {
      if (onDeleteProperty) onDeleteProperty(deleteConfirmModal.id);
      addAuditLog('Property Deleted', `Listing #${deleteConfirmModal.id} removed`);
    } else if (deleteConfirmModal.type === 'booking') {
      if (onDeleteBooking) onDeleteBooking(deleteConfirmModal.id);
      addAuditLog('Schedule Deleted', `Consultation ref ${deleteConfirmModal.id} deleted`);
    }
    setDeleteConfirmModal({ open: false, type: '', id: null, title: '' });
  };

  // Open Property Modal for Editing
  const openEditProperty = (prop) => {
    setEditingProperty(prop);
    setPropForm({
      title: prop.title,
      category: prop.category,
      status: prop.status,
      publishStatus: prop.publishStatus || 'Published',
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
      } else if (target === 'heroMedia' || target === 'whyMedia' || target === 'surveyMedia') {
        setCopyForm((prev) => ({
          ...prev,
          [target]: resultUrl,
          [`${target}Type`]: 'image'
        }));
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
        addAuditLog('Media Asset Uploaded', `File '${file.name}' added to library`);
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
    addAuditLog('Video Registered', `Video stream URL added`);
    setVideoUrlInput('');
  };

  // Delete Media
  const handleDeleteMedia = (id) => {
    setMediaList((prev) => prev.filter((m) => m.id !== id));
    addAuditLog('Media Asset Deleted', `Asset ${id} removed`);
  };

  // =========================================================
  // DEDICATED ADMIN LOGIN SCREEN (REQUIREMENT 4)
  // =========================================================
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-[#1E0424] flex items-center justify-center p-4 font-sans animate-fade-in overflow-y-auto">
        <div className="w-full max-w-xl bg-[#34073E] text-white rounded-[2.5rem] border border-purple-800/80 shadow-2xl p-8 sm:p-10 space-y-8 relative overflow-hidden my-auto">
          
          {/* Subtle Glow Background Accent */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#8DC63F]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#B462E8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Login Brand Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#8DC63F] text-[#1E0424] flex items-center justify-center shadow-xl border border-[#8DC63F]/40">
              <ShieldCheck className="w-9 h-9 stroke-[2.2]" />
            </div>
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#8DC63F]/30">
                Ezeani Properties Internal Management
              </span>
              <h1 className="text-3xl font-bold font-heading text-white tracking-tight mt-2.5">
                Staff Command Portal
              </h1>
              <p className="text-xs text-purple-200/80 mt-1 max-w-sm">
                Authorized Executive Personnel Authentication & Control Center
              </p>
            </div>
          </div>

          {/* Security Alert Banner */}
          <div className="p-4 bg-purple-950/80 rounded-2xl border border-purple-800/80 text-xs text-purple-200 flex items-start gap-3">
            <Lock className="w-4.5 h-4.5 text-[#8DC63F] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-bold text-white">Protected Staff Environment</p>
              <p className="text-purple-300/80 text-[11px] leading-relaxed">
                Unauthenticated visitors are restricted. Server-side session validation is active for all content operations.
              </p>
            </div>
          </div>

          {authError && (
            <div className="p-4 bg-red-950/90 text-red-200 border border-red-800 rounded-2xl text-xs font-semibold flex items-center gap-2.5 animate-shake">
              <AlertTriangle className="w-4.5 h-4.5 text-red-400 shrink-0" />
              <div>
                <span>{authError}</span>
                {isLockedOut && (
                  <p className="text-[11px] text-red-300 font-mono mt-1">
                    System unlocking in <span className="font-bold text-white">{lockoutTimer} seconds</span>...
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleStaffLogin} className="space-y-5">
            
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-purple-200">Staff Identity / Email Address</label>
              <input
                type="email"
                required
                value={authForm.staffId}
                onChange={(e) => setAuthForm({ ...authForm, staffId: e.target.value })}
                placeholder="admin@ezeaniproperties.com"
                className="w-full p-3.5 bg-[#1E0424] border border-purple-800/80 rounded-xl text-xs font-medium text-white placeholder-purple-400 focus:outline-none focus:border-[#8DC63F] focus:ring-1 focus:ring-[#8DC63F]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-purple-200">Security Passcode / PIN</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={authForm.pin}
                    onChange={(e) => setAuthForm({ ...authForm, pin: e.target.value })}
                    placeholder="Enter Passcode (Demo: 8844)"
                    className="w-full pl-3.5 pr-10 py-3.5 bg-[#1E0424] border border-purple-800/80 rounded-xl text-xs font-medium text-white placeholder-purple-400 focus:outline-none focus:border-[#8DC63F] focus:ring-1 focus:ring-[#8DC63F]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-purple-200">Staff Permission Role</label>
                <select
                  value={authForm.role}
                  onChange={(e) => setAuthForm({ ...authForm, role: e.target.value })}
                  className="w-full p-3.5 bg-[#1E0424] border border-purple-800/80 rounded-xl text-xs font-medium text-white focus:outline-none focus:border-[#8DC63F]"
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Content Editor">Content Editor</option>
                  <option value="Lead Surveyor">Lead Surveyor</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-purple-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={authForm.remember}
                  onChange={(e) => setAuthForm({ ...authForm, remember: e.target.checked })}
                  className="rounded accent-[#8DC63F]"
                />
                <span>Remember session</span>
              </label>

              <button
                type="button"
                onClick={() => setIsForgotPasswordOpen(true)}
                className="text-[#8DC63F] hover:underline font-semibold"
              >
                Forgot Passcode?
              </button>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3.5 rounded-xl bg-purple-900/60 hover:bg-purple-900 text-purple-200 text-xs font-semibold transition-colors"
              >
                Exit to Website
              </button>
              <button
                type="submit"
                disabled={isLockedOut}
                className="flex-1 py-3.5 rounded-xl bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] text-xs font-bold shadow-lg transition-all active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <KeyRound className="w-4 h-4" />
                <span>Authenticate & Sign In</span>
              </button>
            </div>
          </form>

          <div className="text-center border-t border-purple-800/60 pt-4 text-[11px] text-purple-300/80 font-mono">
            Demo Credentials &mdash; Passcode: <span className="text-[#8DC63F] font-bold">8844</span> or <span className="text-[#8DC63F] font-bold">2026</span>
          </div>

        </div>

        {/* Forgot Password Recovery Modal */}
        {isForgotPasswordOpen && (
          <div className="fixed inset-0 z-60 bg-[#1E0424]/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#34073E] text-white w-full max-w-md rounded-[2rem] border border-purple-800 p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-purple-800/60 pb-3">
                <h3 className="text-lg font-bold font-heading">Staff Passcode Recovery</h3>
                <button onClick={() => setIsForgotPasswordOpen(false)} className="text-purple-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {forgotSent ? (
                <div className="p-4 bg-[#8DC63F]/20 text-[#8DC63F] border border-[#8DC63F] rounded-2xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Passcode reset instructions sent to your staff email!</span>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <p className="text-xs text-purple-200">
                    Enter your registered staff email address to receive an official security verification link.
                  </p>
                  <input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="staff@ezeaniproperties.com"
                    className="w-full p-3.5 bg-[#1E0424] border border-purple-800 rounded-xl text-xs text-white"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsForgotPasswordOpen(false)}
                      className="px-4 py-2.5 bg-purple-900 text-purple-200 rounded-xl text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[#8DC63F] text-[#1E0424] font-bold rounded-xl text-xs"
                    >
                      Send Reset Instructions
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
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
                  {session?.user?.role || 'Super Admin'}
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
              { id: 'careers', label: 'Career Applications', icon: Briefcase, badge: careerApplications.length },
              { id: 'messages', label: 'Contact Enquiries', icon: MessageSquare, badge: contactMessages.filter(m => m.status === 'Unread').length },
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
                  {tab.badge !== undefined && tab.badge > 0 && (
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
          
          {/* Light / Dark Mode Switcher */}
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
              <div className="truncate max-w-[110px]">
                <div className={`text-xs font-bold ${textHeading} truncate`}>{session?.user?.name || 'Engr. Ezeani Staff'}</div>
                <span className="text-[10px] text-[#8DC63F] font-mono block truncate">{session?.user?.role || 'Super Admin'}</span>
              </div>
            </div>

            <button
              onClick={handleStaffLogout}
              className="p-1.5 text-purple-400 hover:text-red-400 rounded-lg shrink-0"
              title="Sign Out Session"
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
              {activeTab === 'overview' && 'Executive Performance & Audit Stream'}
              {activeTab === 'consultations' && 'Consultation Operations & Schedule Tracker'}
              {activeTab === 'properties' && 'Real Estate & Land Asset Portfolio'}
              {activeTab === 'careers' && 'Career Candidates & Job Submissions'}
              {activeTab === 'messages' && 'Client Enquiries & Contact Logs'}
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
              Authenticated ({session?.user?.role || 'Admin'})
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Enquiries & Bookings</span>
                    <div className="w-9 h-9 rounded-xl bg-purple-900/40 text-[#B462E8] flex items-center justify-center font-bold">
                      <Calendar className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>{bookings.length + 27}</div>
                    <div className="flex items-center gap-1.5 text-xs text-[#8DC63F] font-bold mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{bookings.filter(b => b.status === 'Confirmed').length} Confirmed Site Tours</span>
                    </div>
                  </div>
                </div>

                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Portfolio Assets</span>
                    <div className="w-9 h-9 rounded-xl bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center font-bold">
                      <Building2 className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>{properties.length} Listings</div>
                    <div className={`text-xs ${textMuted} font-medium mt-1`}>
                      ₦2.15 Billion Total Valuation
                    </div>
                  </div>
                </div>

                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Job Candidates</span>
                    <div className="w-9 h-9 rounded-xl bg-purple-900/40 text-[#B462E8] flex items-center justify-center font-bold">
                      <Briefcase className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>{careerApplications.length} Applicants</div>
                    <div className={`text-xs ${textMuted} font-medium mt-1`}>
                      {careerApplications.filter(a => a.status === 'Under Review').length} Under Review
                    </div>
                  </div>
                </div>

                <div className={`${bgCard} p-6 rounded-[2rem] shadow-md space-y-3 border`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase ${textMuted}`}>Title Guarantee</span>
                    <div className="w-9 h-9 rounded-xl bg-[#8DC63F]/20 text-[#8DC63F] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold font-heading ${textHeading}`}>100% Accuracy</div>
                    <div className="text-xs text-[#8DC63F] font-bold mt-1">
                      Certified Surveyor Verification
                    </div>
                  </div>
                </div>

              </div>

              {/* Chart & Audit Log Grid */}
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
                      const maxVal = 140;
                      const toursHeight = Math.min((bar.tours / maxVal) * 100, 88);
                      const surveysHeight = Math.min((bar.surveys / maxVal) * 100, 88);

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                          <div className="w-full flex items-end justify-center gap-1.5 h-full max-h-[85%]">
                            <div 
                              className="w-1/2 bg-[#34073E] dark:bg-purple-600 rounded-t-xl transition-all group-hover:bg-[#7A2FB0] relative" 
                              style={{ height: `${toursHeight}%` }}
                              title={`${bar.month}: ${bar.tours} Site Tours`}
                            />
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

                {/* Audit Stream */}
                <div className={`lg:col-span-4 ${bgCard} p-7 rounded-[2.25rem] shadow-md space-y-5 border`}>
                  <div className="flex items-center justify-between pb-3 border-b border-purple-800/40">
                    <h3 className={`text-base font-bold font-heading ${textHeading}`}>
                      Administrative Audit Trail
                    </h3>
                    <Sparkles className="w-4 h-4 text-[#8DC63F]" />
                  </div>

                  <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
                    {auditLogs.map((log) => (
                      <div key={log.id} className={`p-3.5 ${bgSubtle} rounded-2xl border border-purple-800/40 flex items-start gap-3`}>
                        <div className="p-2 rounded-xl bg-[#34073E] text-[#8DC63F] shrink-0 mt-0.5">
                          <CheckSquare className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${textHeading}`}>{log.action}</div>
                          <p className={`text-[11px] ${textMuted} mt-0.5 leading-snug`}>{log.details}</p>
                          <span className="text-[10px] text-purple-400 font-mono mt-1 block">{log.user} &bull; {log.time}</span>
                        </div>
                      </div>
                    ))}
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
                                    onClick={() => {
                                      if (onUpdateBookingStatus) onUpdateBookingStatus(b.id, 'Completed');
                                      addAuditLog('Schedule Completed', `Booking ref ${b.id} marked completed`);
                                    }}
                                    className="px-2.5 py-1 rounded-lg bg-[#8DC63F] text-[#1E0424] text-[11px] font-bold hover:bg-[#7bb532]"
                                  >
                                    Complete
                                  </button>
                                )}
                                <button
                                  onClick={() => setDeleteConfirmModal({ open: true, type: 'booking', id: b.id, title: `Booking #${b.id}` })}
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
                    Post new land plots or luxury estates, edit survey title details & imagery.
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
                      publishStatus: 'Published',
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
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-purple-900/90 text-white text-[10px] font-mono font-bold">
                          {prop.publishStatus || 'Published'}
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
                        onClick={() => setDeleteConfirmModal({ open: true, type: 'property', id: prop.id, title: prop.title })}
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

          {/* TAB 4: CAREER CANDIDATE APPLICATIONS (REQUIREMENT 7) */}
          {activeTab === 'careers' && (
            <div className="space-y-6 animate-fade-in">
              <div className={`${bgCard} p-6 rounded-[2.25rem] border shadow-md`}>
                <h3 className={`text-xl font-bold font-heading ${textHeading}`}>
                  Career Candidate Submissions ({careerApplications.length})
                </h3>
                <p className={`text-xs ${textMuted} mt-0.5`}>
                  Review job applications submitted via the Careers portal, credentials & candidate details.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerApplications.map((app) => (
                  <div 
                    key={app.id} 
                    className={`${bgCard} p-6 sm:p-7 rounded-[2.25rem] border shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between`}
                  >
                    <div className="space-y-4">
                      {/* Candidate Name, Job Title & Compact Status Badge */}
                      <div className="flex items-start justify-between gap-3 border-b border-purple-100 dark:border-purple-800/60 pb-4">
                        <div className="space-y-1">
                          <h4 className="text-lg sm:text-xl font-bold font-heading text-[#1F0A26] dark:text-white tracking-tight">
                            {app.candidateName}
                          </h4>
                          <p className="text-xs sm:text-sm font-semibold text-[#7A2FB0] dark:text-purple-300">
                            {app.role}
                          </p>
                        </div>

                        <span className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                          app.status === 'Shortlisted'
                            ? 'bg-[#8DC63F]/20 text-[#254602] dark:text-[#8DC63F] border-[#8DC63F]/60'
                            : 'bg-purple-100 dark:bg-purple-950 text-[#34073E] dark:text-purple-200 border-purple-200 dark:border-purple-800'
                        }`}>
                          {app.status === 'Shortlisted' ? '✓ Shortlisted' : app.status}
                        </span>
                      </div>

                      {/* Organized Metadata Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="space-y-1 bg-[#FAF7FC] dark:bg-[#1E0424] p-3 rounded-xl border border-purple-100 dark:border-purple-900/40">
                          <span className="text-[10px] font-mono uppercase font-bold text-[#7A2FB0] dark:text-[#8DC63F] block">
                            Contact Email
                          </span>
                          <p className="font-semibold text-[#1F0A26] dark:text-white truncate" title={app.email}>
                            {app.email}
                          </p>
                        </div>

                        <div className="space-y-1 bg-[#FAF7FC] dark:bg-[#1E0424] p-3 rounded-xl border border-purple-100 dark:border-purple-900/40">
                          <span className="text-[10px] font-mono uppercase font-bold text-[#7A2FB0] dark:text-[#8DC63F] block">
                            Phone Number
                          </span>
                          <p className="font-semibold text-[#1F0A26] dark:text-white">
                            {app.phone}
                          </p>
                        </div>

                        <div className="space-y-1 bg-[#FAF7FC] dark:bg-[#1E0424] p-3 rounded-xl border border-purple-100 dark:border-purple-900/40">
                          <span className="text-[10px] font-mono uppercase font-bold text-[#7A2FB0] dark:text-[#8DC63F] block">
                            Field Experience
                          </span>
                          <p className="font-semibold text-[#1F0A26] dark:text-white">
                            {app.experience}
                          </p>
                        </div>

                        <div className="space-y-1 bg-[#FAF7FC] dark:bg-[#1E0424] p-3 rounded-xl border border-purple-100 dark:border-purple-900/40">
                          <span className="text-[10px] font-mono uppercase font-bold text-[#7A2FB0] dark:text-[#8DC63F] block">
                            Application Date
                          </span>
                          <p className="font-semibold text-[#1F0A26] dark:text-white">
                            {app.appliedDate}
                          </p>
                        </div>
                      </div>

                      {/* Candidate Notes & SURCON Credentials Box */}
                      <div className="p-4 rounded-2xl bg-[#F3F3F3] dark:bg-[#1E0424] text-[#27272A] dark:text-purple-200 border border-zinc-200/80 dark:border-purple-800/60 text-xs sm:text-sm font-medium leading-relaxed shadow-xs space-y-1">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#52525B] dark:text-purple-300 block">
                          Credentials & Application Remarks:
                        </span>
                        <p>{app.notes}</p>
                      </div>
                    </div>

                    {/* Action Buttons Row with Clear Hierarchy */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-purple-100 dark:border-purple-800/40">
                      <button
                        onClick={() => {
                          setCareerApplications(prev => prev.map(a => a.id === app.id ? { ...a, status: 'Shortlisted' } : a));
                          addAuditLog('Candidate Shortlisted', `Candidate ${app.candidateName} marked Shortlisted`);
                        }}
                        className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1E0424] shrink-0" />
                        <span>{app.status === 'Shortlisted' ? '✓ Candidate Shortlisted' : 'Shortlist Candidate'}</span>
                      </button>

                      <button
                        onClick={() => setSelectedCvCandidate(app)}
                        className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-[#34073E] hover:bg-[#4A0A58] text-white text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-98 cursor-pointer border border-purple-800/80 flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4 text-[#8DC63F] shrink-0" />
                        <span>View CV Document</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT ENQUIRIES (REQUIREMENT 7) */}
          {activeTab === 'messages' && (
            <div className="space-y-6 animate-fade-in">
              <div className={`${bgCard} p-6 rounded-[2.25rem] border shadow-md`}>
                <h3 className={`text-xl font-bold font-heading ${textHeading}`}>
                  Contact & Property Enquiries ({contactMessages.length})
                </h3>
                <p className={`text-xs ${textMuted} mt-0.5`}>
                  Messages submitted by clients via Contact Us and Property Enquiry forms.
                </p>
              </div>

              <div className="space-y-4">
                {contactMessages.map((msg) => (
                  <div key={msg.id} className={`${bgCard} p-6 rounded-[2rem] border shadow-md space-y-3`}>
                    <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
                      <div>
                        <h4 className={`text-base font-bold ${textHeading}`}>{msg.senderName}</h4>
                        <p className="text-xs text-purple-400">{msg.email} &bull; {msg.phone}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] text-[10px] font-mono font-bold">
                        {msg.date}
                      </span>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-[#8DC63F] font-mono">{msg.subject}</h5>
                      <p className={`text-xs ${textMuted} mt-1 p-3 ${bgSubtle} rounded-xl border border-purple-800/40`}>
                        "{msg.message}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: WEBSITE COPY & SECTION MEDIA EDITOR */}
          {activeTab === 'content' && (
            <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
              
              <div className={`${bgCard} p-6 sm:p-8 rounded-[2.25rem] border shadow-md space-y-6`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-800/40 pb-5">
                  <div>
                    <h3 className={`text-2xl font-bold font-heading ${textHeading}`}>
                      Live Website Copy, Pills & Section Media Editor
                    </h3>
                    <p className={`text-xs ${textMuted} mt-1`}>
                      Edit headlines, badge pills, custom image uploads (&le;5MB), and video stream URLs for each section of the site.
                    </p>
                  </div>
                  <Sparkles className="w-6 h-6 text-[#8DC63F] shrink-0" />
                </div>

                {copySaved && (
                  <div className="p-4 bg-[#8DC63F]/20 text-[#8DC63F] border border-[#8DC63F] rounded-2xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Website Content & Media Deployed Successfully! Changes are live across the application.</span>
                  </div>
                )}

                {selectedFileError && (
                  <div className="p-4 bg-red-950/80 text-red-200 border border-red-800 rounded-2xl text-xs font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{selectedFileError}</span>
                  </div>
                )}

                <form onSubmit={handleSaveCopy} className="space-y-8">
                  
                  {/* SECTION 1: HERO CANVAS */}
                  <div className={`p-6 ${bgSubtle} rounded-2xl border border-purple-800/50 space-y-4`}>
                    <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
                      <h4 className={`text-sm font-bold font-heading ${textHeading} flex items-center gap-2`}>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F]" />
                        <span>1. Hero Canvas Section</span>
                      </h4>
                      <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Homepage Top Fold</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Badge Pill Text</label>
                        <input
                          type="text"
                          value={copyForm.heroPill}
                          onChange={(e) => setCopyForm({ ...copyForm, heroPill: e.target.value })}
                          className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                          placeholder="e.g. SURV. EZEANI EMMANUEL ADOLPHUS (FNIS)"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Hero Media Type</label>
                        <div className="flex items-center gap-2 bg-[#34073E] p-1 rounded-xl">
                          <button
                            type="button"
                            onClick={() => setCopyForm({ ...copyForm, heroMediaType: 'image' })}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              copyForm.heroMediaType === 'image' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                            }`}
                          >
                            📷 Image
                          </button>
                          <button
                            type="button"
                            onClick={() => setCopyForm({ ...copyForm, heroMediaType: 'video' })}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              copyForm.heroMediaType === 'video' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                            }`}
                          >
                            🎬 Video Stream URL
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Main Hero Headline</label>
                      <input
                        type="text"
                        value={copyForm.headline}
                        onChange={(e) => setCopyForm({ ...copyForm, headline: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Hero Subheadline</label>
                      <textarea
                        rows={2}
                        value={copyForm.subheadline}
                        onChange={(e) => setCopyForm({ ...copyForm, subheadline: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F] resize-none`}
                      />
                    </div>

                    {/* Hero Media Selector / File Uploader */}
                    <div className="space-y-2 pt-1">
                      <label className={`block text-xs font-semibold ${textHeading}`}>
                        Hero {copyForm.heroMediaType === 'image' ? 'Image Asset Upload / URL' : 'Video Stream URL Link'}
                      </label>

                      {copyForm.heroMediaType === 'image' ? (
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                          <label className="bg-[#34073E] text-[#8DC63F] hover:bg-[#25042D] px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all shrink-0 flex items-center justify-center gap-1.5">
                            <Upload className="w-3.5 h-3.5" />
                            <span>Upload Image (&le;5MB)</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageFileChange(e, 'heroMedia')}
                              className="hidden"
                            />
                          </label>
                          <input
                            type="text"
                            value={copyForm.heroMedia}
                            onChange={(e) => setCopyForm({ ...copyForm, heroMedia: e.target.value })}
                            placeholder="Or enter Image URL (/images/hero-villa.jpg)..."
                            className={`flex-1 p-2.5 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-[#34073E] text-[#8DC63F]">
                            <Video className="w-4 h-4" />
                          </div>
                          <input
                            type="url"
                            value={copyForm.heroMedia}
                            onChange={(e) => setCopyForm({ ...copyForm, heroMedia: e.target.value, heroMediaType: 'video' })}
                            placeholder="Paste Video URL (e.g., https://www.youtube.com/watch?v=... or .mp4 URL)..."
                            className={`flex-1 p-2.5 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SECTION 2: WHY CHOOSE EZEANI */}
                  <div className={`p-6 ${bgSubtle} rounded-2xl border border-purple-800/50 space-y-4`}>
                    <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
                      <h4 className={`text-sm font-bold font-heading ${textHeading} flex items-center gap-2`}>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F]" />
                        <span>2. Why Ezeani / About Us Section</span>
                      </h4>
                      <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Brand Story & Vision</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Badge Pill Text</label>
                        <input
                          type="text"
                          value={copyForm.whyBadge}
                          onChange={(e) => setCopyForm({ ...copyForm, whyBadge: e.target.value })}
                          className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Section Media Type</label>
                        <div className="flex items-center gap-2 bg-[#34073E] p-1 rounded-xl">
                          <button
                            type="button"
                            onClick={() => setCopyForm({ ...copyForm, whyMediaType: 'image' })}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              copyForm.whyMediaType === 'image' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                            }`}
                          >
                            📷 Image
                          </button>
                          <button
                            type="button"
                            onClick={() => setCopyForm({ ...copyForm, whyMediaType: 'video' })}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              copyForm.whyMediaType === 'video' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                            }`}
                          >
                            🎬 Video Stream URL
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Section Headline Title</label>
                      <input
                        type="text"
                        value={copyForm.whyTitle}
                        onChange={(e) => setCopyForm({ ...copyForm, whyTitle: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Section Subtitle / Description</label>
                      <textarea
                        rows={2}
                        value={copyForm.whySubtitle}
                        onChange={(e) => setCopyForm({ ...copyForm, whySubtitle: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F] resize-none`}
                      />
                    </div>

                    {/* Why Section Media Selector */}
                    <div className="space-y-2 pt-1">
                      <label className={`block text-xs font-semibold ${textHeading}`}>
                        Why Ezeani {copyForm.whyMediaType === 'image' ? 'Image Asset Upload / URL' : 'Video Stream URL Link'}
                      </label>

                      {copyForm.whyMediaType === 'image' ? (
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                          <label className="bg-[#34073E] text-[#8DC63F] hover:bg-[#25042D] px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all shrink-0 flex items-center justify-center gap-1.5">
                            <Upload className="w-3.5 h-3.5" />
                            <span>Upload Image (&le;5MB)</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageFileChange(e, 'whyMedia')}
                              className="hidden"
                            />
                          </label>
                          <input
                            type="text"
                            value={copyForm.whyMedia}
                            onChange={(e) => setCopyForm({ ...copyForm, whyMedia: e.target.value })}
                            placeholder="Or enter Image URL (/images/hero-villa.jpg)..."
                            className={`flex-1 p-2.5 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-[#34073E] text-[#8DC63F]">
                            <Video className="w-4 h-4" />
                          </div>
                          <input
                            type="url"
                            value={copyForm.whyMedia}
                            onChange={(e) => setCopyForm({ ...copyForm, whyMedia: e.target.value, whyMediaType: 'video' })}
                            placeholder="Paste Video URL (e.g., YouTube or .mp4 link)..."
                            className={`flex-1 p-2.5 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SECTION 3: LAND SURVEYING SERVICES */}
                  <div className={`p-6 ${bgSubtle} rounded-2xl border border-purple-800/50 space-y-4`}>
                    <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
                      <h4 className={`text-sm font-bold font-heading ${textHeading} flex items-center gap-2`}>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F]" />
                        <span>3. Land Surveying & Title Services Section</span>
                      </h4>
                      <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Geospatial Bento Grid</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Badge Pill Text</label>
                        <input
                          type="text"
                          value={copyForm.surveyBadge}
                          onChange={(e) => setCopyForm({ ...copyForm, surveyBadge: e.target.value })}
                          className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Section Media Type</label>
                        <div className="flex items-center gap-2 bg-[#34073E] p-1 rounded-xl">
                          <button
                            type="button"
                            onClick={() => setCopyForm({ ...copyForm, surveyMediaType: 'image' })}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              copyForm.surveyMediaType === 'image' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                            }`}
                          >
                            📷 Image
                          </button>
                          <button
                            type="button"
                            onClick={() => setCopyForm({ ...copyForm, surveyMediaType: 'video' })}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              copyForm.surveyMediaType === 'video' ? 'bg-[#8DC63F] text-[#1E0424]' : 'text-purple-200'
                            }`}
                          >
                            🎬 Video Stream URL
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Section Title</label>
                      <input
                        type="text"
                        value={copyForm.surveyTitle}
                        onChange={(e) => setCopyForm({ ...copyForm, surveyTitle: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Section Subtitle</label>
                      <textarea
                        rows={2}
                        value={copyForm.surveySubtitle}
                        onChange={(e) => setCopyForm({ ...copyForm, surveySubtitle: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F] resize-none`}
                      />
                    </div>

                    {/* Survey Section Media Selector */}
                    <div className="space-y-2 pt-1">
                      <label className={`block text-xs font-semibold ${textHeading}`}>
                        Surveying Showcase {copyForm.surveyMediaType === 'image' ? 'Image Asset Upload / URL' : 'Video Stream URL Link'}
                      </label>

                      {copyForm.surveyMediaType === 'image' ? (
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                          <label className="bg-[#34073E] text-[#8DC63F] hover:bg-[#25042D] px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all shrink-0 flex items-center justify-center gap-1.5">
                            <Upload className="w-3.5 h-3.5" />
                            <span>Upload Image (&le;5MB)</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageFileChange(e, 'surveyMedia')}
                              className="hidden"
                            />
                          </label>
                          <input
                            type="text"
                            value={copyForm.surveyMedia}
                            onChange={(e) => setCopyForm({ ...copyForm, surveyMedia: e.target.value })}
                            placeholder="Or enter Image URL (/images/hero-surveyor.jpg)..."
                            className={`flex-1 p-2.5 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-[#34073E] text-[#8DC63F]">
                            <Video className="w-4 h-4" />
                          </div>
                          <input
                            type="url"
                            value={copyForm.surveyMedia}
                            onChange={(e) => setCopyForm({ ...copyForm, surveyMedia: e.target.value, surveyMediaType: 'video' })}
                            placeholder="Paste Video URL (e.g., YouTube or .mp4 link)..."
                            className={`flex-1 p-2.5 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SECTION 4: CONTACT & REGIONAL OFFICES */}
                  <div className={`p-6 ${bgSubtle} rounded-2xl border border-purple-800/50 space-y-4`}>
                    <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
                      <h4 className={`text-sm font-bold font-heading ${textHeading} flex items-center gap-2`}>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F]" />
                        <span>4. Contact & Regional Office Addresses</span>
                      </h4>
                      <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Direct Channels</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Primary Hotline</label>
                        <input
                          type="text"
                          value={copyForm.phone}
                          onChange={(e) => setCopyForm({ ...copyForm, phone: e.target.value })}
                          className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>WhatsApp Number</label>
                        <input
                          type="text"
                          value={copyForm.whatsapp}
                          onChange={(e) => setCopyForm({ ...copyForm, whatsapp: e.target.value })}
                          className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`block text-xs font-semibold ${textHeading}`}>Support Email</label>
                        <input
                          type="email"
                          value={copyForm.email}
                          onChange={(e) => setCopyForm({ ...copyForm, email: e.target.value })}
                          className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Lagos Regional Office</label>
                      <input
                        type="text"
                        value={copyForm.lagosOffice}
                        onChange={(e) => setCopyForm({ ...copyForm, lagosOffice: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Abuja Regional Office</label>
                      <input
                        type="text"
                        value={copyForm.abujaOffice}
                        onChange={(e) => setCopyForm({ ...copyForm, abujaOffice: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                      />
                    </div>
                  </div>

                  {/* SECTION 5: FOOTER CTA CONVERSION BLOCK */}
                  <div className={`p-6 ${bgSubtle} rounded-2xl border border-purple-800/50 space-y-4`}>
                    <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
                      <h4 className={`text-sm font-bold font-heading ${textHeading} flex items-center gap-2`}>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F]" />
                        <span>5. Footer Call-To-Action (CTA) Block</span>
                      </h4>
                      <span className="text-[10px] font-mono text-[#8DC63F] font-bold">Bottom Fold</span>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>Badge Pill Text</label>
                      <input
                        type="text"
                        value={copyForm.footerCtaBadge}
                        onChange={(e) => setCopyForm({ ...copyForm, footerCtaBadge: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>CTA Headline</label>
                      <input
                        type="text"
                        value={copyForm.footerCtaTitle}
                        onChange={(e) => setCopyForm({ ...copyForm, footerCtaTitle: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F]`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`block text-xs font-semibold ${textHeading}`}>CTA Subtitle Description</label>
                      <textarea
                        rows={2}
                        value={copyForm.footerCtaSubtitle}
                        onChange={(e) => setCopyForm({ ...copyForm, footerCtaSubtitle: e.target.value })}
                        className={`w-full p-3 ${bgCard} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading} focus:border-[#8DC63F] resize-none`}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Deploy All Section Copy & Media Updates Live</span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}

          {/* TAB 7: MEDIA & VIDEO HUB */}
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
                  <label className={`font-semibold ${textHeading}`}>Publishing Status</label>
                  <select
                    value={propForm.publishStatus}
                    onChange={(e) => setPropForm({ ...propForm, publishStatus: e.target.value })}
                    className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                  >
                    <option value="Published">Published (Live)</option>
                    <option value="Draft">Draft (Internal Only)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
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
              </div>

              <div className="space-y-1.5">
                <label className={`font-semibold ${textHeading}`}>Survey & Title Status</label>
                <input
                  type="text"
                  value={propForm.surveyStatus}
                  onChange={(e) => setPropForm({ ...propForm, surveyStatus: e.target.value })}
                  placeholder="e.g. Verified Governor's Consent"
                  className={`w-full p-3 ${bgSubtle} border border-purple-800/60 rounded-xl text-xs font-medium ${textHeading}`}
                />
              </div>

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

      {/* DESTRUCTIVE ACTION CONFIRMATION MODAL */}
      {deleteConfirmModal.open && (
        <div className="fixed inset-0 z-60 bg-[#1E0424]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#34073E] text-white w-full max-w-sm rounded-[2rem] border border-red-800 p-6 space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-red-950 text-red-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-lg font-bold font-heading">Confirm Permanent Delete</h4>
              <p className="text-xs text-purple-200">
                Are you sure you want to permanently delete <strong className="text-white">{deleteConfirmModal.title}</strong>? This action cannot be undone.
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmModal({ open: false, type: '', id: null, title: '' })}
                className="px-5 py-2.5 bg-purple-900 text-purple-200 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={executeDelete}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      {/* IN-BROWSER CV DOCUMENT VIEWER MODAL */}
      {selectedCvCandidate && (
        <div className="fixed inset-0 z-60 bg-[#1E0424]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-[#1E0424] text-white w-full max-w-4xl max-h-[92vh] rounded-[2.5rem] border border-purple-800 shadow-2xl flex flex-col overflow-hidden my-auto">
            
            {/* Viewer Header & PDF Toolbar */}
            <div className="bg-[#34073E] px-6 py-4 border-b border-purple-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#8DC63F] text-[#1E0424] font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold font-heading">{selectedCvCandidate.candidateName} &mdash; Official Curriculum Vitae</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8DC63F]/20 text-[#8DC63F] font-mono text-[10px] font-bold uppercase">
                      {selectedCvCandidate.role}
                    </span>
                  </div>
                  <p className="text-xs text-purple-200/80">
                    Submitted: {selectedCvCandidate.appliedDate} &bull; Document Format: PDF (SURCON Verified)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setCareerApplications(prev => prev.map(a => a.id === selectedCvCandidate.id ? { ...a, status: 'Shortlisted' } : a));
                    setSelectedCvCandidate(prev => ({ ...prev, status: 'Shortlisted' }));
                    addAuditLog('Candidate Shortlisted', `${selectedCvCandidate.candidateName} shortlisted from CV viewer`);
                  }}
                  className="px-3.5 py-1.5 bg-[#8DC63F] text-[#1E0424] rounded-xl text-xs font-bold hover:bg-[#7bb532]"
                >
                  {selectedCvCandidate.status === 'Shortlisted' ? '✓ Shortlisted' : 'Shortlist Candidate'}
                </button>

                <button
                  onClick={() => setSelectedCvCandidate(null)}
                  className="p-2 rounded-full bg-purple-900/60 text-purple-200 hover:text-white"
                  title="Close Viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Document Paper Sheet Area */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto bg-[#FAF7FC] text-[#1F0A26]">
              <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-purple-100 space-y-8 text-xs font-sans text-[#1F0A26]">
                
                {/* Resume Document Header */}
                <div className="border-b border-purple-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#34073E] tracking-tight">
                      {selectedCvCandidate.candidateName}
                    </h2>
                    <p className="text-sm font-bold text-[#8DC63F] font-mono uppercase tracking-wider mt-1">
                      {selectedCvCandidate.role}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[#52525B] mt-2 font-mono">
                      <span>SURCON Reg: SURV/2021/88402</span>
                      <span>&bull;</span>
                      <span>Licensed Cadastral Practitioner</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF7FC] rounded-2xl border border-purple-200 text-[11px] text-[#34073E] space-y-1 shrink-0 font-medium">
                    <p>📧 {selectedCvCandidate.email}</p>
                    <p>📞 {selectedCvCandidate.phone}</p>
                    <p>📍 Lagos & Abuja Operational Base</p>
                  </div>
                </div>

                {/* Professional Profile */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase font-bold text-[#34073E] border-b border-purple-100 pb-1">
                    Professional Executive Summary
                  </h4>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    Highly skilled and results-oriented {selectedCvCandidate.role} with {selectedCvCandidate.experience}. Specializing in GIS satellite mapping, cadastral boundary determination, Certificate of Occupancy (C of O) verification, land title registration, and high-yield real estate asset portfolio advisory across Nigeria.
                  </p>
                </div>

                {/* Experience Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase font-bold text-[#34073E] border-b border-purple-100 pb-1">
                    Key Work Experience & Major Field Projects
                  </h4>

                  <div className="space-y-3">
                    <div className="p-4 bg-[#FAF7FC] rounded-xl border border-purple-100 space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-[#34073E]">
                        <span>Lead Cadastral Surveyor & Title Verification Specialist</span>
                        <span className="text-[10px] font-mono text-[#8DC63F]">2022 &ndash; Present</span>
                      </div>
                      <p className="text-[11px] text-[#52525B]">
                        Led over 140+ boundary survey exercises in Lekki Phase 1, Ikoyi, Victoria Island, and Guzape Abuja. Successfully lodged certified survey plans with the Surveyor-General's office for Governor's Consent approvals with zero boundary overlap disputes.
                      </p>
                    </div>

                    <div className="p-4 bg-[#FAF7FC] rounded-xl border border-purple-100 space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-[#34073E]">
                        <span>Senior Land & Real Estate Advisor</span>
                        <span className="text-[10px] font-mono text-[#8DC63F]">2019 &ndash; 2022</span>
                      </div>
                      <p className="text-[11px] text-[#52525B]">
                        Managed title search verification, perfection of titles, and corporate acquisition due diligence for residential estates, commercial office towers, and industrial logistics parks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Skills & Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase font-bold text-[#34073E] border-b border-purple-100 pb-1">
                      Core Competencies & Tools
                    </h4>
                    <ul className="text-xs text-[#52525B] space-y-1 list-disc list-inside">
                      <li>Leica RTK GPS & Total Station Operations</li>
                      <li>GIS Spatial Analysis (ArcGIS, QGIS, AutoCAD Map3D)</li>
                      <li>Cadastral Title Search & C of O Verification</li>
                      <li>SURCON Regulatory Compliance</li>
                      <li>Drone Photogrammetry & Topographic Mapping</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase font-bold text-[#34073E] border-b border-purple-100 pb-1">
                      Education & Credentials
                    </h4>
                    <div className="text-xs text-[#52525B] space-y-1.5">
                      <p className="font-bold text-[#34073E]">B.Sc. Surveying & Geoinformatics (First Class)</p>
                      <p className="text-[11px]">University of Lagos &bull; 2018</p>
                      <div className="p-2.5 bg-[#8DC63F]/15 rounded-xl text-[11px] text-[#34073E] font-semibold border border-[#8DC63F]/40 flex items-center gap-2 mt-2">
                        <CheckCircle2 className="w-4 h-4 text-[#8DC63F]" />
                        <span>Verified Member, Nigerian Institution of Surveyors (NIS)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Official HR Verification Stamp */}
                <div className="pt-6 border-t border-purple-200 flex items-center justify-between">
                  <div className="text-[10px] text-[#52525B] font-mono">
                    Ezeani Properties Recruitment System &bull; ID #{selectedCvCandidate.id}
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-[#8DC63F] text-[#1E0424] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Candidate CV</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Viewer Modal Bottom Action Controls */}
            <div className="bg-[#34073E] px-6 py-4 border-t border-purple-800 flex items-center justify-between shrink-0">
              <span className="text-xs text-purple-200">
                Viewing Candidate <strong className="text-white">{selectedCvCandidate.candidateName}</strong>
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCvCandidate(null)}
                  className="px-5 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-900 text-purple-200 text-xs font-semibold"
                >
                  Close Document
                </button>
                <button
                  onClick={() => {
                    alert(`Interview schedule request initiated for ${selectedCvCandidate.candidateName}. Email notification sent to candidate!`);
                    addAuditLog('Interview Scheduled', `Interview scheduled with ${selectedCvCandidate.candidateName}`);
                    setSelectedCvCandidate(null);
                  }}
                  className="px-6 py-2 rounded-xl bg-[#8DC63F] hover:bg-[#7bb532] text-[#1E0424] text-xs font-bold"
                >
                  Schedule Candidate Interview
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
