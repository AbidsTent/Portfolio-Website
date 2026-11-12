import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../content/profile.js';
import Container from './layout/Container.jsx';
import ExternalLink from './ui/ExternalLink.jsx';

const email = socialLinks.find(social => social.name === 'Email');

export default function Contact() {
  return (
    <section id="contact" tabIndex={-1} className="site-section contact">
      <Container width="narrow" className="section-copy">
        <h2>Contact</h2>
        <p>I'm open to discussing projects, opportunities, and collaborations.</p>
        <div className="contact-actions">
          <a href={email.url} className="btn-primary">
            Email me <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          {socialLinks.filter(social => social !== email).map(({ name, url, icon: Icon }) => (
            <ExternalLink key={name} href={url} className="btn-secondary">
              <Icon size={17} aria-hidden="true" /> {name}
            </ExternalLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
