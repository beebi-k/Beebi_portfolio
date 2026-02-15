import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects = [
    {
      id: 1,
      title: 'Chronic Kidney Disease Prediction System',
      description:
        'Developed a supervised machine learning system to predict Chronic Kidney Disease (CKD) using structured clinical datasets. The project involved comprehensive data preprocessing, including handling missing values, encoding categorical features, performing feature scaling, and conducting exploratory data analysis to understand data distribution and correlations. Applied feature selection techniques to identify the most significant predictors and improve overall model efficiency. Trained and optimized multiple classification algorithms to enhance predictive performance and ensure model generalization. Evaluated the models using standard performance metrics such as Accuracy, Precision, Recall, F1-Score, and Confusion Matrix to validate reliability and effectiveness in disease prediction.',
      image: '/assets/images/CDK_predit.png',
      techStack: ['HTML','CSS','JavaSccript','Python','Flask','Mechine Learning','ML Libraries','Dataset from Kaggle'],
      github: 'https://github.com/beebi-k/CKD_Analytics',
      demo: 'https://CKD_Analytics.vercel.app',
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    {
      id: 2,
      title: 'AI-Powered Resume & Portfolio Generator',
      description:
        'Designed and developed an AI-powered web application that automatically generates professional resumes, cover letters, and personal portfolios based on user inputs. Implemented machine learning-driven logic to analyze user-provided information and generate customized, job-ready content aligned with industry standards. Built an interactive and responsive frontend using React to ensure a seamless and user-friendly experience, focusing on usability, structured content formatting, and real-time preview capabilities.',
      image: '/assets/images/Resume Builder.jpeg',
      techStack: ['React', 'OpenAI API', 'Tailwind CSS'],
      github: 'https://github.com/beebi-k/AI_Careers',
      demo: 'https://AI_Careers.vercel.app',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    },
    {
      id: 3,
      title: 'AI-Based EV Battery Health & Optimization System',
      description:
        'Developed an AI-driven system to predict battery health, remaining driving range, and overall performance using real-time telemetry and historical data analysis. Implemented machine learning models to optimize charging strategies based on usage patterns and environmental factors, while also recommending nearby charging stations for efficient route planning. Integrated an intelligent AI chatbot to provide battery diagnostics, personalized charging recommendations, performance insights, and trip optimization guidance, enhancing user decision-making and overall system usability.',
      image: '/assets/images/EV_Battery.jpeg',
      techStack: ['React', 'Python', 'Flask', 'TensorFlow', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/beebi-k/health-prediction',
      demo: 'https://EV_Battery.vercel.app',
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    },
  ];

  const premiumGradient =
    'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)';

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background overlay — UNCHANGED */}
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
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={
              isDark
                ? {
                    background: premiumGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow:
                      '0 0 40px rgba(96, 165, 250, 0.3)',
                  }
                : {
                    color: '#0f172a',
                  }
            }
          >
            Featured Projects
          </h2>

          <div
            className="w-24 h-1.5 mx-auto rounded-full"
            style={{
              background: premiumGradient,
            }}
          />

          <p
            className="mt-8 text-xl max-w-2xl mx-auto"
            style={{
              color: isDark ? '#ffffff' : '#475569',
            }}
          >
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl overflow-hidden transition-all duration-300 border-2 backdrop-blur-sm"
              style={
                isDark
                  ? {
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                      borderColor: `${project.color}40`,
                      boxShadow: `0 25px 50px -12px ${project.color}40`,
                    }
                  : {
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
                      borderColor: `${project.color}30`,
                      boxShadow:
                        '0 8px 24px rgba(15,23,42,0.08)',
                    }
              }
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: isDark ? '#ffffff' : '#0f172a',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-base mb-6 leading-relaxed"
                  style={{
                    color: isDark ? '#cbd5e1' : '#64748b',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-xs font-semibold border"
                      style={
                        isDark
                          ? {
                              background: `${project.color}30`,
                              borderColor: `${project.color}50`,
                              color: '#e2e8f0',
                            }
                          : {
                              background: `${project.color}20`,
                              borderColor: `${project.color}35`,
                              color: '#334155',
                            }
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-sm border transition-all duration-300"
                    style={
                      isDark
                        ? {
                            background: `${project.color}30`,
                            borderColor: `${project.color}50`,
                            color: '#ffffff',
                          }
                        : {
                            background: `${project.color}25`,
                            borderColor: `${project.color}40`,
                            color: '#0f172a',
                          }
                    }
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-sm transition-all duration-300 text-white"
                    style={{
                      background: project.gradient,
                    }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
