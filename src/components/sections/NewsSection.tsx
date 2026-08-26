import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsArticlesData } from '../../data/mockData';
import { NewsArticle, ServiceCategory } from '../../types';
import { BookOpen, Clock, User, ArrowLeft, X } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | 'all'>('all');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filteredArticles = activeFilter === 'all'
    ? newsArticlesData
    : newsArticlesData.filter((a) => a.category === activeFilter);

  return (
    <section id="news" className="py-28 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>الأخبار والرؤى التقنية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              أحدث مقالات وقراءات <span className="gradient-text-primary">خبراء ADI</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-full border border-white/10 w-fit">
            {[
              { id: 'all', label: 'الكل' },
              { id: 'desktop', label: 'سطح المكتب' },
              { id: 'mobile', label: 'الجوال' },
              { id: 'web', label: 'الويب' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === f.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedArticle(article)}
              data-cursor="Read Article"
              className="group cursor-pointer glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="h-48 overflow-hidden bg-slate-900 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 backdrop-blur-md text-indigo-400 border border-white/10">
                  {article.categoryLabel}
                </span>
              </div>

              <div className="p-6 text-right flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-indigo-400" /> {article.author.split(' - ')[0]}</span>
                  <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Article Reading */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-3xl glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl text-right max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 left-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    {selectedArticle.categoryLabel} • {selectedArticle.date}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    الكاتب: {selectedArticle.author}
                  </p>
                  
                  <div className="rounded-2xl overflow-hidden h-64 border border-white/10 my-4">
                    <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                    تضمن هذه الدراسة التقنية المقدمة من خبراء شركة ADI توضيح أفضل الممارسات المتبعة في تطوير تطبيقات المستقبل وكيفية الاستفادة القصوى من موارد السيرفرات والأجهزة...
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
