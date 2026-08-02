import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { certificationsData, courseworkData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent uppercase tracking-wider">
            <span>Credentials & Academics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-light-text tracking-tight">
            Certifications & <span className="text-gradient">Coursework</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Certifications Timeline / Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-light-text flex items-center space-x-2.5">
              <ShieldCheck className="w-6 h-6 text-primary-500" />
              <span>Verified Certifications</span>
            </h3>

            {certificationsData.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-700/60 shadow-xl space-y-3 relative overflow-hidden group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent/20 border border-primary-500/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-primary-400 border border-slate-700">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-light-text group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-accent mt-0.5">
                    {cert.type}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  Issuer: {cert.issuer}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Relevant Coursework Grid */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-light-text flex items-center space-x-2.5">
              <BookOpen className="w-6 h-6 text-accent" />
              <span>Relevant Academic Coursework</span>
            </h3>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl space-y-4"
            >
              <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                Core Computer Science & Information Science subjects completed at RV Institute of Technology and Management (CGPA 8.7/10):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {courseworkData.map((course, idx) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-accent/40 flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-all group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
