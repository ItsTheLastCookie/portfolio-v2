import { motion } from 'framer-motion';
import { skills } from '../data/projects';
import { SkillBar } from './SkillBar';

export function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Technologies I work with on a daily basis
          </p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="skills-category"
            >
              <h3 className="skills-category-title">{category}</h3>
              <div className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={catIndex * 3 + index}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
