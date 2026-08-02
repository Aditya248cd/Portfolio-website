import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Sparkles, Wrench, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  'Programming Languages': Code,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  'AI / ML': Sparkles,
  Tools: Wrench,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent uppercase tracking-wider">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-light-text tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-500 to-accent text-white shadow-lg shadow-primary-500/25 scale-105'
                    : 'glass-card text-light-muted hover:text-light-text hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((categoryGroup, idx) => {
            const IconComp = categoryIcons[categoryGroup.category] || Code;
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-slate-700/60 shadow-xl hover:border-primary-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-700/50">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:text-accent transition-transform duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-light-text group-hover:text-primary-400 transition-colors">
                      {categoryGroup.category}
                    </h3>
                  </div>

                  {/* Skill Items List */}
                  <div className="space-y-4">
                    {categoryGroup.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                          <span className="text-slate-200 flex items-center">
                            <CheckCircle className="w-3.5 h-3.5 text-accent mr-1.5" />
                            {skill.name}
                          </span>
                          <span className="text-xs text-primary-400 font-mono bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                            {skill.badge}
                          </span>
                        </div>

                        {/* Animated Level Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden p-0.5 border border-slate-700/40">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
