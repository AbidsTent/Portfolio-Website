import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { background } from '../content/profile.js';
import Container from './layout/Container.jsx';

export default function Experience() {
  return (
    <section id="experience" tabIndex={-1} className="site-section">
      <Container>
        <h2 className="section-heading">Experience &amp; education</h2>
        <div className="experience-grid">
          {background.map(({ type, title, context, period, description }) => {
            const Icon = type === 'Education' ? GraduationCap : BriefcaseBusiness;
            return (
              <article key={type} className="experience-card">
                <div className="experience-meta">
                  <span><Icon size={19} aria-hidden="true" /> {type}</span>
                  <span>{period}</span>
                </div>
                <h3>{title}</h3>
                {context && <p className="experience-context">{context}</p>}
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
