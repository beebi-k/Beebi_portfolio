import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const premiumGradient =
    isDark
      ? 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)'
      : 'linear-gradient(135deg, #1d4ed8, #7c3aed, #db2777)';

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background: premiumGradient,
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-left">

            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border-2"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
                borderColor: isDark
                  ? 'rgba(255,255,255,0.2)'
                  : 'rgba(96,165,250,0.3)',
              }}
            >
              <Sparkles
                size={20}
                className={isDark ? "text-yellow-400" : "text-amber-500"}
              />
              <span
                className="text-base font-semibold"
                style={{ color: isDark ? '#ffffff' : '#0f172a' }}
              >
                Available for Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl mb-6 font-semibold"
              style={{
                color: isDark ? '#60a5fa' : '#2563eb',
              }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              style={{
                color: isDark ? '#ffffff' : '#0f172a',
              }}
            >
              Kalagotla
              <br />
              <span
                className={`inline-block bg-gradient-to-r ${
                  isDark
                    ? 'from-blue-400 via-purple-400 to-pink-400'
                    : 'from-blue-700 via-purple-700 to-pink-600'
                } bg-clip-text text-transparent`}
              >
                Beebi
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={itemVariants}
              className={`inline-block text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r ${
                isDark
                  ? 'from-blue-400 via-purple-400 to-pink-400'
                  : 'from-blue-700 via-purple-700 to-pink-600'
              } bg-clip-text text-transparent`}
            >
              Full Stack Developer
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed"
              style={{
                color: isDark ? '#d1d5db' : '#475569',
              }}
            >
              Building exceptional digital experiences with cutting-edge technologies and creative solutions
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-5 mb-12">
              {[
                { icon: <Github size={28} />, href: 'https://github.com/beebi950' },
                { icon: <Linkedin size={28} />, href: 'https://www.linkedin.com/in/kalagotla-beebi' },
                { icon: <Mail size={28} />, href: 'mailto:kalagotlabeebi95@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-2xl backdrop-blur-sm border-2"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
                    borderColor: isDark
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(96,165,250,0.25)',
                  }}
                >
                  <span style={{ color: isDark ? '#ffffff' : '#1e293b' }}>
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white shadow-2xl"
                style={{
                  background: premiumGradient,
                }}
              >
                View Projects
                <ArrowRight size={24} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-sm border-2"
                style={{
                  color: isDark ? '#ffffff' : '#1e293b',
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
                  borderColor: isDark
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(139,92,246,0.4)',
                }}
              >
                Contact Me
                <Mail size={24} />
              </motion.a>
            </motion.div>

          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <div
              className="w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4"
              style={{
                borderColor: isDark
                  ? 'rgba(255,255,255,0.2)'
                  : 'rgba(255,255,255,0.8)',
              }}
            >
              <img
                src="/assets/images/home_img.jpeg"
                alt="Kalagotla Beebi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;
