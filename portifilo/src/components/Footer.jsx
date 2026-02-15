import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/beebi950',
      label: 'GitHub',
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/kalagotla-beebi',
      label: 'LinkedIn',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:kalagotlabeebi95@gmail.com',
      label: 'Email',
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    },
  ];

  const premiumGradient =
    'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)';

  return (
    <footer
      className="py-16 relative overflow-hidden border-t transition-all duration-300"
      style={{
        borderColor: isDark
          ? 'rgba(255,255,255,0.1)'
          : 'rgba(96,165,250,0.2)',
        background: isDark ? 'transparent' : '#ffffff',
      }}
    >
      {/* Premium Gradient Background (FIXED VISIBILITY) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: premiumGradient,
          opacity: isDark ? 0.1 : 0.3,   // stronger for light theme
          filter: 'blur(140px)',         // stronger blur for visibility
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <p
              className="text-base font-medium transition-colors duration-300"
              style={{ color: isDark ? '#ffffff' : '#0f172a' }}
            >
              © {new Date().getFullYear()} Kalagotla Beebi. All rights reserved.
            </p>

            <p
              className="text-sm mt-2 transition-colors duration-300"
              style={{
                color: isDark
                  ? 'rgba(255,255,255,0.7)'
                  : '#64748b',
              }}
            >
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-sm border-2"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'rgba(255,255,255,0.9)',
                  borderColor: isDark
                    ? `${social.color}40`
                    : 'rgba(96,165,250,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = social.gradient;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDark
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'rgba(255,255,255,0.9)';
                }}
                aria-label={social.label}
              >
                <span style={{ color: isDark ? '#ffffff' : social.color }}>
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="my-10 border-t-2 transition-colors duration-300"
          style={{
            borderColor: isDark
              ? 'rgba(255,255,255,0.2)'
              : 'rgba(96,165,250,0.2)',
          }}
        />

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <div className="flex gap-8 mb-6 md:mb-0">
            {['Home', 'About', 'Skills', 'Projects', 'Internship', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium transition-colors duration-300"
                style={{
                  color: isDark ? '#e2e8f0' : '#334155',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <p
            className="font-medium transition-colors duration-300"
            style={{
              color: isDark
                ? 'rgba(255,255,255,0.7)'
                : '#64748b',
            }}
          >
            Made with ❤️
          </p>
        </motion.div>
      </div>

      {/* Back To Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-2xl shadow-2xl transition-all duration-300 z-50 text-white"
            style={{
              background: isDark
                ? premiumGradient
                : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
