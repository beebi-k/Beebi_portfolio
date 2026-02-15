import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme(); // ✅ FIXED
  const isDark = theme === 'dark';

  const contactInfo = [
    {
      icon: <Phone size={30} />,
      label: 'Phone',
      value: '+91 7406814007',
      link: 'tel:+917406814007',
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    {
      icon: <Mail size={30} />,
      label: 'Email',
      value: 'kalagotlabeebi95@gmail.com',
      link: 'mailto:kalagotlabeebi95@gmail.com',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    },
    {
      icon: <MapPin size={30} />,
      label: 'Location',
      value: 'Hyderabad, India',
      link: null,
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/beebi950',
      label: 'GitHub',
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/kalagotla-beebi',
      label: 'LinkedIn',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:kalagotlabeebi95@gmail.com',
      label: 'Email',
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    },
  ];

  const premiumGradient =
    'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)';

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* BACKGROUND OVERLAY (UNCHANGED) */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background: premiumGradient,
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: premiumGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </h2>

          <div
            className="w-24 h-1.5 mx-auto rounded-full"
            style={{ background: premiumGradient }}
          />

          <p
            className="mt-8 text-xl max-w-2xl mx-auto"
            style={{
              color: isDark ? '#ffffff' : '#475569',  // ✅ light fix
            }}
          >
            I'm always open to discussing new projects and creative ideas
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info) => (
            <motion.a
              key={info.label}
              href={info.link}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-10 rounded-3xl shadow-2xl transition-all duration-300 overflow-hidden group border-2 backdrop-blur-sm"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
                borderColor: isDark
                  ? `${info.color}40`
                  : `${info.color}30`,
                boxShadow: isDark
                  ? `0 25px 50px -12px ${info.color}40`
                  : '0 4px 24px rgba(30,41,59,0.08)',
              }}
            >

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: info.gradient }}
              />

              <div
                className="relative w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-xl"
                style={{
                  background: info.gradient,
                }}
              >
                {info.icon}
              </div>

              <div className="relative text-center">
                <p
                  className="text-sm font-bold mb-3 uppercase tracking-wider"
                  style={{
                    color: isDark ? '#94a3b8' : '#64748b', // ✅ light fix
                  }}
                >
                  {info.label}
                </p>

                <p
                  className="text-2xl font-bold"
                  style={{
                    color: isDark ? '#ffffff' : '#0f172a', // ✅ light fix
                  }}
                >
                  {info.value}
                </p>
              </div>

              <div
                className="absolute right-8 bottom-8"
                style={{ color: info.color }}
              >
                <ExternalLink size={24} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* SOCIAL SECTION */}
        <div className="max-w-4xl mx-auto p-12 rounded-3xl shadow-2xl border-2 backdrop-blur-sm"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
              : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
            borderColor: isDark
              ? 'rgba(255,255,255,0.2)'
              : 'rgba(96,165,250,0.2)',
          }}
        >

          <h3
            className="text-3xl font-bold text-center mb-10"
            style={{
              color: isDark ? '#ffffff' : '#0f172a',
            }}
          >
            Connect With Me
          </h3>

          <div className="flex justify-center gap-8 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="relative p-8 rounded-3xl transition-all duration-300 shadow-xl overflow-hidden group border-2 backdrop-blur-sm"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'rgba(255,255,255,0.9)',
                  borderColor: isDark
                    ? `${social.color}40`
                    : `${social.color}30`,
                }}
              >

                <div className="relative flex items-center justify-center">
                  <div
                    className="p-5 rounded-2xl transition-transform duration-300 shadow-xl"
                    style={{
                      background: social.gradient,
                    }}
                  >
                    {social.icon}
                  </div>
                </div>

                <p
                  className="relative text-center mt-4 font-bold text-base"
                  style={{
                    color: isDark ? '#ffffff' : '#334155', // ✅ light fix
                  }}
                >
                  {social.label}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <motion.a
            href="mailto:kalagotlabeebi95@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-12 py-5 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl"
            style={{
              background: premiumGradient,
            }}
          >
            <Send size={28} />
            Let's Work Together
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
