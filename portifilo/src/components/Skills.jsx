import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme(); // fixed missing ()
  const isDark = theme === 'dark';

  const skillsData = [
    {
      category: 'Frontend',
      icon: <Code size={32} />,
      skills: [
        { name: 'React', icon: '/assets/icons/react.png' },
        { name: 'JavaScript', icon: '/assets/icons/js.png' },
        { name: 'Tailwind CSS', icon: '/assets/icons/tailwind.png' },
        { name: 'HTML5', icon: '/assets/icons/html.png' },
        { name: 'CSS3', icon: '/assets/icons/css-3.png' },
      ],
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    {
      category: 'Backend',
      icon: <Settings size={32} />,
      skills: [
        { name: 'Node.js', icon: '/assets/icons/node.js.png' },
        { name: 'Express.js', icon: '/assets/icons/express-js.png' },
        { name: 'Python', icon: '/assets/icons/python.png' },
        { name: 'Java', icon: '/assets/icons/java.png' },
        { name: 'Authentication', icon: null },
      ],
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    },
    {
      category: 'Database',
      icon: <Database size={32} />,
      skills: [
        { name: 'PostgreSQL', icon: '/assets/icons/PostgreSQL.png' },
        { name: 'MySql', icon: '/assets/icons/mysql.png' },
      ],
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    },
    {
      category: 'Tools',
      icon: <Cpu size={32} />,
      skills: [
        { name: 'Git', icon: '/assets/icons/git.png' },
        { name: 'GitHub', icon: '/assets/icons/github.png' },
        { name: 'VS Code', icon: '/assets/icons/vscode.png' },
        { name: 'Postman', icon: '/assets/icons/postman-api.png' },
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const premiumGradient = 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)';

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
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
        
        {/* Heading */}
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
            style={
              isDark
                ? {
                    background: premiumGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 40px rgba(96, 165, 250, 0.3)',
                  }
                : {
                    color: '#0f172a',
                  }
            }
          >
            Skills & Technologies
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1.5 mx-auto rounded-full"
            style={{
              background: premiumGradient,
            }}
          />

          <motion.p
            variants={itemVariants}
            className="mt-8 text-xl max-w-2xl mx-auto"
            style={{
              color: isDark ? '#ffffff' : '#475569',
            }}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-3xl shadow-2xl transition-all duration-300 border-2 backdrop-blur-sm"
              style={
                isDark
                  ? {
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                      borderColor: `${category.color}40`,
                      boxShadow: `0 25px 50px -12px ${category.color}40`,
                    }
                  : {
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
                      borderColor: `${category.color}30`,
                      boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
                    }
              }
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center text-white shadow-xl"
                style={{
                  background: category.gradient,
                }}
              >
                {category.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-center mb-8"
                style={{
                  color: isDark ? '#ffffff' : category.color,
                }}
              >
                {category.category}
              </h3>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="px-5 py-4 rounded-xl text-center text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3"
                    style={
                      isDark
                        ? {
                            background:
                              'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
                            color: '#ffffff',
                            boxShadow: `0 4px 15px ${category.color}40`,
                          }
                        : {
                            background: `${category.color}15`,
                            color: '#334155',
                            boxShadow: `0 4px 15px ${category.color}25`,
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!isDark) {
                        e.currentTarget.style.background = `${category.color}25`;
                      } else {
                        e.currentTarget.style.background = category.gradient;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isDark) {
                        e.currentTarget.style.background = `${category.color}15`;
                      } else {
                        e.currentTarget.style.background =
                          'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))';
                      }
                    }}
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center"
        >
          <div
            className="max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl border-2 backdrop-blur-sm"
            style={
              isDark
                ? {
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    borderColor: 'rgba(255,255,255,0.2)',
                  }
                : {
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
                    borderColor: 'rgba(15,23,42,0.08)',
                    boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
                  }
            }
          >
            <p
              className="text-xl"
              style={{
                color: isDark ? '#ffffff' : '#475569',
              }}
            >
              I'm continuously expanding my skill set and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
