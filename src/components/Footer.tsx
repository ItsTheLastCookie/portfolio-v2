import { GitHubIcon, HeartIcon } from './icons';
import { personalInfo } from '../data/projects';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">&lt;Adam/&gt;</span>
            <p className="footer-tagline">{personalInfo.tagline}</p>
          </div>

          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#contact" className="footer-link">Contact</a>
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <GitHubIcon size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. Built with{' '}
            <span style={{ color: '#ff3366', display: 'inline-flex', alignItems: 'center' }}>
              <HeartIcon size={14} />
            </span>
            {' '}and React
          </p>
        </div>
      </div>
    </footer>
  );
}
