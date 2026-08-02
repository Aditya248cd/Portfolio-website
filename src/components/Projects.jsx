import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Sparkles, Terminal, Code2, Cpu, FileSpreadsheet } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

// Visual Mockup Components for Project Cards
const ProjectMockupVisual = ({ projectId }) => {
  if (projectId === 'resume-analyzer') {
    return (
      <div className="w-full h-48 sm:h-56 bg-slate-900/90 rounded-2xl p-4 border border-primary-500/30 flex flex-col justify-between relative overflow-hidden group-hover:border-primary-500/60 transition-colors">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-primary-400">Gemini ATS Engine v2.4</span>
        </div>

        <div className="grid grid-cols-12 gap-3 my-auto items-center">
          <div className="col-span-4 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
            <div className="text-2xl font-black text-emerald-400">92%</div>
            <div className="text-[10px] text-slate-400">ATS Match Score</div>
          </div>
          <div className="col-span-8 space-y-2">
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-to-r from-primary-500 to-accent" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>Extracted Skills: 18</span>
              <span>Missing: 2</span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              <span className="px-1.5 py-0.5 text-[9px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">React.js</span>
              <span className="px-1.5 py-0.5 text-[9px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Node.js</span>
              <span className="px-1.5 py-0.5 text-[9px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between bg-slate-950/60 p-2 rounded-lg">
          <span className="text-accent flex items-center">
            <Sparkles className="w-3 h-3 mr-1" /> AI Resume Suggestion Ready
          </span>
          <span className="text-emerald-400 font-bold">JWT Secured</span>
        </div>
      </div>
    );
  }

  if (projectId === 'sign-language-translator') {
    return (
      <div className="w-full h-48 sm:h-56 bg-slate-900/90 rounded-2xl p-4 border border-accent/30 flex flex-col justify-between relative overflow-hidden group-hover:border-accent/60 transition-colors">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-accent">MediaPipe Landmarks (21 points)</span>
        </div>

        <div className="flex items-center justify-around my-auto">
          <div className="relative w-20 h-20 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
            <Cpu className="w-10 h-10 text-accent animate-pulse" />
            <span className="absolute -top-1 -right-1 px-1 text-[8px] bg-accent text-slate-950 font-bold rounded">Live FPS: 30</span>
          </div>
          <div className="space-y-1.5 text-left">
            <div className="text-xs text-slate-400">Classified Sign:</div>
            <div className="text-xl font-bold text-light-text tracking-wide bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
              "HELLO WORLD"
            </div>
            <div className="text-[10px] text-emerald-400 font-mono">Confidence: 99.4%</div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between bg-slate-950/60 p-2 rounded-lg">
          <span className="text-accent">🔊 Text-To-Speech Synthesis</span>
          <span className="text-primary-400">4,500 Dataset Samples</span>
        </div>
      </div>
    );
  }

  // Finance Tracker
  return (
    <div className="w-full h-48 sm:h-56 bg-slate-900/90 rounded-2xl p-4 border border-primary-500/30 flex flex-col justify-between relative overflow-hidden group-hover:border-primary-500/60 transition-colors">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] font-mono text-primary-400">Gemini Vision OCR Scanner</span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-auto">
        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
          <div className="text-[10px] text-slate-400">Monthly Net Income</div>
          <div className="text-base font-bold text-emerald-400">$8,450.00</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
          <div className="text-[10px] text-slate-400">Tracked Expenses</div>
          <div className="text-base font-bold text-rose-400">$2,140.50</div>
        </div>
      </div>

      <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between bg-slate-950/60 p-2 rounded-lg">
        <span className="text-accent flex items-center">
          <FileSpreadsheet className="w-3 h-3 mr-1" /> Clerk & Arcjet Secured
        </span>
        <span className="text-emerald-400">Inngest Cron Active</span>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold text-primary-400 uppercase tracking-wider">
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-light-text tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image / Interactive Mockup Header */}
                <div className="mb-6 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <ProjectMockupVisual projectId={project.id} />
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1 mb-3">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-2xl font-bold text-light-text group-hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent font-medium">{project.subtitle}</p>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-light-muted leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-light-text border border-slate-700 text-xs font-semibold transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 border border-primary-500/30 text-xs font-semibold transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent text-white text-xs font-semibold hover:shadow-md hover:shadow-primary-500/20 transition-all cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
