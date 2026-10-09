import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyListings from './components/PropertyListings';
import PropertyModal from './components/PropertyModal';
import WhyEzeani from './components/WhyEzeani';
import SurveyServices from './components/SurveyServices';
import BookingModal from './components/BookingModal';
import MyBookingsModal from './components/MyBookingsModal';
import FavoritesDrawer from './components/FavoritesDrawer';
import CompareModal from './components/CompareModal';
import NewsModal from './components/NewsModal';
import CareersModal from './components/CareersModal';
import ContactsModal from './components/ContactsModal';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

import { MOCK_PROPERTIES, SAMPLE_BOOKINGS, EZEANI_COMPANY_INFO } from './data/mockData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('ezeani_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [currency, setCurrency] = useState('NGN'); // 'NGN' | 'USD'

  // Dynamic Properties Portfolio State
  const [properties, setProperties] = useState(() => {
    try {
      const saved = localStorage.getItem('ezeani_properties');
      return saved ? JSON.parse(saved) : MOCK_PROPERTIES;
    } catch (e) {
      return MOCK_PROPERTIES;
    }
  });

  useEffect(() => {
    localStorage.setItem('ezeani_properties', JSON.stringify(properties));
  }, [properties]);

  // Dynamic Company Copy Info State
  const [companyInfo, setCompanyInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('ezeani_company_info');
      return saved ? JSON.parse(saved) : EZEANI_COMPANY_INFO;
    } catch (e) {
      return EZEANI_COMPANY_INFO;
    }
  });

  useEffect(() => {
    localStorage.setItem('ezeani_company_info', JSON.stringify(companyInfo));
  }, [companyInfo]);

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('ezeani_favorites');
      return saved ? JSON.parse(saved) : ['ez-prop-1'];
    } catch (e) {
      return ['ez-prop-1'];
    }
  });

  useEffect(() => {
    localStorage.setItem('ezeani_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const [comparedIds, setComparedIds] = useState([]);

  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('ezeani_bookings');
      return saved ? JSON.parse(saved) : SAMPLE_BOOKINGS;
    } catch (e) {
      return SAMPLE_BOOKINGS;
    }
  });

  useEffect(() => {
    localStorage.setItem('ezeani_bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Modal States
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [myBookingsModalOpen, setMyBookingsModalOpen] = useState(false);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);
  const [contactsModalOpen, setContactsModalOpen] = useState(false);
  const [adminDashboardOpen, setAdminDashboardOpen] = useState(false);

  // Dedicated Secret Admin Route Handling (/internal-admin or #admin)
  const [isAdminRoute, setIsAdminRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      return path === '/internal-admin' || path === '/admin' || hash === '#internal-admin' || hash === '#admin';
    }
    return false;
  });

  useEffect(() => {
    const handleLocationChange = () => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname.toLowerCase();
        const hash = window.location.hash.toLowerCase();
        const shouldBeAdmin = path === '/internal-admin' || path === '/admin' || hash === '#internal-admin' || hash === '#admin';
        setIsAdminRoute(shouldBeAdmin);
        if (shouldBeAdmin) setAdminDashboardOpen(true);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Keyboard shortcut for staff: Ctrl + Shift + A
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        window.location.hash = '#internal-admin';
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
      localStorage.setItem('ezeani_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
      localStorage.setItem('ezeani_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleCompare = (id) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 properties at a time.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  const handleSaveBooking = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  // Property CRUD handlers for Admin
  const handleAddProperty = (newProp) => {
    setProperties((prev) => [newProp, ...prev]);
  };

  const handleUpdateProperty = (updatedProp) => {
    setProperties((prev) => prev.map((p) => (p.id === updatedProp.id ? updatedProp : p)));
  };

  const handleDeleteProperty = (id) => {
    if (confirm('Are you sure you want to delete this property listing?')) {
      setProperties((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Booking handlers for Admin
  const handleUpdateBookingStatus = (id, newStatus) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b)));
  };

  const handleDeleteBooking = (id) => {
    if (confirm('Are you sure you want to cancel and remove this booking schedule?')) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1E0424] text-[#1F0A26] dark:text-[#F7F2FA] flex flex-col justify-between font-sans selection:bg-[#34073E] selection:text-white dark:selection:bg-[#B462E8] dark:selection:text-[#1E0424] transition-colors duration-300">
      
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
        onOpenBooking={handleOpenBooking}
        onOpenMyBookings={() => setMyBookingsModalOpen(true)}
        comparedCount={comparedIds.length}
        onOpenCompare={() => setCompareModalOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
        onOpenNews={() => setNewsModalOpen(true)}
        onOpenCareers={() => setCareersModalOpen(true)}
        onOpenContacts={() => setContactsModalOpen(true)}
        onOpenAdmin={() => setAdminDashboardOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onSearchProperties={() => setActiveSection('properties')}
          onQuickSurvey={() => setActiveSection('surveying')}
          onQuickBuild={() => setActiveSection('construction')}
          currency={currency}
          companyInfo={companyInfo}
        />

        {/* Featured Properties */}
        <PropertyListings
          properties={properties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onOpenBooking={handleOpenBooking}
          comparedIds={comparedIds}
          onToggleCompare={handleToggleCompare}
          onOpenCompare={() => setCompareModalOpen(true)}
          currency={currency}
        />

        {/* Why Ezeani & 4-Step Process */}
        <WhyEzeani onOpenBooking={handleOpenBooking} />

        {/* Land Surveying Services */}
        <SurveyServices onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenMyBookings={() => setMyBookingsModalOpen(true)}
        onOpenAdmin={() => setAdminDashboardOpen(true)}
      />

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onOpenBooking={handleOpenBooking}
          isFavorite={favorites.includes(selectedProperty.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
        onSaveBooking={handleSaveBooking}
      />

      {/* My Bookings Modal */}
      <MyBookingsModal
        isOpen={myBookingsModalOpen}
        onClose={() => setMyBookingsModalOpen(false)}
        bookings={bookings}
      />

      {/* Saved Favorites Drawer */}
      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
        favorites={favorites}
        properties={properties}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onOpenBooking={handleOpenBooking}
        comparedIds={comparedIds}
        onToggleCompare={handleToggleCompare}
        onOpenCompare={() => setCompareModalOpen(true)}
      />

      {/* Compare Modal */}
      <CompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        comparedIds={comparedIds}
        properties={properties}
        onOpenBooking={handleOpenBooking}
      />

      {/* News Modal */}
      <NewsModal
        isOpen={newsModalOpen}
        onClose={() => setNewsModalOpen(false)}
      />

      {/* Careers Modal */}
      <CareersModal
        isOpen={careersModalOpen}
        onClose={() => setCareersModalOpen(false)}
      />

      {/* Contacts Modal */}
      <ContactsModal
        isOpen={contactsModalOpen}
        onClose={() => setContactsModalOpen(false)}
      />

      {/* Admin Command Center Portal */}
      <AdminDashboard
        isOpen={adminDashboardOpen || isAdminRoute}
        onClose={() => {
          setAdminDashboardOpen(false);
          setIsAdminRoute(false);
          if (window.location.hash.includes('admin')) {
            window.location.hash = '';
          }
        }}
        properties={properties}
        onAddProperty={handleAddProperty}
        onUpdateProperty={handleUpdateProperty}
        onDeleteProperty={handleDeleteProperty}
        bookings={bookings}
        onUpdateBookingStatus={handleUpdateBookingStatus}
        onDeleteBooking={handleDeleteBooking}
        companyInfo={companyInfo}
        onUpdateCompanyInfo={(newInfo) => setCompanyInfo(newInfo)}
        onOpenLiveSite={() => {
          setAdminDashboardOpen(false);
          setIsAdminRoute(false);
          if (window.location.hash.includes('admin')) {
            window.location.hash = '';
          }
        }}
      />

    </div>
  );
}

