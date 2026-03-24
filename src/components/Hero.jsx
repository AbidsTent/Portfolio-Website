import { motion } from 'framer-motion';
import { heroData, socialLinks } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

// Animation settings
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient orbs */}
      <GradientOrb position="top-left" color="bg-primary/20" />
      <GradientOrb position="bottom-right" color="bg-accent/20" />

      {/* Content */}
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Greeting */}
        <motion.p variants={itemAnimation} className="text-text-muted text-lg mb-2">
          {heroData.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1 variants={itemAnimation} className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4">
          <span className="gradient-text">{heroData.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2 variants={itemAnimation} className="text-2xl sm:text-3xl font-medium text-text-primary mb-3">
          {heroData.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p variants={itemAnimation} className="text-accent text-lg mb-6">
          {heroData.subtitle}
        </motion.p>

        {/* Bio */}
        <motion.p variants={itemAnimation} className="text-text-secondary max-w-2xl mx-auto mb-8">
          {heroData.bio}
        </motion.p>

        {/* Social links */}
        <motion.div variants={itemAnimation} className="flex justify-center gap-4 mb-10">
          {socialLinks.map(social => (
            <SocialLink key={social.name} social={social} />
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Animated gradient orb background
function GradientOrb({ position, color }) {
  const positionClass = position === 'top-left'
    ? 'top-1/4 -left-32'
    : 'bottom-1/4 -right-32';

  const animation = position === 'top-left'
    ? { x: [0, 50, 0], y: [0, 30, 0] }
    : { x: [0, -50, 0], y: [0, -30, 0] };

  return (
    <motion.div
      className={`absolute ${positionClass} w-96 h-96 ${color} rounded-full blur-[128px]`}
      animate={animation}
      transition={{ duration: position === 'top-left' ? 8 : 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// Social media link button
function SocialLink({ social }) {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`p-3 rounded-xl bg-surface border border-white/5 text-text-secondary ${social.color} transition-all hover:border-white/10`}
      aria-label={social.name}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}
