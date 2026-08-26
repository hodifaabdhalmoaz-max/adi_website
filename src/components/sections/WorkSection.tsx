import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/mockData';
import { ProjectItem, ServiceCategory } from '../../types';
import { Play, ExternalLink, X, Calendar, UserCheck, Layers, Sparkles } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<ServiceCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = filterCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filterCategory);

  return (
    <section id="work" className="py-28 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>معرض المشاريع وقصص النجاح</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              أنظمة ومشاريع <span className="gradient-text-cyan">صُنعت لتلهم وتتفوق</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-full border border-white/10 w-fit">
            {[
              { id: 'all', label: 'الكل' },
              { id: 'desktop', label: 'سطح المكتب' },
              { id: 'mobile', label: 'الجوال' },
              { id: 'web', label: 'منصات الويب' },
              { id: 'solutions', label: 'الحلول التقنية' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setFilterCategory(filter.id as any)}
                data-cursor="Filter"
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filterCategory === filter.id
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => setSelectedProject(project)}
              data-cursor="View Case Study"
              className="group cursor-pointer rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              {/* Card Media Preview Container with Video Hover Effect */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    hoveredProjectId === project.id && project.previewVideoUrl ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Video Hover Overlay (MetaLab Feature Simulation) */}
                {project.previewVideoUrl && (
                  <video
                    src={project.previewVideoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredProjectId === project.id ? 'opacity-100 scale-105' : 'opacity-0 pointer-events-none'
                    }`}
                  />
                )}

                {/* Top Badge Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold font-mono bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-white/10">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/10 backdrop-blur-md text-slate-300">
                    {project.year}
                  </span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 text-right">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-3 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Pills & Metrics */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">النتيجة الرئيسية:</span>
                    <span className="text-sm font-extrabold font-mono text-emerald-400">
                      {project.metrics[0]?.value}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Case Study Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl text-right"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="space-y-3 pr-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {selectedProject.categoryLabel} • {selectedProject.year}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-slate-400 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-slate-400" />
                    <span>العميل: <strong className="text-white">{selectedProject.client}</strong></span>
                  </p>
                </div>

                {/* Modal Media Preview */}
                <div className="my-6 rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-96 relative bg-slate-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Full Description & Metrics */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">تفاصيل ونطاق المشروع:</h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <span className="text-xs text-slate-400 block font-mono mb-1">{m.label}</span>
                        <span className="text-2xl font-black font-mono text-cyan-400">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-mono text-slate-400 mb-2">حزمة التقنيات المستخدمة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
