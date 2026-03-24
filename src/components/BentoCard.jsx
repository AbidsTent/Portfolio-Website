import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Grid sizing for different card types
const sizeStyles = {
  large: 'md:col-span-2 md:row-span-2',
  medium: 'md:col-span-1 md:row-span-2',
  small: 'md:col-span-1 md:row-span-1',
};

export default function BentoCard({ project, index }) {
  const Icon = project.icon;
  const sizeClass = sizeStyles[project.size] || 'md:col-span-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl glass-card ${sizeClass} min-h-[280px] hover:scale-[1.02] transition-all duration-500`}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
        {/* Header with icon and links */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-surface-light border border-white/5 group-hover:border-primary/30 transition-colors">
            <Icon className="w-6 h-6 text-primary-light" />
          </div>

          {/* Links - visible on hover */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <IconButton href={project.github} icon={Github} label="View GitHub" />
            <IconButton href={project.link} icon={ExternalLink} label="View Live" />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2 group-hover:text-primary-light transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm md:text-base mb-4 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-surface-light text-text-secondary border border-white/5 group-hover:border-primary/20 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}

// Small icon button for links
function IconButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg bg-surface-light hover:bg-primary/20 transition-colors"
      aria-label={label}
    >
      <Icon className="w-4 h-4 text-text-secondary hover:text-text-primary" />
    </a>
  );
}
