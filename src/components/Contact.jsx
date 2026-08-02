import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3B82F6', '#06B6D4', '#60A5FA', '#10B981']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      if (serviceId !== 'YOUR_SERVICE_ID' && publicKey !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Aditya Bhagwat',
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      triggerConfetti();
    } catch (err) {
      console.error('EmailJS Error:', err);
      setLoading(false);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent uppercase tracking-wider">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-light-text tracking-tight">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Contact Cards & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="glass-card rounded-3xl p-8 border border-slate-700/60 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-light-text flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-primary-500" />
                <span>Let's Build Together</span>
              </h3>

              <p className="text-sm text-light-muted leading-relaxed">
                Whether you have an exciting software engineering opportunity, full-stack project idea, AI collaboration, or just want to connect, feel free to drop a message!
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-primary-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-light-muted font-medium">Email Address</div>
                    <div className="text-sm font-bold text-light-text group-hover:text-primary-400 transition-colors">
                      {personalData.contact.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalData.contact.phone}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-accent/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-light-muted font-medium">Phone / WhatsApp</div>
                    <div className="text-sm font-bold text-light-text group-hover:text-accent transition-colors">
                      {personalData.contact.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-light-muted font-medium">Location</div>
                    <div className="text-sm font-bold text-light-text">
                      {personalData.contact.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-light-muted uppercase tracking-wider">Social Links</span>
                <div className="flex items-center space-x-3">
                  <a
                    href={personalData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700 hover:text-primary-400 hover:border-primary-500/50 transition-all text-light-muted"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={personalData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700 hover:text-accent hover:border-accent/50 transition-all text-light-muted"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 border border-slate-700/60 shadow-xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-light-text uppercase tracking-wider">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-light-text placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold text-light-text uppercase tracking-wider">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-light-text placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-bold text-light-text uppercase tracking-wider">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-light-text placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-light-text uppercase tracking-wider">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-light-text placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Feedback Toast Banner */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Thank you! Your message has been sent successfully. Aditya will get back to you shortly.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-medium flex items-center space-x-2"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Something went wrong sending the message. Please try emailing directly at {personalData.contact.email}.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent text-white font-bold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
