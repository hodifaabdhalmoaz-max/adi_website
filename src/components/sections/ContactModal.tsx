import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PhoneCall, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container (Strictly Rounded and Contained) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-zinc-950/95 border border-zinc-700/80 rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 overflow-hidden text-right box-border"
        >
          {/* Metallic Silver Header Highlight */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-600 pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 left-5 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-2xl bg-zinc-900 border border-zinc-700 text-zinc-200 shrink-0">
              <PhoneCall className="w-5 h-5 text-zinc-100" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">تواصل معنا</h3>
              <p className="text-xs text-zinc-400">نحن هنا للإجابة على استفساراتك وبدء تعاوننا الفعّال</p>
            </div>
          </div>

          {/* Offices List (عدن - صنعاء - السعودية) */}
          <div className="grid grid-cols-3 gap-2 my-3 p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center text-xs overflow-hidden">
            <div className="flex flex-col gap-0.5 items-center">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-bold text-zinc-200">عدن</span>
              <span className="text-[9.5px] text-zinc-500 font-mono">اليمن</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center border-x border-zinc-800">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-bold text-zinc-200">صنعاء</span>
              <span className="text-[9.5px] text-zinc-500 font-mono">اليمن</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-bold text-zinc-200">السعودية</span>
              <span className="text-[9.5px] text-zinc-500 font-mono">الرياض</span>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center gap-3">
              <CheckCircle2 className="w-12 h-12 text-zinc-200 animate-bounce" />
              <h4 className="text-lg font-bold text-white">تم ارسال رسالتك بنجاح!</h4>
              <p className="text-xs text-zinc-400">سيتواصل معك فريقنا الفني والتقني في أقرب وقت ممكن.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 mt-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  placeholder="أدخل اسمك الكريم"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors box-border"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors dir-ltr box-border"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">رقم الهاتف / الواتساب</label>
                  <input
                    type="tel"
                    required
                    placeholder="+967 / +966 ..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors dir-ltr box-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">تفاصيل الرسالة أو المشروع</label>
                <textarea
                  rows={3}
                  required
                  placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors resize-none box-border"
                />
              </div>

              {/* Direct Quick Channels */}
              <div className="flex items-center justify-between pt-2 text-xs text-zinc-400 border-t border-zinc-900 overflow-hidden">
                <a
                  href="https://wa.me/967777548421"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors truncate"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                  <span className="truncate">محادثة واتساب مباشرة</span>
                </a>
                <a
                  href="mailto:contact@adi.solutions"
                  className="flex items-center gap-1.5 hover:text-white transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                  <span className="truncate">contact@adi.solutions</span>
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg mt-2.5 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>إرسال الرسالة الان</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
