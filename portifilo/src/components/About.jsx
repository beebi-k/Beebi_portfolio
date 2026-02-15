import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme(); // ✅ FIXED
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const premiumGradient =
    'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)';

  return (
    <section id="about" className="py-24 relative overflow-hidden">

      {/* Premium gradient overlay (UNCHANGED) */}
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

        {/* SECTION TITLE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: premiumGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1.5 mx-auto rounded-full"
            style={{ background: premiumGradient }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* PHOTO */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 relative"
                style={{
                  borderColor: isDark
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(96,165,250,0.3)', // ✅ light fix
                  boxShadow: isDark
                    ? '0 25px 80px rgba(96,165,250,0.4)'
                    : '0 20px 60px rgba(30,41,59,0.15)', // ✅ light fix
                }}
              >
                <img
                  src="/assets/images/picture.jpg"
                  alt="Kalagotla Beebi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(96,165,250,0.4)',
                    '0 0 0 30px rgba(96,165,250,0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="absolute inset-0 rounded-3xl"
              />
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >

            {/* Paragraph 1 */}
            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed mb-8"
              style={{
                color: isDark ? '#ffffff' : '#334155', // ✅ light fix
              }}
            >
              I'm a passionate Full Stack Web Developer with a strong foundation in both frontend and backend technologies. As a recent graduate, I'm eager to apply my skills and knowledge to build innovative web solutions that make a real impact.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed mb-8"
              style={{
                color: isDark ? '#ffffff' : '#334155', // ✅ light fix
              }}
            >
              My journey in web development began with a curiosity about how websites work, which quickly evolved into a deep passion for creating seamless user experiences. I thrive on solving complex problems and transforming ideas into functional, visually appealing applications.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed mb-10"
              style={{
                color: isDark ? '#ffffff' : '#334155', // ✅ light fix
              }}
            >
              I'm constantly learning and exploring new technologies to stay updated with industry trends. My goal is to contribute to projects that challenge me and allow me to grow as a developer while delivering value to users.
            </motion.p>

            {/* TRAITS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented', 'Creative Thinker'].map((trait, index) => {
                const colors = ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'];
                return (
                  <span
                    key={trait}
                    className="px-6 py-3 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      background: isDark
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                        : `${colors[index]}20`, // ✅ light fix
                      color: isDark ? '#ffffff' : colors[index], // ✅ light fix
                      border: `2px solid ${
                        isDark ? colors[index] : colors[index] + '50'
                      }`,
                    }}
                  >
                    {trait}
                  </span>
                );
              })}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
