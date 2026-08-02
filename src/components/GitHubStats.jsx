import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { personalData } from '../data/portfolioData';

// Generate mock contribution grid squares representing green active commits
const generateContributionGrid = () => {
  const weeks = 28;
  const daysPerWeek = 7;
  const grid = [];

  for (let w = 0; w < weeks; w++) {
    const weekDays = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.45) level = 1;
      if (rand > 0.7) level = 2;
      if (rand > 0.85) level = 3;
      if (rand > 0.95) level = 4;
      weekDays.push(level);
    }
    grid.push(weekDays);
  }
  return grid;
};

const contributionLevels = [
  'bg-slate-800/80',
  'bg-emerald-900/60 border border-emerald-700/40',
  'bg-emerald-700/80 border border-emerald-500/50',
  'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]',
  'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]'
];

const gridData = generateContributionGrid();

const GitHubStats = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-xl space-y-8"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 text-light-text">
                <FaGithub className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-light-text flex items-center space-x-2">
                  <span>GitHub Contributions</span>
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                </h3>
                <p className="text-xs text-light-muted">
                  Open Source Activity & Commit Frequency (@Aditya248cd)
                </p>
              </div>
            </div>

            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-light-text border border-slate-700 text-xs font-semibold transition-colors"
            >
              <span>Follow on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl font-extrabold text-emerald-400">450+</div>
              <div className="text-[11px] text-light-muted font-medium mt-0.5">Commits Last Year</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl font-extrabold text-primary-400">15+</div>
              <div className="text-[11px] text-light-muted font-medium mt-0.5">Public Repositories</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl font-extrabold text-accent">98.9%</div>
              <div className="text-[11px] text-light-muted font-medium mt-0.5">Accuracy on ML Models</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl font-extrabold text-rose-400">100%</div>
              <div className="text-[11px] text-light-muted font-medium mt-0.5">Clean Code Compliance</div>
            </div>
          </div>

          {/* Simulated GitHub Contribution Heatmap */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-light-muted">
              <span>Commit Activity Log</span>
              <div className="flex items-center space-x-1 text-[10px]">
                <span>Less</span>
                {contributionLevels.map((lvlClass, idx) => (
                  <span key={idx} className={`w-2.5 h-2.5 rounded-sm ${lvlClass}`} />
                ))}
                <span>More</span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex space-x-1.5 min-w-max">
                {gridData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col space-y-1.5">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm transition-all duration-300 hover:scale-125 cursor-pointer ${contributionLevels[level]}`}
                        title={`Activity level ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default GitHubStats;
