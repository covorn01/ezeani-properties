import React, { useState } from 'react';
import { 
  CreditCard, 
  Building, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  Lock, 
  FileCheck, 
  Globe, 
  Sparkles,
  Smartphone,
  ExternalLink,
  Receipt,
  Download
} from 'lucide-react';
import { CORPORATE_BANK_ACCOUNTS, PAYMENT_SERVICES_LIST, EZEANI_COMPANY_INFO, formatCurrencyPrice } from '../data/mockData';

export default function PaymentOptionsSection({ onOpenBooking, currency = 'NGN' }) {
  const [selectedServiceId, setSelectedServiceId] = useState('inspection');
  const [paymentMode, setPaymentMode] = useState('online'); // 'online' | 'transfer'
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [onlinePayer, setOnlinePayer] = useState({ name: '', email: '', phone: '' });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentRef, setPaymentRef] = useState('');

  const selectedService = PAYMENT_SERVICES_LIST.find(s => s.id === selectedServiceId) || PAYMENT_SERVICES_LIST[0];

  const handleCopy = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(null), 3000);
  };

  const handleSimulateOnlinePayment = (e) => {
    e.preventDefault();
    if (!onlinePayer.name || !onlinePayer.email) return;

    const ref = `EZ-PAY-${Math.floor(100000 + Math.random() * 900000)}`;
    setPaymentRef(ref);
    setPaymentSuccess(true);
  };

  return (
    <section id="payment-options" className="py-20 lg:py-28 bg-white dark:bg-[#120216] text-[#171717] dark:text-purple-100 transition-colors duration-300 relative overflow-hidden border-t border-b border-purple-200/50 dark:border-purple-900/50">
      
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* 1. Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-purple-200/80 dark:border-purple-800/60 pb-10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-xs font-mono font-bold uppercase tracking-widest border border-purple-200/80 dark:border-purple-800/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8DC63F]" />
              <span>FLEXIBLE & VERIFIED PAYMENT CHANNELS • 100% SECURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#34073E] dark:text-white tracking-tight leading-[1.15]">
              Pay Online Or Via Direct Corporate Bank Transfer.
            </h2>

            <p className="text-base sm:text-lg text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
              We provide total financial flexibility and peace of mind. Pay securely online via debit card, USSD, or digital checkout, or make a traditional corporate bank wire transfer to our verified company accounts for <strong className="text-[#34073E] dark:text-white">inspections</strong>, <strong className="text-[#34073E] dark:text-white">executive consultations</strong>, <strong className="text-[#34073E] dark:text-white">title searches</strong>, or <strong className="text-[#34073E] dark:text-white">property deposits</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${EZEANI_COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Ezeani%20Properties%20Finance%20Desk,%20I%20would%20like%20to%20confirm%20payment%20options%20and%20verify%20corporate%20account%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Finance Desk</span>
            </a>

            <button
              type="button"
              onClick={() => {
                if (onOpenBooking) {
                  onOpenBooking({
                    serviceCategory: 'Site Inspection',
                    notes: 'Payment Assistance & Fee Consultation'
                  });
                }
              }}
              className="px-5 py-3 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#B462E8] dark:hover:bg-[#c27af0] text-white dark:text-[#1E0424] text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule With Booking Desk</span>
            </button>
          </div>
        </div>

        {/* 2. Visual Banner: Luxury Fintech & Corporate Banking Infrastructure */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-200/80 dark:border-purple-800/80 bg-[#34073E] text-white">
          <div className="relative aspect-21/9 lg:aspect-24/9 min-h-[360px] sm:min-h-[420px]">
            <img
              src="/images/secure-payments.jpg"
              alt="Ezeani Properties Secure Online Checkout and Corporate Bank Transfers"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E0424] via-[#1E0424]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E0424]/90 via-[#1E0424]/40 to-transparent" />

            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#8DC63F] text-[#1E0424] text-xs font-mono font-bold uppercase tracking-wider shadow-md">
                Verified Commercial Accounts
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-mono border border-white/20">
                256-Bit SSL Encrypted Checkout
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight drop-shadow-md">
                Your Preferred Channel. Complete Transparency.
              </h3>
              <p className="mt-2 text-xs sm:text-base text-purple-200 leading-relaxed drop-shadow-sm font-sans">
                Every transaction receives an official timestamped digital receipt, automatic SMS/email confirmation, and direct bank reconciliation without hidden third-party fees.
              </p>
            </div>
          </div>

          {/* Quick Pillars Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-purple-800/60 bg-[#1E0424] border-t border-purple-800/80 p-5 sm:p-7">
            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold">CARDS & USSD</div>
              <div className="text-base font-bold text-white">Instant Online Pay</div>
              <p className="text-[11px] text-purple-300">Mastercard, Visa, Verve & Apple Pay</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold">CORPORATE WIRE</div>
              <div className="text-base font-bold text-white">Traditional Bank Transfer</div>
              <p className="text-[11px] text-purple-300">Zenith, Access & GTBank Corporate</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold">DIASPORA CLIENTS</div>
              <div className="text-base font-bold text-white">USD / GBP / EUR Wire</div>
              <p className="text-[11px] text-purple-300">Direct domiciliary swift transfer</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1">
              <div className="text-xs font-mono uppercase text-[#8DC63F] font-bold">SECURITY</div>
              <div className="text-base font-bold text-white">Audited Escrow Vault</div>
              <p className="text-[11px] text-purple-300">100% receipt & title perfection audit</p>
            </div>
          </div>
        </div>

        {/* 3. The Two Core Payment Channels Compared */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Method 1: Instant Online Payment Through Website */}
          <div className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-200 dark:border-purple-800/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] flex items-center justify-center shadow-xs">
                  <CreditCard className="w-6 h-6 text-[#8DC63F]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#8DC63F]/20 text-[#34073E] dark:text-[#8DC63F] text-[11px] font-mono font-bold uppercase">
                  Channel 01 • Instant Online
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                  Pay Online Instantly Via Website
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
                  Ideal for fast inspection bookings, consultation tickets, and urgent title registry retainers. Your appointment is automatically confirmed the second checkout completes.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {[
                  "Debit & Credit Cards: Nigerian Mastercard, Visa & Verve",
                  "Direct Bank USSD Codes (*966#, *737#, *901#, etc.)",
                  "International / Diaspora Cards (USD, GBP, EUR accepted)",
                  "Instant digital receipt and booking SMS dispatched immediately"
                ].map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#3F3F46] dark:text-purple-200">
                    <CheckCircle2 className="w-4 h-4 text-[#8DC63F] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-200 dark:border-purple-800/60 flex items-center justify-between text-xs font-mono text-[#7A2FB0] dark:text-[#B462E8]">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#8DC63F]" />
                <span>PCI-DSS Level 1 Secure Gateway</span>
              </span>
              <span className="font-bold text-[#8DC63F]">Instant Confirmation</span>
            </div>
          </div>

          {/* Method 2: Traditional Corporate Bank Wire & NIP Transfer */}
          <div className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-200 dark:border-purple-800/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#34073E] text-[#8DC63F] flex items-center justify-center shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-[#7A2FB0] dark:text-[#B462E8] text-[11px] font-mono font-bold uppercase">
                  Channel 02 • Traditional Transfer
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white tracking-tight">
                  Direct Corporate Bank Transfer
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#52525B] dark:text-purple-200 leading-relaxed font-sans">
                  Prefer traditional bank transactions? Wire directly to our official corporate accounts via your banking app, internet banking, or branch teller deposit.
                </p>
              </div>

              {/* Corporate Accounts Accordion / Cards */}
              <div className="space-y-2.5 pt-2">
                {CORPORATE_BANK_ACCOUNTS.map((acc, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold text-[#34073E] dark:text-white flex items-center gap-2">
                        <span>{acc.bankName}</span>
                        <span className="text-[10px] text-purple-400">({acc.currency})</span>
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-[#7A2FB0] dark:text-[#8DC63F]">
                        {acc.accountNumber}
                      </div>
                      <div className="text-[11px] text-[#71717A] dark:text-purple-300 truncate max-w-[220px]">
                        {acc.accountName}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(acc.accountNumber)}
                      className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-[#8DC63F] dark:bg-purple-900/60 dark:hover:bg-[#8DC63F] text-[#34073E] hover:text-[#1E0424] dark:text-white dark:hover:text-[#1E0424] text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border border-purple-200/80 dark:border-purple-700 cursor-pointer"
                      title="Copy Account Number"
                    >
                      {copiedAccount === acc.accountNumber ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#1E0424]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-200 dark:border-purple-800/60 flex items-center justify-between text-xs font-mono text-[#7A2FB0] dark:text-[#B462E8]">
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#8DC63F]" />
                <span>Verified Corporate Entity (RC)</span>
              </span>
              <span className="text-purple-400">Zenith • Access • GTB</span>
            </div>
          </div>

        </div>

        {/* 4. Interactive Quick Payment Terminal & Invoice Selector */}
        <div className="bg-[#FAF7FC] dark:bg-[#1E0424] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-purple-200/90 dark:border-purple-800/80 shadow-xl space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A2FB0] dark:text-[#B462E8]">
              INTERACTIVE SERVICE PAYMENT TERMINAL
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] dark:text-white">
              Choose Service & Pay With Your Preferred Method
            </h3>
            <p className="text-xs sm:text-sm text-[#52525B] dark:text-purple-200 font-sans">
              Select the service you wish to acquire below, select either online card/USSD checkout or direct corporate bank transfer, and proceed smoothly.
            </p>
          </div>

          {/* Service Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PAYMENT_SERVICES_LIST.map((srv) => {
              const isSelected = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => {
                    setSelectedServiceId(srv.id);
                    setPaymentSuccess(false);
                  }}
                  className={`p-4 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#34073E] text-white dark:bg-[#B462E8] dark:text-[#1E0424] border-[#8DC63F] shadow-lg ring-2 ring-[#8DC63F]'
                      : 'bg-white dark:bg-purple-950/40 text-[#171717] dark:text-white border-purple-200 dark:border-purple-800/80 hover:border-[#7A2FB0]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold font-heading line-clamp-1">{srv.name}</div>
                    <div className="text-[11px] opacity-75 line-clamp-2 leading-snug">{srv.desc}</div>
                  </div>

                  <div className="pt-3 mt-2 border-t border-purple-200/30 dark:border-purple-700/40 font-mono font-bold text-sm">
                    {currency === 'USD' ? `$${srv.feeUsd.toLocaleString()}` : `₦${srv.feeNgn.toLocaleString()}`}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Payment Mode Selector Tabs */}
          <div className="flex items-center gap-3 border-b border-purple-200 dark:border-purple-800/80 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-[#71717A] dark:text-purple-300 mr-2">
              Payment Method:
            </span>

            <button
              type="button"
              onClick={() => {
                setPaymentMode('online');
                setPaymentSuccess(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                paymentMode === 'online'
                  ? 'bg-[#7A2FB0] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-sm'
                  : 'bg-white dark:bg-purple-950/60 text-[#34073E] dark:text-purple-200 border border-purple-200 dark:border-purple-800'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay Online (Cards / USSD)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPaymentMode('transfer');
                setPaymentSuccess(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                paymentMode === 'transfer'
                  ? 'bg-[#7A2FB0] text-white dark:bg-[#B462E8] dark:text-[#1E0424] shadow-sm'
                  : 'bg-white dark:bg-purple-950/60 text-[#34073E] dark:text-purple-200 border border-purple-200 dark:border-purple-800'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Direct Bank Transfer</span>
            </button>
          </div>

          {/* Interactive Pane Based on Payment Mode */}
          {paymentMode === 'online' ? (
            /* Mode 1: Online Checkout Terminal */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Form Input */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold font-heading text-[#171717] dark:text-white">
                    Instant Online Checkout for: {selectedService.name}
                  </h4>
                  <p className="text-xs text-[#71717A] dark:text-purple-300">
                    Enter your contact details to generate your digital transaction token and proceed to secure checkout.
                  </p>
                </div>

                {paymentSuccess ? (
                  /* Success State with Invoice Token */
                  <div className="p-6 rounded-2xl bg-[#8DC63F]/15 border border-[#8DC63F]/50 space-y-4 animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#8DC63F] text-[#1E0424] flex items-center justify-center font-bold">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-base font-bold text-[#1E0424] dark:text-white">
                          Payment Reference Generated!
                        </h5>
                        <p className="text-xs text-[#3F3F46] dark:text-purple-200">
                          Ref: <strong className="font-mono">{paymentRef}</strong>
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-[#1E0424] border border-purple-100 dark:border-purple-800 text-xs space-y-1.5 font-mono">
                      <div className="flex justify-between">
                        <span className="text-[#71717A]">Service:</span>
                        <span className="font-bold text-[#34073E] dark:text-white">{selectedService.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#71717A]">Payer:</span>
                        <span className="font-bold text-[#34073E] dark:text-white">{onlinePayer.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#71717A]">Amount:</span>
                        <span className="font-bold text-[#8DC63F]">
                          {currency === 'USD' ? `$${selectedService.feeUsd.toLocaleString()}` : `₦${selectedService.feeNgn.toLocaleString()}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#71717A]">Status:</span>
                        <span className="font-bold text-[#25D366]">Verified & Dispatched to Booking Desk</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={`https://wa.me/${EZEANI_COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Ezeani%20Finance,%20I%20have%20initiated%20payment%20ref:%20${paymentRef}%20for%20${encodeURIComponent(selectedService.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Confirm Receipt on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setPaymentSuccess(false)}
                        className="px-4 py-2 rounded-xl bg-purple-100 dark:bg-purple-900 text-[#34073E] dark:text-white text-xs font-bold hover:bg-purple-200 transition-all cursor-pointer"
                      >
                        Make Another Payment
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSimulateOnlinePayment} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                        Payer Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={onlinePayer.name}
                        onChange={(e) => setOnlinePayer({ ...onlinePayer, name: e.target.value })}
                        placeholder="e.g. Barrister Ngozi Adeleke"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                          Email Address (for receipt) *
                        </label>
                        <input
                          type="email"
                          required
                          value={onlinePayer.email}
                          onChange={(e) => setOnlinePayer({ ...onlinePayer, email: e.target.value })}
                          placeholder="client@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-[#52525B] dark:text-purple-200 mb-1 font-bold">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={onlinePayer.phone}
                          onChange={(e) => setOnlinePayer({ ...onlinePayer, phone: e.target.value })}
                          placeholder="+234 or international"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A2FB0] dark:text-white font-medium"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-5 rounded-xl bg-[#8DC63F] hover:bg-[#7db437] text-[#1E0424] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Lock className="w-4 h-4" />
                      <span>
                        Pay {currency === 'USD' ? `$${selectedService.feeUsd.toLocaleString()}` : `₦${selectedService.feeNgn.toLocaleString()}`} Securely Online
                      </span>
                    </button>
                  </form>
                )}
              </div>

              {/* Order Summary & Security Badges (5 Cols) */}
              <div className="lg:col-span-5 bg-white dark:bg-purple-950/40 rounded-2xl p-6 border border-purple-200 dark:border-purple-800/80 space-y-4">
                <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-800/60 pb-3">
                  <span className="text-xs font-mono font-bold uppercase text-[#7A2FB0] dark:text-[#B462E8]">
                    TRANSACTION SUMMARY
                  </span>
                  <Receipt className="w-4 h-4 text-[#8DC63F]" />
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#71717A] dark:text-purple-300">Service Fee:</span>
                    <span className="font-bold text-[#171717] dark:text-white font-mono">
                      {currency === 'USD' ? `$${selectedService.feeUsd.toLocaleString()}` : `₦${selectedService.feeNgn.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717A] dark:text-purple-300">Portal Convenience Fee:</span>
                    <span className="font-bold text-[#8DC63F] font-mono">₦0.00 (Free)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717A] dark:text-purple-300">Escrow Title Security:</span>
                    <span className="font-bold text-[#8DC63F]">Included</span>
                  </div>
                  <div className="pt-2 border-t border-purple-100 dark:border-purple-800/60 flex justify-between text-sm font-bold">
                    <span>Total Payable:</span>
                    <span className="text-[#34073E] dark:text-[#8DC63F] font-mono">
                      {currency === 'USD' ? `$${selectedService.feeUsd.toLocaleString()}` : `₦${selectedService.feeNgn.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-[11px] text-[#52525B] dark:text-purple-200 space-y-1">
                  <p className="font-bold text-[#34073E] dark:text-white">Official Receipt Guaranteed</p>
                  <p>Your payment generates an immediate invoice with legal stamp for accounting and tax records.</p>
                </div>
              </div>

            </div>
          ) : (
            /* Mode 2: Direct Bank Transfer Instructions */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold font-heading text-[#171717] dark:text-white">
                    Direct Corporate Wire Transfer for: {selectedService.name}
                  </h4>
                  <p className="text-xs text-[#71717A] dark:text-purple-300">
                    Make your transfer to any of our official Ezeani Properties Limited corporate accounts below, then send proof via WhatsApp for instant reconciliation.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {CORPORATE_BANK_ACCOUNTS.map((acc, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#7A2FB0] dark:text-[#B462E8] uppercase tracking-wider">
                          {acc.type}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-[#34073E] dark:text-purple-200 font-bold">
                          {acc.currency}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-base font-bold font-mono text-[#34073E] dark:text-white">
                            {acc.bankName}
                          </div>
                          <div className="text-lg font-mono font-bold text-[#8DC63F] tracking-wider mt-0.5">
                            {acc.accountNumber}
                          </div>
                          <div className="text-xs text-[#52525B] dark:text-purple-300 font-medium">
                            Account Name: <strong className="text-[#171717] dark:text-white">{acc.accountName}</strong>
                          </div>
                          {acc.swiftCode && (
                            <div className="text-[11px] font-mono text-purple-400 mt-0.5">
                              SWIFT / BIC: <strong>{acc.swiftCode}</strong>
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(acc.accountNumber)}
                          className="px-4 py-2.5 rounded-xl bg-[#34073E] hover:bg-[#4A0A58] dark:bg-[#B462E8] dark:hover:bg-[#c27af0] text-white dark:text-[#1E0424] text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer"
                        >
                          {copiedAccount === acc.accountNumber ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Account</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wire Confirmation Help Box */}
              <div className="lg:col-span-5 bg-white dark:bg-purple-950/40 rounded-2xl p-6 border border-purple-200 dark:border-purple-800/80 space-y-4">
                <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-800/60 pb-3">
                  <span className="text-xs font-mono font-bold uppercase text-[#7A2FB0] dark:text-[#B462E8]">
                    TRANSFER VERIFICATION STEPS
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#8DC63F]" />
                </div>

                <div className="space-y-3 text-xs text-[#52525B] dark:text-purple-200">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#8DC63F] text-[#1E0424] flex items-center justify-center shrink-0 font-bold text-[11px]">
                      1
                    </span>
                    <p>Transfer the sum of <strong>{currency === 'USD' ? `$${selectedService.feeUsd.toLocaleString()}` : `₦${selectedService.feeNgn.toLocaleString()}`}</strong> to any account shown.</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#8DC63F] text-[#1E0424] flex items-center justify-center shrink-0 font-bold text-[11px]">
                      2
                    </span>
                    <p>Use your <strong>Full Name</strong> or <strong>Phone Number</strong> as the transfer description / remarks.</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#8DC63F] text-[#1E0424] flex items-center justify-center shrink-0 font-bold text-[11px]">
                      3
                    </span>
                    <p>Screenshot or save your debit receipt and tap below to send it directly to our finance desk on WhatsApp.</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${EZEANI_COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Ezeani%20Properties%20Finance,%20I%20have%20completed%20a%20bank%20transfer%20for%20${encodeURIComponent(selectedService.name)}%20(${currency === 'USD' ? '$' + selectedService.feeUsd : '₦' + selectedService.feeNgn.toLocaleString()}).%20Here%20is%20my%20payment%20proof:`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Transfer Proof on WhatsApp</span>
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
