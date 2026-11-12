import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { heroData, resumeUrl, socialLinks } from '../content/profile.js';
import { featuredProjects } from '../content/projects.js';
import { projectHref } from '../utils/routes.js';
import Container from './layout/Container.jsx';
import ProjectIcon from './projects/ProjectIcon.jsx';
import ExternalLink from './ui/ExternalLink.jsx';

export default function Hero() {
  return (
    <section id="hero" tabIndex={-1} className="site-section hero">
      <Container className="hero-inner">
        <div className="hero-copy">
          <p className="hero-name">{heroData.name}</p>
          <h1>{heroData.headline[0]} <span>{heroData.headline[1]}</span></h1>
          <p className="hero-identity">
            {heroData.role}<span className="hero-identity-divider"> | </span>
            <span className="hero-focus">{heroData.focus}</span>
          </p>
          <p className="hero-intro">{heroData.intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
          </div>
          <div className="social-links">
            {socialLinks.filter(social => social.name !== 'Email').map(({ name, url, icon: Icon }) => (
              <ExternalLink key={name} href={url}>
                <Icon size={17} aria-hidden="true" /> {name}
              </ExternalLink>
            ))}
            <ExternalLink href={resumeUrl}>
              <FileText size={17} aria-hidden="true" /> View Résumé (PDF)
            </ExternalLink>
          </div>
        </div>
        <nav className="hero-projects" aria-label="Featured project shortcuts">
          <p className="hero-projects-label">Explore the work</p>
          <ul>
            {featuredProjects.map(project => (
              <li key={project.id}>
                <a href={projectHref(project)}>
                  <span className="hero-project-icon"><ProjectIcon artwork={project.artwork} size={19} /></span>
                  <span>{project.title}</span>
                  <ArrowUpRight size={16} className="hero-project-arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
