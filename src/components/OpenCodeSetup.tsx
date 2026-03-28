import { motion } from 'framer-motion';
import { Cpu, Zap, Terminal, Code2, Rocket, Brain, GitBranch, Globe, Layers, Workflow, Command, FileCode, Users, Lightbulb, ScanLine, Bug, RefreshCw, FileText, TestTube, Plug } from 'lucide-react';
import { openCodeConfig } from '../data/projects';

const skillIcons: Record<string, React.ElementType> = {
  'Web Development': Globe,
  'Frontend Design': Layers,
  'Vercel Deploy': Rocket,
  'GitHub Integration': GitBranch,
  'Code Review': FileCode,
  'Skill Management': Brain,
  'Task Automation': Workflow,
  'CLI Operations': Terminal,
  'File Management': Command,
  'Project Scaffolding': Code2,
};

const featureIcons: Record<string, React.ElementType> = {
  'AI-Powered Coding': Brain,
  'Automatic Skill Loading': Zap,
  'Git Integration': GitBranch,
  'File Operations': Command,
  'Web App Testing': Globe,
  'Deployment Automation': Rocket,
  'Multi-Agent Collaboration': Users,
  'Context-Aware Assistance': Lightbulb,
  'Real-time Code Analysis': ScanLine,
  'Error Detection & Fix': Bug,
  'Code Refactoring': RefreshCw,
  'Documentation Generation': FileText,
  'Test Generation': TestTube,
  'API Integration': Plug,
};

export function OpenCodeSetup() {
  return (
    <section id="opencode" className="opencode-setup">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-center"
        >
          <span className="section-label">My Setup</span>
          <h2 className="section-title">
            Powered by <span className="gradient-text">OpenCode</span>
          </h2>
          <p className="section-description">
            My development environment is supercharged with OpenCode AI, featuring advanced 
            capabilities and specialized skills for rapid development.
          </p>
        </motion.div>

        <div className="opencode-grid-v4">
          {/* Top Row - Model & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="opencode-card opencode-model-card"
          >
            <div className="opencode-card-header">
              <div className="opencode-icon model-icon">
                <Cpu size={32} />
              </div>
              <div className="opencode-model-info">
                <h3>AI Model</h3>
                <span className="model-name">{openCodeConfig.model}</span>
              </div>
            </div>
            <div className="opencode-model-stats">
              <div className="model-stat">
                <span className="stat-label">Editor</span>
                <span className="stat-value">{openCodeConfig.editor}</span>
              </div>
              <div className="model-stat">
                <span className="stat-label">Skills</span>
                <span className="stat-value">{openCodeConfig.skills.length}</span>
              </div>
              <div className="model-stat">
                <span className="stat-label">Features</span>
                <span className="stat-value">{openCodeConfig.features.length}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="opencode-card opencode-skills-card"
          >
            <h3 className="opencode-card-title">
              <Zap size={20} />
              Loaded Skills
            </h3>
            <div className="opencode-skills-grid">
              {openCodeConfig.skills.map((skill, index) => {
                const Icon = skillIcons[skill] || Code2;
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="opencode-skill-tag"
                  >
                    <Icon size={14} />
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Row - Key Features Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="opencode-card opencode-features-card-full"
          >
            <h3 className="opencode-card-title">
              <Brain size={20} />
              Key Features
            </h3>
            <div className="opencode-features-grid-full">
              {openCodeConfig.features.map((feature, index) => {
                const Icon = featureIcons[feature] || Zap;
                return (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="opencode-feature-tag"
                  >
                    <Icon size={14} />
                    {feature}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="opencode-cta"
        >
          <a 
            href="https://opencode.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Brain size={18} />
            Try OpenCode
          </a>
        </motion.div>
      </div>
    </section>
  );
}
