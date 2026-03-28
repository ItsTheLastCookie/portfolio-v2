import { motion } from 'framer-motion';
import { Terminal, Cpu, Sparkles, Code2 } from 'lucide-react';
import { personalInfo, stats } from '../data/projects';

const features = [
  {
    icon: Terminal,
    title: 'CLI Development',
    description: 'Building powerful command-line tools with intuitive interfaces',
  },
  {
    icon: Cpu,
    title: 'Systems Programming',
    description: 'Low-level systems and performance-critical applications in Rust',
  },
  {
    icon: Sparkles,
    title: 'Computer Vision',
    description: 'Real-time image processing and pose detection with OpenCV',
  },
  {
    icon: Code2,
    title: 'Full-Stack',
    description: 'Modern web applications with React, TypeScript, and Node.js',
  },
];

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="about-content"
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Building the future,
              <br />
              <span className="gradient-text">one line at a time</span>
            </h2>
            <div className="about-text">
              <p>{personalInfo.bio}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="about-stats"
            >
              <div className="stat-item">
                <span className="stat-value">{stats.totalProjects}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.githubRepos}</span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.primaryLanguage}</span>
                <span className="stat-label">Primary Stack</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
