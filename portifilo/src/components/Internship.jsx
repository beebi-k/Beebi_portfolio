import React from 'react';
import { motion } from 'framer-motion';
import {  Clock, MapPin, ArrowRight, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Internship = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const internships = [
    {
      id: 1,
      title: 'AI & ML Virtual Internship Program',
      company: 'IBM SkillsBuild via EDUNET & AICTE',
      location: 'Virtual',
      duration: '6 weeks',
      stipend: '₹ 0 (Unpaid)',
      applyLink: 'https://skillsbuild.org/',
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    {
      id: 2,
      title: 'AI & ML Virtual Internship',
      company: 'IBM SkillsBuild via EDUNET & AICTE',
      location: 'Virtual',
      duration: '4 weeks',
      stipend: '₹ 0 (Unpaid)',
      applyLink: 'https://skillsbuild.org/',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'AI & Machine Learning Certification',
      organization: 'IBM SkillsBuild',
      issued: '2025',
      credential: 'AICTE Approved',
      credentialLink: '/assets/certfit/aict_ibm_6week.pdf',
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    },
    {
      id: 2,
      title: 'AI & Machine Learning Certification',
      organization: 'IBM SkillsBuild',
      issued: '2025',
      credential: 'Industry Recognized',
      credentialLink: '/assets/certfit/aict_ibm_4week.pdf',
      color: '#34d399',
      gradient: 'linear-gradient(135deg, #34d399, #10b981)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const premiumGradient =
    'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)';

  return (
    <section id="internship" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: premiumGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Certifications & Internships
          </h2>
        </motion.div>

        {/* ================= INTERNSHIPS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {internships.map((internship) => (
            <motion.div
              key={internship.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 backdrop-blur-sm"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))',
                borderColor: `${internship.color}40`,
                boxShadow: isDark
                  ? undefined
                  : '0 8px 30px rgba(30,41,59,0.08)',
              }}
            >
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: isDark ? '#ffffff' : '#0f172a' }}
                >
                  {internship.title}
                </h3>

                <p
                  className="text-lg font-bold mb-4"
                  style={{ color: internship.color }}
                >
                  {internship.company}
                </p>

                <div
                  className="space-y-3 text-sm mb-6"
                  style={{ color: isDark ? '#ffffff' : '#475569' }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {internship.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    {internship.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    {internship.stipend}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(internship.applyLink, "_blank")}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white rounded-xl font-bold shadow-xl"
                  style={{
                    background: internship.gradient,
                  }}
                >
                  Apply Now
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CERTIFICATIONS ================= */}
        <motion.div className="mt-28 text-center">
          <h2
            className="text-5xl md:text-6xl font-bold mb-16"
            style={{
              background: premiumGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl border-2 backdrop-blur-sm shadow-xl"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))',
                  borderColor: `${cert.color}50`,
                  boxShadow: isDark
                    ? undefined
                    : '0 8px 30px rgba(30,41,59,0.08)',
                }}
              >
                <Award
                  size={48}
                  className="mx-auto mb-4"
                  style={{ color: cert.color }}
                />

                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: isDark ? '#ffffff' : '#0f172a' }}
                >
                  {cert.title}
                </h3>

                <p
                  className="text-lg font-semibold mb-2"
                  style={{ color: cert.color }}
                >
                  {cert.organization}
                </p>

                <p
                  className="text-sm"
                  style={{ color: isDark ? '#ffffff' : '#475569' }}
                >
                  Issued: {cert.issued}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(cert.credentialLink, "_blank")}
                  className="mt-6 px-6 py-3 rounded-xl text-white font-bold"
                  style={{ background: cert.gradient }}
                >
                  View Certificate
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Internship;
