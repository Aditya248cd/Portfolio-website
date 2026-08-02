import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl p-6 sm:p-8 border border-primary-500/30 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-800/80 border border-slate-700 hover:text-primary-500 hover:border-primary-500/50 transition-all text-light-muted z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 pr-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-xs font-semibold text-primary-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Case Study</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-light-text tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-accent font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 my-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800/90 text-primary-400 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-light-muted text-sm sm:text-base leading-relaxed border-t border-slate-700/60 pt-6">
            <div>
              <h4 className="text-lg font-bold text-light-text mb-2 flex items-center space-x-2">
                <span>Overview</span>
              </h4>
              <p>{project.longDescription}</p>
            </div>

            {/* Architecture Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-accent/30 space-y-2">
              <div className="flex items-center space-x-2 text-accent font-semibold text-xs sm:text-sm">
                <Cpu className="w-4 h-4" />
                <span>System Architecture & Data Flow</span>
              </div>
              <p className="font-mono text-xs text-slate-300 leading-relaxed">
                {project.architecture}
              </p>
            </div>

            {/* Feature List */}
            <div>
              <h4 className="text-lg font-bold text-light-text mb-3 flex items-center space-x-2">
                <Layers className="w-5 h-5 text-primary-500" />
                <span>Key Technical Features</span>
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer CTA Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-light-text border border-slate-700 font-semibold text-sm transition-all"
              >
                <FaGithub className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Repository / Demo</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-400 hover:text-light-text transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
