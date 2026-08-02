import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary-500/20">
              AB
            </div>
            <div>
              <h4 className="text-lg font-bold text-light-text">{personalData.name}</h4>
              <p className="text-xs text-light-muted">Software Developer & AI Enthusiast</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-light-muted">
            <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-primary-400 transition-colors">Certifications</a>
            <a href="#resume" className="hover:text-primary-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary-400 hover:border-primary-500/40 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary-400 hover:border-primary-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800/80" />

        {/* Bottom Row: Copyright & Built With */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-light-muted gap-4 text-center sm:text-left">
          <div>
            © {currentYear} {personalData.name}. All rights reserved. RVITM ISE.
          </div>

          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>by <strong className="text-light-text font-semibold">{personalData.name}</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
