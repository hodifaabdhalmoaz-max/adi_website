import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowLeft, ArrowRight, Send, Terminal, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import { ServiceCategory } from '../../types';
import confetti from 'canvas-confetti';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceCategory>('desktop');
  const [scope, setScope] = useState<'mvp' | 'full' | 'enterprise'>('full');
  const [budget, setBudget] = useState('$15,000 - $30,000');
  const [timeline, setTimeline] = useState('1 - 2 أشهر');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'ADI-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(ref);
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-3xl glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl text-right max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header & Step Indicator */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>حاسبة التكلفة والتقدير التفاعلي • الخطوة {step} من 4</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                احسب مشروعك التقني مع شركة ADI
              </h2>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                  animate={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Select Service Vertical */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h3 className="text-sm font-bold text-slate-300">1. حدد نوع المنظومة أو الخدمة البرمجية المطلوبة:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'desktop', icon: <Terminal className="w-5 h-5 text-cyan-400" />, title: 'تطبيقات سطح المكتب', desc: 'Tauri / Electron / C++' },
                    { id: 'mobile', icon: <Smartphone className="w-5 h-5 text-purple-400" />, title: 'تطبيقات الجوال الذكية', desc: 'Flutter / iOS / Android' },
                    { id: 'web', icon: <Globe className="w-5 h-5 text-indigo-400" />, title: 'موقع أو منصة ويب تفاعلية 3D', desc: 'Next.js / WebGL / Sanity' },
                    { id: 'solutions', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, title: 'حلول تقنية وبنية سحابية', desc: 'Cloud / AI / Enterprise' },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setServiceType(item.id as ServiceCategory)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        serviceType === item.id
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {item.icon}
                        <h4 className="font-extrabold text-sm">{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 flex items-center gap-2"
                  >
                    <span>الخطوة التالية</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Scope */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h3 className="text-sm font-bold text-slate-300">2. حدد نطاق وحجم المشروع المطلوب:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'mvp', title: 'نسخة أولية (MVP)', desc: 'إطلاق سريع في أقل وقت لاختبار السوق' },
                    { id: 'full', title: 'منتج مكتمل المميزات (Full App)', desc: 'تطبيق متكامل مع أحدث التكنولوجيات' },
                    { id: 'enterprise', title: 'نظام مؤسسي ضخم (Enterprise)', desc: 'بنية تحتية متوسعة مع أمان فائق' },
                  ].map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setScope(s.id as any)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        scope === s.id
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <h4 className="font-extrabold text-sm mb-2">{s.title}</h4>
                      <p className="text-xs text-slate-400">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>الناحية السابقة</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 flex items-center gap-2"
                  >
                    <span>الخطوة التالية</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h3 className="text-sm font-bold text-slate-300">3. الميزانية التقديرية والإطار الزمني المستهدف:</h3>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">الميزانية المتوقعة:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['$5,000 - $15,000', '$15,000 - $30,000', '$30,000 - $60,000+'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`p-3 rounded-xl border text-xs font-mono font-bold transition-all ${
                          budget === b ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-white/5 text-slate-300 border-white/10'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-xs font-mono text-slate-300 mb-2">الإطار الزمني المتوقع للانجاز:</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['أقل من شهر', '1 - 2 أشهر', '3+ أشهر'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                          timeline === t ? 'bg-purple-600 text-white border-purple-400' : 'bg-white/5 text-slate-300 border-white/10'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>السابق</span>
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 flex items-center gap-2"
                  >
                    <span>الخطوة الأخيرة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact & Submit */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-300">4. بيانات التواصل لإرسال التقدير والتحليل النهائي:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">الاسم الكريم *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أحمد علي"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">اسم الشركة / المؤسسة</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="مثال: مجموعة الاستثمار الرقمي"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">تفاصيل إضافية للمشروع</label>
                    <textarea
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="اكتب أي ملاحظات أو متطلبات خوارزمية تود مشاركتها معنا..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>السابق</span>
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:opacity-95 shadow-xl flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>توليد التقدير والتواصل مع خبير ADI</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-cyan-400 border border-white/10 inline-block">
              رقم التقدير المرجعي: {referenceCode}
            </span>
            <h3 className="text-2xl font-extrabold text-white">تم حساب التقدير وتوجيه الطلب!</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              شكراً لك يا <strong className="text-white">{name}</strong>. تم تسجيل خياراتك وسيتم التواصل معك على بريدك <span className="text-cyan-400 font-mono">{email}</span> مع ملف التقدير الهندسي المفصل من شركة ADI.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              إغلاق النافذة
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
