import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './icons';
import { personalInfo } from '../data/projects';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-description">
            Have a project in mind? Let&apos;s discuss how I can help bring it to life.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-info"
          >
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <GitHubIcon size={24} />
              </div>
              <div className="contact-link-content">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">@{personalInfo.github}</span>
              </div>
              <ArrowUpRight size={18} className="contact-link-arrow" />
            </a>

            <a href={`mailto:${personalInfo.email}`} className="contact-link">
              <div className="contact-link-icon">
                <Mail size={24} />
              </div>
              <div className="contact-link-content">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">{personalInfo.email}</span>
              </div>
              <ArrowUpRight size={18} className="contact-link-arrow" />
            </a>

            <div className="contact-link contact-link-static">
              <div className="contact-link-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-link-content">
                <span className="contact-link-label">Location</span>
                <span className="contact-link-value">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-cta"
          >
            <div className="cta-card">
              <h3>Ready to start?</h3>
              <p>
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I&apos;ll try my best
                to get back to you!
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary btn-large"
              >
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
