import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="skill-item"
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
          className="skill-bar-fill"
        />
      </div>
    </motion.div>
  );
}
