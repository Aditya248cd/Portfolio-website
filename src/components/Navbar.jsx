import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Download, FileText } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Blur header on scroll
      setIsScrolled(window.scrollY > 20);

      // Calculate reading progress bar
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollWidth((winScroll / height) * 100);
      }

      // Intersection / active section detector
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-dark-bg z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollWidth}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3.5 shadow-lg shadow-black/20' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
                AB
              </div>
              <span className="text-xl font-bold tracking-tight text-light-text group-hover:text-primary-500 transition-colors duration-300">
                {personalData.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                      isActive ? 'text-light-text' : 'text-light-muted hover:text-light-text'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-slate-800/80 border border-primary-500/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Quick Resume CTA Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-full bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 text-primary-500 hover:text-white transition-all duration-300 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-light-muted hover:text-light-text hover:bg-slate-800/60 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-nav border-t border-slate-800/80 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-primary-500/10 text-primary-500 border border-primary-500/30'
                          : 'text-light-muted hover:text-light-text hover:bg-slate-800/40'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-accent text-white shadow-md shadow-primary-500/20"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
