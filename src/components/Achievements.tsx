import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import { achievements } from '../data/projects';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.png';

const imageMap: Record<string, string> = {
  '/src/assets/image1.jpg': image1,
  '/src/assets/image2.png': image2,
};

export function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-center"
        >
          <span className="section-label">Accomplishments</span>
          <h2 className="section-title">
            Coding <span className="gradient-text">Olympiad</span> Champion
          </h2>
          <p className="section-description">
            At just 12 years old, I&apos;ve already won 2 coding olympiads, competing against 
            talented programmers and demonstrating exceptional problem-solving abilities.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="achievement-card"
            >
              <div className="achievement-image-wrapper">
                <div className="achievement-image-container">
                  <img
                    src={imageMap[achievement.image]}
                    alt={achievement.title}
                    className="achievement-image"
                  />
                  <div className="achievement-overlay" />
                </div>
                <div className="achievement-badge">
                  {index === 0 ? <Trophy size={24} /> : <Award size={24} />}
                </div>
              </div>
              
              <div className="achievement-content">
                <div className="achievement-year">
                  <Star size={14} />
                  {achievement.year}
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="achievements-stats"
        >
          <div className="achievement-stat-item">
            <span className="achievement-stat-value">2</span>
            <span className="achievement-stat-label">Olympiad Wins</span>
          </div>
          <div className="achievement-stat-divider" />
          <div className="achievement-stat-item">
            <span className="achievement-stat-value">12</span>
            <span className="achievement-stat-label">Years Old</span>
          </div>
          <div className="achievement-stat-divider" />
          <div className="achievement-stat-item">
            <span className="achievement-stat-value">10</span>
            <span className="achievement-stat-label">Projects Built</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
