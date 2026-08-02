import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { personalData } from '../data/portfolioData';

const techFloatingIcons = [
  { icon: FaReact, color: 'text-cyan-400', label: 'React', delay: 0, x: -90, y: -80 },
  { icon: FaNodeJs, color: 'text-emerald-400', label: 'Node.js', delay: 1, x: 90, y: -70 },
  { icon: SiMongodb, color: 'text-green-500', label: 'MongoDB', delay: 0.5, x: 120, y: 30 },
  { icon: FaPython, color: 'text-amber-400', label: 'Python', delay: 1.5, x: -110, y: 40 },
  { icon: FaJava, color: 'text-red-400', label: 'Java', delay: 2, x: -50, y: 120 },
  { icon: Sparkles, color: 'text-cyan-300', label: 'Gemini AI', delay: 2.5, x: 70, y: 110 },
  { icon: FaDocker, color: 'text-blue-400', label: 'Docker', delay: 1.8, x: 0, y: -120 }
];

const Hero = ({ onDownloadResume, onOpenResumeModal }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Cycling Typing Animation Effect
  useEffect(() => {
    const roles = personalData.taglines;
    const currentRole = roles[currentTextIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2200; // Pause at full phrase
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return currentRole.substring(0, prev.length - 1);
        } else {
          return currentRole.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText === currentRole) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Blobs */}
      <div className="bg-glow-blob-1 top-20 left-10" />
      <div className="bg-glow-blob-2 bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-primary-500/30 text-xs sm:text-sm font-medium text-light-muted backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Information Science Engineering Student at RVITM</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-medium text-light-muted">
                Hello, I'm
              </h3>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-light-text">
                <span className="text-gradient">{personalData.name}</span>
              </h1>
            </div>

            {/* Dynamic Typing Title Line */}
            <div className="h-12 flex items-center text-xl sm:text-3xl font-semibold text-slate-200">
              <span className="text-primary-500 mr-2">&gt;</span>
              <span className="text-accent">{displayedText}</span>
              <span className="w-0.5 h-7 bg-primary-500 ml-1 inline-block animate-blink" />
            </div>

            {/* Description Subtext */}
            <p className="text-light-muted text-base sm:text-lg max-w-2xl leading-relaxed">
              Passionate Full Stack MERN & AI Developer building scalable, modern web applications and AI-driven systems. Focused on clean architecture, computer vision, and high-performance solutions.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl glass-card text-light-text hover:text-primary-500 border border-slate-700/60 hover:border-primary-500/50 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center space-x-5 text-light-muted">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:text-primary-500 hover:border-primary-500/50 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:text-primary-500 hover:border-primary-500/50 transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Visual & Orbiting Animated Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0"
          >
            {/* Center Graphic Glow Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl glass-card p-6 flex flex-col justify-between border border-primary-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] group">
              {/* Header Bar mock IDE */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-light-muted font-mono">
                  <Terminal className="w-3.5 h-3.5 text-primary-500" />
                  <span>aditya.config.js</span>
                </div>
              </div>

              {/* Central Developer Avatar Graphic */}
              <div className="flex-1 flex flex-col items-center justify-center my-4 relative">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-primary-600 via-primary-500 to-accent p-1 shadow-xl shadow-primary-500/30">
                  <div className="w-full h-full rounded-xl bg-dark-bg flex items-center justify-center overflow-hidden relative">
                    <Code2 className="w-16 h-16 text-primary-400 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-base font-bold text-light-text flex items-center justify-center space-x-1.5">
                    <span>Aditya Bhagwat</span>
                    <Sparkles className="w-4 h-4 text-accent" />
                  </h4>
                  <p className="text-xs text-light-muted mt-0.5">RVITM ISE (CGPA: 8.7)</p>
                </div>
              </div>

              {/* Floating Bottom Card Tag */}
              <div className="glass-card rounded-xl p-2.5 flex items-center justify-between border border-accent/20 bg-slate-900/80">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-xs font-medium text-slate-300">AI & MERN Full Stack</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Active
                </span>
              </div>

              {/* Orbiting Animated Floating Tech Icons around Center Box */}
              {techFloatingIcons.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.label}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: [tech.x, tech.x + 8, tech.x - 8, tech.x],
                      y: [tech.y, tech.y - 10, tech.y + 10, tech.y],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: tech.delay,
                    }}
                    className="absolute z-20 p-3 rounded-2xl glass-card border border-slate-700/60 shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer group/icon"
                    style={{
                      top: '40%',
                      left: '42%',
                    }}
                    title={tech.label}
                  >
                    <IconComponent className={`w-6 h-6 ${tech.color}`} />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-light-text bg-slate-900/90 px-1.5 py-0.5 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700">
                      {tech.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
