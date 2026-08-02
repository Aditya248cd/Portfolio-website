import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseGlow from './components/MouseGlow';
import ScrollToTop from './components/ScrollToTop';
import ResumeModal from './components/ResumeModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Initial loading screen simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Open resume modal or trigger download window
    setIsResumeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-light-text font-sans relative selection:bg-primary-500 selection:text-white">
      {/* Intro Boot Loader Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-2xl font-bold mb-4 shadow-xl shadow-primary-500/20 animate-pulse">
              AB
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gradient">Aditya Bhagwat</h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">Software Engineer Portfolio</p>
            <div className="w-32 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9 }}
                className="h-full bg-gradient-to-r from-primary-500 to-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Interactive Polish Tools */}
      <CustomCursor />
      <MouseGlow />
      <ScrollToTop />

      {/* Main Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Sections */}
      <main>
        <Hero
          onDownloadResume={handleDownloadResume}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <ResumeSection
          onOpenModal={() => setIsResumeModalOpen(true)}
          onDownload={handleDownloadResume}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Interactive PDF Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownload={() => {
          window.print();
        }}
      />
    </div>
  );
}

export default App;
