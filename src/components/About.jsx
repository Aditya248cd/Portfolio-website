import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Users, Code2, GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const traitIcons = {
  Brain: Brain,
  Zap: Zap,
  Users: Users,
  Code2: Code2
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold text-primary-400 uppercase tracking-wider">
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-light-text tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full" />
        </div>

        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Side: Bio & Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-700/60 shadow-xl">
              <h3 className="text-2xl font-bold text-light-text flex items-center space-x-2">
                <span>Engineering Student & Developer</span>
              </h3>

              <p className="text-light-muted text-base leading-relaxed">
                "{personalData.bio}"
              </p>

              {/* Education Card Highlight */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-primary-500/30 space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 text-primary-500/10 group-hover:text-primary-500/20 transition-colors">
                  <GraduationCap className="w-20 h-20" />
                </div>
                <div className="flex items-center space-x-3 text-primary-400 font-semibold text-sm">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span>Current Education</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-light-text">
                    {personalData.education.institution}
                  </h4>
                  <p className="text-sm text-slate-300">
                    {personalData.education.degree}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-light-muted">
                  <span className="flex items-center space-x-1 font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <Award className="w-3.5 h-3.5 mr-1" />
                    CGPA: {personalData.education.cgpa}
                  </span>
                  <span>📅 {personalData.education.period}</span>
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {personalData.education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* General Professional Summary Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-5 border border-slate-700/60 flex items-center space-x-4 bg-slate-900/60"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent/20 border border-primary-500/30 flex items-center justify-center text-accent flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                Dedicated to building impactful software solutions, continuously expanding technical capabilities, and maintaining high engineering standards across full-stack and AI applications.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: 4 Core Traits Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalData.traits.map((trait, idx) => {
              const IconComp = traitIcons[trait.icon] || Code2;
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between border border-slate-700/60 shadow-lg group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:text-accent transition-all duration-300 mb-4 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-light-text mb-2 group-hover:text-primary-400 transition-colors">
                      {trait.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-semibold text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Core Competency
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
