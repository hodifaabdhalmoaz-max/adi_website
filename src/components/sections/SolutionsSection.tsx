import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Cloud, Lock, Server, Sparkles, Terminal, Code2, ArrowLeft } from 'lucide-react';

interface SolutionsSectionProps {
  openEstimator: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ openEstimator }) => {
  return (
    <section id="solutions" className="py-28 border-t border-white/10 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>الحلول التقنية المتكاملة للمؤسسات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            بنية برمجية معصومة <span className="gradient-text-gold">تتحمل أضخم العمليات</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            نوفر الحلول المعقدة التي تحتاجها الشركات الكبرى لتأمين بياناتها والنمو بلا توقف.
          </p>
        </div>

        {/* Enterprise Solutions Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: On-Device AI & High Performance */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group">
            <div className="space-y-4 text-right">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">الذكاء الاصطناعي على الأجهزة (On-Device AI)</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                دمج نماذج الذكاء الاصطناعي والتعلم الآلي مباشرة في تطبيقات سطح المكتب والجوال لضمان سرعة الاستجابة وحماية بيانات المستخدمين بدون الاتصال الخارجي.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-purple-400">
              CoreML • TensorFlow Lite • ONNX Runtime
            </div>
          </div>

          {/* Card 2: Zero Trust & Enterprise Security */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="space-y-4 text-right">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">معمارية الأمان المطلق (Zero Trust Architecture)</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                تأمين تداول البيانات وحماية التطبيقات من الثغرات والهجمات السيبرانية من خلال التشفير ثنائي الاتجاه واختبارات الأمان المستمرة.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-cyan-400">
              AES-256 GCM • OAuth2 / OIDC • End-to-End Encryption
            </div>
          </div>

          {/* Card 3: Cloud Edge & High Availability */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group">
            <div className="space-y-4 text-right">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">البنية السحابية وشبكات الحافة (Edge Microservices)</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                توزيع خوادم المعالجة وقواعد البيانات على شبكات Edge لتقليل زمن الاستجابة إلى أقصى حد يضمن عمل تطبيقاتك حول العالم في ملايين الثواني.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-emerald-400">
              Cloudflare Workers • AWS Lambda • Docker & K8s
            </div>
          </div>

        </div>

        {/* Interactive Architecture Code Box Showcase */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-slate-950/80 text-right grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-4 h-4" /> ADI Core Architecture Paradigm
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              بنية برمجية موحدة تدعم سطح المكتب، الجوال، والويب
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              نحن نتبع أسلوب Mono-Repo البرمجي الذي يتيح إعادة استخدام منطق الأعمال والتواصل مع السيرفرات في جميع المنصات بنسبة تصل إلى 80%، مما يقلل تكلفة وتأخير إطلاق مشروعك.
            </p>
            <button
              onClick={openEstimator}
              className="px-6 py-3 rounded-full font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-colors inline-flex items-center gap-2"
            >
              <span>طلب استشارة تقنية لبناء منطقتك</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-4 border border-white/10 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto shadow-inner text-left dir-ltr">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-cyan-400" /> adi-architecture-core.ts</span>
              <span>TypeScript 5.4</span>
            </div>
            <pre className="text-emerald-400">
              <code>{`// Core Architecture Engine for ADI Platform
export async function initializeADIApp(config: AppConfig) {
  const securityToken = await verifySecurityEnclave();
  const dbSession = await Supabase.connectEdgeClient();

  return {
    desktopEngine: new TauriNativeRuntime({ memoryCap: '64MB' }),
    mobileEngine: new FlutterOnDeviceAI({ model: 'MobileBERT' }),
    webPlatform: new NextAppRouterSSR({ edgeMode: true })
  };
}`}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
