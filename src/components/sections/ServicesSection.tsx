import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../../data/mockData';
import { ServiceCategory } from '../../types';
import { Terminal, Smartphone, Globe, ShieldCheck, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('desktop');

  const getServiceIcon = (id: ServiceCategory) => {
    switch (id) {
      case 'desktop': return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'mobile': return <Smartphone className="w-6 h-6 text-purple-400" />;
      case 'web': return <Globe className="w-6 h-6 text-indigo-400" />;
      case 'solutions': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
    }
  };

  const activeService = servicesData.find((s) => s.id === activeCategory) || servicesData[0];

  return (
    <section id="services" className="py-28 relative border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>خدماتنا المتخصصة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            هندسة وحلول <span className="gradient-text-primary">مفصّلة لتطلعات مؤسستك</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            نغطي كامل رحلة التحول الرقمي من النواة وحتى الواجهات التفاعلية ثلاثية الأبعاد 3D.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {servicesData.map((service) => {
            const isActive = activeCategory === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveCategory(service.id)}
                data-cursor="Select Service"
                className={`relative px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-3 glass-panel border ${
                  isActive
                    ? 'border-indigo-500/50 shadow-[0_0_25px_rgba(99,102,241,0.25)] text-white'
                    : 'border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                }`}
              >
                {getServiceIcon(service.id)}
                <span>{service.titleAr}</span>
                {isActive && (
                  <motion.div
                    layoutId="serviceTabGlow"
                    className="absolute inset-0 rounded-2xl bg-indigo-600/10 -z-10"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            {/* Left Content Side */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-right">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    {getServiceIcon(activeService.id)}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeService.titleAr}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {activeService.titleEn}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  {activeService.descriptionAr}
                </p>
              </div>

              {/* Core Features List */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                  المميزات والمعايير التقنية:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-400 font-mono tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>التقنيات المستخدمة (Tech Stack):</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metrics & Visual Accent Side */}
            <div className="lg:col-span-5 bg-slate-950/60 rounded-2xl border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  مؤشرات الأداء المستهدفة
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">
                  Verified SLA
                </span>
              </div>

              <div className="space-y-6 my-6">
                {activeService.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">{metric.label}</span>
                    <span className="text-xl sm:text-2xl font-black font-mono text-cyan-400">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400 leading-relaxed font-sans">
                💡 جميع خدمات شركة ADI تخضع لاختبارات أمان صارمة وتراعي أعلى معايير تجربة المستخدم وأداء الأجهزة.
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
