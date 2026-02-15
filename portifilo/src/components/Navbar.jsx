import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certification', href: '#certification' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
  };

  const premiumGradient = 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md shadow-2xl border-b-2'
          : 'bg-transparent'
      }`}
      style={{
        borderColor: scrolled
          ? isDark
            ? 'rgba(255, 255, 255, 0.2)'
            : 'rgba(96, 165, 250, 0.2)'
          : 'transparent',
        background: scrolled
          ? isDark
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
            : 'rgba(255, 255, 255, 0.9)'
          : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center text-white font-bold text-xl"
              style={{
                background: premiumGradient,
                boxShadow: isDark
                  ? '0 10px 40px rgba(96, 165, 250, 0.4)'
                  : '0 6px 20px rgba(59, 130, 246, 0.3)',
              }}
            >
              KB
            </div>

            <span
              className="text-2xl font-bold"
              style={{
                color: isDark ? '#ffffff' : '#0f172a',
                textShadow: isDark
                  ? '0 2px 10px rgba(0, 0, 0, 0.3)'
                  : 'none',
              }}
            >
              Kalagotla Beebi
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  color: isDark ? '#ffffff' : '#334155',
                  textShadow: isDark
                    ? '0 2px 10px rgba(0, 0, 0, 0.3)'
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isDark
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))'
                    : 'rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.color = isDark
                    ? '#ffffff'
                    : '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = isDark
                    ? '#ffffff'
                    : '#334155';
                }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 shadow-xl hover:scale-105"
              style={{
                background: premiumGradient,
                boxShadow: isDark
                  ? '0 10px 40px rgba(96, 165, 250, 0.4)'
                  : '0 6px 20px rgba(59, 130, 246, 0.3)',
              }}
            >
              <Download size={18} />
              Resume
            </motion.a>

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl transition-all duration-300 shadow-xl hover:scale-110 backdrop-blur-sm border-2"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: isDark
                  ? 'rgba(255, 255, 255, 0.2)'
                  : 'rgba(96, 165, 250, 0.3)',
                boxShadow: isDark
                  ? '0 4px 20px rgba(96, 165, 250, 0.3)'
                  : '0 2px 12px rgba(30, 41, 59, 0.08)',
              }}
            >
              {theme === 'dark'
                ? <Sun size={20} className="text-yellow-400" />
                : <Moon size={20} className="text-slate-600" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border-2 transition-all duration-300"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                  : 'rgba(255, 255, 255, 0.95)',
                borderColor: isDark
                  ? 'rgba(255, 255, 255, 0.2)'
                  : 'rgba(96, 165, 250, 0.3)',
              }}
            >
              {theme === 'dark'
                ? <Sun size={20} className="text-yellow-400" />
                : <Moon size={20} className="text-slate-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl transition-colors duration-200"
              style={{
                color: isDark ? '#ffffff' : '#0f172a',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (UNCHANGED BACKGROUND) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-20 right-0 w-72 h-screen backdrop-blur-xl border-l-2 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.95))',
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-3 rounded-xl text-lg font-semibold text-white transition-all duration-300"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-white rounded-xl font-semibold transition-all duration-300"
                style={{
                  background: premiumGradient,
                  boxShadow: '0 10px 40px rgba(96, 165, 250, 0.4)',
                }}
              >
                <Download size={18} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
