import { motion } from 'framer-motion';
import { socialLinks, heroData } from '../data/portfolioData';
import { ArrowUpRight, Heart } from 'lucide-react';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            I'm open to discussing new projects, opportunities, or collaborations.
          </p>

          <motion.a
            href="mailto:abidsharier29@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white font-medium transition-all glow"
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map(social => (
            <SocialButton key={social.name} social={social} />
          ))}
        </motion.div>

        {/* Footer bottom */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm flex items-center gap-1">
              © {currentYear} {heroData.name}. Made with{' '}
              <Heart className="w-3 h-3 text-red-400" /> using React
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-text-muted hover:text-text-primary text-sm transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social media button
function SocialButton({ social }) {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-text-secondary hover:text-text-primary transition-all"
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium hidden sm:inline">{social.name}</span>
    </motion.a>
  );
}
