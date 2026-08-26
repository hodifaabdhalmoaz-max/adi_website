import React from 'react';
import { Sparkles, MapPin, Mail, Phone, Globe, ShieldCheck, ArrowUpLeft } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openEstimator }) => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-20 pb-12 relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner in Footer */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 mb-16 bg-gradient-to-r from-indigo-950/60 via-slate-950 to-purple-950/60 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5 justify-end md:justify-start">
              <Sparkles className="w-4 h-4 text-amber-400" /> هل لديك مشروع أو فكرة رقمية؟
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              دعنا نبنِ تطبيقك القادم بمواصفات عالمية
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              فريق ADI جاهز لتطبيق المعمارية وتطوير الحلول البرمجية الأكثر تعقيداً.
            </p>
          </div>

          <button
            onClick={openEstimator}
            className="px-8 py-4 rounded-full text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 shrink-0"
          >
            <span>بدء حاسبة المشروع الآن</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-white text-sm font-mono">
                  ADI
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">ADI Solutions</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              شركة متخصصة في تقديم الخدمات الرقمية الشاملة، تطوير تطبيقات سطح المكتب، الجوالات، المنصات الإلكترونية والحلول التقنية الذكية.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>أنظمة ADI تعمل بكفاءة 99.99%</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 font-mono tracking-wider">الخدمات الرئيسية:</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">تطبيقات سطح المكتب (Tauri/Electron)</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">تطبيقات الجوال (Flutter/iOS)</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">المواقع والمنصات 3D (Next.js/WebGL)</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">الحلول التقنية والبنية السحابية</button></li>
            </ul>
          </div>

          {/* Col 3: Offices */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 font-mono tracking-wider">مكاتب ADI الرئيسية:</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> <span>الرياض - واجهة الرياض الرقمية</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-purple-400" /> <span>دبي - أبراج الأبحاث والتكنولوجيا</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> <span>فانكوفر - كندا (مركز البحث والتطوير)</span></div>
            </div>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 font-mono tracking-wider">التواصل والتواصل التقني:</h4>
            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-indigo-400" /> <span>contact@adi-tech.solutions</span></div>
              <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-cyan-400" /> <span>+966 11 800 ADI (234)</span></div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <span>© 2026 شركة ADI Solutions. جميع الحقوق محفوظة.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400">سياسة الخصوصية</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400">الشروط والأحكام</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
