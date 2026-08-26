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

  // Define contents for each tab in White & Metallic Silver styling
  const getTabDetails = () => {
    switch (activeTab) {
      case 'about':
        return {
          title: 'من نحن — منظومة ADI الرقمية',
          subtitle: 'أيقونة المطورين العرب في الخدمات الرقمية وحلول المشكلات',
          badge: 'رؤيتنا ورسالتنا',
          icon: Users,
          color: 'from-zinc-300 via-white to-zinc-400',
          content: (
            <div className="space-y-4">
              {/* Glass Frosted Box */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-zinc-100" />
                  <span>قصتنا وشغفنا بالتطوير الرقمي</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  نحن في <strong className="text-white">ADI Solutions</strong> نخلق المستقبل الرقمي اليوم. منظومتنا متخصصة في تطوير الأنظمة البرمجية الفائقة، وتطبيقات الويب والتطبيقات السحابية المتقدمة التي تمنح أعمالك قوة تنافسية وسرعة خيالية.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-2 mb-1.5 text-zinc-100">
                    <Zap className="w-4 h-4 text-zinc-200" />
                    <span className="font-bold text-xs">الأداء الفائق</span>
                  </div>
                  <p className="text-[11px] text-zinc-300">نستخدم أحدث تقنيات الجيل الجديد لضمان سرعة تحميل لحظية وأمان متكامل.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-2 mb-1.5 text-zinc-100">
                    <Award className="w-4 h-4 text-zinc-200" />
                    <span className="font-bold text-xs">معايير عالمية</span>
                  </div>
                  <p className="text-[11px] text-zinc-300">تصاميم سينمائية تفاعلية بـ 3D تجذب العملاء وترتقي بهويتك التجارية.</p>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border border-white/20 backdrop-blur-2xl flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-xs text-zinc-300 block">هل لديك مشروع ترغب في تنفيذه؟</span>
                  <span className="text-sm font-extrabold text-white">نحّول إفكارك إلى واقع رقمي ملموس</span>
                </div>
                <a
                  href="https://wa.me/967777548421"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-zinc-100 via-white to-zinc-200 text-zinc-950 font-extrabold text-xs flex items-center gap-1.5 hover:from-white hover:to-zinc-300 transition-all shrink-0 shadow-[0_4px_15px_rgba(255,255,255,0.2)] active:scale-95 border border-white/80"
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
          title: 'خدماتنا البرمجية والحسابية',
          subtitle: 'حلول رقمية متكاملة مصممة لنقل أعمالك إلى المستقبل',
          badge: 'ما نقدمه لك',
          icon: Sparkles,
          color: 'from-zinc-200 via-white to-slate-300',
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-100 mb-2.5 group-hover:scale-110 transition-transform shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">تطوير المواقع والتطبيقات</h4>
                <p className="text-[11.5px] text-zinc-300 leading-relaxed">تطبيقات سريعة وسلسة باستخدام React, Next.js, Vite & Cloud APIs بأعلى مقاييس الجودة.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-100 mb-2.5 group-hover:scale-110 transition-transform shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">الذكاء الاصطناعي والأتمتة</h4>
                <p className="text-[11.5px] text-zinc-300 leading-relaxed">ربط المنظومات بالذكاء الاصطناعي وأتمتة المهام المعقدة لتوفير الوقت والتكاليف.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-100 mb-2.5 group-hover:scale-110 transition-transform shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">تصميم UI/UX و 3D</h4>
                <p className="text-[11.5px] text-zinc-300 leading-relaxed">واجهات حديثة بنظام Glassmorphism ورسوم 3D تفاعلية تمنح المستخدم تجربة استثنائية.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-100 mb-2.5 group-hover:scale-110 transition-transform shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">الأمن السيبراني والبنية التحتية</h4>
                <p className="text-[11.5px] text-zinc-300 leading-relaxed">تأمين حقيقي للبيانات، مع حماية السيرفرات وإدارة الدومينات والاستضافة الفائقة.</p>
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
          color: 'from-zinc-400 via-white to-slate-200',
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl hover:border-white/30 hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>منصة ومتجر العطور الفاخرة</span>
                      <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-zinc-100 font-mono">تطبيق حي</span>
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1">نظام متكامل لإدارة المنتجات، السلة الإلكترونية، وبوابات الدفع والدعم الفني المباشر.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl hover:border-white/30 hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>منظومة ADI السحابية لإدارة الأعمال</span>
                      <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-zinc-100 font-mono">منظومة سحابية</span>
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1">لوحة تحكم ذكية للأوتومشن وإدارة المبيعات والعملاء بدقة فائقة.</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-zinc-100" />
                  <span>أكثر من 50 مشروع رقمي ناجح</span>
                </span>
                <a
                  href="https://wa.me/967777548421"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-zinc-300 hover:underline flex items-center gap-1 font-extrabold"
                >
                  <span>طلب مشروع خاص</span>
                  <ExternalLink className="w-3 h-3 text-white" />
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
        {/* Transparent Glass Backdrop with Heavy Frosted Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-2xl"
        />

        {/* Modal Main Box: White, Silver, Chrome Metallic Transparent Glass Aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 z-10 overflow-hidden text-right backdrop-blur-3xl transition-all border shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.4)] ${
            theme === 'light'
              ? 'bg-zinc-950/85 border-white/30 text-white'
              : 'bg-zinc-950/85 border-white/20 text-white'
          }`}
          dir="rtl"
        >
          {/* Internal Animated Metallic Silver Water Sheen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-liquid-sheen pointer-events-none" />

          {/* Top Metallic Silver Accent Bar */}
          <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${currentDetails.color}`} />

          {/* Close Button (X) - Silver Chrome Styling */}
          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-zinc-200 hover:text-white hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all z-20 active:scale-95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Header Section */}
          <div className="flex items-center gap-3.5 mb-5 pt-1 relative z-10">
            <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-white shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <IconHeader className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-zinc-100 border border-white/25 inline-block mb-1 shadow-sm">
                {currentDetails.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                {currentDetails.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                {currentDetails.subtitle}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="mt-4 relative z-10">
            {currentDetails.content}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
