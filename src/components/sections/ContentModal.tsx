import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Briefcase, 
  Users, 
  Code2, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  ArrowLeft,
  ExternalLink,
  Award,
  Zap,
  Globe2,
  CheckCircle
} from 'lucide-react';

interface ContentModalProps {
  activeTab: string | null;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const ContentModal: React.FC<ContentModalProps> = ({ activeTab, onClose, theme }) => {
  // Only show modal for known section tabs
  if (!activeTab || !['services', 'portfolio', 'about'].includes(activeTab)) {
    return null;
  }

  // Define contents for each tab
  const getTabDetails = () => {
    switch (activeTab) {
      case 'about':
        return {
          title: 'من نحن — منظومة ADI الرقمية',
          subtitle: 'أيقونة المطورين العرب في الخدمات الرقمية وحلول المشكلات',
          badge: 'رؤيتنا ورسالتنا',
          icon: Users,
          color: 'from-amber-400 to-amber-600',
          content: (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>قصتنا وشغفنا بالتطوير</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  نحن في <strong>ADI Solutions</strong> نخلق المستقبل الرقمي اليوم. منظومتنا متخصصة في تطوير الأنظمة البرمجية الفائقة، وتطبيقات الويب والتطبيقات السحابية المتقدمة التي تمنح أعمالك قوة تنافسية وسرعة خيالية.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-1.5 text-amber-300">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold text-xs">الأداء الفائق</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">نستخدم أحدث تقنيات الجيل الجديد لضمان سرعة تحميل لحظية وأمان متكامل.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-1.5 text-amber-300">
                    <Award className="w-4 h-4" />
                    <span className="font-bold text-xs">معايير عالمية</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">تصاميم سينمائية تفاعلية بـ 3D تجذب العملاء وترتقي بهويتك التجارية.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 block">هل لديك مشروع ترغب في تنفيذه؟</span>
                  <span className="text-sm font-bold text-white">نحّول إفكارك إلى واقع رقمي ملموس</span>
                </div>
                <a
                  href="https://wa.me/967777548421"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition-all shrink-0 shadow-md active:scale-95"
                >
                  <span>تواصل معنا</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )
        };

      case 'services':
        return {
          title: 'خدماتنا البرمجية والحسبية',
          subtitle: 'حلول رقمية متكاملة مصممة لنقل أعمالك إلى المستقبل',
          badge: 'ما نقدمه لك',
          icon: Sparkles,
          color: 'from-indigo-400 to-cyan-400',
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2.5 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">تطوير المواقع والتطبيقات</h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">تطبيقات سريعة وسلسة باستخدام React, Next.js, Vite & Cloud APIs بأعلى مقاييس الجودة.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">الذكاء الاصطناعي والأتمتة</h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">ربط المنظومات بالذكاء الاصطناعي وأتمتة المهام المعقدة لتوفير الوقت والتكاليف.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-2.5 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">تصميم UI/UX و 3D</h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">واجهات حديثة بنظام Glassmorphism ورسوم 3D تفاعلية تمنح المستخدم تجربة استثنائية.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2.5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">الأمن السيبراني والبنية التحتية</h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">تأمين حقيقي للبيانات، مع حماية السيرفرات وإدارة الدومينات والاستضافة الفائقة.</p>
              </div>
            </div>
          )
        };

      case 'portfolio':
      default:
        return {
          title: 'أهم أعمالنا ومشاريعنا',
          subtitle: 'نماذج واقعية من الحلول المنفذة بأعلى معايير الإبداع',
          badge: 'معرض الإنجازات',
          icon: Briefcase,
          color: 'from-emerald-400 to-teal-500',
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>منصة ومتجر العطور الفاخرة</span>
                      <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">تطبيق حي</span>
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">نظام متكامل لإدارة المنتجات، السلة الإلكترونية، وبوابات الدفع والدعم الفني المباشر.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>منظومة ADI السحابية لإدارة الأعمال</span>
                      <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">منظومة سحابية</span>
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">لوحة تحكم ذكية للأوتومشن وإدارة المبيعات والعملاء بدقة فائقة.</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>أكثر من 50 مشروع رقمي ناجح</span>
                </span>
                <a
                  href="https://wa.me/967777548421"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <span>طلب مشروع خاص</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )
        };
    }
  };

  const currentDetails = getTabDetails();
  const IconHeader = currentDetails.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Blurry Backdrop with Smooth Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Main Box with Smooth Zoom-In (Scale Forward) Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 overflow-hidden text-right border transition-all ${
            theme === 'light'
              ? 'bg-zinc-950/95 border-zinc-800 text-white'
              : 'bg-zinc-950/95 border-zinc-800 text-white'
          }`}
          dir="rtl"
        >
          {/* Top Decorative Gradient Accent Bar */}
          <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${currentDetails.color}`} />

          {/* Close Button (X) */}
          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="absolute top-5 left-5 w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-700/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-400 hover:scale-110 transition-all z-20 active:scale-95 shadow-md"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Section */}
          <div className="flex items-center gap-3.5 mb-5 pt-1">
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white shrink-0 shadow-inner">
              <IconHeader className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 border border-white/10 inline-block mb-1">
                {currentDetails.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                {currentDetails.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                {currentDetails.subtitle}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="mt-4">
            {currentDetails.content}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
