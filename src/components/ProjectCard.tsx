import { motion } from 'framer-motion';
import { Terminal, Cpu, Eye, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const languageColors: Record<string, string> = {
  Python: '#3776ab',
  Rust: '#dea584',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
    >
      <div className="project-header">
        <div className="project-icon">
          {project.category === 'CLI Tool' && <Terminal size={20} />}
          {project.category === 'Computer Vision' && <Eye size={20} />}
          {project.category === 'Systems' && <Cpu size={20} />}
          {project.category === 'AI/ML' && <span>🤖</span>}
          {project.category === 'GUI App' && <span>🪟</span>}
        </div>
        <span className="project-category">{project.category}</span>
      </div>

      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-footer">
        <div className="project-meta">
          <span
            className="language-badge"
            style={{ '--lang-color': languageColors[project.language] || '#888' } as React.CSSProperties}
          >
            {project.language}
          </span>
        </div>

        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label="View on GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="View live"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
