import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Sparkles, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const ResumeSection = ({ onOpenModal, onDownload }) => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold text-primary-400 uppercase tracking-wider">
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-light-text tracking-tight">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full" />
        </div>

        {/* Large Glass Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card glass-card-hover rounded-3xl p-8 sm:p-12 border border-slate-700/60 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">

            {/* Left: PDF Document Visual Badge */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 group-hover:border-primary-500/40 transition-colors">
              <div className="w-24 h-28 rounded-xl bg-gradient-to-tr from-primary-600 to-accent p-1 shadow-lg shadow-primary-500/20 flex items-center justify-center relative">
                <div className="w-full h-full rounded-lg bg-dark-bg flex flex-col items-center justify-center p-2 text-center">
                  <FileText className="w-10 h-10 text-primary-400 mb-1" />
                  <span className="text-[10px] font-mono text-slate-300">PDF RESUME</span>
                  <span className="text-[9px] text-accent font-semibold mt-0.5">2026 EDITION</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-sm font-bold text-light-text">{personalData.name}</h4>
                <p className="text-xs text-light-muted">Software Developer</p>
              </div>
            </div>

            {/* Right: Resume Summary & CTA Controls */}
            <div className="md:col-span-8 space-y-6 text-left">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">Official Document</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-light-text mt-1">
                  Full Stack Engineer Resume
                </h3>
                <p className="text-xs sm:text-sm text-light-muted mt-2 leading-relaxed">
                  Summarizing my education at RVITM (CGPA 8.7), project accomplishments in Full Stack MERN and AI/ML, core computer science competencies, and technical certifications.
                </p>
              </div>

              {/* Highlights bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>RVITM ISE (2023 - 2027)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>3 Major Full-Stack & AI Repos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>MERN & Gemini Vision Stack</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Cyber Security Certification</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onDownload}
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={onOpenModal}
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl glass-card text-light-text hover:text-primary-400 border border-slate-700 hover:border-primary-500/50 font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResumeSection;
