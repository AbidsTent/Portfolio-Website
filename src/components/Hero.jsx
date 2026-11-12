import { ArrowDown } from 'lucide-react';
import { heroData, socialLinks } from '../content/profile.js';
import Container from './layout/Container.jsx';
import ExternalLink from './ui/ExternalLink.jsx';

export default function Hero() {
  return (
    <section id="hero" tabIndex={-1} className="site-section hero">
      <Container width="narrow" className="hero-inner">
        <h1>{heroData.name}</h1>
        <p className="hero-headline">{heroData.headline}</p>
        <p className="hero-intro">{heroData.intro}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View projects <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
        <div className="social-links">
          {socialLinks.filter(social => social.name !== 'Email').map(({ name, url, icon: Icon }) => (
            <ExternalLink key={name} href={url} aria-label={name}>
              <Icon size={20} aria-hidden="true" />
            </ExternalLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
