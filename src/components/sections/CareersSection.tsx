import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jobPositionsData } from '../../data/mockData';
import { JobPosition } from '../../types';
import { Briefcase, MapPin, Clock, ArrowUpLeft, X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
    }, 2500);
  };

  return (
    <section id="careers" className="py-28 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>الانضمام لفريق ADI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ابنِ معًا <span className="gradient-text-cyan">جيل البرمجيات القادم</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            نبحث دائماً عن ألمع المهندسين، المصممين، والمطورين الشغوفين بالابتكار الرقمي لتطوير منتجات استثنائية.
          </p>
        </div>

        {/* Interactive Physics / Culture Visual Card */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 mb-12 bg-gradient-to-r from-indigo-950/40 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-right space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>بيئة عمل مرنة ومحفزة للابتكار</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              عمل عن بُعد أو من مكاتبنا في الرياض ودبي، مع أحدث أجهزة Mac/PC ودعم التطوير المهني المستمر.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
            <span>تكامل مباشر مع منصة Greenhouse ATS</span>
          </div>
        </div>

        {/* Job Openings Grid */}
        <div className="space-y-4">
          {jobPositionsData.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.01 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-cyan-500/40 transition-all cursor-pointer"
              onClick={() => setSelectedJob(job)}
              data-cursor="Apply Now"
            >
              <div className="text-right space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3 text-cyan-400" /> {job.location}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-purple-400" /> {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {job.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {job.description}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(job);
                }}
                className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shrink-0"
              >
                <span>التقديم على الوظيفة</span>
                <ArrowUpLeft className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Application Modal */}
        <AnimatePresence>
          {selectedJob && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-2xl glass-panel p-8 rounded-3xl border border-white/15 shadow-2xl text-right max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 left-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {!appliedSuccess ? (
                  <div className="space-y-6">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        {selectedJob.department}
                      </span>
                      <h2 className="text-2xl font-extrabold text-white mt-2">
                        {selectedJob.title}
                      </h2>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 font-mono">المتطلبات الأساسية:</h4>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <form onSubmit={handleApplySubmit} className="space-y-4 pt-4 border-t border-white/10">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">الاسم الكامل *</label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="مثال: أحمد عبد الله"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">البريد الإلكتروني *</label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>إرسال طلب التقديم عبر بوابة ADI Careers</span>
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">تم استلام طلبك بنجاح!</h3>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      شكراً لاتمام طلب التقديم يا <strong className="text-white">{applicantName}</strong>. سيرسل لك فريق التوظيف في شركة ADI بريداً فور مراجعة بياناتك.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
