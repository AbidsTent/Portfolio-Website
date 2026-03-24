import { motion } from 'framer-motion';
import { skills, categoryColors, badgeColors } from '../data/portfolioData';

// Get unique categories from skills
const categories = [...new Set(skills.map(skill => skill.category))];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <SkillCategory
              key={category}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual skill category card
function SkillCategory({ category, index }) {
  const skillsInCategory = skills.filter(skill => skill.category === category);
  const gradientClass = categoryColors[category] || 'from-primary/10 to-accent/10';
  const badgeClass = badgeColors[category] || 'text-text-secondary border-white/10 bg-white/5';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden group"
    >
      {/* Hover gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Category title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2">
          {skillsInCategory.map((skill, skillIndex) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              badgeClass={badgeClass}
              delay={index * 0.1 + skillIndex * 0.05}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Individual skill badge
function SkillBadge({ skill, badgeClass, delay }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-default ${badgeClass}`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{skill.name}</span>
    </motion.div>
  );
}
