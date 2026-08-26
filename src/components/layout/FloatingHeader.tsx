import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Mail, Sun, Moon, Sparkles, Briefcase, Users, X } from 'lucide-react';

interface FloatingHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  openContact: () => void;
}

export const FloatingHeader: React.FC<FloatingHeaderProps> = ({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  openContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [timeAden, setTimeAden] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation tabs for non-desktop / mobile view dropdown
  const navTabs = [
    { id: 'services', label: 'خدماتنا', icon: Sparkles },
    { id: 'portfolio', label: 'أهم أعمالنا', icon: Briefcase },
    { id: 'about', label: 'من نحن', icon: Users },
  ];

  // Update Aden local time (AST UTC+3)
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Riyadh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setTimeAden(now.toLocaleTimeString('en-US', options));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  // Listen for scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-8 pt-8 sm:pt-10 md:pt-12 pb-2 transition-all duration-300 pointer-events-none box-border max-w-full">
      
      {/* =========================================================
          DESKTOP HEADER VIEW (md:block hidden)
         ========================================================= */}
      <div className="hidden md:block relative w-full max-w-5xl overflow-hidden rounded-full pointer-events-auto mt-2 sm:mt-3">
        {/* Dynamic Liquid Water Caustic Shadow Aura */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-zinc-100/20 via-zinc-400/30 to-zinc-100/20 blur-xl opacity-80 animate-pulse pointer-events-none" />

        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`relative pointer-events-auto transition-all duration-300 w-full rounded-full glass-header-transparent animate-liquid-shadow flex items-center justify-between px-6 sm:px-10 py-2 sm:py-2.5 overflow-hidden box-border shadow-2xl ${
            scrolled ? 'scale-[0.98]' : 'scale-100'
          }`}
        >
          {/* Internal Animated Water Sheen Reflection Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 animate-liquid-sheen pointer-events-none" />

          {/* Right Group: Large Bold ADI Brand Name & Aden Local Time */}
          <div className="flex items-center gap-4 sm:gap-6 relative z-10 shrink-0">
            {/* Prominent Large ADI Brand Name with Gasoek One Font */}
            <div 
              className="flex items-center cursor-pointer group relative z-10 shrink-0"
              data-cursor="ADI"
            >
              <span className="font-gasoek text-2xl sm:text-3xl tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition-all duration-300">
                ADI
              </span>
            </div>

            {/* Local Time Pill - Aden ONLY */}
            <div className={`relative z-10 hidden sm:flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono px-3 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-md transition-all shrink-0 ${
              theme === 'light'
                ? 'bg-white/80 border border-zinc-300/80 text-zinc-900 shadow-sm'
                : 'bg-zinc-950/50 border border-white/10 text-zinc-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),_0_2px_8px_rgba(0,0,0,0.4)]'
            }`}>
              <Clock className={`w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse ${
                theme === 'light' ? 'text-zinc-950' : 'text-zinc-100'
              }`} />
              <span className={`text-[10px] sm:text-[11px] ${
                theme === 'light' ? 'text-zinc-600 font-medium' : 'text-zinc-400'
              }`}>عدن:</span>
              <strong className={`font-semibold ${
                theme === 'light' ? 'text-zinc-950 font-bold' : 'text-white'
              }`}>{timeAden}</strong>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div className="flex items-center gap-1 sm:gap-2 relative z-10">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
                    isActive
                      ? theme === 'light'
                        ? 'bg-zinc-950 text-white shadow-md'
                        : 'bg-white text-zinc-950 shadow-md'
                      : theme === 'light'
                        ? 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200/60'
                        : 'text-zinc-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Header Actions (تواصل معنا + Theme Switcher) */}
          <div className="flex items-center gap-3 sm:gap-5 relative z-10 shrink-0 pl-2 sm:pl-4">
            {/* "تواصل معنا" Direct WhatsApp Contact */}
            <a
              href="https://wa.me/967777548421"
              target="_blank"
              rel="noreferrer"
              data-cursor="Contact Us"
              className={`group relative px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 active:scale-95 whitespace-nowrap ${
                theme === 'light' ? 'text-zinc-950 hover:text-black font-extrabold' : 'text-white hover:text-zinc-200'
              }`}
            >
              <Mail className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110 ${
                theme === 'light' ? 'text-zinc-950' : 'text-white'
              }`} />
              <span className="tracking-wide">تواصل معنا</span>
            </a>

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              data-cursor="Theme"
              title={theme === 'dark' ? "التحويل للوضع النهاري" : "التحويل للوضع الليلي"}
              className={`w-7.5 h-7.5 sm:w-9 sm:h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all active:scale-95 shrink-0 ${
                theme === 'light'
                  ? 'bg-white/90 border border-zinc-300/90 text-zinc-950 shadow-md hover:bg-zinc-100'
                  : 'bg-zinc-900/60 border border-white/15 text-zinc-200 hover:bg-zinc-800/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_4px_10px_rgba(0,0,0,0.3)]'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-950 transition-transform hover:-rotate-12" />
              )}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* =========================================================
          MOBILE / TABLET HEADER VIEW (md:hidden block - MetaLab Layout)
          dir="ltr" ensures predictable LEFT/RIGHT positioning
         ========================================================= */}
      <div className="block md:hidden w-full pointer-events-auto max-w-md mt-2 sm:mt-3" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative flex items-center justify-between w-full py-1"
          dir="ltr"
        >
          {/* LEFT Side (الجهة اليسرى): Mail Icon + Theme Switcher */}
          <div className="flex items-center self-center gap-1.5 z-10 shrink-0">
            {/* Circular Mail Icon Button */}
            <a
              href="https://wa.me/967777548421"
              target="_blank"
              rel="noreferrer"
              data-cursor="Contact Us"
              title="تواصل معنا"
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full backdrop-blur-xl flex items-center justify-center transition-all active:scale-95 shadow-md ${
                theme === 'light'
                  ? 'bg-white/90 border border-zinc-300/90 text-zinc-950 shadow-sm'
                  : 'bg-zinc-900/85 border border-white/20 text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)]'
              }`}
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current" />
            </a>

            {/* Theme Toggle Icon */}
            <button
              onClick={toggleTheme}
              data-cursor="Theme"
              title={theme === 'dark' ? "التحويل للوضع النهاري" : "التحويل للوضع الليلي"}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full backdrop-blur-xl flex items-center justify-center transition-all active:scale-95 shadow-sm ${
                theme === 'light'
                  ? 'bg-white/90 border border-zinc-300/90 text-zinc-950'
                  : 'bg-zinc-900/85 border border-white/20 text-zinc-200'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-zinc-950" />
              )}
            </button>

            {/* Compact Aden Local Time Pill */}
            <div className={`hidden xs:flex items-center justify-center gap-1 text-[9.5px] font-mono px-2 py-1 rounded-full backdrop-blur-xl transition-all shadow-sm ${
              theme === 'light'
                ? 'bg-white/90 border border-zinc-300/90 text-zinc-950'
                : 'bg-zinc-900/85 border border-white/20 text-zinc-200'
            }`}>
              <Clock className={`w-2.5 h-2.5 ${theme === 'light' ? 'text-zinc-950' : 'text-zinc-200'}`} />
              <span className="font-semibold leading-none">{timeAden}</span>
            </div>
          </div>

          {/* CENTER (الوسط العلوي): Large Bold Brand Title "ADI" (Gasoek One Font) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0 pointer-events-auto cursor-pointer">
            <span className="font-gasoek text-2xl sm:text-3xl tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-none inline-block">
              ADI
            </span>
          </div>

          {/* RIGHT Side (الجهة اليمنى): MetaLab Style "القائمة" Pill Button */}
          <div className="flex items-center self-center z-10 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-cursor="Menu"
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-extrabold whitespace-nowrap flex items-center justify-center gap-1.5 leading-none tracking-wide backdrop-blur-xl transition-all shadow-md active:scale-95 ${
                isMobileMenuOpen
                  ? theme === 'light'
                    ? 'bg-zinc-950 text-white border border-zinc-950'
                    : 'bg-white text-zinc-950 border border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                  : theme === 'light'
                    ? 'bg-white/90 border border-zinc-300/90 text-zinc-950 hover:bg-zinc-100'
                    : 'bg-zinc-900/85 border border-white/20 text-white hover:bg-zinc-800 shadow-[0_4px_15px_rgba(0,0,0,0.5)]'
              }`}
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="w-4 h-4" />
                  <span>إغلاق</span>
                </>
              ) : (
                <span className="translate-y-[0.5px]">القائمة</span>
              )}
            </button>
          </div>
        </motion.nav>

        {/* =========================================================
            INTERACTIVE DROPDOWN OVERLAY (100% Transparent Liquid Glass Backdrop)
           ========================================================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              dir="rtl"
              className={`mt-2.5 w-full rounded-3xl p-3.5 backdrop-blur-3xl border transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
                theme === 'light'
                  ? 'bg-white/10 border-white/40 shadow-zinc-300/50'
                  : 'bg-black/20 border-white/15 shadow-black/80'
              }`}
            >
              <div className="flex flex-col gap-2">
                {navTabs.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <motion.button
                      key={tab.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.2 }}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-all duration-200 active:scale-[0.98] ${
                        isActive
                          ? theme === 'light'
                            ? 'bg-white/30 text-zinc-950 border border-zinc-950/20 shadow-sm'
                            : 'bg-white/20 text-white border border-white/30 shadow-sm'
                          : theme === 'light'
                            ? 'text-zinc-900 hover:bg-white/20 hover:text-black'
                            : 'text-zinc-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl backdrop-blur-md ${
                          isActive
                            ? theme === 'light' ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950'
                            : theme === 'light' ? 'bg-zinc-950/10 text-zinc-900' : 'bg-white/10 text-white'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-base font-semibold">{tab.label}</span>
                      </div>
                      
                      {isActive && (
                        <span className={`w-2 h-2 rounded-full animate-pulse ${
                          theme === 'light' ? 'bg-zinc-950' : 'bg-white'
                        }`} />
                      )}
                    </motion.button>
                  );
                })}

                {/* Direct Contact Button in Dropdown */}
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18, duration: 0.2 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openContact();
                  }}
                  className={`w-full mt-1 px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md ${
                    theme === 'light'
                      ? 'bg-zinc-950 text-white hover:bg-zinc-900'
                      : 'bg-white text-zinc-950 hover:bg-zinc-100'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>تواصل معنا الآن</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </header>
  );
};
