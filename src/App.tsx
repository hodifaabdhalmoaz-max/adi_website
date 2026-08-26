import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Facebook, Instagram } from 'lucide-react';
import { CustomCursor } from './components/cursor/CustomCursor';
import { FloatingHeader } from './components/layout/FloatingHeader';
import { ContactModal } from './components/sections/ContactModal';
import { ContentModal } from './components/sections/ContentModal';

// Custom Crisp WhatsApp Icon Component
const WhatsappIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState('hero');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Ensure videos autoplay reliably on mobile iOS Safari / Android
  useEffect(() => {
    const playVideos = async () => {
      try {
        if (desktopVideoRef.current) {
          desktopVideoRef.current.muted = isMuted;
          await desktopVideoRef.current.play().catch(() => { });
        }
        if (mobileVideoRef.current) {
          mobileVideoRef.current.muted = isMuted;
          await mobileVideoRef.current.play().catch(() => { });
        }
      } catch (err) {
        // Autoplay handled by browser
      }
    };
    playVideos();
  }, [isMuted]);

  // Sync theme with HTML class
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  const toggleAudio = () => {
    const nextMuted = !isMuted;
    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = nextMuted;
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = nextMuted;
    }
    setIsMuted(nextMuted);
  };

  return (
    <div className={`h-screen w-screen overflow-hidden relative font-sans ${theme === 'light' ? 'light' : 'dark'}`}>
      {/* Full-Screen Video Background Container with Zero Overflow & High GPU Acceleration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 bg-black">
        {/* Desktop / Large Screen Background Video */}
        <video
          ref={desktopVideoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="hidden md:block video-bg-responsive pointer-events-none transform-gpu"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          <source src="/video_2026-08-25_03-59-34.mp4" type="video/mp4" />
        </video>

        {/* Mobile Background Video (Strictly active on all mobile screen sizes < 768px) */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="block md:hidden video-bg-responsive pointer-events-none transform-gpu"
        >
          <source src="/mopileVieow.mp4" type="video/mp4" />
          <source src="/mobile-bg.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark tint gradient overlay for cinematic clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Custom Dynamic Motion Cursor */}
      <CustomCursor />

      {/* Floating Header (الشريط العلوي المتجاوب 3D) */}
      <FloatingHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
        openContact={() => setIsContactOpen(true)}
      />

      {/* Floating Social & Subtitle Bar (Shifted Upwards) */}
      <main className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pointer-events-none" style={{ paddingBottom: '28vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="pointer-events-auto flex flex-col items-center gap-3.5 sm:gap-5 max-w-lg"
        >
          {/* Subtitle text floating cleanly with high legibility */}
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-sm sm:max-w-lg md:max-w-xl px-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
            نعمل على إطلاق المنظومة الرقمية المتكاملة وتطبيقات المستقبل بأعلى معايير الأداء والابتكار
          </p>

          {/* Social Icons Container Pill (Facebook, Instagram, WhatsApp) with "تابعنا على:" */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-3d-emboss backdrop-blur-2xl transition-all">
            <span className={`text-[10px] sm:text-[11px] font-mono tracking-wide ml-1 hidden xs:inline transition-colors ${theme === 'light' ? 'text-zinc-950 font-bold' : 'text-zinc-300'
              }`}>
              تابعنا على:
            </span>

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/share/19sqvapZYM/"
              target="_blank"
              rel="noreferrer"
              data-cursor="Facebook"
              title="فيسبوك"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-95 shrink-0 hover:scale-110 ${theme === 'light'
                ? 'bg-white/90 border border-zinc-300/90 text-zinc-950 hover:border-zinc-950 shadow-md'
                : 'bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 hover:text-white hover:border-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]'
                }`}
            >
              <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/adi_dv0?igsi=cWQyZzd1Z2JjOG9s&utm_source=ig_contact_invite"
              target="_blank"
              rel="noreferrer"
              data-cursor="Instagram"
              title="انستجرام"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-95 shrink-0 hover:scale-110 ${theme === 'light'
                ? 'bg-white/90 border border-zinc-300/90 text-zinc-950 hover:border-zinc-950 shadow-md'
                : 'bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 hover:text-white hover:border-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]'
                }`}
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/967777548421"
              target="_blank"
              rel="noreferrer"
              data-cursor="WhatsApp"
              title="واتساب"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-95 shrink-0 hover:scale-110 ${theme === 'light'
                ? 'bg-white/90 border border-zinc-300/90 text-zinc-950 hover:border-zinc-950 shadow-md'
                : 'bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 hover:text-white hover:border-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]'
                }`}
            >
              <WhatsappIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </motion.div>
      </main>

      {/* Audio Toggle Controls Widget (Silver & Charcoal Theme) */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 flex items-center gap-2">
        <button
          onClick={toggleAudio}
          data-cursor="Sound"
          title={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs shadow-2xl backdrop-blur-xl transition-all ${theme === 'light'
            ? 'bg-white/90 border border-zinc-300/90 text-zinc-950 hover:bg-zinc-100 shadow-md'
            : 'bg-zinc-950/80 border border-zinc-700/70 text-zinc-200 hover:border-zinc-400'
            }`}
        >
          {isMuted ? (
            <>
              <VolumeX className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${theme === 'light' ? 'text-zinc-700' : 'text-zinc-400'}`} />
              <span className={`hidden sm:inline text-[11px] font-mono ${theme === 'light' ? 'text-zinc-800 font-semibold' : 'text-zinc-400'}`}>الصوت: مكتوم</span>
            </>
          ) : (
            <>
              <Volume2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse ${theme === 'light' ? 'text-zinc-950' : 'text-white'}`} />
              <span className={`hidden sm:inline text-[11px] font-mono ${theme === 'light' ? 'text-zinc-950 font-bold' : 'text-white'}`}>الصوت: يعمل</span>
            </>
          )}
        </button>
      </div>

      {/* Contact Modal (تواصل معنا) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Sections Content Modal (من نحن - خدماتنا - أهم أعمالنا) */}
      <ContentModal
        activeTab={activeTab}
        onClose={() => setActiveTab('hero')}
        theme={theme}
      />
    </div>
  );
};

export default App;
