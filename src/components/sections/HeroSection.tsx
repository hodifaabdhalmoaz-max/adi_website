import React from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas3D } from '../3d/HeroCanvas3D';
import { Sparkles, ArrowLeft, Terminal, Smartphone, Globe, ShieldCheck, Play } from 'lucide-react';

interface HeroSectionProps {
  openEstimator: () => void;
  setActiveTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openEstimator, setActiveTab }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Ambient Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/10 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Text Content & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6 text-right z-10"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold w-fit shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>ابتكار بلا حدود • Next-Gen Digital Engineering</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            نصمم ونسرّع <br />
            <span className="gradient-text-primary">المنظومات الرقمية وتطبيقات المستقبل</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            شركة <strong className="text-white font-bold">ADI</strong> هي شريكك التقني المتخصص في بناء **تطبيقات سطح المكتب (Desktop Apps)** فائقة الأداء، **تطبيقات الجوال (Mobile Apps)** الذكية، **منصات الويب الإلكترونية (Web Platforms)**، والحلول التقنية المتكاملة للمؤسسات.
          </p>

          {/* Core Verticals Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-2">
            <div className="glass-panel p-3 rounded-xl border border-white/10 flex flex-col gap-1 items-start">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-bold text-white">سطح المكتب</span>
              <span className="text-[10px] text-slate-400 font-mono">Tauri / Electron / Qt</span>
            </div>

            <div className="glass-panel p-3 rounded-xl border border-white/10 flex flex-col gap-1 items-start">
              <Smartphone className="w-5 h-5 text-purple-400" />
              <span className="text-xs font-bold text-white">تطبيقات الجوال</span>
              <span className="text-[10px] text-slate-400 font-mono">Flutter / iOS / Android</span>
            </div>

            <div className="glass-panel p-3 rounded-xl border border-white/10 flex flex-col gap-1 items-start">
              <Globe className="w-5 h-5 text-indigo-400" />
              <span className="text-xs font-bold text-white">منصات الويب</span>
              <span className="text-[10px] text-slate-400 font-mono">Next.js 14 / WebGL</span>
            </div>

            <div className="glass-panel p-3 rounded-xl border border-white/10 flex flex-col gap-1 items-start">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold text-white">الحلول التقنية</span>
              <span className="text-[10px] text-slate-400 font-mono">Cloud / AI Systems</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={openEstimator}
              data-cursor="Calculate Cost"
              className="px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:scale-[1.02] shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>احسب مشروعك التفاعلي الان</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('work');
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-cursor="Explore 3D"
              className="px-6 py-3.5 rounded-full font-semibold text-sm text-slate-200 glass-panel hover:bg-white/10 border border-white/15 transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span>معاينة معرض الأعمال</span>
              <ArrowLeft className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Live System Specs Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div>
              استجابة النواة: <span className="text-cyan-400 font-bold">&lt; 5ms</span>
            </div>
            <div>
              سلاسة العرض: <span className="text-purple-400 font-bold">60 FPS 3D</span>
            </div>
            <div>
              التوفر السحابي: <span className="text-emerald-400 font-bold">99.99%</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D WebGL Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 h-[480px] lg:h-[550px] relative rounded-3xl glass-panel border border-white/10 p-2 overflow-hidden shadow-2xl"
          data-cursor="Drag & Spin 3D"
        >
          <HeroCanvas3D />
        </motion.div>

      </div>
    </section>
  );
};
