import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, GraduationCap, Code2, Briefcase, Award } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalData, projectsData, courseworkData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static print:block">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md print:hidden"
        />

        {/* Resume Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 text-slate-100 rounded-3xl border border-primary-500/30 shadow-2xl z-10 my-6 max-h-[90vh] overflow-y-auto print:max-h-none print:overflow-visible print:bg-white print:text-black print:rounded-none print:border-none print:shadow-none print:my-0"
        >
          {/* Top Actions Control Header (Hidden in Print) */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 print:hidden">
            <h3 className="text-lg font-bold text-light-text flex items-center space-x-2">
              <span>Aditya Bhagwat — Official Resume</span>
            </h3>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-light-text border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={onDownload}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent text-white text-xs font-semibold hover:shadow-lg transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Clean Resume Layout Body (PDF-like layout) */}
          <div className="p-6 sm:p-10 space-y-6 print:p-0 print:space-y-4 text-slate-200 print:text-black font-sans">
            
            {/* Header / Contact Details */}
            <div className="border-b border-slate-800 print:border-black pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-black">
                  {personalData.name}
                </h1>
                <p className="text-sm font-semibold text-primary-400 print:text-blue-700 mt-1">
                  {personalData.title} | RVITM ISE Student
                </p>
              </div>

              <div className="text-xs sm:text-sm space-y-1 text-slate-400 print:text-slate-700 text-right sm:text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Phone className="w-3.5 h-3.5 text-accent print:text-blue-600" />
                  <span>{personalData.contact.phone}</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Mail className="w-3.5 h-3.5 text-accent print:text-blue-600" />
                  <a href={`mailto:${personalData.contact.email}`} className="hover:underline">{personalData.contact.email}</a>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <FaGithub className="w-3.5 h-3.5 text-accent print:text-blue-600" />
                  <a href={personalData.contact.github} target="_blank" rel="noreferrer" className="hover:underline">github.com/Aditya248cd</a>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <FaLinkedin className="w-3.5 h-3.5 text-accent print:text-blue-600" />
                  <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/aditya-bhagwat-a0933a270</a>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 print:border-slate-400 pb-1 uppercase tracking-wider flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-primary-400 print:text-black" /> Education
              </h2>
              <div className="flex justify-between items-start pt-1">
                <div>
                  <h3 className="font-bold text-white print:text-black text-base">{personalData.education.institution}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700">
                    {personalData.education.degree} — <span className="font-semibold text-emerald-400 print:text-emerald-700">CGPA: {personalData.education.cgpa}</span>
                  </p>
                </div>
                <div className="text-xs text-slate-400 print:text-slate-600 font-mono text-right">
                  <div>{personalData.education.location}</div>
                  <div>{personalData.education.period}</div>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 print:border-slate-400 pb-1 uppercase tracking-wider flex items-center">
                <Code2 className="w-4 h-4 mr-2 text-accent print:text-black" /> Projects
              </h2>
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-white print:text-black text-sm">
                      {proj.title} <span className="font-normal text-xs text-slate-400 print:text-slate-600">| {proj.subtitle}</span>
                    </h3>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-xs text-accent print:text-blue-700 font-mono hover:underline">
                      GitHub Repo
                    </a>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800 pl-2">
                    {proj.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 print:border-slate-400 pb-1 uppercase tracking-wider flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-primary-400 print:text-black" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800 pt-1">
                <div><strong className="text-white print:text-black">Languages:</strong> Python, Java, C, JavaScript, SQL, HTML, CSS</div>
                <div><strong className="text-white print:text-black">Frontend:</strong> React.js, Tailwind CSS, HTML5, CSS3</div>
                <div><strong className="text-white print:text-black">Backend:</strong> Node.js, Express.js, Flask, REST APIs</div>
                <div><strong className="text-white print:text-black">Databases:</strong> MongoDB, MySQL, PostgreSQL</div>
                <div><strong className="text-white print:text-black">AI / ML:</strong> Google Gemini API, MediaPipe, OpenCV, Scikit-learn</div>
                <div><strong className="text-white print:text-black">Developer Tools:</strong> Git, GitHub, Docker, VS Code, Linux, Postman</div>
              </div>
            </div>

            {/* Certifications & Coursework */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 print:border-slate-400 pb-1 uppercase tracking-wider flex items-center">
                <Award className="w-4 h-4 mr-2 text-accent print:text-black" /> Certifications & Coursework
              </h2>
              <div className="text-xs text-slate-300 print:text-slate-800 space-y-1">
                <div><strong className="text-white print:text-black">Certifications:</strong> Cyber Security Workshop; International Level Student Workshop (2024)</div>
                <div><strong className="text-white print:text-black">Relevant Coursework:</strong> {courseworkData.join(", ")}</div>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="pt-2 text-xs text-slate-400 print:text-slate-600 border-t border-slate-800 print:border-slate-400 flex items-center justify-between">
              <span><strong>Languages Spoken:</strong> English | Hindi | Kannada</span>
              <span>Aditya Bhagwat — RVITM ISE</span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
